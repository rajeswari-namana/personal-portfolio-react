import React from 'react';
import './Hero.css';
import profile_img from '../../assets/ProfileImg.png';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt=''/>
      <h1><span>Hi, I am Raji,</span> frontend developer based in USA.</h1>
      <p>Hi, I am Raji, frontend developer based in USA.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">Resume</div>
      </div>
      </div>
  )
}

export default Hero