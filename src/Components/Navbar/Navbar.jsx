import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar' >
            <h1>Raji</h1>
            <ul className="nav-menu">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
            <div className="nav-connect">
                <a href="#connect">Connect</a>
            </div>
        </div>
    )
}

export default Navbar