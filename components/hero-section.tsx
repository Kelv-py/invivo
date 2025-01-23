"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/optimized-image"
import Link from "next/link"
import { useRef } from "react"
import { AnimatedChatBox } from "./animated-chat-box"
import { AnimatedSalesGraph } from "./animated-sales-graph"
import { CustomerSatisfaction } from "./customer-satisfaction"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent" />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-600 text-sm font-medium"
          >
            Next-Gen Business Solutions
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transform your business with{' '}
            <span className="gradient-text">AI-powered</span>{' '}
            solutions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Expert content, and seamless design—boosting efficiency, visibility, and growth in one place
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="bg-transparent border-gray-600 text-white hover:bg-white/10"
            >
              <Link href="/products-and-services">Explore Services</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          style={{ y, opacity }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          <OptimizedImage
            src="/pexels-kevin-ku-92347-577585.jpg"
            alt="Technical Development"
            width={400}
            height={300}
            priority
            className="rounded-lg shadow-2xl col-span-2 aspect-video"
          />
          <OptimizedImage
            src="/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg"
            alt="Analytics Dashboard"
            width={400}
            height={300}
            priority
            className="rounded-lg shadow-2xl aspect-square"
          />
          <OptimizedImage
            src="/kuu-akura-pnK6Q-QTHM4-unsplash.jpg"
            alt="AI Chat Interface"
            width={400}
            height={300}
            priority
            className="rounded-lg shadow-2xl aspect-square"
          />
        </motion.div>

        {/* Animated Elements */}
        <AnimatedChatBox />
      </div>
    </div>
  )
}

