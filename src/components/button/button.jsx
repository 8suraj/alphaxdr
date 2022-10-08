import React from 'react';
import Popupp from '../popup/popup';

const button = () => {
  const handle = (e) => {
    e.preventDefault();
    return (<Popupp vis="visible" opa="1" />);
  };

  return (
    <button type="button" onClick={handle}>text</button>
  );
};
export default button;
