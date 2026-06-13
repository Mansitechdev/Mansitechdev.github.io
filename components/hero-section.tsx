"use client"

import { motion } from "framer-motion"
import { Download, Linkedin, Mail, ChevronDown, Briefcase, Code2, Cpu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: Briefcase, value: "2+", label: "Years Industry Experience" },
  { icon: Code2, value: "10+", label: "Embedded Projects" },
  { icon: Cpu, value: "FPGA", label: "& Embedded Systems" },
  { icon: Zap, value: "Embedded AI", label: "& Robotics" },
]

// Silicon die-grid lines (clipped to the wafer circle)
const gridLines = Array.from({ length: 13 }, (_, i) => 80 + i * 70)
// Highlighted dies on the wafer - iridescent: violet / cyan / magenta
const litDies: [number, number, string][] = [
  [430, 360, "#A78BFA"],
  [570, 500, "#34E0E8"],
  [360, 570, "#F472B6"],
  [640, 430, "#A78BFA"],
  [500, 290, "#34E0E8"],
]

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
      {/* Iridescent silicon wafer background - subtle */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] opacity-30"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <linearGradient id="wafer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="55%" stopColor="#34E0E8" />
              <stop offset="100%" stopColor="#F472B6" />
            </linearGradient>
            <clipPath id="wafer-clip">
              <circle cx="500" cy="500" r="430" />
            </clipPath>
          </defs>

          {/* Die grid, clipped to the wafer */}
          <g clipPath="url(#wafer-clip)" stroke="#A78BFA" strokeWidth="1" opacity="0.16">
            {gridLines.map((x) => (
              <line key={`v-${x}`} x1={x} y1="70" x2={x} y2="930" />
            ))}
            {gridLines.map((y) => (
              <line key={`h-${y}`} x1="70" y1={y} x2="930" y2={y} />
            ))}
          </g>

          {/* Highlighted dies */}
          {litDies.map(([x, y, color], i) => (
            <motion.rect
              key={i}
              x={x}
              y={y}
              width="56"
              height="56"
              rx="4"
              fill={color}
              clipPath="url(#wafer-clip)"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.32, scale: 1 }}
              transition={{ duration: 0.6, delay: 2 + i * 0.12 }}
              style={{ transformOrigin: `${x + 28}px ${y + 28}px` }}
            />
          ))}

          {/* Wafer outer edge */}
          <motion.circle
            cx="500"
            cy="500"
            r="430"
            fill="none"
            stroke="url(#wafer-gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          {/* Inner ring */}
          <motion.circle
            cx="500"
            cy="500"
            r="392"
            fill="none"
            stroke="#34E0E8"
            strokeWidth="1"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.4, ease: "easeInOut" }}
          />
          {/* Wafer flat (the notch edge of a real wafer) */}
          <motion.line
            x1="372"
            y1="905"
            x2="628"
            y2="905"
            stroke="#F472B6"
            strokeWidth="2"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
        </svg>
      </div>

      {/* Gradient orbs - reduced intensity */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/4 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/4 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
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
                <span className="text-foreground">Open to Internships, Thesis Projects & Graduate Roles</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground font-mono text-xs tracking-widest uppercase"
              >
                Embedded Systems Engineer
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
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
                MSc Embedded Systems student at the University of Twente with 2+ years of industry experience in embedded hardware, firmware development, PCB design, FPGA systems, and robotics platforms.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
                Interested in embedded systems, FPGA acceleration, embedded AI, robotics, and hardware-software co-design.
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

          {/* Right column - Avatar/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/8 to-accent/12 blur-2xl scale-110" />

              {/* Decorative ring - violet primary, cyan secondary */}
              <svg className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)]" viewBox="0 0 400 400">
                <motion.circle
                  cx="200" cy="200" r="180" fill="none" stroke="#A78BFA" strokeWidth="1.5"
                  strokeDasharray="20 10" opacity="0.5"
                  initial={{ rotate: 0 }} animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="200" cy="200" r="160" fill="none" stroke="#34E0E8" strokeWidth="1"
                  strokeDasharray="10 20" opacity="0.3"
                  initial={{ rotate: 360 }} animate={{ rotate: 0 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* Avatar container - subtle accent ring */}
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

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
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

        {/* Scroll indicator */}
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