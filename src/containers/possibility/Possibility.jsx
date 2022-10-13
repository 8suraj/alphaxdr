import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>A scalable platform which will kill the traditional alert fatigue - SOC problem and will only notify validated cyber security breaches and incidents to its customers which is again bundled in an easy-to-deploy model and cost-effective solutions.</p>
    </div>
  </div>
);

export default Possibility;
