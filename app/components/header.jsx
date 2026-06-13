"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, ShoppingCart } from "lucide-react";
import { GrRestaurant } from "react-icons/gr";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/track-order", label: "Track Order" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadbd5] bg-[#fffaf7]/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-[#9b1c20]">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#eadbd5] bg-white shadow-sm">
            <GrRestaurant className="h-6 w-6" />
          </span>
          <span className="text-xl font-black leading-none tracking-normal">
            Towns Pizza
          </span>
        </Link>

        <nav className="hidden items-center gap-3 text-sm font-semibold text-[#1f140f] md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-[#f4e6e6] text-[#a51d22] shadow-sm"
                    : "hover:bg-[#f4e6e6] hover:text-[#a51d22]"
                }`}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#a51d22]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full text-stone-600 transition hover:bg-[#f4e6e6] hover:text-[#a51d22]"
          >
            <Moon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#a51d22] text-white shadow-sm transition hover:bg-[#8f171b]"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
