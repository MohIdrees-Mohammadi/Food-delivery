"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export function MenuCard({ item }) {
  const sizes = Object.keys(item.prices);
  const [selectedSize, setSelectedSize] = useState("Large");
  const selectedPrice = selectedSize ? item.prices[selectedSize] : "";
  const itemHref = `/menu/${item.id}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200  shadow-[0_3px_10px_rgba(28,25,23,0.14)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(28,25,23,0.16)]">
      <Link href={itemHref} className="block">
        <div className="relative aspect-[1.45] overflow-hidden bg-stone-100">
          <Image src={item.image} alt={item.name} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"/>

          {item.isNew ? (
            <div className="absolute left-3 top-3">
              <span className="rounded-full bg-[#a51d22] px-4 py-1.5 text-xs font-black leading-none text-white shadow-md">
                NEW </span> </div>) 
                : 
                (null) }
        </div>
      </Link>

      <div className="flex min-h-52 flex-col p-4">
        <div>
          <Link href={itemHref} className="block">
            <h3 className="text-base font-black leading-tight text-stone-950 transition hover:text-[#a51d22]">{item.name}</h3>
          </Link>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-600">
            {item.description}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {sizes.map((size) => {
            const isActive = size === selectedSize;

            return (
              <button
                key={size} type="button" onClick={() => setSelectedSize(size)}
                className={`h-7 rounded-full px-3 text-xs font-bold transition ${ isActive
                    ? "bg-[#a51d22] text-white shadow-md"
                    : "bg-[#fde2ce] text-[#681915] hover:bg-[#f8d2b8]"
                }`}>
                {size}
              </button>
            );
          })}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <p className="min-w-24 text-xl font-black leading-none text-[#a51d22]">
            {selectedPrice} </p>
          <button type="button" className="inline-flex h-10 min-w-20 items-center justify-center gap-2 rounded-full bg-[#f4e6e6] px-4 text-sm font-bold text-[#9b1c20] transition hover:bg-[#ecd7d7]">
            <span className="text-lg font-normal leading-none">+</span>
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
