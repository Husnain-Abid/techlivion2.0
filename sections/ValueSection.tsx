'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTag from '@/components/ui/SectionTag'
import CounterNumber from '@/components/ui/CounterNumber'
import { ArrowRight } from 'lucide-react'

const stats = [
  { label: 'Project Done', value: 500, suffix: 'K+' },
  { label: 'Happy Client', value: 25, suffix: 'K+' },
  { label: 'Client Ratings', value: 4.9, suffix: '', decimals: 1 },
  { label: 'Award Winning', value: 48, suffix: '' },
]

export default function ValueSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Value */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-28">
          <AnimatedSection direction="left">
            <SectionTag label="Our Value" />
            <h2 className="section-heading text-4xl lg:text-5xl text-white mb-5 leading-tight">
              Your Digital Future, Our Expertise:{' '}
              <span className="text-primary">Techlivion Delivers Excellence.</span>
            </h2>
            <p className="text-white/55 leading-relaxed mb-6">
              At Techlivion, we merge innovation with expertise to shape your digital future. Our team delivers cutting-edge solutions that drive growth, efficiency, and transformation across all aspects of your business.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              From application development to digital marketing and branding, we are committed to excellence at every step of your journey, ensuring impactful results and lasting success.
            </p>
            <a href="#services" className="btn-primary gap-2">
              Discover More <ArrowRight size={16} />
            </a>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <div className="grid grid-cols-1 gap-6">
              {/* Mission */}
              <div className="bg-[#111] border border-white/06 rounded-xl p-6 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <span className="text-primary text-lg group-hover:text-white transition-colors">🎯</span>
                  </div>
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase">Our Mission</p>
                </div>
                <h3 className="text-white font-heading font-bold text-xl mb-2">
                  Managed IT Mastery: Enhancing Operations with Expert Support
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  We provide comprehensive managed IT services that optimize your systems, reduce downtime, and boost productivity. With proactive monitoring and expert support, your business runs smoother, smarter, and more securely.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-[#111] border border-white/06 rounded-xl p-6 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <span className="text-primary text-lg group-hover:text-white transition-colors">🔭</span>
                  </div>
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase">Our Vision</p>
                </div>
                <h3 className="text-white font-heading font-bold text-xl mb-2">
                  Crafting Tomorrow's Solutions: Web Development Insights
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  Our web development expertise ensures fast, secure, and scalable solutions tailored to your business goals, helping you build a resilient digital presence for the future.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats row */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-xl" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/06 rounded-2xl overflow-hidden border border-white/06">
            {stats.map(({ label, value, suffix, decimals }) => (
              <AnimatedSection key={label} direction="up" className="bg-[#111] p-8 text-center hover:bg-[#161616] transition-colors duration-300">
                <div className="text-5xl lg:text-6xl font-heading font-bold text-primary mb-2">
                  <CounterNumber end={value} suffix={suffix} decimals={decimals} />
                </div>
                <p className="text-white/40 text-sm font-medium">{label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
