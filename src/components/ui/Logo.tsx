import Image from "next/image"

export interface LogoProps {
  className?: string
}

export function Logo({ className = "h-10 md:h-12 w-auto" }: LogoProps) {
  return (
    <Image
      src="/logo_transparent.png"
      alt="Nest n Wings"
      width={200}
      height={50}
      className={className}
      priority
    />
  )
}
