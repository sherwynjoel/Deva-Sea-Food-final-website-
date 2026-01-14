import { useMemo, useState } from 'react'
import { ChevronRight, Fish, Image as ImageIcon } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { cn } from '../../lib/cn'
import { Reveal } from '../motion/Reveal'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../ui/Section'

type PortfolioItem = (typeof siteContent.portfolio.products)[number]

function ProductLine({ item, active, onClick, index }: { item: PortfolioItem; active: boolean; onClick: () => void; index: number }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'glass-focus w-full rounded-2xl px-4 py-3 text-left transition',
        active ? 'bg-ocean-950/5 ring-1 ring-ocean-950/15' : 'hover:bg-ocean-950/5',
      )}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-ocean-900/5 ring-1 ring-ocean-900/10">
          <Fish className="h-5 w-5 text-ocean-600" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-[0.22em] text-ocean-950/55">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="mt-1 truncate text-sm font-semibold text-ocean-950/90">{item.name}</p>
              <p className="mt-1 truncate text-xs text-ocean-950/65">
                <span className="italic">({item.scientific})</span>
              </p>
            </div>

            <div className="hidden shrink-0 items-center gap-2 md:flex">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-ocean-950/10 bg-white/30 px-3 py-1.5 text-[11px] font-semibold text-ocean-950/70"
                >
                  {t}
                </span>
              ))}
              <ChevronRight className={cn('h-4 w-4 text-ocean-950/50', active && 'text-ocean-600')} />
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-2 md:hidden">
            {item.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-ocean-950/10 bg-white/30 px-3 py-1.5 text-[11px] font-semibold text-ocean-950/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  )
}

export function Portfolio() {
  const items = siteContent.portfolio.products
  const [activeIndex, setActiveIndex] = useState(0)
  const active = items[Math.max(0, Math.min(activeIndex, items.length - 1))]

  const subCards = useMemo(() => {
    const chunks: string[][] = []
    const list = active?.subProducts ?? []
    const per = 4
    for (let i = 0; i < list.length; i += per) chunks.push(list.slice(i, i + per))
    return chunks
  }, [active])

  return (
    <Section id="portfolio">
      <Reveal>
        <div className="flex flex-col gap-3 text-center sm:text-left sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-ocean-950/70">OUR PORTFOLIO</p>
            <h2 className="heading-font mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {siteContent.portfolio.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-ocean-950/75 sm:text-base">
              {siteContent.portfolio.subtitle}
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-6 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-6">
          <GlassCard className="p-4 sm:p-5">
            <div className="grid gap-2">
              {items.map((item, idx) => (
                <ProductLine
                  key={item.name}
                  item={item}
                  index={idx}
                  active={idx === activeIndex}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
              <div className="pt-2">
                <p className="text-xs font-semibold text-ocean-950/55">{siteContent.portfolio.note}</p>
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={0.06}>
          <GlassCard className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.22em] text-ocean-950/55">SUB PRODUCTS</p>
                <p className="heading-font mt-2 text-xl font-semibold tracking-tight">{active?.name}</p>
                <p className="mt-1 text-sm text-ocean-950/65 italic">({active?.scientific})</p>
              </div>
              <div className="flex flex-wrap justify-end gap-2">
                {active?.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-ocean-950/10 bg-white/30 px-3 py-2 text-xs font-semibold text-ocean-950/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {subCards.map((chunk, i) => (
                <div key={i} className="glass rounded-xl sm:rounded-2xl p-3 sm:p-5">
                  <p className="text-sm font-semibold text-ocean-950/85">{active?.name}</p>
                  <ul className="mt-3 space-y-2 text-sm text-ocean-950/75">
                    {chunk.map((s) => (
                      <li key={s} className="flex items-center gap-3">
                        <span className="glass inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
                          <ImageIcon className="h-4 w-4 text-ocean-600/90" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-ocean-600/80" />
                            <span className="truncate font-semibold text-ocean-950/85">{s}</span>
                          </div>
                          <p className="mt-0.5 text-xs text-ocean-950/55">Image placeholder</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  )
}


