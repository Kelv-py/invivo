"use client"

import { motion } from 'framer-motion'

export function AnimatedChatBox() {
  return (
    <motion.div
      className="absolute right-4 top-1/2 w-64 h-80 bg-gray-800 rounded-lg shadow-xl overflow-hidden"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="bg-gray-700 p-3 flex items-center">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="p-4">
        <motion.div
          className="bg-blue-500 rounded-lg p-2 mb-2 text-white text-sm"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          Hello! How can I help you today?
        </motion.div>
        <motion.div
          className="bg-gray-600 rounded-lg p-2 mb-2 text-white text-sm"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.5 }}
        >
          I need help with my account.
        </motion.div>
        <motion.div
          className="bg-blue-500 rounded-lg p-2 text-white text-sm"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 2 }}
        >
          Sure, I'd be happy to assist you with your account. What specific issue are you experiencing?
        </motion.div>
      </div>
    </motion.div>
  )
}

