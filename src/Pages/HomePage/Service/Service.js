import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, description, img, price } = service;
    return (
        <div className='service-cart'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{description}</p>
            <button>Book Now</button>
        </div>
    );
};

export default Service;