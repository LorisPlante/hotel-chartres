"use client";
import { useEffect, useState } from "react";

export default function TapBar() {
  const [scrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`w-full p-mobile fixed lg:hidden z-50 left-0 transition-all duration-300 ${scrolled ? "bottom-6" : "-bottom-20"}`}>
        <div className="w-full py-3 bg-background-secondary text-content-ter flex justify-center items-center font-semibold cursor-pointer uppercase">
          <span>Découvrir nos tarifs</span>
        </div>
      </div>
    </>
  );
}
