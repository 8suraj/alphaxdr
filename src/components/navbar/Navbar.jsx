import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Link to="/"><img src={logo} /> </Link>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is XDR?</a></p>
          <p><a href="#features">Features</a></p>
          <p><Link to="/contactus">Contact us </Link></p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><Link to="/">Home</Link></p>
            <p><a href="#wgpt3">What is XDR?</a></p>
            <p><a href="#possibility">Features</a></p>
            <p><Link to="/contactus">Contact us </Link></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
