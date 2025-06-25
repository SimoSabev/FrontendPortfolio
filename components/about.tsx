"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User, Target, Lightbulb, Heart } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const features = [
    {
      icon: Target,
      title: "Precision & Quality",
      description: "Every pixel matters. I focus on creating pixel-perfect designs with attention to detail.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Genuinely passionate about creating exceptional user experiences that make a difference.",
    },
  ]

  return (
    <section id="about" className="py-32 relative gradient-bg grid-bg">
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
            <User className="h-6 w-6 text-primary" />
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with passion and precision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
          >
            <Card className="advanced-card group">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Professional Journey
                  </h3>
                  <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <p className="text-base leading-relaxed text-muted-foreground">
                      I&apos;m a professional front-end developer with over two years of experience in the industry. I
                      specialize in building beautiful, clean, and highly functional websites and applications, whether
                      through custom code or platforms.
                    </p>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      My focus is on creating user-friendly, responsive, and visually appealing websites that provide
                      exceptional user experiences across all devices and platforms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                variants={fadeIn}
              >
                <Card className="advanced-card group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  )
}
