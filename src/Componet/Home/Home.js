import React from 'react';
import Navber from '../Navber/Navber';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skils from '../Skils/Skils';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <About></About>
            <Skils></Skils>
            <Projects></Projects>
        </div>
    );
};

export default Home;