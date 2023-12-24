import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ParallaxImage from '../components/parallax-image'

const ParallaxImageSection2 = () => {
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
    <ParallaxImage id="journey" imgUrl="microdose-cover-2.webp">
      <div className="self-end z-20 h-[50vw] py-[5vw]">
        <div className="pl-[2vw] z-20">
          <h3 className="text-[0.8vw] uppercase">[Journey]</h3>
        </div>

        <p className="text-[1vw] font-light max-w-[15vw] relative left-[32vw] top-[20vw] mt-[4vw] text-justify leading-[1.3vw]">
          Journey is where you'll find a curated library of sessions and collections
          designed to explore your inner world and discover tools for personal growth
          through breath, body, mind, and sound practices.
        </p>
      </div>

      <div className="w-full h-[50vw] mix-blend-multiply bg-black absolute self-end py-[5vw]">
        <h2 ref={divRef} className="w-full flex flex-col text-[8vw] leading-[7vw]">
          <div id="heading-1" className="self-end uppercase relative">
            Embark on a
          </div>
          <div id="heading-2" className="uppercase relative">
            curated
          </div>
          <div id="heading-3" className="self-end uppercase relative mr-[22vw]">
            Journey
          </div>
        </h2>
      </div>
    </ParallaxImage>
  )
}

export default ParallaxImageSection2
