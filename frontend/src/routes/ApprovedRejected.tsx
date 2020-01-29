/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'
// import PostItem from 'components/PostItem'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

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
    }
  }
`

export default function AppovedRejected() {
  const { data: approvedProposals } = useSubscription(APPROVED_SUBSCRIPTION)
  const { data: rejectedProposals } = useSubscription(REJECTED_SUBSCRIPTION)
  return (
    <Flex>
      <ul
        sx={{
          listStyle: 'none',
          m: 0,
          px: 3,
          py: 4,
        }}
      >
        {/* {posts.map(post => (
          <PostItem post={post} key={post.id} />
        ))} */}
        <pre sx={{ color: 'purple' }}>{JSON.stringify(approvedProposals, null, 2)}</pre>
        <br />

        <pre sx={{ color: 'brown' }}>{JSON.stringify(rejectedProposals, null, 2)}</pre>
      </ul>
    </Flex>
  )
}
