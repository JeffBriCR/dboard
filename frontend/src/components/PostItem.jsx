/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Flex } from '@theme-ui/components'
import { Link } from 'react-router-dom'
// import usePosts, { Post } from 'hooks/usePosts'
import { useEffect } from 'react'

export default function PostItem({ post }) {
  return (
    <li
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
          to={`${post.category}/${post.slug}`}
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
  )
}
