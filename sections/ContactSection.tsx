'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTag from '@/components/ui/SectionTag'
import { Send, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '', subject: '', message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', company: '', phone: '', email: '', subject: '', message: '' })
  }

  const inputClass = `w-full bg-[#111] border border-white/08 rounded-lg px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-primary/50 focus:bg-[#141414] transition-all duration-200`

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left: info */}
          <AnimatedSection direction="left">
            <SectionTag label="Get in touch" />
            <h2 className="section-heading text-4xl lg:text-5xl text-white mb-5">
              Don't hesitate to contact us for{' '}
              <span className="text-primary">more information.</span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-10 text-sm">
              Whether you have a question about our services, want to start a project, or just need guidance on your digital transformation journey — we're here and ready to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Head Office</h4>
                  <p className="text-white/45 text-sm leading-relaxed">5650 Roberts Rd, Katy, TX 77494, Texas, USA.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Support</h4>
                  <a href="mailto:info@techlivion.com" className="text-white/45 text-sm hover:text-primary transition-colors">info@techlivion.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <a href="tel:+18326205054" className="text-white/45 text-sm hover:text-primary transition-colors">001 (832) 620-5054</a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="bg-[#111] border border-white/08 rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 size={56} className="text-primary mb-4" />
                  <h3 className="text-white font-heading text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-white/45 text-sm">Thank you for reaching out. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs font-medium mb-1.5 block">Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs font-medium mb-1.5 block">Company</label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs font-medium mb-1.5 block">Phone</label>
                      <input
                        type="tel"
                        placeholder="Phone number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs font-medium mb-1.5 block">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="Email address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Subject</label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center gap-2 py-4"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
