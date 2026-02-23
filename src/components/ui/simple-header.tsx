'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { MenuToggle } from '@/components/ui/menu-toggle';
import { APP_URL } from '@/lib/config';

export function SimpleHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: 'Brokerage',
			href: '/brokerages',
			isRoute: true,
		},
		{
			label: 'Agent',
			href: '/agents',
			isRoute: true,
		},
		{
			label: 'Pricing',
			href: '/pricing',
			isRoute: true,
		},
		{
			label: 'Blog',
			href: '/blog',
			isRoute: true,
		},
	];

	return (
		<header className="bg-[#0D1A14]/95 supports-[backdrop-filter]:bg-[#0D1A14]/80 sticky top-0 z-50 w-full border-b border-white/[0.08] backdrop-blur-lg">
			<nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/contre-logo.svg"
						alt="Contre"
						width={32}
						height={32}
						priority
					/>
					<span className="text-[#9DBFBF] font-bebas text-xl tracking-wide leading-none">CONTRE</span>
				</Link>
				<div className="hidden items-center gap-2 lg:flex">
					{links.map((link) => (
						link.isRoute ? (
							<Link
								key={link.href}
								className={buttonVariants({ variant: 'ghost', className: 'font-manrope text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all duration-200' })}
								href={link.href}
							>
								{link.label}
							</Link>
						) : (
							<a
								key={link.href}
								className={buttonVariants({ variant: 'ghost', className: 'font-manrope text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all duration-200' })}
								href={link.href}
							>
								{link.label}
							</a>
						)
					))}
					<a href={`${APP_URL}/authentication/login`}>
						<Button variant="outline" className="font-manrope border-white/[0.10] text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.16] transition-all duration-200">Sign In</Button>
					</a>
					<a href={`${APP_URL}/authentication/signup`}>
						<Button className="bg-white hover:bg-gray-100 text-[#0D1A14] font-manrope font-semibold hover:shadow-[0_0_16px_rgba(255,255,255,0.2)] transition-all duration-200">Get Started</Button>
					</a>
				</div>
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild>
						<Button size="icon" variant="outline" className="lg:hidden border-white/[0.10] text-slate-300" aria-label={open ? "Close navigation menu" : "Open navigation menu"}>
							<MenuToggle
								strokeWidth={2.5}
								open={open}
								onOpenChange={setOpen}
								className="size-6"
							/>
						</Button>
					</SheetTrigger>
					<SheetContent
						className="bg-[#0D1A14]/95 supports-[backdrop-filter]:bg-[#0D1A14]/80 gap-0 backdrop-blur-lg border-white/[0.06]"
						showClose={false}
						side="left"
					>
						<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
							{links.map((link) => (
								link.isRoute ? (
									<Link
										key={link.href}
										className={buttonVariants({
											variant: 'ghost',
											className: 'justify-start font-manrope text-slate-400 hover:text-white hover:bg-white/[0.05]',
										})}
										href={link.href}
										onClick={() => setOpen(false)}
									>
										{link.label}
									</Link>
								) : (
									<a
										key={link.href}
										className={buttonVariants({
											variant: 'ghost',
											className: 'justify-start font-manrope text-slate-400 hover:text-white hover:bg-white/[0.05]',
										})}
										href={link.href}
										onClick={() => setOpen(false)}
									>
										{link.label}
									</a>
								)
							))}
						</div>
						<SheetFooter>
							<a href={`${APP_URL}/authentication/login`}>
								<Button variant="outline" className="font-manrope border-white/[0.10] text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.16] transition-all duration-200">Sign In</Button>
							</a>
							<a href={`${APP_URL}/authentication/signup`}>
								<Button className="bg-white hover:bg-gray-100 text-[#0D1A14] font-manrope font-semibold hover:shadow-[0_0_16px_rgba(255,255,255,0.2)] transition-all duration-200">Get Started</Button>
							</a>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</nav>
		</header>
	);
}
