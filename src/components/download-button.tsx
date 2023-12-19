import { useEffect, useState } from 'react'

const DownloadButton = () => {
  const [circleVisible, setCircleVisible] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  return (
    <div
      id="download"
      className="h-[13.5vw] col-span-2 text-[8vw] uppercase border-[0.09vw] border-white rounded-tl-[4vw] rounded-br-[4vw] flex justify-center items-center cursor-pointer"
      onMouseOver={() => setCircleVisible(true)}
      onMouseLeave={() => setCircleVisible(false)}
      // onMouseMove={(e) => console.log('!')}
    >
      <h2 className="z-30">Download</h2>
      <div
        className="w-14 h-14 bg-gray-500 relative"
        style={{
          display: circleVisible ? 'block' : 'none'
          // transform: `translate(${cursorPosition.x}vw, ${cursorPosition.y}vw)`
          // left: `${cursorPosition.x}vw`,
          // top: `${cursorPosition.y}vw`
        }}
      />
    </div>
  )
}

export default DownloadButton
