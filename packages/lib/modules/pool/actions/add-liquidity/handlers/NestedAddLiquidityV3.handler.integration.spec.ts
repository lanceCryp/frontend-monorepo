import { sepoliaCompositeRouterBoosted } from '@repo/lib/debug-helpers'
import { HumanTokenAmountWithAddress } from '@repo/lib/modules/tokens/token.types'
import { GqlPoolElement } from '@repo/lib/shared/services/api/generated/graphql'
import { defaultTestUserAccount } from '@repo/test/anvil/anvil-setup'
import { sepoliaTestPublicClient } from '@repo/test/utils/wagmi/wagmi-test-clients'
import { Pool } from '../../../pool.types'
import { NestedAddLiquidityV3Handler } from './NestedAddLiquidityV3.handler'
import { selectAddLiquidityHandler } from './selectAddLiquidityHandler'

function selectNestedHandler(pool: Pool) {
  return selectAddLiquidityHandler(pool) as NestedAddLiquidityV3Handler
}

const wethAddress = '0x7b79995e5f793a07bc00c21412e50ecae098e7f9'
const usdcAaveAddress = '0x94a9d9ac8a22534e3faca9f4e7f2e2cf85d5e4c8' // Sepolia underlying usdcAave faucet address (temporary until we have the real one)
const usdtAaveAddress = '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0' // Sepolia underlying usdcAave faucet address (temporary until we have the real one)

// const poolId = '0x0270daf4ee12ccb1abc8aa365054eecb1b7f4f6b' // Boosted Aave USDC-USDT / WETH
// const nestedPool = await getPoolMock(poolId, GqlChain.Sepolia)
const nestedPool = {} as GqlPoolElement

// Unskip when sepolia V3 pools are available in production api
describe.skip('When adding nested liquidity for a weighted pool', () => {
  test('has zero price impact', async () => {
    const handler = selectNestedHandler(nestedPool)

    const humanAmountsIn: HumanTokenAmountWithAddress[] = [
      { humanAmount: '100', tokenAddress: usdcAaveAddress, symbol: 'USDC' },
    ]
    const priceImpact = await handler.getPriceImpact(humanAmountsIn)
    expect(priceImpact).toBeGreaterThan(0)
  })

  test('with single token input', async () => {
    const handler = selectNestedHandler(nestedPool)

    const humanAmountsIn: HumanTokenAmountWithAddress[] = [
      { humanAmount: '1', tokenAddress: usdcAaveAddress, symbol: 'USDC' },
    ]

    const result = await handler.simulate(humanAmountsIn, defaultTestUserAccount)

    expect(result.bptOut.amount).toBeGreaterThan(0n)
  })

  test('with multiple token input', async () => {
    const handler = selectNestedHandler(nestedPool)

    const humanAmountsIn: HumanTokenAmountWithAddress[] = [
      { humanAmount: '0.1', tokenAddress: wethAddress, symbol: 'WETH' },
      { humanAmount: '0.1', tokenAddress: usdcAaveAddress, symbol: 'USDC' },
      { humanAmount: '0.1', tokenAddress: usdtAaveAddress, symbol: 'USDT' },
    ]

    const result = await handler.simulate(humanAmountsIn, defaultTestUserAccount)

    expect(result.bptOut.amount).toBeGreaterThan(0n)
  })

  test('builds Tx Config', async () => {
    const humanAmountsIn: HumanTokenAmountWithAddress[] = [
      { humanAmount: '1', tokenAddress: usdcAaveAddress, symbol: 'USDC' },
    ]

    const handler = selectNestedHandler(nestedPool)

    // Store query response in handler instance
    const queryOutput = await handler.simulate(humanAmountsIn, defaultTestUserAccount)

    const result = await handler.buildCallData({
      humanAmountsIn,
      account: defaultTestUserAccount,
      slippagePercent: '0.2',
      queryOutput: queryOutput,
    })

    expect(result.to).toBe(sepoliaCompositeRouterBoosted)
    expect(result.data).toBeDefined()
    expect(result.account).toBe(defaultTestUserAccount)

    const { account, data, to, value } = result

    const hash = await sepoliaTestPublicClient.sendTransaction({
      account,
      chain: sepoliaTestPublicClient.chain,
      data,
      to,
      value,
    })

    const transactionReceipt = await sepoliaTestPublicClient.waitForTransactionReceipt({
      hash,
    })

    expect(transactionReceipt).toBeDefined()
  })
})
