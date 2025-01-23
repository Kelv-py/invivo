"use client"

import { motion } from 'framer-motion'
import { Bot, FileText, Globe2, Laptop, Share2 } from 'lucide-react'

const services = [
  {
    title: "AI Automation",
    description: "Revolutionize operations with intelligent automation",
    icon: Bot,
    features: [
      "Sales Bots: Automate lead generation and follow-ups",
      "Chatbots: Provide round-the-clock support",
      "Data Analysis: Gain actionable insights",
      "FAQs Automation: Deliver quick and accurate responses"
    ]
  },
  {
    title: "Technical Writing",
    description: "Professional, clear documentation for your needs",
    icon: FileText,
    features: [
      "Manuals and user guides that enhance product usability",
      "FAQs that simplify complex information",
      "SaaS, PaaS, and technical tools documentation",
      "AI solution descriptions that convey value"
    ]
  },
  {
    title: "Content Management",
    description: "Boost online presence with strategic content",
    icon: Globe2,
    features: [
      "AI-optimized content creation",
      "Strategic planning and scheduling",
      "SEO-focused articles and blogs",
      "High-quality visuals and social posts"
    ]
  },
  {
    title: "Website Design",
    description: "Seamless digital experiences for your brand",
    icon: Laptop,
    features: [
      "Custom Design: Tailored layouts for your brand",
      "Responsive Development: Cross-device optimization",
      "E-commerce Integration: User-friendly stores",
      "Performance Optimization: Fast-loading pages"
    ]
  },
  {
    title: "Social Media Management",
    description: "Strategic campaigns to grow your audience",
    icon: Share2,
    features: [
      "Crafting targeted ads for maximum ROI",
      "Daily engagement to build community",
      "Analytics tracking to refine strategies",
      "Multi-platform management for cohesive branding"
    ]
  }
]

export default function ProductsAndServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions to transform your business with AI-powered innovation
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                <service.icon className="w-12 h-12 mb-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-muted rounded-3xl p-8 h-[300px] flex items-center justify-center ${
                index % 2 === 0 ? 'md:order-2' : 'md:order-1'
              }`}>
                <service.icon className="w-24 h-24 text-muted-foreground/30" />
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  )
}

