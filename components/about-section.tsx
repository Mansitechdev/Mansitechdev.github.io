"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-12"
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase">
  About
</p>

<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
  From Components to{" "}
  <span className="gradient-text">Systems</span>
</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-base">
  My interest in embedded systems began with a fascination for how hardware and software interact to create intelligent systems. Industry experience later taught me that successful systems depend on much more than correct schematics.
</p>

            <p className="text-base">
              Working on robotic platforms, embedded hardware, and real-world deployments exposed me to challenges such as noise, timing constraints, signal integrity, power management, and hardware-software integration.
            </p>

            <p className="text-base">
  Today, I am most interested in system-level embedded engineering, where hardware, firmware, FPGA acceleration, sensing, and validation come together to build reliable real-world systems.
</p>
  <p className="text-base">
              My experience spans embedded hardware design, firmware development, PCB bring-up, FPGA systems, embedded AI, and robotic sensing platforms.
            </p>
<p className="text-base">
  I am currently pursuing an MSc in Embedded Systems at the University of Twente, while continuing to explore robotics, FPGA-based computing, and embedded AI applications.
</p>

          
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-8 pl-6 py-4 border-l-2 border-accent/60"
          >
            "Build systems that work in reality, not only in demonstrations."
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
