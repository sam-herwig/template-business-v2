'use client'

import Image from 'next/image'
import Link from 'next/link'

interface AuthorBioProps {
  name: string
  avatar: string
  bio: string
  links?: { label: string; href: string }[]
}

export function AuthorBio({ name, avatar, bio, links }: AuthorBioProps) {
  return (
    <div className="bg-cream-100 rounded-2xl p-6 md:p-8 border border-cream-300">
      <div className="flex flex-col sm:flex-row gap-6">
        <Image
          src={avatar}
          alt={name}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover ring-4 ring-cream-200 flex-shrink-0"
        />
        <div>
          <p className="text-sm text-primary-800/60 mb-1">About the Author</p>
          <h3 className="font-display text-xl text-primary-900 mb-2">{name}</h3>
          <p className="text-primary-800/70 leading-relaxed mb-4">{bio}</p>
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthorBio
