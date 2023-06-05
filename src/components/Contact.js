import React from 'react';
import linkedinSVG from './images/linkedin.svg';
import githubSVG from './images/github.svg';
import mailSVG from './images/mail.svg';
import topwaveSvg from './images/wave.svg';

export default function Contact() {
  return (
    <>
      <img className='about--topwave' src={topwaveSvg} alt='' />
      <div className='contact--container'>
        <h1 id='contact'>Contact</h1>
        <p> Find me on LinkedIn and Github, or drop me an email, and don't hesitate to reach out! </p>
        <a href='https://www.linkedin.com/in/xeniakadar/' target="_blank"><img className='contact--img' src={linkedinSVG} alt='linkedIn link' /></a>
        <a href='https://github.com/xeniakadar' target="_blank"><img className='contact--img' src={githubSVG} alt='linkedIn link' /></a>
        <a href="mailto:xenia.kadar@gmail.com"><img className='contact--img' src={mailSVG} alt='send xenia an emial' /> </a>
      </div>
    </>
  )
}
