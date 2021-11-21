import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../../hooks/fakedata';

const Booking = () => {
    const { Id } = useParams();
    // console.log(services)

    return (
        <div>
            <h2 className='text-center'>this is booking: {Id}</h2>
            <Link to='/'>Go home </Link>
        </div>
    );
};

export default Booking;