import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bannar1 from '../../../images/banner/banner1.jpg'
import bannar2 from '../../../images/banner/banner2.jpg'
import bannar3 from '../../../images/banner/banner3.jpg'


const Banner = () => {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannar1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannar2}
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannar3}
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;