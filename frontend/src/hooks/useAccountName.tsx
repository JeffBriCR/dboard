import React, {createContext, useContext} from 'react'
import { OneOrMoreChildren } from 'types'
import {useTransitState} from '@blockmatic/eosio-hooks'
import get from 'lodash.get' // TODO: remove this hack

const AccountNameContext = createContext<string|null>(null)

export function AccountNameProvider({children}:OneOrMoreChildren){
  const { wallet } = useTransitState()
  const account_name = get(wallet,'accountInfo.account_name') || null
  return (
    <AccountNameContext.Provider value={account_name}>
      {children}
    </AccountNameContext.Provider>
  )
}

export default function useAccountName() {
  const context = useContext(AccountNameContext)

  if (context === undefined) {
    throw new Error('`useAccountName` hook must be used within a `AccountNameProvider` component')
  }

  return context
}
