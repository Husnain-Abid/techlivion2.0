import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Techlivion — Streamlining Processes for Business Efficiency',
  description: 'Techlivion delivers cutting-edge IT solutions — from web & app development to digital marketing, DevOps, and BPO services. Your trusted technology partner.',
  keywords: 'IT solutions, web development, app development, digital marketing, SEO, DevOps, BPO, graphic design',
  openGraph: {
    title: 'Techlivion — IT Solutions & Digital Services',
    description: 'Empowering businesses with intelligent IT solutions for greater efficiency and performance.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Barlow+Condensed:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
