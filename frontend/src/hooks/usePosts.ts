import { useState } from 'react'
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
    category: 'discussion',
  },
  {
    id: 'two',
    title: 'two',
    date: 'two',
    excerpt: 'two',
    slug: 'two',
    category: 'action',
  },
  {
    id: 'three',
    title: 'three',
    date: 'three',
    excerpt: 'three',
    slug: 'three',
    category: 'discussion',
  },
  {
    id: 'four',
    title: 'four',
    date: 'four',
    excerpt: 'four',
    slug: 'four',
    category: 'action',
  },
  {
    id: 'five',
    title: 'five',
    date: 'five',
    excerpt: 'five',
    slug: 'five',
    category: 'discussion',
  },
  {
    id: 'six',
    title: 'six',
    date: 'six',
    excerpt: 'six',
    slug: 'six',
    category: 'action',
  },
]

export default function usePosts() {
  const [posts, setPosts] = useState<Post[]>(allPosts.filter(post => post.category === 'discussion'))

  const filterPosts = (category: string) => {
    setPosts(allPosts.filter(post => post.category === category))
  }

  return { posts, filterPosts }
}
