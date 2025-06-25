"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail, Phone, Sparkles, Code, Palette } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export default function Hero() {
  const { t } = useLanguage()
  const [text, setText] = useState("")
  const fullText = t("hero.role")

  useEffect(() => {
    setText("")
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [fullText])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
      <section id="home" className="min-h-screen relative overflow-hidden gradient-bg grid-bg">
        <div className="container mx-auto px-6 md:px-0 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen pt-20">
            {/* Left Column - Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 space-y-8"
            >
              {/* Status Badge */}
              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
              >
                <Badge
                    variant="outline"
                    className="border-primary/30 text-primary bg-primary/5 px-4 py-2 text-sm font-medium backdrop-blur-sm"
                >
                  <Sparkles className="h-3 w-3 mr-2" />
                  {t("hero.available")}
                </Badge>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                    {t("name.1")}
                  </span>
                    <span className="block bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
                    {t("name.2")}
                  </span>
                  </h1>
                  <div className="mt-6">
                    <div className="flex items-center gap-3">
                      <div className="h-px bg-gradient-to-r from-primary to-transparent flex-1"></div>
                      <Badge
                          variant="outline"
                          className="border-primary/30 text-primary bg-primary/5 px-4 py-2 text-base font-medium backdrop-blur-sm"
                      >
                        {text}
                        <span className="animate-blink ml-1">|</span>
                      </Badge>
                      <div className="h-px bg-gradient-to-l from-primary to-transparent flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
              >
                {t("hero.description")}
              </motion.p>

              {/* Skills Tags */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-3"
              >
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                  <Code className="h-3 w-3 mr-2" />
                  React & Next.js
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                  <Palette className="h-3 w-3 mr-2" />
                  UI/UX Design
                </Badge>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span>+359 88 503 1865</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span>sabevsimeon08@gmail.com</span>
                </div>
              </motion.div>

              {/* Actions */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
                    onClick={() => scrollToSection("projects")}
                >
                  {t("hero.viewWork")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    onClick={() => scrollToSection("contact")}
                >
                  {t("hero.getInTouch")}
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-4"
              >
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden advanced-card relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                      src="/simo.jpg"
                      alt="Simeon Sabev - Front End Developer"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                      quality={90}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 rounded-2xl shadow-lg animate-pulse-glow">
                  <Code className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-primary/80 to-primary text-primary-foreground p-3 rounded-xl shadow-lg animate-float-slow">
                  <Palette className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
