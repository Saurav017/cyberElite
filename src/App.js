import React from 'react'
import CardSection from './components/Section/CardSection/CardSection'
import SectionHeading from './components/UI/SectionHeading/SectionHeading'
import FeatureSection from './components/Section/FeatureSection/FeatureSection'
import ImpactSection from './components/Section/ImpactSection/ImpactSection'
import TitleSection from './components/Section/TitleSection/TitleSection'
import FooterSection from './components/Section/FooterSection/FooterSection'
import TestimonialSection from './components/Section/TestimonialSection/TestimonialSection'
import Navbar from './components/Section/NavbarSection/NavbarSection'
import MarketingAutomation from './components/Section/StepsSection/StepsSection'

const App = () => {
  return (
    <main className='main_container'>
    <Navbar />
      <TitleSection />
      <MarketingAutomation />
      <SectionHeading />
      <CardSection />
      <SectionHeading />
      <FeatureSection />
      <ImpactSection />
      <TestimonialSection />
      <FooterSection />
    </main>
  )
}

export default App
