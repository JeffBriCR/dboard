/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Flex } from '@theme-ui/components'
// import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import usePosts, { Post } from 'hooks/usePosts'
import Layout from 'components/Layout'
import Nav from 'components/Nav'

export default function Main() {
  // const isActions = useRouteMatch('/actions')
  const { posts } = usePosts()

  // useEffect(()=>{
  //   isActions && filterPosts('actions')
  // },[isActions, filterPosts])

  return (
    <Layout>
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
                    to={`/discussions/${post.slug}`}
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
    </Layout>
  )
}
