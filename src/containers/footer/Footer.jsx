import React from 'react';
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import gpt3Logo from '../../assets/logo1.png';
import './footer.css';

function Footer() {
  return (

    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        {/* <h1 className="gradient__text">Do you want to step in to the future before others?</h1> */}
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <Link to="/"><img src={gpt3Logo} alt="gpt3_logo" /></Link>
          <p>AlphaXDR, <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p><a href="https://www.linkedin.com/company/teamkarimganj/mycompany/" target="_blannk">LinkedIn</a></p>
          <p><a href="https://www.facebook.com/teamkarimganj" target="_blannk">Facebook</a></p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p><Link to="/terms">Terms & Conditions</Link> </p>
          <p><Link to="/privacy">Privacy Policy</Link></p>
          <p> <Link to="/contactus">Contact us </Link></p>
        </div>
        <div className="gpt3__footer-links_div">
          <p>Team Karimganj</p>
          <p><a href="tel:+913843356533">+91 3843356533</a></p>
          <p><a href="https://goo.gl/maps/Gb664d15cqSNnmXD7" target="_blannk">📍 24.8689592,92.3484214</a></p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>Tech Karimganj All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
