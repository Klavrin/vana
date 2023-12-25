import { useEffect, ReactNode } from 'react'
import { lenis } from '../utils/lenis'

type SmoothScrollProps = {
  children: ReactNode
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return children
}

export default SmoothScroll
