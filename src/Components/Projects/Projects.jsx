import React from 'react'
import './Projects.css'
import Projects_Data from './Projects_data'; 
import { HiArrowCircleRight } from "react-icons/hi";

const Projects = () => {
    const projectsCard = Projects_Data.map(service => 
        <div key={service.id} className='projects-card'>
            <h2>{service.title}</h2>
            <p>{service.body}</p>
            <div className="projects-readmore">
                <p>Read more</p>
            <HiArrowCircleRight />
            </div>
            </div>
            
    )
    return (
        <div className='projects' id='projects'>
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            <div className="projects-container">
{projectsCard}
            </div>
        </div>
    )
}

export default Projects