"use client";

import { useEffect } from "react";

const LOTTIE_SRC = "https://assets2.lottiefiles.com/packages/lf20_qp1q7mct.json";

export function EmptyMenuState({ search }) {
  useEffect(() => {
    if (document.querySelector("script[data-lottie-player]")) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;
    script.dataset.lottiePlayer = "true";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center justify-center py-16 text-center">
      <lottie-player
        autoplay
        loop
        mode="normal"
        src={LOTTIE_SRC}
        style={{ width: "280px", height: "210px" }}
        aria-label="No menu items found"
      />
      <h2 className="mt-2 text-2xl font-black text-[#1f140f]">No item found</h2>
      <p className="mt-3 max-w-md text-sm leading-6 text-stone-600">
        We could not find anything for <span className="font-bold text-[#a51d22]">{search}</span>.
        Try another pizza, burger, or category.
      </p>
    </div>
  );
}
