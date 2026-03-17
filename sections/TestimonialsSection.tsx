'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTag from '@/components/ui/SectionTag'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    text: "Techlivion's web development team exceeded our expectations. The website they crafted not only looks stunning but also functions seamlessly, providing an excellent user experience that has significantly boosted our conversions.",
    name: 'Alex Peterson',
    title: 'Digital Innovations Agency',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format',
    rating: 5,
  },
  {
    text: "The cybersecurity measures implemented by Techlivion, under the guidance of their skilled professionals, have provided our organization with robust protection. We now feel more secure and confident in our digital operations.",
    name: 'Sarah Miller',
    title: 'IT Manager, Global Enterprises Ltd.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
    rating: 5,
  },
  {
    text: "Implementing ERP solutions from Techlivion, overseen by their expert consultants, has been a game-changer for our financial processes. The integration has streamlined operations and improved overall accuracy dramatically.",
    name: 'Elena Kowalski',
    title: 'CFO, Finance Dynamics Ltd.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&auto=format',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <SectionTag label="Testimonial" className="justify-center" />
          <h2 className="section-heading text-4xl lg:text-5xl text-white">
            Client Feedback &amp; <span className="text-primary">Reviews</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation buttons */}
          <div className="absolute -left-4 lg:-left-14 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={prev}
              className="w-11 h-11 bg-[#111] border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute -right-4 lg:-right-14 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={next}
              className="w-11 h-11 bg-[#111] border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#111] border border-white/08 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden"
            >
              {/* Background quote */}
              <div className="absolute top-6 right-8 opacity-5">
                <Quote size={100} className="text-primary" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-primary fill-primary" />
                ))}
              </div>

              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto italic">
                "{testimonials[current].text}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="text-white font-heading font-bold text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="text-primary/80 text-sm">{testimonials[current].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
