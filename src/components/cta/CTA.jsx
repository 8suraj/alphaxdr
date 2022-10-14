import React from 'react';
import './cta.css';
import { Link } from 'react-router-dom';

const CTA = () => (
  <div className="alpha__cta">
    <div className="alpha__cta-content">
      {/* <p>Request Early Access to Get Started</p> */}
      <h3>Request a demo Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="alpha__cta-btn">
      <button type="button"><Link to="/contactus">Get Started</Link></button>
    </div>
  </div>
);

export default CTA;
