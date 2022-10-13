import React from 'react';
import Feature from '../../components/feature/Feature';
import FeatureImage from '../../assets/ai_bg.png';
import './features.css';

const featuresData = [
  {
    title: 'Advance Network Protection and Response',
    text: 'Advance Network Protection and Response: An attack surface reduction feature that prevents users from accessing suspicious and known malicious network addresses.',
  },
  {
    title: 'Endpoint Detection and Response',
    text: 'Endpoint Detection and Response: EDR provides real-time continuous monitoring by combining a collection of endpoint data with rules-based automated response and analysis capabilities.',
  },
  {
    title: 'Automated Threat Hunting',
    text: 'Automated Threat Hunting: Cyber threat Hunting, "similar to real-world hunting," allows users to identify ongoing non-remediated or unknown threats within a cyber network.',
  },
  {
    title: 'Advanced Incidence Response and Remediation',
    text: 'Advanced Incidence Response and Remediation: this feature allows users to prepare for a potential cyber threat by identifying, containing, and finally eradicating the menace. Remediation happens after the danger is eliminated.',
  },
  {
    title: 'Cyber Threat Intelligence',
    text: "Cyber Threat Intelligence: This feature allows users to gather information from various sources and analyze the data to understand the current or potential cyber threats against an organization's network",
  },
  {
    title: 'Machine Learning',
    text: 'This platform leverages custom use cases which are enriched using deep learning neural networks engine and Artificial Intelligence algorithms to correlate all the data sources and detect threats in a single pane of investigation.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      {/* <p>Request Early Access to Get Started</p> */}
      <img src={FeatureImage} alt="feature" width={500} height={500} />
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
