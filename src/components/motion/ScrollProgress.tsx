import { motion, useReducedMotion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  if (reduce) return null

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-ocean-200/70 via-ocean-400/70 to-ocean-600/70"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  )
}


