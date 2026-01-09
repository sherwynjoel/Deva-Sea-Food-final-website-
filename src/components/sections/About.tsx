import { Sparkles } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-stretch">
        <Reveal className="lg:col-span-5">
          <div className="flex h-full flex-col">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-white/70 text-center sm:text-left">ABOUT US</p>
              <h2 className="heading-font mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl text-center sm:text-left">
                {siteContent.about.title}
              </h2>
              {siteContent.about.subtitle ? (
                <p className="mt-3 text-pretty text-sm sm:text-base text-white/75 text-center sm:text-left">{siteContent.about.subtitle}</p>
              ) : null}
            </div>

            <div className="mt-6">
              <div className="glass rounded-2xl p-5 sm:p-6">
                <div className="space-y-4 sm:space-y-5 text-sm leading-relaxed text-white/80 sm:text-base">
                  {siteContent.about.body.map((para) => (
                    <p key={para} className="text-pretty">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal className="h-full" delay={0.08}>
            <GlassCard className="relative h-full overflow-hidden p-3 sm:p-4">
              {/* Decorative ocean glow */}
              <div
                className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-ocean-300/12 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-ocean-600/10 blur-3xl"
                aria-hidden="true"
              />

              {/* Image container with proper sizing */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl">
                {/* Team photo - full width with proper aspect ratio */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
                  <img
                    src="/team thumbs-up.png"
                    alt="Deva Sea Food Team"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />

                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>

                {/* Context chips - positioned at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['People-first', 'Export mindset', 'Cold-chain focus'].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-white/30 bg-black/40 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}


