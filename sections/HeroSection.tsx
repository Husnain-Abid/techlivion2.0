'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Play, ArrowRight } from 'lucide-react'
import CounterNumber from '@/components/ui/CounterNumber'

const words = ['Agility', 'Ability', 'Adherence']

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Red glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Rotating words */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 border border-white/10 px-3 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {w}
                </motion.span>
              ))}
            </motion.div>

            <motion.h1
              className="section-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Streamlining
              <br />
              <span className="text-gradient-red">Processes</span> for
              <br />
              Business Efficiency
            </motion.h1>

            <motion.p
              className="text-white/55 text-lg leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Streamlining processes enhances business efficiency by eliminating unnecessary steps and reducing operational delays. It leads to faster workflows, improved productivity, and cost savings.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <a href="#about" className="btn-primary gap-2">
                Discover More
                <ArrowRight size={18} />
              </a>
              <a href="#portfolio" className="btn-outline gap-2">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={12} fill="white" />
                </span>
                View Our Work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div>
                <div className="text-4xl font-heading font-bold text-primary">
                  <CounterNumber end={95} suffix="%" />
                </div>
                <p className="text-white/40 text-sm mt-1">Boost Revenue</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-4xl font-heading font-bold text-primary">
                  <CounterNumber end={500} suffix="+" />
                </div>
                <p className="text-white/40 text-sm mt-1">Projects Done</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-4xl font-heading font-bold text-primary">
                  <CounterNumber end={25} suffix="K+" />
                </div>
                <p className="text-white/40 text-sm mt-1">Happy Clients</p>
              </div>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&h=800&fit=crop&auto=format"
                alt="Business woman with mobile phone"
                className="w-full h-[520px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl px-6 py-4 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="text-3xl font-heading font-bold">10+</div>
              <div className="text-xs opacity-80 mt-0.5">Years Experience</div>
            </motion.div>

            {/* Floating card */}
            <motion.div
              className="absolute -top-4 -right-4 bg-[#111]/90 backdrop-blur border border-white/10 rounded-xl px-5 py-3 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/60 to-primary border-2 border-[#111]" />
                  ))}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">5-star rated</p>
                  <p className="text-white/40 text-[10px]">by 1,000+ clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  )
}
