import React from 'react'
import { Store, Users, Package, Truck } from 'lucide-react'

const HIGHLIGHTS = [
  { icon: Store, label: 'Loja física' },
  { icon: Users, label: 'Atendimento próximo' },
  { icon: Package, label: 'Variedade de produtos' },
  { icon: Truck, label: 'Logística e envios' },
]

export default function About() {
  return (
    <section id="sobre" className="section-pad bg-primary-50">
      <div className="container-px mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-secondary sm:text-4xl">
            A Carolipe Multivendas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary/80">
            A Carolipe Multivendas nasceu para oferecer praticidade, variedade e atendimento próximo aos seus clientes, reunindo diferentes categorias de produtos e serviços em um só lugar.
          </p>
          <p className="mt-4 leading-relaxed text-secondary/70">
            Do material de saúde ao envio da sua encomenda, a proposta é simples: facilitar o dia a dia de quem confia na Carolipe.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {HIGHLIGHTS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-3 rounded-xl2 bg-white p-6 shadow-card"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/5 text-secondary">
                <Icon size={22} />
              </div>
              <span className="font-heading text-sm font-semibold text-secondary">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
