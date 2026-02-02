"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface InstructorProps {
  name: string;
  photo: string;
  title: string;
  company: string;
  shortBio: string;
  credentials: string[];
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    dribbble?: string;
  };
}

export default function InstructorCard({
  name,
  photo,
  title,
  company,
  shortBio,
  credentials,
  socialLinks,
}: InstructorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-elevated p-8 lg:p-12"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
        {/* Photo */}
        <div className="relative flex-shrink-0">
          <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden bg-gray-200 relative">
            <Image
              src={photo}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl -z-10 opacity-20" />
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
            {name}
          </h3>
          <p className="text-primary-600 font-medium mb-1">{title}</p>
          <p className="text-gray-500 text-sm mb-4">{company}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{shortBio}</p>

          {/* Credentials */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
            {credentials.slice(0, 4).map((credential, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
              >
                <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {credential}
              </span>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
            {socialLinks.dribbble && (
              <a
                href={socialLinks.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                aria-label="Dribbble"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.894 9.894 0 0112 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.59 44.59 0 013.537 5.381c-2.43.715-5.331 1.082-8.684 1.105a9.931 9.931 0 015.147-6.486zM2.087 12l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48A9.865 9.865 0 012.087 12zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027a39.137 39.137 0 012.043 7.46c-3.349 1.291-6.953.666-9.641-1.433zm11.586.43a41.098 41.098 0 00-1.92-6.897c1.876-.265 3.94-.196 6.199.196a9.923 9.923 0 01-4.279 6.701z" />
                </svg>
              </a>
            )}
            <Link href="/about" className="btn-secondary ml-2">
              Full Bio →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
