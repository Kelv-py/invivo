"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Bot, FileText, Globe, Laptop } from 'lucide-react'

const cards = [
  {
    title: "AI Automation",
    description: "Build customer service, sales, and data analysis platforms using popular LLMs",
    icon: Bot,
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Technical Writing",
    description: "Get your FAQs, manuals documentation and more",
    icon: FileText,
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Content Management",
    description: "Generate and render content for AI search and SEO",
    icon: Globe,
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Website Design",
    description: "Website design and updating for the AI future",
    icon: Laptop,
    gradient: "from-purple-500 to-pink-500"
  }
]

export function AnimatedServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r rounded-2xl blur-xl opacity-25 group-hover:opacity-100 transition duration-500"
            style={{
              backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
            }}
          />
          <div className="relative bg-card border rounded-2xl p-6 h-full">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-4`}>
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-muted-foreground">{card.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

