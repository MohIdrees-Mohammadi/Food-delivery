"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { MenuCard } from "../components/MenuCard";
import { EmptyMenuState } from "../components/EmptyMenuState";
import { menuItems } from "../menuItems";

const categoryIcons = {
  All: "Pizza",
  Chicken: "Chicken",
  Vegetable: "Vegetable",
  Cheese: "Cheese",
  Special: "Special",
  Burgers: "Burgers",
  Shawrma: "Shawrma",
};

const categoryMarks = {
  All: "🍕",
  Chicken: "🍗",
  Vegetable: "🥬",
  Cheese: "🧀",
  Special: "⭐",
  Burgers: "🍔",
  Shawrma: "🌯",
};

const categories = Object.keys(categoryIcons);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function MenuPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredMenuItems = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchCategory = category === "All" || item.category === category;
      const matchSearch =
        normalizedSearch.length === 0 ||
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.description.toLowerCase().includes(normalizedSearch);

      return matchCategory && matchSearch;
    });
  }, [category, search]);

  const visibleCategories = categories
    .filter((categoryName) => categoryName !== "All")
    .map((categoryName) => ({
      name: categoryName,
      items: filteredMenuItems.filter((item) => item.category === categoryName),
    }))
    .filter((menuSection) => menuSection.items.length > 0);

  return (
    <main className="min-h-screen bg-[#fffaf7] text-[#1f140f]">
      <section id="menu" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f4e6e6] px-4 py-1.5 text-xs font-black uppercase tracking-normal text-[#a51d22]">
            <span>#</span>
            Explore
          </span>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#1f140f] sm:text-5xl">
            Our Menu
          </h1>
          <p className="mt-3 text-base text-stone-600">
            Fresh & delicious, delivered to your door
          </p>

          <div className="relative mx-auto mt-8 max-w-xl">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-500"
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search menu..."
              className="h-14 w-full rounded-[24px] border border-stone-200 bg-white px-12 text-sm font-medium text-stone-700 shadow-[0_3px_10px_rgba(28,25,23,0.10)] outline-none transition placeholder:text-stone-500 focus:border-[#a51d22]"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {categories.map((categoryName) => {
            const isActive = categoryName === category;

            return (
              <button
                key={categoryName}
                type="button"
                onClick={() => setCategory(categoryName)}
                className={`inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-bold transition ${
                  isActive
                    ? "border-[#a51d22] bg-[#a51d22] text-white shadow-md"
                    : "border-stone-200 bg-white text-stone-900 hover:border-[#a51d22] hover:text-[#a51d22]"
                }`}
              >
                <span aria-hidden="true">{categoryMarks[categoryName]}</span>
                {categoryIcons[categoryName]}
              </button>
            );
          })}
        </motion.div>

        {filteredMenuItems.length === 0 ? (
          <EmptyMenuState search={search.trim() || category} />
        ) : (
          <div className="mt-10 space-y-12">
            {visibleCategories.map((menuSection) => (
              <motion.section
                key={menuSection.name}
                id={menuSection.name.toLowerCase()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                transition={{ staggerChildren: 0.08 }}
                className="scroll-mt-20"
              >
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="mb-6 flex items-center gap-4"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f4e6e6] text-xl">
                    {categoryMarks[menuSection.name]}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-[#1f140f]">{menuSection.name}</h2>
                    <p className="mt-1 text-sm text-stone-600">
                      {menuSection.items.length} {menuSection.items.length === 1 ? "item" : "items"}
                    </p>
                  </div>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {menuSection.items.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={fadeUp}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <MenuCard item={item} />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
