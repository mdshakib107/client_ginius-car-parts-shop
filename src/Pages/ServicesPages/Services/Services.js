import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Loading from '../../Shared/Loading/Loading';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    if (!services.length) {
        return <Loading></Loading>
    }

    return (
        <div id='services' className='container '>
            <h1 className='text-primary'> Survices  </h1>
            <Row xs={1} md={3} className="g-4 ">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>

        </div>
    );
};

export default Services;