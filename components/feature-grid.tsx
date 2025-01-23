"use client"

import { motion } from 'framer-motion'
import { Bot, FileText, Globe2, Laptop, Share2, ArrowUpRight } from 'lucide-react'
import { OptimizedImage } from '@/components/optimized-image'
import { cn } from "@/lib/utils"

const features = [
  {
    title: "AI Automation",
    description: "Streamline operations with intelligent automation solutions",
    icon: Bot,
    className: "bg-black text-white col-span-3 row-span-3",
    image: "/landing-page.webp",
    highlights: ["Sales Bots", "Chatbots", "Data Analysis", "FAQs Automation"]
  },
  {
    title: "Technical Writing",
    description: "Professional documentation and guides",
    icon: FileText,
    className: "bg-emerald-800 text-white col-span-2",
    image: "/aaron-burden-y02jEX_B0O0-write.jpg",
    highlights: ["User Guides", "Technical Docs", "API Documentation"]
  },
  {
    title: "Content Management",
    description: "SEO-optimized content that drives growth",
    icon: Globe2,
    className: "bg-purple-600 text-white col-span-2 row-span-2",
    highlights: ["SEO Strategy", "Content Creation", "Analytics"]
  },
  {
    title: "Website Design",
    description: "Custom, responsive websites that convert",
    icon: Laptop,
    className: "bg-blue-600 text-white col-span-2 row-span-2",
    image: "/jason-leung-min.jpg",
    highlights: ["Custom Design", "E-commerce", "Mobile-First"]
  },
  {
    title: "Social Media",
    description: "Strategic management and growth",
    icon: Share2,
    className: "bg-black-400 col-span-2",
    image: "/pexels-pixabay-267350.jpg",
    highlights: ["Campaign Management", "Community Building", "Analytics"]
  }
]

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-2 md:gap-12">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className={cn(
            "group relative rounded-3xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer",
            feature.className
          )}
        >
          {feature.image && (
            <motion.div 
              className="absolute inset-0 opacity-20"
              whileHover={{ opacity: 0.3, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <OptimizedImage
                src={feature.image}
                alt={feature.title}
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </motion.div>
          )}
          <div className="relative z-10">
            <motion.div 
              className="flex items-center justify-between mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <feature.icon className="w-10 h-10" />
              <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <motion.h3 
              className="text-2xl font-semibold mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              className={cn(
                "text-base mb-4",
                feature.className?.includes("text-white") ? "text-gray-200" : "text-gray-600 dark:text-gray-300"
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {feature.description}
            </motion.p>
            {feature.highlights && (
              <motion.ul 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {feature.highlights.map((highlight, i) => (
                  <motion.li 
                    key={i} 
                    className="text-sm flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {highlight}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

