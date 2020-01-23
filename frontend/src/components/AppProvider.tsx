/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { TransitProvider } from '@blockmatic/eosio-hooks'
import theme from 'theme'
import { BrowserRouter } from 'react-router-dom'
import { transitConfig } from 'config/config'
import { PostsContextProvider } from 'hooks/usePosts'
import GraphQLProvider from 'components/GraphQLProvider'

type AppProviderProps = {
  children: JSX.Element
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <GraphQLProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <TransitProvider config={transitConfig}>
            <PostsContextProvider>{children}</PostsContextProvider>
          </TransitProvider>
        </ThemeProvider>
      </BrowserRouter>
    </GraphQLProvider>
  )
}
