import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="alpha__whatalpha section__margin" id="walpha">
    <div className="alpha__whatalpha-feature">
      <Feature title="What is XDR" text="XDR (extended detection and response) collects and automatically correlates data across multiple security layers – email, endpoint, server, cloud workload, and network. This allows for faster detection of threats and improved investigation and response times through security analysis." />
    </div>
    <div className="alpha__whatalpha-container">
      <Feature title="Incidence Response" text="The incident response process entails identifying an attack, determining its severity and prioritising it, investigating and mitigating the attack, restoring operations, and taking preventative measures to ensure it does not happen again." />
      <Feature title="NDR" text="NDR helps to detect patterns and anomalies in network traffic, allowing them to detect suspicious or malicious traffic. NDR security solutions monitor network traffic and extract patterns that can indicate anomalous or suspicious connections." />
      <Feature title="EDR" text="EDR is a layered, integrated solution to endpoint security that combines rule-based automated response with real-time continuous monitoring and endpoint data analytics." />
      <Feature title="Advanced Threat Hunting" text="Adversaries build evasion techniques into their exploits and malware to work around or disable traditional security tools. Automated threat hunting detects polymorphic malwares and customized attack launched by advanced threat actors." />
    </div>
  </div>
);

export default WhatGPT3;
