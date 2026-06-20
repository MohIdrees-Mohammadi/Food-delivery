import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { GrRestaurant } from "react-icons/gr";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/cart", label: "Cart" },
  { href: "/track", label: "Track Order" },
  { href: "/#contact", label: "Contact" },
];

const contactItems = [
  { icon: Phone, text: "+93 700 123 456" },
  { icon: MapPin, text: "Kabul, Afghanistan" },
  { icon: Clock, text: "10:00 AM - 11:00 PM" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#eadbd5] bg-white px-5 py-12 text-[#1f140f] sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1.1fr_1.4fr]">
        <div>
          <Link href="/" className="flex items-center gap-3 text-[#9b1c20]">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-[#eadbd5] bg-white shadow-sm">
              <GrRestaurant className="h-7 w-7" />
            </span>
            <span className="text-xl font-black">Towns Pizza</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-stone-600">
            Delivering the best pizza in Kabul since 2020. Fresh ingredients,
            fast delivery, amazing taste.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm text-stone-700">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[#a51d22]">
                  - {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-stone-700">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.text} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f4e6e6] text-[#a51d22]">
                    <Icon className="h-4 w-4" />
                  </span>
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase">Delivery Area</h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-700">
            We deliver across all districts of Kabul city. Free delivery on
            orders above 500 AFN.
          </p>
          <div className="mt-5 inline-flex min-w-72 items-center gap-3 rounded-2xl bg-emerald-100 px-5 py-3 text-sm font-black text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            Now accepting orders
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl items-center justify-between border-t border-[#eadbd5] pt-8 text-xs text-stone-600">
        <p>© 2026 Towns Pizza. Made with love in Kabul</p>
        <Link href="/admin" className="transition hover:text-[#a51d22]">
          Admin
        </Link>
      </div>
    </footer>
  );
}
