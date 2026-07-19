import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SanrioLayer } from './SanrioFloat'

interface Props { onComplete: () => void }

type Side = 'him' | 'her'

interface Msg {
  side: Side
  text: string
  typingMs: number   // typing indicator duration before this message appears
  pauseMs: number    // pause after this message before the next
}

// Faithfully transcribed from the script.
const MESSAGES: Msg[] = [
  { side: 'him', text: 'kya krrhi hai?', typingMs: 1200, pauseMs: 2000 },
  { side: 'her', text: 'aapse pyaar', typingMs: 1500, pauseMs: 2000 },
  { side: 'him', text: 'acha ji', typingMs: 1000, pauseMs: 1500 },
  { side: 'her', text: 'hanjiiiiiiii', typingMs: 1400, pauseMs: 2000 },
  { side: 'him', text: 'birthday aa gaya tera aaj!', typingMs: 1400, pauseMs: 2000 },
  { side: 'her', text: 'haa ab badi ho gayi main 18 ki', typingMs: 1600, pauseMs: 1000 },
  { side: 'her', text: 'ab to aap pakka commit kar lo naa', typingMs: 1500, pauseMs: 1000 },
  { side: 'her', text: 'dekho — dono 18 ke hain. you said no dating before 18. ab to main 18 hoon. 🙂', typingMs: 2200, pauseMs: 5000 },
  { side: 'him', text: 'ruk ruk ruk', typingMs: 1000, pauseMs: 1500 },
  { side: 'him', text: 'kya bol rahi ho aap', typingMs: 1500, pauseMs: 3000 },
  { side: 'him', text: 'haaa shona.', typingMs: 1800, pauseMs: 3000 },
  { side: 'him', text: 'I am so thankful to have you by my side.', typingMs: 1800, pauseMs: 2000 },
  { side: 'him', text: 'I love you so much.', typingMs: 1500, pauseMs: 2000 },
  { side: 'him', text: 'Like I have said before — bonds don\'t shatter on tombs. They give tombs a reason to exist.', typingMs: 2400, pauseMs: 3000 },
  { side: 'him', text: 'Just like that, you became a reason for me to exist.', typingMs: 2000, pauseMs: 4000 },
  { side: 'him', text: 'You have seen and experienced so much this year. But you went through all of it.', typingMs: 2200, pauseMs: 2000 },
  { side: 'him', text: 'You held me just as dearly as you held your own life — maybe even more dearly.', typingMs: 2200, pauseMs: 3000 },
  { side: 'him', text: 'Your eyes shone with my name. And they never once hurt with it. It was just — love. Plain and simple.', typingMs: 2400, pauseMs: 3000 },
  { side: 'him', text: 'You kept going. You helped yourself. You accepted me as your partner and refused to see it any other way.', typingMs: 2400, pauseMs: 2000 },
  { side: 'him', text: 'You always cared for us.', typingMs: 1400, pauseMs: 2000 },
  { side: 'him', text: 'This relationship stands because of you.', typingMs: 1800, pauseMs: 4000 },
  { side: 'him', text: 'You stayed awake on nights I slept through. You hid your worries so I wouldn\'t panic. You cared for me the way only someone who truly loves you can.', typingMs: 2600, pauseMs: 3000 },
  { side: 'him', text: 'You were gentle from the very beginning.', typingMs: 1600, pauseMs: 5000 },
  { side: 'him', text: 'I may not always be enough for someone like you. But these eyes — they shine for you. And this heart skips every time I get to look at you.', typingMs: 2600, pauseMs: 3000 },
  { side: 'him', text: 'So here\'s what I want to say.', typingMs: 1500, pauseMs: 2000 },
  { side: 'him', text: 'This dumb Boy still wants to be your shelter. And he\'s asking — will you let him?', typingMs: 2200, pauseMs: 2000 },
]

const FINAL_MSG: Msg = {
  side: 'him',
  text: 'finish this quickly. the boy is waiting. 🙂',
  typingMs: 1800,
  pauseMs: 4000,
}

