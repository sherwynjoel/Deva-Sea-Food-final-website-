import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'

import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-stretch">
        <Reveal className="lg:col-span-12 max-w-6xl mx-auto">
          <div className="flex h-full flex-col">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-ocean-950/70 text-center sm:text-left">ABOUT US</p>
              <h2 className="heading-font mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl text-center sm:text-left">
                {siteContent.about.title}
              </h2>
              {siteContent.about.subtitle ? (
                <p className="mt-3 text-pretty text-sm sm:text-base text-ocean-950/75 text-center sm:text-left">{siteContent.about.subtitle}</p>
              ) : null}
            </div>

            <div className="mt-6">
              <div className="glass rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-xl">
                {/* Background Image with Opacity */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url('/team thumbs-up.png')` }}
                />

                <div className="relative z-10 space-y-4 sm:space-y-6 text-base leading-relaxed text-ocean-950 font-medium sm:text-lg">
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


      </div>
    </Section>
  )
}


