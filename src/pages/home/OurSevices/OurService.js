import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OurService = ({ ourService }) => {
    const { name, img, id, description } = ourService;
    /* console.log(ourService); */
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <Link to={`/booking/${id}`}>
                    <div className="btn btn-danger m-2 p-2">Booking {name.toLowerCase()} </div>
                </Link>
            </div>
        </div>
    );
};

export default OurService;