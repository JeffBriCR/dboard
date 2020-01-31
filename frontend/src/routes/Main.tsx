/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'
// import { useLocation } from 'react-router-dom'
import Layout from 'components/Layout'

import gql from 'graphql-tag'
import { useSubscription } from '@apollo/react-hooks'
import ProposalsMain from 'components/ProposalMain'

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
        <ProposalsMain />
        <h4>User</h4>
        <pre sx={{ color: 'green', background: 'rgba(0,0,0,.8)' }}>{JSON.stringify(data, null, 2)}</pre>
        {/* {location.pathname === '/' || location.pathname === '/discussions' || '' ? <Discutions /> : <Actions />} */}
      </Flex>
    </Layout>
  )
}
