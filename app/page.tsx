"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MessageCircle, Pizza, Smile, Star, Truck, Utensils, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { MenuCard } from "./components/MenuCard";
import { menuItems } from "./menuItems";

const popularItems = [
  {
    ...menuItems.find((item) => item.id === 18)!,
    name: "Special Towns Pizza",
    isNew: true,
  },
  {
    ...menuItems.find((item) => item.id === 1)!,
    name: "Chicken Pizza",
  },
  {
    ...menuItems.find((item) => item.id === 16)!,
    name: "Margrita Pizza",
  },
];

const features = [
  {
    title: "Fast Delivery",
    text: "30 min or less across all of Kabul city",
    icon: Truck,
    color: "bg-red-100 text-[#a51d22]",
  },
  {
    title: "Open Late",
    text: "Serving you 10:00 AM - 11:00 PM daily",
    icon: Clock,
    color: "bg-amber-100 text-[#1f140f]",
  },
  {
    title: "Top Quality",
    text: "100% fresh ingredients, made to order",
    icon: Utensils,
    color: "bg-emerald-100 text-emerald-700",
  },
];

const reviews = [
  {
    name: "Ahmad S.",
    text: "Best pizza in Kabul! Fast delivery and always hot. Highly recommend the Special Towns Pizza.",
  },
  {
    name: "Fatima K.",
    text: "Love the chicken fajita option. Fresh ingredients and great taste. My family's favorite.",
  },
  {
    name: "Omar R.",
    text: "The Beef Pizza is incredible. Great value for money and amazing customer service.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf7] text-[#1f140f]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_76%_32%,rgba(253,199,179,0.54),transparent_34%),linear-gradient(90deg,#fffaf7_0%,#ffe9df_100%)]">
        <motion.span
          aria-hidden="true"
          className="float-badge absolute left-[7%] top-[64%] hidden text-4xl opacity-25 md:block"
        >
          *
        </motion.span>
        <motion.span
          aria-hidden="true"
          className="float-badge absolute right-[7%] top-[25%] hidden h-12 w-12 rounded-full border-[10px] border-[#efcfc7] opacity-40 lg:block"
          style={{ animationDelay: "0.8s" }}
        />
        <motion.span
          aria-hidden="true"
          className="float-badge absolute bottom-[7%] right-[13%] hidden h-10 w-10 rotate-12 rounded-md bg-[#ffd86a] opacity-35 lg:block"
          style={{ animationDelay: "1.4s" }}
        />
        <div className="mx-auto grid min-h-[calc(86vh-3.5rem)] max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-[1fr_0.9fr] lg:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-[#e8c1b7] bg-[#f7ded7] px-4 py-2 text-sm font-bold text-[#a51d22]"
            >
              <span className="h-2 w-2 rounded-full bg-[#a51d22]" />
              Delivering across Kabul
            </motion.span>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-7 max-w-2xl text-4xl font-black leading-[1.06] tracking-normal sm:text-5xl lg:text-6xl"
            >
              Order, Track,
              <span className="block text-[#a84746]">and Indulge</span>
              <span className="block">in Delicious Pizza</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-5 max-w-lg text-base leading-7 text-stone-600"
            >
              The best pizza in Kabul, delivered hot to your door. Fresh
              ingredients, authentic recipes, and lightning-fast delivery.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link
                href="/menu"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#a51d22] px-7 text-sm font-black text-white shadow-[0_12px_24px_rgba(165,29,34,0.22)] transition hover:bg-[#8f171b]"
              >
                Order Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#d7b6ae] bg-white/55 px-7 text-sm font-black text-[#a51d22] transition hover:border-[#a51d22] hover:bg-[#a51d22] hover:text-white"
              >
                Contact Us
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-transparent bg-white/80 px-3.5 py-2.5 shadow-sm ring-1 ring-white/80 backdrop-blur transition-colors hover:border-[#a51d22]">
                <Smile className="h-6 w-6 text-orange-400" />
                <p className="text-sm leading-tight text-stone-500">
                  <strong className="block text-base font-black text-[#1f140f]">2000+</strong>
                  Happy Customers
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-transparent bg-white/80 px-3.5 py-2.5 shadow-sm ring-1 ring-white/80 backdrop-blur transition-colors hover:border-[#a51d22]">
                <Zap className="h-5 w-5 text-orange-500" />
                <p className="text-sm leading-tight text-stone-500">
                  <strong className="block text-base font-black text-[#1f140f]">30min</strong>
                  Avg. Delivery
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-transparent bg-white/80 px-3.5 py-2.5 shadow-sm ring-1 ring-white/80 backdrop-blur transition-colors hover:border-[#a51d22]">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <p className="text-sm leading-tight text-stone-500">
                  <strong className="block text-base font-black text-[#1f140f]">4.8</strong>
                  Rating
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
            className="relative mx-auto aspect-square w-full max-w-[390px] overflow-hidden rounded-[22px] shadow-[0_24px_56px_rgba(91,48,28,0.2)]"
          >
            <Image
              src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=900&q=85"
              alt="Pepperoni pizza with basil"
              fill
              priority
              sizes="(min-width: 1024px) 390px, 88vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      <motion.a
        href="https://wa.me/93700123456"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.65, duration: 0.35, ease: "easeOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-6 z-50 grid h-16 w-16 place-items-center rounded-full bg-[#079b2f] text-white shadow-[0_18px_34px_rgba(7,155,47,0.32)] ring-4 ring-white/70 transition hover:bg-[#058527]"
      >
        <MessageCircle className="h-8 w-8" />
      </motion.a>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="flex min-h-44 flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white px-8 text-center shadow-sm transition-colors hover:border-[#e2beb6]"
              >
                <span className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${feature.color}`}>
                  <Icon className="h-7 w-7" />
                </span>
                <h2 className="text-lg font-black">{feature.title}</h2>
                <p className="mt-4 text-sm leading-6 text-stone-600">{feature.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 flex items-end justify-between gap-6"
        >
          <div>
            <span className="inline-flex rounded-full bg-[#f4e6e6] px-4 py-1.5 text-xs font-black uppercase text-[#a51d22]">
              # Most Ordered
            </span>
            <h2 className="mt-4 text-3xl font-black">Popular Picks</h2>
            <p className="mt-2 text-base text-stone-600">Our customers&apos; all-time favorites</p>
          </div>
          <Link
            href="/menu"
            className="hidden h-11 items-center justify-center rounded-full border border-stone-200 bg-white px-6 text-sm font-bold shadow-sm transition hover:border-[#a51d22] hover:text-[#a51d22] sm:inline-flex"
          >
            View Full Menu
            <span className="ml-2">-&gt;</span>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {popularItems.map((item) => (
            <motion.div key={item.id} variants={fadeUp} transition={{ duration: 0.55, ease: "easeOut" }}>
              <MenuCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-[#ffeadf] px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#f4d6d1] px-4 py-1.5 text-xs font-black uppercase text-[#a51d22]">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-black">What Our Customers Say</h2>
          <p className="mt-2 text-base text-stone-600">Real reviews from real pizza lovers in Kabul</p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {reviews.map((review) => (
              <motion.article
                key={review.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="rounded-2xl border border-stone-200 bg-white p-7 text-left shadow-sm"
              >
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 min-h-24 text-sm italic leading-6 text-stone-600">&quot;{review.text}&quot;</p>
                <div className="mt-6 border-t border-stone-200 pt-5">
                  <strong className="text-sm font-black">{review.name}</strong>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-white px-8 py-14 text-center shadow-[0_18px_40px_rgba(28,25,23,0.12)]"
        >
          <span className="absolute -top-7 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full bg-white text-[#a51d22] shadow-sm">
            <Pizza className="h-8 w-8" />
          </span>
          <h2 className="text-4xl font-black">Hungry? Order Now!</h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-stone-600">
            Browse our menu and get delicious pizza delivered to your door in Kabul.
            Cash on delivery only.
          </p>
          <Link
            href="/menu"
            className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#a51d22] px-9 text-base font-black text-white shadow-[0_12px_24px_rgba(165,29,34,0.22)] transition hover:bg-[#8f171b]"
          >
            Browse Menu
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
