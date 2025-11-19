import React from 'react'
import { ShieldCheck, ClipboardCheck, ChartBar, Activity, Medal, Target, UserCheck } from 'lucide-react'

const points = [
  { icon: ShieldCheck, text: 'ACE & ACSM Certified' },
  { icon: Medal, text: 'Football-specific S&C Specialist' },
  { icon: ClipboardCheck, text: 'Scientific programming' },
  { icon: Activity, text: 'Injury-prevention focused' },
  { icon: ChartBar, text: 'Real progress tracking' },
  { icon: Target, text: 'Proven transformations' },
  { icon: UserCheck, text: '1:1 attention & age-appropriate training' },
]

const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Why Train With Us?</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">We combine credentials, experience, and data-driven design to deliver consistent results.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-800/40 p-4">
              <div className="rounded-md bg-emerald-500/15 text-emerald-300 p-2">
                <Icon size={20} />
              </div>
              <span className="text-slate-200">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
