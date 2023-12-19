import CardAppShowcase from '../components/card-app-showcase'
import DownloadButton from '../components/download-button'

const AppShowcaseSection = () => {
  return (
    <section className="px-[2vw] pb-[5.5vw] grid grid-cols-3 grid-rows-2 gap-[1.5vw]">
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
