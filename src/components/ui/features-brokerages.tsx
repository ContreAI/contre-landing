import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { AlertTriangle, FileWarning, Clock } from 'lucide-react'
import type { ReactNode } from 'react'

export function FeaturesBrokerages() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-5xl font-semibold lg:text-7xl font-['Bebas_Neue'] text-[#264E36]">You're the Safety Net for Every Missed Detail—And It's Costing You Sleep, Money, and Reputation</h2>
                    <p className="mt-4 text-muted-foreground max-w-3xl mx-auto font-['Manrope']">Our AI reviews every document in your transactions to catch the risks that turn into 10pm panicked calls, E&O claims, and deal failures.</p>
                </div>
                <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Clock className="size-6 text-red-500" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium font-['Bebas_Neue']">THE 3 PM DEADLINE NO ONE CAUGHT</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm font-['Manrope']">Inspection contingency buried in addendum #3. Due diligence ending in 48 hours but your agent never marked it. Now they're texting you at 9pm asking if the client can back out without losing earnest money.<br/><br/><em>Your reality: You're the final backstop when agents miss deadlines—answering after-hours questions that should never happen.</em></p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <AlertTriangle className="size-6 text-amber-500" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium font-['Bebas_Neue']">THE HOA RESTRICTION THAT KILLS THE DEAL</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm font-['Manrope']">Your buyer wants to run a home business. Page 47 of the HOA docs prohibits it. Your agent skimmed the CC&Rs and assured the client it was fine. Now you're managing an angry buyer, a potential lawsuit, and an agent's reputation crisis.<br/><br/><em>Your reality: When agents overlook critical clauses, YOU handle the aftermath—upset clients, commission clawbacks, E&O exposure.</em></p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <FileWarning className="size-6 text-orange-500" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium font-['Bebas_Neue']">THE CONFLICTING TERMS NO ONE CROSS-CHECKED</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm font-['Manrope']">Page 3 says seller credits $5K at closing. Page 8 says $3K. Purchase agreement references appliances staying, but seller's disclosure says washer goes with them. These contradictions surface at the closing table—or worse, after.<br/><br/><em>Your reality: Inconsistent document review across your team means unpredictable quality. Your veterans get sloppy under pressure. Your new agents don't know what they're missing.</em></p>
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
