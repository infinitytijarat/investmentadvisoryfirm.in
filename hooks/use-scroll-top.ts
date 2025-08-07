'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Custom hook that automatically scrolls to the top when the route changes
 * with safeguards for different browser environments
 */
export function useScrollTop() {
  const pathname = usePathname()
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // For mobile browsers that might behave differently
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 0)
      } catch (e) {
        // Fallback for older browsers
        window.scrollTo(0, 0)
      }
    }
  }, [pathname])
}
