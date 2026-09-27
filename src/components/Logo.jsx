import React from 'react'

// Logo textual provisório. Substitua por <img src="/logo-carolipe.svg" ... />
// assim que tiver o arquivo oficial do logotipo (veja o README).
export default function Logo({ variant = 'dark', className = '' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-secondary'
  return (
    <a href="#inicio" className={`flex items-center gap-2 group ${className}`} aria-label="Carolipe Multivendas — página inicial">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl2 bg-primary shadow-soft">
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent" />
        <span className="font-heading text-lg font-bold text-white">C</span>
      </span>
      <span className={`font-heading text-lg font-semibold leading-none ${textColor}`}>
        Carolipe
        <span className="block text-[11px] font-medium tracking-wide text-accent">MULTIVENDAS</span>
      </span>
    </a>
  )
}
