/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'
// import PostItem from 'components/PostItem'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Layout from 'components/Layout'
import ProposalItem from 'components/ProposalItem'

const SUBSCRIPTION = gql`
  subscription Proposals($dateStarts: date) {
    actions(where: { state: { _eq: proposed }, voting_starts: { _gt: $dateStarts } }) {
      created_at
      creator
      description
      id
      title
      updated_at
      state
      voting_ends
      voting_starts
      budget
      kpi
    }
  }
`

export default function Proposals() {
  const { data } = useSubscription(SUBSCRIPTION, { variables: { dateStarts: '2020-01-29' } })

  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: 'column',
        }}
      >
        {data?.actions.map((action: any) => (
          <ProposalItem action={action} key={action.id} />
        ))}
      </Flex>
    </Layout>
  )
}
