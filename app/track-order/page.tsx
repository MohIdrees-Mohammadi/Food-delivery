import { Box, Search } from "lucide-react";
import React from "react";

const trackOrder = () => {
  return (
    <section className="min-h-[80vh] lg:min-h-[90vh] border-forborder bg-forbackround flex border-b justify-evenly flex-col">
      <div className=" gap-4 flex flex-col items-center justify-center ">
        <Box className="h-14 rounded-2xl p-3 w-14 bg-red-100/80 stroke-2 text-red-700" />
      <div className="flex flex-col items-center">
        <span className="text-3xl font-extrabold capitalize">
          track your order
        </span>
        <span className="text-gray-500">
          Enter your ID to see real-time delivery status
        </span>
      </div>
      <div className="w-[90%] lg:w-[30%] xl:w-[28%] h-13 lg:h-[9%] mt-5 relative">
        <input
          className="w-full h-full p-3 bg-white shadow-sm shadow-gray-500 focus:outline-2 focus:border text-start focus:border-red-800 focus:outline-red-700/25 rounded-2xl "
          type="text"
          placeholder="Paste your ID here"
        />
        <button className="flex absolute top-[10%] bottom-[10%] right-[1%] rounded-xl text-sm items-center justify-center w-[15%] lg:w-[20%] bg-primary text-white gap-1 ">
          <Search className="stroke-2 w-4 h-4" /> <span className="lg:inline hidden">Search</span>
        </button>
      </div>

      </div>
      <div className="flex flex-col items-center gap-2 font-semibold">
        <div className="w-18 h-18 p-3 bg-formuted flex rounded-full items-center justify-center">
          {" "}
          <Search className="text-olive-400" />
        </div>
        <span className="text-xl">Ready to track</span>
        <span className="font-normal text-olive-700">Enter your order ID above to get started</span>
      </div>
    </section>
  );
};

export default trackOrder;
