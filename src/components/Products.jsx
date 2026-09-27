import React, { useMemo, useState } from 'react'
import { ImageOff } from 'lucide-react'
import { products, productCategories } from '../data/products.js'
import { whatsappLink } from '../data/company.js'

export default function Products() {
  const [active, setActive] = useState('Todos')

  const filtered = useMemo(
    () => (active === 'Todos' ? products : products.filter((p) => p.category === active)),
    [active]
  )

  return (
    <section id="produtos" className="section-pad bg-white">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-secondary sm:text-4xl">
            Encontre o que você precisa
          </h2>
          <p className="mt-3 text-secondary/70">
            Alguns exemplos do que trabalhamos. Não encontrou o que procura? Consulte pelo WhatsApp.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-[10px] px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-secondary text-white'
                  : 'bg-primary-50 text-secondary hover:bg-primary-100'
              }`}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-xl2 border border-primary-100 bg-white shadow-card transition-shadow hover:shadow-soft"
            >
              <div className="flex aspect-square items-center justify-center bg-primary-50 text-primary-400">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <ImageOff size={28} strokeWidth={1.5} aria-label="Foto do produto em breve" />
                )}
              </div>
              <div className="p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-primary-600">
                  {product.category}
                </p>
                <h3 className="mt-1 font-heading text-sm font-semibold text-secondary sm:text-base">
                  {product.name}
                </h3>
                <a
                  href={whatsappLink(`Olá! Gostaria de consultar disponibilidade de: ${product.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-accent hover:text-accent-dark"
                >
                  Consultar pelo WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-secondary/50">
          Fotos ilustrativas de espaço reservado — serão substituídas pelas imagens reais dos produtos.
        </p>
      </div>
    </section>
  )
}
