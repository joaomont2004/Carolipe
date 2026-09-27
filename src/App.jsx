import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Categories from './components/Categories.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Benefits from './components/Benefits.jsx'
import Shipping from './components/Shipping.jsx'
import Marketplace from './components/Marketplace.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTAFinal from './components/CTAFinal.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <About />
        <Products />
        <Benefits />
        <Shipping />
        <Marketplace />
        <HowItWorks />
        <Testimonials />
        <CTAFinal />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
