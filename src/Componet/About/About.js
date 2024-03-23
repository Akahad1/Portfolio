import React, { useEffect} from 'react';
import img from '../.../../../img/IMG_20240115_124142-removebg-preview.jpg'
import '../About/About.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = ({setSpecificplace}) => {
    useEffect(()=>{
        Aos.init({duration:'1000'});
    
    },[])

    
    return (
        <div className='pt-16 gradient' id='about' onMouseEnter={()=>setSpecificplace('about')}>
            <p className=' text-3xl text-center text-white'>About Me</p>

            <div className='pb-24 pt-20 lg:flex md:flex md:justify-center lg:justify-center'>
            <div data-aos="fade-right">
                <img  className=' lg:h-96 md:h-80 h-80 md:mr-32 lg:mr-0 ml-10   mt-5 mb-8' src={img} alt='img'/>
            </div>
                
           <div className='lg:w-96 md:w-96 lg:ml-60 md:ml-10 ml-5  lg:pt-10 ' data-aos="fade-left">
           <h1 className='text-2xl pb-4 text-white'>Hello!<br/>
I'M Ashraful Karim Saad</h1>
<p className='text-white'>from Chittagong, Bangladesh. Always passionate about new information & technologies. Striving to never stop learning and improving. Look forward to Working with a creative team to improve my skill and add value. I am dedicated to learning and mastering new technologies, and coding has become my true passion. I invest a significant amount of time in staying up-to-date with the latest trends and honing my skills. If you have an exciting project in mind, I'm all ears!</p>
           </div>
            </div>
        </div>
    );
};

export default About;