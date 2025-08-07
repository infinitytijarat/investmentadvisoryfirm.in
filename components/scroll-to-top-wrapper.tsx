'use client'

import { useScrollTop } from "@/hooks/use-scroll-top"
import React from "react"

export function ScrollToTopWrapper({ children }: { children: React.ReactNode }) {
  // This hook will scroll to the top when the route changes
  useScrollTop()
  
  return <>{children}</>
}
