'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTag from '@/components/ui/SectionTag'
import { TrendingUp, ShoppingCart, HeadphonesIcon, ArrowRight } from 'lucide-react'

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: content */}
          <AnimatedSection direction="left">
            <SectionTag label="Our Services" />
            <h2 className="section-heading text-4xl lg:text-5xl text-white mb-5">
              Let us do the work, so you can{' '}
              <span className="text-primary">focus on what matters.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              We take care of the technology, so you can concentrate on what truly drives your business forward.
            </p>

            {/* Service highlights */}
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4 p-5 bg-[#111] border border-white/06 rounded-xl hover:border-primary/20 transition-all duration-300 group cursor-default">
                <div className="icon-wrapper shrink-0">
                  <TrendingUp size={22} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">Boost Traffic</h3>
                  <p className="text-white/45 text-sm leading-relaxed">Drive more visitors to your website with proven strategies that boost traffic and increase visibility.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#111] border border-white/06 rounded-xl hover:border-primary/20 transition-all duration-300 group cursor-default">
                <div className="icon-wrapper shrink-0">
                  <ShoppingCart size={22} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">Increase Sales</h3>
                  <p className="text-white/45 text-sm leading-relaxed">Boost your revenue with targeted strategies designed to increase conversions and drive more sales.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/15 rounded-xl">
              <HeadphonesIcon size={20} className="text-primary shrink-0" />
              <p className="text-white/60 text-sm">
                Need more information &amp; Sales support?{' '}
                <a href="#contact" className="text-primary hover:underline font-medium">Please contact our support center.</a>
              </p>
            </div>
          </AnimatedSection>

          {/* Right: image with stats */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/08 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=650&h=500&fit=crop&auto=format"
                  alt="Web designer working"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 to-transparent" />
              </div>

              {/* Floating stats */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                <div className="flex-1 bg-[#111]/90 backdrop-blur border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-heading font-bold text-primary">97%</div>
                  <p className="text-white/50 text-xs mt-1">Customer satisfaction rating</p>
                </div>
                <div className="flex-1 bg-primary/90 backdrop-blur rounded-xl p-4 text-center">
                  <div className="text-3xl font-heading font-bold text-white">46%</div>
                  <p className="text-white/80 text-xs mt-1">Average ROI for clients</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
