import { cn } from '../../lib/cn'

type Props = React.InputHTMLAttributes<HTMLInputElement>

export function GlassInput({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        'glass-focus glass w-full rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/50',
        className,
      )}
      {...props}
    />
  )
}


