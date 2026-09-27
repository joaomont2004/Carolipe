import React from 'react'
import { MessageCircle, ShoppingBag, Stethoscope, HardHat, Sparkles, Truck } from 'lucide-react'
import { company, whatsappLink } from '../data/company.js'

const FLOATING_CARDS = [
  { icon: Stethoscope, label: 'Material de Saúde', style: 'top-2 left-2 md:left-0' },
  { icon: HardHat, label: 'EPI', style: 'top-1/3 -right-2 md:-right-6' },
  { icon: Sparkles, label: 'Beleza', style: 'bottom-16 left-0 md:-left-6' },
  { icon: Truck, label: 'Envios', style: 'bottom-0 right-4' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-primary-50 pt-28">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-200/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-10 left-1/3 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-px relative mx-auto grid max-w-6xl items-center gap-12 pb-20 pt-8 md:grid-cols-2 md:pb-28 md:pt-16">
        <div className="animate-fade-up">
          <p className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-secondary shadow-card">
            Loja física e envio para todo o Brasil
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight text-secondary sm:text-5xl">
            Produtos, praticidade e atendimento que chegam até você.
          </h1>
          <p className="mt-5 max-w-md text-lg text-secondary/80">
            Materiais de saúde, EPIs, beleza e muito mais. A Carolipe Multivendas conecta variedade, praticidade e atendimento próximo em um só lugar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-secondary px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <ShoppingBag size={20} />
              Ver produtos
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-accent-dark"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-secondary/60">
            {company.whatsappDisplay} · {company.instagramHandle}
          </p>
        </div>

        <div className="relative mx-auto h-80 w-full max-w-sm md:h-96 md:max-w-none">
          <div className="absolute inset-6 rounded-xl2 bg-gradient-to-br from-primary-300 to-secondary shadow-soft md:inset-10" />
          {FLOATING_CARDS.map(({ icon: Icon, label, style }, i) => (
            <div
              key={label}
              className={`animate-float absolute flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card ${style}`}
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <Icon size={18} className="text-primary-600" />
              <span className="text-sm font-medium text-secondary">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
