import { cn } from '../../lib/cn'

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export function GlassTextarea({ className, ...props }: Props) {
  return (
    <textarea
      className={cn(
        'glass-focus glass min-h-28 w-full resize-y rounded-2xl px-4 py-3 text-sm text-ocean-950 placeholder:text-ocean-950/60',
        className,
      )}
      {...props}
    />
  )
}


