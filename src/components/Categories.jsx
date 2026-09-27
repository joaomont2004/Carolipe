import React from 'react'
import { categories } from '../data/categories.js'

export default function Categories() {
  return (
    <section id="categorias" className="section-pad bg-white">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-secondary sm:text-4xl">
            O que você encontra na Carolipe
          </h2>
          <p className="mt-3 text-secondary/70">
            Categorias reunidas em um só lugar, com atendimento próximo para tirar qualquer dúvida.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="group rounded-xl2 border border-primary-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-secondary">{title}</h3>
              <p className="mt-1.5 text-sm text-secondary/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
