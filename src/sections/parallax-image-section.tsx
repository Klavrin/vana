import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ParallaxImage from '../components/parallax-image'

const ParallaxImageSection = () => {
  const divRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.to('#heading-1', {
        scrollTrigger: {
          trigger: divRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        right: '25vw'
      })
      gsap.to('#heading-2', {
        scrollTrigger: {
          trigger: divRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        left: '35vw'
      })
      gsap.to('#heading-3', {
        scrollTrigger: {
          trigger: divRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        right: '10vw'
      })
    }, divRef.current!)

    return () => context.revert()
  }, [])

  return (
    <ParallaxImage>
      <div className="self-end z-20 h-[50vw] py-[5vw]">
        <div className="pl-[2vw] z-20">
          <h3 className="text-[0.8vw] uppercase">[Microdose]</h3>
        </div>

        <p className="text-[1vw] font-light max-w-[15vw] relative left-[32vw] top-[20vw] mt-[4vw] text-justify">
          Microdose is a program that offers a quick and easy way to shift your mental
          state with just a few minutes of breathwork. It's a collection of research-based
          techniques that provide fast benefits to help you cope with daily stresses.
        </p>
      </div>

      <div className="w-full h-[50vw] mix-blend-multiply bg-black absolute self-end py-[5vw]">
        <h2 ref={divRef} className="w-full flex flex-col text-[8vw] leading-[7vw]">
          <div id="heading-1" className="self-end uppercase relative mr-[15vw]">
            Discover
          </div>
          <div id="heading-2" className="uppercase relative">
            the power of
          </div>
          <div id="heading-3" className="self-end uppercase relative mr-[15vw]">
            Microdose
          </div>
        </h2>
      </div>
    </ParallaxImage>
  )
}

export default ParallaxImageSection
