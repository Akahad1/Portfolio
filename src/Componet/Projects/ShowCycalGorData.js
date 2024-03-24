import React from 'react';
import img1 from '../../../src/img/CyclaGor/Screenshot 2024-03-23 at 15-52-23 Cycal Gor- Home.png'
import img2 from '../../../src/img/CyclaGor/Screenshot 2024-03-23 at 15-53-24 Cycal Gor.png'
import img3 from '../../../src/img/CyclaGor/Screenshot 2024-03-23 at 15-53-58 Cycal Gor- Buy Product.png'
import img4 from '../../../src/img/CyclaGor/Screenshot 2024-03-23 at 15-54-45 Cycal Gor- Home.png'

const ShowCycalGorData = () => {
    return (
        <div>
            <div>
             
             <dialog id="my_modal_10" className="modal ">
 <div className="modal-box w-11/12 max-w-5xl ">
   <form method="dialog">
     {/* if there is a button in form, it will close the modal */}
     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-3xl">✕</button>
   </form>

   <div className='lg:flex md:flex' >
     <div>
     <div className="carousel lg:w-96 md:96">
 <div id="item5" className="carousel-item w-full h-96">
   <img src={img1} alt='' className="w-full" />
 </div> 
 <div id="item6" className="carousel-item w-full h-80">
   <img src={img2} alt='' className="w-full" />
 </div> 
 <div id="item7" className="carousel-item w-full h-80">
   <img src={img3} alt='' className="w-full" />
 </div> 
 <div id="item8" className="carousel-item w-full h-80">
   <img src={img4 } alt='' className="w-full" />
 </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
 <a href="#item5" className="btn btn-xs">1</a> 
 <a href="#item6" className="btn btn-xs">2</a> 
 <a href="#item7" className="btn btn-xs">3</a> 
 <a href="#item8" className="btn btn-xs">4</a>
</div>

<div className='flex mt-5'>
   <a href="https://cycle-gor.web.app/"><button className="btn btn-outline mr-3 btn-warning">Visit Now</button></a>
   <a href="https://github.com/Akahad1/Cycal-Gor"><button className="btn btn-outline mr-3 btn-warning">Client Side Code</button></a>
   <a href="https://github.com/Akahad1/Amer-kitchen-server"><button className="btn btn-outline mr-3 btn-warning">Server Code</button></a>
</div>
     </div>

     <div className='lg:ml-10 md:ml-8 mt-8'>
     <p className='text-2xl  mb-3'>Description:</p>

<p> Cycle Gor like a great platform for buying and selling bicycles of various types.Whether you're a casual rider or a cycling enthusiast, Cycle Ghar provides a convenient space to find the perfect bicycle that suits your needs.</p>
               <p className='text-2xl mt-3 mb-3'>Features:</p>
<p>
1,The Cycle Gor website allows customers to add Cycles to their card and delete products from the card as per their choice

2,You can see the details of the specific bike.

3,Can give review and rating of specific bicycle.

4,You can see related products.

5,You can order products on cash on delivery.

6,You can see your ordered products in My Order.
7,Authentication With Email/Password & Google and Github

8,Responsive for all Devices
</p>
<p className='text-2xl mt-3 mb-3'>Tools & Technologies</p>
               <p>React,Firebase,NodeJS,ExpressJS,MongoDB,  Stripe,React Icon and React hot tost etc.</p>
               
             </div>


   </div>
   
  
 </div>
 
</dialog>
             </div>
            
        </div>
    );
};

export default ShowCycalGorData;