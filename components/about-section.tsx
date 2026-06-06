"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const storyParagraphs = [
  {
    text: "I used to think that if a schematic was correct, the system would work.",
    highlight: false,
  },
  {
    text: "That changed when I started working with real embedded systems outside controlled lab environments and encountered noise, vibration, grounding issues, timing delays, and hardware-software interactions that simulations never fully captured.",
    highlight: true,
  },
  {
    text: "That experience changed how I think about engineering: embedded systems are not just about components, but about interactions between hardware, firmware, timing, and the physical world.",
    highlight: false,
  },
  {
    text: "Since then, I've become increasingly interested in system-level embedded engineering — from real-time firmware and hardware-software co-design to sensor integration, FPGA-based systems, and performance-critical embedded platforms.",
    highlight: false,
  },
  {
    text: "My experience spans embedded hardware, firmware development, multi-sensor systems, board bring-up, and real-world debugging for robotic and sensing platforms.",
    highlight: false,
  },
  {
    text: "I'm particularly interested in reliable low-latency systems that must operate under real-world constraints rather than ideal conditions.",
    highlight: true,
  },
  {
    text: "I enjoy challenging assumptions early, debugging complex interactions, and building systems that work reliably outside the lab.",
    highlight: false,
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 circuit-bg" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider uppercase">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Journey to{" "}
            <span className="gradient-text">System-Level Thinking</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          
          {/* Story paragraphs */}
          <div className="space-y-12 pl-8 md:pl-20">
            {storyParagraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="absolute -left-8 md:-left-12 top-2 w-4 h-4 rounded-full border-2 border-primary bg-background">
                  <div className={`absolute inset-1 rounded-full ${paragraph.highlight ? "bg-accent" : "bg-primary/50"}`} />
                </div>
                
                <p
                  className={`text-lg leading-relaxed ${
                    paragraph.highlight
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {paragraph.highlight ? (
                    <span className="relative">
                      <span className="absolute -left-4 top-0 text-primary/50">&ldquo;</span>
                      {paragraph.text}
                      <span className="text-primary/50">&rdquo;</span>
                    </span>
                  ) : (
                    paragraph.text
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
