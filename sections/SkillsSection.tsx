'use client'

import { useInView } from 'react-intersection-observer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTag from '@/components/ui/SectionTag'

const skills = [
  { label: 'Programming', percent: 92 },
  { label: 'Graphic Design', percent: 87 },
  { label: 'Online Marketing', percent: 95 },
]

function ProgressBar({ label, percent }: { label: string; percent: number }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/70 text-sm font-medium">{label}</span>
        <span className="text-primary font-heading font-bold text-sm">{percent}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: inView ? `${percent}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text + skills */}
          <AnimatedSection direction="left">
            <SectionTag label="Our Expertise" />
            <h2 className="section-heading text-4xl lg:text-5xl text-white mb-5">
              Experience the magic of{' '}
              <span className="text-primary">Techlivion.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Experience the magic of Techlivion, where innovation meets purpose and technology drives transformation. We specialize in crafting smart, scalable solutions that bring your ideas to life — from web and mobile development to digital marketing and beyond.
            </p>
            <p className="text-white/35 text-sm leading-relaxed mb-10">
              With a passion for excellence and a focus on results, we turn every project into a seamless, impactful experience that sets your brand apart from the competition.
            </p>

            <div>
              {skills.map((s) => (
                <ProgressBar key={s.label} {...s} />
              ))}
            </div>
          </AnimatedSection>

          {/* Right: image + innovation text */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/08 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=380&fit=crop&auto=format"
                  alt="Developer working"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent" />
              </div>

              <div className="bg-[#111] border border-white/06 rounded-xl p-6 hover:border-primary/20 transition-all duration-300">
                <h3 className="section-heading text-2xl text-white mb-3">
                  Innovation is the core of everything we do.
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  Innovation is at the heart of everything we do at Techlivion. It drives our approach, shapes our solutions, and fuels our commitment to delivering forward-thinking digital experiences. Through creativity and cutting-edge technology, we turn challenges into opportunities.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
