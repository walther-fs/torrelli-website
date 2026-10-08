"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className="fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gray-border bg-black/80 text-silver backdrop-blur-md transition-all hover:border-red hover:text-red"
    >
      <FaArrowUp className="h-4 w-4" />
    </button>
  );
}
