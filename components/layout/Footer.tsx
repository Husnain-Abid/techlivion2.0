import { Facebook, Youtube, Linkedin, Instagram, MapPin, Mail, Phone, Clock } from 'lucide-react'

const serviceLinks = [
  'Website Development', 'App Developments', 'Graphic Design',
  'UI/UX Designing', 'SEO', 'Digital Marketing',
  'BPO Services', 'Dev Ops', '3D Visualization',
]

const companyLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/OfficialTechlivion', label: 'Facebook' },
  { icon: Youtube, href: 'http://www.youtube.com/@Officialtechlivion', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com/company/techlivion', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/officialtechlivion', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white text-lg font-heading">
                T
              </div>
              <span className="text-white font-heading text-2xl font-bold tracking-wide">Techlivion</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Your trusted partner for comprehensive IT services, ensuring efficiency, security, and growth in the ever-evolving tech landscape.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-5 tracking-wide">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/50 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-5 tracking-wide">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white/50 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-5 tracking-wide">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">5650 Roberts Rd, Katy, TX 77494, Texas, USA.</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@techlivion.com" className="text-white/50 text-sm hover:text-primary transition-colors">info@techlivion.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+18326205054" className="text-white/50 text-sm hover:text-primary transition-colors">001 (832) 620-5054</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">Monday – Friday<br />07am – 09pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter bar */}
      <div className="border-t border-white/[0.06] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            Get free tips and resources right in your inbox, along with 10,000+ others.
          </p>
          <form className="flex gap-0 rounded-sm overflow-hidden border border-white/10">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white/5 text-white placeholder-white/30 text-sm px-4 py-2.5 w-64 outline-none focus:bg-white/8"
            />
            <button type="submit" className="bg-primary text-white text-sm font-semibold px-5 py-2.5 hover:bg-primary-dark transition-colors">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm">Copyright© 2026 Techlivion, All rights reserved. Powered by Techlivion</p>
          <div className="flex items-center gap-4 text-sm text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Term of use</a>
            <span>·</span>
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
