import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Card from '../components/card'
import { useDispatch } from 'react-redux'
import { changeColor } from '../store/reducers/blob-reducer'
// import { changeOpacity } from '../store/reducers/blob-reducer'

const CardsSection = () => {
  const ref = useRef(null)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const sectionOffset = document.getElementById('hello')?.offsetTop

  //   if (sectionOffset) {
  //     const handleScroll = () => {
  //       const scrollPosition = window.scrollY

  //       if (scrollPosition > 2500) {
  //         dispatch(changeOpacity(0))
  //       } else {
  //         dispatch(changeOpacity(1))
  //       }
  //     }

  //     window.addEventListener('scroll', handleScroll)
  //   }
  // }, [dispatch])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.to('#card-2', {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: '-28vw'
      })

      gsap.to('#card-3', {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: '-10vw'
      })
    }, ref.current!)

    gsap.to('#blob', {
      scrollTrigger: {
        trigger: ref.current,
        start: '90% bottom',
        end: '110% 50%',
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onEnterBack: () => {
          dispatch(changeColor('#995be5'))
        }
      },
      opacity: 0
    })

    return () => context.revert()
  }, [])

  return (
    <section ref={ref} className="h-[94vw] pt-[8vw] pb-[6vw] px-[2vw]">
      <div className="flex gap-[2vw] justify-center">
        <Card
          cardNumber="01"
          title="Explore with Curiosity"
          description="Discover breathwork and a range of other techniques that offer benefits for your mental, physical, and spiritual wellbeing"
        />
        <Card
          id="card-2"
          cardNumber="02"
          title="Live Mindfully"
          description="Ground your experience in the senses, deepening your awareness, alleviating anxiety, and gaining a brighter outlook on life"
          extraStyles="top-[35vw]"
        />
        <Card
          id="card-3"
          cardNumber="03"
          title="Transform your Reality"
          description="See the world through a different lens, one filled with infinite possibilities and opportunities for growth"
          extraStyles="top-[40vw]"
        />
      </div>

      <p className="text-[1vw] font-light max-w-[15vw] relative top-[35vw] text-justify leading-[1.3vw]">
        The act of breathing is a beautiful reminder to do what comes naturally. It’s the
        first thing we do when we come into this world, and the last thing we do when we
        leave it.
      </p>
    </section>
  )
}

export default CardsSection
