import React from 'react';
import './Home.css';
import profile_img from '../../assets/ProfileImg.png';

const Home = () => {
  return (
    <div className='home' id='home'>
      <img src={profile_img} alt=''/>
      <h1><span>Hi, I am Raji,</span> frontend developer based in USA.</h1>
      <p>Hi, I am Raji, frontend developer based in USA.</p>
      <div className="home-action">
        <div className="home-connect">Connect</div>
        <div className="home-resume">Resume</div>
      </div>
      </div>
  )
}

export default Home