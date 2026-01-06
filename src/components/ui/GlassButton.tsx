import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}

export function GlassButton({ className, variant = 'primary', ...props }: Props) {
  const base =
    'glass-focus inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition-all duration-300 active:translate-y-[1px] hover:scale-105 hover:shadow-lg'

  const variants: Record<Variant, string> = {
    primary:
      'glass border border-glass-border/20 bg-gradient-to-b from-ocean-200/25 to-ocean-500/10 text-white shadow-glow hover:border-glass-border/30 hover:shadow-[0_0_20px_rgba(var(--ocean-300)/0.4)]',
    secondary: 'glass border border-glass-border/20 text-white hover:border-glass-border/30 hover:bg-white/5',
    ghost: 'border border-transparent text-white/85 hover:bg-white/5 hover:text-white',
  }

  return <button className={cn(base, variants[variant], className)} {...props} />
}


