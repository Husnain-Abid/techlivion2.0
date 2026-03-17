'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

const brands = [
  'DigitalPrime', 'CourseOn', 'Chattera', 'BuilderHaus',
  'TechFlow', 'ByteSkill', 'BlossomLife', 'BuzzBiz',
  'NexaHub', 'CloudSync',
]

export default function TrustedSection() {
  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-white/06">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <h3 className="text-white/40 text-sm font-semibold tracking-[0.2em] uppercase">
            Trusted by 25,000+ world-class brands and organizations of all sizes
          </h3>
        </AnimatedSection>

        {/* Marquee */}
        <div className="marquee-container">
          <div className="marquee-track">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="inline-flex items-center justify-center mx-8 min-w-[140px]"
              >
                <div className="bg-[#111] border border-white/08 rounded-lg px-5 py-3 hover:border-primary/20 hover:bg-[#151515] transition-all duration-300 group cursor-default">
                  <span className="text-white/35 group-hover:text-white/60 font-heading font-semibold text-sm tracking-wide transition-colors duration-300 whitespace-nowrap">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
