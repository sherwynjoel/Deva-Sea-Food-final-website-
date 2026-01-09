import {
  Users,
  Eye,
  Tag,
  Building2,
  Briefcase,
  MessageSquare
} from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { cn } from '../../lib/cn'
import { useState, useEffect } from 'react'

// Map icons to navigation items
const iconMap: Record<string, typeof Users> = {
  'about': Users,
  'vision-mission-goals': Eye,
  'what-we-offer': Tag,
  'facility': Building2,
  'portfolio': Briefcase,
  'contact': MessageSquare,
}

export function NavButtons() {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = siteContent.nav.map(item => {
        const element = document.getElementById(item.id)
        return { id: item.id, element, top: element?.getBoundingClientRect().top || 0 }
      })

      const current = sections
        .filter(s => s.top <= 100 && s.top >= -200)
        .sort((a, b) => Math.abs(a.top) - Math.abs(b.top))[0]

      if (current) {
        setActiveId(current.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="glass-focus sr-only fixed left-4 top-4 z-[70] rounded-full bg-black/40 px-4 py-2 text-xs font-semibold text-white/90 focus:not-sr-only"
      >
        Skip to content
      </a>

      {/* Navigation Bar with integrated logo */}
      <nav className="fixed top-3 sm:top-4 lg:top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <div
          className={cn(
            'glass rounded-2xl border border-white/15 backdrop-blur-2xl',
            'bg-gradient-to-b from-white/10 via-white/5 to-white/0',
            'shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]',
            'px-3 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-3'
          )}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <a
              href="#top"
              className="glass-focus shrink-0 flex items-center gap-2 sm:gap-3 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 pr-2 sm:pr-3"
            >
              <img
                src="/logo.png"
                alt="Deva Sea Food Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-cover rounded-xl ring-2 ring-white/20"
              />
              <span className="hidden sm:block text-white font-semibold text-sm lg:text-base tracking-wide">
                Deva SEA FOOD
              </span>
            </a>

            {/* Navigation links on the right */}
            <div className="flex items-center gap-0.5 sm:gap-1 lg:gap-2">
              {siteContent.nav.map((item) => {
                const Icon = iconMap[item.id] || Users
                const isActive = activeId === item.id

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveId(item.id)}
                    className={cn(
                      'glass-focus flex items-center justify-center gap-1 sm:gap-1.5',
                      'shrink-0 px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2.5 rounded-lg sm:rounded-xl transition-all duration-300 ease-out',
                      'hover:bg-white/10 active:scale-95',
                      isActive && 'bg-white/15'
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 shrink-0',
                        isActive ? 'text-white' : 'text-white/70'
                      )}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span
                      className={cn(
                        'hidden lg:block text-xs font-medium leading-none transition-all duration-300 whitespace-nowrap',
                        isActive ? 'text-white' : 'text-white/70'
                      )}
                    >
                      {item.label}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
