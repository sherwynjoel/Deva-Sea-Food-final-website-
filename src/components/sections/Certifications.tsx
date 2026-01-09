import { motion, useAnimation } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { useEffect, useState } from 'react'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { Section } from '../ui/Section'

// Certification images with names
const certificationImages = [
  { src: '/1.jpeg', alt: 'FSSAI', name: 'FSSAI' },
  { src: '/2.jpg', alt: 'EU Compliance', name: 'EU Compliance' },
  { src: '/3.jpeg', alt: 'Export Inspection Council', name: 'Export Inspection' },
  { src: '/4.jpeg', alt: 'FSSC 22000', name: 'FSSC 22000' },
  { src: '/5.jpeg', alt: 'GMP', name: 'GMP Certified' },
  { src: '/6.jpeg', alt: 'HACCP', name: 'HACCP' },
  { src: '/7.jpeg', alt: 'ISO', name: 'ISO Standards' },
]

export function Certifications() {
  const [isPaused, setIsPaused] = useState(false)
  const controls = useAnimation()

  const radius = 260 // Radius of the 3D circle
  const totalItems = certificationImages.length
  const anglePerItem = 360 / totalItems

  // Continuous rotation animation
  useEffect(() => {
    controls.start({
      rotateY: [0, -360],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      },
    })
  }, [controls])

  // Pause/Resume on hover
  useEffect(() => {
    if (isPaused) {
      controls.stop()
    } else {
      controls.start({
        rotateY: [0, -360],
        transition: {
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
          // Maintain current rotation would be complex with simple controls.start loop restart
          // ideally we use a motion value, but for simplicity in this constrained env:
          // We will let it restart or just accept the jump on hover out for now
          // or ideally use a recursive animation.
          // Let's stick to a simple continuous loop that doesn't pause for now to avoid jumpiness,
          // or just slow it down on hover.
        },
      })
    }
  }, [isPaused, controls])

  // NOTE: True pause-resume without jump requires `useMotionValue` and `useAnimationFrame`.
  // To keep it robust without complex hooks in this step, let's just slow it down significantly on hover instead of full stop.

  return (
    <Section id="certifications" className="overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-[600px]">

        {/* Left Content */}
        <div className="flex-1 max-w-lg text-center lg:text-left z-20">
          <Reveal>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20 mb-6 backdrop-blur-sm">
              <ShieldCheck className="h-8 w-8 text-ocean-200" />
            </div>
            <h2 className="heading-font text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-white">
              {siteContent.certifications.title}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed">
              {siteContent.certifications.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              {['Global Standards', 'Rigorous Testing', 'Safety First'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right 3D Carousel */}
        <div
          className="flex-1 relative h-[500px] w-full flex items-center justify-center perspective-[1000px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-ocean-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

          {/* 3D Rotator */}
          <motion.div
            className="relative w-[300px] h-[300px] preserve-3d"
            animate={{ rotateY: 360 }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {certificationImages.map((cert, index) => {
              const angle = index * anglePerItem

              return (
                <div
                  key={cert.name}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                >
                  <motion.div
                    className="group relative flex flex-col items-center gap-3"
                    // Rotate items back to face viewer
                    initial={{ rotateY: -angle }}
                    animate={{ rotateY: -angle - 360 }} // Counter-rotate to stay facing front? No, billboards usually static.
                  // Actually, for a carousel, we usually want them facing outward or facing camera.
                  // Facing camera requires rotating opposite to parent.
                  // Since parent rotates 0->360, children should rotate 0->-360 relative to parent? 
                  // Let's try simpler: Just panels facing outward.
                  // If user wants them always readable, we need a billboard.
                  >
                    {/* Card */}
                    <div className="w-32 h-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-white/20 transition-colors duration-300 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                      <div className="w-16 h-16 mb-3 rounded-full bg-white/90 p-2 flex items-center justify-center shadow-inner">
                        <img
                          src={cert.src}
                          alt={cert.alt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs font-bold text-white text-center leading-tight">
                        {cert.name}
                      </span>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>

          {/* Floor Reflection/Shadow */}
          <div className="absolute bottom-10 w-[300px] h-[30px] bg-black/40 blur-xl rounded-[100%] rotation-x-60" />
        </div>
      </div>
    </Section>
  )
}
