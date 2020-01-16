/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Flex } from '@theme-ui/components'
import { Link } from 'react-router-dom'
import usePosts, { Post } from 'hooks/usePosts'
import Nav from 'components/Nav'

export default function Home() {
  const { posts } = usePosts()
  return (
    <Flex
      sx={{
        flexDirection: 'column',
      }}
    >
      <Nav />

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
            <li
              key={post.id}
              sx={{
                mb: 4,
              }}
            >
              <Styled.h2
                sx={{
                  m: 0,
                }}
              >
                <Link
                  to={post.slug}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    ':hover,:focus': {
                      color: 'primary',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {post.title}
                </Link>
              </Styled.h2>
              <small sx={{ fontWeight: 'bold' }}>{post.date}</small>
              <Styled.p>{post.excerpt}</Styled.p>
            </li>
          ))}
        </ul>
      </Flex>
    </Flex>
  )
}
