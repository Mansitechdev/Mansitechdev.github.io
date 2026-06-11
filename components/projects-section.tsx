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
    description:
      "Real-time wearable posture monitoring system using ESP32-S3, MPU6050 IMU sensors, TCA9548A I2C multiplexer, embedded haptic feedback, FSM-based posture classification, and INT8 neural network inference.",
    fullDescription:
      "Developed a real-time wearable ergonomic risk awareness system for posture monitoring and feedback. The system used ESP32-S3, multiple MPU6050 IMU sensors, a TCA9548A I2C multiplexer, embedded haptic feedback, FSM-based posture classification, and INT8 neural network inference for on-device embedded ML. The project focused on robust multi-sensor integration, real-time signal processing, and reliable embedded system behavior under wearable constraints.",
    technologies: [
      "ESP32-S3",
      "MPU6050",
      "TCA9548A",
      "TinyML",
      "Embedded AI",
      "I2C",
      "FSM",
      "INT8 Inference",
      "Haptic Feedback",
    ],
    achievement: "Best Pervasive System Award – University of Twente",
    challenges: [
      "Integrated multiple IMU sensors across the body using I2C multiplexing.",
      "Implemented real-time posture classification on a resource-constrained embedded platform.",
      "Balanced sensor reliability, feedback timing, and embedded ML inference constraints.",
    ],
    results: [
      "Received Best Pervasive System Award at the University of Twente.",
      "Demonstrated robust real-time posture classification using wearable sensing.",
    ],
    link: "/PervasiveComputing-26-Cert1.pdf",
    linkLabel: "View Certificate",
    featured: true,
  },
  {
    title: "Embedded AI Optimization on KRIA KV260",
    date: "Nov 2025 – Jan 2026",
    association: "University of Twente",
    description:
      "CNN-based CIFAR-10 image classification optimization for resource-constrained embedded AI deployment using quantization, CPU inference, FPGA acceleration, and Vitis AI on KRIA KV260.",
    fullDescription:
      "Designed and optimized CNN-based image classification networks for CIFAR-10 with deployment on the KRIA KV260 platform. The work compared CPU-only and FPGA-accelerated inference workflows and explored hardware-software co-optimization techniques including quantization, throughput optimization, and Vitis AI integration for resource-constrained embedded AI systems.",
    technologies: [
      "KRIA KV260",
      "FPGA",
      "Vitis AI",
      "CNN",
      "CIFAR-10",
      "Quantization",
      "Embedded AI",
      "Hardware Acceleration",
    ],
    achievement: null,
    challenges: [
      "Optimized CNN inference for resource-constrained embedded hardware.",
      "Compared CPU-only and FPGA-accelerated deployment workflows.",
      "Applied quantization while maintaining practical classification performance.",
    ],
    results: [
      "Built an embedded AI deployment workflow for KRIA KV260.",
      "Explored FPGA acceleration for neural network inference.",
    ],
    link: null,
    linkLabel: null,
    featured: true,
  },
  {
    title: "Detection of Parkinsonian Syndrome Using Wearable Sensors",
    date: "Feb 2021 – Jun 2021",
    association: "Vellore Institute of Technology",
    description:
      "Wearable embedded sensing system for Parkinsonian gait and tremor analysis using EMG sensors, MPU6050 IMUs, Arduino-based data acquisition, and motion feature extraction.",
    fullDescription:
      "Developed a wearable embedded system for Parkinsonian gait and hand tremor analysis using EMG sensors, MPU6050 IMU modules, and Arduino-based data acquisition. Implemented sensing and motion analysis workflows to extract gait parameters, acceleration, tremor frequency, Euler angles, and orientation data for movement monitoring. The project focused on creating a low-cost portable healthcare monitoring solution capable of transmitting patient analysis data for further diagnosis.",
    technologies: [
      "EMG",
      "MPU6050",
      "Arduino",
      "Python",
      "MATLAB",
      "Wearable Sensors",
      "Signal Processing",
      "Healthcare Monitoring",
    ],
    achievement: null,
    challenges: [
      "Captured motion and muscle activity data using wearable sensors.",
      "Extracted gait and tremor-related features from sensor measurements.",
      "Designed a portable sensing workflow for healthcare monitoring.",
    ],
    results: [
      "Developed a low-cost wearable monitoring prototype for gait and tremor analysis.",
    ],
    link: null,
    linkLabel: null,
    featured: true,
  },
  {
    title: "Automatic Pet Feeder",
    date: "Aug 2021 – Jan 2022",
    association: "Vellore Institute of Technology",
    description:
      "IoT-enabled embedded pet feeding system with automated dispensing control, sensor-based monitoring, wireless communication, and low-power embedded control logic.",
    fullDescription:
      "Developed an IoT-enabled embedded pet feeding system with automated dispensing control, sensor-based monitoring, and wireless communication capabilities. Implemented embedded control logic for scheduled feeding operations under low-power and real-time system constraints. The project was published in AIP Conference Proceedings as an automated embedded monitoring and control solution for smart pet care applications.",
    technologies: [
      "IoT",
      "Embedded C",
      "ESP8266",
      "Sensors",
      "Wireless",
      "Low-Power Control",
      "Automation",
    ],
    achievement: "Published in AIP Conference Proceedings",
    challenges: [
      "Implemented reliable automated feeding control.",
      "Integrated sensing and wireless communication for monitoring.",
      "Designed embedded control logic under low-power constraints.",
    ],
    results: [
      "Published in AIP Conference Proceedings.",
      "Demonstrated an IoT-based embedded monitoring and control system.",
    ],
    link: "https://pubs.aip.org/aip/acp/article/2788/1/130005/2903975/Automatic-pet-feeder",
    linkLabel: "View Publication",
    featured: true,
  },
  {
    title: "RFID-Based Warehouse Management System",
    date: "Nov 2022 – Apr 2023",
    association: "Academic Project",
    description:
      "RFID-based inventory management system for telecom warehouse operations with GUI support, AES encryption, OTP/email verification, billing, and secure inventory tracking.",
    fullDescription:
      "Designed an RFID-enabled warehouse management system for mobile station inventory tracking in the telecom domain. The system used RFID tag scanning, a user-friendly GUI, AES encryption, OTP and email-based verification, inventory management, and billing functionality. The project focused on improving inventory visibility, operational tracking, and secure access control.",
    technologies: [
      "RFID",
      "AES Encryption",
      "GUI",
      "Inventory Management",
      "Authentication",
      "Database",
      "Security",
    ],
    achievement: null,
    challenges: [
      "Integrated RFID-based asset identification with inventory workflows.",
      "Implemented authentication and encryption for secure access.",
      "Designed GUI-based operations for inventory and billing management.",
    ],
    results: [
      "Built a secure inventory management workflow using RFID and authentication.",
    ],
    link: null,
    linkLabel: null,
    featured: false,
  },
  {
    title: "Fisherman Border Alert and Fish Detection System",
    date: "Jan 2022 – Apr 2022",
    association: "Vellore Institute of Technology",
    description:
      "Embedded alert system using GPS and underwater ultrasonic sensing to warn fishermen near maritime borders and assist with fish density detection.",
    fullDescription:
      "Developed an embedded border alert and fish detection system for fishermen operating near coastal boundaries. The system used GPS-based location tracking to alert users when approaching restricted border zones and underwater ultrasonic sensing to estimate fish density for efficient fishing. The project addressed safety, navigation awareness, and resource identification in marine environments.",
    technologies: [
      "GPS",
      "Ultrasonic Sensor",
      "Embedded Systems",
      "Alerts",
      "Navigation",
      "Sensor Integration",
    ],
    achievement: null,
    challenges: [
      "Integrated GPS-based location monitoring for boundary awareness.",
      "Used ultrasonic sensing for underwater fish density estimation.",
      "Designed alert logic for safety-critical field conditions.",
    ],
    results: [
      "Developed a prototype concept for fishing safety and resource detection.",
    ],
    link: null,
    linkLabel: null,
    featured: false,
  },
  {
    title: "IoT-Based Safety and Emergency Tracker",
    date: "Jan 2022 – Apr 2022",
    association: "Vellore Institute of Technology",
    description:
      "Wearable safety device designed to monitor user health, trigger emergency alerts, and send messages to pre-configured contacts during critical situations.",
    fullDescription:
      "Developed a wearable IoT-based safety and emergency tracker designed for personal safety applications. The system used sensors, transmission modules, and data processing logic to monitor health-related signals, detect emergency situations, and notify pre-configured contacts. The project explored wearable sensing, emergency communication, and early health-risk indication.",
    technologies: [
      "IoT",
      "Wearable Device",
      "Sensors",
      "Emergency Alerts",
      "Wireless Communication",
      "Health Monitoring",
    ],
    achievement: null,
    challenges: [
      "Designed emergency alert logic for wearable safety use cases.",
      "Integrated sensing and wireless communication modules.",
      "Focused on fast notification to pre-configured emergency contacts.",
    ],
    results: [
      "Built a wearable safety monitoring concept for emergency communication.",
    ],
    link: null,
    linkLabel: null,
    featured: false,
  },
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
        <div className="relative h-48 md:h-56 bg-gradient-to-br from-secondary via-secondary/80 to-muted overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-2">
              <ImageIcon className="w-12 h-12 text-muted-foreground/50 mx-auto" />
              <p className="text-sm text-muted-foreground/50">Project Image</p>
            </div>
          </div>

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
              {isExpanded && project.fullDescription
                ? project.fullDescription
                : project.description}
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

              {project.results.length > 0 && (
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
              )}
            </motion.div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.technologies
              .slice(0, isExpanded ? undefined : 5)
              .map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-secondary/80 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                >
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
            {project.fullDescription && (
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
            )}

            {project.link && project.linkLabel && (
              <Button variant="outline" size="sm" asChild className="gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
            Featured{" "}
            <span className="gradient-text">Work</span>
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