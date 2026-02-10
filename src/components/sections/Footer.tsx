import { Mail, PhoneCall } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="relative border-t border-ocean-950/10 py-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/DJI_0862.JPG.jpeg"
          alt="Coastal View"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/70" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Company Info */}
          <div className="flex flex-col items-center">
            <img
              src="/logo.png"
              alt={siteContent.brand.name}
              className="h-16 w-16 mb-4 object-contain rounded-full shadow-lg bg-white/50 backdrop-blur-sm p-1"
            />
            <p className="text-sm font-semibold">{siteContent.brand.name}</p>
            <p className="mt-2 text-sm text-ocean-950/80 font-medium">{siteContent.brand.locationLine}</p>
            <p className="mt-3 text-xs text-ocean-950/70 max-w-sm">{siteContent.brand.address}</p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-3.5 w-3.5 text-ocean-600 shrink-0" />
                <div className="text-xs text-ocean-950/80 font-medium">
                  <a href={`mailto:${siteContent.contact.emails[0]}`} className="hover:text-ocean-700 transition-colors">
                    {siteContent.contact.emails[0]}
                  </a>
                  {' | '}
                  <a href={`mailto:${siteContent.contact.emails[1]}`} className="hover:text-ocean-700 transition-colors">
                    {siteContent.contact.emails[1]}
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <PhoneCall className="h-3.5 w-3.5 text-ocean-600 shrink-0" />
                <a href={`tel:${siteContent.contact.phone}`} className="text-xs text-ocean-950/80 font-medium hover:text-ocean-700 transition-colors">
                  {siteContent.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="relative z-10 mt-8 border-t border-ocean-950/5 pt-8">
        <p className="text-xs font-semibold text-ocean-950/60 text-center">
          © {new Date().getFullYear()} {siteContent.brand.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}


