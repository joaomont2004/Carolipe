import React from 'react'
import { Package, Truck, MapPin, MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/company.js'

export default function Shipping() {
  return (
    <section id="envios" className="section-pad bg-primary-50">
      <div className="container-px mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="order-2 grid grid-cols-3 gap-4 md:order-1">
          {[Package, Truck, MapPin].map((Icon, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-xl2 bg-white shadow-card"
            >
              <Icon size={32} className="text-primary-600" strokeWidth={1.5} />
            </div>
          ))}
        </div>

        <div className="order-1 md:order-2">
          <h2 className="font-heading text-3xl font-semibold text-secondary sm:text-4xl">
            Também somos ponto de envio
          </h2>
          <p className="mt-5 leading-relaxed text-secondary/80">
            Além dos produtos, a Carolipe Multivendas trabalha com agência de envios, recebendo e despachando encomendas para todo o Brasil.
          </p>
          <p className="mt-3 leading-relaxed text-secondary/70">
            Precisa enviar algo? Fale com a gente e combine os detalhes diretamente pelo WhatsApp.
          </p>

          <a
            href={whatsappLink('Olá! Preciso enviar uma encomenda pela Carolipe.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-[12px] bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-accent-dark"
          >
            <MessageCircle size={20} />
            Saiba mais pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
