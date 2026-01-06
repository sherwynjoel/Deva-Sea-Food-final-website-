import { Anchor } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import { cn } from '../../lib/cn'
import { GlassButton } from '../ui/GlassButton'

export function NavButtons() {
  return (
    <>
      <a
        href="#main"
        className="glass-focus sr-only fixed left-4 top-4 z-[70] rounded-full bg-black/40 px-4 py-2 text-xs font-semibold text-white/90 focus:not-sr-only"
      >
        Skip to content
      </a>

      <div className="fixed right-4 top-4 z-50 flex items-center gap-2">
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/15 p-1 backdrop-blur-xl md:flex">
          {siteContent.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'glass-focus rounded-full px-3 py-2 text-xs font-semibold text-white/80',
                'hover:bg-white/5 hover:text-white',
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden sm:block">
          <GlassButton>
            <Anchor className="h-4 w-4" />
            Get Quote
          </GlassButton>
        </a>

        <details className="relative sm:hidden">
          <summary className="glass-focus list-none rounded-full px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/5 hover:text-white">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-white/10 bg-black/20 p-2 backdrop-blur-xl">
            {siteContent.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  'glass-focus block rounded-xl px-3 py-2 text-xs font-semibold text-white/80',
                  'hover:bg-white/5 hover:text-white',
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="glass-focus mt-1 block rounded-xl px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/5 hover:text-white"
            >
              Get Quote
            </a>
          </div>
        </details>
      </div>
    </>
  )
}


