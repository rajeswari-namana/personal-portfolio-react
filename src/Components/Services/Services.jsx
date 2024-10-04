import React from 'react'
import './Services.css'
import Services_Data from './Services_data'; 
import { HiArrowCircleRight } from "react-icons/hi";

const Services = () => {
    const servicesCard = Services_Data.map(service => 
        <div key={service.id}>
            <h2>{service.title}</h2>
            <p>{service.body}</p>
            <div className="services-readmore">
                <p>Read more</p>
            <HiArrowCircleRight />
            </div>
            </div>
            
    )
    return (
        <div className='services'>
            <div className="services-title">
                <h1>My Services</h1>
            </div>
            <div className="services-container">
{servicesCard}
            </div>
        </div>
    )
}

export default Services