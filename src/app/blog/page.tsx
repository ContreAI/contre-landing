import { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { BlogList } from '@/components/blog/blog-list'
import Footer from '@/components/ui/footer'

export const metadata: Metadata = {
  title: 'The Transaction Brief | Contre AI',
  description: 'What the best agents know—and their clients wish they did. Real estate insights from Contre AI.',
  keywords: [
    'real estate blog',
    'transaction management',
    'contract analysis',
    'real estate technology',
    'agent resources',
    'brokerage insights',
  ],
  openGraph: {
    title: 'The Transaction Brief | Contre AI',
    description: 'What the best agents know—and their clients wish they did.',
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-2">
              The Transaction Brief
            </h1>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              A Contre.AI Publication
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What the best agents know—and their clients wish they did.
            </p>
          </div>

          <BlogList posts={posts} />
        </div>
      </main>
      <Footer />
    </>
  )
}
