import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Footer, Possibility, Features, WhatGPT3, Header } from './containers';
// import { Contact, CTA, Navbar } from './components';
// import { CTA, Brand, Navbar } from './components';
import './App.css';
import Home from './router/home/home.components';
import Navigation from './router/navigation/navigation.components';
import { PageNotFound } from './components';

// const App = () => (
//   <div className="App">
//     <div className="gradient__bg">
//       <Navbar />
//       <Header />
//     </div>
//     <WhatGPT3 />
//     <Features />
//     <Possibility />
//     <CTA />
//     <Footer />
//     <Contact />
//   </div>
// );
const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* <Route path="/contactus" element={}/>
        <Route path="/terms" element={}/>
        <Route path="/privacy" element={}/> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </div>
);
export default App;