export function Act4AWeChat({ onComplete }: Props) {
  const [visible, setVisible] = useState<number>(0)
  const [typing, setTyping] = useState(false)
  const [buttonsShown, setButtonsShown] = useState(false)
  const [buttonsClicked, setButtonsClicked] = useState(false)
  const [finalShown, setFinalShown] = useState(false)
  const [finalLineOnly, setFinalLineOnly] = useState(false)
  const cancelledRef = useRef(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    cancelledRef.current = false
    let cancelled = false

    async function playSequence() {
      for (let i = 0; i < MESSAGES.length; i++) {
        if (cancelled) return
        const msg = MESSAGES[i]
        setTyping(true)
        await wait(msg.typingMs)
        if (cancelled) return
        setTyping(false)
        setVisible(i + 1)
        await wait(msg.pauseMs)
      }
      if (cancelled) return
      setButtonsShown(true)
    }
    playSequence()
    return () => { cancelled = true; cancelledRef.current = true }
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [visible, typing, buttonsShown, finalShown])

  function handleButtonClick() {
    if (!buttonsShown || buttonsClicked) return
    setButtonsClicked(true)
    setButtonsShown(false)

    const id = setTimeout(async () => {
      if (cancelledRef.current) return
      setTyping(true)
      await wait(FINAL_MSG.typingMs)
      if (cancelledRef.current) return
      setTyping(false)
      setFinalShown(true)
      if (cancelledRef.current) return
      await wait(FINAL_MSG.pauseMs)
      if (cancelledRef.current) return
      setFinalLineOnly(true)
      await wait(5000)
      if (cancelledRef.current) return
      onComplete()
    }, 1000)
  }

  return (
    <motion.div
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1a0a2e 0%, #2d0a1a 100%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <SanrioLayer count={3} dark />

      {/* Header */}
      {!finalLineOnly && (
        <div
          className="relative z-10 px-4 py-4 flex items-center gap-3 border-b"
          style={{ borderColor: 'rgba(192,132,252,0.15)', background: 'rgba(26,10,46,0.9)' }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
            style={{ background: 'linear-gradient(135deg, #6b21a8, #9f1239)' }}
          >
            🎀
          </div>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#fdf4ff', fontSize: 15, fontWeight: 500 }}>
              hisLover&lt;3
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#c084fc', fontSize: 12 }}>
              {typing ? 'typing...' : 'online'}
            </p>
          </div>
          <div className="ml-auto text-right">
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#fda4af', fontSize: 15, fontWeight: 500 }}>
              herLover&lt;3
            </p>
          </div>
        </div>
      )}

      {/* Chat body */}
      {!finalLineOnly && (
        <div className="relative z-10 flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2">
          {/* Date stamp */}
          <div className="flex justify-center mb-3">
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: 'rgba(107,33,168,0.2)',
                color: '#c084fc',
                fontFamily: 'DM Sans, sans-serif',
                border: '1px solid rgba(192,132,252,0.2)',
              }}
            >
              September 11 ✦ Her Birthday
            </span>
          </div>

          <AnimatePresence>
            {MESSAGES.slice(0, visible).map((msg, i) => (
              <motion.div
                key={i}
                className={`flex ${msg.side === 'him' ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                <div
                  className="px-4 py-2.5 rounded-2xl max-w-[80%]"
                  style={{
                    background: msg.side === 'him'
                      ? 'rgba(45,10,26,0.6)'
                      : '#9f1239',
                    color: msg.side === 'him' ? '#c084fc' : '#fdf4ff',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 15,
                    lineHeight: 1.5,
                    borderRadius: msg.side === 'him' ? '18px 18px 18px 4px' : '18px 18px 4px 18px',
                    border: msg.side === 'him' ? '1px solid rgba(192,132,252,0.2)' : 'none',
                  }}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}

            {/* Final message */}
            {finalShown && (
              <motion.div
                key="final"
                className="flex justify-start"
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                <div
                  className="px-4 py-2.5 rounded-2xl max-w-[80%]"
                  style={{
                    background: 'rgba(45,10,26,0.6)',
                    color: '#c084fc',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 15,
                    lineHeight: 1.5,
                    borderRadius: '18px 18px 18px 4px',
                    border: '1px solid rgba(192,132,252,0.2)',
                  }}
                >
                  {FINAL_MSG.text}
                </div>
              </motion.div>
            )}

            {/* Typing indicator */}
            {typing && !finalShown && (
              <motion.div
                key="typing"
                className="flex justify-start"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div
                  className="px-4 py-3 rounded-2xl flex gap-1.5 items-center"
                  style={{
                    background: 'rgba(45,10,26,0.6)',
                    border: '1px solid rgba(192,132,252,0.2)',
                    borderRadius: '18px 18px 18px 4px',
                  }}
                >
                  {[0, 1, 2].map(j => (
                    <motion.div
                      key={j}
                      className="w-2 h-2 rounded-full"
                      style={{ background: '#c084fc' }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: j * 0.2 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={bottomRef} />

          {/* Two buttons */}
          <AnimatePresence>
            {buttonsShown && (
              <motion.div
                className="flex justify-center gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.8 }}
              >
                <motion.button
                  className="px-6 py-3 rounded-full"
                  style={{
                    background: 'transparent',
                    color: '#c084fc',
                    border: '1.5px solid #9f1239',
                    fontFamily: 'Caveat, cursive',
                    fontSize: 22,
                  }}
                  whileHover={{ scale: 1.05, background: 'rgba(159,18,57,0.2)' }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleButtonClick}
                >
                  YESSSSSSSSSSSSs
                </motion.button>
                <motion.button
                  className="px-6 py-3 rounded-full"
                  style={{
                    background: 'transparent',
                    color: '#c084fc',
                    border: '1.5px solid #9f1239',
                    fontFamily: 'Caveat, cursive',
                    fontSize: 22,
                  }}
                  whileHover={{ scale: 1.05, background: 'rgba(159,18,57,0.2)' }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleButtonClick}
                >
                  ABSolutelyyyyyyyyyyyyyyy yes
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Final line only — large, centered, outside phone frame */}
      <AnimatePresence>
        {finalLineOnly && (
          <motion.div
            className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.p
              className="text-center"
              style={{
                fontFamily: 'EB Garamond, serif',
                color: '#c084fc',
                fontStyle: 'italic',
                fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              the boy is waiting.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function wait(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms))
}
