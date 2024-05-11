import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        
    <h1 className="glow">Anime verse</h1>
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={hamburger}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`menu cf ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to='/'>
            Home
            </Link>
          </li>
          <li>
            <Link to='/gallery'>
            Anime
            
            </Link>
            
          </li>
          <li>
            <Link to='/blog'>
            Blog
            </Link>
          </li>
          <li>
            <a href="">Videos</a>
          </li>
          <li>
          <Link to='/about'>
            Contact
            
            </Link>
            
          </li>
        </ul>
        
      </header>
      
    </>
  );
};

export default Navbar;
