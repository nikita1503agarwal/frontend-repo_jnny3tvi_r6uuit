import React from 'react'
import { Dumbbell, Zap, Users, Activity, Footprints, Flame, MoveRight } from 'lucide-react'

const items = [
  { icon: Dumbbell, title: 'Strength & Conditioning for All Sports', desc: 'Sport-agnostic performance training focused on power, speed, and stamina.' },
  { icon: Users, title: 'Kids Athletic Development (10+)', desc: 'Age-appropriate fundamentals: coordination, agility, motor skills, and fun.' },
  { icon: Activity, title: 'General Fitness (30+)', desc: 'Build muscle, improve mobility, and boost everyday energy.' },
  { icon: Footprints, title: 'Sport-Specific Training', desc: 'Football, Cricket, Badminton, Tennis, Basketball — targeted drills and conditioning.' },
  { icon: Flame, title: 'Body Composition Programs', desc: 'Fat loss, muscle gain, strength gain with sustainable nutrition guidance.' },
  { icon: Zap, title: 'Personal & Small-Group Coaching', desc: 'Focused 1:1 or tight-knit squads for maximum progress and accountability.' },
]

const Offers = () => {
  return (
    <section className="relative py-16 md:py-24 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">What We Offer</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Programs crafted for different ages, sports, and goals — grounded in exercise science.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/70 to-slate-900/30 p-6 hover:border-blue-600/50 transition">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-600/20 text-blue-300 p-2">
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{desc}</p>
              <div className="mt-4 inline-flex items-center text-blue-300/80 text-sm group-hover:text-blue-400">
                Learn more <MoveRight className="ml-1" size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers
