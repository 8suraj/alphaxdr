import React from 'react';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import gpt3Logo from '../../assets/alpha.png';
import './footer.css';
// import { BrowserRouter } from 'react-router-dom';

function Footer() {
  return (

    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
      </div>
      {/* <div className="gpt3__footer-btn">
              <p>Request Early Access</p>
            </div> */}
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>Team Karimganj, <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p href="">LinkedIn</p>
          <p href="">Facebook</p>
          {/* <p>Counters</p>
            <p>Contact</p> */}
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p> <a href="#popup">Contact us </a></p>
        </div>
        <div className="gpt3__footer-links_div">
          {/* <BrowserRouter>
            <h4 href>Get in touch</h4>
          </BrowserRouter> */}
          <p>Team Karimganj</p>
          {/* <p>085-132567</p>
            <p>info@payme.net</p> */}
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>Team Karimganj All rights reserved.</p>
      </div>
      {/* <Button text="click" /> */}
    </div>
  );
}

export default Footer;
