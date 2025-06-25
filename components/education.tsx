"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" className="py-32 relative gradient-bg grid-bg">
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
            <GraduationCap className="h-6 w-6 text-primary" />
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building a strong foundation for technological excellence
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <Card className="advanced-card group">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      ITPG &quot;Academic Blagovest Sendov&quot;
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">Senior High School</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>2022 - Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Varna, Bulgaria</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Currently pursuing senior high school education with a focus on technology and programming, building
                    a strong foundation for a career in web development and software engineering.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div className="section-divider"></div>
    </section>
  )
}
