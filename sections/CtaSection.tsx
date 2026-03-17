'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Zap } from 'lucide-react'

export default function CtaSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section ref={ref} className="py-20 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-primary rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Glow blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl" />

          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap size={18} className="text-white/80" />
                <span className="text-white/70 text-sm font-semibold tracking-widest uppercase">
                  Managed IT Excellence
                </span>
              </div>
              <h2 className="section-heading text-3xl lg:text-5xl text-white leading-tight max-w-2xl">
                Elevating Performance and Reliability for Your Business
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-sm hover:bg-white/90 transition-all duration-300 text-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1"
              >
                Discover More <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white/40 text-white font-bold px-8 py-4 rounded-sm hover:border-white hover:bg-white/10 transition-all duration-300 text-sm"
              >
                Our Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
