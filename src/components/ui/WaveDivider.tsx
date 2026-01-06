import { cn } from '../../lib/cn'

type Props = {
  className?: string
}

export function WaveDivider({ className }: Props) {
  return (
    <div className={cn('pointer-events-none select-none', className)} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-10 w-full opacity-70">
        <path
          d="M0,64 C160,24 320,104 480,64 C640,24 800,104 960,64 C1120,24 1280,104 1440,64 L1440,120 L0,120 Z"
          fill="rgba(255,255,255,0.06)"
        />
        <path
          d="M0,76 C180,40 360,110 540,76 C720,40 900,110 1080,76 C1260,40 1350,92 1440,76 L1440,120 L0,120 Z"
          fill="rgba(255,255,255,0.04)"
        />
      </svg>
    </div>
  )
}


