
import React from 'react'
import "./Connect.css"
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Connect = () => {
  return (
    <div id='connect' className='connect-container'>
      <div className='connect'>
        <div className="connect-title"><h1>Get In Touch</h1></div>
        <div className="connect-section">
          <div className="connect-left">
            <h1>Lets Talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want me to work on.
              You can contact anytime.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <MdOutlineMarkEmailUnread />
                <a href="mailto: ui.raji09@gmail.com"> ui.raji09@gmail.com </a>
              </div>
              <div className="contact-detail">
                <FaPhone />
                <a href="tel:+1(913)-230-0136">+1(913)-230-01361</a>
              </div>
              <div className="contact-detail">
                <IoLogoLinkedin color='blue' size='2rem' border-radius='50px'/>
                <a href='https://www.linkedin.com/in/rajeswari-devi-namana/' target="_blank" color= 'blue'>Linkedin</a>
              </div>
              <div className="contact-detail">
                <FaGithub size='2rem'  />
                <a href='https://github.com/rajeswari-namana' target="_blank">Github</a>
              </div>
            </div>
          </div>
          <div className="connect-right">
            <h1>hiiii</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Connect