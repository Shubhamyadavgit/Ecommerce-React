import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
  return (
    <nav className="nav">
    <NavLink  to="/" className="nav-link">
    <img className="logo" src="https://imgs.search.brave.com/NhwJPEtwR8eI0ek3bNeWqAy568wx83dPQcmrUIelVXw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbWFya2V0aW5n/Ljk5c3RhdGljLmNv/bS9pbWFnZXMvY2F0/ZWdvcnlQYWdlL2hl/cm8vbG9nby13ZWJz/aXRlLXNxdWFyZXNw/YWNlLzA2LXRoaXNp/c3JlbWVkeS5qcGc" alt="Logo" />
    </NavLink>

    <div className="items">
      <NavLink className="NavItems" to={"/"}>Home</NavLink>
      <NavLink className="NavItems" to={"/about"}>About</NavLink>
      <NavLink className="NavItems" to={"/contact"}>Contact</NavLink>
      <NavLink className="NavItems" to={"/cart"}>
        <span><ShoppingCartIcon/><span className="num">2</span></span>
      </NavLink>
      </div>
    </nav>
  );
};

export default Header;
