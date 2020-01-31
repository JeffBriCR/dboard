/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'
// import PostItem from 'components/PostItem'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ProposalItem from 'components/ProposalItem'
import CreateActionForm from 'components/CreateActionForm'

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

export default function ProposalsMain() {
  const { data } = useSubscription(SUBSCRIPTION, { variables: { dateStarts: '2020-01-29' } })

  return (
    <Flex
      sx={{
        flexDirection: 'column',
      }}
    >
      <CreateActionForm />
      {data?.actions.map((action: any) => (
        <ProposalItem action={action} key={action.id} />
      ))}
    </Flex>
  )
}
