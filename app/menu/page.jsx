"use client";

import { useState } from "react";
import { MenuCard } from "../components/MenuCard";
import { menuItems } from "../menuItems";


// Category buttons and their icons.
const categoryIcons = {
  All: "🍕",
  Chicken: "🍗",
  Vegetable: "🥬",
  Cheese: "🧀",
  Special: "⭐",
  Burgers: "🍔",
  Shawrma: "🌯",
};

const categories = Object.keys(categoryIcons);

export default function Home() {
  // State for the selected category and search input.
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  // filter by category and search text together.
  const filteredMenuItems = menuItems.filter((item) => {
    const matchCategory = category === "All" || item.category === category;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  // Menu sections with title, icon, count, and related items.
  const visibleCategories = categories
    .filter((categoryName) => categoryName !== "All")
    .map((categoryName) => ({
      name: categoryName,
      items: filteredMenuItems.filter((item) => item.category === categoryName),
    }))
    .filter((menuSection) => menuSection.items.length > 0);

  return (
    <div className="min-h-screen  text-stone-950">
      {/* Header section */}
      {/* <header className="border-b border-stone-200 bg-white/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a className="text-2xl font-black tracking-tight text-red-600" href="#">
            Pizza Town
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-stone-700 sm:flex">
            <a className="hover:text-red-600" href="#menu">
              Menu
            </a>
          </nav>
        </div>
      </header> */}

      <main>
        <section id="menu" className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          {/* Page title and search input */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f4e6e6] px-5 py-2 text-sm font-black uppercase tracking-wide text-[#a51d22]">
              <span>✣</span>
              Explore
            </span>
            <h1 className="mt-6 text-5xl font-black leading-tight text-[#1f140f] sm:text-6xl">
              Our Menu
            </h1>
            <p className="mt-4 text-lg text-stone-600">
              Fresh &amp; delicious, delivered to your door
            </p>

            <div className="relative mx-auto mt-10 max-w-2xl">
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2" >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search menu..."
                className="h-16 w-full rounded-[26px] border border-stone-200 bg-white px-14 text-base text-stone-700 shadow-[0_3px_10px_rgba(28,25,23,0.12)] outline-none transition placeholder:text-stone-500 focus:border-[#a51d22]"
              />
            </div>
          </div>

          {/* Category filter buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((categoryName) => {
              const isActive = categoryName === category;

              return (
                <button
                  key={categoryName}
                  type="button"
                  onClick={() => setCategory(categoryName)}
                  className={`inline-flex h-14 items-center gap-2 rounded-full border px-7 text-base font-bold transition ${
                    isActive
                      ? "border-[#a51d22] bg-[#a51d22] text-white shadow-md"
                      : "border-stone-200 bg-white text-stone-900 hover:border-[#a51d22] hover:text-[#a51d22]"
                  }`}
                >
                  <span>{categoryIcons[categoryName]}</span>
                  {categoryName}
                </button>
              );
            })}
          </div>

          {/* Filtered menu items with category titles */}
          <div className="mt-14 space-y-16">
            {visibleCategories.map((menuSection) => (
              <section key={menuSection.name} id={menuSection.name.toLowerCase()} className="scroll-mt-8">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4e6e6] text-xl">
                    {categoryIcons[menuSection.name]}
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-[#1f140f]">{menuSection.name}</h2>
                    <p className="mt-1 text-sm text-stone-600">
                      {menuSection.items.length} {menuSection.items.length === 1 ? "item" : "items"}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {menuSection.items.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      {/* Footer section */}
      <footer id="footer" className="bg-stone-950 px-5 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold">Pizza Town</p>
          <p className="text-stone-400">Fresh pizza, burgers, and shawrma for quick orders.</p>
        </div>
      </footer>
    </div>
  );
}
