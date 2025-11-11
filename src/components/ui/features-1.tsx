import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { AlertTriangle, FileWarning, Clock } from 'lucide-react'
import type { ReactNode } from 'react'

export function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-5xl font-semibold lg:text-7xl font-['Bebas_Neue'] text-[#264E36]">The Costly Mistakes We Catch Every Day</h2>
                    <p className="mt-4 text-muted-foreground max-w-3xl mx-auto font-['Manrope']">Our AI reviews every document in your transactions to catch the risks that cost brokerages and agents deals everyday.</p>
                </div>
                <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Clock className="size-6 text-red-500" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium font-['Bebas_Neue']">The 3 PM Deadline You Never Saw</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm font-['Manrope']">Inspection contingency buried in addendum #3. Due diligence period ending in 48 hours but no one marked it. We flag these before your client loses their earnest money or you lose your commission.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <AlertTriangle className="size-6 text-amber-500" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium font-['Bebas_Neue']">The HOA Rule That Kills the Deal</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm font-['Manrope']">Your buyer wants to run a home business. Page 47 of the HOA docs prohibits it. We catch conflicts between buyer plans, property restrictions, and contract terms before they surface at closing.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <FileWarning className="size-6 text-orange-500" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium font-['Bebas_Neue']">The Details Everyone Skims Past</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm font-['Manrope']">Page 3 says seller credits $5K at closing. Page 8 says $3K. Buyer expects all appliances - seller's taking the washer. Who pays for the final water bill? We read every line of every document to catch conflicting terms and missing agreements before closing day.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"/>
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">{children}</div>
    </div>
)
