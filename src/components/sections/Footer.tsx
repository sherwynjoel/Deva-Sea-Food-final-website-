import { Mail, PhoneCall } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Company Info */}
          <div>
            <a
              href="#top"
              className="glass-focus inline-flex items-center justify-center mb-4 rounded-full overflow-hidden bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <img
                src="/logo.png"
                alt="Deva Sea Food Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 object-cover rounded-full transition-transform duration-300"
              />
            </a>
            <p className="text-sm font-semibold">{siteContent.brand.name}</p>
            <p className="mt-2 text-sm text-white/65">{siteContent.brand.locationLine}</p>
            <p className="mt-3 text-xs text-white/50">{siteContent.brand.address}</p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <div className="mt-3 space-y-2">
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-3.5 w-3.5 text-ocean-200 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-xs text-white/65">
                  <a href={`mailto:${siteContent.contact.emails[0]}`} className="hover:text-white transition-colors duration-200 inline-block hover:translate-x-1">
                    {siteContent.contact.emails[0]}
                  </a>
                  <br />
                  <a href={`mailto:${siteContent.contact.emails[1]}`} className="hover:text-white transition-colors duration-200 inline-block hover:translate-x-1">
                    {siteContent.contact.emails[1]}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 group">
                <PhoneCall className="h-3.5 w-3.5 text-ocean-200 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <a href={`tel:${siteContent.contact.phone}`} className="text-xs text-white/65 hover:text-white transition-all duration-200 hover:translate-x-1">
                  {siteContent.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-8">
        <p className="text-xs font-semibold text-white/45">
          © {new Date().getFullYear()} {siteContent.brand.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}


