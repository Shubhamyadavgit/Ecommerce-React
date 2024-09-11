import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeroSection.css'
const HeroSection = ({mydata}) => {
    const {name} = mydata 
  return (
    <div>
        <div className="container">
            <div className="hero-section">
            <p>Welcome to</p>
                <h1>{name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quibusdam et ducimus, soluta iste expedita, voluptatem perspiciatis optio ut laborum possimus sed suscipit quos delectus ea itaque iure consectetur exercitationem?</p>
                <NavLink>
                    <button>Shop now</button>
                </NavLink>
            </div>
            <div className="hero-section-image">
                <figure>
                    <img src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </figure>
            </div>
        </div>
    </div>
  )
}

export default HeroSection