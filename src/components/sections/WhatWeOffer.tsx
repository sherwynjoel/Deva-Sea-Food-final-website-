import { useEffect, useMemo, useRef, useState } from 'react'
import { BadgeCheck, ChevronLeft, ChevronRight, Globe2, Route, Snowflake, Tag, Waves } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { cn } from '../../lib/cn'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../ui/Section'

const iconByIndex = [Tag, BadgeCheck, Snowflake, Route, Globe2]

export function WhatWeOffer() {
  const items = siteContent.offer.points
  const [active, setActive] = useState(0)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const regionRef = useRef<HTMLDivElement | null>(null)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  const icons = useMemo(() => items.map((_, i) => iconByIndex[i % iconByIndex.length]), [items])

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

    const AUTOPLAY_MS = 3000
    const id = window.setInterval(() => {
      scrollToIndex((active + 1) % items.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [active, items.length, paused, reduceMotion])

  return (
    <Section id="what-we-offer">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/70">
            {siteContent.offer.titleSmall}
          </p>
          <h2 className="heading-font mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {siteContent.offer.headline}
          </h2>

          <GlassCard className="mt-6 p-6">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <Waves className="h-5 w-5 text-ocean-200" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">Designed for trade-ready seafood</p>
                <p className="mt-2 text-sm text-white/75">
                  Built around export discipline: quality checkpoints, cold-chain handling, and
                  predictable packing specs for buyers.
                </p>
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <div className="lg:col-span-8 min-w-0">
          <Reveal>
            <div
              ref={regionRef}
              className="glass rounded-3xl border border-white/10 p-4 sm:p-5 overflow-hidden"
              role="region"
              aria-roledescription="carousel"
              aria-label="What we offer"
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
                  Offer highlights <span className="text-white/55">({active + 1}/{items.length})</span>
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
                {items.map((p, idx) => {
                  const Icon = icons[idx]
                  return (
                    <div
                      key={p.title}
                      data-slide
                      className="flex shrink-0 snap-center justify-center"
                      style={{ width: 'calc(100vw - 2rem)', maxWidth: '760px' }}
                    >
                      <GlassCard className="relative flex w-full min-h-[260px] flex-col overflow-hidden p-5 sm:p-7">
                        <div
                          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ocean-300/10 blur-3xl"
                          aria-hidden="true"
                        />
                        <div className="relative flex items-start justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold tracking-[0.22em] text-white/60">
                              {String(idx + 1).padStart(2, '0')}
                            </p>
                            <p className="mt-2 text-balance text-base font-semibold text-white/90 break-words">
                              {p.title}
                            </p>
                          </div>
                          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                            <Icon className="h-5 w-5 text-ocean-200" />
                          </span>
                        </div>

                        <p className="relative mt-3 text-sm leading-relaxed text-white/75 sm:text-[15px] break-words">
                          {p.body}
                        </p>

                        <div className="relative mt-auto pt-5">
                          <div className="flex items-center gap-2 text-xs font-semibold text-white/65">
                            <span className="h-1.5 w-1.5 rounded-full bg-ocean-200/80 shrink-0" />
                            <span>Export-focused execution</span>
                          </div>
                        </div>
                      </GlassCard>
                    </div>
                  )
                })}
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
                    aria-label={`Go to item ${i + 1}`}
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


