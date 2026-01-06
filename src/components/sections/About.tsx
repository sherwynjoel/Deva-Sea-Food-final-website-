import { Image as ImageIcon, Sparkles, Users } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
        <Reveal className="lg:col-span-5">
          <div className="flex h-full flex-col">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-white/70">ABOUT US</p>
              <h2 className="heading-font mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {siteContent.about.title}
              </h2>
              {siteContent.about.subtitle ? (
                <p className="mt-4 text-pretty text-base text-white/75">{siteContent.about.subtitle}</p>
              ) : null}
            </div>

            <div className="mt-6">
              <div className="glass rounded-2xl p-5 sm:p-6">
                <div className="space-y-5 text-justify text-sm leading-relaxed text-white/80 hyphens-auto sm:text-base">
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
            <GlassCard className="relative h-full overflow-hidden p-4 sm:p-6">
              {/* Decorative ocean glow */}
              <div
                className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-ocean-300/12 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-ocean-600/10 blur-3xl"
                aria-hidden="true"
              />

              {/* Creative placeholder frame */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/5">
                <div
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{
                    background:
                      'radial-gradient(900px 420px at 20% 10%, rgba(34,211,238,0.20), transparent 55%), radial-gradient(700px 380px at 85% 25%, rgba(165,243,252,0.16), transparent 60%), radial-gradient(800px 520px at 55% 95%, rgba(8,145,178,0.18), transparent 58%)',
                  }}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-60"
                  style={{
                    background:
                      'repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 14px)',
                  }}
                  aria-hidden="true"
                />

                {/* The image placeholder area (swap later with your team photo) */}
                <div className="relative flex min-h-[320px] flex-1">
                  <div className="absolute inset-0 grid place-items-center p-6">
                    <div className="glass rounded-3xl px-5 py-4 text-center">
                      <div className="mx-auto inline-flex items-center gap-2 text-sm font-semibold">
                        <Users className="h-4 w-4 text-ocean-200" />
                        <span>Team Photo Placeholder</span>
                      </div>
                      <p className="mt-2 max-w-sm text-sm text-white/75">
                        Add your <span className="font-semibold">Deva SEA FOOD team thumbs-up</span>{' '}
                        image here.
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/10 px-4 py-2 text-xs font-semibold text-white/70">
                        <ImageIcon className="h-4 w-4 text-ocean-200" />
                        <span>Recommended: 1600×1000 (or larger)</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom wave accent */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 opacity-70" aria-hidden="true">
                    <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="h-20 w-full">
                      <path
                        d="M0,80 C240,30 420,130 720,80 C1020,30 1200,120 1440,80 L1440,140 L0,140 Z"
                        fill="rgba(255,255,255,0.07)"
                      />
                      <path
                        d="M0,98 C260,60 460,140 720,98 C980,56 1210,130 1440,98 L1440,140 L0,140 Z"
                        fill="rgba(255,255,255,0.05)"
                      />
                    </svg>
                  </div>
                </div>

                {/* Context chips */}
                <div className="relative mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-white/10 p-4">
                  <div className="flex flex-wrap gap-2">
                    {['People-first', 'Export mindset', 'Cold-chain focus'].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-white/15 bg-black/10 px-3 py-2 text-xs font-semibold text-white/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/10 px-3 py-2 text-xs font-semibold text-white/75">
                    <Sparkles className="h-4 w-4 text-ocean-200" />
                    Replace with your photo
                  </span>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}


