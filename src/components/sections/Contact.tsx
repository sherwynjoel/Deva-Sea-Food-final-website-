import { useMemo, useState } from 'react'
import { Mail, MessageCircle, PhoneCall } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { Reveal } from '../motion/Reveal'
import { GlassButton } from '../ui/GlassButton'
import { GlassCard } from '../ui/GlassCard'
import { GlassInput } from '../ui/GlassInput'
import { GlassTextarea } from '../ui/GlassTextarea'
import { Section } from '../ui/Section'

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  requirement: string
}

export function Contact() {
  const [state, setState] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const mailto = useMemo(() => {
    const subject = encodeURIComponent('Quote Request — Deva SEA FOOD')
    const body = encodeURIComponent(
      [
        `Name: ${state.name}`,
        `Company: ${state.company}`,
        `Email: ${state.email}`,
        `Phone: ${state.phone}`,
        '',
        'Requirement:',
        state.requirement,
      ].join('\n'),
    )
    // Send to both email addresses
    const recipients = siteContent.contact.emails.join(',')
    return `mailto:${recipients}?subject=${subject}&body=${body}`
  }, [state])

  return (
    <Section id="contact">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl text-center sm:text-left">
            {siteContent.contact.title}
          </h2>
          <p className="mt-3 text-ocean-950/75 text-center sm:text-left">{siteContent.contact.subtitle}</p>

          <div className="mt-4 sm:mt-6 grid gap-2 sm:gap-3">
            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Mail className="h-4 w-4 text-ocean-600" />
                <span>Email</span>
              </div>
              <div className="mt-2 space-y-1">
                <p className="text-sm text-ocean-950/75">
                  <a href={`mailto:${siteContent.contact.emails[0]}`} className="hover:text-ocean-950">
                    {siteContent.contact.emails[0]}
                  </a>
                </p>
                <p className="text-sm text-ocean-950/75">
                  <a href={`mailto:${siteContent.contact.emails[1]}`} className="hover:text-ocean-950">
                    {siteContent.contact.emails[1]}
                  </a>
                </p>
              </div>
            </div>
            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <PhoneCall className="h-4 w-4 text-ocean-600" />
                <span>Phone</span>
              </div>
              <p className="mt-2 text-sm text-ocean-950/75">
                <a href={`tel:${siteContent.contact.phone}`} className="hover:text-ocean-950">
                  {siteContent.contact.phone}
                </a>
              </p>
            </div>
            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <MessageCircle className="h-4 w-4 text-ocean-600" />
                <span>WhatsApp</span>
              </div>
              <p className="mt-2 text-sm text-ocean-950/75">
                <a href={`https://wa.me/${siteContent.contact.phone.replace(/\D/g, '')}`} className="hover:text-ocean-950" target="_blank" rel="noopener noreferrer">
                  {siteContent.contact.phone}
                </a>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.08}>
          <GlassCard className="p-4 sm:p-6 lg:p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="grid gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold text-ocean-950/70">
                    Name
                  </label>
                  <GlassInput
                    id="name"
                    className="mt-2"
                    value={state.name}
                    onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-xs font-semibold text-ocean-950/70">
                    Company
                  </label>
                  <GlassInput
                    id="company"
                    className="mt-2"
                    value={state.company}
                    onChange={(e) => setState((s) => ({ ...s, company: e.target.value }))}
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-ocean-950/70">
                    Email
                  </label>
                  <GlassInput
                    id="email"
                    className="mt-2"
                    type="email"
                    value={state.email}
                    onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="name@company.com"
                    autoComplete="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs font-semibold text-ocean-950/70">
                    Phone / WhatsApp
                  </label>
                  <GlassInput
                    id="phone"
                    className="mt-2"
                    value={state.phone}
                    onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
                    placeholder="+00 00000 00000"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="requirement" className="text-xs font-semibold text-ocean-950/70">
                  Requirement
                </label>
                <GlassTextarea
                  id="requirement"
                  className="mt-2"
                  value={state.requirement}
                  onChange={(e) => setState((s) => ({ ...s, requirement: e.target.value }))}
                  placeholder="Products, pack sizes, destination port, quantity, target dates..."
                  required
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <GlassButton type="submit">Generate email</GlassButton>
                <a href={mailto}>
                  <GlassButton type="button" variant="secondary">
                    Open mail draft
                    <Mail className="h-4 w-4" />
                  </GlassButton>
                </a>
                {submitted ? (
                  <p className="text-xs font-semibold text-ocean-950/65">
                    Draft ready — click “Open mail draft”.
                  </p>
                ) : null}
              </div>
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  )
}


