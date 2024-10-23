
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
            <p>I'm currently avaliable to take on new projects.</p>
            <div className="connect-details">
              <div className="connect-detail">
                <MdOutlineMarkEmailUnread color='#D2042D' size='2rem' />
                <a href="mailto: ui.raji9@gmail.com"> ui.raji09@gmail.com </a>
              </div>
              <div className="connect-detail">
                <FaPhone color='green' size='2rem'/>
                <a href="tel:+1(913)-230-0136">+1(913)-230-01361</a>
              </div>
              <div className="connect-detail">
                <IoLogoLinkedin color='blue' size='2rem' border-radius='50px'/>
                <a href='https://www.linkedin.com/in/rajeswari-devi-namana/' target="_blank" color= 'blue'>Linkedin</a>
              </div>
              <div className="connect-detail">
                <FaGithub size='2rem'  />
                <a href='https://github.com/rajeswari-namana' target="_blank">Github</a>
              </div>
            </div>
          </div>
          <form action="" className="connect-right">
            {/* <label htmlFor=''>Your name</label> */}
            <input type='text' placeholder='Your  name' name='name'/>
            {/* <label htmlFor=''>Your email</label> */}
            <input type='email' placeholder='Your  email' name='email'/>
            {/* <label htmlFor=''>Your message</label> */}
            <textarea name="message" rows="8" placeholder='Your message'></textarea>
            <button type='submit' className="connect-send-email">Send Email</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Connect