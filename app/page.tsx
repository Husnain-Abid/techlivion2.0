'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/sections/HeroSection'
import AboutSection from '@/sections/AboutSection'
import ValueSection from '@/sections/ValueSection'
import ServicesSection from '@/sections/ServicesSection'
import OfferingsSection from '@/sections/OfferingsSection'
import WhyChooseSection from '@/sections/WhyChooseSection'
import SkillsSection from '@/sections/SkillsSection'
import PortfolioSection from '@/sections/PortfolioSection'
import TeamSection from '@/sections/TeamSection'
import TestimonialsSection from '@/sections/TestimonialsSection'
import TrustedSection from '@/sections/TrustedSection'
import CtaSection from '@/sections/CtaSection'
import ContactSection from '@/sections/ContactSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ValueSection />
      <ServicesSection />
      <OfferingsSection />
      <WhyChooseSection />
      <SkillsSection />
      <PortfolioSection />
      <TeamSection />
      <TestimonialsSection />
      <TrustedSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
