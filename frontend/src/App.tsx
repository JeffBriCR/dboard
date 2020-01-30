/** @jsx jsx */
import { jsx } from 'theme-ui'
import AppProvider from 'components/AppProvider'
import Main from 'routes/Main'
import { Global } from '@emotion/core'
import { Switch, Route } from 'react-router-dom'
import Proposals from 'routes/Proposals'
import ApprovedRejected from 'routes/ApprovedRejected'
import Voting from 'routes/Voting'

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
          <Route path="/proposals" component={Proposals} />
          <Route path="/approvedrejected" component={ApprovedRejected} />
          <Route path="/voting" component={Voting} />
        </Switch>
      </AppProvider>
    </div>
  )
}

export default App
