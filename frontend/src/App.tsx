/** @jsx jsx */
import { jsx } from 'theme-ui'
import AppProvider from 'components/AppProvider'
import Main from 'routes/Main'
import { Global } from '@emotion/core'
import { Switch, Route } from 'react-router-dom'

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
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/actions" component={Main} />
          <Route path="/discussions" component={Main} />
        </Switch>
      </AppProvider>
    </div>
  )
}

export default App
