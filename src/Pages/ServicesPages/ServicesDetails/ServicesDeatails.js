import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { json, Link, useParams } from 'react-router-dom';

const ServicesDeatails = () => {
    const { serviceId } = useParams();
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5001/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [])

    return (
        <div>
            <h2>This is Services Deatails {singleService?.name}</h2>
            <Link to='/chackout'><Button variant="primary" type="submit">
                Plase Chack Out
            </Button></Link>
        </div>
    );
};

export default ServicesDeatails;