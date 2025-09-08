'use client';

import { ThemeToggle } from './theme-toggle';
import {
	Sparkles,
	Palette,
	Type,
	Shapes,
	Layers,
	Image as ImageIcon,
	Layout,
} from 'lucide-react';

export function Header() {
	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='w-full px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between'>
				<div className='flex items-center space-x-2'>
					<div className='flex items-center space-x-2'>
						<Sparkles
							className='h-7 w-7'
							style={{ color: '#6366f1' }}
						/>
						<span className='text-2xl font-bold text-primary'>DesignHub</span>
					</div>
				</div>

				<nav className='hidden md:flex items-center space-x-4 lg:space-x-6'>
					<button
						onClick={() => {
							const filterButtons = document.querySelectorAll(
								'[data-category="general"]'
							);
							if (filterButtons.length > 0) {
								(filterButtons[0] as HTMLButtonElement).click();
								document
									.getElementById('filters')
									?.scrollIntoView({ behavior: 'smooth' });
							}
						}}
						className='flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer relative group'
					>
						<Layout className='h-4 w-4' />
						<span>General</span>
						<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full'></div>
					</button>
					<button
						onClick={() => {
							const filterButtons = document.querySelectorAll(
								'[data-category="colors"]'
							);
							if (filterButtons.length > 0) {
								(filterButtons[0] as HTMLButtonElement).click();
								document
									.getElementById('filters')
									?.scrollIntoView({ behavior: 'smooth' });
							}
						}}
						className='flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer relative group'
					>
						<Palette className='h-4 w-4' />
						<span>Colors</span>
						<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full'></div>
					</button>
					<button
						onClick={() => {
							const filterButtons = document.querySelectorAll(
								'[data-category="typography"]'
							);
							if (filterButtons.length > 0) {
								(filterButtons[0] as HTMLButtonElement).click();
								document
									.getElementById('filters')
									?.scrollIntoView({ behavior: 'smooth' });
							}
						}}
						className='flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer relative group'
					>
						<Type className='h-4 w-4' />
						<span>Typography</span>
						<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full'></div>
					</button>
					<button
						onClick={() => {
							const filterButtons = document.querySelectorAll(
								'[data-category="brand"]'
							);
							if (filterButtons.length > 0) {
								(filterButtons[0] as HTMLButtonElement).click();
								document
									.getElementById('filters')
									?.scrollIntoView({ behavior: 'smooth' });
							}
						}}
						className='flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer relative group'
					>
						<Palette className='h-4 w-4' />
						<span>Brand</span>
						<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full'></div>
					</button>
					<button
						onClick={() => {
							const filterButtons = document.querySelectorAll(
								'[data-category="3d"]'
							);
							if (filterButtons.length > 0) {
								(filterButtons[0] as HTMLButtonElement).click();
								document
									.getElementById('filters')
									?.scrollIntoView({ behavior: 'smooth' });
							}
						}}
						className='flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer relative group'
					>
						<Shapes className='h-4 w-4' />
						<span>3D</span>
						<div className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full'></div>
					</button>
				</nav>

				<div className='flex items-center space-x-2'>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
