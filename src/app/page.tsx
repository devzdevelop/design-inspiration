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
	Camera,
	BookOpen,
	Zap,
	Briefcase,
	Globe,
} from 'lucide-react';
import { useState } from 'react';
import * as React from 'react';

interface InspirationSite {
	name: string;
	url: string;
	description: string;
	category: string;
	icon: string;
}

const inspirationSites: InspirationSite[] = [
	// Most Popular/Trendy Resources (All Categories)
	{
		name: 'Figma',
		url: 'https://www.figma.com',
		description: 'Collaborative interface design tool',
		category: 'productivity',
		icon: '🔺',
	},
	{
		name: 'Dribbble',
		url: 'https://dribbble.com',
		description: "Discover the world's top designers & creatives",
		category: 'general',
		icon: '🏀',
	},
	{
		name: 'Google Fonts',
		url: 'https://fonts.google.com',
		description: 'Extensive collection of free web fonts',
		category: 'typography',
		icon: '🔤',
	},
	{
		name: 'Unsplash',
		url: 'https://unsplash.com',
		description: 'Beautiful free photos from talented photographers',
		category: 'photos',
		icon: '📸',
	},
	{
		name: 'Coolors',
		url: 'https://coolors.co',
		description: 'Color palette generator and inspiration',
		category: 'colors',
		icon: '🎨',
	},
	{
		name: 'Behance',
		url: 'https://www.behance.net',
		description: 'Showcase and discover creative work',
		category: 'general',
		icon: '💼',
	},
	{
		name: 'Material Icons',
		url: 'https://fonts.google.com/icons',
		description: 'Google Material Design icons',
		category: 'shapes',
		icon: '🔷',
	},
	{
		name: 'Pexels',
		url: 'https://www.pexels.com',
		description: 'Free stock photos and videos',
		category: 'photos',
		icon: '🎬',
	},
	{
		name: 'Awwwards',
		url: 'https://www.awwwards.com',
		description: 'The awards for design, creativity and innovation',
		category: 'general',
		icon: '🏆',
	},
	{
		name: 'Heroicons',
		url: 'https://heroicons.com',
		description: 'Beautiful hand-crafted SVG icons',
		category: 'shapes',
		icon: '🦸',
	},
	{
		name: 'Pinterest',
		url: 'https://pinterest.com',
		description: 'Visual discovery platform for design inspiration',
		category: 'general',
		icon: '📌',
	},
	{
		name: 'Color Hunt',
		url: 'https://colorhunt.co',
		description: 'Curated color palettes',
		category: 'colors',
		icon: '🎯',
	},
	{
		name: 'Notion',
		url: 'https://www.notion.so',
		description: 'All-in-one workspace for notes, docs, and projects',
		category: 'productivity',
		icon: '📝',
	},
	{
		name: 'Mobbin',
		url: 'https://mobbin.com',
		description: 'Mobile app design patterns',
		category: 'general',
		icon: '📱',
	},
	{
		name: 'Feather Icons',
		url: 'https://feathericons.com',
		description: 'Minimalist icon set',
		category: 'shapes',
		icon: '🪶',
	},
	{
		name: 'Adobe Color',
		url: 'https://color.adobe.com',
		description: 'Professional color tools and palettes',
		category: 'colors',
		icon: '🌈',
	},
	{
		name: 'Lucide',
		url: 'https://lucide.dev',
		description: 'Beautiful & consistent icon toolkit',
		category: 'shapes',
		icon: '✨',
	},
	{
		name: 'Gradient Hunt',
		url: 'https://gradienthunt.com',
		description: 'Beautiful gradient collection',
		category: 'gradients',
		icon: '🌈',
	},
	{
		name: 'Dribbble Jobs',
		url: 'https://dribbble.com/jobs',
		description: 'Design jobs from top companies worldwide',
		category: 'jobs',
		icon: '🏀',
	},
	{
		name: 'Upwork',
		url: 'https://www.upwork.com',
		description: 'Freelance design projects and client work',
		category: 'jobs',
		icon: '🤝',
	},
	{
		name: 'Fiverr',
		url: 'https://www.fiverr.com',
		description: 'Freelance design services and gigs',
		category: 'jobs',
		icon: '💰',
	},

	// Typography
	{
		name: 'Fonts Ninja',
		url: 'https://www.fonts.ninja',
		description: 'Browser extension to identify fonts on any website',
		category: 'typography',
		icon: '🥷',
	},
	{
		name: 'Typespiration',
		url: 'https://typespiration.com',
		description: 'Typography inspiration and font combinations',
		category: 'typography',
		icon: '✨',
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
	{
		name: 'Huemint',
		url: 'https://huemint.com',
		description: 'AI-powered color palette generator',
		category: 'colors',
		icon: '🤖',
	},

	// Photos & Stock Images
	{
		name: 'Unsplash',
		url: 'https://unsplash.com',
		description: 'Beautiful free photos from talented photographers',
		category: 'photos',
		icon: '📸',
	},
	{
		name: 'Pexels',
		url: 'https://www.pexels.com',
		description: 'Free stock photos and videos',
		category: 'photos',
		icon: '🎬',
	},
	{
		name: 'Burst',
		url: 'https://burst.shopify.com',
		description: 'Free stock photos for commercial use',
		category: 'photos',
		icon: '💥',
	},
	{
		name: 'Pixabay',
		url: 'https://pixabay.com',
		description: 'Free images, videos, and music',
		category: 'photos',
		icon: '🖼️',
	},
	{
		name: 'StockVault',
		url: 'https://www.stockvault.net',
		description: 'Free stock photos and graphics',
		category: 'photos',
		icon: '📁',
	},
	{
		name: 'Freepik',
		url: 'https://www.freepik.com',
		description: 'Free vectors, stock photos, and PSD files',
		category: 'photos',
		icon: '🎨',
	},
	{
		name: 'Shutterstock',
		url: 'https://www.shutterstock.com',
		description: 'Premium stock photos, vectors, and illustrations',
		category: 'photos',
		icon: '📷',
	},
	{
		name: 'Getty Images',
		url: 'https://www.gettyimages.com',
		description: 'Premium stock photography and editorial images',
		category: 'photos',
		icon: '🏛️',
	},

	// Icons & Illustrations
	{
		name: 'Material Icons',
		url: 'https://fonts.google.com/icons',
		description: 'Google Material Design icons',
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
		name: 'Phosphor Icons',
		url: 'https://phosphoricons.com',
		description: 'Flexible icon family',
		category: 'shapes',
		icon: '⚡',
	},
	{
		name: 'iconmonstr',
		url: 'https://iconmonstr.com',
		description: 'Free simple icons for your next project',
		category: 'shapes',
		icon: '👹',
	},
	{
		name: 'Tabler Icons',
		url: 'https://tabler-icons.io',
		description: 'Free and open source icons',
		category: 'shapes',
		icon: '📊',
	},
	{
		name: 'Icons8',
		url: 'https://icons8.com',
		description: 'Icons, illustrations, and design resources',
		category: 'shapes',
		icon: '8️⃣',
	},
	{
		name: 'Flaticon',
		url: 'https://www.flaticon.com',
		description: 'Free vector icons and stickers',
		category: 'shapes',
		icon: '🎯',
	},
	{
		name: 'Noun Project',
		url: 'https://thenounproject.com',
		description: 'Icons for everything',
		category: 'shapes',
		icon: '📝',
	},
	{
		name: 'Streamline Icons',
		url: 'https://streamlineicons.com',
		description: 'Beautiful icon sets for modern interfaces',
		category: 'shapes',
		icon: '🌊',
	},
	{
		name: 'ShapeFactory',
		url: 'https://shapefactory.co',
		description: 'Geometric shapes and patterns',
		category: 'shapes',
		icon: '🔷',
	},

	// Gradients
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
		name: 'Toggl',
		url: 'https://toggl.com',
		description: 'Time tracking tool for freelancers and teams',
		category: 'productivity',
		icon: '⏱️',
	},
	{
		name: 'Calendly',
		url: 'https://calendly.com',
		description: 'Schedule meetings and appointments easily',
		category: 'productivity',
		icon: '📅',
	},
	{
		name: 'Stripe',
		url: 'https://stripe.com',
		description: 'Online payment processing for freelancers',
		category: 'productivity',
		icon: '💳',
	},
	{
		name: 'Rapid Proposals',
		url: 'https://rapidproposals.com',
		description:
			'AI-powered proposal generator for freelancers - create winning Upwork proposals in seconds',
		category: 'productivity',
		icon: '⚡',
	},
	{
		name: 'Slack',
		url: 'https://slack.com',
		description: 'Team communication and collaboration platform',
		category: 'productivity',
		icon: '💬',
	},
	{
		name: 'Zoom',
		url: 'https://zoom.us',
		description: 'Video conferencing and webinars',
		category: 'productivity',
		icon: '📹',
	},
	{
		name: 'Dropbox',
		url: 'https://www.dropbox.com',
		description: 'Cloud storage and file sharing',
		category: 'productivity',
		icon: '📦',
	},
	{
		name: 'Google Drive',
		url: 'https://drive.google.com',
		description: 'Cloud storage and collaboration tools',
		category: 'productivity',
		icon: '☁️',
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

	// Learning & Education
	{
		name: 'Skillshare',
		url: 'https://www.skillshare.com',
		description: 'Online learning platform for creative skills',
		category: 'learning',
		icon: '🎓',
	},
	{
		name: 'Udemy',
		url: 'https://www.udemy.com',
		description: 'Online courses for design and development',
		category: 'learning',
		icon: '📚',
	},
	{
		name: 'Coursera',
		url: 'https://www.coursera.org',
		description: 'University-level design and art courses',
		category: 'learning',
		icon: '🎓',
	},
	{
		name: 'YouTube',
		url: 'https://www.youtube.com',
		description: 'Free design tutorials and inspiration',
		category: 'learning',
		icon: '📺',
	},
	{
		name: 'Design Better',
		url: 'https://www.designbetter.co',
		description: 'Design education and resources by InVision',
		category: 'learning',
		icon: '✨',
	},
	{
		name: 'Interaction Design Foundation',
		url: 'https://www.interaction-design.org',
		description: 'UX/UI design courses and certifications',
		category: 'learning',
		icon: '🎯',
	},
	{
		name: 'Canva Design School',
		url: 'https://www.canva.com/designschool',
		description: 'Free design tutorials and courses',
		category: 'learning',
		icon: '🎨',
	},
	{
		name: 'Adobe Creative Cloud Tutorials',
		url: 'https://helpx.adobe.com/creative-cloud/tutorials-explained.html',
		description: 'Official Adobe tutorials for all Creative Cloud apps',
		category: 'learning',
		icon: '🎬',
	},

	// Jobs & Careers
	{
		name: 'Awwwards Jobs',
		url: 'https://www.awwwards.com/jobs',
		description: 'Premium design jobs from award-winning companies',
		category: 'jobs',
		icon: '🏆',
	},
	{
		name: 'Behance Jobs',
		url: 'https://www.behance.net/joblist',
		description: 'Creative job opportunities and freelance work',
		category: 'jobs',
		icon: '💼',
	},
	{
		name: 'AngelList',
		url: 'https://angel.co',
		description: 'Startup jobs and opportunities for designers',
		category: 'jobs',
		icon: '👼',
	},
	{
		name: 'Remote.co',
		url: 'https://remote.co',
		description: 'Remote design jobs and work opportunities',
		category: 'jobs',
		icon: '🏠',
	},
	{
		name: 'We Work Remotely',
		url: 'https://weworkremotely.com',
		description: 'Remote design and development jobs',
		category: 'jobs',
		icon: '🌐',
	},
	{
		name: 'FlexJobs',
		url: 'https://www.flexjobs.com',
		description: 'Flexible and remote design job opportunities',
		category: 'jobs',
		icon: '🔄',
	},
	{
		name: '99designs',
		url: 'https://99designs.com',
		description: 'Design contests and freelance opportunities',
		category: 'jobs',
		icon: '🎨',
	},
	{
		name: 'Toptal',
		url: 'https://www.toptal.com',
		description: 'Elite freelance designers and developers',
		category: 'jobs',
		icon: '⭐',
	},
	{
		name: 'Freelancer',
		url: 'https://www.freelancer.com',
		description: 'Older platform with lower traffic but good backup option',
		category: 'jobs',
		icon: '✈️',
	},
	{
		name: 'Flowremote',
		url: 'https://flowremote.io',
		description: 'Remote and local jobs for Webflow developers and designers',
		category: 'jobs',
		icon: '🌊',
	},
	{
		name: 'Project Pricing Calculator',
		url: 'https://www.cashyourflow.com',
		description: 'Free calculator to price your Webflow projects',
		category: 'jobs',
		icon: '💰',
	},

	// Webflow
	{
		name: 'Webflow',
		url: 'https://webflow.com',
		description: 'Visual web design platform with CMS and hosting',
		category: 'webflow',
		icon: '🌊',
	},
	{
		name: 'Webflow University',
		url: 'https://university.webflow.com',
		description: 'Official Webflow tutorials and courses',
		category: 'webflow',
		icon: '🎓',
	},
	{
		name: 'Webflow Forum',
		url: 'https://forum.webflow.com',
		description: 'Community forum for Webflow questions and discussions',
		category: 'webflow',
		icon: '💬',
	},
	{
		name: 'Webflow Tools',
		url: 'https://webflow.com/tools',
		description: 'Plugins, tools, add-ons, and custom code solutions',
		category: 'webflow',
		icon: '🔧',
	},
	{
		name: 'Boosters',
		url: 'https://boosters.app',
		description:
			'Advanced code solutions added directly inside Webflow - 100% Free',
		category: 'webflow',
		icon: '⚡',
	},
	{
		name: 'Flowbase',
		url: 'https://flowbase.co',
		description: 'Cloneable Webflow assets, templates, guides and videos',
		category: 'webflow',
		icon: '📚',
	},
	{
		name: 'Webflow Showcase',
		url: 'https://webflow.com/made-in-webflow',
		description: 'Live websites built with Webflow',
		category: 'webflow',
		icon: '🏆',
	},
	{
		name: 'Flowremote',
		url: 'https://flowremote.io',
		description: 'Remote and local jobs for Webflow developers and designers',
		category: 'webflow',
		icon: '💼',
	},
];

const categories = [
	{
		id: 'general',
		name: 'Inspiration',
		icon: Layout,
		color: 'text-primary',
	},
	{ id: 'typography', name: 'Typography', icon: Type, color: 'text-primary' },
	{ id: 'colors', name: 'Colors', icon: Palette, color: 'text-red-600' },
	{
		id: 'shapes',
		name: 'Icons & Illustrations',
		icon: Shapes,
		color: 'text-green-600',
	},
	{
		id: 'photos',
		name: 'Photos',
		icon: Camera,
		color: 'text-amber-600',
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
	{
		id: 'productivity',
		name: 'Productivity',
		icon: Zap,
		color: 'text-yellow-600',
	},
	{
		id: 'learning',
		name: 'Learning',
		icon: BookOpen,
		color: 'text-violet-600',
	},
	{
		id: 'jobs',
		name: 'Jobs',
		icon: Briefcase,
		color: 'text-teal-600',
	},
	{
		id: 'webflow',
		name: 'Webflow',
		icon: Globe,
		color: 'text-primary',
	},
];

export default function Home() {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 12;

	const filteredSites = inspirationSites.filter((site) => {
		const matchesSearch =
			site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			site.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === 'all' || site.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	// Calculate pagination
	const totalPages = Math.ceil(filteredSites.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentSites = filteredSites.slice(startIndex, endIndex);

	// Reset to page 1 when search or category changes
	React.useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm, selectedCategory]);

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
					{currentSites.map((site, index) => (
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

				{/* Pagination Controls */}
				{totalPages > 1 && (
					<div className='flex justify-center items-center space-x-2 mt-8 sm:mt-10'>
						<button
							onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
							disabled={currentPage === 1}
							className='px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer rounded-md'
						>
							Previous
						</button>

						<div className='flex space-x-1'>
							{Array.from({ length: totalPages }, (_, i) => i + 1).map(
								(page) => (
									<button
										key={page}
										onClick={() => setCurrentPage(page)}
										className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer ${
											currentPage === page
												? 'bg-primary text-primary-foreground shadow-md'
												: 'text-muted-foreground hover:text-primary hover:bg-muted hover:shadow-sm'
										}`}
									>
										{page}
									</button>
								)
							)}
						</div>

						<button
							onClick={() =>
								setCurrentPage(Math.min(totalPages, currentPage + 1))
							}
							disabled={currentPage === totalPages}
							className='px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer rounded-md'
						>
							Next
						</button>
					</div>
				)}

				{/* Results Info */}
				{filteredSites.length > 0 && (
					<div className='text-center mt-4 sm:mt-6'>
						<p className='text-sm text-muted-foreground'>
							Showing {startIndex + 1}-
							{Math.min(endIndex, filteredSites.length)} of{' '}
							{filteredSites.length} resources
						</p>
					</div>
				)}

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
