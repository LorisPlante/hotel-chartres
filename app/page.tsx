"use client";
import HeaderHome from "@/components/headerHome";
import HomeLanding from "@/components/home-landing";
import TapBar from "@/components/tap-bar";

import { useEffect, useState } from "react";
import Image from "next/image";

import { A11y, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const images = [
    "/medias/img/svg/la-suite-carre.svg",
    "/medias/img/svg/chambre-familliale-carre.svg",
    "/medias/img/svg/chambre-prestige-carre.svg",
    "/medias/img/svg/chambre-confort-carre.svg",
    "/medias/img/svg/chambre-standard-carre.svg",
  ];
  const names = ["La suite", "Chambre familliale", "Chambre prestige", "Chambre confort", "Chambre standard"];
  const hrefs = ["/la-suite", "/chambre-familliale", "/chambre-prestige", "/chambre-confort", "/chambre-standard"];

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
      <HeaderHome></HeaderHome>
      <main id="home" className="min-h-[calc(100vh+1px)] pt-8 lg:pt-52 relative mb-20 lg:mb-0">
        <HomeLanding></HomeLanding>
        <section className="relative w-full p-mobile flex lg:hidden justify-start items-start flex-col gap-9 overflow-x-hidden">
          <h2 className="absolute top-8 left-6 flex justify-start items-start flex-col font-zodiak text-content-secondary text-4xl font-bold">
            <span>{`L'Hôtel de `}</span>
            <span>{`Chartres `}</span>
          </h2>
          <Image src="/medias/img/svg/chambre-familliale-rect.svg" alt="Chambre de L'Hôtel de Chartres" width={600} height={800} className="ml-28"></Image>
          <p className="text-p font-p">
            {`28 rue du grand faubourg`} <br />
            {`Tel : 33 (0)2 37 18 52 77`}
          </p>
          <div className="flex justify-start items-start flex-col">
            <h3 className="font-h3-home text-h3-home">{`Votre séjour au coeur de Chartres`}</h3>
            <p className="text-p font-p mb-6">
              {`L’Hôtel de Chartres est le lieu idéal pour réserver une chambre d’hôtel à Chartres, quelque soit le motif de votre déplacement : professionnel, loisirs ou sortie en
          famille`}
            </p>
          </div>
        </section>
        <section className="w-full p-mobile block lg:hidden mb-20">
          <div className={`w-full font-switzer font-semibold uppercase`}>
            {images.map((image, index) => (
              <div key={index}>
                <a href={hrefs[index]} className="border-b border-b-content flex justify-start items-start flex-col gap-6 pb-6 mb-6">
                  <Image src={image} alt={names[index]} width={400} height={400} className="w-full block" />
                  {names[index]}
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full hidden lg:block">
          <Swiper
            // Swiper modules
            modules={[A11y, Mousewheel]}
            spaceBetween={40}
            slidesPerView={3.3}
            direction="horizontal"
            mousewheel={true}
            className={`w-full !px-20 font-switzer font-semibold uppercase cursor-grab active:cursor-grabbing ${scrolled ? "pointer-events-auto" : "pointer-events-none"}`}>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <a href={hrefs[index]} className="border-b border-b-content flex justify-start items-start flex-col gap-6 pb-6">
                  <Image src={image} alt={names[index]} width={400} height={400} className="w-full block" />
                  {names[index]}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
      <TapBar></TapBar>
    </>
  );
}
