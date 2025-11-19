import React from 'react'
import Hero from './components/Hero'
import Offers from './components/Offers'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import LeadForm from './components/LeadForm'
import Booking from './components/Booking'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Offers />
      <WhyUs />
      <Testimonials />
      <Pricing />
      <LeadForm />
      <Booking />
      <Contact />

      <footer className="py-8 text-center text-sm text-slate-400 bg-slate-950">
        © {new Date().getFullYear()} The Performance Project — All rights reserved.
      </footer>
    </div>
  )
}

export default App
