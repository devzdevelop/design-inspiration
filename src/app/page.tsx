'use client';

import { Header } from '@/components/header';
import {
	Search,
	ExternalLink,
	Type,
	Palette,
	Shapes,
	Layers,
	Image as ImageIcon,
	Layout,
	Sparkles,
} from 'lucide-react';
import { useState } from 'react';

interface InspirationSite {
	name: string;
	url: string;
	description: string;
	category: string;
	icon: string;
}

const inspirationSites: InspirationSite[] = [
	// Typography
	{
		name: 'Google Fonts',
		url: 'https://fonts.google.com',
		description: 'Extensive collection of free web fonts',
		category: 'typography',
		icon: '🔤',
	},
	{
		name: 'Typewolf',
		url: 'https://www.typewolf.com',
		description: 'Typography inspiration and font recommendations',
		category: 'typography',
		icon: '🐺',
	},
	{
		name: 'Fonts in Use',
		url: 'https://fontsinuse.com',
		description: 'Real-world typography examples',
		category: 'typography',
		icon: '📝',
	},
	{
		name: 'Font Pair',
		url: 'https://www.fontpair.co',
		description: 'Beautiful Google Font combinations',
		category: 'typography',
		icon: '💕',
	},
	{
		name: 'Type Scale',
		url: 'https://type-scale.com',
		description: 'Perfect typography scale calculator',
		category: 'typography',
		icon: '⚖️',
	},
	{
		name: 'Font Squirrel',
		url: 'https://www.fontsquirrel.com',
		description: 'Free fonts with commercial licenses',
		category: 'typography',
		icon: '🐿️',
	},

	// Colors
	{
		name: 'Coolors',
		url: 'https://coolors.co',
		description: 'Color palette generator and inspiration',
		category: 'colors',
		icon: '🎨',
	},
	{
		name: 'Color Hunt',
		url: 'https://colorhunt.co',
		description: 'Curated color palettes',
		category: 'colors',
		icon: '🎯',
	},
	{
		name: 'Adobe Color',
		url: 'https://color.adobe.com',
		description: 'Professional color tools and palettes',
		category: 'colors',
		icon: '🌈',
	},
	{
		name: 'Material Design Colors',
		url: 'https://m2.material.io/design/color',
		description: "Google's Material Design color system",
		category: 'colors',
		icon: '🔷',
	},
	{
		name: 'ColorZilla',
		url: 'https://www.colorzilla.com',
		description: 'Advanced color picker and gradient tools',
		category: 'colors',
		icon: '🦎',
	},
	{
		name: 'ColorSpace',
		url: 'https://mycolor.space',
		description: 'Generate beautiful color palettes',
		category: 'colors',
		icon: '🚀',
	},
	{
		name: 'Paletton',
		url: 'https://paletton.com',
		description: 'Color scheme designer and palette generator',
		category: 'colors',
		icon: '🎨',
	},

	// Shapes & Icons
	{
		name: 'ShapeFactory',
		url: 'https://shapefactory.co',
		description: 'Geometric shapes and patterns',
		category: 'shapes',
		icon: '🔷',
	},
	{
		name: 'Heroicons',
		url: 'https://heroicons.com',
		description: 'Beautiful hand-crafted SVG icons',
		category: 'shapes',
		icon: '🦸',
	},
	{
		name: 'Feather Icons',
		url: 'https://feathericons.com',
		description: 'Minimalist icon set',
		category: 'shapes',
		icon: '🪶',
	},
	{
		name: 'Lucide',
		url: 'https://lucide.dev',
		description: 'Beautiful & consistent icon toolkit',
		category: 'shapes',
		icon: '✨',
	},
	{
		name: 'Phosphor Icons',
		url: 'https://phosphoricons.com',
		description: 'Flexible icon family',
		category: 'shapes',
		icon: '⚡',
	},

	// Gradients
	{
		name: 'Gradient Hunt',
		url: 'https://gradienthunt.com',
		description: 'Beautiful gradient collection',
		category: 'gradients',
		icon: '🌈',
	},
	{
		name: 'UI Gradients',
		url: 'https://uigradients.com',
		description: 'Handpicked gradient colors',
		category: 'gradients',
		icon: '🎨',
	},
	{
		name: 'WebGradients',
		url: 'https://webgradients.com',
		description: 'Free collection of 180 linear gradients',
		category: 'gradients',
		icon: '🌊',
	},
	{
		name: 'Gradient Magic',
		url: 'https://www.gradientmagic.com',
		description: 'CSS gradient collection',
		category: 'gradients',
		icon: '🪄',
	},

	// Textures
	{
		name: 'Transparent Textures',
		url: 'https://www.transparenttextures.com',
		description: 'Free transparent textures for web design',
		category: 'textures',
		icon: '✨',
	},
	{
		name: 'Texture Haven',
		url: 'https://texturehaven.com',
		description: 'Free high-resolution textures',
		category: 'textures',
		icon: '🏠',
	},
	{
		name: 'Freepik Textures',
		url: 'https://www.freepik.com/textures',
		description: 'Professional texture collection',
		category: 'textures',
		icon: '🎨',
	},
	{
		name: 'Texture King',
		url: 'https://www.textureking.com',
		description: 'High-quality texture resources',
		category: 'textures',
		icon: '🧱',
	},

	// Patterns
	{
		name: 'Subtle Patterns',
		url: 'https://www.toptal.com/designers/subtlepatterns',
		description: 'Free seamless patterns for web & Figma',
		category: 'patterns',
		icon: '🔳',
	},
	{
		name: 'Hero Patterns',
		url: 'https://heropatterns.com',
		description: 'Customizable SVG patterns for backgrounds',
		category: 'patterns',
		icon: '🦸',
	},
	{
		name: 'Patterninja',
		url: 'https://patterninja.com',
		description: 'Create and export patterns for Figma',
		category: 'patterns',
		icon: '🎯',
	},
	{
		name: 'Pattern Library',
		url: 'https://thepatternlibrary.com',
		description: 'Curated pattern collection',
		category: 'patterns',
		icon: '📚',
	},
	{
		name: 'Pattern Monster',
		url: 'https://patternmonster.com',
		description: 'Free vector patterns',
		category: 'patterns',
		icon: '👹',
	},
	{
		name: 'Patternico',
		url: 'https://patternico.com',
		description: 'Free seamless pattern generator',
		category: 'patterns',
		icon: '🎨',
	},
	{
		name: 'Patternify',
		url: 'https://www.patternify.com',
		description: 'Create CSS patterns online',
		category: 'patterns',
		icon: '🔧',
	},

	// General Design
	{
		name: 'Dribbble',
		url: 'https://dribbble.com',
		description: "Discover the world's top designers & creatives",
		category: 'general',
		icon: '🏀',
	},
	{
		name: 'Behance',
		url: 'https://www.behance.net',
		description: 'Showcase and discover creative work',
		category: 'general',
		icon: '💼',
	},
	{
		name: 'Awwwards',
		url: 'https://www.awwwards.com',
		description: 'The awards for design, creativity and innovation',
		category: 'general',
		icon: '🏆',
	},
	{
		name: 'Pinterest',
		url: 'https://pinterest.com',
		description: 'Visual discovery platform for design inspiration',
		category: 'general',
		icon: '📌',
	},
	{
		name: 'Mobbin',
		url: 'https://mobbin.com',
		description: 'Mobile app design patterns',
		category: 'general',
		icon: '📱',
	},
	{
		name: 'Godly',
		url: 'https://godly.website',
		description: 'Curated collection of the best web design inspiration',
		category: 'general',
		icon: '⚡',
	},
	{
		name: 'Landingfolio',
		url: 'https://www.landingfolio.com',
		description: 'Landing page design inspiration',
		category: 'general',
		icon: '🚀',
	},
	{
		name: 'One Page Love',
		url: 'https://onepagelove.com',
		description: 'Collection of beautiful one-page websites',
		category: 'general',
		icon: '💝',
	},
	{
		name: 'Land-book',
		url: 'https://land-book.com',
		description: 'Showcase of the best landing pages',
		category: 'general',
		icon: '📖',
	},
	{
		name: 'Page Flows',
		url: 'https://pageflows.com',
		description: 'User flow design inspiration',
		category: 'general',
		icon: '🌊',
	},
	{
		name: 'Webflow Showcase',
		url: 'https://webflow.com/made-in-webflow',
		description: 'Live websites built with Webflow',
		category: 'general',
		icon: '🌊',
	},
	{
		name: 'CSS Nectar',
		url: 'https://cssnectar.com',
		description: 'Curated collection of the best CSS websites',
		category: 'general',
		icon: '🍯',
	},
	{
		name: 'CSS Design Awards',
		url: 'https://www.cssdesignawards.com',
		description: 'Awards for outstanding web design and CSS',
		category: 'general',
		icon: '🏅',
	},
	{
		name: 'Siteinspire',
		url: 'https://www.siteinspire.com',
		description: 'A showcase of the finest web and interactive design',
		category: 'general',
		icon: '🔴',
	},
	{
		name: 'Designspiration',
		url: 'https://www.designspiration.com',
		description: 'Pinterest-like platform for design inspiration',
		category: 'general',
		icon: '💡',
	},
	{
		name: 'Best Website Design',
		url: 'https://www.bestwebsite.gallery',
		description: 'Curated collection of the best website designs',
		category: 'general',
		icon: '➕',
	},
	{
		name: 'Ecommerce Design',
		url: 'https://ecommerce.design',
		description: 'E-commerce design inspiration and examples',
		category: 'general',
		icon: '🛒',
	},
	{
		name: 'Designmodo',
		url: 'https://designmodo.com',
		description: 'UI kits, frameworks, and design inspiration',
		category: 'general',
		icon: '🎨',
	},
	{
		name: 'Limitless',
		url: 'https://limitless.website',
		description: 'Unlimited design inspiration for creative minds',
		category: 'general',
		icon: '♾️',
	},

	// 3D Web Design
	{
		name: 'Spline',
		url: 'https://spline.design',
		description: '3D design tool specifically for web and mobile',
		category: '3d',
		icon: '🎨',
	},
	{
		name: 'Three.js',
		url: 'https://threejs.org',
		description: 'JavaScript 3D library for web development',
		category: '3d',
		icon: '📦',
	},
	{
		name: 'R3F',
		url: 'https://docs.pmnd.rs/react-three-fiber',
		description: 'React renderer for Three.js web projects',
		category: '3d',
		icon: '⚛️',
	},
	{
		name: 'Figma 3D',
		url: 'https://www.figma.com/community/tag/3d',
		description: '3D components and plugins for Figma web design',
		category: '3d',
		icon: '🔺',
	},
	{
		name: 'LottieFiles',
		url: 'https://lottiefiles.com',
		description: '3D animations for web and mobile interfaces',
		category: '3d',
		icon: '🎭',
	},
	{
		name: 'A-Frame',
		url: 'https://aframe.io',
		description: 'Web framework for VR experiences in browsers',
		category: '3d',
		icon: '🌐',
	},
	{
		name: 'WebXR',
		url: 'https://immersiveweb.dev',
		description: 'Web-based VR and AR for websites',
		category: '3d',
		icon: '🥽',
	},
	{
		name: 'Vectary',
		url: 'https://www.vectary.com',
		description: 'Online 3D design with web export capabilities',
		category: '3d',
		icon: '🔮',
	},
	{
		name: 'Sketchfab',
		url: 'https://sketchfab.com',
		description: '3D model viewer for embedding in websites',
		category: '3d',
		icon: '🏛️',
	},
	{
		name: 'Poly Haven',
		url: 'https://polyhaven.com',
		description: 'Free 3D assets optimized for web use',
		category: '3d',
		icon: '🏔️',
	},
	{
		name: 'Ready Player Me',
		url: 'https://readyplayer.me',
		description: '3D avatars for web and metaverse projects',
		category: '3d',
		icon: '👤',
	},
	{
		name: 'Blender',
		url: 'https://www.blender.org',
		description: 'Free 3D creation suite with web export options',
		category: '3d',
		icon: '🎬',
	},

	// Brand Assets
	{
		name: 'Brand Guidelines',
		url: 'https://brandguidelines.com',
		description: 'Free collection of brand guidelines and style guides',
		category: 'brand',
		icon: '📋',
	},
	{
		name: 'Brand New',
		url: 'https://www.underconsideration.com/brandnew',
		description: 'Free brand identity and logo design inspiration',
		category: 'brand',
		icon: '🆕',
	},
	{
		name: 'Logo Design Love',
		url: 'https://www.logodesignlove.com',
		description: 'Free logo design inspiration and case studies',
		category: 'brand',
		icon: '❤️',
	},
	{
		name: 'Brandmark',
		url: 'https://brandmark.io',
		description: 'Free AI-powered logo generator and brand kit creator',
		category: 'brand',
		icon: '🤖',
	},
	{
		name: 'Looka',
		url: 'https://looka.com',
		description: 'Free AI logo maker and brand identity platform',
		category: 'brand',
		icon: '👁️',
	},
	{
		name: 'Canva Brand Kit',
		url: 'https://www.canva.com/brand-kit',
		description: 'Free brand kit and style guide templates',
		category: 'brand',
		icon: '🎨',
	},
	{
		name: 'Figma Brand Templates',
		url: 'https://www.figma.com/community/tag/brand',
		description: 'Free brand guidelines and identity templates',
		category: 'brand',
		icon: '🔺',
	},
	{
		name: 'Logo Maker',
		url: 'https://logomaker.com',
		description: 'Free logo design tool with brand assets',
		category: 'brand',
		icon: '✏️',
	},
	{
		name: 'Hatchful',
		url: 'https://hatchful.shopify.com',
		description: 'Free logo maker by Shopify',
		category: 'brand',
		icon: '🛍️',
	},
	{
		name: 'Brand Colors',
		url: 'https://brandcolors.net',
		description: 'Free official brand color palettes and hex codes',
		category: 'brand',
		icon: '🎨',
	},
	{
		name: 'Google Fonts',
		url: 'https://fonts.google.com',
		description: 'Free typography for brand identity',
		category: 'brand',
		icon: '📝',
	},
	{
		name: 'Font Squirrel',
		url: 'https://www.fontsquirrel.com',
		description: 'Free commercial-use fonts for brands',
		category: 'brand',
		icon: '🔤',
	},
];

