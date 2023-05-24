import React from 'react';

import shoppingcartGif from './images/projects/shoppingcart.gif';
import socmediaFig from './images/projects/soc-media-clone.gif';
import memorycardGif from './images/projects/memorycard.gif';
import calculatorFig from './images/projects/calculator.gif';

import htmlSVG from './images/html.svg';
import cssSVG from './images/css.svg';
import jsSVG from './images/js.svg';
import reactSVG from './images/react.svg';
import firebaseSVG from './images/firebase.svg';
import squigglySVG from './images/squiggly.svg';

export default function Projects() {
  return (
    <div className='projects--container'>

      <h1 id='projects'>Projects</h1>

      <div className='projects--card'>
        <h2>Social Media Clone</h2>
        <img className='projects--demo' src={socmediaFig} alt='website-demo' />
        <div className='projects--leftcol'>
          <p>This application is a complete photo-sharing social clone that incorporates Firebase as its backend technology and employs React, ReactRouter, and CSS for its frontend development. It allows users to upload images along with captions and also enables them to like and comment on posts made by other users.</p>
          <div className='projects--tech'>
            <img className='tech--img' src={reactSVG} alt='' />
            <img className='tech--img' src={firebaseSVG} alt='' />
          </div>
          <a href='https://github.com/xeniakadar/soc-clone' target="_blank"><button>Repository</button></a>

        </div>
      </div>

    <img className='projects--squigglysvg' src={squigglySVG} alt='' />

      <div className='projects--card'>
        <h2>Shopping Cart project</h2>
        <img className='projects--demo' src={shoppingcartGif} alt='website-demo' />
        <div className='projects--leftcol'>
          <p>This is a fake online store specializing in water bottles. It is a frontend-only application constructed using React, React Router, and CSS. Users have the ability to explore the available products, add items to their shopping cart, and remove them as well. Additionally, users can take advantage of free shipping by signing up for the (fictional) mailing list.</p>
          <div className='projects--tech'>
            <img className='tech--img' src={reactSVG} alt='' />
          </div>
          <a href='https://github.com/xeniakadar/project-shopping-cart' target="_blank"><button>Repository</button></a>
        </div>
      </div>

      <img className='projects--squigglysvg' src={squigglySVG} alt='' />

      <div className='projects--card'>
        <h2>Memorycard Game</h2>
          <img className='projects--demo' src={memorycardGif} alt='website-demo' />
        <div className='projects--leftcol'>
          <p>The memorycard game challenges players' memory skills by shuffling images after each selection. The objective is to achieve the highest possible score by avoiding selecting the same image more than once. The game displays both the current and best scores of the player.</p>
          <div className='projects--tech'>
            <img className='tech--img' src={reactSVG} alt='' />
          </div>
          <a href='https://github.com/xeniakadar/memorycard-project' target="_blank"><button>Repository</button></a>
        </div>
      </div>

      <img className='projects--squigglysvg' src={squigglySVG} alt='' />

      <div className='projects--card'>
        <h2>iPhone Calculator Clone</h2>
          <img className='projects--demo' src={calculatorFig} alt='website-demo' />
        <div className='projects--leftcol'>
          <p>This project is really close to my heart as one of my first "big" adventures in the world of coding. It was the start of my journey into using JavaScript, CSS, and HTML and I think it turned out pretty great.</p>
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
