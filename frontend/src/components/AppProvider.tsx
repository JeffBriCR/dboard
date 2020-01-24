/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { TransitProvider } from '@blockmatic/eosio-hooks'
import theme from 'theme'
import { BrowserRouter } from 'react-router-dom'
import { transitConfig } from 'config/config'
import GraphQLProvider from 'components/GraphQLProvider'
import { AccountNameProvider } from 'hooks/useAccountName'

type AppProviderProps = {
  children: JSX.Element
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <GraphQLProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <TransitProvider config={transitConfig}>
            <AccountNameProvider>{children}</AccountNameProvider>
          </TransitProvider>
        </ThemeProvider>
      </BrowserRouter>
    </GraphQLProvider>
  )
}
