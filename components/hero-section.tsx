"use client"

import { motion } from "framer-motion"
import { Download, Linkedin, Mail, ChevronDown, Briefcase, Code2, Cpu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  {
    icon: Briefcase,
    value: "2+",
    label: "Years Industry Experience",
  },
  {
    icon: Code2, 
    value: "10+",
    label: "Embedded Projects",
  },
  {
    icon: Cpu,
    value: "FPGA",
    label: "& Hardware Design",
  },
  {
    icon: Zap,
    value: "Embedded AI",
    label: "& Robotics",
  },
]

const focusAreas = ["Embedded Systems", "FPGA", "Robotics", "Embedded AI"]

export function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute w-full h-full opacity-15" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#A63A5B" />
            </linearGradient>
          </defs>

          <motion.path d="M0,200 H300 L350,250 H600 L650,200 H1000" stroke="url(#circuit-gradient)" strokeWidth="1" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }} />
          <motion.path d="M0,400 H200 L250,350 H450 L500,400 H700 L750,450 H1000" stroke="url(#circuit-gradient)" strokeWidth="1" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }} />
          <motion.path d="M0,600 H150 L200,650 H400 L450,600 H650 L700,550 H1000" stroke="url(#circuit-gradient)" strokeWidth="1" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1, ease: "easeInOut" }} />
          <motion.path d="M0,800 H400 L450,750 H550 L600,800 H1000" stroke="url(#circuit-gradient)" strokeWidth="1" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }} />
          <motion.path d="M200,0 V300 L250,350 V700 L200,750 V1000" stroke="url(#circuit-gradient)" strokeWidth="1" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.3, ease: "easeInOut" }} />
          <motion.path d="M500,0 V200 L550,250 V500 L500,550 V1000" stroke="url(#circuit-gradient)" strokeWidth="1" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.8, ease: "easeInOut" }} />
          <motion.path d="M800,0 V400 L750,450 V600 L800,650 V1000" stroke="url(#circuit-gradient)" strokeWidth="1" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.3, ease: "easeInOut" }} />

          {[
            [200, 200], [350, 250], [500, 400], [650, 200], [750, 450],
            [200, 350], [450, 350], [700, 550], [200, 750], [600, 800],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="4"
              fill="#14B8A6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 0.5, delay: 2 + i * 0.1 }}
            />
          ))}
        </svg>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/4 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/4 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-foreground">Open to Student Roles, Internships & Thesis Projects </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground font-mono text-xs tracking-widest uppercase"
              >
                MSc Embedded Systems Student | Embedded Systems Engineer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                <span className="text-foreground">Mansi</span>
                <br />
                <span className="gradient-text">Bhardwaj</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-primary font-medium"
              >
                Building reliable embedded systems where hardware meets intelligence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-wrap gap-2 pt-1"
              >
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 rounded-full border border-primary/30 bg-card/60 text-sm text-muted-foreground"
                  >
                    {area}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
                MSc Embedded Systems student at the University of Twente with 2+ years of industry experience in embedded hardware, firmware development, PCB design, robotics platforms, and FPGA-based systems.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
                Interested in embedded systems, robotics, FPGA acceleration, and embedded AI, with a focus on building reliable hardware-software systems that operate under real-world constraints. Currently open to student roles, internships, and thesis projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="gap-2 glow-primary" asChild>
                <a href="/Mansi_Bhardwaj_Resume.pdf" download>
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://www.linkedin.com/in/mansi-bhardwaj2023/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="gap-2" onClick={() => handleScrollToSection("contact")}>
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 via-transparent to-fuchsia-500/10 blur-3xl scale-110" />

              <svg className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)]" viewBox="0 0 400 400">
                <motion.circle cx="200" cy="200" r="180" fill="none" stroke="#14B8A6" strokeWidth="1.5" strokeDasharray="20 10" opacity="0.5" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
                <motion.circle cx="200" cy="200" r="160" fill="none" stroke="#A63A5B" strokeWidth="1" strokeDasharray="10 20" opacity="0.3" initial={{ rotate: 360 }} animate={{ rotate: 0 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} />
              </svg>

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-accent/30 glow-accent">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mansi%20Bhardwaj-AGfOnKZymYWmmvZfKQMjDaSQPfpxBX.jpg"
                  alt="Mansi Bhardwaj - Embedded Systems Engineer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="group relative p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/4 to-accent/4 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center text-center gap-3">
                <stat.icon className="w-5 h-5 text-primary opacity-70" />
                <span className="text-lg md:text-xl font-bold text-foreground">{stat.value}</span>
                <span className="text-xs md:text-sm text-muted-foreground">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
            onClick={() => handleScrollToSection("about")}
          >
            <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
