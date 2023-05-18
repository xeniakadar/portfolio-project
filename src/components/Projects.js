import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';

import shoppingcartGif from './images/projects/shoppingcart.gif';
import socmediaFig from './images/projects/soc-media-clone.gif';
import memorycardGif from './images/projects/memorycard.gif';
import calculatorFig from './images/projects/calculator.gif';

import htmlSVG from './images/html.svg';
import cssSVG from './images/css.svg';
import jsSVG from './images/js.svg';
import reactSVG from './images/react.svg';
import firebaseSVG from './images/firebase.svg';


export default function Projects() {
  return (
    <div className='projects--container'>

      <h1 id='projects'>Projects</h1>

      <div className='projects--card'>
        <h2>Social Media Clone</h2>
        <img className='projects--demo' src={socmediaFig} alt='website-demo' />
        <div className='projects--leftcol'>
          <p>A full stack photosharing social clone. It uses Firebase for its back-end and React, ReactRouter and CSS for its front-end. Users can add images with captions, as well as like and comment under other users' posts.</p>
          <div className='projects--tech'>
            <img className='tech--img' src={reactSVG} alt='' />
            <img className='tech--img' src={firebaseSVG} alt='' />
          </div>
          <a href='https://github.com/xeniakadar/soc-clone' target="_blank"><button>Repository</button></a>

        </div>
      </div>

      <div className='projects--card'>
        <h2>Shopping Cart project</h2>
        <img className='projects--demo' src={shoppingcartGif} alt='website-demo' />
        <div className='projects--leftcol'>
          <p>A fake water-bottle store. Front-end only, built using React, React Router and CSS. The user can browse, add and remove items from the cart, and even add free shipping by signing up to the (fake) mailing list.</p>
          <div className='projects--tech'>
            <img className='tech--img' src={reactSVG} alt='' />
          </div>
          <a href='https://github.com/xeniakadar/project-shopping-cart' target="_blank"><button>Repository</button></a>
        </div>
      </div>

      <div className='projects--card'>
        <h2>Memorycard Game</h2>
          <img className='projects--demo' src={memorycardGif} alt='website-demo' />
        <div className='projects--leftcol'>
          <p>Memory Card Game is a game that challenges players' memory skills by shuffling images after each selection. The objective is to achieve the highest possible score by avoiding selecting the same image more than once. The game displays both the current and best scores of the player.</p>
          <div className='projects--tech'>
            <img className='tech--img' src={reactSVG} alt='' />
          </div>
          <a href='https://github.com/xeniakadar/memorycard-project' target="_blank"><button>Repository</button></a>
        </div>
      </div>

      <div className='projects--card'>
        <h2>iPhone Calculator Clone</h2>
          <img className='projects--demo' src={calculatorFig} alt='website-demo' />
        <div className='projects--leftcol'>
          <p>This was one of my first "big" projects where I used Javascript, CSS and HTML.</p>
          <div className='projects--tech'>
            <img className='tech--img' src={htmlSVG} alt='' />
            <img className='tech--img' src={cssSVG} alt='' />
            <img className='tech--img' src={jsSVG} alt='' />
          </div>
          <a href='https://github.com/xeniakadar/calculator-project' target="_blank"><button>Repository</button></a>
        </div>
      </div>

       <a className='projects--more' href='https://github.com/xeniakadar' target="_blank">Click here for more projects!</a>
    </div>
  )
}
