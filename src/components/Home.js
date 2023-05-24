import React from 'react';

import profilePic from './images/profile.jpeg'

export default function Home() {
  return (
    <div className='home--container'>
      <h1 id='home'>Hey, I'm Xenia!</h1>
      {/* <img className='home--blob' src={blob5Svg} alt='' /> */}
      <p>I'm a front-end developer who's got the self-motivation and skills to bring your vision to life. Let's do this!</p>
      {/* <button>Find Out More</button> */}
      <h5>Scroll down for more!</h5>
      <img className='home--profileimg' src={profilePic} alt='' />
    </div>
  )
}
