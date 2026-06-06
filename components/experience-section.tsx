"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "Planys Technologies",
    role: "Design & Integration Engineer",
    period: "July 2024 – August 2025",
    location: "Chennai, India",
    tags: ["ROV/AUV systems", "ARM firmware", "PCB design", "System integration", "EMI/EMC", "Hardware validation"],
    highlights: [
      "Designed and integrated embedded electronics, power management, and communication subsystems for ROV/AUV robotic platforms",
      "Developed ARM and AVR firmware in Embedded C/C++",
      "Implemented SPI, I2C, and UART sensor interfaces",
      "Performed PCB design, bring-up, validation, and debugging",
      "Worked on signal integrity, EMI/EMC reliability, and system integration",
      "Conducted hardware validation using oscilloscopes, LCR meters, and embedded debugging tools",
      "Collaborated on multi-sensor robotic systems and deployment-oriented engineering",
    ],
    featured: true,
  },
  {
    company: "Zaptics Research",
    role: "Junior Embedded Systems Engineer",
    period: "June 2023 – July 2024",
    location: "Noida, India",
    tags: ["High-speed PCB design", "Altium Designer", "Board bring-up", "Signal integrity"],
    highlights: [
      "Designed embedded schematics and high-speed PCB layouts in Altium Designer",
      "Conducted prototype board bring-up and debugging",
      "Improved hardware reliability through validation testing",
      "Performed signal integrity reviews and component selection",
    ],
    featured: true,
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
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
          <p className="text-primary font-mono text-sm tracking-wider uppercase">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Professional{" "}
            <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent/50 to-transparent" />

          {/* Experiences */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative pl-8 md:pl-16"
              >
                {/* Timeline node */}
                <div className="absolute left-0 md:left-4 top-0 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-primary" />

                <div className="group relative p-6 rounded-xl border transition-all duration-300 bg-card/80 border-border/50 hover:border-primary/50">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.company}
                        </h3>
                        <p className="text-primary font-medium">{exp.role}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1">
                        <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {exp.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
