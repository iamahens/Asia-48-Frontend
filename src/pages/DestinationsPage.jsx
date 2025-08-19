import React from 'react'
import AboutHero from '../components/DestinationPage/AboutHero'
import VisaFinder from '../components/DestinationPage/VisaFinder'
import TopCountries from '../components/HomePage/TopCountriesSection'
import Map from '../components/HomePage/Map'
import CtaSection from '../components/HomePage/CtaSection'
import Footer from '../components/HomePage/Footer'

const DestinationsPage = () => {
  return (
    <>
    <AboutHero/>
    <VisaFinder/>
    <CtaSection/>
    <TopCountries/>
    
    <Map/>
    <Footer/>
    </>
  )
}

export default DestinationsPage
