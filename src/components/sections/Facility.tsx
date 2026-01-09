import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Image as ImageIcon, ShieldCheck, Snowflake, Warehouse } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { cn } from '../../lib/cn'
import { Reveal } from '../motion/Reveal'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../ui/Section'

function FacilitySlide({ img, index }: { img: { src: string; alt: string }; index: number }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div
      data-slide
      className="flex shrink-0 snap-center justify-center px-2"
      style={{
        width: 'calc(100vw - 4rem)',
        maxWidth: '600px',
        minWidth: '280px'
      }}
    >
      <div className="w-full max-w-full">
        <GlassCard className="relative overflow-hidden p-0 h-[280px] sm:h-[360px] lg:h-[440px]">
          {/* Default state - show image if available */}
          {!imageError ? (
            <div className="relative h-full w-full group">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-4xl font-bold text-white/10 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ) : (
            /* Error/Placeholder state - Premium look */
            <div className="relative h-full w-full flex flex-col items-center justify-center bg-white/5 p-8 text-center">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-500/10 via-transparent to-purple-500/10" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 rounded-full bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-sm">
                  <ImageIcon className="h-8 w-8 text-white/40" />
                </div>
                <h3 className="text-lg font-semibold text-white/90">Image Coming Soon</h3>
                <p className="mt-2 text-sm text-white/50 max-w-[200px]">
                  We are currently updating our facility gallery. Check back later.
                </p>
                <div className="mt-8 border-t border-white/10 pt-4 w-12 flex justify-center">
                  <div className="h-1 w-1 rounded-full bg-white/20 mx-1" />
                  <div className="h-1 w-1 rounded-full bg-white/20 mx-1" />
                  <div className="h-1 w-1 rounded-full bg-white/20 mx-1" />
                </div>
              </div>

              {/* Large number watermark */}
              <div className="absolute bottom-4 right-6 text-6xl font-bold text-white/5 select-none pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  )
}

export function Facility() {
  const items = siteContent.facility.images
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const regionRef = useRef<HTMLDivElement | null>(null)

  function scrollToIndex(index: number) {
    const scroller = scrollerRef.current
    if (!scroller) return
    const children = Array.from(scroller.querySelectorAll<HTMLElement>('[data-slide]'))
    const clamped = Math.max(0, Math.min(index, children.length - 1))
    const target = children[clamped]
    if (!target) return
    scroller.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(Boolean(mq.matches))
    sync()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const add = (mq as any).addEventListener ? 'addEventListener' : 'addListener'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const remove = (mq as any).removeEventListener ? 'removeEventListener' : 'removeListener'
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ; (mq as any)[add]('change', sync)
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ; (mq as any)[remove]('change', sync)
    }
  }, [])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const children = Array.from(scroller.querySelectorAll<HTMLElement>('[data-slide]'))
        if (!children.length) return
        const x = scroller.scrollLeft
        let bestIdx = 0
        let bestDist = Number.POSITIVE_INFINITY
        for (let i = 0; i < children.length; i++) {
          const dist = Math.abs(children[i].offsetLeft - x)
          if (dist < bestDist) {
            bestDist = dist
            bestIdx = i
          }
        }
        setActive(bestIdx)
      })
    }

    onScroll()
    scroller.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      scroller.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    if (paused) return
    if (!items.length) return

    const AUTOPLAY_MS = 3500
    const id = window.setInterval(() => {
      scrollToIndex((active + 1) % items.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [active, items.length, paused, reduceMotion])

  return (
    <Section id="facility">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
        <Reveal className="lg:col-span-4 h-full">
          <div className="flex h-full flex-col">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-white/70">
                {siteContent.facility.titleSmall}
              </p>
              <h2 className="heading-font mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {siteContent.facility.headline}
              </h2>
              <p className="mt-4 text-sm text-white/75 sm:text-base">{siteContent.facility.subtitle}</p>
            </div>

            <GlassCard className="mt-6 p-6 lg:mt-auto">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <Warehouse className="h-5 w-5 text-ocean-200" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Facility highlights</p>
                  <div className="mt-3 grid gap-2">
                    {siteContent.facility.highlights.map((t, idx) => (
                      <div key={t} className="flex items-start gap-2 text-sm text-white/75">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-200/80" />
                        <span className="min-w-0">{t}</span>
                        {idx === 0 ? (
                          <ShieldCheck className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-ocean-200/80" />
                        ) : null}
                        {idx === 1 ? (
                          <Snowflake className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-ocean-200/80" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </Reveal>

        <div className="lg:col-span-8 min-w-0">
          <Reveal>
            <div
              ref={regionRef}
              className="glass flex h-full flex-col rounded-3xl border border-white/10 p-4 sm:p-5 overflow-hidden max-w-full"
              role="region"
              aria-roledescription="carousel"
              aria-label="Facility photos"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onPointerDown={() => setPaused(true)}
              onPointerUp={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={() => {
                window.setTimeout(() => {
                  const el = regionRef.current
                  if (!el) return
                  const ae = document.activeElement
                  setPaused(Boolean(ae && el.contains(ae)))
                }, 0)
              }}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <p className="text-sm font-semibold text-white/85 whitespace-nowrap">
                  Facility photos{' '}
                  <span className="text-white/55">
                    ({active + 1}/{items.length})
                  </span>
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    className="glass-focus glass inline-flex h-10 w-10 items-center justify-center rounded-full shrink-0"
                    onClick={() => scrollToIndex(active - 1)}
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-5 w-5 text-white/85" />
                  </button>
                  <button
                    type="button"
                    className="glass-focus glass inline-flex h-10 w-10 items-center justify-center rounded-full shrink-0"
                    onClick={() => scrollToIndex(active + 1)}
                    aria-label="Next"
                  >
                    <ChevronRight className="h-5 w-5 text-white/85" />
                  </button>
                </div>
              </div>

              <div
                ref={scrollerRef}
                className={cn(
                  'no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-visible',
                  '-mx-4 px-4 sm:-mx-5 sm:px-5',
                )}
                style={{ maxWidth: '100%' }}
              >
                {items.map((img, i) => (
                  <FacilitySlide key={img.src} img={img} index={i} />
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={cn(
                      'glass-focus h-2.5 w-2.5 rounded-full border shrink-0',
                      i === active ? 'border-white/40 bg-ocean-200/70' : 'border-white/20 bg-white/10',
                    )}
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    aria-current={i === active ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}


