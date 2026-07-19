import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SanrioLayer } from './SanrioFloat'

interface Props { onComplete: () => void }

interface MoodCard {
  emoji: string
  label: string
  color: string
  glow: string
}

const MOODS: MoodCard[] = [
  { emoji: '🌸', label: 'soft and a little dreamy', color: 'rgba(192,132,252,0.3)', glow: '#c084fc' },
  { emoji: '🖤', label: 'kinda moody but make it cute', color: 'rgba(30,27,75,0.5)', glow: '#a78bfa' },
  { emoji: '☁️', label: 'floating somewhere far away', color: 'rgba(159,18,57,0.3)', glow: '#fda4af' },
  { emoji: '✨', label: 'actually really good, actually', color: 'rgba(107,33,168,0.3)', glow: '#c084fc' },
]

export function Act3Games({ onComplete }: Props) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-12"
      style={{ background: 'linear-gradient(180deg, #2d0a1a 0%, #1a0a2e 50%, #2d0a1a 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SanrioLayer count={5} dark />

      <div className="relative z-10 w-full max-w-lg">
        <motion.div
          className="text-center mb-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{ fontFamily: 'Caveat, cursive', color: '#fdf4ff' }}
          >
            What kind of day are you today?
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: 'EB Garamond, serif', color: '#c084fc', fontStyle: 'italic' }}
          >
            pick one ✦
          </p>
        </motion.div>

        {/* Mood cards */}
        <div className="grid grid-cols-1 gap-3 mb-6">
          {MOODS.map((m, i) => (
            <motion.button
              key={i}
              className="w-full text-left rounded-2xl px-5 py-4 transition-all"
              style={{
                background: selected === i ? m.color : 'rgba(255,255,255,0.04)',
                border: `1px solid ${selected === i ? m.glow : 'rgba(159,18,57,0.4)'}`,
                boxShadow: selected === i ? `0 0 24px ${m.glow}40` : 'none',
              }}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.01, background: m.color }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(i)}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{m.emoji}</span>
                <span
                  className="font-semibold"
                  style={{ fontFamily: 'Caveat, cursive', color: '#fdf4ff', fontSize: 22 }}
                >
                  {m.label}
                </span>
                {selected === i && (
                  <motion.span
                    className="ml-auto text-xs"
                    style={{ color: m.glow }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✓
                  </motion.span>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Response */}
        <AnimatePresence mode="wait">
          {selected !== null && (
            <motion.div
              key={selected}
              className="rounded-2xl p-5 mb-6 text-center"
              style={{
                background: MOODS[selected].color,
                border: `1px solid ${MOODS[selected].glow}50`,
                boxShadow: `0 0 30px ${MOODS[selected].glow}30`,
              }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <p
                className="leading-relaxed mb-2"
                style={{ fontFamily: 'EB Garamond, serif', color: '#fdf4ff', fontSize: 17, fontStyle: 'italic' }}
              >
                whatever kind of day it is — you're allowed to have it.
              </p>
              <p
                style={{ fontFamily: 'Caveat, cursive', color: '#c084fc', fontSize: 24 }}
              >
                Finish early!! your guy is waiting 🎀
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                className="px-8 py-3 rounded-full font-semibold text-sm"
                style={{
                  background: 'linear-gradient(135deg, #6b21a8, #9f1239)',
                  color: '#fdf4ff',
                  border: '1px solid rgba(192,132,252,0.4)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onComplete}
              >
                keep going ↓
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
