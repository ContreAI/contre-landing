'use client'

import { useState } from 'react'
import type { BlogMeta } from '@/lib/blog-types'
import { BlogCard, BlogCardFeatured } from './blog-card'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'agents', label: 'Agents' },
  { id: 'brokers', label: 'Brokers' },
  { id: 'homeowners', label: 'Home Owners' },
  { id: 'other', label: 'Other' },
]

interface BlogListProps {
  posts: BlogMeta[]
}

export function BlogList({ posts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  // Filter posts by category (matching avatar field)
  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => {
        if (activeCategory === 'agents') return post.avatar === 'agent-amanda'
        if (activeCategory === 'brokers') return post.avatar === 'broker-ben'
        if (activeCategory === 'homeowners') return post.avatar === 'hannah-homebuyer'
        return !['agent-amanda', 'broker-ben', 'hannah-homebuyer'].includes(post.avatar)
      })

  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

  return (
    <>
      {/* Category Navigation */}
      <nav className="flex justify-center gap-8 border-b border-slate-200 mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`pb-4 text-sm font-medium transition-colors relative ${
              activeCategory === category.id
                ? 'text-slate-900'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {category.label}
            {activeCategory === category.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900" />
            )}
          </button>
        ))}
      </nav>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-slate-500 text-lg">
            No articles in this category yet. Check back soon!
          </p>
        </div>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-12">
              <BlogCardFeatured post={featuredPost} />
            </div>
          )}

          {/* Post Grid */}
          {remainingPosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}
