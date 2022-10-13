import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '../../components';
import { Footer } from '../../containers';

const Navigation = () => (
  <>
    <div className="gradient__bg">
      <Navbar />
    </div>
    <Outlet />
    <Footer />
  </>

);
export default Navigation;
