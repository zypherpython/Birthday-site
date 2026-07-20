import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SanrioLayer } from './SanrioFloat'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const now = new Date()
  const target = new Date(now.getFullYear(), 8, 11) // Sept 11 (0-indexed month)
  if (target < now) target.setFullYear(target.getFullYear() + 1)
  const diff = target.getTime() - now.getTime()
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

export function PreBirthdayScreen() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #2d0a1a 50%, #1a0a2e 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <SanrioLayer count={5} dark />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'rgba(253,244,255,0.6)' : 'rgba(192,132,252,0.5)',
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 4 }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-lg"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        {/* Rose petals emoji row */}
        <motion.div
          className="text-4xl mb-6 tracking-widest"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          🌸 🎀 🌸
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 overflow-hidden border-4"
          style={{ borderColor: '#f48fb1', boxShadow: '0 0 40px rgba(244,143,177,0.4)' }}
        >
          <img
            src="/Birthday-site/lockscreen.jpg"
            alt="lockscreen"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <h1
          className="text-5xl md:text-6xl font-bold mb-3 leading-tight"
          style={{ fontFamily: 'Caveat, cursive', color: '#fdf4ff' }}
        >
          Something's coming...
        </h1>

        <p
          className="text-lg md:text-xl mb-10"
          style={{ fontFamily: 'EB Garamond, serif', color: '#c084fc', fontStyle: 'italic' }}
        >
          A little world made just for you. <br />
          It's not ready yet — but you will be, soon.
        </p>

        {/* Countdown */}
        <div className="flex gap-4 justify-center">
          {[
            { label: 'Days', value: time.days },
            { label: 'Hours', value: time.hours },
            { label: 'Mins', value: time.minutes },
            { label: 'Secs', value: time.seconds },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-bold border"
                style={{
                  background: 'rgba(107,33,168,0.3)',
                  borderColor: 'rgba(192,132,252,0.4)',
                  color: '#fdf4ff',
                  fontFamily: 'Caveat, cursive',
                  boxShadow: '0 0 20px rgba(107,33,168,0.15)',
                }}
              >
                {String(value).padStart(2, '0')}
              </div>
              <span
                className="text-xs mt-2 uppercase tracking-widest"
                style={{ color: '#c084fc', fontFamily: 'DM Sans, sans-serif' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-sm"
          style={{ color: 'rgba(192,132,252,0.6)', fontFamily: 'DM Sans, sans-serif' }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Come back on September 11th ✨
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
