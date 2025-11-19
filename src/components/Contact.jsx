import React from 'react'
import { MapPin, Phone, Mail, Instagram } from 'lucide-react'

const Contact = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Location & Contact</h2>
        <p className="mt-3 text-slate-300">Mulund & Thane</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-center gap-3 text-slate-200">
              <MapPin className="text-blue-400" />
              <span>Mulund & Thane</span>
            </div>
          </div>
          <a href="https://wa.me/917507228836" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-emerald-500/50">
            <div className="flex items-center gap-3 text-slate-200">
              <Phone className="text-emerald-400" />
              <span>WhatsApp: 7507228836</span>
            </div>
          </a>
          <a href="mailto:functionalfattofit@gmail.com" className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-blue-500/50">
            <div className="flex items-center gap-3 text-slate-200">
              <Mail className="text-blue-400" />
              <span>functionalfattofit@gmail.com</span>
            </div>
          </a>
          <a href="https://instagram.com/tpp_the_performace_project" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-pink-500/50">
            <div className="flex items-center gap-3 text-slate-200">
              <Instagram className="text-pink-400" />
              <span>@tpp_the_performace_project</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
