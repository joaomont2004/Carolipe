import React from 'react'
import { Phone, Instagram, ShoppingCart, MessageCircle } from 'lucide-react'
import { company, whatsappLink } from '../data/company.js'

export default function Contact() {
  return (
    <section id="contato" className="section-pad bg-primary-50">
      <div className="container-px mx-auto max-w-4xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-secondary sm:text-4xl">
            Entre em contato
          </h2>
          <p className="mt-3 text-secondary/70">{company.name}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-xl2 bg-white p-7 text-center shadow-card transition-transform hover:-translate-y-1"
          >
            <MessageCircle size={26} className="text-primary-600" />
            <div>
              <p className="font-heading text-sm font-semibold text-secondary">WhatsApp</p>
              <p className="mt-1 text-sm text-secondary/60">{company.whatsappDisplay}</p>
            </div>
          </a>

          <a
            href={company.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-xl2 bg-white p-7 text-center shadow-card transition-transform hover:-translate-y-1"
          >
            <Instagram size={26} className="text-primary-600" />
            <div>
              <p className="font-heading text-sm font-semibold text-secondary">Instagram</p>
              <p className="mt-1 text-sm text-secondary/60">{company.instagramHandle}</p>
            </div>
          </a>

          {company.mercadoLivreUrl ? (
            <a
              href={company.mercadoLivreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-xl2 bg-white p-7 text-center shadow-card transition-transform hover:-translate-y-1"
            >
              <ShoppingCart size={26} className="text-primary-600" />
              <div>
                <p className="font-heading text-sm font-semibold text-secondary">Mercado Livre</p>
                <p className="mt-1 text-sm text-secondary/60">Ver loja</p>
              </div>
            </a>
          ) : (
            <div className="flex flex-col items-center gap-3 rounded-xl2 bg-white/60 p-7 text-center opacity-60">
              <ShoppingCart size={26} className="text-primary-400" />
              <div>
                <p className="font-heading text-sm font-semibold text-secondary">Mercado Livre</p>
                <p className="mt-1 text-sm text-secondary/50">Link em breve</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-secondary/60">
          <Phone size={16} />
          <span>{company.whatsappSecondaryDisplay}</span>
        </div>
      </div>
    </section>
  )
}
