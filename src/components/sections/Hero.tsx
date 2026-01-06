import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Globe2, Snowflake } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { GlassButton } from '../ui/GlassButton'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../ui/Section'

export function Hero() {
  const reduce = useReducedMotion()
  const videoCfg = siteContent.hero.backgroundVideo
  const showVideo = Boolean(videoCfg?.enabled && videoCfg.src && !reduce)
  const heroRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const videoOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0])

  return (
    <Section id="top" className="pt-6 sm:pt-8">
      <div ref={heroRef} className="relative">
        {showVideo ? (
          <motion.div
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
            style={{ opacity: videoOpacity }}
            aria-hidden="true"
          >
            <video
              className="h-full w-full object-cover opacity-85"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={videoCfg.poster}
              aria-hidden="true"
            >
              <source src={videoCfg.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/15" aria-hidden="true" />
          </motion.div>
        ) : null}

        {!reduce ? (
          <>
            <motion.div
              className="pointer-events-none absolute -left-28 top-6 z-[1] h-72 w-72 rounded-full bg-ocean-300/10 blur-3xl"
              animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            />
            <motion.div
              className="pointer-events-none absolute -right-24 top-24 z-[1] h-80 w-80 rounded-full bg-ocean-600/10 blur-3xl"
              animate={{ y: [0, 16, 0], x: [0, -8, 0] }}
              transition={{ duration: 10.5, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            />
          </>
        ) : null}

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/70">
              {siteContent.brand.tagline}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              {siteContent.hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
              {siteContent.hero.subhead}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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

            <div className="mt-8 flex flex-wrap gap-2">
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
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <GlassCard className="relative overflow-hidden p-6 sm:p-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-ocean-300/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110 group-hover:shadow-md">
                    <Snowflake className="h-5 w-5 text-ocean-200 transition-transform duration-300 group-hover:rotate-12" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Frozen-ready handling</p>
                    <p className="mt-1 text-sm text-white/75">
                      Process-driven cold-chain discipline, designed for consistent frozen quality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110 group-hover:shadow-md">
                    <Globe2 className="h-5 w-5 text-ocean-200 transition-transform duration-300 group-hover:rotate-12" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Import & export support</p>
                    <p className="mt-1 text-sm text-white/75">
                      Shipment coordination, packing standards, and documentation support for trade.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {siteContent.stats.map((s, idx) => (
                  <div 
                    key={s.label} 
                    className="glass rounded-2xl p-4 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-lg"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <p className="text-xl font-semibold tracking-tight">{s.value}</p>
                    <p className="mt-1 text-xs font-semibold text-white/65">{s.label}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}


