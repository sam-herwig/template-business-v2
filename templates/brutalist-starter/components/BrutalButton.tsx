'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface BrutalButtonProps {
  readonly children: React.ReactNode
  readonly color?: string
  readonly shadowColor?: string
  readonly onClick?: () => void
  readonly size?: 'normal' | 'large'
  readonly ariaLabel?: string
  readonly href?: string
  readonly type?: 'button' | 'submit' | 'reset'
  readonly disabled?: boolean
}

export function BrutalButton({ 
  children, 
  color = '#FFE600', 
  shadowColor = '#1a1a1a', 
  onClick, 
  size = 'normal',
  ariaLabel,
  href,
  type = 'button',
  disabled = false,
}: BrutalButtonProps): JSX.Element {
  const padding = size === 'large' ? 'px-10 py-5' : 'px-7 py-3.5'
  const fontSize = size === 'large' ? 'text-lg' : 'text-base'
  
  const getTextColor = (bg: string): string => {
    const darkBgs = ['#3B82F6', '#A855F7', '#1a1a1a', '#000000']
    return darkBgs.includes(bg) ? '#FFFEF5' : '#1a1a1a'
  }
  const textColor = getTextColor(color)
  
  const buttonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`${padding} ${fontSize} font-display font-bold cursor-pointer border-[3px] border-brutal-black dark:border-brutal-bg relative min-h-[44px] min-w-[44px] disabled:opacity-50 disabled:cursor-not-allowed`}
      style={{
        background: color,
        color: textColor,
        boxShadow: `6px 6px 0 ${shadowColor}`,
      }}
      whileHover={!disabled ? { 
        x: -3, 
        y: -3,
        boxShadow: `9px 9px 0 ${shadowColor}`,
      } : {}}
      whileTap={!disabled ? { 
        x: 3, 
        y: 3,
        boxShadow: `3px 3px 0 ${shadowColor}`,
      } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return buttonContent
}
