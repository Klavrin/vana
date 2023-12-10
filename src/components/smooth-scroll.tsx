import { ReactNode, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

type SmoothScrollProps = {
  children: ReactNode
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return children
}

export default SmoothScroll
