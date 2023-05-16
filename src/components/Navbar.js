import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>Xenia Kadar</h1>
      <NavLink className={'nav--links'} to="/">Home</NavLink>
    </nav>
  )
}
