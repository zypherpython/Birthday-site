import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FloatingChar } from './SanrioFloat'
import { Confetti } from './Confetti'

interface Props { onRestart: () => void }

const CHARS_POSITIONS = [
  { style: { bottom: '15%', left: '4%' }, size: 70, opacity: 0.7 },
  { style: { bottom: '20%', right: '4%' }, size: 66, opacity: 0.7 },
  { style: { top: '10%', left: '8%' }, size: 60, opacity: 0.65 },
  { style: { top: '12%', right: '6%' }, size: 58, opacity: 0.65 },
  { style: { bottom: '40%', left: '10%' }, size: 48, opacity: 0.55 },
]

export function Finale({ onRestart }: Props) {
  const [showHeart, setShowHeart] = useState(false)
  const [showSignoff, setShowSignoff] = useState(false)
  const [showChars, setShowChars] = useState(false)
  const [showEaster, setShowEaster] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowHeart(true), 500)
    const t2 = setTimeout(() => setShowSignoff(true), 5500)
    const t3 = setTimeout(() => setShowChars(true), 8500)
    const t4 = setTimeout(() => setShowConfetti(true), 3500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  // Easter egg: if she scrolls back up after sign-off, show whisper
  useEffect(() => {
    function onScroll() {
      if (showSignoff && window.scrollY < 50) {
        setShowEaster(true)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [showSignoff])

  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{ background: '#0d0014' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Confetti active={showConfetti} />

      {/* Main sign-off */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <motion.h1
          className="font-bold leading-tight"
          style={{
            fontFamily: 'Caveat, cursive',
            color: '#fdf4ff',
            fontSize: 'clamp(2.4rem, 8vw, 4.5rem)',
          }}
          animate={{ textShadow: ['0 0 20px rgba(192,132,252,0)', '0 0 40px rgba(192,132,252,0.4)', '0 0 20px rgba(192,132,252,0)'] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          happy birthday, shona.
        </motion.h1>

        {/* Heart appears 0.5s later */}
        <AnimatePresence>
          {showHeart && (
            <motion.div
              className="text-4xl mt-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              💗
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Bottom sign-off line */}
      <AnimatePresence>
        {showSignoff && (
          <motion.div
            className="absolute bottom-12 left-0 right-0 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'rgba(192,132,252,0.5)',
                fontSize: 12,
                fontStyle: 'italic',
              }}
            >
              made for jaanu · 11 september · with everything I have
            </p>
            <motion.p
              className="mt-3"
              style={{
                fontFamily: 'Caveat, cursive',
                color: 'rgba(192,132,252,0.7)',
                fontSize: 18,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              I hope you do shoanish stuff today.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sanrio characters drift in from edges */}
      <AnimatePresence>
        {showChars && CHARS_POSITIONS.map((pos, i) => (
          <motion.div
            key={i}
            style={{ position: 'absolute', ...pos.style, zIndex: 5 }}
            initial={{ opacity: 0, scale: 0.3, x: i % 2 === 0 ? -60 : 60 }}
            animate={{ opacity: pos.opacity, scale: 1, x: 0 }}
            transition={{ delay: i * 0.4, duration: 1.5, ease: 'easeOut' }}
          >
            <FloatingChar
              index={i}
              size={pos.size}
              opacity={1}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Easter egg whisper */}
      <AnimatePresence>
        {showEaster && (
          <motion.div
            className="fixed bottom-4 right-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'rgba(192,132,252,0.4)',
                fontSize: 11,
                fontStyle: 'italic',
              }}
            >
              still here. always was.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Replay button (subtle) */}
      <motion.button
        className="absolute bottom-4 left-4 px-4 py-2 rounded-full text-xs"
        style={{
          background: 'transparent',
          color: 'rgba(192,132,252,0.3)',
          border: '1px solid rgba(192,132,252,0.15)',
          fontFamily: 'DM Sans, sans-serif',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 12 }}
        whileHover={{ color: 'rgba(192,132,252,0.6)' }}
        whileTap={{ scale: 0.96 }}
        onClick={onRestart}
      >
        ↺
      </motion.button>
    </motion.div>
  )
}
