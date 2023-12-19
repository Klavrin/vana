import { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

type ParallaxImageProps = {
  children: ReactNode
  imgUrl: string
}

const ParallaxImage = ({ children, imgUrl }: ParallaxImageProps) => {
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
        ease: 'none',
        backgroundPositionY: '5vw'
      })
    }, ref.current!)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={ref}
      className={`h-[102vw] overflow-hidden bg-cover bg-center flex relative`}
      style={{
        backgroundPositionY: '-35vw',
        backgroundImage: `url('./src/assets/${imgUrl}')`
      }}
    >
      {children}
    </section>
  )
}

export default ParallaxImage
