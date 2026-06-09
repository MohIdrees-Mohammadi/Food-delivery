import React from "react";

const category = () => {
  return (
    <section className="flex w-full h-[60vh] justify-between gap-7 pt-7.5 ">
      <div className="group relative w-full h-full rounded-2xl overflow-hidden">

      <div
        className="absolute inset-0 flex flex-col bg-cover justify-center w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-800 ease-in-out"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/chest.jpg')",
          
        }}
      />
        <div className="relative z-10 flex flex-col justify-center  h-full text-white pl-15 gap-5">
          <div className="bg-[#594ed156] w-[8vw] text-center text-sm text-gray-400 font-bold py-1.25 rounded-2xl">
            <span>NEW DROPS</span>
          </div>
          <div className="flex flex-col w-full text-gray-200 ">
            <span className="text-3xl font-extrabold">Men</span>
            <p className="font-sm text-gray-400">Fashion & More</p>
          </div>
        </div>
    
      </div>


      <div className="relative group w-full h-full overflow-hidden rounded-2xl">

      <div
        className="absolute inset-0 bg-cover bg-center flex flex-col gap-2 justify-center w-full h-full rounded-2xl hover:scale-110 transition-all duration-800 ease-in-out"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/chest.jpg')",
        }}
      />

      
      </div>



      <div className="group relative w-full h-full rounded-2xl overflow-hidden ">

      <div
        className="absolute inset-0 bg-cover bg-center flex flex-col gap-2 justify-center w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-800 ease-in-out"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/chest.jpg')",
         
        }}
      />

      <div className="relative z-10 flex h-full items-center pl-15 text-white">
        <span>women</span>
      </div>

      </div>

      
    </section>
  );
};

export default category;
