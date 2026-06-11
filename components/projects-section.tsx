"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Award,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Image as ImageIcon,
} from "lucide-react"

const projects = [
  {
  title: "Wearable Ergonomic Risk Awareness System",
  date: "Feb 2026 – Apr 2026",
  association: "University of Twente",

  image: "/projects/wearable-system/hardware.drawio.png",

  description:
    "Developed a wearable ergonomic risk awareness system for occupational posture monitoring.",

  fullDescription:
    "The system used an ESP32-S3 XIAO, four MPU6050 IMU sensors placed at the hip, lower back, upper back, and neck, and a TCA9548A I2C multiplexer for multi-sensor communication. Firmware implemented 5-second calibration, approximately 100 Hz sensor reading, FSM-based posture classification, delayed haptic feedback, and INT8 on-device ML inference. The final quantized model achieved 74.2% validation accuracy.",

  technologies: [
    "ESP32-S3 XIAO",
    "MPU6050",
    "TCA9548A",
    "TinyML",
    "Embedded AI",
    "I2C",
    "FSM",
    "INT8 Inference",
    "Haptic Feedback",
    "Edge Impulse"
  ],

  achievement:
    "Best Pervasive System Award – University of Twente",

  challenges: [
    "Integrated four MPU6050 IMU sensors using TCA9548A I2C multiplexing.",
    "Implemented FSM states for standing, slouching, bending, deep bend, and prolonged flexion.",
    "Designed delayed haptic feedback with cooldown to reduce alarm fatigue.",
    "Deployed INT8 neural network inference on ESP32-S3 for on-device posture classification."
  ],

  results: [
    "Received Best Pervasive System Award at the University of Twente.",
    "Achieved 74.2% validation accuracy with the INT8 posture classification model.",
    "Demonstrated real-time wearable posture monitoring without cloud connectivity."
  ],

  link: "/projects/wearable-system/PervasiveComputing-26-Cert1.pdf",
  linkLabel: "View Award Certificate",

  paperLink: "/projects/wearable-system/Research_Paper.pdf",
  paperLabel: "View Research Paper",

  reportLink: "/projects/wearable-system/Pervasive Computing.pptx",
  reportLabel: "View Project Presentation",

  featured: true
}
]

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0]
  index: number
  isInView: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="group"
    >
      <div className="relative rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">
        <div className="relative h-56 bg-gradient-to-br from-secondary via-secondary/80 to-muted overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <ImageIcon className="w-12 h-12 text-muted-foreground/50 mx-auto" />
                <p className="text-sm text-muted-foreground/50">Project Image</p>
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

          {project.achievement && (
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium backdrop-blur-sm">
              <Award className="w-3 h-3" />
              Highlight
            </div>
          )}
        </div>

        <div className="p-6 space-y-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <p className="text-xs text-primary font-mono">{project.date}</p>
              <span className="text-xs text-muted-foreground">•</span>
              <p className="text-xs text-muted-foreground">{project.association}</p>
            </div>

            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {isExpanded ? project.fullDescription : project.description}
            </p>
          </div>

          {project.achievement && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Award className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-primary">
                {project.achievement}
              </span>
            </div>
          )}

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-4 pt-4 border-t border-border/50"
            >
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Engineering Focus
                </h4>
                <ul className="space-y-1">
                  {project.challenges.map((challenge, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Outcome
                </h4>
                <ul className="space-y-1">
                  {project.results.map((result, i) => (
                    <li
                      key={i}
                      className="text-sm text-primary flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.technologies
              .slice(0, isExpanded ? undefined : 5)
              .map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}

            {!isExpanded && project.technologies.length > 5 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 5} more
              </Badge>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex-1 gap-2"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Technical Details
                </>
              )}
            </Button>

            {project.link && project.linkLabel && (
              <Button variant="outline" size="sm" asChild className="gap-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  {project.linkLabel}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 circuit-bg" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="gradient-text">Work</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl">
            Embedded systems, FPGA, robotics, IoT, and embedded AI projects
            focused on real-time sensing, hardware-software integration, and
            practical deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}