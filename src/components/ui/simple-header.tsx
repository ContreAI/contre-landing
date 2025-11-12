'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { MenuToggle } from '@/components/ui/menu-toggle';

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
	];

	return (
		<header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-lg">
			<nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
				<Link href="/" className="flex items-center gap-3">
					<Image 
						src="/contre-logo.png" 
						alt="Contre" 
						width={120} 
						height={32} 
						priority
						style={{ width: 'auto', height: 'auto' }} 
					/>
				</Link>
				<div className="hidden items-center gap-2 lg:flex">
					{links.map((link) => (
						link.isRoute ? (
							<Link
								key={link.href}
								className={buttonVariants({ variant: 'ghost', className: 'font-[\'Manrope\']' })}
								href={link.href}
							>
								{link.label}
							</Link>
						) : (
							<a
								key={link.href}
								className={buttonVariants({ variant: 'ghost', className: 'font-[\'Manrope\']' })}
								href={link.href}
							>
								{link.label}
							</a>
						)
					))}
					<Link href="/authentication/login">
						<Button variant="outline" className="font-['Manrope']">Sign In</Button>
					</Link>
					<Link href="/authentication/signup">
						<Button className="bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] hover:from-[#1a3624] hover:via-[#4a5f2d] hover:to-[#7da3a3] font-['Manrope']">Get Started</Button>
					</Link>
				</div>
				<Sheet open={open} onOpenChange={setOpen}>
					<Button size="icon" variant="outline" className="lg:hidden">
						<MenuToggle
							strokeWidth={2.5}
							open={open}
							onOpenChange={setOpen}
							className="size-6"
						/>
					</Button>
					<SheetContent
						className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
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
											className: 'justify-start font-[\'Manrope\']',
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
											className: 'justify-start font-[\'Manrope\']',
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
							<Link href="/authentication/login">
								<Button variant="outline" className="font-['Manrope']">Sign In</Button>
							</Link>
							<Link href="/authentication/signup">
								<Button className="bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] hover:from-[#1a3624] hover:via-[#4a5f2d] hover:to-[#7da3a3] font-['Manrope']">Get Started</Button>
							</Link>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</nav>
		</header>
	);
}
