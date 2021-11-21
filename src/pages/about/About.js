import React from 'react';
import Doctors from './Doctors';

const About = () => {
    return (
        <>
            <div className="container m-3 ">
                <div className="row g-2 align-items-center">
                    <div className="col">
                        <img style={{ width: '100%' }} src="https://i.ibb.co/9W9rF6c/5768038.jpg" />
                    </div>
                    <div className="col">
                        <h4 className='text-info m-2'>About MedicaLife</h4>
                        <h1>We Provide Essential Services For Your Health Care</h1>
                        <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </p>
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <h1><i className="fas fa-heartbeat"> </i></h1>
                                <div className='px-2'>
                                    <h3>Quality of Care Services</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit</p>
                                </div>

                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <h1>
                                    <i className="fas fa-stethoscope"></i>
                                </h1>
                                <div className='px-2'>
                                    <h3>Standards of Treatment</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit</p>
                                </div>

                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <h1><i className="fas fa-lungs"> </i></h1>
                                <div className='px-2'>
                                    <h3>Infection Prevention</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit</p>
                                </div>

                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <h1><i className="fas fa-hand-holding-medical"> </i></h1>
                                <div className='px-2'>
                                    <h3>24/7 Working Time</h3>
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Doctors></Doctors>
        </>
    );
};

export default About;