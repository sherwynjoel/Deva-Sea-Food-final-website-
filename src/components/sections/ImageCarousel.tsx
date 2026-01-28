import { useEffect, useRef } from 'react'
import { ShieldCheck } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { Section } from '../ui/Section'

// Images from siteContent
const images = siteContent.certifications.logos.map(logo => logo.src)

const SCROLL_SPEED = 0.8 // pixels per frame

export function ImageCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollPositionRef = useRef(0)
  const animationFrameRef = useRef<number | null>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !containerRef.current) return

    const container = containerRef.current
    const firstImage = container.querySelector('div') as HTMLElement
    if (!firstImage) return

    const imageWidth = firstImage.offsetWidth
    const gap = 12 // gap-3 = 12px
    const singleSetWidth = images.length * (imageWidth + gap)

    const animate = () => {
      scrollPositionRef.current += SCROLL_SPEED

      // When we've scrolled one full set, reset instantly (seamless loop)
      if (scrollPositionRef.current >= singleSetWidth) {
        scrollPositionRef.current = scrollPositionRef.current - singleSetWidth
      }

      container.style.transform = `translateX(-${scrollPositionRef.current}px)`
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [reduce])

  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...images, ...images]

  return (
    <Section id="gallery">
      <Reveal>
        <div className="mb-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
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

      <div className="relative overflow-hidden rounded-[32px] py-8">
        <div
          ref={containerRef}
          className="flex gap-3"
          onMouseEnter={() => {
            if (animationFrameRef.current) {
              cancelAnimationFrame(animationFrameRef.current)
            }
          }}
          onMouseLeave={() => {
            if (reduce || !containerRef.current) return
            const container = containerRef.current
            const firstImage = container.querySelector('div') as HTMLElement
            if (!firstImage) return

            const imageWidth = firstImage.offsetWidth
            const gap = 12
            const singleSetWidth = images.length * (imageWidth + gap)

            const animate = () => {
              scrollPositionRef.current += SCROLL_SPEED

              if (scrollPositionRef.current >= singleSetWidth) {
                scrollPositionRef.current = scrollPositionRef.current - singleSetWidth
              }

              container.style.transform = `translateX(-${scrollPositionRef.current}px)`
              animationFrameRef.current = requestAnimationFrame(animate)
            }

            animationFrameRef.current = requestAnimationFrame(animate)
          }}
        >
          {duplicatedImages.map((img, idx) => (
            <div
              key={`${img}-${idx}`}
              className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-2xl sm:h-[140px] sm:w-[140px] lg:h-[160px] lg:w-[160px]"
            >
              <img
                src={img}
                alt={`Gallery image ${(idx % images.length) + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
