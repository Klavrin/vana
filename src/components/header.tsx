import { useState, useEffect } from 'react'
import SmallDownloadButton from './small-download-button'

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false)

  useEffect(() => {
    let prevScrollPosition = window.scrollY
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      if (prevScrollPosition < currentScrollPosition) setHideHeader(true)
      else setHideHeader(false)
      prevScrollPosition = currentScrollPosition
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['About Vana', 'Microdose', 'Journey', 'FAQ', 'Contact']

  return (
    <header
      className="w-screen px-[3vw] py-[1.5vw] grid grid-cols-[34.5%,65.5%] fixed z-50 transition-[top] duration-500"
      style={{ top: hideHeader ? -100 : 0 }}
    >
      <img
        src="./src/assets/vana-logo.svg"
        alt="VANA"
        className="w-[4vw] cursor-pointer"
      />

      <nav className="flex justify-between">
        <ul className="h-full flex gap-[3vw] items-center justify-center">
          {navLinks.map((link) => (
            <li
              key={link}
              className="text-[.8vw] uppercase opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-500"
            >
              {link}
            </li>
          ))}
        </ul>

        <SmallDownloadButton innerText="DOWNLOAD APP" />
      </nav>
    </header>
  )
}

export default Header