const categories = [
	{
		id: 'general',
		name: 'General Design',
		icon: Layout,
		color: 'text-indigo-600',
	},
	{ id: 'typography', name: 'Typography', icon: Type, color: 'text-blue-600' },
	{ id: 'colors', name: 'Colors', icon: Palette, color: 'text-red-600' },
	{
		id: 'shapes',
		name: 'Shapes & Icons',
		icon: Shapes,
		color: 'text-green-600',
	},
	{
		id: 'gradients',
		name: 'Gradients',
		icon: Layers,
		color: 'text-purple-600',
	},
	{
		id: 'textures',
		name: 'Textures',
		icon: ImageIcon,
		color: 'text-orange-600',
	},
	{
		id: 'patterns',
		name: 'Patterns',
		icon: Layers,
		color: 'text-pink-600',
	},
	{
		id: '3d',
		name: '3D Design',
		icon: Shapes,
		color: 'text-cyan-600',
	},
	{
		id: 'brand',
		name: 'Brand Assets',
		icon: Palette,
		color: 'text-emerald-600',
	},
];

export default function Home() {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('all');

	const filteredSites = inspirationSites.filter((site) => {
		const matchesSearch =
			site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			site.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === 'all' || site.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	return (
		<div className='min-h-screen bg-background'>
			<Header />

			<main className='container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12'>
				{/* Hero Section */}
				<div className='text-center py-8 sm:py-12 lg:py-16'>
					<div className='flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6'>
						<Sparkles
							className='h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16'
							style={{ color: '#6366f1' }}
						/>
						<h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-primary'>
							DesignHub
						</h1>
					</div>
					<p className='text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto font-medium px-4'>
						Your comprehensive design toolkit. Discover inspiration, tools, and
						resources for typography, colors, 3D design, brand assets, and
						everything you need to create amazing designs.
					</p>

					{/* Search Bar */}
					<div className='relative max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8 px-4'>
						<Search className='absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4' />
						<input
							type='text'
							placeholder='Search design tools and inspiration...'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className='w-full pl-10 pr-4 py-2.5 sm:py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm sm:text-base'
						/>
					</div>
				</div>

				{/* Category Filter */}
				<div
					id='filters'
					className='flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12 px-4'
				>
					<button
						onClick={() => setSelectedCategory('all')}
						className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer relative group ${
							selectedCategory === 'all'
								? 'bg-primary text-primary-foreground shadow-md'
								: 'bg-muted text-muted-foreground hover:bg-muted/80 hover:shadow-sm'
						}`}
					>
						All
						{selectedCategory === 'all' && (
							<div className='absolute inset-0 rounded-full border-2 border-primary/20'></div>
						)}
					</button>
					{categories.map((category) => {
						const Icon = category.icon;
						return (
							<button
								key={category.id}
								data-category={category.id}
								onClick={() => setSelectedCategory(category.id)}
								className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer relative group ${
									selectedCategory === category.id
										? 'bg-primary text-primary-foreground shadow-md'
										: 'bg-muted text-muted-foreground hover:bg-muted/80 hover:shadow-sm'
								}`}
							>
								<Icon className='h-4 w-4' />
								<span>{category.name}</span>
								{selectedCategory === category.id && (
									<div className='absolute inset-0 rounded-full border-2 border-primary/20'></div>
								)}
							</button>
						);
					})}
				</div>

				{/* Inspiration Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6'>
					{filteredSites.map((site, index) => (
						<a
							key={index}
							href={site.url}
							target='_blank'
							rel='noopener noreferrer'
							className='group block p-4 sm:p-5 lg:p-6 border border-border rounded-lg bg-card hover:bg-accent transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer'
						>
							<div className='flex items-start justify-between mb-2 sm:mb-3'>
								<div className='flex items-center space-x-2 sm:space-x-3'>
									<span className='text-xl sm:text-2xl'>{site.icon}</span>
									<h3 className='font-semibold text-base sm:text-lg group-hover:text-primary transition-colors'>
										{site.name}
									</h3>
								</div>
								<ExternalLink className='h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0' />
							</div>
							<p className='text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed'>
								{site.description}
							</p>
							<span className='inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full'>
								{categories.find((cat) => cat.id === site.category)?.name}
							</span>
						</a>
					))}
				</div>

				{filteredSites.length === 0 && (
					<div className='text-center py-16'>
						<p className='text-muted-foreground text-lg'>
							No design tools or inspiration found matching your search.
						</p>
					</div>
				)}
			</main>

			{/* Footer */}
			<footer className='border-t bg-muted/50 mt-12 sm:mt-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8'>
					<div className='text-center text-muted-foreground'>
						<p className='mb-2'>Made with ❤️ for designers and developers</p>
						<p className='text-sm'>
							Your comprehensive design toolkit for inspiration and tools
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
