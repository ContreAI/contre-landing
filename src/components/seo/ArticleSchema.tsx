import { BlogPost } from '@/lib/blog-types'

interface ArticleSchemaProps {
  post: BlogPost
}

export function ArticleSchema({ post }: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.meta_description,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://contre.ai/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Contre AI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://contre.ai/contre-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://contre.ai/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: [post.primary_keyword, ...post.secondary_keywords, ...post.tags].join(', '),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BlogListSchema({ posts }: { posts: Array<{ title: string; slug: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Contre AI Blog',
    description: 'Insights and resources for real estate professionals',
    url: 'https://contre.ai/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Contre AI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://contre.ai/contre-logo.png',
      },
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://contre.ai/blog/${post.slug}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
