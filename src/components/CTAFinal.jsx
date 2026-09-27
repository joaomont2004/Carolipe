import React from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import { company, whatsappLink } from '../data/company.js'

export default function CTAFinal() {
  return (
    <section className="section-pad bg-secondary text-white">
      <div className="container-px mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
          Precisa de algum produto?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/75">
          Fale com a Carolipe e consulte disponibilidade, valores e formas de envio.
        </p>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-[12px] bg-accent px-8 py-4 text-lg font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-accent-dark"
        >
          <MessageCircle size={22} />
          Falar com a Carolipe no WhatsApp
        </a>

        <p className="mt-5 flex items-center justify-center gap-2 text-sm text-white/60">
          <Phone size={16} />
          {company.whatsappDisplay}
        </p>
      </div>
    </section>
  )
}
