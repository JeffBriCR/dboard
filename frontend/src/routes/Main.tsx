/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'
// import { useLocation } from 'react-router-dom'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Discussions from 'routes/Discussions'
import Actions from 'routes/Actions'
import gql from 'graphql-tag'
import {useSubscription} from '@apollo/react-hooks'
import CreateDiscussionForm from 'components/CreateDiscussionForm'

const SUBSCRIPTION = gql`
  subscription MyQuery {
    users {
      account_name
    }
  }
`;

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
        <Nav />

        <br/>
        <CreateDiscussionForm/>

        <br/>
        <h4>Discussions</h4>
        <Discussions/>
        <br/>
        <h4>Actions</h4>
        <Actions/>
        <br/>
        <h4>User</h4>
        <pre sx={{color:'green', background:'rgba(0,0,0,.8)'}}>
          {JSON.stringify(data, null,2)}
        </pre>
        {/* {location.pathname === '/' || location.pathname === '/discussions' || '' ? <Discutions /> : <Actions />} */}
      </Flex>
    </Layout>
  )
}
