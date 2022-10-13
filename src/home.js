import React from 'react';

import { Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA } from './components';
// import { CTA, Brand, Navbar } from './components';

import './App.css';

const Home = () => (
  <div className="App">
    <div className="gradient__bg">
      <Header />
    </div>
    {/* <Brand /> */}
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    {/* <Blog /> */}
    {/* <Contact /> */}
  </div>
);

export default Home;
