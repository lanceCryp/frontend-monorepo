'use client'

import { useMandatoryContext } from '@repo/lib/shared/utils/contexts'
import { createContext, PropsWithChildren } from 'react'
import { FxRates, SupportedCurrency } from '../utils/currencies'

export type UseFxRatesResult = ReturnType<typeof useFxRatesLogic>
export const FxRatesContext = createContext<UseFxRatesResult | null>(null)

export function useFxRatesLogic(rates: FxRates | undefined) {
  const hasFxRates = !!rates

  function getFxRate(currency: SupportedCurrency): number {
    if (!rates) return 1
    return rates[currency]?.value || 1
  }

  return { hasFxRates, getFxRate }
}

export function FiatFxRatesProvider({
  children,
  data,
}: PropsWithChildren & { data: FxRates | undefined }) {
  const hook = useFxRatesLogic(data)
  return <FxRatesContext.Provider value={hook}>{children}</FxRatesContext.Provider>
}

export const useFxRates = (): UseFxRatesResult => useMandatoryContext(FxRatesContext, 'FxRates')
