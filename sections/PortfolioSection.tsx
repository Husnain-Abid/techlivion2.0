'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTag from '@/components/ui/SectionTag'
import { ArrowRight, ExternalLink } from 'lucide-react'

const categories = ['All', 'Web Dev', 'Mobile', 'Design', 'Security', 'Cloud']

const projects = [
  {
    title: 'Custom ERP System for Manufacturing Company',
    desc: 'Tailored ERP system designed specifically for manufacturing companies to streamline operations and enhance productivity.',
    category: 'Web Dev',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format',
    tag: 'Enterprise',
  },
  {
    title: 'Mobile App for E-Commerce Retailer',
    desc: 'A custom mobile app designed for e-commerce retailers to enhance user experience and drive online sales.',
    category: 'Mobile',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format',
    tag: 'Mobile',
  },
  {
    title: 'Cybersecurity Enhancement for Financial Institution',
    desc: 'Advanced cybersecurity solutions tailored for financial institutions to safeguard sensitive data and ensure regulatory compliance.',
    category: 'Security',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&auto=format',
    tag: 'Security',
  },
  {
    title: 'Data Analytics Dashboard for Healthcare Provider',
    desc: 'A comprehensive data analytics dashboard designed for healthcare providers to visualize, monitor, and optimize patient care.',
    category: 'Web Dev',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
    tag: 'Healthcare',
  },
  {
    title: 'Cloud Migration for Global Corporation',
    desc: 'Seamless cloud migration solutions for global corporations to enhance scalability, flexibility, and performance.',
    category: 'Cloud',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format',
    tag: 'Cloud',
  },
  {
    title: 'Technology Strategy Consultation for Startup',
    desc: 'Expert technology strategy consultation tailored for startups to align digital solutions with business goals.',
    category: 'Design',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format',
    tag: 'Strategy',
  },
]

export default function PortfolioSection() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <SectionTag label="Our Portfolio" className="justify-center" />
          <h2 className="section-heading text-4xl lg:text-5xl text-white mb-4">
            Innovation is the core of{' '}
            <span className="text-primary">everything we do.</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-sm leading-relaxed">
            Explore our diverse portfolio of successful projects spanning industries from finance to healthcare, retail to manufacturing.
          </p>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-primary text-white shadow-[0_4px_20px_rgba(232,23,30,0.35)]'
                  : 'bg-[#111] text-white/50 border border-white/08 hover:border-primary/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-[#111] border border-white/06 rounded-xl overflow-hidden hover:border-primary/25 transition-all duration-400 card-hover"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />
                  {/* Tag */}
                  <span className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink size={18} className="text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                  >
                    Learn more <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
