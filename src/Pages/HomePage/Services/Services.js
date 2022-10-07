import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(services)
    return (
        <div>
            <h1>This Is Survices Page </h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;