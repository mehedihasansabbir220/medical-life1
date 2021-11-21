import React from 'react';
import { Col, } from 'react-bootstrap';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';

const Contact = () => {
    return (
        <div>

            <div class="container">
                <div class="row">
                    <div class="col-6 px-1">
                        <form action="" className='border border-dark m-3 p-2'>
                            <div class="form-floating mb-3 mx-1">
                                <input type="name" class="form-control" id="floatingInput" placeholder="exampole Name" />
                                <label for="floatingInput">Name </label>
                            </div>
                            <Col>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        '& > :not(style)': { m: 1 },
                                    }}
                                >
                                    <TextField
                                        helperText="Please enter your email"
                                        id="demo-helper-text-aligned"
                                        label="Your Email"
                                    />
                                    <TextField
                                        helperText="Please enter your Phone "
                                        id="demo-helper-text-aligned-no-helper"
                                        label="Your Phone"
                                    />
                                </Box>
                            </Col>
                            <div class="form-floating mb-3 mx-1">
                                <input type="name" class="form-control" id="floatingInput" placeholder="Your Subject" />
                                <label for="floatingInput">Your Subject </label>
                            </div>
                            <div className="btn btn-info m-3">Send a sms</div>
                        </form>

                    </div>
                    <div class="col-6 my-3">
                        <p className="text-info">Contact Us</p>
                        <h3>Let's Ge In Touch</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <h6>Follow Us On Social Media</h6>
                        <h3 className='py-3'>
                            <i className="fab fa-facebook-square px-2"> </i>
                            <i className="far fa-envelope px-2"> </i>
                            <i className="fab fa-twitter px-2"> </i>
                            <i className="fab fa-instagram px-2"> </i>
                            <i className="fab fa-linkedin px-2"> </i>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;