import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
const About = () => {
  const data = {
    name : "Ecommerce"
  }
  return (
    <div>
      <HeroSection mydata = {data} />
      <Services />
    </div>
  )
}

export default About