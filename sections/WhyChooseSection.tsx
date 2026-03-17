'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTag from '@/components/ui/SectionTag'
import { ArrowRight, Cpu, Lightbulb, Shield, Clock } from 'lucide-react'

const reasons = [
  {
    icon: Cpu,
    title: 'Expertise in Technology',
    desc: 'Our team brings deep technical expertise across the full stack of modern technologies, ensuring robust and scalable solutions for your business.',
  },
  {
    icon: Lightbulb,
    title: 'Tailored Solutions & Ideas',
    desc: 'Every business is unique. We craft customized digital solutions that precisely align with your specific goals, challenges, and vision.',
  },
  {
    icon: Shield,
    title: 'Smart & Secure System You Can Trust',
    desc: 'Security is built into everything we deliver. Our systems are designed with enterprise-grade protection so your data is always safe.',
  },
  {
    icon: Clock,
    title: '24/7 Premium Client Support',
    desc: 'Round-the-clock dedicated support ensures your business never experiences downtime. We are always here when you need us most.',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <AnimatedSection direction="left">
            <SectionTag label="Why Choose Us" />
            <h2 className="section-heading text-4xl lg:text-5xl text-white mb-8">
              Providing brilliant ideas for your{' '}
              <span className="text-primary">business.</span>
            </h2>

            <div className="space-y-5">
              {reasons.map(({ icon: Icon, title, desc }, i) => (
                <AnimatedSection key={title} delay={i * 0.08} direction="up">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <Icon size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors duration-200">{title}</h3>
                      <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Right */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-[#111] border border-white/08 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format"
                    alt="Team working together"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="section-heading text-2xl text-white mb-3">
                    Let us change the way you think about technology.
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-6">
                    We transform how businesses leverage technology — making it a competitive advantage, not a challenge. Our holistic approach combines strategy, design, and engineering.
                  </p>
                  <a href="#contact" className="btn-primary gap-2 text-sm">
                    Discover More <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-primary/10 rounded-2xl z-[-1]" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-2xl z-[-1] blur-xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
