import React from 'react'
import AboutHero from '../components/AboutPage/AboutHero'
import MissionStatement from '../components/AboutPage/MissionStatement'
import WhatWeDo from '../components/AboutPage/WhatWeDo'
import WhyChooseUs from '../components/AboutPage/WhyChooseUs'
import WhoWeAre from '../components/AboutPage/WhoWeAre'
import HowWeHelp from '../components/AboutPage/HowWeHelp'
import GetInTouch from '../components/AboutPage/GetInTouch'
import Footer from '../components/HomePage/Footer'
import VisaComparisonSection from '../components/HomePage/VisaComparisonSection'


const AboutPage = () => {
  return (
    <>
     <AboutHero/>
     <MissionStatement/>
     <WhoWeAre/>
     <WhatWeDo/>
     <WhyChooseUs/>
      <VisaComparisonSection/>
     <HowWeHelp/>
     <GetInTouch/>
     <Footer/>
   
    </>
  )
}

export default AboutPage
