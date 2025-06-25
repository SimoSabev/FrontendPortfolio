"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, Send } from "lucide-react"

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "+359 88 503 1865",
      href: "tel:+359885031865",
      description: "Available Mon-Fri, 9AM-6PM",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sabevsimeon08@gmail.com",
      href: "mailto:sabevsimeon08@gmail.com",
      description: "I'll respond within 24 hours",
    },
  ]

  return (
    <section id="contact" className="py-32 relative gradient-bg grid-bg">
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
            <MessageCircle className="h-6 w-6 text-primary" />
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card className="advanced-card group h-full">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {method.label}
                        </h3>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        variant="link"
                        className="p-0 h-auto text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
                        asChild
                      >
                        <a href={method.href}>{method.value}</a>
                      </Button>

                      <Button
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                        asChild
                      >
                        <a href={method.href}>
                          <Send className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                          {method.label === "Phone" ? "Call Now" : "Send Email"}
                        </a>
                      </Button>
                    </div>
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
          className="text-center mt-16"
        >
          <Card className="advanced-card group max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always excited to work on new projects and help bring innovative ideas to life. Let's discuss how we
                can create something amazing together.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="mailto:sabevsimeon08@gmail.com">
                  <Send className="h-4 w-4 mr-2" />
                  Start a Conversation
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
