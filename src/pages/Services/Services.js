import React from 'react';
import useData from '../../hooks/fakedata';
import SingleServices from './singleService/SingleServices';

const Services = () => {
    const services = useData();
    /*  console.log(services) */
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4 m-2">

                {
                    services.map(service => <SingleServices
                        key={service.id}
                        service={service}
                    ></SingleServices>)

                }
            </div>

        </div>
    );
};

export default Services;