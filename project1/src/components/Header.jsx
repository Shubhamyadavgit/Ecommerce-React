import React from "react";
import logo from "../assets/brand_logo.png";
import { NavLink } from "react-router-dom";
import '../components/Header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar">
        <nav>
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to={"/about"}>ABOUT</NavLink>
          <NavLink to={"/location"}>LOCATION</NavLink>
          <NavLink to={"/contact"}>CONTACT</NavLink>
        </nav>
      </div>
      <button className="login">Login</button>
    </div>
  );
};

export default Header;
