import React from 'react';
import img from '../.../../../img/IMG_20240115_124142-removebg-preview.jpg'
import '../About/About.css'

const About = () => {
    return (
        <div className='pt-16 gradient'>
            <p className='lg:text-3xl md:text-3xl text-2xl text-center text-white'>About Me</p>

            <div className='pb-24 pt-20 lg:flex lg:justify-center'>
            <div>
                <img className='] lg:h-96 md:h-80 h-80 md:mr-32 lg:mr-0 mr-0   mt-5 mb-8' src={img} alt='img'/>
            </div>
                
           <div className='w-96 lg:ml-60 md:ml-20 ml-10 pt-10 '>
           <h1 className='text-2xl pb-4 text-white'>Hello!<br/>
I'M Ashraful Karim Saad</h1>
<p className='text-white'>from Chittagong, Bangladesh. Always passionate about new information & technologies. Striving to never stop learning and improving. Look forward to Working with a creative team to improve my skill and add value. I am dedicated to learning and mastering new technologies, and coding has become my true passion. I invest a significant amount of time in staying up-to-date with the latest trends and honing my skills. If you have an exciting project in mind, I'm all ears!</p>
           </div>
            </div>
        </div>
    );
};

export default About;