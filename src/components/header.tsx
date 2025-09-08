"use client"

import { ThemeToggle } from "./theme-toggle"
import { Palette, Type, Shapes, Layers, Image } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Palette className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DesignInspo</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#typography" className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors">
            <Type className="h-4 w-4" />
            <span>Typography</span>
          </a>
          <a href="#colors" className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors">
            <Palette className="h-4 w-4" />
            <span>Colors</span>
          </a>
          <a href="#shapes" className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors">
            <Shapes className="h-4 w-4" />
            <span>Shapes</span>
          </a>
          <a href="#gradients" className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors">
            <Layers className="h-4 w-4" />
            <span>Gradients</span>
          </a>
          <a href="#textures" className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors">
            <Image className="h-4 w-4" />
            <span>Textures</span>
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
