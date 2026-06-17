"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/app/menuItems";
import { useState } from "react";

export default function ProductDetails() {
  const params = useParams();
  const currentpizza = menuItems.find((item) => item.id === Number(params.Slug));
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const price =
    Number(currentpizza.prices[selectedSize].replace(" AFN", ""));

  const totalPrice = price * quantity;




  return (
    <>
      <section className="max-w-3xl max-h-auto mx-auto px-4 py-10  ">

        {/* Back Button */}
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-8"
        >
          ← Back to Menu
        </Link>

        <div className="grid lg:grid-cols-2 gap-5">

          {/* Image */}
          <div className=" ">

            <span className="absolute top-5 left-5 bg-red-700 text-white px-5 py-2 rounded-full font-semibold z-10">
              NEW
            </span>
            <Image
              src={currentpizza.image}
              alt={currentpizza.name}
              width={500}
              height={500}
              className="rounded-[30px] w-full h-80 lg:h-105 object-cover "
            />

          </div>

          {/* Content */}
          <div>

            {/* Category */}
            <span className="inline-block bg-orange-100 lg:max-w-25 lg:max-h-7 text-sm text-red-800  px-3 py-1 rounded-full ">
              ⭐ {currentpizza.category}
            </span>

            <h1 className=" text-2xl lg:text-3xl text-green-700 font-bold mb-3">
              {currentpizza.name}            </h1>

            <p className="text-gray-500 text-sm leading-relaxed mb-3">

              {currentpizza.description}
            </p>

            {/* Sizes */}
            <h3 className="font-semibold mb-3">Choose Size</h3>

            <div className="flex flex-wrap gap-2 mb-3">

              <button
                onClick={() => setSelectedSize("Small")}
                className={`rounded-full px-6 py-1 border ${selectedSize === "Small"
                  ? "bg-red-700 text-white"
                  : "bg-white text-black"
                  }`}
              >
                Small {currentpizza.prices.Small}
              </button>

              <button
                onClick={() => setSelectedSize("Medium")}
                className={`rounded-full px-6 py-1 border ${selectedSize === "Medium"
                  ? "bg-red-700 text-white"
                  : "bg-white text-black"
                  }`}
              >
                Medium {currentpizza.prices.Medium}
              </button>

              <button
                onClick={() => setSelectedSize("Large")}
                className={`rounded-full px-6 py-1 border ${selectedSize === "Large"
                  ? "bg-red-700 text-white"
                  : "bg-white text-black"
                  }`}
              >
                Large {currentpizza.prices.Large}
              </button>

              <button
                onClick={() => setSelectedSize("Family")}
                className={`rounded-full px-6 py-1 border ${selectedSize === "Family"
                  ? "bg-red-700 text-white"
                  : "bg-white text-black"
                  }`}
              >
                Family {currentpizza.prices.Family}
              </button>

            </div>

            {/* Price */}
            <h2 className="text-3xl font-bold text-red-700 mb-3">
              {totalPrice} AFN
            </h2>

            {/* Quantity + Cart */}
            <div className="flex flex-col md:flex-row gap-2 mb-3">



              <div className="flex items-center border rounded-full lg:w-25 lg:h-8">

                <button
                  onClick={() =>
                    quantity > 1 && setQuantity(quantity - 1)
                  }
                  className="px-3 py-4 text-sm"
                >
                  -
                </button>

                <span className="px-3 text-sm font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="px-3 py-4 text-sm"
                >
                  +
                </button>

              </div>



              <button className="bg-red-700 text-white py-1 rounded-full font-semibold h-15 lg:w-100 lg:h-10 text-sm">
                🛒 Add to Cart — {totalPrice} AFN
              </button>
            </div>

            {/* Info Box */}
            <div className="bg-orange-100  p-3  rounded-3xl text-gray-700 text-sm">

              🚚 Free delivery on orders above 500 AFN
              💵 Cash on Delivery only
              📍 Kabul only

            </div>

          </div>

        </div>
      </section>


    </>


  );
}