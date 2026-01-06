import { Goal, Sparkles, Telescope } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../ui/Section'

const icons = [Telescope, Sparkles, Goal]

export function VisionMissionGoals() {
  return (
    <Section id="vision-mission-goals">
      <Reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="heading-font text-3xl font-semibold tracking-tight sm:text-4xl">
              {siteContent.vmg.title}
            </h2>
            <p className="mt-3 max-w-2xl text-white/75">{siteContent.vmg.subtitle}</p>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-3">
        {siteContent.vmg.cards.map((c, idx) => {
          const Icon = icons[idx % icons.length]
          const isValues = c.title.toLowerCase() === 'values'
          return (
            <Reveal key={c.title} className="h-full" delay={0.04 * idx}>
              <GlassCard className="flex h-full min-h-[360px] flex-col p-7 sm:min-h-[420px]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.22em] text-white/65">
                      OUR {c.title.toUpperCase()}
                    </p>
                    <p className="heading-font mt-2 text-xl font-semibold tracking-tight">{c.title}</p>
                  </div>
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-ocean-200" />
                  </span>
                </div>

                <div className="mt-4 flex flex-1 flex-col">
                  {c.body ? (
                    <p className="text-sm leading-relaxed text-white/75 sm:text-base">{c.body}</p>
                  ) : null}

                  {c.bullets.length ? (
                    <div className="mt-auto pt-6">
                      <div className="grid gap-3">
                        {c.bullets.map((b) => (
                          <div key={b} className="flex items-start gap-2 text-sm text-white/80">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-200/80" />
                            <span className={isValues ? 'leading-relaxed' : undefined}>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </GlassCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}


