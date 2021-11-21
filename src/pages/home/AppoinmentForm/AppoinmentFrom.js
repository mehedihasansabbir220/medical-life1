import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../../images/Carousel-2.png'

const AppoinmentFrom = () => {
    return (
        <div>
            <Container className='m-2'>
                <Row >
                    <Col>
                        <img style={{ width: "100%" }} src={image} />
                    </Col>
                    <Col>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                '& > :not(style)': { m: 1 },
                            }}
                        >
                            <TextField
                                helperText="Please enter your name"
                                id="demo-helper-text-aligned"
                                label="Your Name"
                            />
                            <TextField
                                helperText="Please enter your email "
                                id="demo-helper-text-aligned-no-helper"
                                label="Your Email"
                            />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Mobile Number" variant="filled" color="success" focused />
                            <Stack component="form" noValidate spacing={3}>

                                <TextField
                                    id="datetime-local"
                                    label="Next appointment"
                                    type="datetime-local"
                                    defaultValue="2017-05-24T10:30"
                                    sx={{ width: 250 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Stack>
                        </Box>
                        <Box className='my-3 mx-1'
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Enter Your Sms " id="fullWidth" />
                        </Box>
                        <Link to='/appointment'>
                            <div className="btn btn-info">APPOINTMENT</div>
                        </Link>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default AppoinmentFrom;