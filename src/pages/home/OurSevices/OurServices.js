import React from 'react';
import useData from '../../../hooks/fakedata';
import OurService from './OurService';

const OurServices = () => {
    const ourServices = useData();
    /* console.log(ourServices) */
    return (
        <div className='text-center'>
            <h5 className='text-info'>Medical Services</h5>
            <h3>Our Healthcare Service </h3>
            <p>Our team includes some of the best and brightest minds in brain tumor care.
                <br />
                Physicians from different specialties work together as a group to deliver care more efficiently and effectively.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-3">

                {
                    ourServices.map(ourService => <OurService
                        key={ourService.id}
                        ourService={ourService}
                    ></OurService>)
                }
            </div>

            {/*   {
                ourServices.map(ourService => <OurService
                    key={ourService.id}
                    ourService={ourService}
                ></OurService>)
            } */}
        </div>
    );
};

export default OurServices;