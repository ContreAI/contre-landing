interface AmbientGlowProps {
  color?: string
  size?: string
  opacity?: string
  position?: string
  blur?: string
  className?: string
}

export function AmbientGlow({
  color = "#264E36",
  size = "w-[500px] h-[500px]",
  opacity = "opacity-[0.08]",
  position = "top-0 left-0",
  blur = "blur-[100px]",
  className,
}: AmbientGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={className ?? `absolute ${position} ${size} ${opacity} ${blur} rounded-full pointer-events-none`}
      style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
    />
  )
}
