"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Cpu, CircuitBoard, Layers, Code, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Embedded Systems",
    icon: Cpu,
    color: "primary",
    skills: ["STM32", "AVR", "Embedded C", "C++", "SPI", "I2C", "UART"],
  },
  {
    title: "Hardware",
    icon: CircuitBoard,
    color: "accent",
    skills: ["PCB Design", "Altium Designer", "Signal Integrity", "EMI/EMC"],
  },
  {
    title: "FPGA",
    icon: Layers,
    color: "primary",
    skills: ["VHDL", "Verilog", "KRIA KV260"],
  },
  {
    title: "Software",
    icon: Code,
    color: "accent",
    skills: ["Python", "MATLAB", "Git"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "primary",
    skills: ["LTspice", "Proteus", "Microchip Studio", "TINA-TI", "Oscilloscope", "Logic Analyzer"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
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
          <p className="text-primary font-mono text-sm tracking-wider uppercase">Technical Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tools &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color === "primary" ? "bg-primary/10" : "bg-accent/10"}`}>
                    <category.icon className={`w-5 h-5 ${category.color === "primary" ? "text-primary" : "text-accent"}`} />
                  </div>
                  <h3 className={`text-lg font-semibold ${category.color === "primary" ? "text-primary" : "text-accent"}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.03 }}
                    >
                      <Badge
                        variant="outline"
                        className="px-3 py-1.5 text-sm border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
