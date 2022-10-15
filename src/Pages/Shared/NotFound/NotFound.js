import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center '>
            <div className="">
                <h1 className='display-1 '>404</h1>
                <h1>Page Not Found</h1>
                <Button variant='primary'><Link className='text-decoration-none text-light' to='/'>Go HomePage</Link></Button>
            </div>
        </div >
    );
};

export default NotFound;