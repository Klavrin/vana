import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const BenefitsSection3 = () => {
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

  const benefits = ['BREATH', 'BODY', 'MIND', 'SOUND']
  const withMicrodoseYouCan = [
    {
      title: 'Transform with Breath',
      description:
        'Through conscious breathing, elevate well-being, regulate emotions, reduce stress, improve focus, improve lung function, increase oxygen levels, enhance presence, heighten awareness, increase mindfulness, deepen spiritual connection, and boost creativity.'
    },
    {
      title: 'Mind-Body Connection',
      description:
        'Embodiment and movement practices help connect us with our bodies and surroundings. Through movement we can release tension and trauma, build endurance, and boost our mood and energy levels, tapping into our natural ability to express and care for ourselves.'
    },
    {
      title: 'The Power of the Mind',
      description:
        'Meditation and conscious learning help harness the power of your mind, develop mindfulness, find stillness, explore new perspectives, and let go of distractions and negative emotions.'
    },
    {
      title: 'The Impact of Sound',
      description:
        'Music, chanting, and other sound frequencies have calming, mood-boosting, and healing effects. Sound practices release tension, reduce stress, promote inner peace, and offer additional benefits such as improved sleep and exercise performance.'
    }
  ]

  return (
    <section
      ref={ref}
      className="grid grid-cols-[34.5%,62.5%] px-[2vw] pt-[2vw] pb-[8vw]"
    >
      <div>
        <h2 className="text-[0.8vw] sticky top-[50vh]">[BENEFITS]</h2>
      </div>

      <div>
        <ul className="mr-[2vw] leading-[15vw]">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              id="item"
              className="text-[15vw] active:blur-0 tracking-tighter"
            >
              {benefit}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-[7vw]">
          {withMicrodoseYouCan.map((benefit) => (
            <div key={benefit.title}>
              <h3 className="text-[1.3vw] max-w-[15vw] leading-[1.5vw] uppercase mb-[0.7vw]">
                {benefit.title}
              </h3>
              <p className="text-[1vw] font-light max-w-[15vw] text-justify leading-[1.3vw]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection3
