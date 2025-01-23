"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What kind of AI solutions do you offer?",
    answer: "We offer a wide range of AI solutions including chatbots, data analysis tools, automated content generation, and custom AI models tailored to your specific business needs. Our solutions are designed to improve efficiency, customer service, and decision-making processes."
  },
  {
    question: "How can AI improve my business operations?",
    answer: "AI can improve your business operations in numerous ways. It can automate repetitive tasks, provide deeper insights from your data, enhance customer interactions through intelligent chatbots, optimize your supply chain, and even help in predictive maintenance. The specific benefits depend on your industry and unique business challenges."
  },
  {
    question: "Is my data safe with your AI solutions?",
    answer: "Absolutely. We take data security very seriously. All our AI solutions are built with privacy and security in mind. We use state-of-the-art encryption methods, comply with data protection regulations, and can even deploy solutions on-premises if required. We never share your data with third parties without explicit permission."
  }
]

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ backgroundColor: openIndex === index ? "hsl(var(--muted))" : "hsl(var(--background))" }}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 pt-0 text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

