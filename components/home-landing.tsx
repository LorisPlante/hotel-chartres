"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeLanding() {
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
    <div
      id="home-landing"
      className={`w-full h-screen hidden lg:flex justify-center items-center z-40 absolute top-0 left-0 ${scrolled ? "pointer-events-none" : "pointer-events-auto"}`}>
      <div className={`pointer-events-none absolute top-0 left-0 w-full h-full bg-background transition-all duration-[1.5s] delay-300 ${scrolled ? "opacity-0" : ""}`}></div>
      <div
        className={` pointer-events-none absolute top-0 left-0 w-1/2 h-full bg-background-secondary flex justify-center items-center transition-all duration-[1.5s] delay-300 transform ${
          scrolled ? "-translate-x-full" : ""
        }`}>
        <Image
          src="medias/img/svg/home-landing-cathedrale.svg"
          alt="Logo pointe cathédrale de Chartres"
          width={100}
          height={100}
          className="pointer-events-none w-1/3 transform translate-x-[20%] "></Image>
      </div>
      <div className={`absolute top-0 left-0 w-full h-full transform transition-all duration-[1.3s] ${scrolled ? "-translate-y-full" : ""}`}>
        <Image
          src="medias/img/svg/chambre-familliale-rect.svg"
          alt="Chambre familliale"
          width={300}
          height={300}
          className={`pointer-events-none w-[30%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-[1.3s] ${
            scrolled ? "opacity-0" : ""
          }`}></Image>

        <p
          className={`pointer-events-auto flex flex-col absolute bottom-[9%] left-[5%] w-[352px] text-lg text-content-ter transition-all duration-[1.3s] delay-150 transform ${
            scrolled ? "opacity-0" : ""
          }`}>
          {`28 rue du grand faubourg, 28000 Chartres`} <br />
          {`Tel : 33 (0)2 37 18 52 77`}
        </p>
        <div
          className={`pointer-events-none flex flex-col absolute bottom-[11%] right-[5%] w-[352px] transition-all duration-[1.3s] delay-150 transform ${
            scrolled ? "opacity-0" : ""
          }`}>
          <h3 className="font-zodiak font-extrabold text-3xl">
            {`Votre séjour`} <br /> {`au coeur de Chartres`}
          </h3>
          <p className="text-lg">
            {`L’Hôtel de Chartres est le lieu idéal pour réserver une chambre d’hôtel à Chartres, quelque soit le motif de votre déplacement : professionnel, loisirs ou sortie en
          famille`}
          </p>
        </div>
      </div>
      <h2
        className={`pointer-events-none flex justify-start items-start flex-col font-zodiak absolute left-[18%] bottom-[28%] z-40 text-content-ter text-7xl ransition-all duration-[1.3s] ${
          scrolled ? "opacity-0" : ""
        }`}>
        <span>{`L'Hôtel de `}</span>
        <span>{`Chartres `}</span>
      </h2>
    </div>
  );
}
