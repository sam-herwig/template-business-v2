import type { Metadata } from 'next'
import { Fraunces, Outfit } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/lib/lenis'

const fraunces = Fraunces({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sarahmitchell.co'),
  title: 'Sarah Mitchell | Business Coach for Ambitious Women',
  description: 'Transform your expertise into a thriving business. 1:1 coaching, group programs, and VIP intensives to help you build the business and life you deserve.',
  keywords: ['business coach', 'women entrepreneur', 'coaching program', 'business strategy', 'mindset coach'],
  authors: [{ name: 'Sarah Mitchell' }],
  openGraph: {
    title: 'Sarah Mitchell | Business Coach for Ambitious Women',
    description: 'Transform your expertise into a thriving business. 1:1 coaching, group programs, and VIP intensives for ambitious women.',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarah Mitchell | Business Coach',
    description: 'Helping ambitious women build businesses they love.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fraunces.variable} ${outfit.variable} font-body antialiased`}>
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
