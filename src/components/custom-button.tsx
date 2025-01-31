import { useRef } from 'react'
import gsap from 'gsap'

type CustomButtonProps = {
  children: string
  styles?: string
  xDivisor?: number
  yDivisor?: number
}

const CustomButton = ({
  children,
  styles,
  xDivisor = 22,
  yDivisor = 100
}: CustomButtonProps) => {
  const ref = useRef(null)

  const onMouseMoveHandler = (e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    gsap.to(ref.current, {
      x: e.clientX - rect.left - window.innerWidth / xDivisor,
      y: e.clientY - rect.top - window.innerWidth / yDivisor,
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
    <button
      className={
        'px-[1.1vw] py-[.43vw] bg-black/20 flex items-center text-[.8vw] border-[0.09vw] border-white rounded-[.15vw] rounded-tl-[.6vw] rounded-br-[.6vw] cursor-pointer select-none relative overflow-hidden ' +
        styles
      }
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
      onMouseMove={onMouseMoveHandler}
    >
      <div
        ref={ref}
        className="w-[3vw] h-[3vw] bg-black absolute pointer-events-none rounded-full blur-[1vw] opacity-0 -z-20"
      ></div>
      {children}
    </button>
  )
}

export default CustomButton
