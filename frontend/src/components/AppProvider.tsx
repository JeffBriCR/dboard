/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { TransitProvider } from '@blockmatic/eosio-hooks'
import theme from 'theme'
import { BrowserRouter } from 'react-router-dom'
import { transitConfig } from 'config/config'
// does not currently work with MDX v1
// import { importMDX } from 'mdx.macro'
// const Demo = importMDX.sync('./demo.mdx')

type AppProviderProps = {
  children: JSX.Element
}
export default function AppProvider({ children }: AppProviderProps) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <TransitProvider config={transitConfig}>{children}</TransitProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
