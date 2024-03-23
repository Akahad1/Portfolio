import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import img from '../../../src/img/IMG_20240115_124142-removebg-preview.jpg'

import '../Banner/Banner.css'
import { BsLinkedin,BsGithub,BsFacebook } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Banner = ({setSpecificplace}) => {

  useEffect(()=>{
    Aos.init({duration:'1000'});

},[])
    return (
        <div id='home'  className='lg:pl-32 pl-3 backgroundImg  pt-16 pb-16 ' onMouseEnter={()=>setSpecificplace('home')}>
            <div  className='lg:flex md:flex lg:mt-20 md:mt-20 mt-6 '>

            <div className='  ' data-aos="fade-right">
                <p className='lg:text-4xl md:text-3xl text-3xl text-white'>Hi 👋 I'm Ashraful Karim Saad</p>
                <p className='text-2xl mt-5 text-white'>I am a <span className=''><span style={{   fontWeight: '' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['FRONT-END DEVELOPER',"MERN STACK DEVELOPER","WEB DEVELOPER",
            "REACT DEVELOPER"
          ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
                </span></p>

                <p className="py-4 w-96 lg:text-xl text-white  mr-3">Always passionate about new information & technologies. Striving to never stop learning and improving. Look forward to Working with a creative team to improve my skills and add value.
Building easy-to-use, user-friendly websites, and applications is truly a passion of mine.</p>
            </div>

            <div data-aos="fade-left">
                <img className='lg:ml-80 md:ml-20 ml-10  lg:h-96 md:h-80 h-80 md:mr-32 lg:mr-0 mr-0  photo mt-5 mb-8' src={img} alt='img'/>
            </div>

            </div>
            


            

      {/* <p className="py-2 ">FIND WITH ME</p> */}
      <div className='mt-2'>
      <a  href="https://drive.google.com/file/d/1ZQcubXMYmbnZ3RL54PgRBOvh4RKQM4Fv/view" ><button className='btn bg-slate-600 text-white mr-10 '>Download Resume</button></a>
       <span className='bg-slate-600 p-3 rounded-full mr-3 '> 
       <a href="https://www.linkedin.com/in/ashraful-karim-saad/"><BsLinkedin className='inline text-center text-white w-5 h-5'/></a></span>

        <span  className='bg-slate-600 p-3 rounded-full mr-3 '>
          <a href="https://github.com/Akahad1"><BsGithub className='inline  text-white w-6 h-6'/></a></span>
        <span className='bg-slate-600 p-3 rounded-full mr-3 '><a href="https://www.facebook.com/ak.sahad.5"><BsFacebook className='inline  text-white w-6 h-6'/></a></span>
      </div>
            
        </div>
    );
};

export default Banner;