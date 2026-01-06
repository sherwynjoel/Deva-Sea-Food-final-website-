import { useState, useEffect } from 'react'
import { ShieldCheck } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { Section } from '../ui/Section'
import { GlassCard } from '../ui/GlassCard'

const AUTO_SLIDE_INTERVAL = 4000 // 4 seconds

export function Certifications() {
  const items = siteContent.certifications.logos
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const reduce = useReducedMotion()

  // Duplicate items for seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items]

  // Auto-slide carousel
  useEffect(() => {
    if (reduce || isPaused || items.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1
        // Reset to start when we reach the end of first set
        return next >= items.length ? 0 : next
      })
    }, AUTO_SLIDE_INTERVAL)

    return () => clearInterval(interval)
  }, [reduce, isPaused, items.length])

  return (
    <Section id="certifications">
      <Reveal>
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left mb-8">
          <div className="flex-shrink-0">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              <ShieldCheck className="h-7 w-7 text-ocean-200" />
            </span>
          </div>
          <div className="flex-1">
            <h2 className="heading-font text-2xl font-semibold tracking-tight sm:text-3xl">
              {siteContent.certifications.title}
            </h2>
            <p className="mt-3 text-base text-white/75 sm:text-lg">
              {siteContent.certifications.description}
            </p>
          </div>
        </div>
      </Reveal>

      <div 
        className="relative overflow-hidden rounded-[32px] py-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-4 sm:gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {duplicatedItems.map((cert, idx) => (
              <div
                key={`${cert.name}-${idx}`}
                className="shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
              >
                <GlassCard className="flex h-[180px] sm:h-[220px] w-full flex-col items-center justify-center overflow-hidden p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="relative h-full w-full flex items-center justify-center bg-white rounded-2xl p-3 sm:p-4">
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        const el = e.currentTarget
                        el.style.display = 'none'
                        const parent = el.parentElement
                        if (parent) {
                          parent.innerHTML = `
                            <div class="text-center">
                              <div class="text-lg font-bold text-gray-400">${cert.name}</div>
                              <div class="text-xs text-gray-500 mt-1">Logo placeholder</div>
                            </div>
                          `
                        }
                      }}
                    />
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`glass-focus rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 h-3 bg-white/50'
                  : 'w-3 h-3 bg-white/20 hover:bg-white/30 hover:scale-110'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

