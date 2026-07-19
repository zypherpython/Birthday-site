import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SanrioLayer } from './SanrioFloat'

interface Props { onComplete: () => void }

const LINES = [
  'happy birthday, big me.',
  'you made it.',
  'live well.',
  'mwaaaaaah.',
]

export function Act4BKidPicture({ onComplete }: Props) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [showHearts, setShowHearts] = useState(false)

  useEffect(() => {
    // After 3 seconds, start revealing lines one by one
    const startTimer = setTimeout(() => {
      LINES.forEach((_, i) => {
        setTimeout(() => {
          setVisibleLines(i + 1)
        }, i * 1500)
      })
    }, 3000)

    // After all lines + 3s, show hearts
    const heartsTimer = setTimeout(() => {
      setShowHearts(true)
    }, 3000 + LINES.length * 1500 + 3000)

    // After hearts, allow continue
    const continueTimer = setTimeout(() => {
      onComplete()
    }, 3000 + LINES.length * 1500 + 3000 + 6000)

    return () => {
      clearTimeout(startTimer)
      clearTimeout(heartsTimer)
      clearTimeout(continueTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-12"
      style={{ background: '#1a0a2e' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SanrioLayer count={4} dark />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Two photos side by side */}
        <div className="grid grid-cols-2 gap-4 mb-8 relative">
          {/* Childhood photo */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          >
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                aspectRatio: '3/4',
                background: 'linear-gradient(135deg, #2a0f3a, #1a0a2e)',
                boxShadow: '0 0 40px rgba(192,132,252,0.15)',
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl mb-2">👶</span>
                <p className="text-xs text-center px-4" style={{ color: 'rgba(253,244,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
                  add childhood photo
                </p>
              </div>
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          {/* Recent photo */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
          >
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                aspectRatio: '3/4',
                background: 'linear-gradient(135deg, #2d0a1a, #1a0a2e)',
                boxShadow: '0 0 40px rgba(159,18,57,0.15)',
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl mb-2">🌸</span>
                <p className="text-xs text-center px-4" style={{ color: 'rgba(253,244,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
                  add recent photo
                </p>
              </div>
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1.08, 1, 1.08] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          {/* Pompompurin between the two photos */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl"
            animate={{ rotate: [-8, 8, -8] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ pointerEvents: 'none' }}
          >
            🐾
          </motion.div>
        </div>

        {/* Letter-by-letter text */}
        <div className="text-center min-h-[180px]">
          {LINES.map((line, i) => (
            visibleLines > i && (
              <motion.p
                key={i}
                className="block mb-2"
                style={{
                  fontFamily: 'Caveat, cursive',
                  color: '#fdf4ff',
                  fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {line}
              </motion.p>
            )
          ))}
        </div>

        {/* Hearts drifting up */}
        {showHearts && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${15 + i * 12}%`,
                  bottom: 0,
                  color: i % 2 === 0 ? '#9f1239' : '#c084fc',
                  fontSize: 24,
                }}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: '-100vh', opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'easeOut',
                }}
              >
                ♡
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
