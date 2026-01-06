import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Image as ImageIcon, ShieldCheck, Snowflake, Warehouse } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { cn } from '../../lib/cn'
import { Reveal } from '../motion/Reveal'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../ui/Section'

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
    ;(mq as any)[add]('change', sync)
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(mq as any)[remove]('change', sync)
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
              className="glass flex h-full flex-col rounded-3xl border border-white/10 p-4 sm:p-5 overflow-hidden"
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
                  'no-scrollbar flex snap-x snap-mandatory gap-0 overflow-x-auto overflow-y-visible',
                  '-mx-4 px-4 sm:-mx-5 sm:px-5',
                )}
              >
                {items.map((img, idx) => (
                  <div
                    key={img.src}
                    data-slide
                    className="flex shrink-0 snap-center justify-center"
                    style={{ width: 'calc(100vw - 2rem)', maxWidth: '980px' }}
                  >
                    <div className="w-full">
                      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/20" aria-hidden="true" />
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[480px]"
                          loading="lazy"
                          onError={(e) => {
                            // If the image doesn't exist yet, show a friendly placeholder.
                            const el = e.currentTarget
                            el.style.display = 'none'
                          }}
                        />
                        <div className="grid h-[280px] place-items-center p-4 sm:h-[380px] sm:p-6 lg:h-[480px]">
                          <div className="glass rounded-3xl px-4 py-3 text-center sm:px-5 sm:py-4">
                            <div className="mx-auto inline-flex items-center gap-2 text-xs font-semibold sm:text-sm">
                              <ImageIcon className="h-4 w-4 text-ocean-200 shrink-0" />
                              <span>Facility image coming soon</span>
                            </div>
                            <p className="mt-2 max-w-md text-xs text-white/75 sm:text-sm break-words">
                              Add your facility photos to replace these placeholders.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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


