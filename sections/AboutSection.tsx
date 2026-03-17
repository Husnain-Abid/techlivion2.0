'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTag from '@/components/ui/SectionTag'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const highlights = [
  'Custom application development tailored to your business needs',
  'Digital marketing & branding that builds strong brand identity',
  'End-to-end IT solutions aligned with your business goals',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/08 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=650&h=550&fit=crop&auto=format"
                  alt="IT Solutions team working"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/40 to-transparent" />
              </div>

              {/* Experience badge */}
              <div className="absolute bottom-8 right-8 bg-primary text-white rounded-xl p-5 text-center shadow-2xl">
                <div className="text-4xl font-heading font-bold leading-none">10+</div>
                <div className="text-xs mt-1 opacity-90">Years Experience</div>
              </div>

              {/* Accent border */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl z-[-1]" />
            </div>
          </AnimatedSection>

          {/* Right: content */}
          <AnimatedSection direction="right">
            <SectionTag label="Who we are" />
            <h2 className="section-heading text-4xl lg:text-5xl text-white mb-5">
              Delivering IT solutions that enable you to{' '}
              <span className="text-primary">work smarter.</span>
            </h2>
            <p className="text-white/55 leading-relaxed mb-6">
              Empowering your business with intelligent IT solutions for greater efficiency and performance. We align technology with your goals to achieve streamlined, smarter results.
            </p>
            <p className="text-white/40 leading-relaxed mb-8 text-sm">
              At Techlivion, we merge innovation with expertise to shape your digital future. Our team delivers cutting-edge solutions that drive growth, efficiency, and transformation across all aspects of your business.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-white/65 text-sm">{h}</span>
                </li>
              ))}
            </ul>

            <a href="#services" className="btn-primary gap-2">
              Discover More <ArrowRight size={16} />
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
