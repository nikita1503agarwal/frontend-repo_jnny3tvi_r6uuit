import React from 'react'

const tiers = [
  { name: 'Monthly Group Training', note: 'Contact for plans' },
  { name: 'Personal Training', note: 'Contact for plans' },
  { name: 'Athlete Performance Package', note: 'Contact for plans' },
]

const Pricing = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Pricing</h2>
        <p className="mt-3 text-slate-300">Contact for plans</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-2 text-slate-300">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
