import React from 'react';
import img1 from '../../../src/img/CoderMasterImg/Screenshot 2024-03-21 at 14-44-29 Coder Master.png'
import img2 from '../../../src/img/CoderMasterImg/Screenshot 2024-03-21 at 14-44-56 Coder Master.png'
import img3 from '../../../src/img/CoderMasterImg/Screenshot 2024-03-21 at 14-45-07 Coder Master.png'
import img4 from '../../../src/img/CoderMasterImg/Screenshot 2024-03-21 at 14-46-55 Coder Master.png'
const ShowProjects = () => {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div>
             
              <dialog id="my_modal_3" className="modal ">
  <div className="modal-box w-11/12 max-w-5xl ">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-3xl">✕</button>
    </form>

    <div className='lg:flex md:flex' >
      <div>
      <div className="carousel lg:w-96 md:96">
  <div id="item1" className="carousel-item w-full h-80">
    <img src={img1} alt='' className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full h-80">
    <img src={img2} alt='' className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full h-80">
    <img src={img3} alt='' className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full h-80">
    <img src={img4 } alt='' className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>

<div className='flex mt-5'>
    <a href="https://codermaster-79114.web.app/"><button className="btn btn-outline mr-3 btn-warning">Visit Now</button></a>
    <a href="https://github.com/Akahad1/CoderMaster"><button className="btn btn-outline mr-3 btn-warning">Client Side Code</button></a>
    <a href="https://github.com/Akahad1/CoderMaster-Server"><button className="btn btn-outline mr-3 btn-warning">Server Code</button></a>
 </div>
      </div>

      <div className='lg:ml-10'>
      <p className='text-2xl  mb-3'>Description:</p>

<p>Coder Master is an online best education platform.The platform covers programming languages ​​and web development.</p>
                <p className='text-2xl mt-3 mb-3'>Features:</p>
<p>
1,The website has some animations created through CSS
2,You can print the details of the courses that are available here
3,This website contains SSL Commerce. Through which payment can be made through BKash, Cash, Card, Rocket, etc
4,The student who has paid will be able to view his particular class and those who have not paid will not be able to view any class
5,The website has the details of the teacher
6,The website is secured by JWT
7,Authentication With Email/Password & Google and Fecabook
8,Responsive for all Devices
</p>
<p className='text-2xl mt-3 mb-3'>Tools & Technologies</p>
                <p>React,Firebase,NodeJS,ExpressJS,MongoDB,Stripe,JWT and Jqurey etc.</p>
                
              </div>


    </div>
    
   
  </div>
  
</dialog>
              </div>
              
           

        </div>
    );
};

export default ShowProjects;