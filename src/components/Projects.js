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
    <div>

      <h1 id='projects'>Projects</h1>
      <div>
        <h1>Social Media Clone</h1>
        <p>A full stack photosharing social clone. It uses Firebase for its back-end and React, ReactRouter and CSS for its front-end. Users can add images with captions, as well as like and comment under other users' posts.</p>
        <p>
          <img className='tech--img' src={reactSVG} alt='' />
          <img className='tech--img' src={firebaseSVG} alt='' />
        </p>
        <a href='https://github.com/xeniakadar/soc-clone'><button>Repository</button></a>
        <img src={socmediaFig} alt='website-demo' />
      </div>
      <div>
        <h1>Shopping Cart project</h1>
        <p>A fake water-bottle store. Front-end only, built using React, React Router and CSS. The user can browse, add and remove items from the cart, and even add free shipping by signing up to the (fake) mailing list.</p>
        <p>
          <img className='tech--img' src={reactSVG} alt='' />
        </p>
        <a href='https://github.com/xeniakadar/project-shopping-cart'><button>Repository</button></a>
        <img src={shoppingcartGif} alt='website-demo' />
      </div>
      <div>
        <h1>Memorycard Game</h1>
        <p>Memory Card Game is a game that challenges players' memory skills by shuffling images after each selection. The objective is to achieve the highest possible score by avoiding selecting the same image more than once. The game displays both the current and best scores of the player.</p>
        <p>
          <img className='tech--img' src={reactSVG} alt='' />
        </p>
        <a href='https://github.com/xeniakadar/memorycard-project'><button>Repository</button></a>
        <img src={memorycardGif} alt='website-demo' />

      </div>
      <div>
        <h1>iPhone Calculator Clone</h1>
        <p>This was one of my first "big" projects where I used Javascript, CSS and HTML.</p>
        <p>
          <img className='tech--img' src={htmlSVG} alt='' />
          <img className='tech--img' src={cssSVG} alt='' />
          <img className='tech--img' src={jsSVG} alt='' />
        </p>
        <a href='https://github.com/xeniakadar/calculator-project'><button>Repository</button></a>
        <img src={calculatorFig} alt='website-demo' />
      </div>
       <a href='https://github.com/xeniakadar' target="_blank">Click Here for more projects!</a>
    </div>
  )
}
