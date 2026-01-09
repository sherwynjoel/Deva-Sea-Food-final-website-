import { motion, useAnimation } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { useState, useEffect } from 'react'

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
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  // Continuous rotation animation
  useEffect(() => {
    controls.start({
      rotateY: 360,
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  }, [controls]);

  // Pause/Resume on hover
  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        rotateY: 360,
        transition: {
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    }
  }, [isPaused, controls]);

  return (
    <Section id="certifications" className="overflow-hidden">
      <div className="flex flex-col gap-12 min-h-[400px]">
        {/* Header Content */}
        <div className="max-w-2xl mx-auto text-center z-20 px-4">
          <Reveal>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20 mb-6 backdrop-blur-sm">
              <ShieldCheck className="h-7 w-7 text-ocean-200" />
            </div>
            <h2 className="heading-font text-3xl font-semibold tracking-tight sm:text-4xl text-white">
              {siteContent.certifications.title}
            </h2>
            <p className="mt-4 text-base text-white/70 leading-relaxed max-w-xl mx-auto">
              {siteContent.certifications.description}
            </p>
          </Reveal>
        </div>

        {/* 3D Circular Carousel */}
        <div
          className="flex-1 relative h-[500px] w-full flex items-center justify-center"
          style={{ perspective: '1200px' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-ocean-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

          {/* Carousel Ring */}
          <motion.div
            className="relative w-[300px] h-[300px]"
            animate={controls}
            style={{ transformStyle: 'preserve-3d' }}
          >

            {certificationImages.map((cert, index) => {
              const angle = index * (360 / certificationImages.length);
              return (
                <div
                  key={cert.name}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(180px)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="w-32 h-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-white/20 transition-colors duration-300 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                    <div className="w-16 h-16 mb-3 rounded-full bg-white/90 p-2 flex items-center justify-center shadow-inner">
                      <img src={cert.src} alt={cert.alt} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-bold text-white text-center leading-tight">
                      {cert.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

