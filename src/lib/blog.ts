import 'server-only'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Category, BlogMeta, BlogPost } from './blog-types'

const POSTS_PATH = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogMeta[] {
  if (!fs.existsSync(POSTS_PATH)) {
    return []
  }

  const files = fs.readdirSync(POSTS_PATH).filter(f => f.endsWith('.mdx'))

  return files
    .map(filename => {
      const filePath = path.join(POSTS_PATH, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)
      return {
        ...data,
        slug: data.slug || filename.replace('.mdx', ''),
        published: data.published !== false,
      } as BlogMeta
    })
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(POSTS_PATH)) {
    return null
  }

  const files = fs.readdirSync(POSTS_PATH).filter(f => f.endsWith('.mdx'))

  for (const filename of files) {
    const filePath = path.join(POSTS_PATH, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const postSlug = data.slug || filename.replace('.mdx', '')

    if (postSlug === slug) {
      return {
        ...data,
        slug: postSlug,
        published: data.published !== false,
        content,
      } as BlogPost
    }
  }

  return null
}

export function getPostsByCategory(category: Category): BlogMeta[] {
  return getAllPosts().filter(post => post.category === category)
}

export function getPostsByAvatar(avatar: Avatar): BlogMeta[] {
  return getAllPosts().filter(post => post.avatar === avatar)
}

export function getPostsByTag(tag: string): BlogMeta[] {
  return getAllPosts().filter(post => post.tags?.includes(tag))
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  posts.forEach(post => post.tags?.forEach(tag => tags.add(tag)))
  return Array.from(tags).sort()
}

export function getAllCategories(): Category[] {
  const posts = getAllPosts()
  const categories = new Set<Category>()
  posts.forEach(post => categories.add(post.category))
  return Array.from(categories)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
