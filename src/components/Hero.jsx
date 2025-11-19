import React from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  const handleWhatsApp = () => {
    const phone = '917507228836' // WhatsApp number in international format without +
    const text = encodeURIComponent('Hi! I would like to book a free assessment for Strength & Conditioning at The Performance Project.')
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
  }

  const scrollToBooking = () => {
    const el = document.getElementById('booking')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-24 text-white">
        <p className="uppercase tracking-widest text-xs md:text-sm text-blue-300/80 mb-3">Functional Strength & Conditioning Academy</p>
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          Elevate Your Performance with Science-Backed Strength & Conditioning
        </h1>
        <p className="mt-5 text-base md:text-xl text-blue-100/90 max-w-3xl">
          Training for Kids, Athletes & Adults in Thane & Mulund – Improve strength, speed, mobility, and game performance.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button onClick={scrollToBooking} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-3 font-semibold transition">
            Book Free Assessment
            <ArrowRight size={18} />
          </button>
          <button onClick={handleWhatsApp} className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 px-5 py-3 font-semibold transition">
            <MessageCircle size={18} /> Join WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
