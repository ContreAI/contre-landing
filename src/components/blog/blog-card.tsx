import Link from 'next/link'
import Image from 'next/image'
import type { BlogMeta } from '@/lib/blog-types'

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface BlogCardProps {
  post: BlogMeta
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
    >
      {post.coverImage && (
        <div className="relative h-48 bg-slate-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-slate-500">
            {post.reading_time}
          </span>
        </div>

        <h2 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h2>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {post.meta_description}
        </p>

        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{post.author}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
      </div>
    </Link>
  )
}

interface BlogCardFeaturedProps {
  post: BlogMeta
}

export function BlogCardFeatured({ post }: BlogCardFeaturedProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-200"
    >
      <div className="md:flex">
        {post.coverImage && (
          <div className="relative h-64 md:h-auto md:w-1/2 bg-slate-100">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        )}
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-slate-500">
              {post.reading_time}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>

          <p className="text-slate-600 mb-6 line-clamp-3">
            {post.meta_description}
          </p>

          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>{post.author}</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </div>
      </div>
    </Link>
  )
}
