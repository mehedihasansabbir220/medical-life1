import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import carousel1 from '../../../images/Carousel-2.png'

const AboutUs = () => {
    return (
        <div>
            <CardGroup className='my-3'>
                <Card>
                    <Card.Img variant="top" src={carousel1} />

                    <Card.Body>
                        <Card.Title>
                            Doctors Timetable</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to='/services'>
                            <div className="btn btn-primary">Doctors Timetable</div>
                        </Link>
                    </Card.Footer>
                </Card>
                <Card className='mx-2'>
                    <Card.Img variant="top" src={carousel1} />
                    <Card.Body>
                        <Card.Title>Emergency Call</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna

                            {' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to='/services'>
                            <div className="btn btn-primary">Emergency Call</div>
                        </Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={carousel1} />
                    <Card.Body>
                        <Card.Title>Make An Appointment</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to='/services'>
                            <div className="btn btn-primary">An Appointment</div>
                        </Link>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default AboutUs;