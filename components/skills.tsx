"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, CheckCircle2, TrendingUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Skills() {
  const { t } = useLanguage()

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const skillCategories = [
    {
      title: t("skills.core"),
      skills: [
        { name: t("skills.frontend"), level: 95 },
        { name: t("skills.uiux"), level: 88 },
        { name: t("skills.responsive"), level: 92 },
        { name: t("skills.performance"), level: 85 },
      ],
    },
    {
      title: t("skills.professional"),
      skills: [
        { name: t("skills.seo"), level: 80 },
        { name: t("skills.communication"), level: 90 },
        { name: t("skills.problemSolving"), level: 95 },
        { name: t("skills.projectManagement"), level: 82 },
      ],
    },
  ]

  const additionalSkills = [
    t("skills.fastBuilding"),
    t("skills.customerService"),
    t("skills.multipleProjects"),
    t("skills.analytical"),
  ]

  return (
      <section id="skills" className="py-32 relative gradient-bg grid-bg">
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
              <Zap className="h-6 w-6 text-primary" />
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6">
              {t("skills.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("skills.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
                <motion.div
                    key={categoryIndex}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                    variants={fadeIn}
                >
                  <Card className="advanced-card group h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h3>
                      </div>
                      <div className="space-y-6">
                        {category.skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                                className="space-y-2"
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                <span className="text-xs text-muted-foreground">{skill.level}%</span>
                              </div>
                              <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 }}
                                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                                />
                              </div>
                            </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </div>

          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeIn}
          >
            <Card className="advanced-card group">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  {t("skills.additional")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {additionalSkills.map((skill, index) => (
                      <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group/item"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground group-hover/item:text-primary transition-colors duration-300">
                      {skill}
                    </span>
                      </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div className="section-divider"></div>
      </section>
  )
}
