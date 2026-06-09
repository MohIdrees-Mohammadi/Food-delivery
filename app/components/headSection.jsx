import React from "react";
import { IoStarOutline } from "react-icons/io5";
import Image from "next/image";
import { Star } from 'lucide-react';


const HeadSection = () => {
  return (
    <section
    
    
    
    className="bg-orange-200 flex flex-col-reverse lg:flex-row w-full h-screen rounded-2xl lg:items-center    ">
      <div className="flex flex-col justify-center pl-[10%] py-[5%] text-gray-200 gap-5 font-bold w-full">
        {/* header section and have star  */}
        <div className="flex items-center justify-center bg-red-200  text-red-900 rounded-2xl px-2.5 py-1.25 w-62.5">
          <IoStarOutline />
          <span>Delivery accross Kabul</span>
        </div>
        {/* the Discover Amazing Products & Deals section */}
        <div className="flex flex-col ">
          <span className="text-5xl text-black font-extrabold">Order, Track,</span>
          <span className="text-red-400 text-5xl font-extrabold">and Indulge</span>
          <span className="text-5xl text-black font-extrabold">in Delicious Pizza</span>
          <p className="text-gray-500 text-xl font-normal pt-2.5">
            The best pizza in Kabul, delivered hot to your door. Fresh<br /> ingredients, authentic recipes, and lightning-fast delivery.
          </p>
          {/* the button section */}
          <div className="flex gap-5 mt-[10%]">
            <button className="bg-red-900 text-gray-200 hover:shadow-[-3px_3px_20px_rgba(168,85,247,0.6)] px-8 py-3 rounded-2xl transition-all duration-300 ease-in">
              Order Now
            </button>
            <button className="bg-gray-100 border border-red-900 text-red-900 hover:bg-red-900 hover:text-gray-200 px-8 py-3 rounded-2xl transition-all duration-300 ease-in">
              Contact Us
            </button>
          </div>
          {/* folowers section */}
          <div className="flex  gap-5 font-bold mt-[10%] text-md">
            <div className="flex bg-gray-100 px-3 py-2 rounded-2xl gap-4 items-center">
              <div >
                😊
              </div>
              <div className="flex flex-col justify-center">

              <span className="text-black font-extrabold">2000+</span>
              <span className="text-sm text-gray-400">Happy Customers</span>
              </div>
            </div>
            <div className="flex bg-gray-100 px-3 py-2 rounded-2xl gap-4 items-center">
              <div >
                ⚡
              </div>
              <div className="flex flex-col justify-center">

              <span className="text-black font-extrabold">30min</span>
              <span className="text-sm text-gray-400 ">Avg. Delivery</span>
              </div>
            </div>
            <div className="flex bg-gray-100 px-3 py-2 rounded-2xl gap-4 items-center">
              <div >
                <Star className="text-yellow-400 text-2xl " />
              </div>
              <div className="flex flex-col justify-center">

              <span className="text-black font-extrabold">4.8★</span>
              <span className="text-sm text-gray-400">Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* picture section */}
      <div className=" flex w-full  lg:w-[60vw] h-[60vh]  items-center mr-[20%] rounded-2xl  overflow-hidden  " style={{ backgroundImage: "url('/mri_machine_1.jpg')" }}
/>
        
        
    
      
    </section>
  );
};

export default HeadSection;
