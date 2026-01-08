import { ShieldCheck } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { Section } from '../ui/Section'

// Certification images
const certificationImages = [
  { src: '/1.jpeg', alt: 'Certification 1' },
  { src: '/2.jpg', alt: 'Certification 2' },
  { src: '/3.jpeg', alt: 'Certification 3' },
  { src: '/4.jpeg', alt: 'Certification 4' },
  { src: '/5.jpeg', alt: 'Certification 5' },
  { src: '/6.jpeg', alt: 'Certification 6' },
  { src: '/7.jpeg', alt: 'Certification 7' },
]

export function Certifications() {
  return (
    <Section id="certifications">
      <Reveal>
        <div className="flex flex-col items-center gap-4 text-center mb-8">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <ShieldCheck className="h-7 w-7 text-ocean-200" />
          </span>
          <div>
            <h2 className="heading-font text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              {siteContent.certifications.title}
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-white/75 lg:text-lg">
              {siteContent.certifications.description}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Static Image Grid - No Animation */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 mt-8 px-4">
        {certificationImages.map((img, idx) => (
          <div
            key={`cert-${idx}`}
            className="bg-white rounded-lg p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-[4/3] flex items-center justify-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
