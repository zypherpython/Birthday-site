import { motion } from 'framer-motion'

type CharProps = { size?: number; opacity?: number }

function MyMelody({ size = 56 }: CharProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      {/* Hood */}
      <ellipse cx="30" cy="26" rx="22" ry="22" fill="#f9a8d4" />
      {/* Left ear */}
      <ellipse cx="12" cy="16" rx="9" ry="14" fill="#ec4899" transform="rotate(-15 12 16)" />
      <ellipse cx="12" cy="16" rx="5" ry="9" fill="#fce7f3" transform="rotate(-15 12 16)" />
      {/* Right ear */}
      <ellipse cx="48" cy="16" rx="9" ry="14" fill="#ec4899" transform="rotate(15 48 16)" />
      <ellipse cx="48" cy="16" rx="5" ry="9" fill="#fce7f3" transform="rotate(15 48 16)" />
      {/* Face */}
      <ellipse cx="30" cy="34" rx="18" ry="16" fill="#fce7f3" />
      {/* Eyes */}
      <ellipse cx="24" cy="32" rx="3" ry="3.5" fill="#1c0a2e" />
      <ellipse cx="36" cy="32" rx="3" ry="3.5" fill="#1c0a2e" />
      <circle cx="25" cy="31" r="1" fill="white" />
      <circle cx="37" cy="31" r="1" fill="white" />
      {/* Cheeks */}
      <ellipse cx="21" cy="37" rx="4" ry="2.5" fill="#fda4af" opacity="0.7" />
      <ellipse cx="39" cy="37" rx="4" ry="2.5" fill="#fda4af" opacity="0.7" />
      {/* Bow */}
      <path d="M26 54 Q30 50 34 54 Q30 58 26 54Z" fill="#ec4899" />
      <path d="M22 52 Q26 54 26 54 Q24 49 22 52Z" fill="#ec4899" />
      <path d="M38 52 Q34 54 34 54 Q36 49 38 52Z" fill="#ec4899" />
      <circle cx="30" cy="54" r="2" fill="#f9a8d4" />
    </svg>
  )
}

function Kuromi({ size = 56 }: CharProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      {/* Hood */}
      <ellipse cx="30" cy="22" rx="22" ry="20" fill="#1e1b4b" />
      {/* Ears / hood points */}
      <path d="M18 14 Q16 4 22 8 Q20 14 18 14Z" fill="#1e1b4b" />
      <path d="M42 14 Q44 4 38 8 Q40 14 42 14Z" fill="#1e1b4b" />
      <ellipse cx="19" cy="11" rx="3" ry="4" fill="#a78bfa" />
      <ellipse cx="41" cy="11" rx="3" ry="4" fill="#a78bfa" />
      {/* Skull on hood */}
      <ellipse cx="30" cy="16" rx="6" ry="5" fill="white" />
      <circle cx="27.5" cy="15.5" r="1.5" fill="#1e1b4b" />
      <circle cx="32.5" cy="15.5" r="1.5" fill="#1e1b4b" />
      <path d="M27 19 L33 19" stroke="#1e1b4b" strokeWidth="0.8" />
      <path d="M29 19 L29 21" stroke="#1e1b4b" strokeWidth="0.8" />
      <path d="M31 19 L31 21" stroke="#1e1b4b" strokeWidth="0.8" />
      {/* Face */}
      <ellipse cx="30" cy="36" rx="18" ry="16" fill="white" />
      {/* Eyes */}
      <ellipse cx="24" cy="33" rx="3.5" ry="3" fill="#7c3aed" />
      <ellipse cx="36" cy="33" rx="3.5" ry="3" fill="#7c3aed" />
      <circle cx="25" cy="32" r="1" fill="white" />
      <circle cx="37" cy="32" r="1" fill="white" />
      {/* Cheeks */}
      <ellipse cx="21" cy="38" rx="3.5" ry="2" fill="#fda4af" opacity="0.6" />
      <ellipse cx="39" cy="38" rx="3.5" ry="2" fill="#fda4af" opacity="0.6" />
      {/* Smirk */}
      <path d="M28 41 Q32 43 35 40" stroke="#1e1b4b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function Cinnamoroll({ size = 56 }: CharProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      {/* Big floppy ears */}
      <ellipse cx="10" cy="28" rx="9" ry="16" fill="#bfdbfe" transform="rotate(10 10 28)" />
      <ellipse cx="50" cy="28" rx="9" ry="16" fill="#bfdbfe" transform="rotate(-10 50 28)" />
      <ellipse cx="10" cy="28" rx="5" ry="10" fill="#eff6ff" transform="rotate(10 10 28)" />
      <ellipse cx="50" cy="28" rx="5" ry="10" fill="#eff6ff" transform="rotate(-10 50 28)" />
      {/* Head */}
      <circle cx="30" cy="33" r="22" fill="white" />
      {/* Eyes */}
      <ellipse cx="23" cy="31" rx="4" ry="5" fill="#1e3a5f" />
      <ellipse cx="37" cy="31" rx="4" ry="5" fill="#1e3a5f" />
      <circle cx="24" cy="29.5" r="1.5" fill="white" />
      <circle cx="38" cy="29.5" r="1.5" fill="white" />
      {/* Nose */}
      <ellipse cx="30" cy="37" rx="2" ry="1.2" fill="#fda4af" />
      {/* Mouth */}
      <path d="M28 39 Q30 41 32 39" stroke="#fda4af" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="20" cy="38" rx="5" ry="3" fill="#fca5a5" opacity="0.4" />
      <ellipse cx="40" cy="38" rx="5" ry="3" fill="#fca5a5" opacity="0.4" />
      {/* Tail on top */}
      <path d="M28 11 Q30 6 32 11" stroke="#93c5fd" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function HelloKitty({ size = 56 }: CharProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      {/* Ears */}
      <path d="M16 18 L14 4 L26 12Z" fill="white" stroke="#e5e7eb" strokeWidth="0.5" />
      <path d="M44 18 L46 4 L34 12Z" fill="white" stroke="#e5e7eb" strokeWidth="0.5" />
      {/* Head */}
      <ellipse cx="30" cy="32" rx="22" ry="22" fill="white" stroke="#e5e7eb" strokeWidth="0.5" />
      {/* Red bow */}
      <path d="M37 14 Q40 10 44 12 Q42 16 38 16Z" fill="#ef4444" />
      <path d="M44 12 Q48 10 50 14 Q47 17 44 16Z" fill="#ef4444" />
      <circle cx="44" cy="14" r="2" fill="#dc2626" />
      {/* Eyes */}
      <circle cx="24" cy="30" r="2.5" fill="#1c1917" />
      <circle cx="36" cy="30" r="2.5" fill="#1c1917" />
      <circle cx="24.8" cy="29" r="0.9" fill="white" />
      <circle cx="36.8" cy="29" r="0.9" fill="white" />
      {/* Nose */}
      <ellipse cx="30" cy="35" rx="2.5" ry="1.5" fill="#fbbf24" />
      {/* Whiskers */}
      <line x1="10" y1="34" x2="22" y2="34" stroke="#d1d5db" strokeWidth="0.8" />
      <line x1="10" y1="37" x2="22" y2="36" stroke="#d1d5db" strokeWidth="0.8" />
      <line x1="38" y1="34" x2="50" y2="34" stroke="#d1d5db" strokeWidth="0.8" />
      <line x1="38" y1="36" x2="50" y2="37" stroke="#d1d5db" strokeWidth="0.8" />
    </svg>
  )
}

