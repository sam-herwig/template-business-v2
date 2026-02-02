import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/lib/lenis'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  title: 'Nexus | The Platform Teams Trust to Scale',
  description: 'Join 10,000+ teams using Nexus to streamline workflows, boost productivity by 50%, and ship faster with 99.9% uptime. Start free today.',
  keywords: ['SaaS platform', 'team productivity', 'workflow automation', 'enterprise software', 'collaboration tools', 'business operations'],
  openGraph: {
    title: 'Nexus | The Platform Teams Trust to Scale',
    description: 'Streamline workflows, boost productivity by 50%, and ship faster with 99.9% uptime.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus | The Platform Teams Trust to Scale',
    description: 'Join 10,000+ teams shipping faster with Nexus.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} font-sans antialiased bg-minimal-bg dark:bg-minimal-dark-bg text-minimal-text dark:text-minimal-dark-text`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
