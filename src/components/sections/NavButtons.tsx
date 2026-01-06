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
    handleScroll() // Initial check
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

      {/* Liquid Glass Top Navigation Bar */}
      <nav className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] max-w-md sm:max-w-xl lg:max-w-4xl">
        <div 
          className={cn(
            'glass rounded-full border border-white/15 backdrop-blur-2xl',
            'bg-gradient-to-b from-white/10 via-white/5 to-white/0',
            'shadow-[0_8px_24px_0_rgba(0,0,0,0.35)]',
            'px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 overflow-hidden'
          )}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}
        >
          <div className="flex items-center justify-start sm:justify-around gap-1 sm:gap-2 lg:gap-3 overflow-x-auto no-scrollbar scroll-smooth">
            {/* Logo on the left */}
            <a
              href="#top"
              className="glass-focus shrink-0 flex items-center justify-center mr-2 sm:mr-3 lg:mr-4 rounded-full overflow-hidden bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <img
                src="/logo.png"
                alt="Deva Sea Food Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 object-cover rounded-full transition-transform duration-300"
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
                    'glass-focus flex flex-col items-center justify-center gap-0.5 sm:gap-1',
                    'shrink-0 min-w-[60px] px-2 py-1.5 sm:min-w-[68px] sm:px-3 sm:py-2 lg:min-w-[80px] lg:px-4 lg:py-3 rounded-xl transition-all duration-300 ease-out',
                    'hover:bg-white/10 hover:scale-110 hover:shadow-lg active:scale-95',
                    isActive && 'bg-white/15 scale-110 shadow-md'
                  )}
                >
                  <Icon 
                    className={cn(
                      'h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 transition-all duration-300 shrink-0',
                      isActive ? 'text-white scale-110' : 'text-white/70'
                    )} 
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span 
                    className={cn(
                      'text-[9px] sm:text-[10px] lg:text-[11px] font-semibold leading-tight transition-all duration-300 whitespace-nowrap',
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


