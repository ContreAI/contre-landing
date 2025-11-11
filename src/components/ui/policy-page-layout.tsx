import { SimpleHeader } from "@/components/ui/simple-header"
import Footer from "@/components/ui/footer"

interface PolicyPageLayoutProps {
  children: React.ReactNode
  title: string
  lastUpdated?: string
}

export function PolicyPageLayout({ children, title, lastUpdated }: PolicyPageLayoutProps) {
  return (
    <>
      <SimpleHeader />
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold font-['Bebas_Neue'] text-[#264E36]">
                {title}
              </h1>
              {lastUpdated && (
                <p className="text-sm text-muted-foreground font-['Manrope']">
                  Last updated: {lastUpdated}
                </p>
              )}
            </div>
            <div className="prose prose-slate max-w-none font-['Manrope']">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
