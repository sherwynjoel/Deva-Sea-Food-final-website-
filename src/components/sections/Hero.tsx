import { useRef } from 'react'
import { ArrowRight, Globe2, Snowflake } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { GlassButton } from '../ui/GlassButton'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../ui/Section'

export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null)

  return (
    <Section id="top" className="pt-6 sm:pt-8">
      <div ref={heroRef} className="relative">
        {/* Static background decorations */}
        <div
          className="pointer-events-none absolute -left-28 top-6 z-[1] h-72 w-72 rounded-full bg-ocean-300/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 top-24 z-[1] h-80 w-80 rounded-full bg-ocean-600/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 grid items-center gap-8 sm:gap-10 lg:grid-cols-12">
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
            <GlassCard className="relative overflow-hidden p-4 sm:p-6 lg:p-8">
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

              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
                {siteContent.stats.map((s, idx) => (
                  <div
                    key={s.label}
                    className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-lg"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <p className="text-lg sm:text-xl font-semibold tracking-tight">{s.value}</p>
                    <p className="mt-1 text-xs font-semibold text-white/65">{s.label}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </Section>
  )
}


