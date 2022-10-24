import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, description, img, price } = service;
    const navigate = useNavigate()
    const navigateServiceDetailId = (id) => {
        navigate(`/service/${id}`)
    }

    return (
        <div className=''>

            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button onClick={() => navigateServiceDetailId(_id)} varient='prymary'>Go Details N</Button>
                        {/* <Link to={`/service/${id}`}>
                            <Button varient='prymary'>Go Details</Button>
                        </Link> */}

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;