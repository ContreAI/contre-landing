import React from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { MenuToggle } from '@/components/ui/menu-toggle';
import contreLogo from '@/assets/contre-logo.png';

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
			href: '#pricing',
		},
	];

	return (
		<header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-lg">
			<nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
				<Link to="/" className="flex items-center gap-3">
					<img src={contreLogo} alt="Contre" className="h-8 w-auto" />
				</Link>
				<div className="hidden items-center gap-2 lg:flex">
					{links.map((link) => (
						link.isRoute ? (
							<Link
								key={link.href}
								className={buttonVariants({ variant: 'ghost', className: 'font-[\'Manrope\']' })}
								to={link.href}
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
					<Button variant="outline" className="font-['Manrope']">Sign In</Button>
					<Button className="bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] hover:from-[#1a3624] hover:via-[#4a5f2d] hover:to-[#7da3a3] font-['Manrope']">Get Started</Button>
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
										to={link.href}
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
							<Button variant="outline" className="font-['Manrope']">Sign In</Button>
							<Button className="bg-gradient-to-r from-[#264E36] via-[#607D3B] to-[#9DBFBF] hover:from-[#1a3624] hover:via-[#4a5f2d] hover:to-[#7da3a3] font-['Manrope']">Get Started</Button>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</nav>
		</header>
	);
}
