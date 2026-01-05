import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { compileMDX } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/blog'
import type { BlogMeta } from '@/lib/blog-types'
import { mdxComponents } from '../../../../mdx-components'
import Footer from '@/components/ui/footer'
import { ArticleSchema } from '@/components/seo/ArticleSchema'
import { ArrowLeft } from 'lucide-react'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Article Not Found | Contre AI',
    }
  }

  return {
    title: `${post.title} | Contre AI Blog`,
    description: post.meta_description,
    keywords: [post.primary_keyword, ...post.secondary_keywords, ...post.tags],
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.meta_description,
      url: `https://contre.ai/blog/${post.slug}`,
      images: post.coverImage ? [{ url: post.coverImage, alt: post.title }] : undefined,
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.meta_description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
    alternates: {
      canonical: `https://contre.ai/blog/${post.slug}`,
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { content } = await compileMDX<BlogMeta>({
    source: post.content,
    components: mdxComponents,
  })

  return (
    <>
      <ArticleSchema post={post} />
      <main className="min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-6 py-12">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-slate-500">
                {post.reading_time}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-slate-600 mb-6">
              {post.meta_description}
            </p>

            <div className="flex items-center gap-4 text-sm text-slate-500 border-b border-slate-200 pb-6">
              <span className="font-medium text-slate-700">{post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-slate prose-lg max-w-none">
            {content}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-slate-100 text-slate-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-slate-50 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{post.author}</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Sharing insights on transaction intelligence and real estate technology.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
