import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <Container className="bg-dark">
                <Row className="text-light">
                    <Col xs={6} md={3}>
                        <h2 className='py-3'>MEDICAL LIFE </h2>
                        <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua exercitation ullamco</p>
                        <h3 className='py-3'>
                            <i className="fab fa-facebook-square px-2"> </i>
                            <i className="far fa-envelope px-2"> </i>
                            <i className="fab fa-twitter px-2"> </i>
                            <i className="fab fa-instagram px-2"> </i>
                            <i className="fab fa-linkedin px-2"> </i>
                        </h3>

                    </Col>
                    <Col xs={6} md={3}>
                        <h3 className='py-3'>Contact Details</h3>
                        <hr className='bg-success' />
                        <p className='p-2'>
                            <i className="fas fa-map-marker"> Sylhet,Nobab Road </i>
                        </p>
                        <p className='p-2'>
                            <i className="fas fa-sms"> support@domain.com</i>
                        </p>
                        <p className='p-2'>
                            <i className="far fa-clock"> 8 AM - 5 PM , Monday - Saturday</i>
                        </p>
                        <p className='p-2'>
                            <i className="fas fa-phone-square-alt"> (+880)   1985187359</i>
                        </p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h3 className='py-3'>Other Pages</h3>
                        <hr className='bg-success' />
                        <h4>
                            <Link to='/home'>Home</Link>
                        </h4>
                        <h4>
                            <Link to='/about'>About</Link>
                        </h4>
                        <h4>
                            <Link to='/services'>Services</Link>
                        </h4>
                        <h4>
                            <Link to='/appointment'>Appointment</Link>
                        </h4>
                        <h4>
                            <Link to='/contact'>Contact</Link>
                        </h4>

                    </Col>
                    <Col xs={6} md={3}>
                        <h3 className='py-3'>Make Appointment</h3>
                        <hr className='bg-success' />
                        <h1 className='p-3 bg-info'>
                            <i className="fas fa-phone-square-alt">(+880)   1985187359</i>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod
                        </p>

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Footer;