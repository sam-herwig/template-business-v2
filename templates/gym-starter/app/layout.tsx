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
  metadataBase: new URL('https://example.com'), // Update with your domain
  title: 'Iron Athletics | Denver Premier Fitness & Training',
  description: 'Denver\'s premier fitness community. 24/7 access, 50+ weekly classes, world-class trainers. Start your free 7-day trial today.',
  keywords: ['gym', 'fitness', 'Denver', 'HIIT', 'yoga', 'personal training', 'spin classes', 'boxing'],
  openGraph: {
    title: 'Iron Athletics | Denver Premier Fitness & Training',
    description: 'Transform your body at Denver\'s premier fitness community. 24/7 access, 50+ classes weekly, expert trainers.',
    type: 'website',
    images: ['/screenshots/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iron Athletics | Denver Premier Fitness',
    description: 'Transform your body at Denver\'s premier fitness community.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased bg-dark-950`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
