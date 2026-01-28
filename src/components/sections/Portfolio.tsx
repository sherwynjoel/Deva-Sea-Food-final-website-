import { ChevronRight, Fish } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../content/siteContent'

import { Reveal } from '../motion/Reveal'
import { GlassCard } from '../ui/GlassCard'
import { Section } from '../ui/Section'

type PortfolioItem = (typeof siteContent.portfolio.products)[number]

function ProductCard({ item, index }: { item: PortfolioItem; index: number }) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const slug = item.slug ?? ''

  return (
    <Link
      to={`/product/${slug}`}
      className="group block relative h-full"
    >
      <GlassCard className="h-full p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 hover:shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-ocean-900/5 ring-1 ring-ocean-900/10 transition-colors group-hover:bg-ocean-600 group-hover:text-white">
              <Fish className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-ocean-950/50 mb-1">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-lg font-semibold text-ocean-950 group-hover:text-ocean-700">
                {item.name}
              </h3>
            </div>
          </div>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ocean-950/10 bg-white/30 text-ocean-950/40 transition-all group-hover:border-ocean-600/30 group-hover:bg-ocean-600 group-hover:text-white">
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>

        <div className="mt-auto pt-4">
          <p className="text-sm italic text-ocean-950/60 mb-3">{item.scientific}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-ocean-950/10 bg-white/20 px-2.5 py-1 text-[10px] font-semibold text-ocean-950/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </Link>
  )
}

export function Portfolio() {
  const items = siteContent.portfolio.products

  return (
    <Section id="portfolio">
      <Reveal>
        <div className="flex flex-col gap-3 text-center sm:text-left sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-ocean-950/70">OUR PRODUCTS</p>
            <h2 className="heading-font mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {siteContent.portfolio.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-ocean-950/75 sm:text-base">
              {siteContent.portfolio.subtitle}
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
        {items.map((item, idx) => (
          <Reveal key={item.name} delay={idx * 0.05} className="h-full">
            <ProductCard item={item} index={idx} />
          </Reveal>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs font-semibold text-ocean-950/55">{siteContent.portfolio.note}</p>
      </div>
    </Section>
  )
}
