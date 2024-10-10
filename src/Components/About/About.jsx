import React from 'react'
import "./About.css"
import profile_img from '../../assets/ProfileImg.png';

const About = () => {
    return (
        <div className='about-container' id='about'>
        <div className='about'>
            <div className="about-title">
                <h1>About</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt='' />
                </div>
                <div className="about-right">
                    <div className='about-para'>
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                    </div>

                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement"><h1>9</h1><p>Years of experience</p></div>
                <hr/>
                <div className="about-achievement"><h1>9</h1><p>Years of experience</p></div>
                <hr/>
                <div className="about-achievement"><h1>9</h1><p>Years of experience</p></div>
            </div>
        </div>
        </div>
    )
}

export default About