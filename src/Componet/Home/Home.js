import React, { useState } from 'react';
import Navber from '../Navber/Navber';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skils from '../Skils/Skils';
import Projects from '../Projects/Projects';
import Contract from '../Contract/Contract';

const Home = () => {

    const [specificplace ,setSpecificplace ]=useState('')

    console.log(specificplace)
    return (
        <div>
            <Navber specificplace={specificplace}></Navber>
            <Banner setSpecificplace={setSpecificplace} ></Banner>
            <About setSpecificplace={setSpecificplace}></About>
            <Skils setSpecificplace={setSpecificplace}></Skils>
            <Projects setSpecificplace={setSpecificplace}></Projects>
            <Contract setSpecificplace={setSpecificplace}></Contract>
        </div>
    );
};

export default Home;