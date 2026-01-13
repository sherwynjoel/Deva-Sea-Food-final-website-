import { Eye, Target, Gem } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { Section } from '../ui/Section'
import { cn } from '../../lib/cn'

const icons = [Target, Eye, Gem]

const cardStyles = [
  {
    topBg: 'from-cyan-400 via-blue-400 to-blue-500',
    iconBg: 'from-blue-500 to-cyan-600',
    texturedBg: 'bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.15\'/%3E%3C/svg%3E")]',
  },
  {
    topBg: 'from-red-400 via-rose-400 to-pink-500',
    iconBg: 'from-rose-500 to-red-600',
    texturedBg: 'bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.15\'/%3E%3C/svg%3E")]',
  },
  {
    topBg: 'from-orange-400 via-amber-400 to-yellow-500',
    iconBg: 'from-amber-500 to-orange-600',
    texturedBg: 'bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.15\'/%3E%3C/svg%3E")]',
  },
]

export function VisionMissionGoals() {
  return (
    <Section id="vision-mission-goals">
      <Reveal>
        <div className="flex flex-col gap-3 text-center sm:text-left sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="heading-font text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {siteContent.vmg.title}
            </h2>
            <p className="mt-3 max-w-2xl text-white/75">{siteContent.vmg.subtitle}</p>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 sm:mt-10 grid items-stretch gap-3 sm:gap-4 lg:grid-cols-3">
        {siteContent.vmg.cards.map((c, idx) => {
          const Icon = icons[idx % icons.length]
          const isValues = c.title.toLowerCase() === 'values'
          return (
            <Reveal key={c.title} className="h-full" delay={0.04 * idx}>
              <div className="relative flex flex-col h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl bg-ocean-50">
                {/* Colored Top Section */}
                <div className={cn(
                  'relative flex-shrink-0 h-32 sm:h-36 bg-gradient-to-br',
                  cardStyles[idx].topBg,
                  cardStyles[idx].texturedBg,
                  'bg-blend-overlay'
                )}>
                  {/* Title - White text on colored background */}
                  <div className="flex items-center justify-center h-full px-4">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-lg">
                      {c.title.toUpperCase()}
                    </h3>
                  </div>
                </div>

                {/* Hexagonal Icon Badge - Overlapping at intersection */}
                <div className="absolute left-1/2 top-32 sm:top-36 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={cn(
                    'hex-badge w-20 h-20 sm:w-24 sm:h-24',
                    'bg-gradient-to-br shadow-2xl ring-4 ring-ocean-50',
                    cardStyles[idx].iconBg
                  )}>
                    <Icon className="h-9 w-9 sm:h-11 sm:w-11 text-white drop-shadow-lg" />
                  </div>
                </div>

                {/* Ocean Blue Bottom Section - grows with content */}
                <div className="flex-1 bg-ocean-50 px-5 sm:px-6 pt-12 sm:pt-14 pb-6">
                  <div className="flex flex-col h-full">
                    {/* Body text */}
                    {c.body ? (
                      <p className="text-sm leading-relaxed text-ocean-800 sm:text-base text-center mb-4">
                        {c.body}
                      </p>
                    ) : null}

                    {/* Bullets */}
                    {c.bullets.length ? (
                      <div className="mt-auto">
                        <div className="grid gap-2.5">
                          {c.bullets.map((b) => (
                            <div key={b} className="flex items-start gap-2 text-sm text-ocean-700">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-400" />
                              <span className={isValues ? 'leading-relaxed' : undefined}>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}


