/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'
// import PostItem from 'components/PostItem'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

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
    }
  }
`

export default function Proposals() {
  const { data } = useSubscription(SUBSCRIPTION, { variables: { dateStarts: '2020-01-29' } })
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
        <pre sx={{ color: 'purple' }}>{JSON.stringify(data, null, 2)}</pre>
      </ul>
    </Flex>
  )
}
