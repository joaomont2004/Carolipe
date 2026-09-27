import React from 'react'
import { Instagram, MessageCircle, ShoppingCart } from 'lucide-react'
import Logo from './Logo.jsx'
import { company } from '../data/company.js'

const LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#envios', label: 'Envios' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary-dark py-12 text-white/80">
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-10 sm:flex-row sm:justify-between">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Carolipe Multivendas — variedade, praticidade e atendimento próximo.
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-1">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            <a
              href={company.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Carolipe Multivendas"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <Instagram size={18} />
            </a>
            <a
              href={`https://wa.me/${company.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Carolipe Multivendas"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <MessageCircle size={18} />
            </a>
            {company.mercadoLivreUrl && (
              <a
                href={company.mercadoLivreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Loja da Carolipe no Mercado Livre"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <ShoppingCart size={18} />
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Carolipe Multivendas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
