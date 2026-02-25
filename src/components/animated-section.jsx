import * as React from "react"
import { motion, useInView } from "framer-motion"

export function AnimatedSection({ children, className = "", delay = 0 }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  )
}