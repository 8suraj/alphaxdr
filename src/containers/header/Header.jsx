import React from 'react';
// import people from '../../assets/people.png';
import ai from '../../assets/bg.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding " id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> Welcome to Alpha XDR </h1>
      <p>Team Karimganj is glad to announce the launch of its new XDR Cybersecurity Platform. A platform which is built on multi-vector threats detection, 24X7 monitoring, threat hunting and speed of light mitigation & response.</p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
