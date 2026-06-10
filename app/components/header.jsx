"use client";
import React from "react";
import { GrShop } from "react-icons/gr";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";
// import Img from 'react-image'

const Header = () => {
  const [show, setShow] = React.useState(false);
  return (
    <section className="flex  bg-gray-100 overflow-x-hidden gap-5 text-gray-200 w-full  justify-around items-center px-3.75 py-2 sticky top-0 font-bold z-50">
      {/* logo section */}
      <Link
        href="/"
        className="bg-transparent flex gap-1.5 text-red-900  items-center cursor-pointer"
      >
        <div className="bg-secondary p-2.5 rounded-2xl flex  ">
          <GrShop className="text-red-950 text-2xl " />
        </div>
        <span className="text-2xl font-extrabold">Town Pizza</span>
      </Link>
      {/* input section */}
      <div className="w-full max-w-xl">
        <ul className="flex gap-5 text-black">
          <Link
            href="/"
            className="hidden lg:block hover:bg-orange-200 px-2.5 py-1.25 rounded-2xl transition-all duration-300 ease-in cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="hidden lg:block hover:bg-orange-200 px-2.5 py-1.25 rounded-2xl transition-all duration-300 ease-in cursor-pointer"
          >
            Menu
          </Link>
          <Link
            href="/track-order"
            className="hidden lg:block hover:bg-orange-200 px-2.5 py-1.25 rounded-2xl transition-all duration-300 ease-in cursor-pointer"
          >
            Track Order
          </Link>
          <Link
            href="/contact"
            className="hidden lg:block hover:bg-orange-200 px-2.5 py-1.25 rounded-2xl transition-all duration-300 ease-in cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </div>
      <div>
        <ul className="flex ">
          <li className="hidden lg:block hover:bg-orange-200 text-gray-800 px-2.5 py-1.25 rounded-2xl transition-all duration-300 ease-in cursor-pointer">
            Product
          </li>
          <li className="flex justify-center items-center hover:scale-115 bg-red-900 px-2.5 py-1.25 rounded-2xl transition-all duration-300 ease-in cursor-pointer">
            <RiShoppingCart2Line />
          </li>
        </ul>
      </div>
      {/* nav section */}

      {show ? (
        <button className="lg:hidden" onClick={() => setShow(false)}>
          Close
        </button>
      ) : (
        <button className="lg:hidden" onClick={() => setShow(true)}>
          Menu
        </button>
      )}

      <ul
        className={`flex flex-col gap-2 fixed right-0 top-0 h-screen w-[50%] bg-primary lg:hidden overflow-hidden transition-all duration-500
  ${show ? "translate-x-0" : "translate-x-full "}
`}
      >
        <li
          className="hover:bg-orange-200 px-2.5 py-1.25 rounded-2xl transition-all duration-300 ease-in cursor-pointer"
          onClick={() => setShow(false)}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className="hover:bg-orange-200 px-2.5 py-1.25 rounded-2xl transition-all duration-300 ease-in cursor-pointer"
          onClick={() => setShow(false)}
        >
          <Link href="/menu">Menu</Link>
        </li>
        <li className="hidden lg:block hover:bg-orange-200 px-2.5 py-1.25 rounded-2xl transition-all duration-300 ease-in cursor-pointer">
          Track Order
        </li>
        <li className="hidden lg:block hover:bg-orange-200 px-2.5 py-1.25 rounded-2xl transition-all duration-300 ease-in cursor-pointer">
          Contact
        </li>
      </ul>
    </section>
  );
};

export default Header;
