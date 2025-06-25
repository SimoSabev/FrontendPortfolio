"use client"

import { useEffect, useState } from "react"

interface Dot {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

export default function FloatingDots() {
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    const generateDots = () => {
      const newDots: Dot[] = []
      const colors = [
        "rgba(139, 92, 246, 0.3)", // Purple
        "rgba(139, 92, 246, 0.2)", // Purple lighter
        "rgba(139, 92, 246, 0.1)", // Purple very light
        "rgba(99, 102, 241, 0.2)", // Indigo
        "rgba(168, 85, 247, 0.2)", // Violet
      ]

      for (let i = 0; i < 15; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 100 + 50,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 10 + 15,
          delay: Math.random() * 5,
        })
      }
      setDots(newDots)
    }

    generateDots()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="floating-dot animate-float"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: `radial-gradient(circle, ${dot.color} 0%, transparent 70%)`,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  )
}
