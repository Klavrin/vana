import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useDispatch } from 'react-redux'
import { changeColor } from '../store/reducers/blob-reducer'

const BenefitsSection2 = () => {
  const ref = useRef(null)
  const dispatch = useDispatch()

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

    gsap.to('#blob', {
      scrollTrigger: {
        trigger: ref.current,
        start: '60% bottom',
        end: '60%% 50%',
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onEnter: () => {
          dispatch(changeColor('#dd8755'))
        }
      },
      opacity: 1
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const benefits = ['CRAFT', 'LEARN', 'MANAGE', 'THRIVE']
  const withMicrodoseYouCan = [
    {
      title: 'Craft Your Session',
      description:
        'With Microdose, you can customize your session to suit your needs. Choose from a variety of curated techniques and explore various options that are available to create a personalized experience that works for you.'
    },
    {
      title: 'Learn Techniques',
      description:
        'Microdose teaches you memorable techniques that you can use in your daily routine. Designed to help you cultivate a deeper sense of grounding and presence, which can lead to a greater sense of ease and grace in your life.'
    },
    {
      title: 'Manage Stress',
      description:
        'By incorporating Microdose practices into your daily life, you can manage with daily stresses more effectively. This can help you find balance and fulfilment in your personal and professional life, leading to a happier and more fulfilling existence.'
    },
    {
      title: 'Thrive and Grow',
      description:
        'Through Microdose, you can harness the power to thrive and achieve success. These intentional practices equip you with the tools to navigate daily challenges, finding balance and fulfilment along the path to your goals.  '
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

export default BenefitsSection2
