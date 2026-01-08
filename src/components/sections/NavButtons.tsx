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

      {/* Responsive Navigation Bar - Same design for all screens */}
      <nav className="fixed top-2 sm:top-3 lg:top-4 left-1/2 -translate-x-1/2 z-50">
        <div
          className={cn(
            'glass rounded-full border border-white/15 backdrop-blur-2xl',
            'bg-gradient-to-b from-white/10 via-white/5 to-white/0',
            'shadow-[0_8px_24px_0_rgba(0,0,0,0.35)]',
            'px-2 py-1.5 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3'
          )}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}
        >
          <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-3">
            {/* Logo */}
            <a
              href="#top"
              className="glass-focus shrink-0 flex items-center justify-center mr-1 sm:mr-2 lg:mr-3 rounded-full overflow-hidden bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <img
                src="/logo.png"
                alt="Deva Sea Food Logo"
                className="h-7 w-7 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-cover rounded-full"
              />
            </a>
            {siteContent.nav.map((item) => {
              const Icon = iconMap[item.id] || Users
              const isActive = activeId === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    'glass-focus flex flex-col items-center justify-center gap-0.5',
                    'shrink-0 px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2.5 rounded-lg sm:rounded-xl transition-all duration-300 ease-out',
                    'hover:bg-white/10 active:scale-95',
                    isActive && 'bg-white/15'
                  )}
                >
                  <Icon
                    className={cn(
                      'h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 transition-all duration-300 shrink-0',
                      isActive ? 'text-white' : 'text-white/70'
                    )}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span
                    className={cn(
                      'text-[5px] sm:text-[8px] lg:text-[10px] font-medium leading-none transition-all duration-300 whitespace-nowrap',
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
      </nav>
    </>
  )
}
