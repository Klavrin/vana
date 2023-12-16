import { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

type ParallaxImageProps = {
  children: ReactNode
}

const ParallaxImage = ({ children }: ParallaxImageProps) => {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        backgroundPositionY: '5vw'
      })
    }, ref.current!)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="h-[180vh] overflow-hidden bg-[url('./src/assets/microdose-cover.webp')] bg-cover bg-center flex relative"
      style={{ backgroundPositionY: '-35vw' }}
    >
      {children}
    </section>
  )
}

export default ParallaxImage
