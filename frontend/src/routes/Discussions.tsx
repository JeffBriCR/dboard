/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'
// import PostItem from 'components/PostItem'
import {useSubscription} from '@apollo/react-hooks'
import gql from 'graphql-tag'

const SUBSCRIPTION = gql`
  subscription Discussions {
    discussions {
      created_at
      creator
      description
      id
      title
      updated_at
    }
  }
`;


export default function Discutions() {
  const { data } = useSubscription(SUBSCRIPTION)
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
        <pre sx={{color:'blue'}}>
         { JSON.stringify(data,null,2)}
        </pre>
      </ul>
    </Flex>
  )
}
