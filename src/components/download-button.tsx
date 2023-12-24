import { useRef } from 'react'
import gsap from 'gsap'

const DownloadButton = () => {
  const ref = useRef(null)

  const onMouseMoveHandler = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    gsap.to(ref.current, {
      x: e.clientX - rect.left - window.innerWidth / 8,
      y: e.clientY - rect.top - window.innerWidth / 8,
      duration: 0.2
    })
  }

  const onMouseOverHandler = () => {
    gsap.to(ref.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4
    })
  }

  const onMouseLeaveHandler = () => {
    gsap.to(ref.current, {
      opacity: 0,
      scale: 0,
      duration: 0.4
    })
  }

  return (
    <div
      className="h-[13.5vw] col-span-2 text-[8vw] uppercase border-[0.09vw] border-white rounded-tl-[4vw] rounded-br-[4vw] flex cursor-pointer overflow-hidden"
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
      onMouseMove={onMouseMoveHandler}
    >
      <div className="flex justify-center items-center absolute w-[63.4vw] h-[13.5vw] rounded-tl-[4vw] rounded-br-[4vw] z-30">
        DOWNLOAD
      </div>
      <div
        ref={ref}
        className="w-[25vw] h-[25vw] bg-white relative pointer-events-none rounded-full blur-[5vw] opacity-0"
      ></div>
    </div>
  )
}

export default DownloadButton
