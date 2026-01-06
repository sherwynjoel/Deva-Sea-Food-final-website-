import { cn } from '../../lib/cn'
import { Container } from './Container'

type Props = {
  id?: string
  className?: string
  children: React.ReactNode
}

export function Section({ id, className, children }: Props) {
  return (
    <section id={id} className={cn('relative py-16 sm:py-20', className)}>
      <Container>{children}</Container>
    </section>
  )
}


