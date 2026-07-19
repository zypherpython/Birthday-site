import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PreBirthdayScreen } from '@/components/PreBirthdayScreen'
import { LockScreen } from '@/components/LockScreen'
import { Act1Clothesline } from '@/components/Act1Clothesline'
import { Act2Flashback } from '@/components/Act2Flashback'
import { Act3Games } from '@/components/Act3Games'
import { Act4AWeChat } from '@/components/Act4AWeChat'
import { Act4BKidPicture } from '@/components/Act4BKidPicture'
import { Act5PoemWrapper } from '@/components/Act5Poem'
import { Finale } from '@/components/Finale'

type Scene =
  | 'prebirthday'
  | 'lockscreen'
  | 'act1'
  | 'act2'
  | 'act3'
  | 'act4a'
  | 'act4b'
  | 'act5'
  | 'finale'

function isBirthdayOrAfter(): boolean {
  if (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('preview')) {
    return true
  }
  const now = new Date()
  const birthday = new Date(now.getFullYear(), 8, 11) // Sept 11
  return now >= birthday
}

function getStartScene(): Scene {
  if (typeof window === 'undefined') return 'lockscreen'
  const p = new URLSearchParams(window.location.search)
  const sc = p.get('scene') as Scene | null
  if (sc) return sc
  return isBirthdayOrAfter() ? 'lockscreen' : 'prebirthday'
}

const SCENE_ORDER: Scene[] = ['lockscreen', 'act1', 'act2', 'act3', 'act4a', 'act4b', 'act5', 'finale']

export default function App() {
  const [scene, setScene] = useState<Scene>(getStartScene)

  function next(to: Scene) {
    setScene(to)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="min-h-screen" style={{ overscrollBehavior: 'none' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={scene}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          {scene === 'prebirthday' && <PreBirthdayScreen />}
          {scene === 'lockscreen' && <LockScreen onUnlock={() => next('act1')} />}
          {scene === 'act1' && <Act1Clothesline onComplete={() => next('act2')} />}
          {scene === 'act2' && <Act2Flashback onComplete={() => next('act3')} />}
          {scene === 'act3' && <Act3Games onComplete={() => next('act4a')} />}
          {scene === 'act4a' && <Act4AWeChat onComplete={() => next('act4b')} />}
          {scene === 'act4b' && <Act4BKidPicture onComplete={() => next('act5')} />}
          {scene === 'act5' && <Act5PoemWrapper onComplete={() => next('finale')} />}
          {scene === 'finale' && <Finale onRestart={() => next('lockscreen')} />}
        </motion.div>
      </AnimatePresence>

      {/* Scene progress dots */}
      {scene !== 'prebirthday' && scene !== 'finale' && (
        <div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-50"
          style={{ pointerEvents: 'none' }}
        >
          {SCENE_ORDER.slice(0, -1).map((s) => (
            <div
              key={s}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background:
                  SCENE_ORDER.indexOf(scene) >= SCENE_ORDER.indexOf(s)
                    ? 'rgba(192,132,252,0.8)'
                    : 'rgba(192,132,252,0.2)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
