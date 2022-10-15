import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServicesDeatails = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h2>This is Services Deatails {serviceId}</h2>
            <Link to='/chackout'><Button variant="primary" type="submit">
                Plase Chack Out
            </Button></Link>
        </div>
    );
};

export default ServicesDeatails;