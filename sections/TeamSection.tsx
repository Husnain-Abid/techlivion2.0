'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTag from '@/components/ui/SectionTag'
import { Facebook, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

// const team = [
//   {
//     name: 'Umar Waqqas Saleem',
//     role: 'Managing Director',
//     img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=450&fit=crop&auto=format',
//     color: 'from-blue-900/20 to-transparent',
//   },
//   {
//     name: 'Shahzad Shah',
//     role: 'Content Manager',
//     img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=450&fit=crop&auto=format',
//     color: 'from-primary/20 to-transparent',
//   },
//   {
//     name: 'Rana Yahya',
//     role: 'Technical Director',
//     img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=450&fit=crop&auto=format',
//     color: 'from-green-900/20 to-transparent',
//   },
//   {
//     name: 'Imran Shabbir',
//     role: 'HR Manager',
//     img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=450&fit=crop&auto=format',
//     color: 'from-purple-900/20 to-transparent',
//   },

//   ]


const team = [
  {
    name: 'Umar Waqqas Saleem',
    role: 'Managing Director',
    img: '/image/1.png',
    color: 'from-blue-900/20 to-transparent',
  },
  {
    name: 'Shahzad Shah',
    role: 'Content Manager',
    img: '/image/2.png',
    color: 'from-primary/20 to-transparent',
  },
  {
    name: 'Rana Yahya',
    role: 'Technical Director',
    img: '/image/3.png',
    color: 'from-green-900/20 to-transparent',
  },
  {
    name: 'Imran Shabbir',
    role: 'HR Manager',
    img: '/image/4.png',
    color: 'from-purple-900/20 to-transparent',
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <SectionTag label="Meet our team" className="justify-center" />
          <h2 className="section-heading text-4xl lg:text-5xl text-white">
            We talk a lot about hope,{' '}
            <span className="text-primary">helping and teamwork.</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, img, color }, i) => (
            <AnimatedSection key={name} delay={i * 0.08} direction="up">
              <motion.div
                className="group relative bg-[#111] border border-white/06 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-400 card-hover"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  {/* <Image
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  /> */}

<Image
  src={img}
  alt={name}
  fill
  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
/>

                  <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />

                  {/* Social icons — appear on hover */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    {[Facebook, Linkedin, Mail].map((Icon, j) => (
                      <motion.a
                        key={j}
                        href="#"
                        className="w-8 h-8 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-200"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.05 }}
                      >
                        <Icon size={14} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-white font-heading font-bold text-lg group-hover:text-primary transition-colors duration-300">
                    {name}
                  </h3>
                  <p className="text-primary/80 text-sm font-medium mt-0.5">{role}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
