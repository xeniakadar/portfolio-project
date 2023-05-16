import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import linkedinSVG from './images/linkedin.svg';
import githubSVG from './images/github.svg';
import mailSVG from './images/mail.svg';


export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p> Find me on GitHub and LinkedIn and feel free to contact me anytime!</p>
      <a href='https://www.linkedin.com/in/xeniakadar/' target="_blank"><img className='contact--img' src={linkedinSVG} alt='linkedIn link' /></a>
      <a href='https://github.com/xeniakadar' target="_blank"><img className='contact--img' src={githubSVG} alt='linkedIn link' /></a>
      <a href="mailto:xenia.kadar@gmail.com"><img className='contact--img' src={mailSVG} alt='send xenia an emial' /> </a>
    </div>
  )
}
