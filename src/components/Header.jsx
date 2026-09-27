import React, { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import Logo from './Logo.jsx'
import { company, whatsappLink } from '../data/company.js'

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#envios', label: 'Envios' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-px mx-auto flex h-20 max-w-6xl items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[12px] bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-accent-dark"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-[10px] text-secondary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-primary-100 bg-white md:hidden">
          <nav className="container-px mx-auto flex flex-col gap-1 py-4" aria-label="Navegação móvel">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[10px] px-3 py-3 text-base font-medium text-secondary hover:bg-primary-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-[12px] bg-accent px-5 py-3 text-base font-semibold text-white"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
