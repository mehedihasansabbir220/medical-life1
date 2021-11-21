import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../images/Carousel-2.png'
import carousel2 from '../../../images/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.jpg';
import carousel3 from '../../../images/successful-medical-team.jpg';
import ReactPlayer from 'react-player/youtube'

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h3 className='text-info'>
                            Best Medical & Healthcare Service For Your Family</h3>
                        <p className='text-danger'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <h1> <ReactPlayer url='https://www.youtube.com/watch?v=4Cpp4v8j25s' /></h1>


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-dark'>
                            Best Medical & Healthcare Service For Your Family</h3>
                        <p className='text-danger'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <h1> <ReactPlayer url='https://www.youtube.com/watch?v=GuAQwbqVIvg' /></h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                    />
                    <Carousel.Caption>

                        <h3 className='text-dark'>
                            Best Medical & Healthcare Service For Your Family</h3>
                        <p className='text-danger'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <h1> <ReactPlayer url='https://www.youtube.com/watch?v=PWHzgUEKFHc' /></h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;