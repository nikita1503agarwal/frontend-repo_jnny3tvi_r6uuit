import React from 'react'

const testimonials = [
  {
    img: 'https://images.unsplash.com/photo-1546484959-f9a53db89efe?q=80&w=1400&auto=format&fit=crop',
    quote: 'Gained explosive speed and strength within 12 weeks. Game performance skyrocketed!'
  },
  {
    img: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1400&auto=format&fit=crop',
    quote: 'Back from injury stronger than ever. The structured plan and monitoring changed everything.'
  },
  {
    img: 'https://images.unsplash.com/photo-1571731956672-f2b94d58d47b?q=80&w=1400&auto=format&fit=crop',
    quote: 'Lost 8kg, gained confidence, and finally move pain‑free. Coaching is top‑notch.'
  },
  {
    img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1400&auto=format&fit=crop',
    quote: 'My kid loves the sessions! Agility and coordination improved visibly in a month.'
  }
]

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 text-white">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Testimonials</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Real stories from our athletes, kids, and adults who trained with us.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <figure key={i} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
              <img src={t.img} alt="testimonial" className="h-52 w-full object-cover" />
              <blockquote className="p-4 text-sm text-slate-200">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
