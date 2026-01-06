import { ShieldCheck } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { Section } from '../ui/Section'

export function Certifications() {
  return (
    <Section id="certifications">
      <Reveal>
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
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
    </Section>
  )
}

