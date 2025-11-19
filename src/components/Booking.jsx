import React from 'react'

const calendlyLinks = [
  { title: 'Free trial session', url: 'https://calendly.com/your-handle/free-trial-session' },
  { title: 'Performance assessment', url: 'https://calendly.com/your-handle/performance-assessment' },
  { title: 'Parent call', url: 'https://calendly.com/your-handle/parent-call' },
]

const Booking = () => {
  return (
    <section id="booking" className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Appointment Booking</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Choose a slot that works for you. We’ll confirm on WhatsApp.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {calendlyLinks.map((c) => (
            <div key={c.title} className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-800/40">
              <div className="px-4 py-3 border-b border-slate-800/70 font-semibold">{c.title}</div>
              <div className="aspect-[4/5] bg-slate-900/50">
                <iframe
                  title={c.title}
                  src={`${c.url}?hide_landing_page_details=1&hide_gdpr_banner=1`}
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                >Loading…</iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Booking
