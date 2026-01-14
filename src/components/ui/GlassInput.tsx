import { cn } from '../../lib/cn'

type Props = React.InputHTMLAttributes<HTMLInputElement>

export function GlassInput({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        'glass-focus glass w-full rounded-2xl px-4 py-3 text-sm text-ocean-950 placeholder:text-ocean-950/60',
        className,
      )}
      {...props}
    />
  )
}


