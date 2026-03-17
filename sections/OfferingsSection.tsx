'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTag from '@/components/ui/SectionTag'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Smartphone, Palette, Search, Megaphone, Users, GitBranch, Headphones, Box } from 'lucide-react'

const offerings = [
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Professional website development tailored to deliver seamless user experiences and drive business growth.',
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=250&fit=crop',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Developments',
    desc: 'Custom mobile app development that brings your ideas to life with intuitive design and powerful performance.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Creative graphic design solutions that visually communicate your brand and captivate your audience.',
    img: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=250&fit=crop',
  },
  {
    icon: Search,
    title: 'SEO Services',
    desc: 'Boost your online visibility with our expert SEO services designed to improve rankings and drive organic traffic.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Result-driven digital marketing services that increase brand visibility, engage your audience, and drive business growth.',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
  },
  {
    icon: Users,
    title: 'Human Resource Management',
    desc: 'Comprehensive HRM solutions that streamline employee management, from recruitment to payroll.',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop',
  },
  {
    icon: GitBranch,
    title: 'Dev Ops',
    desc: 'DevOps services that bridge development and operations to accelerate software delivery and improve system reliability.',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
  },
  {
    icon: Headphones,
    title: 'BPO Services',
    desc: 'Reliable BPO services that help businesses reduce costs, improve efficiency, and focus on core operations.',
    img: 'https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=400&h=250&fit=crop',
  },
  {
    icon: Box,
    title: '3D Visualization',
    desc: 'High-quality 3D visualization services that bring your concepts to life with stunning detail and realism.',
    img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&h=250&fit=crop',
  },
]

export default function OfferingsSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <SectionTag label="What we offer" className="justify-center" />
          <h2 className="section-heading text-4xl lg:text-5xl text-white">
            Delivering IT solutions that enable you to{' '}
            <span className="text-primary">work smarter.</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map(({ icon: Icon, title, desc, img }, i) => (
            <AnimatedSection key={title} delay={i * 0.05} direction="up">
              <motion.div
                className="group bg-[#111] border border-white/06 rounded-xl overflow-hidden hover:border-primary/25 transition-all duration-400 card-hover"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <div className="icon-wrapper">
                      <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-4">{desc}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                  >
                    Learn more <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
