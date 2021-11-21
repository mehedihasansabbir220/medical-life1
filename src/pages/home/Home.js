import React from 'react';
import AboutUs from './aboutUs/AboutUs';
import Slider from './slider/Slider';
import OurServices from './OurSevices/OurServices'
import AppoinmentFrom from './AppoinmentForm/AppoinmentFrom';
import About from '../about/About';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutUs></AboutUs>
            <OurServices></OurServices>
            <About></About>
            <AppoinmentFrom></AppoinmentFrom>
        </div>
    );
};

export default Home;