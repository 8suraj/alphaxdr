import { React } from 'react';

import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';
import { Footer } from '../../containers';

const NavFooter = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);
export default NavFooter;
