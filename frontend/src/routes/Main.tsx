/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'
// import { useLocation } from 'react-router-dom'
import Layout from 'components/Layout'
import Voting from 'routes/Voting'
import ApprovedRejected from 'routes/ApprovedRejected'

import gql from 'graphql-tag'
import { useSubscription } from '@apollo/react-hooks'
import CreateActionForm from 'components/CreateActionForm'

const SUBSCRIPTION = gql`
  subscription MyQuery {
    users {
      account_name
    }
  }
`

export default function Main() {
  // const location = useLocation()
  const { data } = useSubscription(SUBSCRIPTION)

  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: 'column',
        }}
      >
        <br />
        <CreateActionForm />
        <br />
        <br />
        <h4>ApprovedRejected</h4>
        <ApprovedRejected />
        <br />
        <h4>Voting</h4>
        <Voting />
        <br />
        <h4>User</h4>
        <pre sx={{ color: 'green', background: 'rgba(0,0,0,.8)' }}>{JSON.stringify(data, null, 2)}</pre>
        {/* {location.pathname === '/' || location.pathname === '/discussions' || '' ? <Discutions /> : <Actions />} */}
      </Flex>
    </Layout>
  )
}
