'use client'

import { useTransactionSteps } from '@repo/lib/modules/transactions/transaction-steps/useTransactionSteps'
import { PoolListItem } from '../../pool.types'
import { useClaimAllRewardsSteps } from './useClaimAllRewardsSteps'
import { useClaimsData } from './useClaimsData'
import { useUserAccount } from '@repo/lib/modules/web3/UserAccountProvider'
import { useDisclosure } from '@chakra-ui/hooks'
import { isDisabledWithReason } from '@repo/lib/shared/utils/functions/isDisabledWithReason'
import { LABELS } from '@repo/lib/shared/labels'
import { createContext, PropsWithChildren } from 'react'
import { useMandatoryContext } from '@repo/lib/shared/utils/contexts'
import { Pool } from '../../pool.types'

export type ClaimablePool = Pool | PoolListItem

export function useClaimLogic(pools: ClaimablePool[]) {
  const { isConnected } = useUserAccount()
  const previewModalDisclosure = useDisclosure()
  const { isDisabled, disabledReason } = isDisabledWithReason([
    !isConnected,
    LABELS.walletNotConnected,
  ])

  const claimsData = useClaimsData(pools)

  const {
    claimableBalancesQuery,
    balTokenRewardsQuery,
    isLoading: isLoadingData,
    ...claimsState
  } = claimsData

  const { steps, isLoading: isLoadingSteps } = useClaimAllRewardsSteps({
    pools,
    claimableBalancesQuery,
    balTokenRewardsQuery,
  })
  const transactionSteps = useTransactionSteps(steps, isLoadingSteps)

  const claimTxHash = transactionSteps.lastTransaction?.result?.data?.transactionHash

  return {
    isLoading: isLoadingData || isLoadingSteps,
    transactionSteps,
    claimTxHash,
    isDisabled,
    disabledReason,
    previewModalDisclosure,
    ...claimsState,
  }
}

export type UseClaimProviderResponse = ReturnType<typeof useClaimLogic>
export const ClaimProviderContext = createContext<UseClaimProviderResponse | null>(null)

type Props = PropsWithChildren<{
  pools: ClaimablePool[]
}>

export function ClaimProvider({ pools, children }: Props) {
  const hook = useClaimLogic(pools)
  return <ClaimProviderContext.Provider value={hook}>{children}</ClaimProviderContext.Provider>
}

export const useClaim = (): UseClaimProviderResponse =>
  useMandatoryContext(ClaimProviderContext, 'Claim')
