import React from 'react';
import Contact from '../contact/contact';

const popup = (vis, op) => (
  <Contact style={{ visibility: vis,
    opacity: op }}
  />
);
export default popup;

