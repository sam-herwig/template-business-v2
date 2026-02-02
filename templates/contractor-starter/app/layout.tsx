import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/lib/lenis'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BuildRight Construction | Denver Home Remodeling & Repair',
  description: 'Licensed & insured contractors with 25+ years serving Denver. Kitchen & bath remodels, basement finishing, repairs. 1,500+ projects completed. Free estimates.',
  keywords: 'contractor Denver, home remodeling, kitchen remodel, bathroom renovation, basement finishing, home repair, licensed contractor Colorado',
  openGraph: {
    title: 'BuildRight Construction | Denver Home Remodeling & Repair',
    description: 'Licensed & insured contractors with 25+ years serving Denver. Kitchen & bath remodels, basement finishing, repairs. Free estimates.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildRight Construction | Denver Contractors',
    description: 'Licensed & insured contractors with 25+ years serving Denver. Free estimates.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
