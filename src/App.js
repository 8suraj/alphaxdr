import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import NavF from './routes/nav/nav';
// import { Footer, Possibility, Features, WhatGPT3, Header } from './containers';
import { Contact, Four0Four } from './components';
// import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<NavF />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Four0Four />} />
    </Route>
  </Routes>
);
  // <div className="App">
  //   <div className="gradient__bg">
  //     <Navbar />
  //     <Header />
  //   </div>
  //   {/* <Brand /> */}
  //   <WhatGPT3 />
  //   <Features />
  //   <Possibility />
  //   <CTA />
  //   {/* <Blog /> */}
  //   <Footer />
  //   <Contact />
  // </div>
export default App;
