import React from 'react';
import  '../Navber/Navber.css'

const Navber = ({specificplace}) => {
    return (
        <div className='position'>
            <div className="navbar h-24 bg-gradient-to-b from-black to-gray-800 pt-16 pb-16  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-gradient-to-b from-black to-gray-800 mt-3 z-[1] p-10 shadow bg-base-100 rounded-box w-72">
      <li className={specificplace === "home"? 'text-red-400':'text-white'}><a href="#home">Home</a></li>
      
      <li className='text-white text-2xl'><a href='#about'>About</a></li>
      <li className={specificplace === "skils"? 'text-red-400':'text-white'}><a className=''href='#skils'>Skils</a></li>
      <li className={specificplace === "project"? 'text-red-400':'text-white'}><a href='#project'>Project</a></li>
      <li className={specificplace === "contract"? 'text-red-400':'text-white'}><a className=' ' href='#project'>Contract</a></li>
      </ul>
    </div>
    <a className=" lg:text-xl md:text-xl text-sm lg:ml-10 ml-1 text-white">ASHRAFUL KARIM </a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className={specificplace === "home"? 'text-red-400':'text-white'}><a className='text-xl' href="#home">Home</a></li>
      <li className={specificplace === "about"? 'text-red-400':'text-white'}><a className='text-xl'href='#about'>About</a></li>
      <li className={specificplace === "skils"? 'text-red-400':'text-white'}><a className='text-xl'href='#skils'>Skils</a></li>
      <li className={specificplace === "project"? 'text-red-400':'text-white'}><a className='text-xl ' href='#project'>Project</a></li>
      <li className={specificplace === "contract"? 'text-red-400':'text-white'}><a className='text-xl ' href='#project'>Contract</a></li>
    </ul>
  </div>
  <div className="lg:ml-2 md:ml-2 ml-24 lg:mr-10 mr-1">
    
  </div>
</div>
            
        </div>
    );
};

export default Navber;