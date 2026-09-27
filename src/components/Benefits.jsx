import React from 'react'
import { HeartHandshake, PackageSearch, Truck, Store, Zap, MessageCircle } from 'lucide-react'

const BENEFITS = [
  { icon: HeartHandshake, title: 'Atendimento próximo', description: 'Conversa direta, sem burocracia, para resolver o que você precisa.' },
  { icon: PackageSearch, title: 'Variedade de produtos', description: 'Saúde, EPI, beleza e mais categorias reunidas em um só lugar.' },
  { icon: Truck, title: 'Envio para todo o Brasil', description: 'Também funcionamos como ponto de envio de encomendas.' },
  { icon: Store, title: 'Loja física', description: 'Você pode visitar, conhecer e retirar pessoalmente.' },
  { icon: Zap, title: 'Praticidade', description: 'Consulta rápida de disponibilidade antes de fechar a compra.' },
  { icon: MessageCircle, title: 'Atendimento pelo WhatsApp', description: 'Fale com a gente pelo canal que você já usa todos os dias.' },
]

export default function Benefits() {
  return (
    <section className="section-pad bg-secondary text-white">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Por que comprar com a Carolipe?</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl2 bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/20 text-primary-200">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
