import React from 'react'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/company.js'

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Carolipe Multivendas"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-soft transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={26} />
    </a>
  )
}
