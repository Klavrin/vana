import { useRef } from 'react'
import gsap from 'gsap'
import CustomButton from './custom-button'

const CookieBanner = () => {
  const ref = useRef(null)

  const onMouseMoveHandler = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    gsap.to(ref.current, {
      x: e.clientX - rect.left - window.innerWidth / 25,
      y: e.clientY - rect.top - window.innerWidth / 70,
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
    <div className="w-[62vw] h-[4.2vw] backdrop-blur-md border-[0.078vw] border-white fixed bottom-[1.5vw] right-[2.5vw] z-50 p-[0.8vw] rounded-tl-[1vw] rounded-br-[1vw] flex justify-between gap-[6vw]">
      <p className="text-[0.95vw] font-light leading-[1.3vw]">
        We use third-party cookies in order to improve your site experience and deliver
        personalized content. By using VANA®, you agree to our Cookie Policy.
      </p>
      <div className="flex gap-[0.8vw]">
        {/* <button
          className="bg-black/20 px-[2.92vw] py-[0.6vw] border-[0.078vw] border-[#837f80] font-light text-[0.8vw] rounded-tl-[0.7vw] rounded-tr-[0.15vw] rounded-br-[0.7vw] rounded-bl-[0.15vw] relative overflow-hidden"
          onMouseOver={onMouseOverHandler}
          onMouseLeave={onMouseLeaveHandler}
          onMouseMove={onMouseMoveHandler}
        >
          <div
            ref={ref}
            className="w-[3vw] h-[3vw] bg-black absolute pointer-events-none rounded-full blur-[1vw] opacity-0 -z-20"
          ></div>
          <div className="pointer-events-none z-50">DENY</div>
        </button> */}
        <CustomButton styles="px-[2.92vw]">DENY</CustomButton>
        <CustomButton styles="px-[2.92vw]">ALLOW</CustomButton>

        {/* <button
          className="bg-black/20 px-[2.92vw] py-[0.1vw] border-[0.078vw] border-white font-light text-[0.8vw] rounded-tl-[0.7vw] rounded-tr-[0.15vw] rounded-br-[0.7vw] rounded-bl-[0.15vw] relative overflow-hidden"
          // onMouseOver={onMouseOverHandler}
          // onMouseLeave={onMouseLeaveHandler}
          // onMouseMove={onMouseMoveHandler}
        >
          <div>ALLOW</div>
          <div
            ref={ref}
            className="w-[3vw] h-[3vw] bg-black absolute pointer-events-none rounded-full blur-[1vw] opacity-0 -z-20"
          ></div>
        </button> */}
      </div>
    </div>
  )
}

export default CookieBanner
