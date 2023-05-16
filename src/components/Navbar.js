import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import blobSvg from './images/blob.svg';
import menuSvg from './images/menu.svg';
import closeSvg from './images/close.svg';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  function handleMenuClick() {
    setMenuActive(prev => !prev);
    console.log(menuActive)
  }

  function handleNavClick() {
    if (menuActive === true) {
      setMenuActive(false);
    }
  }



  return (
    <nav>
      <img className='navbar--blob' src={blobSvg} alt='' />
      <div className='navbar--left'>
        <h1 className='navbar--logo'>X</h1>
        <h1>Xenia Kadar</h1>
      </div>
      <img className={`navbar--menuimg ${menuActive? "menu-open" : ""}`} onClick={handleMenuClick} src={menuSvg} alt='open navigation' />
      <div className={`navbar--items ${menuActive ? "menu-open" : ""}`} >
        <img className={`navbar--closeimg ${menuActive? "" : "menu-open"}`} onClick={handleMenuClick} src={closeSvg} alt='close navigation' />
        <a href='#home' onClick={handleNavClick}>Home</a>
        <a href='#about' onClick={handleNavClick}>About</a>
        <a href='#projects' onClick={handleNavClick}>Projects</a>
        <a href='#contact' onClick={handleNavClick}>Contact</a>
      </div>
    </nav>
  )
}
