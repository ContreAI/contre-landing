import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { MessageCircle, Dog, Search } from 'lucide-react'
import type { ReactNode } from 'react'

export function FeaturesAgents() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-5xl font-semibold lg:text-7xl font-['Bebas_Neue'] text-[#264E36]">The Details That Make You Look Like the Best Agent in the Room</h2>
                    <p className="mt-4 text-muted-foreground max-w-3xl mx-auto font-['Manrope']">AI reads every page so you always have the answer—whether it's buried in the HOA docs, inspection report, or title work.</p>
                </div>
                <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <MessageCircle className="size-6 text-blue-500" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium font-['Bebas_Neue'] text-xl">24/7 Client Access</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm font-['Manrope'] font-semibold mb-2">"Your clients get answers at 2 AM—without texting you"</p>
                            <p className="text-sm font-['Manrope']">You send them a chatbot link on day one. Now when they're reading the inspection report at midnight and wonder "what did they say about the electrical panel?", they get an instant answer. You wake up to a text: "This is amazing, thank you!"</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Dog className="size-6 text-amber-500" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium font-['Bebas_Neue'] text-xl">Pet Restrictions</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm font-['Manrope'] font-semibold mb-2">"Are dogs over 25 lbs allowed here?"</p>
                            <p className="text-sm font-['Manrope']">Your buyer has a 60-lb golden retriever. Page 23 of the HOA docs has breed and weight restrictions. Your AI already read it, so you know before they fall in love with the property. No heartbreak, no wasted time.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Search className="size-6 text-orange-500" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium font-['Bebas_Neue'] text-xl">Easements</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm font-['Manrope'] font-semibold mb-2">"There's a utility easement running through the backyard"</p>
                            <p className="text-sm font-['Manrope']">Buried on page 18 of the title report: a 20-foot easement right where your buyer wants to build a shed. Your AI flags it before the inspection period ends—giving you time to negotiate or pivot, not scramble at closing.</p>
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
