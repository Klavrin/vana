import { useState, useEffect } from 'react'
import SmallDownloadButton from './small-download-button'
import scrollToElement from '../utils/scroll-to-element'

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

  const navLinks = [
    {
      link: 'About Vana',
      elementId: 'about-vana'
    },
    {
      link: 'Microdose',
      elementId: 'microdose'
    },
    {
      link: 'Journey',
      elementId: 'journey'
    },

    {
      link: 'FAQ',
      elementId: 'faq'
    },
    {
      link: 'Contact',
      elementId: 'about-vana'
    }
  ]

  return (
    <header
      className="w-screen px-[3vw] py-[1.5vw] grid grid-cols-[34.5%,65.5%] fixed z-50 transition-[top] duration-500"
      style={{ top: hideHeader ? '-4vw' : 0 }}
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
              key={link.link}
              className="text-[.8vw] uppercase opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-500"
              onClick={() => scrollToElement(link.elementId)}
            >
              {link.link}
            </li>
          ))}
        </ul>

        <SmallDownloadButton innerText="DOWNLOAD APP" />
      </nav>
    </header>
  )
}

export default Header
