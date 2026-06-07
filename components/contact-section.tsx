"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Linkedin, MapPin, Send, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s{" "}
            <span className="gradient-text">Connect</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in embedded systems, robotics, FPGA, or thesis opportunities?
            I&apos;d be happy to connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <a
            href="mailto:mansibhardwaj2001@gmail.com"
            className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Email
                </p>
                <p className="text-muted-foreground text-sm">
                  mansibhardwaj2001@gmail.com
                </p>
                <p className="text-muted-foreground text-xs">
                  m.bhardwaj@student.utwente.nl
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/mansi-bhardwaj2023/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>

              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  LinkedIn
                </p>
                <p className="text-muted-foreground text-sm">
                  linkedin.com/in/mansi-bhardwaj2023
                </p>
              </div>
            </div>
          </a>

          <div className="p-6 rounded-xl bg-card border border-border/50">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Briefcase className="w-6 h-6" />
              </div>

              <div>
                <p className="font-semibold text-foreground">Availability</p>
                <p className="text-muted-foreground text-sm">
                  Open to student roles, internships, and thesis projects
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border/50">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <p className="font-semibold text-foreground">Location</p>
                <p className="text-muted-foreground text-sm">
                  Enschede, Overijssel, Netherlands
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" className="gap-2 glow-primary" asChild>
            <a href="mailto:mansibhardwaj2001@gmail.com?subject=Portfolio Inquiry">
              <Send className="w-4 h-4" />
              Send a Message
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}