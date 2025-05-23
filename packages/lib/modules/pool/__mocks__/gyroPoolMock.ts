import { GqlPoolElement } from '@repo/lib/shared/services/api/generated/graphql'

export const gyroPoolMock: GqlPoolElement = {
  id: '0xdac42eeb17758daa38caf9a3540c808247527ae3000200000000000000000a2b',
  address: '0xdac42eeb17758daa38caf9a3540c808247527ae3',
  name: 'Gyroscope 2-CLP USDC/DAI',
  version: 1,
  protocolVersion: 2,
  owner: '0x0000000000000000000000000000000000000000',
  decimals: 18,
  factory: '0x5d8545a7330245150be0ce88f8afb0edc41dfc34',
  symbol: '2CLP-USDC-DAI',
  createTime: 1674129549,
  type: 'GYRO',
  chain: 'POLYGON',
  dynamicData: {
    poolId: '0xdac42eeb17758daa38caf9a3540c808247527ae3000200000000000000000a2b',
    swapEnabled: true,
    totalLiquidity: '68716.18',
    totalLiquidity24hAgo: '68694.33',
    totalShares: '27399007.10732548464064248',
    totalShares24hAgo: '27399007.10732548464064248',
    fees24h: '0.36',
    swapFee: '0.0002',
    volume24h: '1824.49',
    fees48h: '0.40',
    volume48h: '2000.12',
    lifetimeVolume: '1871294.62',
    lifetimeSwapFees: '374.26',
    holdersCount: '2526',
    swapsCount: '3768',
    sharePriceAth: '0.002507554488564517',
    sharePriceAthTimestamp: 1707782400,
    sharePriceAtl: '0.002496992319867819',
    sharePriceAtlTimestamp: 1674518400,
    totalLiquidityAth: '100099.83',
    totalLiquidityAthTimestamp: 1697846400,
    totalLiquidityAtl: '12.09',
    totalLiquidityAtlTimestamp: 1674172800,
    volume24hAth: '255527.29',
    volume24hAthTimestamp: 1678492800,
    volume24hAtl: '0.00',
    volume24hAtlTimestamp: 1674172800,
    fees24hAth: '51.11',
    fees24hAthTimestamp: 1678492800,
    fees24hAtl: '0.00',
    fees24hAtlTimestamp: 1674172800,
    yieldCapture24h: '0.00',
    yieldCapture48h: '0.00',
    apr: {
      hasRewardApr: false,
      thirdPartyApr: { total: '0' },
      nativeRewardApr: { total: '0' },
      swapApr: '0.001938225906294751',
      apr: { total: '0.001938225906294751' },
      items: [
        {
          id: '0xdac42eeb17758daa38caf9a3540c808247527ae3000200000000000000000a2b-swap-apr',
          title: 'Swap fees APR',
          apr: { total: '0.001938225906294751' },
          subItems: [],
        },
      ],
    },
  },
  displayTokens: [
    {
      id: '0xdac42eeb17758daa38caf9a3540c808247527ae3000200000000000000000a2b-0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      name: 'USD Coin (PoS)',
      weight: null,
      symbol: 'USDC',
      nestedTokens: null,
    },
    {
      id: '0xdac42eeb17758daa38caf9a3540c808247527ae3000200000000000000000a2b-0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      name: '(PoS) Dai Stablecoin',
      weight: null,
      symbol: 'DAI',
      nestedTokens: null,
    },
  ],
  staking: null,
  userBalance: {
    stakedBalance: '0',
    totalBalance: '0.0',
    walletBalance: '0',
    stakedBalanceUsd: 0,
    walletBalanceUsd: 0,
    totalBalanceUsd: 0,
  },
  alpha: '',
  beta: '',
  c: '',
  dSq: '',
  lambda: '',
  root3Alpha: '',
  s: '',
  sqrtAlpha: '0.997496867163000167',
  sqrtBeta: '1.002496882788171068',
  tauAlphaX: '',
  tauAlphaY: '',
  tauBetaX: '',
  tauBetaY: '',
  u: '',
  v: '',
  w: '',
  z: '',
  nestingType: 'NO_NESTING',
  poolTokens: [
    {
      id: '0xdac42eeb17758daa38caf9a3540c808247527ae3000200000000000000000a2b-0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      index: 0,
      name: 'USD Coin (PoS)',
      symbol: 'USDC',
      balance: '35493.026642',
      address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      priceRate: '1.0',
      decimals: 6,
      weight: null,
    },
    {
      id: '0xdac42eeb17758daa38caf9a3540c808247527ae3000200000000000000000a2b-0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      index: 1,
      name: '(PoS) Dai Stablecoin',
      symbol: 'DAI',
      balance: '33211.476744227281310818',
      address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      priceRate: '1.0',
      decimals: 18,
      weight: null,
    },
  ],
} as unknown as GqlPoolElement
