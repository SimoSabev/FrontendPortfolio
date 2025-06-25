"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User, Target, Lightbulb, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function About() {

  const { t } = useLanguage()

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const features = [
    {
      icon: Target,
      title: t("about.precision.title"),
      description: t("about.precision.desc"),
    },
    {
      icon: Lightbulb,
      title: t("about.innovation.title"),
      description: t("about.innovation.desc"),
    },
    {
      icon: Heart,
      title: t("about.innovation.title"),
      description: t("about.innovation.desc"),
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
            {t("about.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("about.subtitle")}</p>
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
                    {t("about.journey")}
                  </h3>
                  <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <p className="text-base leading-relaxed text-muted-foreground">{t("about.description1")}</p>
                    <p className="text-base leading-relaxed text-muted-foreground">{t("about.description2")}</p>
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
