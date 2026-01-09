import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { siteContent } from '../../content/siteContent'
import { GlassButton } from '../ui/GlassButton'

import { Container } from '../ui/Container'
import heroVideo from '../../assets/hero-ocean.mp4'

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Carousel of images to display
  const slides = siteContent.facility.images || []

  useEffect(() => {
    // if (slides.length === 0) return // Removed constant condition check

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Bottom fade to blend with next section */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-[rgb(var(--page-bg))]" />
      </div>

      <Container className="relative z-10">
        <div className="relative">
          {/* Static background decorations - kept for extra subtle effects or removed if too busy. 
              Let's keep them but make them very subtle or remove if they conflict with video. 
              Removing them is cleaner for video background. */}

          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.22em] text-white/70 text-center sm:text-left">
                {siteContent.brand.tagline}
              </p>
              <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-6xl text-center sm:text-left">
                {siteContent.hero.headline}
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-sm sm:text-base text-white/80 lg:text-lg text-center sm:text-left">
                {siteContent.hero.subhead}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <a href={siteContent.hero.ctas.primary.href}>
                  <GlassButton>
                    {siteContent.hero.ctas.primary.label}
                    <ArrowRight className="h-4 w-4" />
                  </GlassButton>
                </a>
                <a href={siteContent.hero.ctas.secondary.href}>
                  <GlassButton variant="secondary">
                    {siteContent.hero.ctas.secondary.label}
                  </GlassButton>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2">
                {siteContent.hero.chips.map((c, idx) => (
                  <span
                    key={c}
                    className="glass inline-flex items-center rounded-full px-3 py-2 text-xs font-semibold text-white/80 transition-all duration-300 hover:scale-110 hover:bg-white/15 hover:shadow-md"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl lg:aspect-square">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    {slides[currentSlide] && (
                      <img
                        src={slides[currentSlide].src}
                        alt={slides[currentSlide].alt}
                        className="h-full w-full object-cover"
                      />
                    )}
                    {/* Inner shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Optional slide indicators */}
                <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
                  {slides.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


