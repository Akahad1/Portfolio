import React from 'react';
import Navber from '../Navber/Navber';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skils from '../Skils/Skils';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <About></About>
            <Skils></Skils>
            
        </div>
    );
};

export default Home;