import React from 'react';

const Navber = () => {
    return (
        <div>
            <div className="navbar h-24">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      
      <li><a>About</a></li>
      <li><a>Project</a></li>
      </ul>
    </div>
    <a className=" lg:text-xl md:text-xl text-sm lg:ml-10 ml-1">ASHRAFUL KARIM </a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Project</a></li>
    </ul>
  </div>
  <div className="lg:ml-2 md:ml-2 ml-24 lg:mr-10 mr-1">
    <a className="btn">Button</a>
  </div>
</div>
            
        </div>
    );
};

export default Navber;