import { GetTokensQuery, GqlToken } from '@repo/lib/shared/services/api/generated/graphql'
import { Address, HumanAmount } from '@balancer/sdk'

export type TokenBase = Pick<GqlToken, 'address' | 'name' | 'symbol' | 'decimals' | 'chainId'>

export interface TokenAmount {
  address: string
  chainId: number
  decimals: number
  amount: bigint
  formatted: string
}

export interface TokenAmountHumanReadable {
  address: string
  amount: string
}

export type HumanTokenAmount = {
  humanAmount: HumanAmount | ''
  tokenAddress: Address
}

export type HumanTokenAmountWithAddress = {
  humanAmount: HumanAmount | ''
  tokenAddress: Address
  symbol: string
}

export interface TokenAmountScaled {
  address: string
  amount: bigint
}
export interface TokenBaseWithAmount extends TokenBase {
  amount: string
}

export type AmountHumanReadable = string
export type AmountScaled = bigint
export type AmountScaledString = string

export type BalanceMap = Map<string, AmountHumanReadable>

export interface AmountHumanReadableMap {
  [address: string]: AmountHumanReadable
}

export type ApiToken = Omit<GetTokensQuery['tokens'][0], '__typename'> & {
  index?: number // Only used in add/remove to have access to the wrapped token from the underlying token
  wrappedToken?: ApiToken // Only used in add/remove to have access to the wrapped token from the underlying token
  underlyingToken?: ApiToken
  weight?: string
}

export type BalanceForFn = (token: TokenBase | string) => TokenAmount | undefined
