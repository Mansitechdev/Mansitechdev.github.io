"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ChevronDown, ChevronUp, Image as ImageIcon } from "lucide-react"

const projects = [
  {
    title: "Wearable Ergonomic Risk Awareness System",
    description: "Real-time posture monitoring system using ESP32-S3, MPU6050 sensors, embedded haptic feedback, FSM-based posture classification, and INT8 neural network inference.",
    fullDescription: "Developed a comprehensive wearable system for real-time ergonomic risk assessment in industrial environments. The system utilizes multiple MPU6050 IMU sensors connected via a TCA9548A multiplexer for accurate multi-joint posture tracking. Implemented finite state machine-based posture classification with INT8 quantized neural network inference on the ESP32-S3 microcontroller. Features include embedded haptic feedback for immediate user alerts, BLE connectivity for data logging, and power-optimized firmware design for extended battery life.",
    technologies: ["ESP32-S3", "MPU6050", "TinyML", "Embedded AI", "I2C", "TCA9548A", "FSM", "INT8 Quantization", "BLE"],
    achievement: "Best Pervasive System Award – University of Twente",
    challenges: [
      "Multi-sensor synchronization and calibration across different body positions",
      "Achieving real-time inference within power constraints of wearable device",
      "Balancing classification accuracy with computational efficiency",
    ],
    featured: true,
    hasGallery: true,
  },
  {
    title: "Embedded AI Optimization on KRIA KV260",
    description: "Designed and optimized CNN image classification models for CIFAR-10 and deployed inference on KRIA KV260 using FPGA acceleration and Vitis AI.",
    fullDescription: "Comprehensive exploration of embedded AI deployment strategies on resource-constrained FPGA platforms. Developed multiple CNN architectures optimized for the Xilinx KRIA KV260, implementing quantization-aware training and pruning techniques to reduce model size while maintaining accuracy. Utilized Vitis AI toolchain for model compilation and hardware-accelerated inference, achieving significant speedups compared to CPU-based execution.",
    technologies: ["FPGA", "KRIA KV260", "CNN", "Quantization", "Vitis AI", "Embedded AI", "PyTorch", "Model Pruning"],
    achievement: null,
    challenges: [
      "Optimizing CNN architecture for FPGA resource constraints",
      "Implementing efficient quantization without significant accuracy loss",
      "Managing data flow between PS and PL regions",
    ],
    featured: true,
    hasGallery: true,
  },
  {
    title: "Detection of Parkinsonian Syndrome",
    description: "Wearable sensing platform integrating EMG and IMU sensors for gait and tremor analysis with 92% classification accuracy.",
    fullDescription: "Developed a non-invasive wearable diagnostic tool for early detection of Parkinsonian symptoms through gait and tremor analysis. The system combines surface EMG sensors for muscle activity monitoring with MPU6050 IMU sensors for movement tracking. Implemented signal processing algorithms for feature extraction and machine learning classifiers for symptom detection, validated against clinical datasets.",
    technologies: ["EMG", "MPU6050", "Arduino", "Python", "MATLAB", "Machine Learning", "Signal Processing", "SVM"],
    achievement: null,
    challenges: [
      "Noise rejection in EMG signals during movement",
      "Feature engineering for distinguishing Parkinsonian tremor from normal movement",
      "Ensuring comfortable long-term wear for clinical validation",
    ],
    results: [
      "92% classification accuracy for tremor detection",
    ],
    featured: true,
    hasGallery: true,
  },
  {
    title: "Automatic Pet Feeder",
    description: "IoT-enabled embedded pet feeding system with automated dispensing, wireless communication, and low-power embedded control.",
    fullDescription: "Designed and implemented a smart pet feeding system with scheduled and remote feeding capabilities. Features include portion control mechanisms, food level sensing, and mobile app connectivity via ESP8266 WiFi module. Implemented power management for battery backup operation and designed a robust dispensing mechanism for reliable food delivery.",
    technologies: ["IoT", "Embedded C", "ESP8266", "Sensors", "Wireless", "Power Management"],
    achievement: "Published in AIP Conference Proceedings",
    challenges: [
      "Designing reliable mechanical dispensing mechanism",
      "Implementing accurate portion control",
      "Ensuring reliable WiFi connectivity with low power consumption",
    ],
    featured: true,
    hasGallery: true,
  },
]

function ProjectCard({ project, index, isInView }: { project: typeof projects[0], index: number, isInView: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="group"
    >
      <div className="relative rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">
        {/* Hero Image Placeholder */}
        <div className="relative h-48 md:h-56 bg-gradient-to-br from-secondary via-secondary/80 to-muted overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-2">
              <ImageIcon className="w-12 h-12 text-muted-foreground/50 mx-auto" />
              <p className="text-sm text-muted-foreground/50">Project Image</p>
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Award badge */}
          {project.achievement && (
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium backdrop-blur-sm">
              <Award className="w-3 h-3" />
              Award Winner
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {isExpanded && project.fullDescription ? project.fullDescription : project.description}
            </p>
          </div>

          {project.achievement && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Award className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-primary">{project.achievement}</span>
            </div>
          )}

          {/* Expanded Content */}
          {isExpanded && project.challenges && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4 pt-4 border-t border-border/50"
            >
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Engineering Challenges</h4>
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
                <h4 className="text-sm font-semibold text-foreground mb-2">Results</h4>
                <ul className="space-y-1">
                  {project.results?.map((result, i) => (
                    <li key={i} className="text-sm text-primary flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, isExpanded ? undefined : 5).map((tech) => (
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

          {/* Expand/Collapse Button */}
          {project.fullDescription && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full mt-2 gap-2"
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
          <p className="text-primary font-mono text-sm tracking-wider uppercase">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured{" "}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of embedded systems projects demonstrating expertise in hardware-software integration, 
            real-time systems, and embedded AI deployment.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
