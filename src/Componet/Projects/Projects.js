import React from 'react';
import coderMasterImg from '../../../src/img/Projects/Screenshot 2024-03-19 at 14-27-59 Coder Master.png'
import muntajatImg from '../../../src/img/Projects/Screenshot 2024-03-19 at 14-26-50 Muntajat.com- Home.png'
import Cycalgor from '../../../src/img/Projects/Screenshot 2024-03-19 at 14-29-16 Cycal Gor- Home.png'
 import '../Projects/Projects.css'  


const Projects = () => {
    const projectData=[{
        name: ''
    }]
    return (
        <div className='pt-16 pb-16 backgroundImg'>

            <h1 className='lg:text-3xl text-2xl text-white  text-center'>My Recent Works</h1>
             <p className='lg:text-xl ml-2 mr-2 text-white mt-3 text-center'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>




            <div className='lg:flex lg:justify-center md:grid md:grid-cols-2'>
            <div className='lg:ml-20 ml-8 mt-16'>

<div className='bg-gradient p-10 shadow-xl  bg-slate-800   mb-16 lg:w-96 w-80  rounded-xl' >
<div className='image-container lg:ml-[-13px]  ml-[-25px] lg:w-80 w-72 h-72 rounded-2xl mb-16'>
<img className='hover-image ' src={muntajatImg} alt="Shoes" />

</div>


<p>
<h1 className='text-xl inline mr-3 text-white '> Muntajat.com</h1>

<span className='text-xl text-white'>An E-Commerce Website</span>
</p>

<div className='flex justify-end'>
<button className='btn btn-primary mt-2 ' >Show details</button>
</div>

</div>
</div>
            <div className='lg:ml-20 ml-8 mt-16'>

<div className='bg-slate-800 p-10 shadow-xl    mb-16 lg:w-96 w-80  rounded-xl' >
<div className='image-container2 lg:ml-[-10px] ml-[-25px] lg:w-80 w-72 h-72 rounded-2xl mb-16'>
<img className='hover-image2 ' src={Cycalgor} alt="Shoes" />

</div>


<p>
<h1 className='text-xl inline mr-3 text-white '> CycalGor</h1>

<span className='text-xl text-white'>An Online  Bicycle Shop....</span>
</p>


<div className='flex justify-end'>
<button className='btn btn-primary mt-2 ' >Show details</button>
</div>
</div>
</div>
            <div className='lg:ml-20 ml-8 mt-16'>

<div className='bg-slate-800 p-10 shadow-xl    mb-16 lg:w-96 w-80  rounded-xl' >
<div className='image-container lg:ml-[-10px] ml-[-25px] lg:w-80 w-72 h-72 rounded-2xl mb-16'>
<img className=' ' src={coderMasterImg} alt="Shoes" />

</div>


<p>
<h1 className='text-xl inline mr-3 text-white '> Coder Master</h1>

<span className='text-xl text-white'>   An Online Programming Course</span>
</p>

<div className='flex justify-end'>
<button className='btn btn-primary mt-2 ' >Show details</button>
</div>

</div>
</div>
            </div>

            
        </div>
    );
};

export default Projects;