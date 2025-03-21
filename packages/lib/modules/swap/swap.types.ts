import {
  SorGetSwapPathsQuery,
  GqlChain,
  GqlSorSwapType,
} from '@repo/lib/shared/services/api/generated/graphql'
import {
  AuraBalSwapQueryOutput,
  ExactInQueryOutput,
  ExactOutQueryOutput,
  Permit2,
  Swap,
} from '@balancer/sdk'
import { Address, Hex } from 'viem'

export type SwapTokenInput = {
  address: Address
  amount: string
  scaledAmount: bigint
}

export type SwapState = {
  tokenIn: SwapTokenInput
  tokenOut: SwapTokenInput
  swapType: GqlSorSwapType
  selectedChain: GqlChain
}

export type SimulateSwapInputs = {
  chain: GqlChain
  tokenIn: Address
  tokenOut: Address
  swapType: GqlSorSwapType
  swapAmount: string
  permit2?: Permit2
  poolIds?: string[]
}

type ApiSwapQuery = SorGetSwapPathsQuery['swaps']

export type SimulateSwapResponse = Pick<
  ApiSwapQuery,
  'effectivePrice' | 'effectivePriceReversed' | 'returnAmount' | 'swapType'
>

export interface SdkSimulateSwapResponse extends SimulateSwapResponse {
  swap: Swap
  queryOutput: ExactInQueryOutput | ExactOutQueryOutput
  protocolVersion: number
  hopCount: number
}

export interface SimulateSinglePoolSwapResponse extends SimulateSwapResponse {
  swap: Swap
  queryOutput: ExactInQueryOutput | ExactOutQueryOutput
}

export interface AuraBalSimulateSwapResponse extends SimulateSwapResponse {
  queryOutput: AuraBalSwapQueryOutput
}

export interface BuildSwapInputs extends SwapState {
  account: Address
  slippagePercent: string
  simulateResponse: SimulateSwapResponse
  wethIsEth: boolean
  relayerApprovalSignature?: Hex
  permit2?: Permit2 // only used by v3 swaps
}

export interface SdkBuildSwapInputs extends BuildSwapInputs {
  simulateResponse: SdkSimulateSwapResponse
}

export interface AuraBalBuildSwapInputs extends BuildSwapInputs {
  simulateResponse: AuraBalSimulateSwapResponse
}

export enum SupportedWrapHandler {
  LIDO = 'LIDO',
}

export const OWrapType = {
  WRAP: 'wrap',
  UNWRAP: 'unwrap',
} as const

export type WrapType = (typeof OWrapType)[keyof typeof OWrapType]

export const OSwapAction = {
  ...OWrapType,
  SWAP: 'swap',
} as const

export type SwapAction = (typeof OSwapAction)[keyof typeof OSwapAction]
