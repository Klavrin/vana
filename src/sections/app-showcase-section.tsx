import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useDispatch } from 'react-redux'
import { changeColor } from '../store/reducers/blob-reducer'
import CardAppShowcase from '../components/card-app-showcase'
import DownloadButton from '../components/download-button'

const AppShowcaseSection = () => {
  const ref = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    gsap.to('#blob', {
      scrollTrigger: {
        trigger: ref.current,
        start: '90% bottom',
        end: '110% 50%',
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onEnterBack: () => {
          dispatch(changeColor('#dd8755'))
        }
      },
      opacity: 0
    })
  }, [])

  return (
    <section
      ref={ref}
      className="px-[2vw] pb-[5.5vw] grid grid-cols-3 grid-rows-2 gap-[1.5vw]"
    >
      <CardAppShowcase imgSrc="microdose-1.webp" />
      <CardAppShowcase imgSrc="microdose-2.webp" />
      <span />
      <span />
      <CardAppShowcase imgSrc="microdose-3.webp" />
      <CardAppShowcase imgSrc="microdose-4.webp" />
      <span />
      <DownloadButton />
    </section>
  )
}

export default AppShowcaseSection
