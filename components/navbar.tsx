"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, Download, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const navLinks = [
    { name: t("nav.about"), href: "about" },
    { name: t("nav.skills"), href: "skills" },
    { name: t("nav.education"), href: "education" },
    { name: t("nav.projects"), href: "projects" },
    { name: t("nav.contact"), href: "contact" },
  ]

  return (
      <header
          className={cn(
              "fixed top-0 w-full z-50 transition-all duration-500",
              scrolled ? "glass-morphism shadow-2xl border-b border-border/20" : "bg-transparent",
          )}
      >
        <div className="container mx-auto px-6 md:px-0 py-4">
          <div className="flex items-center justify-between">
            <button
                onClick={() => scrollToSection("home")}
                className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              {t("nav.name")}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                  <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm cursor-pointer font-medium text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full"></span>
                  </button>
              ))}
              <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setLanguage(language === "en" ? "bg" : "en")}
                  className="rounded-full cursor-pointer hover:bg-primary/10 transition-all duration-300"
                  title={language === "en" ? "Switch to Bulgarian" : "Превключи на английски"}
              >
                <Languages className="h-4 w-4" />
                <span className="ml-1 text-xs font-medium">{language.toUpperCase()}</span>
              </Button>
              <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full cursor-pointer hover:bg-primary/10 transition-all duration-300"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button className="cursor-pointer bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="h-4 w-4 mr-2" />
                {t("nav.resume")}
              </Button>
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setLanguage(language === "en" ? "bg" : "en")}
                  className="rounded-full cursor-pointer"
                  title={language === "en" ? "Switch to Bulgarian" : "Превключи на английски"}
              >
                <Languages className="h-3 w-3" />
                <span className="ml-1 text-xs">{language.toUpperCase()}</span>
              </Button>
              <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full cursor-pointer"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-4 w-4 cursor-pointer" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
            <div className="md:hidden glass-morphism border-t border-border/20">
              <div className="container mx-auto px-6 py-4">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                      <button
                          key={link.name}
                          onClick={() => scrollToSection(link.href)}
                          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
                      >
                        {link.name}
                      </button>
                  ))}
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground">
                    <Download className="h-4 w-4 mr-2" />
                    {t("nav.resume")}
                  </Button>
                </nav>
              </div>
            </div>
        )}
      </header>
  )
}
