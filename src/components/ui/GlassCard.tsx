import { cn } from '../../lib/cn'

type Props = {
  className?: string
  children: React.ReactNode
}

export function GlassCard({ className, children }: Props) {
  return (
    <div className={cn('glass glass-hover rounded-2xl transition-all duration-300 hover:scale-[1.02]', className)}>
      {children}
    </div>
  )
}


