import React from 'react';// Import your CSS file for styling
const Backdrop = ({ show, onClick }) => (
  show ? <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20" onClick={onClick}></div> : null
);

export default Backdrop;
