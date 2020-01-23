import React, { useState, createContext, useContext } from 'react'
import { OneOrMoreChildren } from 'types'
export type Post = {
  id: string
  title: string
  date: string
  excerpt: string
  slug: string
  category: string
}

const allPosts: Post[] = [
  {
    id: 'one',
    title: 'one',
    date: 'one',
    excerpt: 'one',
    slug: 'one',
    category: 'discussions',
  },
  {
    id: 'two',
    title: 'two',
    date: 'two',
    excerpt: 'two',
    slug: 'two',
    category: 'actions',
  },
  {
    id: 'three',
    title: 'three',
    date: 'three',
    excerpt: 'three',
    slug: 'three',
    category: 'discussions',
  },
  {
    id: 'four',
    title: 'four',
    date: 'four',
    excerpt: 'four',
    slug: 'four',
    category: 'actions',
  },
  {
    id: 'five',
    title: 'five',
    date: 'five',
    excerpt: 'five',
    slug: 'five',
    category: 'discussions',
  },
  {
    id: 'six',
    title: 'six',
    date: 'six',
    excerpt: 'six',
    slug: 'six',
    category: 'actions',
  },
]

type PostsContextType = {
  posts: Post[]
  filterPosts: (category: string) => void
}

const defaultPosts = {
  posts: [],
  filterPosts: () => {},
}

const PostsContext = createContext<PostsContextType>(defaultPosts)

export function PostsContextProvider({ children }: OneOrMoreChildren) {
  const [posts, setPosts] = useState<Post[]>(allPosts.filter(post => post.category === 'discussions'))

  const filterPosts = (category: string): void => {
    setPosts(allPosts.filter(post => post.category === category))
  }

  return <PostsContext.Provider value={{ posts, filterPosts }}>{children}</PostsContext.Provider>
}

export default function usePosts() {
  const context = useContext(PostsContext)

  if (context === undefined) {
    throw new Error('`usePosts` hook must be used within a `PostsContextProvider` component')
  }

  return context
}
