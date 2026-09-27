// Ilustração placeholder elegante, usada onde ainda não há foto real do produto/loja.
// Basta trocar o <img> pelo arquivo real quando disponível — veja o README.
import React from 'react'

export default function PlaceholderArt({ icon: Icon, label, className = '' }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary-50 to-primary-100 text-primary-700 ${className}`}
      role="img"
      aria-label={label || 'Imagem ilustrativa'}
    >
      {Icon && <Icon size={32} strokeWidth={1.5} />}
      {label && <span className="text-xs font-medium text-primary-700/80">{label}</span>}
    </div>
  )
}
