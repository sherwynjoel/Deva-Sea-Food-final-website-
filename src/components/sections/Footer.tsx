import { Mail, PhoneCall } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <p className="text-sm font-semibold">{siteContent.brand.name}</p>
            <p className="mt-2 text-sm text-white/65">{siteContent.brand.locationLine}</p>
            <p className="mt-3 text-xs text-white/50">{siteContent.brand.address}</p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <div className="mt-3 space-y-2">
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-3.5 w-3.5 text-ocean-200 shrink-0" />
                <div className="text-xs text-white/65">
                  <a href={`mailto:${siteContent.contact.emails[0]}`} className="hover:text-white">
                    {siteContent.contact.emails[0]}
                  </a>
                  <br />
                  <a href={`mailto:${siteContent.contact.emails[1]}`} className="hover:text-white">
                    {siteContent.contact.emails[1]}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="h-3.5 w-3.5 text-ocean-200 shrink-0" />
                <a href={`tel:${siteContent.contact.phone}`} className="text-xs text-white/65 hover:text-white">
                  {siteContent.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold">Quick Links</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {siteContent.nav.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className="glass-focus rounded-full px-3 py-2 text-xs font-semibold text-white/70 hover:bg-white/5 hover:text-white"
                >
                  {n.label}
                </a>
              ))}
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


