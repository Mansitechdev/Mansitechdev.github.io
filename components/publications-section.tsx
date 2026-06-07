"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, FileText, ExternalLink, ImageIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const awards = [
  {
    title: "Performance Recognition Award",
    organization: "Planys Technologies",
    year: "Jun 2025",
    description:
      "Recognized during Planys Technologies’ 10-year celebration for contributions across multiple engineering projects, including a major railway bridge inspection initiative in India.",
    link: "/mansi.jpeg",
    linkLabel: "View Photo",
  },
  {
    title: "Best Pervasive System Award",
    organization: "University of Twente",
    year: "2026",
    description:
      "Awarded for the Wearable Ergonomic Risk Awareness System project, recognizing ambitious hardware integration, multiple IMU sensing, and robust real-time posture classification.",
    link: "/PervasiveComputing-26-Cert1.pdf",
    linkLabel: "View Certificate",
  },
]

const publications = [
  {
    title: "Automatic Pet Feeder",
    venue: "AIP Conference Proceedings",
    type: "Conference Paper",
    year: "2023",
    description:
      "Published research on an IoT-enabled automated pet feeding system featuring embedded control, wireless connectivity, and remote monitoring.",
    link: "https://pubs.aip.org/aip/acp/article/2788/1/130005/2903975/Automatic-pet-feeder",
    linkLabel: "View Publication",
  },
]

export function PublicationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="publications" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase">
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Awards &{" "}
            <span className="gradient-text">Publications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Awards & Recognition</h3>
            </div>

            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {award.title}
                        </h4>
                        <p className="text-primary font-medium">
                          {award.organization}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs flex-shrink-0">
                        {award.year}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {award.description}
                    </p>

                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      <ImageIcon className="w-4 h-4" />
                      {award.linkLabel}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-accent/10">
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Publication</h3>
            </div>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-all"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                 <div className="relative">
  <div className="flex items-start justify-between gap-4 mb-3">
    <div>
      <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-1">
        {pub.title}
      </h4>

      <p className="text-accent font-medium">
        {pub.venue}
      </p>
    </div>

    <div className="flex flex-col items-end gap-1 flex-shrink-0">
      <Badge variant="outline" className="text-xs">
        {pub.type}
      </Badge>
      <span className="text-xs text-muted-foreground">
        {pub.year}
      </span>
    </div>
  </div>

  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
    {pub.description}
  </p>

  <a
    href={pub.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
  >
    <ExternalLink className="w-4 h-4" />
    {pub.linkLabel}
  </a>
</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}