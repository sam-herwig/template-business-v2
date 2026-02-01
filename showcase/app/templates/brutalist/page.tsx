'use client'

import Link from 'next/link'

export default function BrutalistPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-lg px-6">
        <h1 className="text-6xl font-black mb-4 tracking-tighter">BRUTALIST</h1>
        <p className="text-zinc-400 mb-8">
          This template uses Three.js for 3D effects and requires additional setup for static export.
        </p>
        <p className="text-zinc-500 text-sm mb-8">
          Run locally with <code className="bg-zinc-900 px-2 py-1 rounded">npm run dev</code> in the templates/brutalist-starter folder for the full experience.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
        >
          ← Back to Showcase
        </Link>
      </div>
    </div>
  )
}
