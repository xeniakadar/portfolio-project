import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';

import htmlSVG from './images/html.svg';
import cssSVG from './images/css.svg';
import jsSVG from './images/js.svg';
import jestSVG from './images/jest.svg';
import reactSVG from './images/react.svg';
import firebaseSVG from './images/firebase.svg';
import gitSVG from './images/git.svg';
import webpackSVG from './images/webpack.svg';
import npmSVG from './images/npm.svg';
import topwaveSvg from './images/wave.svg';
import bottomwaveSvg from './images/wave2.svg';

export default function About() {
  return (
    <div className='about--container'>
      <h1 id='about'>About</h1>
      <h2>Who <span>are</span> you Xenia?</h2>
      <img className='about--topwave' src={topwaveSvg} alt='' />
      <p>
        I’m a creative problem-solver who is committed to lifelong learning
        with a passion for React, ReactNative and all things <span>webby devvy</span>.
      </p>
      <div className='about--tech-container'>
        <div className='about--tech-item'>
          <img className='about--tech--img' src={htmlSVG} alt='' />
          <h5>HTML 5</h5>
        </div>
        <div className='about--tech-item'>
          <img className='about--tech--img' src={cssSVG} alt='' />
          <h5>CSS</h5>
        </div>
        <div className='about--tech-item'>
          <img className='about--tech--img' src={jsSVG} alt='' />
          <h5>Javascript</h5>
        </div>
        <div className='about--tech-item'>
          <img className='about--tech--img' src={reactSVG} alt='' />
         <h5>React.js</h5>
        </div>
        <div className='about--tech-item'>
         <img className='about--tech--img' src={firebaseSVG} alt='' />
          <h5>Firebase</h5>
        </div>
        <div className='about--tech-item'>
          <img className='about--tech--img' src={jestSVG} alt='' />
          <h5>Jest</h5>
        </div>
        <div className='about--tech-item'>
          <img className='about--tech--img' src={gitSVG} alt='' />
          <h5>Git</h5>
        </div>
        <div className='about--tech-item'>
          <img className='about--tech--img' src={webpackSVG} alt='' />
          <h5>Webpack</h5>
        </div>
        <div className='about--tech-item'>
          <img className='about--tech--img' src={npmSVG} alt='' />
          <h5>npm</h5>
        </div>
      </div>
      <img className='about--bottomwave' src={bottomwaveSvg} alt='' />
    </div>
  )
}
