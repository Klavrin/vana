import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

type CardAppShowcaseProps = {
  imgSrc: string
}

const CardAppShowcase = ({ imgSrc }: CardAppShowcaseProps) => {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.to('#img', {
        scrollTrigger: {
          trigger: '#img',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        ease: 'none',
        y: '-18vw'
      })
    }, ref.current!)

    return () => context.revert()
  }, [])

  return (
    <div
      ref={ref}
      className="w-full h-[36vw] flex justify-center border-[0.09vw] border-white rounded-tl-[4vw] rounded-br-[4vw] px-[2vw] py-[4vw] overflow-hidden"
    >
      <img id="img" src={`./src/assets/${imgSrc}`} className=" h-[40vw] mt-[4vw]" />
    </div>
  )
}

export default CardAppShowcase
