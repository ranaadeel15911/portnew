"use client"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, y: -150, x: 0 },
  enter: { opacity: [.5,.8,1], x: 0, y: 0 },
  // exit: { opacity: 1, x: 0, y: 200 },

}

export default function Template({ children }) {
  return (
    
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      // exit="exit"
      transition={{ type: "linear",duration:0.8 }}
    >
      {children}
    </motion.div>
  )
}