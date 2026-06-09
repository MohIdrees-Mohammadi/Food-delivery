import React from "react";
import { Truck } from "lucide-react";
import { Clock } from "lucide-react";
import { Utensils } from "lucide-react";
import { motion } from "framer-motion";

const headerBottom = () => {
  return (
    <section className="flex flex-col w-full h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-between px-[20%] items-center gap-5 h-[30%] py-[10%]"
      >
        <div className="group flex flex-col gap-2 justify-center items-center bg-gray-50 h-full w-[35%]  rounded-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in border border-orange-300 py-[10%] ">
          <div className="bg-red-200 p-4 rounded-[30%] group-hover:scale-115 transition-all duration-300 ease-in">
            <Truck className="text-red-900" />
          </div>
          <span className="text-gray-800 font-bold text-lg">Fast Delivery</span>
          <p className="text-gray-400">
            30 min or less across all of Kabul city
          </p>
        </div>
        <div className="group flex flex-col gap-2 justify-center items-center bg-gray-50 h-full w-[35%]  rounded-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in border border-orange-300 py-[10%] ">
          <div className="bg-yellow-50 p-4 rounded-[30%] group-hover:scale-115 transition-all duration-300 ease-in">
            <Clock className="text-black" />
          </div>
          <span className="text-gray-800 font-bold text-lg">Open Late</span>
          <p className="text-gray-400">Serving you 10:00 AM – 11:00 PM daily</p>
        </div>
        <div className="group flex flex-col gap-2 justify-center items-center bg-gray-50 h-full w-[35%]  rounded-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in border border-orange-300 py-[10%] ">
          <div className="bg-green-100 p-4 rounded-[30%] group-hover:scale-115 transition-all duration-300 ease-in">
            <Utensils className="text-green-900" />
          </div>
          <span className="text-gray-800 font-bold text-lg">Top Quality</span>
          <p className="text-gray-400">
            100% fresh ingredients, made to ordery
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default headerBottom;
