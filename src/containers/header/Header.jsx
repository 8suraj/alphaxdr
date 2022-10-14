import React from 'react';
import ai from '../../assets/bg.png';
import './header.css';

const Header = () => (
  <div className="alpha__header section__padding " id="home">
    <div className="alpha__header-content">
      <h1 className="gradient__text"> Welcome to Alpha XDR </h1>
      <p>Tech Karimganj is glad to announce the launch of its new XDR Cybersecurity Platform. A platform which is built on multi-vector threats detection, 24X7 monitoring, threat hunting and speed of light mitigation & response.</p>
    </div>

    <div className="alpha__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
