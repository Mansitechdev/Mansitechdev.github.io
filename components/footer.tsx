"use client"

import { motion } from "framer-motion"
import { Cpu } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 circuit-bg opacity-50" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <Cpu className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Mansi Bhardwaj</p>
              <p className="text-sm text-muted-foreground">Embedded Systems Engineer</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-muted-foreground text-sm italic"
          >
            Engineering reliable systems where hardware meets intelligence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} Mansi Bhardwaj
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
