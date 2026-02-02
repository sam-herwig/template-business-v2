import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/lib/lenis'

// Using Space Grotesk as display font (similar to General Sans)
// For custom fonts, download from https://www.fontshare.com/fonts/general-sans
// and place woff2 files in public/fonts/
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
  metadataBase: new URL('https://example.com'),
  title: 'LaunchKit - Build Products Faster Than Ever',
  description: 'The all-in-one platform that helps teams ship better products. From idea to launch in days, not months. Trusted by 10,000+ teams worldwide.',
  keywords: ['SaaS', 'product development', 'team collaboration', 'startup tools', 'project management'],
  openGraph: {
    title: 'LaunchKit - Build Products Faster Than Ever',
    description: 'The all-in-one platform that helps teams ship better products. From idea to launch in days, not months.',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LaunchKit - Build Products Faster Than Ever',
    description: 'The all-in-one platform that helps teams ship better products. From idea to launch in days, not months.',
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
