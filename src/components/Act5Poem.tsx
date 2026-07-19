import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { SanrioLayer } from './SanrioFloat'

interface Props { onComplete: () => void }

// Faithfully transcribed from the script. `---` becomes a 2-second pause (rendered as extra spacing).
const POEM = [
  'there is a version of you that exists',
  'in small, unwitnessed moments —',
  '',
  'the way you hold your phone',
  "when you're thinking about something else.",
  '',
  'the sound you make',
  'when something surprises you.',
  '',
  'the exact way your face moves',
  'before you decide how to react.',
  '---',
  'I have been paying attention.',
  '---',
  'I know how you carry yourself',
  "when you're not sure anyone is watching.",
  '',
  'I know which laugh is the real one.',
  '',
  'I know the version of you',
  "that doesn't perform for anyone —",
  '',
  'and I want you to know:',
  'that version is the one.',
  '---',
  'you have spent a lot of time',
  'trying to be enough.',
  '',
  'you already were.',
  '---',
  'the year you just lived',
  'had weight in it.',
  '',
  'I watched you carry it.',
  "I don't think you know how strong you are.",
  "I don't think anyone has said it plainly enough.",
  '',
  'so:',
  '',
  'you are strong.',
  'not despite the soft parts.',
  'because of them.',
  '---',
  'you turned 18 today.',
  '',
  'which means you have spent 18 years',
  'becoming the person',
  'that I get to know.',
  '',
  "I don't take that lightly.",
  '---',
  'happy birthday.',
  '',
  'not as a celebration',
  'of the day you arrived —',
  '',
  'but as a celebration',
  'of every day since',
  'you chose to stay.',
  '---',
  "I'm glad you're here.",
  '',
  "I'm glad you're you.",
  '',
  "I'm glad I get to know you",
  'in the ordinary moments —',
  '',
  'which,',
  "when they're yours,",
  'are not ordinary at all.',
]

function PoemLine({ text, delay }: { text: string; delay: number }) {
  if (text === '---') {
    return <div style={{ height: 40 }} />
  }
  if (text === '') {
    return <div style={{ height: 16 }} />
  }
  return (
    <motion.p
      className="poem-text"
      style={{ margin: 0 }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: 'easeOut' }}
    >
      {text}
    </motion.p>
  )
}

export function Act5Poem({ onComplete }: Props) {
  const timerRef = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const clientHeight = window.innerHeight
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        clearInterval(timerRef.current)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1a0a2e 0%, #2a0f3a 50%, #2d0a1a 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SanrioLayer count={4} dark />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 400,
            height: 400,
            top: '10%',
            left: '-10%',
            background: 'radial-gradient(circle, rgba(107,33,168,0.12), transparent)',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 350,
            height: 350,
            bottom: '15%',
            right: '-5%',
            background: 'radial-gradient(circle, rgba(159,18,57,0.1), transparent)',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 250,
            height: 250,
            top: '50%',
            left: '60%',
            background: 'radial-gradient(circle, rgba(192,132,252,0.08), transparent)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-20">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'Caveat, cursive', color: '#fdf4ff' }}
          >
            for you
          </h2>
          <div className="w-16 h-px" style={{ background: 'rgba(192,132,252,0.5)' }} />
          <p
            className="mt-4 text-sm"
            style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(192,132,252,0.5)' }}
          >
            scroll through ✦
          </p>
        </motion.div>

        <div className="text-left" style={{ paddingLeft: 8 }}>
          {POEM.map((line, i) => (
            <PoemLine
              key={i}
              text={line}
              delay={0.08}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-20 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              color: 'rgba(192,132,252,0.5)',
              fontSize: 11,
              fontStyle: 'italic',
            }}
          >
            there is more. but some of it doesn't need to be said.
          </p>

          <motion.button
            className="mt-12 px-10 py-4 rounded-full font-semibold"
            style={{
              background: 'linear-gradient(135deg, #6b21a8, #9f1239)',
              color: '#fdf4ff',
              border: '1px solid rgba(192,132,252,0.5)',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              boxShadow: '0 0 30px rgba(107,33,168,0.4)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(107,33,168,0.6)' }}
            whileTap={{ scale: 0.96 }}
            onClick={onComplete}
          >
            keep going ↓
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Act5PoemWrapper({ onComplete }: Props) {
  return <Act5Poem onComplete={onComplete} />
}
