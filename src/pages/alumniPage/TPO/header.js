import React from 'react';
import { Link } from 'react-router-dom';

const TpoNav = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center">
          <h1 className="text-white text-lg font-bold">Your Logo</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-4 text-white">
            <li><Link to="/" className="hover:text-gray-300">TPO</Link></li>
            <li><Link to="/alumni" className="hover:text-gray-300">Alumni</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default TpoNav;
