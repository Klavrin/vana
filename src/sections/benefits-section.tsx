import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const BenefitsSection = () => {
  const ref = useRef(null)

  useEffect(() => {
    const words: NodeListOf<HTMLElement> = document.querySelectorAll('#item')

    const handleScroll = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2

      words.forEach((word) => {
        const wordCenter = word.offsetTop + word.offsetHeight / 2

        // define a range around the viewport center
        const rangeStart = viewportCenter - window.innerHeight / 8
        const rangeEnd = viewportCenter + window.innerHeight / 8

        // check if the word's center is within the range
        const isInRange = wordCenter >= rangeStart && wordCenter <= rangeEnd

        // calculate blur and opacity based on distance
        const distance = isInRange ? 0 : Math.abs(viewportCenter - wordCenter) / 3
        const blur = Math.min(10, distance / 10)
        const opacity = 1 - blur / 12

        gsap.to(word, { opacity, filter: `blur(${blur}px)` })
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const benefits = [
    'RELAXATION',
    'FOCUS',
    'BALANCE',
    'RELEASE',
    'TRANSFORM',
    'PERFORM',
    'MINDFULNESS',
    'CLARITY',
    'ENERGY',
    'RELIEF',
    'INNER PEACE',
    'PRESENCE'
  ]

  return (
    <section ref={ref} className="grid grid-cols-[37.5%,62.5%] px-[2vw]">
      <div>
        <h2 className="text-[0.8vw] sticky top-[50vh]">[BENEFITS]</h2>
      </div>

      <ul className="mr-[2vw] leading-[9vw]">
        {benefits.map((benefit) => (
          <li key={benefit} id="item" className="text-[8vw] active:blur-0">
            {benefit}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BenefitsSection
