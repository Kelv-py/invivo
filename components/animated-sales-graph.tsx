"use client"

import { motion } from 'framer-motion'

export function AnimatedSalesGraph() {
  return (
    <motion.div
      className="absolute left-4 bottom-1/4 w-64 h-40 bg-gray-800 rounded-lg shadow-xl overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="p-4">
        <h3 className="text-white text-sm font-semibold mb-2">Sales Growth</h3>
        <div className="relative h-24">
          <motion.div
            className="absolute bottom-0 left-0 w-1 bg-green-500"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-8 w-1 bg-green-500"
            initial={{ height: 0 }}
            animate={{ height: "80%" }}
            transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-16 w-1 bg-green-500"
            initial={{ height: 0 }}
            animate={{ height: "90%" }}
            transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-24 w-1 bg-green-500"
            initial={{ height: 0 }}
            animate={{ height: "70%" }}
            transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-32 w-1 bg-green-500"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  )
}

