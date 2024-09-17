import React from "react";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";
import shoe from '../assets/shoe_image.png';
import '../components/Hero.css'
const Hero = () => {
  return (
    <div className="main">
      <div className="left-container">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="buttons">
          <button className="but1">Shop Now</button>
          <button className="but2">Category</button>
        </div>
        <div className="shop">
          <p>Also Available on</p>
          <div className="images">
            <img src={flipkart} alt="flipkart" />
            <img src={amazon} alt="flipkart" />
          </div>
        </div>
      </div>
      <div className="right-container">
        <img src={shoe} alt="" />
      </div>
    </div>
  );
};

export default Hero;
