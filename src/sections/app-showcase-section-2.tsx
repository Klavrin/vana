import CardAppShowcase from '../components/card-app-showcase'
import DownloadButton from '../components/download-button'

const AppShowcaseSection2 = () => {
  return (
    <section className="px-[2vw] pb-[17vw] grid grid-cols-3 grid-rows-2 gap-[1.5vw]">
      <span />
      <CardAppShowcase imgSrc="journey-1.webp" />
      <CardAppShowcase imgSrc="journey-2.webp" />
      <CardAppShowcase imgSrc="journey-3.webp" />
      <CardAppShowcase imgSrc="journey-4.webp" />
      <span />
      <DownloadButton />
      <span />
    </section>
  )
}

export default AppShowcaseSection2
