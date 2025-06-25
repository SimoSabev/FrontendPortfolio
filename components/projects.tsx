"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Folder, Globe, Calendar, Star } from "lucide-react"

export default function Projects() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      title: "Shiseikan Aikido Dojo",
      url: "aikidoshiseikan.com",
      period: "2024-2025",
      description:
        "Professional martial arts website featuring class schedules, instructor profiles, and member portal with modern design and seamless user experience.",
      tags: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
      featured: true,
    },
    {
      title: "Ilios Decor",
      url: "iliosdecor.com",
      period: "2024-2024",
      description:
        "Elegant interior design showcase with portfolio gallery, client management system, and booking functionality for premium decoration services.",
      tags: ["Vue.js", "SCSS", "Animation", "Portfolio"],
      featured: false,
    },
    {
      title: "Azion",
      url: "azion.online",
      period: "2024-2025",
      description:
        "Modern business platform with responsive design, SEO optimization, and performance-focused architecture for enhanced user engagement.",
      tags: ["JavaScript", "CSS3", "SEO", "Performance"],
      featured: true,
    },
    {
      title: "YachtllyWood",
      url: "yachtllywood.com",
      period: "2025-2025",
      description:
        "Luxury yacht services website featuring high-end design, booking system, and gallery showcase for premium maritime experiences.",
      tags: ["React", "Luxury Design", "Booking System", "Gallery"],
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-32 relative gradient-bg grid-bg">
      <div className="container mx-auto px-6 md:px-0 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20"></div>
            <Folder className="h-6 w-6 text-primary" />
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={fadeIn}
              className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="advanced-card group h-full overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent h-48 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                      <Globe className="h-16 w-16 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                      <div className="absolute inset-0 shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground flex-shrink-0">
                          <Calendar className="h-3 w-3" />
                          <span>{project.period}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                      asChild
                    >
                      <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit {project.url}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  )
}
