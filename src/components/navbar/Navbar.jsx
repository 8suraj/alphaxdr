import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/logo1.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar gpt3__navbar__gradient__bg">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Link to="/"><img src={logo} /> </Link>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><Link to="/">Home</Link></p>
          <p><HashLink to="/#wgpt3">What is XDR?</HashLink></p>
          <p><HashLink to="/#features">Features</HashLink></p>
          <p><HashLink to="/contactus">Contact us </HashLink></p>
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
            <p><HashLink to="/#wgpt3">What is XDR?</HashLink></p>
            <p><HashLink to="/#features">Features</HashLink></p>
            <p><Link to="/contactus">Contact us </Link></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
