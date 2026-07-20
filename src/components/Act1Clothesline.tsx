import { useRef, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SanrioLayer } from './SanrioFloat'

interface Props { onComplete: () => void }

const WORDS = ['I', 'love', 'you', 'so', 'much', 'darling']

interface CardState { [key: number]: boolean }

const ROTATIONS = Array.from({ length: 6 }, () => (Math.random() - 0.5) * 6)

export function Act1Clothesline({ onComplete }: Props) {
  const [flipped, setFlipped] = useState<CardState>({})
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  function handleTap(i: number) {
    if (flipped[i]) {
      setLightboxIndex(i)
    } else {
      setFlipped(prev => ({ ...prev, [i]: true }))
    }
  }

  const allFlipped = WORDS.every((_, i) => flipped[i])

  return (
    <motion.div
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #2a0f3a 0%, #1a0a2e 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SanrioLayer count={4} dark />

      {/* Entry narration */}
      <div className="relative z-10 text-center pt-12 pb-4 px-4">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: 'Caveat, cursive', color: '#fdf4ff' }}
        >
          before I say anything —
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-2 text-xl"
          style={{ fontFamily: 'Caveat, cursive', color: '#c084fc' }}
        >
          look at all of these.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4 text-sm"
          style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(192,132,252,0.7)' }}
        >
          tap each polaroid to flip it ✦
        </motion.p>
      </div>

      {/* Clothesline rope */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="relative overflow-x-auto" ref={scrollRef}>
          {/* Rope */}
          <div
            className="absolute top-12 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(159,18,57,0.6), transparent)', boxShadow: '0 0 8px rgba(159,18,57,0.3)' }}
          />

          <div className="flex gap-6 px-8 pb-8 pt-6 min-w-max mx-auto" style={{ justifyContent: 'center' }}>
            {WORDS.map((word, i) => (
              <motion.div
                key={i}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.12, type: 'spring', stiffness: 120 }}
                className="flex flex-col items-center"
              >
                {/* Clothespin */}
                <div
                  className="w-3 h-6 rounded-sm mb-1 flex-shrink-0"
                  style={{ background: '#9f1239', boxShadow: '0 0 6px rgba(159,18,57,0.5)' }}
                />

                {/* Polaroid card - flip */}
                <div
                  className="cursor-pointer select-none"
                  style={{ perspective: 900, width: 140, height: 170, transform: `rotate(${ROTATIONS[i]}deg)` }}
                  onClick={() => handleTap(i)}
                >
                  <motion.div
                    style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d', position: 'relative' }}
                    animate={{ rotateY: flipped[i] ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  >
                    {/* Front - photo */}
                    <div
                      className="absolute inset-0 rounded-lg p-2 flex flex-col"
                      style={{
                        backfaceVisibility: 'hidden',
                        background: 'white',
                        transform: 'rotateY(0deg)',
                        boxShadow: `4px 4px 16px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)`,
                        border: '2px solid #1a0a2e',
                      }}
                    >
                      <div
                        className="flex-1 rounded flex items-center justify-center overflow-hidden"
                        style={{
                          background: '#fdf4ff',
                        }}
                      >
                        <img
                          src={`/Birthday-site/photos/photo${i + 1}.jpeg`}
                          alt={`memory ${i + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Back - the word */}
                    <div
                      className="absolute inset-0 rounded-lg p-3 flex items-center justify-center"
                      style={{
                        backfaceVisibility: 'hidden',
                        background: '#1a0a2e',
                        transform: 'rotateY(180deg)',
                        border: '2px solid #6b21a8',
                        boxShadow: '4px 4px 16px rgba(0,0,0,0.5), 0 0 20px rgba(192,132,252,0.15)',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'Caveat, cursive',
                          color: '#fdf4ff',
                          fontSize: word.length > 6 ? 26 : 34,
                          fontWeight: 700,
                        }}
                      >
                        {word}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Continue */}
      <div className="relative z-10 flex justify-center pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: allFlipped ? 1 : 0.3, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {!allFlipped && (
            <p className="text-center text-sm mb-3" style={{ color: '#c084fc', fontFamily: 'DM Sans, sans-serif' }}>
              flip all the polaroids to continue...
            </p>
          )}
          <motion.button
            className="px-8 py-3 rounded-full font-semibold text-sm"
            style={{
              background: allFlipped ? 'linear-gradient(135deg, #6b21a8, #9f1239)' : 'rgba(107,33,168,0.2)',
              color: '#fdf4ff',
              border: '1px solid rgba(192,132,252,0.4)',
              fontFamily: 'DM Sans, sans-serif',
              cursor: allFlipped ? 'pointer' : 'default',
            }}
            whileHover={allFlipped ? { scale: 1.04 } : {}}
            whileTap={allFlipped ? { scale: 0.96 } : {}}
            onClick={allFlipped ? onComplete : undefined}
          >
            there's more →
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.85)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden"
              style={{
                background: 'white',
                boxShadow: '0 0 60px rgba(192,132,252,0.3)',
              }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={`/Birthday-site/photos/photo${lightboxIndex + 1}.jpeg`}
                alt={`memory ${lightboxIndex + 1}`}
                className="max-w-[85vw] max-h-[80vh] object-contain"
              />
              <button
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  color: '#fdf4ff',
                }}
                onClick={() => setLightboxIndex(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
