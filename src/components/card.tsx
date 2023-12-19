// import { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'

type CardProps = {
  cardNumber: string
  title: string
  description: string
  extraStyles?: string
  id?: string
}

const Card = ({ cardNumber, title, description, extraStyles, id }: CardProps) => {
  return (
    <div
      id={id}
      className={
        'w-1/3 h-[36vw] flex flex-col justify-between border-[0.09vw] border-white rounded-tl-[4vw] rounded-br-[4vw] px-[2vw] py-[4vw] relative ' +
        extraStyles
      }
    >
      <h5 className="text-[1.5vw]">{cardNumber}</h5>
      <div>
        <h2 className="text-[3vw] uppercase leading-[3vw] mb-[2vw]">{title}</h2>
        <p className="text-[1vw] text-justify">{description}</p>
      </div>
    </div>
  )
}

export default Card
