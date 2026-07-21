import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SanrioLayer } from './SanrioFloat'

function formatTime(s: number): string {
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

interface Props { onComplete: () => void }

export function Act2Flashback({ onComplete }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  function handlePlay() {
    if (done || !videoRef.current) return
    videoRef.current.play()
    setPlaying(true)
  }

  function handleTimeUpdate() {
    if (!videoRef.current) return
    const pct = videoRef.current.currentTime / videoRef.current.duration
    setProgress(pct)
  }

  function handleEnded() {
    setPlaying(false)
    setDone(true)
  }

  function handleReplay() {
    if (!videoRef.current) return
    videoRef.current.currentTime = 0
    videoRef.current.play()
    setProgress(0)
    setPlaying(true)
    setDone(false)
  }

  function handleDownload() {
    const a = document.createElement('a')
    a.href = '/Birthday-site/memory.mp4'
    a.download = 'memory.mp4'
    a.click()
  }

  async function handleShare() {
    const shareData = {
      title: 'for you 🎀',
      text: 'watch this 🎬',
      url: window.location.href,
    }
    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        handleDownload()
      }
    } catch {
      handleDownload()
    }
  }

  return (
    <motion.div
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{ background: 'linear-gradient(180deg, #1a0a2e 0%, #2d0a1a 60%, #1a0a2e 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SanrioLayer count={4} dark />

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center justify-center" style={{ maxHeight: '100dvh' }}>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-4"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-1"
            style={{ fontFamily: 'Caveat, cursive', color: '#fdf4ff' }}
          >
            Admire yourself for a moment
          </h2>
          <p
            className="text-sm md:text-base"
            style={{ fontFamily: 'EB Garamond, serif', color: '#c084fc', fontStyle: 'italic' }}
          >
            just watch ✦
          </p>
        </motion.div>

        {/* VHS Player */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: '#0d0617',
            border: '2px solid rgba(192,132,252,0.25)',
            boxShadow: '0 0 40px rgba(107,33,168,0.3)',
          }}
        >
          {/* Screen */}
          <div
            className="relative w-full bg-black flex items-center justify-center"
            style={{ aspectRatio: '9/16', maxHeight: '60dvh' }}
          >
            {/* VHS scanlines */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 3px)',
              }}
            />
            {/* Vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(45,10,26,0.7) 100%)' }}
            />

            {/* Video */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-contain"
              src="/Birthday-site/memory.mp4"
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
            />

            {/* VHS label */}
            <motion.div
              className="absolute top-3 left-3"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {playing && (
                <span
                  className="text-xs font-bold px-2 py-1 rounded"
                  style={{ background: 'rgba(239,68,68,0.8)', color: 'white', fontFamily: 'DM Sans, sans-serif' }}
                >
                  ● REC
                </span>
              )}
            </motion.div>

            {/* Timestamp */}
            <div
              className="absolute bottom-3 right-3 text-xs opacity-60"
              style={{ color: '#c084fc', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em' }}
            >
              {done ? formatTime(videoRef.current?.duration ?? 0) : formatTime(videoRef.current?.currentTime ?? 0)}
            </div>

            {/* Play / Replay button */}
            {!playing && !done && (
              <motion.button
                className="absolute rounded-full flex items-center justify-center"
                style={{
                  width: 64,
                  height: 64,
                  background: 'rgba(107,33,168,0.8)',
                  border: '2px solid rgba(192,132,252,0.5)',
                  zIndex: 10,
                }}
                onClick={handlePlay}
                whileHover={{ scale: 1.1, background: 'rgba(107,33,168,1)' }}
                whileTap={{ scale: 0.92 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#fdf4ff">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>
            )}
            {done && (
              <motion.button
                className="absolute rounded-full flex items-center justify-center"
                style={{
                  width: 64,
                  height: 64,
                  background: 'rgba(107,33,168,0.8)',
                  border: '2px solid rgba(192,132,252,0.5)',
                  zIndex: 10,
                }}
                onClick={handleReplay}
                whileHover={{ scale: 1.1, background: 'rgba(107,33,168,1)' }}
                whileTap={{ scale: 0.92 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#fdf4ff">
                  <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                </svg>
              </motion.button>
            )}
          </div>

          {/* Progress bar */}
          <div className="px-4 py-3" style={{ background: '#0d0617' }}>
            <div className="w-full h-1 rounded-full mb-3" style={{ background: 'rgba(192,132,252,0.2)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #6b21a8, #c084fc)',
                  width: `${progress * 100}%`,
                }}
                transition={{ duration: 0.05 }}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs" style={{ color: '#c084fc', fontFamily: 'Caveat, cursive', fontSize: 14 }}>
                {done ? '🎞️ replay or continue ↓' : '🎞️ her, being her'}
              </p>
              {!playing && !done && (
                <button
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(107,33,168,0.4)',
                    color: '#fdf4ff',
                    fontFamily: 'DM Sans, sans-serif',
                    border: '1px solid rgba(192,132,252,0.3)',
                  }}
                  onClick={handlePlay}
                >
                  Play ▶
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Caption below */}
        <motion.div
          className="text-center mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: done ? 1 : 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-base md:text-lg mb-4"
            style={{ fontFamily: 'EB Garamond, serif', color: '#fdf4ff', fontStyle: 'italic' }}
          >
            {done
              ? '"you went through all of that. and you\'re still you." 💜'
              : 'press play to watch...'}
          </p>

          {done && (
            <div className="flex flex-wrap gap-3 justify-center">
              <motion.button
                className="px-6 py-3 rounded-full font-semibold text-sm"
                style={{
                  background: 'rgba(107,33,168,0.5)',
                  color: '#fdf4ff',
                  border: '1px solid rgba(192,132,252,0.4)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleReplay}
              >
                ↺ Replay
              </motion.button>
              <motion.button
                className="px-6 py-3 rounded-full font-semibold text-sm"
                style={{
                  background: 'rgba(15,15,30,0.6)',
                  color: '#fdf4ff',
                  border: '1px solid rgba(192,132,252,0.4)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleDownload}
              >
                ⬇ Download
              </motion.button>
              <motion.button
                className="px-6 py-3 rounded-full font-semibold text-sm"
                style={{
                  background: 'linear-gradient(135deg, #e1306c, #f77737)',
                  color: '#fff',
                  border: 'none',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleShare}
              >
                📸 Share
              </motion.button>
              <motion.button
                className="px-8 py-3 rounded-full font-semibold text-sm"
                style={{
                  background: 'linear-gradient(135deg, #6b21a8, #9f1239)',
                  color: '#fdf4ff',
                  border: '1px solid rgba(192,132,252,0.4)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onComplete}
              >
                keep going ↓
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}
