import { ShieldCheck } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { Section } from '../ui/Section'
import { GlassCard } from '../ui/GlassCard'

export function Certifications() {
  const items = siteContent.certifications.logos
  
  // Don't render if no logos (check for array existence)
  if (!items) {
    return null
  }

  // Duplicate logos for seamless infinite loop
  const duplicatedLogos = [...items, ...items, ...items]

  return (
    <Section id="certifications">
      <Reveal>
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left mb-8">
          <div className="flex-shrink-0">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              <ShieldCheck className="h-7 w-7 text-ocean-200" />
            </span>
          </div>
          <div className="flex-1">
            <h2 className="heading-font text-2xl font-semibold tracking-tight sm:text-3xl">
              {siteContent.certifications.title}
            </h2>
            <p className="mt-3 text-base text-white/75 sm:text-lg">
              {siteContent.certifications.description}
            </p>
          </div>
        </div>
      </Reveal>

      <div className="relative overflow-hidden rounded-[32px] py-8 sm:py-10 lg:py-12">
        <div className="certifications-scroll">
          {duplicatedLogos.map((cert: { name: string; src: string; alt: string }, idx) => (
            <div
              key={`${cert.name}-${idx}`}
              className="certification-logo"
            >
              <GlassCard className="flex h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] md:h-[180px] md:w-[180px] lg:h-[200px] lg:w-[200px] flex-col items-center justify-center overflow-visible p-5 sm:p-6 md:p-7 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="relative h-full w-full flex items-center justify-center bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 overflow-visible">
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="h-full w-full object-contain max-w-full max-h-full"
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget
                      el.style.display = 'none'
                      const parent = el.parentElement
                      if (parent) {
                        parent.innerHTML = `
                          <div class="text-center">
                            <div class="text-xs sm:text-sm md:text-base font-bold text-gray-400">${cert.name}</div>
                            <div class="text-[10px] sm:text-xs text-gray-500 mt-1">Logo placeholder</div>
                          </div>
                        `
                      }
                    }}
                  />
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
