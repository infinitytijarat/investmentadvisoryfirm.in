"use client"

import { useState, useEffect, useRef } from 'react'

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const frameRate = 1000 / 60
  const totalFrames = Math.round(duration / frameRate)

  useEffect(() => {
    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const currentCount = Math.round(end * progress)
      setCount(currentCount)

      if (frame === totalFrames) {
        clearInterval(counter)
        setCount(end) // Ensure it ends on the exact number
      }
    }, frameRate)

    return () => clearInterval(counter)
  }, [end, duration, totalFrames])

  return count
}

function StatCard({ value, suffix, label }: { value: number, suffix?: string, label: string }) {
  const count = useCountUp(value)
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/10 rounded-lg">
      <p className="text-4xl md:text-5xl font-bold text-white">
        {count}{suffix}
      </p>
      <p className="text-lg text-green-100">{label}</p>
    </div>
  )
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-[#7A8F5B]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">The Best Investment Learning Solution</h2>
        <p className="mt-4 text-lg text-green-100 max-w-3xl mx-auto">
          Investment in share market has become easy with our stocks tips services. Get maximum profit when you trade in futures.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-12">
          {isVisible && (
            <>
              <StatCard value={8} suffix="+" label="Years Experience" />
              <StatCard value={89} label="Success Ratio" />
              <StatCard value={350} suffix="+" label="Happy Client" />
              <StatCard value={25} label="Total Profits (in Lakh)" />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
