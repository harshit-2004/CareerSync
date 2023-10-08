import React from 'react';
import './App.css';
import Linemake from './first_page/Linemake.js';

function App() {
  return (
    <div className='body'>
      <div className='loginclass'>
        <button id='loginbutton' src="">LOGIN</button>
      </div>
      <div className='logoclass1'>
        <img id='logoelement1' src="/careersynclogo.svg" alt="CareerSync Logo" />
      </div>
      <Linemake thickness='90'/>
      <div className='gif-and-text'>
        <img src='/staffing.gif'></img>
        <div className='text-1024'>
          <div id='text-1'>
            <b>Crafting</b> <u>Careers</u>
          </div>
          <div id='text-1'>
            <b>Connecting</b> <u>Futures</u>
          </div>
        </div>
      </div>
      <Linemake thickness='95'/>
      <div className='line2'>
        <div id='line2making'/>
      </div>
      <div className='line2'>
        <div id='line3making'/>
      </div>

      <Linemake thickness='80'/>
      <div className='bigbox'>
        <div className='text2'>
          <div id='text2-1'>
            Keep track of All Your
          </div>
          <div id='text2-2'>
            Application
          </div>
          <div id='text2-3'>
            At One Place
          </div>
        </div>
        <img id='setimage3' src='/202101-Talent-Trends-1_bi4qgd.gif'></img>
      </div>

      <Linemake thickness='80'/>
      <div className='line2'>
        <div id='line4making'/>
      </div>
      <Linemake thickness='95'/>

      <div>
        
      </div>
    </div>
  );
}

export default App;
