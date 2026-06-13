"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Award,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Image as ImageIcon,
  Cpu,
} from "lucide-react"

type Project = {
  title: string
  date: string
  association: string
  image: string | null
  description: string
  fullDescription: string
  technologies: string[]
  achievement: string | null
  challenges: string[]
  results: string[]
  link?: string | null
  linkLabel?: string | null
  paperLink?: string | null
  paperLabel?: string | null
  reportLink?: string | null
  reportLabel?: string | null
  certificateLink?: string | null
  certificateLabel?: string | null
  coauthorLink?: string | null
  coauthorLabel?: string | null
}

const projects: Project[] = [
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
      "Edge Impulse",
    ],
    achievement: "Best Pervasive System Award – University of Twente",
    challenges: [
      "Integrated four MPU6050 IMU sensors using TCA9548A I2C multiplexing.",
      "Implemented FSM states for standing, slouching, bending, deep bend, and prolonged flexion.",
      "Designed delayed haptic feedback with cooldown to reduce alarm fatigue.",
      "Deployed INT8 neural network inference on ESP32-S3 for on-device posture classification.",
    ],
    results: [
      "Received Best Pervasive System Award at the University of Twente.",
      "Achieved 74.2% validation accuracy with the INT8 posture classification model.",
      "Demonstrated real-time wearable posture monitoring without cloud connectivity.",
    ],
    link: "/projects/wearable-system/PervasiveComputing-26-Cert1.pdf",
    linkLabel: "View Award Certificate",
    paperLink: "/projects/wearable-system/Research_Paper.pdf",
    paperLabel: "View Research Paper",
    reportLink: "/projects/wearable-system/wearable-system-presentation.pdf",
    reportLabel: "View Project Presentation",
  },
  {
    title: "Embedded AI Optimization on KRIA KV260",
    date: "Nov 2025 – Jan 2026",
    association: "University of Twente",
    image: "/projects/embedded-ai-kv260/cnn-acceleration-diagram.png",
    description:
      "Designed, trained, quantized, and deployed CNN image classification models on AMD Xilinx KRIA KV260, comparing ARM CPU inference against FPGA-accelerated DPU execution using Vitis AI.",
    fullDescription:
      "Developed an end-to-end embedded AI deployment pipeline targeting the AMD Xilinx KRIA KV260 platform. Trained a CNN for CIFAR-10 classification, deployed inference on the ARM Cortex-A53 CPU, and accelerated execution using the FPGA fabric through Vitis AI and DPU deployment. The project focused on hardware-software co-design, INT8 quantization, throughput optimization, and maintaining classification accuracy under embedded deployment constraints.",
    technologies: [
      "KRIA KV260",
      "FPGA",
      "Vitis AI",
      "CNN",
      "CIFAR-10",
      "TensorFlow",
      "Quantization",
      "DPU",
      "Embedded AI",
    ],
    achievement: "37× Throughput Gain with FPGA Acceleration",
    challenges: [
      "Designed and trained CNN architectures for CIFAR-10 classification using TensorFlow/Keras.",
      "Deployed and benchmarked CPU-only inference on ARM Cortex-A53.",
      "Applied INT8 quantization and DPU compilation using Vitis AI.",
      "Optimized accuracy-throughput trade-offs for FPGA-accelerated embedded AI deployment.",
    ],
    results: [
      "Achieved 90.69% CIFAR-10 classification accuracy.",
      "Reduced inference latency from 32 ms to 0.9 ms per image.",
      "Improved throughput from 30 FPS to 1100 FPS using FPGA acceleration.",
      "Maintained less than 1.1% accuracy loss after INT8 quantization.",
    ],
    reportLink: "/projects/embedded-ai-kv260/presentation_group_09.pptx",
    reportLabel: "View Project Presentation",
  },
  {
    title: "Wearable Parkinson's Disease Detection System",
    date: "Dec 2021",
    association: "VIT Chennai",
    image: "/projects/parkinson/parkinson-block-diagram.png",
    description:
      "Published wearable healthcare system for Parkinson's disease assessment using IMU and EMG sensing.",
    fullDescription:
      "Developed and published a wearable Parkinson's disease monitoring system combining EMG sensing and MPU6050 IMU-based gait analysis. The platform was designed as an affordable and easy-to-use diagnostic aid capable of detecting hand tremors and Parkinsonian gait characteristics. Arduino-based data acquisition was used to capture sensor data and generate gait parameters including Euler angles, yaw, pitch, roll, quaternion values, acceleration, and world-frame acceleration. Results could be reviewed locally and shared with physicians through a reporting workflow.",
    technologies: [
      "Arduino Nano",
      "MPU6050",
      "EMG Sensor",
      "IMU",
      "Wearable Sensing",
      "Biomedical Engineering",
      "Signal Processing",
      "Healthcare IoT",
    ],
    achievement: "International Conference Publication",
    challenges: [
      "Integrated EMG and IMU sensing into a wearable healthcare platform.",
      "Implemented hand tremor analysis using muscle activity measurements.",
      "Performed gait analysis using accelerometer and gyroscope data.",
      "Designed a low-cost diagnostic system suitable for elderly users.",
    ],
    results: [
      "Published research paper at an international conference.",
      "Successfully demonstrated wearable hand tremor and gait monitoring.",
      "Generated gait parameters including Euler angles, yaw, pitch, roll, and acceleration.",
      "Enabled physician-oriented reporting workflow for remote assessment.",
    ],
    paperLink: "/projects/parkinson/Parkinson_Paper.pdf",
    paperLabel: "View Research Paper",
    reportLink: "/projects/parkinson/Conference_Presentation.pdf",
    reportLabel: "View Presentation",
    certificateLink: "/projects/parkinson/presentation-certificate.pdf",
    certificateLabel: "View Presentation Certificate",
    coauthorLink: "/projects/parkinson/coauthor-certificate.pdf",
    coauthorLabel: "View Co-author Certificate",
  },
  {
    title: "Automatic Pet Feeder",
    date: "2022",
    association: "VIT Chennai · AIP Conference Proceedings",
    image: "/projects/pet-feeder/circuit-schematic.png",
    description:
      "Published IoT-based automatic pet feeder that dispenses accurate, scheduled food portions with pet-presence detection and remote monitoring.",
    fullDescription:
      "An IoT-based automated pet feeding system built around a NodeMCU and the Arduino IoT Cloud. A PIR sensor detects the pet's presence, an ultrasonic sensor measures the dispensed food level to control portion size, servo motors drive the dispensing mechanism, and a buzzer signals feeding. The Arduino IoT Cloud dashboard enables remote scheduling, a manual reward button, and real-time monitoring, delivering accurate and consistent feeding even when the owner is away. The work was published in AIP Conference Proceedings.",
    technologies: [
      "NodeMCU",
      "PIR Sensor",
      "Ultrasonic Sensor",
      "Servo Motor",
      "Buzzer",
      "Arduino IoT Cloud",
      "IoT",
      "Embedded C",
    ],
    achievement: "Published · AIP Conference Proceedings (DOI: 10.1063/5.0148700)",
    challenges: [
      "Integrated NodeMCU (ESP8266) as the main controller with Wi-Fi connectivity to the Arduino IoT Cloud.",
      "Used a PIR sensor for pet-presence detection and an ultrasonic sensor to measure dispensed food level for accurate portioning.",
      "Drove servo motors for the food-dispensing mechanism with a buzzer cue to signal feeding.",
      "Built an Arduino IoT Cloud dashboard for remote scheduling, a manual reward button, and real-time monitoring.",
    ],
    results: [
      "Published research paper in AIP Conference Proceedings (DOI: 10.1063/5.0148700).",
      "Dispensed accurate, user-defined food portions, addressing the over-feeding and jamming issues seen in existing feeders.",
      "Enabled remote, scheduled feeding and live monitoring through IoT cloud connectivity.",
    ],
    paperLink: "https://doi.org/10.1063/5.0148700",
    paperLabel: "View Publication",
  },
  {
    title: "Warehouse Management for Mobile Stations using RFID",
    date: "2023",
    association: "VIT Chennai · Capstone Project",
    image: "/projects/rfid-warehouse/rfid-hardware.png",
    description:
      "RFID-based inventory management system for telecom mobile sites, with real-time tag scanning, a Java GUI, and an AES-encrypted central database.",
    fullDescription:
      "A capstone project addressing inventory tracking across telecom mobile site locations (BTS, RNC, eNodeB). An Arduino-based hardware setup with an RC522 RFID reader/writer scans tagged products and updates a centralized MySQL database in real time through a JDBC connection. A Java (NetBeans) graphical interface lets users register with OTP/email verification, log in, and add, edit, or delete inventory items, and automatically generates an emailed bill when products leave the warehouse. Inventory records are secured with AES encryption, RSA-protected keys, and MD5-hash digital signatures.",
    technologies: [
      "Arduino Uno",
      "RC522 RFID",
      "RFID Tags",
      "Java",
      "MySQL",
      "JDBC",
      "AES Encryption",
      "OTP / Email",
      "MD5 Hashing",
    ],
    achievement: "Secure RFID Inventory System · AES + OTP + Digital Signature",
    challenges: [
      "Interfaced an RC522 RFID reader/writer with Arduino to scan tagged products and read unique tag IDs.",
      "Connected the Arduino scanner to a centralized MySQL database in real time using a JDBC driver.",
      "Built a Java (NetBeans) GUI for OTP-verified registration, login, and add/edit/delete of inventory items.",
      "Secured records with AES encryption, RSA-protected keys, MD5-hash digital signatures, and OTP/email verification.",
    ],
    results: [
      "Enabled real-time RFID tracking of products across telecom mobile site locations.",
      "Reduced inventory clashes and manual retrieval errors through centralized, automated tracking.",
      "Secured inventory data with AES-encrypted storage and tamper-evident MD5 digital signatures on bills.",
      "Automated bill generation with email delivery when products exit the warehouse.",
    ],
    link: "/projects/rfid-warehouse/warehouse-presentation.pptx",
    linkLabel: "View Presentation",
    paperLink: "/projects/rfid-warehouse/warehouse-paper.pdf",
    paperLabel: "View Paper",
    reportLink: "/projects/rfid-warehouse/warehouse-poster.pdf",
    reportLabel: "View Poster",
  },
]

