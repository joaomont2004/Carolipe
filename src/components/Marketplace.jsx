import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { company } from '../data/company.js'

export default function Marketplace() {
  const hasLink = Boolean(company.mercadoLivreUrl)

  return (
    <section className="section-pad bg-white">
      <div className="container-px mx-auto max-w-4xl rounded-xl2 bg-gradient-to-br from-primary-50 to-white p-10 text-center shadow-card sm:p-14">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
          <ShoppingCart size={28} />
        </div>
        <h2 className="mt-6 font-heading text-3xl font-semibold text-secondary sm:text-4xl">
          Também estamos no Mercado Livre
        </h2>
        <p className="mx-auto mt-4 max-w-md text-secondary/70">
          Encontre produtos da Carolipe também através do Mercado Livre.
        </p>

        {hasLink ? (
          <a
            href={company.mercadoLivreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center rounded-[12px] bg-secondary px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Visitar nossa loja no Mercado Livre
          </a>
        ) : (
          <p className="mt-7 text-sm text-secondary/50">
            Link da loja em breve — adicione em <code className="rounded bg-primary-50 px-1.5 py-0.5">src/data/company.js</code> (mercadoLivreUrl).
          </p>
        )}
      </div>
    </section>
  )
}
