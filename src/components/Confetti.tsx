import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  size: number
  rotation: number
  rotationSpeed: number
  opacity: number
  shape: 'rect' | 'circle'
}

const COLORS = [
  '#c084fc', '#fda4af', '#f9a8d4', '#a78bfa', '#67e8f9',
  '#fde68a', '#86efac', '#d8b4fe', '#fb7185', '#e879f9',
]

export function Confetti({ active = true }: { active?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animRef = useRef<number>(0)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particleCount = 120
    const p: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      p.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * -1,
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 2 + 1.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: Math.random() * 8 + 3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.6 + 0.4,
        shape: Math.random() > 0.5 ? 'rect' : 'circle',
      })
    }
    particlesRef.current = p

    let spawnTimer = 0

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      spawnTimer++
      if (spawnTimer % 8 === 0) {
        for (let i = 0; i < 3; i++) {
          p.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 3,
            vy: Math.random() * 2 + 1.5,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            size: Math.random() * 8 + 3,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.1,
            opacity: Math.random() * 0.6 + 0.4,
            shape: Math.random() > 0.5 ? 'rect' : 'circle',
          })
        }
      }

      for (let i = p.length - 1; i >= 0; i--) {
        const pt = p[i]
        pt.x += pt.vx
        pt.y += pt.vy
        pt.vy += 0.02
        pt.rotation += pt.rotationSpeed

        if (pt.y > canvas.height + 20) {
          p.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.translate(pt.x, pt.y)
        ctx.rotate(pt.rotation)
        ctx.globalAlpha = pt.opacity
        ctx.fillStyle = pt.color

        if (pt.shape === 'rect') {
          ctx.fillRect(-pt.size / 2, -pt.size / 4, pt.size, pt.size / 2)
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, pt.size / 2, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()
      }

      if (p.length < 300) {
        animRef.current = requestAnimationFrame(animate)
      }
    }

    animRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [active])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 100,
      }}
    />
  )
}
