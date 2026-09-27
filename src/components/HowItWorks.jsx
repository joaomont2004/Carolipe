import React from 'react'
import { steps } from '../data/steps.js'

export default function HowItWorks() {
  return (
    <section className="section-pad bg-primary-50">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-secondary sm:text-4xl">
            Comprar com a Carolipe é fácil
          </h2>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-primary-200 lg:block"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-heading text-base font-semibold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-secondary">{step.title}</h3>
              <p className="mt-1.5 text-sm text-secondary/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
