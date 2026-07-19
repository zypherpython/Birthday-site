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
      <SanrioLayer count={5} dark />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 48 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? 'rgba(253,164,175,0.6)' : 'rgba(192,132,252,0.6)',
            }}
            animate={{ opacity: [0, 0.9, 0], scale: [0.3, 1.6, 0.3] }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
      >
        <motion.div
          className="text-5xl mb-6"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          🎀
        </motion.div>

        <motion.h1
          className="font-bold mb-6"
          style={{
            fontFamily: 'Caveat, cursive',
            color: '#fdf4ff',
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            lineHeight: 1,
          }}
          animate={{ textShadow: ['0 0 20px rgba(192,132,252,0)', '0 0 40px rgba(192,132,252,0.3)', '0 0 20px rgba(192,132,252,0)'] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          jaanu 🎀
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-12 leading-relaxed"
          style={{ fontFamily: 'EB Garamond, serif', color: '#c084fc', fontStyle: 'italic' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          this was made for you.
          <br />
          it has been waiting.
        </motion.p>

        <motion.button
          className="px-10 py-4 rounded-full text-lg relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(107,33,168,0.3), rgba(159,18,57,0.3))',
            color: '#fdf4ff',
            border: '1px solid rgba(192,132,252,0.5)',
            fontFamily: 'Caveat, cursive',
            fontSize: 24,
            boxShadow: '0 0 30px rgba(107,33,168,0.2)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ scale: 1.06, boxShadow: '0 0 50px rgba(107,33,168,0.4)' }}
          whileTap={{ scale: 0.94 }}
          onClick={onUnlock}
        >
          open it 🎀
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
