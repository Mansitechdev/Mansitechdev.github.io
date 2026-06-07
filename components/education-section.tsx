"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Languages } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const education = [
  {
    institution: "University of Twente",
    degree: "Master of Science in Embedded Systems",
    location: "Enschede, Netherlands",
    focus: ["Embedded AI", "System on Chip Design", "Robot Perception", "FPGA Design", "Hardware Software Co-Design"],
    current: true,
  },
  {
    institution: "Vellore Institute of Technology",
    degree: "Bachelor of Technology",
    field: "Electronics and Communication Engineering",
    location: "Chennai, India",
    current: false,
  },
]

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Dutch", level: "A1, Currently learning" },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-32 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 circuit-bg" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase">Background</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Education &{" "}
            <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={`p-6 rounded-xl border transition-all ${
                    edu.current
                      ? "bg-card border-primary/30"
                      : "bg-card/50 border-border/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-foreground">{edu.institution}</h4>
                    {edu.current && (
                      <Badge variant="outline" className="border-primary/50 text-primary text-xs">
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="text-primary font-medium">{edu.degree}</p>
                  {edu.field && <p className="text-muted-foreground text-sm">{edu.field}</p>}
                  <p className="text-muted-foreground text-sm">{edu.location}</p>
                  
                  {edu.focus && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.focus.map((area) => (
                        <Badge key={area} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Languages className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Languages</h3>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="p-3 rounded-lg bg-card/50 border border-border/30 text-center"
                  >
                    <p className="font-medium text-foreground text-sm">{lang.name}</p>
                    <p className="text-xs text-muted-foreground">{lang.level}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
