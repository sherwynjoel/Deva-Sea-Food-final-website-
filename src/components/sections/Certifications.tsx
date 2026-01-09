import { ShieldCheck } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { Section } from '../ui/Section'

// Certification images with names
const certificationImages = [
  { src: '/1.jpeg', alt: 'FSSAI', name: 'FSSAI' },
  { src: '/2.jpg', alt: 'EU Compliance', name: 'EU Compliance' },
  { src: '/3.jpeg', alt: 'Export Inspection Council', name: 'Export Inspection' },
  { src: '/4.jpeg', alt: 'FSSC 22000', name: 'FSSC 22000' },
  { src: '/5.jpeg', alt: 'GMP', name: 'GMP Certified' },
  { src: '/6.jpeg', alt: 'HACCP', name: 'HACCP' },
  { src: '/7.jpeg', alt: 'ISO', name: 'ISO Standards' },
]

export function Certifications() {
  return (
    <Section id="certifications">
      <div className="relative min-h-[600px] lg:min-h-[700px]">
        {/* Left side content */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 max-w-md lg:max-w-lg px-4 lg:px-0">
          <Reveal>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20 mb-4">
              <ShieldCheck className="h-7 w-7 text-ocean-200" />
            </span>
            <h2 className="heading-font text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl text-white">
              {siteContent.certifications.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70 lg:text-lg leading-relaxed">
              {siteContent.certifications.description}
            </p>
          </Reveal>
        </div>

        {/* Large decorative arc on the left */}
        <div className="absolute left-[30%] top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div
            className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full border border-white/10"
            style={{
              background: 'radial-gradient(circle at 70% 50%, rgba(8,145,178,0.12) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Right side - Vertical arc of certifications */}
        <div className="absolute right-4 sm:right-8 lg:right-16 top-1/2 -translate-y-1/2">
          {/* Vertical connecting line */}
          <div className="absolute left-[30px] sm:left-[40px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Curved arc line */}
          <svg
            className="absolute left-0 top-0 h-full w-24 pointer-events-none"
            viewBox="0 0 100 600"
            preserveAspectRatio="none"
          >
            <path
              d="M 80 50 Q 20 300 80 550"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />
          </svg>

          {/* Certification items */}
          <div className="relative flex flex-col gap-8 sm:gap-10 lg:gap-12 py-8">
            {certificationImages.map((cert, idx) => (
              <div
                key={`cert-${idx}`}
                className="flex items-center gap-4 sm:gap-5"
                style={{
                  // Create slight curve effect with padding
                  paddingLeft: `${Math.abs(3 - idx) * 8}px`,
                }}
              >
                {/* Circular icon container */}
                <div className="relative group">
                  {/* Connecting dot on the line */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/40" />

                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white/5 border-2 border-white/30 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-lg hover:scale-110 hover:border-white/50 hover:bg-white/10 transition-all duration-300 cursor-pointer group-hover:shadow-ocean-300/20 group-hover:shadow-xl">
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Label */}
                <span className="text-sm sm:text-base lg:text-lg font-medium text-white/90 whitespace-nowrap">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout fallback */}
        <div className="lg:hidden pt-[280px] sm:pt-[320px]">
          {/* Spacer for absolute positioned content */}
        </div>
      </div>
    </Section>
  )
}
