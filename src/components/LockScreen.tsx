import { motion } from 'framer-motion'
import { SanrioLayer } from './SanrioFloat'

interface Props { onUnlock: () => void }

export function LockScreen({ onUnlock }: Props) {
  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#1a0a2e' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <SanrioLayer count={4} dark />

      {/* Faint purple particle shimmer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 36 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: 'rgba(192,132,252,0.6)',
            }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.4, 0.5] }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        {/* Her name */}
        <motion.h1
          className="font-bold mb-6"
          style={{
            fontFamily: 'Caveat, cursive',
            color: '#fdf4ff',
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            lineHeight: 1,
          }}
        >
          jaanu 🎀
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl mb-10 leading-relaxed"
          style={{ fontFamily: 'EB Garamond, serif', color: '#c084fc', fontStyle: 'italic' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          this was made for you.
          <br />
          it has been waiting.
        </motion.p>

        {/* Open button */}
        <motion.button
          className="px-8 py-3 rounded-full text-lg"
          style={{
            background: 'transparent',
            color: '#c084fc',
            border: '1px solid rgba(192,132,252,0.5)',
            fontFamily: 'Caveat, cursive',
            fontSize: 22,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          whileHover={{ scale: 1.05, background: 'rgba(192,132,252,0.1)' }}
          whileTap={{ scale: 0.96 }}
          onClick={onUnlock}
        >
          open it 🎀
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