function Pompompurin({ size = 56 }: CharProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      {/* Body / head */}
      <circle cx="30" cy="34" r="20" fill="#fde68a" />
      {/* Brown beret */}
      <ellipse cx="30" cy="17" rx="16" ry="6" fill="#92400e" />
      <ellipse cx="30" cy="14" rx="12" ry="7" fill="#b45309" />
      <circle cx="30" cy="11" r="3" fill="#92400e" />
      {/* Small ears */}
      <ellipse cx="14" cy="28" rx="5" ry="4" fill="#fcd34d" />
      <ellipse cx="46" cy="28" rx="5" ry="4" fill="#fcd34d" />
      {/* Eyes */}
      <ellipse cx="24" cy="33" rx="4" ry="4.5" fill="#431407" />
      <ellipse cx="36" cy="33" rx="4" ry="4.5" fill="#431407" />
      <circle cx="25.2" cy="31.5" r="1.5" fill="white" />
      <circle cx="37.2" cy="31.5" r="1.5" fill="white" />
      {/* Cheek freckles */}
      <circle cx="19" cy="38" r="1.2" fill="#d97706" />
      <circle cx="22" cy="40" r="1.2" fill="#d97706" />
      <circle cx="41" cy="38" r="1.2" fill="#d97706" />
      <circle cx="38" cy="40" r="1.2" fill="#d97706" />
      {/* Mouth */}
      <path d="M27 40 Q30 43 33 40" stroke="#92400e" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <ellipse cx="30" cy="37" rx="1.5" ry="1" fill="#92400e" />
    </svg>
  )
}

const CHARS = [MyMelody, Kuromi, Cinnamoroll, HelloKitty, Pompompurin]

interface FloatingCharProps {
  index: number
  style?: React.CSSProperties
  size?: number
  opacity?: number
}

export function FloatingChar({ index, style, size = 52, opacity = 0.18 }: FloatingCharProps) {
  const Char = CHARS[index % CHARS.length]
  const delay = index * 0.7
  const duration = 4 + (index % 3) * 1.2

  return (
    <motion.div
      style={{ position: 'absolute', opacity, pointerEvents: 'none', ...style }}
      animate={{ y: [0, -14, 0], rotate: [-4, 4, -4] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <Char size={size} />
    </motion.div>
  )
}

export function SanrioLayer({ count = 5, dark = true }: { count?: number; dark?: boolean }) {
  const positions: React.CSSProperties[] = [
    { top: '8%', left: '3%' },
    { top: '15%', right: '4%' },
    { top: '45%', left: '1%' },
    { top: '60%', right: '2%' },
    { top: '80%', left: '5%' },
    { top: '35%', right: '6%' },
    { top: '70%', right: '8%' },
  ]

  return (
    <>
      {Array.from({ length: Math.min(count, positions.length) }).map((_, i) => (
        <FloatingChar
          key={i}
          index={i}
          style={positions[i]}
          opacity={dark ? 0.14 : 0.22}
          size={48}
        />
      ))}
    </>
  )
}