// Iridescent die hues: violet / cyan / magenta
const HUES = ["#A78BFA", "#34E0E8", "#F472B6"]

// Wafer geometry
const WAFER = { vb: 460, cx: 230, cy: 230, r: 198, die: 56, step: 70 }

// Centered die positions for N projects, filling from the centre outward
function generatePositions(n: number) {
  const cells: { cx: number; cy: number; d: number; a: number }[] = []
  for (let i = -3; i <= 3; i++) {
    for (let j = -3; j <= 3; j++) {
      const cx = WAFER.cx + i * WAFER.step
      const cy = WAFER.cy + j * WAFER.step
      const d = Math.hypot(i * WAFER.step, j * WAFER.step)
      if (d + WAFER.die / 2 <= WAFER.r - 10) {
        cells.push({ cx, cy, d, a: Math.atan2(j, i) })
      }
    }
  }
  cells.sort((p, q) => p.d - q.d || p.a - q.a)
  return cells.slice(0, n)
}

function ActionButtons({ project }: { project: Project }) {
  const links = [
    { href: project.link, label: project.linkLabel },
    { href: project.paperLink, label: project.paperLabel },
    { href: project.reportLink, label: project.reportLabel },
    { href: project.certificateLink, label: project.certificateLabel },
    { href: project.coauthorLink, label: project.coauthorLabel },
  ].filter((item) => item.href && item.label)

  if (links.length === 0) return null
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((item) => (
        <Button key={item.label} variant="outline" size="sm" asChild className="gap-2">
          <a href={item.href as string} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
            {item.label}
          </a>
        </Button>
      ))}
    </div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selected, setSelected] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const positions = useMemo(() => generatePositions(projects.length), [])
  const gridLines = useMemo(() => Array.from({ length: 11 }, (_, i) => 30 + i * 40), [])
  const project = projects[selected]

  const pick = (i: number) => {
    setSelected(i)
    setIsExpanded(false)
  }

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

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Wafer of projects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:sticky lg:top-24"
          >
            <svg
              viewBox={`0 0 ${WAFER.vb} ${WAFER.vb}`}
              className="w-full max-w-[460px]"
              role="img"
              aria-label="Silicon wafer of projects"
            >
              <defs>
                <linearGradient id="proj-wafer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A78BFA" />
                  <stop offset="55%" stopColor="#34E0E8" />
                  <stop offset="100%" stopColor="#F472B6" />
                </linearGradient>
                <clipPath id="proj-wafer-clip">
                  <circle cx={WAFER.cx} cy={WAFER.cy} r={WAFER.r} />
                </clipPath>
              </defs>

              {/* Faint die grid */}
              <g clipPath="url(#proj-wafer-clip)" stroke="#A78BFA" strokeWidth="0.75" opacity="0.14">
                {gridLines.map((x) => (
                  <line key={`v-${x}`} x1={x} y1="20" x2={x} y2={WAFER.vb - 20} />
                ))}
                {gridLines.map((y) => (
                  <line key={`h-${y}`} x1="20" y1={y} x2={WAFER.vb - 20} y2={y} />
                ))}
              </g>

              {/* Wafer edge + inner ring + flat */}
              <circle cx={WAFER.cx} cy={WAFER.cy} r={WAFER.r} fill="none" stroke="url(#proj-wafer-grad)" strokeWidth="2" opacity="0.7" />
              <circle cx={WAFER.cx} cy={WAFER.cy} r={WAFER.r - 14} fill="none" stroke="#34E0E8" strokeWidth="1" opacity="0.25" />
              <line x1={WAFER.cx - 56} y1={WAFER.cy + WAFER.r - 6} x2={WAFER.cx + 56} y2={WAFER.cy + WAFER.r - 6} stroke="#F472B6" strokeWidth="2" opacity="0.5" />

              {/* Project dies (labelled by number) */}
              {positions.map((pos, i) => {
                const hue = HUES[i % HUES.length]
                const active = i === selected
                const x = pos.cx - WAFER.die / 2
                const y = pos.cy - WAFER.die / 2
                return (
                  <motion.g
                    key={projects[i].title}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    style={{ cursor: "pointer", transformOrigin: `${pos.cx}px ${pos.cy}px` }}
                    onClick={() => pick(i)}
                    onMouseEnter={() => pick(i)}
                  >
                    <title>{projects[i].title}</title>
                    <rect
                      x={x}
                      y={y}
                      width={WAFER.die}
                      height={WAFER.die}
                      rx="6"
                      fill={hue}
                      fillOpacity={active ? 0.9 : 0.14}
                      stroke={hue}
                      strokeWidth={active ? 2 : 1}
                    />
                    <text
                      x={pos.cx}
                      y={pos.cy + 5}
                      textAnchor="middle"
                      fontSize="15"
                      fontFamily="var(--font-mono, monospace)"
                      fill={active ? "#0A0612" : hue}
                      style={{ pointerEvents: "none" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </text>
                  </motion.g>
                )
              })}
            </svg>
          </motion.div>

          {/* Detail panel for the selected die */}
          <div className="min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl bg-card border border-border/50 overflow-hidden"
              >
                {/* Project image */}
                <div className="relative h-64 bg-card overflow-hidden border-b border-border/50">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <ImageIcon className="w-12 h-12 text-muted-foreground/50 mx-auto" />
                        <p className="text-sm text-muted-foreground/50">Project Image</p>
                      </div>
                    </div>
                  )}
                  {project.achievement && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium backdrop-blur-sm">
                      <Award className="w-3 h-3" />
                      Highlight
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary">
                      <Cpu className="w-3.5 h-3.5" />
                      Die {String(selected + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <p className="text-xs text-primary font-mono">{project.date}</p>
                    <span className="text-xs text-muted-foreground">•</span>
                    <p className="text-xs text-muted-foreground">{project.association}</p>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {isExpanded ? project.fullDescription : project.description}
                  </p>

                  {project.achievement && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Award className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-primary">{project.achievement}</span>
                    </div>
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

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 pt-2 border-t border-border/50 overflow-hidden"
                      >
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Engineering Focus</h4>
                          <ul className="space-y-1">
                            {project.challenges.map((challenge, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Outcome</h4>
                          <ul className="space-y-1">
                            {project.results.map((result, i) => (
                              <li key={i} className="text-sm text-primary flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)} className="gap-2">
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
                  </div>

                  <ActionButtons project={project} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}