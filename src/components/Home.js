import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';

import blob5Svg from './images/blob5.svg';



export default function Home() {
  return (
    <div className='home--container'>
      <h1 id='home'>Hey, I'm Xenia</h1>
      {/* <img className='home--blob' src={blob5Svg} alt='' /> */}
      <p>I'm a self-motivated front-end developer who might help you build your next website!</p>
      {/* <button>Find Out More</button> */}
      <h5>Scroll down for more</h5>
    </div>
  )
}
