import CoverSection from './sections/cover-section'
import DescriptionSection from './sections/description-section'
import BenefitsSection from './sections/benefits-section'
import CardsSection from './sections/cards-section'
import ParallaxImageSection from './sections/parallax-image-section'
import BenefitsSection2 from './sections/benefits-section-2'
import AppShowcaseSection from './sections/app-showcase-section'
import ParallaxImageSection2 from './sections/parallax-image-section-2'
import BenefitsSection3 from './sections/benefits-section-3'
import AppShowcaseSection2 from './sections/app-showcase-section-2'
import FaqSection from './sections/faq-section'

/**
 *
 * @todo: Make the scroll blurring a reusable component
 */

const App = () => {
  return (
    <main>
      <CoverSection />
      <DescriptionSection />
      <BenefitsSection />
      <CardsSection />
      <ParallaxImageSection />
      <BenefitsSection2 />
      <AppShowcaseSection />
      <ParallaxImageSection2 />
      <BenefitsSection3 />
      <AppShowcaseSection2 />
      <FaqSection />
    </main>
  )
}

export default App
