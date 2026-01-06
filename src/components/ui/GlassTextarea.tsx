import { cn } from '../../lib/cn'

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export function GlassTextarea({ className, ...props }: Props) {
  return (
    <textarea
      className={cn(
        'glass-focus glass min-h-28 w-full resize-y rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/50',
        className,
      )}
      {...props}
    />
  )
}


