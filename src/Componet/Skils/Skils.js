import React, { useEffect } from 'react';
import reactImg from '../../../src/img/skils/2300px-React-icon.svg[1].png'
import github from '../../../src/img/skils/GitHub-Symbol[1].png'
import nodejs from '../../../src/img/skils/free-node-js-3628954-3030179[1].png'
import htmlImg from '../../../src/img/skils/png-transparent-logo-html5-brand-design-text-logo-number[1].png'
import cssImg from '../../../src/img/skils/html-logo-css3-javascript-web-design-css-grid-layout-html5-electric-blue-symbol-png-clipart-thumbnail[1].png'
import javaScripImg from '../../../src/img/skils/kisspng-javascript-programmer-node-js-web-application-vector-markup-language-5b173fc1d0a463.9294246915282503058546[1].png'
import expressImg from '../../../src/img/skils/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo[1].png'
import mongodbImg from '../../../src/img/skils/mongodb-logo-D13D67C930-seeklogo.com[1].png'
import firebseImg from '../../../src/img/skils/touchicon-180[1].png'
import nextjsImg from '../../../src/img/skils/nextjs-icon-512x512-y563b8iq[1].png'
import figmaImg from '../../../src/img/skils/png-transparent-figma-app-logo-tech-companies[1].png'
import bootsrtipImg from '../../../src/img/skils/800px-Bootstrap_logo.svg[1].png'
import tailwidImg from '../../../src/img/skils/png-transparent-tailwind-css-hd-logo[1].png'
import reduxImg from '../../../src/img/skils/png-transparent-redux-react-logo-javascript-dq-purple-violet-text[1].png'
import "../About/About.css"
import Aos from 'aos';
import 'aos/dist/aos.css';


const Skils = ({setSpecificplace}) => {
 
    useEffect(()=>{
        Aos.init({duration:'1000'});
    
    },[])
    return (
        <div id='skils' className='pt-16 pb-16 gradient' onMouseEnter={()=>setSpecificplace('skils')}>
            <h1 className='text-3xl text-center text-white'>Skills</h1>
          {/* 1st line */}
        <div className='lg:flex lg:justify-center  mt-24'>
          
          <div className='lg:flex'>
          <div className='flex justify-center'>
          <div className='mr-2' data-aos="fade-up"> 
           <img className='lg:w-24 md:w-24 w-16  inline' src={htmlImg} alt=''></img>
            <p className='inline lg:text-2xl md:text-2xl text-xl  text-white'>Html</p>
           </div>
           <div data-aos="fade-up">
            <img className=' lg:w-32 md:w-32 w-24  inline lg:ml-32 md:ml-44 ml-20'  src={cssImg} alt=''></img>
            <p className='inline lg:text-2xl md:text-2xl text-xl text-white'>Css</p>
           </div>
          </div>
           <div className='flex justify-center lg:mt-0 md:mt-20 mt-10'>
           <div data-aos="fade-up">
            <img className=' lg:w-[140px] md:w-[140px] w-24  mt-4 inline lg:ml-32 md:ml-3 ml-0' src={javaScripImg} alt=''></img>
            <p className='inline lg:text-2xl md:text-2xl text-xl text-white'>javascript</p>
           </div>
           <div data-aos="fade-up">
            <img className=' lg:w-[140px] md:w-[140px] w-24 lg:mt-5 inline lg:ml-32 md:ml-40 ml-0' src={github} alt=''></img>
            <p className='inline lg:text-2xl md:text-2xl text-xl text-white'>GitHub</p>
           </div>
           </div>
          </div>
        </div>




          {/* 2st line */}
        <div className='lg:flex lg:justify-center lg:mt-24 md:mt-20 mt-10'>
          
          <div className='lg:flex'>
            <div className='flex'>
            <div data-aos="fade-up" className='mr-2'> 
           <img className='lg:w-24 md:w-24 w-16  mr-3 lg:ml-0 md:ml-32 ml-6 inline' src={bootsrtipImg} alt=''></img>
            <p className='inline lg:text-2xl md:text-2xl text-xl text-white'>Bootstrap</p>
           </div>
           <div data-aos="fade-up">
            <img className=' lg:w-20 md:w-20 w-14 mr-2 inline lg:ml-32 md:ml-40 ml-6' src={reactImg} alt=''></img>
            <p className='inline lg:text-2xl md:text-2xl text-xl text-white'>React</p>
           </div>
           
            </div>
          

           <div className='flex lg:mt-0 md:mt-20 mt-12'> 
           
           <div data-aos="fade-up">
            <img className=' lg:w-24 md:w-24 w-14 inline mr-3 lg:ml-32 md:ml-32 ml-4 lg:mt-0  mt-4' src={tailwidImg} alt=''></img>
            <p className='inline lg:text-2xl md:text-2xl text-xl text-white'>Tailwind Css</p>
           </div>
           <div data-aos="fade-up">
            <img className=' lg:w-20 md:20 w-14 mr- inline lg:ml-32 md:ml-44 ml-2' src={firebseImg} alt=''></img>
            <p className='inline lg:text-2xl md:text-2xl text-xl text-white'>Firebase</p>
           </div>
           </div>
          </div>
        </div>
          {/* 3st line */}
        <div className='lg:flex lg:justify-center lg:mt-24 md:mt-20 mt-10'>
          
          <div className='lg:flex'>
          <div className='flex'>
          <div data-aos="fade-up" className='mr-8'> 
           <img className='lg:w-24 md:w-24 w-20 lg:ml-0 md:ml-32 ml-2 mr-1 inline' src={reduxImg} alt=''></img>
            <p className='inline lg:text-2xl md:text-2xl text-xl text-white'>Redux</p>
           </div>
           <div data-aos="fade-up">
            <img className=' lg:w-20 md:20 w-14 mr-2 inline lg:ml-32 md:ml-44 ml-3' src={expressImg} alt=''></img>
            <p className='inline lg:text-2xl md:text-2xl text-xl text-white'>Express JS</p>
           </div>

          </div>

           <div className='flex lg:mt-0 md:mt-20 mt-10'>
           <div data-aos="fade-up">
            <img className=' lg:w-16 md:w-16 w-12 mr-2 inline lg:ml-32 md:ml-32 ml-7' src={mongodbImg} alt=''></img>
            <p className='inline lg:text-2xl md:text-2xl text-xl text-white'>MongoDB</p>
           </div>
           <div data-aos="fade-up">
            <img className=' lg:w-20 md:20 w-14  mr-2 inline lg:ml-32 md:ml-44 ml-10' src={nextjsImg} alt=''></img>
            <p className='inline lg:text-2xl md:text-2xl text-xl text-white'>NextJS</p>
           </div>
           </div>
          </div>
        </div>
            
        </div>
    );
};

export default Skils;