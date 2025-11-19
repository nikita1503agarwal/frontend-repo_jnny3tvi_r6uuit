import React from 'react'

const LeadForm = () => {
  return (
    <section id="lead" className="py-16 md:py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 text-white">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Get the Free PDF + Consult</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Fill the form to receive a starter guide and we’ll reach out to schedule your session.</p>

        <div className="mt-8 w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40">
          <iframe
            title="Lead Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdFhLk-demo/viewform?embedded=true"
            width="100%"
            height="800"
            className="w-full"
          >Loading…</iframe>
        </div>

        <div className="mt-4 text-sm text-slate-400">
          Fields: Name, Age, Sport/Goal, Phone number, Preferred location (Thane / Mulund)
        </div>
      </div>
    </section>
  )
}

export default LeadForm
