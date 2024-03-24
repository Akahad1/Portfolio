import React from 'react';
import img3 from '../../../src/img/Muntajat/Screenshot 2024-03-23 at 16-06-39 Muntajat.com- Home.png'
import img2 from '../../../src/img/Muntajat/Screenshot 2024-03-23 at 16-07-05 Muntajat.com- AllLaptop.png'
import img1 from '../../../src/img/Muntajat/Screenshot 2024-03-23 at 16-07-34 Muntajat.com- Sing Up.png'
import img4 from '../../../src/img/Muntajat/Screenshot 2024-03-23 at 16-09-06 Muntajat.com- Dashboard-Myorder.png'

const ShowMuntajatData = () => {
    return (
        <div>

<div className=''>
             
             <dialog id="my_modal_1" className="modal ">
 <div className="modal-box w-11/12 max-w-5xl ">
   <form method="dialog">
     {/* if there is a button in form, it will close the modal */}
     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-3xl">✕</button>
   </form>

   <div className='lg:flex md:flex' >
     <div>
     <div className="carousel lg:w-96 md:96">
 <div id="item1" className="carousel-item w-full lg:h-96 md:h-96 h-72">
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
   <a href="https://muntajat-2bd0c.web.app/"><button className="btn btn-outline mr-3 btn-warning">Visit Now</button></a>
   <a href="https://github.com/Akahad1/Muntajat.com"><button className="btn btn-outline mr-3 btn-warning">Client Side Code</button></a>
   <a href="https://github.com/Akahad1/Muntajat.com-server"><button className="btn btn-outline mr-3 btn-warning">Server Code</button></a>
</div>
     </div>

     <div className='lg:ml-10 md:ml-8 mt-10'>
     <p className='text-2xl  mb-3'>Description:</p>

<p>Muntajat is a laptop mobile tablet buying and selling website .through which seller can make whole sale and buyer can buy product.</p>
               <p className='text-2xl mt-3 mb-3'>Features:</p>
<p>
1,This website has three roles. They are admin, seller, buyer.

2,Admin can see all users and he can create admin and buy products.

3,Seller can add his products. He can see the products that he has added and he can order himself and he can see the ordered products

4,The buyer can only see the products he has ordered

5,This website is secured using JWT

6,There is a facility to view products by category and products can be sorted

7,Authentication With Email/Password & Google and Github

8,Responsive for all Devices
</p>
<p className='text-2xl mt-3 mb-3 '>Tools & Technologies</p>
               <div >
               <p className=''>React,Firebase,NodeJS,ExpressJS,MongoDB ,Jquery ,Stripe,JWT etc.</p>
               </div>
               
             </div>


   </div>
   
  
 </div>
 
</dialog>
             </div>
            
        </div>
    );
};

export default ShowMuntajatData;