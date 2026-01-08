import { cn } from '../../lib/cn'

type Props = {
  className?: string
  children: React.ReactNode
}

export function Container({ className, children }: Props) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-3 sm:px-6 lg:px-8 text-center sm:text-left', className)}>
      {children}
    </div>
  )
}


