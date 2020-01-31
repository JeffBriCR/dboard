/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Heading } from '@theme-ui/components'
import ApprovedItem from 'components/ApprovedItem'
import RejectedItem from 'components/RejectedItem'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Layout from 'components/Layout'

const APPROVED_SUBSCRIPTION = gql`
  subscription Approved {
    actions(where: { state: { _eq: approved } }) {
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
const REJECTED_SUBSCRIPTION = gql`
  subscription Approved {
    actions(where: { state: { _eq: rejected } }) {
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

export default function AppovedRejected() {
  const { data: approvedProposals } = useSubscription(APPROVED_SUBSCRIPTION)
  const { data: rejectedProposals } = useSubscription(REJECTED_SUBSCRIPTION)

  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: 'column',
        }}
      >
        <Heading variant="heading.title" as="h2">
          Actions Aproved
        </Heading>

        {approvedProposals?.actions.map((action: any) => (
          <ApprovedItem action={action} key={action.id} />
        ))}
        <Heading variant="heading.title" as="h2">
          Actions rejected
        </Heading>
        {rejectedProposals?.actions.map((action: any) => (
          <RejectedItem action={action} key={action.id} />
        ))}
      </Flex>
    </Layout>
  )
}
