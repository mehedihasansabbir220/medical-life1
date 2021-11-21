import React from 'react';

const SingleServices = ({ service }) => {
    const { name, img, description, } = service;
    // console.log(service)
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img style={{ width: '100%' }} src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}
                        </p>
                        <div className="btn btn-info">Book{name}</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleServices;