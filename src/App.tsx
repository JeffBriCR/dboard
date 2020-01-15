/** @jsx jsx */
import { jsx } from 'theme-ui'
import AppProvider from 'components/AppProvider'
import Home from 'routes/Home'
import Layout from 'components/Layout'
import { Global } from '@emotion/core'

function App() {
  return (
    <div>
      <Global
        styles={{
          body: {
            margin: 0,
          },
        }}
      />
      <AppProvider>
        <Layout>
          <Home />
        </Layout>
      </AppProvider>
    </div>
  )
}

export default App
