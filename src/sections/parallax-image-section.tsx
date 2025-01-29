import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ParallaxImage from '../components/parallax-image'
// import { useDispatch } from 'react-redux'
// import { changeColor } from '../store/reducers/blob-reducer'

const ParallaxImageSection = () => {
  const divRef = useRef(null)
  // const dispatch = useDispatch()

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
        right: '25vw',
        ease: 'none'
      })
      gsap.to('#heading-2', {
        scrollTrigger: {
          trigger: divRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        left: '35vw',
        ease: 'none'
      })
      gsap.to('#heading-3', {
        scrollTrigger: {
          trigger: divRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        right: '10vw',
        ease: 'none'
      })
    }, divRef.current!)

    return () => context.revert()
  }, [])

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     console.log(entries[0])
  //     if (entries[0].boundingClientRect.y > 857) {
  //       dispatch(changeColor('purple'))
  //     } else {
  //       dispatch(changeColor('orange'))
  //     }
  //   })

  //   const target = document.getElementById('hello') as HTMLElement
  //   observer.observe(target)

  //   return () => observer.unobserve(target)
  // }, [dispatch])

  return (
    <ParallaxImage id="microdose" imgUrl="microdose-cover.webp">
      <div id="hello" className="self-end z-20 h-[50vw] py-[5vw]">
        <div className="pl-[2vw] z-20">
          <h3 className="text-[0.8vw] uppercase">[Microdose]</h3>
        </div>

        <p className="text-[1vw] font-light max-w-[15vw] relative left-[32vw] top-[20vw] mt-[4vw] text-justify leading-[1.3vw]">
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
