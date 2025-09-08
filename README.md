# DesignInspo 🎨

A beautiful, centralized landing page for design inspiration. Find the best websites for typography, colors, shapes, gradients, textures, and more - all in one place!

![DesignInspo Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=DesignInspo+Preview)

## ✨ Features

- **🎨 Curated Inspiration Sources**: Hand-picked collection of the best design inspiration websites
- **🔍 Smart Search**: Find inspiration sources by name or description
- **🏷️ Category Filtering**: Filter by typography, colors, shapes, gradients, textures, and general design
- **🌙 Dark/Light Mode**: Beautiful theme switching with system preference detection
- **📱 Responsive Design**: Perfect experience on desktop, tablet, and mobile
- **⚡ Fast & Modern**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **🎯 Clean UI**: Minimalist, aesthetic design focused on usability

## 🚀 Categories

### Typography
- Google Fonts - Extensive collection of free web fonts
- Typewolf - Typography inspiration and font recommendations
- Fonts in Use - Real-world typography examples
- Font Pair - Beautiful Google Font combinations
- Type Scale - Perfect typography scale calculator

### Colors
- Coolors - Color palette generator and inspiration
- Color Hunt - Curated color palettes
- Adobe Color - Professional color tools and palettes
- Material Design Colors - Google's Material Design color system
- ColorZilla - Advanced color picker and gradient tools

### Shapes & Icons
- ShapeFactory - Geometric shapes and patterns
- Heroicons - Beautiful hand-crafted SVG icons
- Feather Icons - Minimalist icon set
- Lucide - Beautiful & consistent icon toolkit
- Phosphor Icons - Flexible icon family

### Gradients
- Gradient Hunt - Beautiful gradient collection
- UI Gradients - Handpicked gradient colors
- WebGradients - Free collection of 180 linear gradients
- Gradient Magic - CSS gradient collection

### Textures & Patterns
- Subtle Patterns - High-quality subtle patterns
- Pattern Library - Curated pattern collection
- Hero Patterns - Free SVG background patterns
- Pattern Monster - Free vector patterns

### General Design
- Awwwards - The awards for design, creativity and innovation
- Dribbble - Discover the world's top designers & creatives
- Behance - Showcase and discover creative work
- Mobbin - Mobile app design patterns
- Page Flows - User flow design inspiration
- Landingfolio - Landing page design inspiration

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Animations**: Framer Motion
- **Deployment**: Vercel (ready)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/design-inspiration.git
cd design-inspiration
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
design-inspiration/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and CSS variables
│   │   ├── layout.tsx       # Root layout with theme provider
│   │   └── page.tsx         # Main landing page
│   └── components/
│       ├── header.tsx       # Navigation header
│       ├── theme-provider.tsx # Theme context provider
│       └── theme-toggle.tsx # Dark/light mode toggle
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## 🎨 Customization

### Adding New Inspiration Sources

Edit `src/app/page.tsx` and add new entries to the `inspirationSites` array:

```typescript
{
  name: "Your Site Name",
  url: "https://yoursite.com",
  description: "Brief description of what this site offers",
  category: "typography", // or "colors", "shapes", "gradients", "textures", "general"
  icon: "🎨" // Emoji or icon representation
}
```

### Adding New Categories

1. Add the category to the `categories` array in `src/app/page.tsx`
2. Import the appropriate icon from `lucide-react`
3. Update the header navigation in `src/components/header.tsx`

### Styling

The project uses Tailwind CSS with custom CSS variables for theming. Colors and design tokens are defined in:
- `src/app/globals.css` - CSS variables for light/dark themes
- `tailwind.config.ts` - Tailwind configuration and custom colors

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Deploy to Other Platforms

The project is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Any platform that supports Node.js

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All the amazing design inspiration websites featured in this project
- The Next.js team for the incredible framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icon set

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact me at [your-email@example.com]

---

Made with ❤️ for designers and developers who need quick access to design inspiration.