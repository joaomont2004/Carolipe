import React from 'react'
import { Quote } from 'lucide-react'

// Espaço reservado para depoimentos reais de clientes.
// Substitua os itens abaixo por depoimentos verdadeiros quando disponíveis.
const PLACEHOLDER_SLOTS = [1, 2, 3]

export default function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-secondary sm:text-4xl">
            Clientes que confiam na Carolipe
          </h2>
          <p className="mt-3 text-secondary/70">
            Em breve, depoimentos reais de quem já comprou com a gente.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PLACEHOLDER_SLOTS.map((slot) => (
            <div
              key={slot}
              className="flex flex-col items-center justify-center gap-3 rounded-xl2 border-2 border-dashed border-primary-200 bg-primary-50/40 p-8 text-center"
            >
              <Quote className="text-primary-300" size={28} />
              <p className="text-sm text-secondary/50">Depoimento reservado para inserção futura</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
