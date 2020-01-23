/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from '@theme-ui/components'
// import { Link } from 'react-router-dom'
import usePosts, { Post } from 'hooks/usePosts'
import { useEffect } from 'react'
import PostItems from 'components/PostItems'

export default function Discutions() {
  //  const isActions = 'discussions'
  const { posts, filterPosts } = usePosts()
  useEffect(() => {
    filterPosts('discussions')
  }, [])
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
        {posts.map((post: Post) => (
          <PostItems post={post} key={post.id} />
        ))}
      </ul>
    </Flex>
  )
}
