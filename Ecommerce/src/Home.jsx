import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import './App.css'
import Trusted from './components/Trusted'
const Home = () => {
  const data = {
    name:"My Store"
  }
  return (
    <div>
        <HeroSection mydata={data} />
        <Services />
        <Trusted />
    </div>
  )
}

export default Home