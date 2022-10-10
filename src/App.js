import React from 'react';

import { Footer, Possibility, Features, WhatGPT3, Header } from './containers';
import { Contact, CTA, Navbar } from './components';
// import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand /> */}
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    {/* <Blog /> */}
    <Footer />
    <Contact />
  </div>
);

export default App;
