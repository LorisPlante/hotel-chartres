"use client";
import HeaderHome from "@/components/headerHome";
import HomeLanding from "@/components/home-landing";
import TapBar from "@/components/tap-bar";
import { useEffect, useState } from "react";
import { A11y, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Footer from "@/components/footer";

export default function Home() {
  const images = [
    "/medias/img/chambres hotels/suite/ch3.jpg",
    "/medias/img/chambres hotels/ch confort/ch3.jpg",
    "/medias/img/chambres hotels/prestige/ch1.jpg",
    "/medias/img/chambres hotels/ch confort/ch4.jpg",
    "/medias/img/chambres hotels/ch standard/ch1.jpg",
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
          <img src="/medias/img/chambres hotels/suite/ch3.jpg" alt="Chambre de L'Hôtel de Chartres" className="ml-28 h-[60vh] aspect-[3/4] object-cover"></img>
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
                  <img src={image} alt={names[index]} className="w-full block aspect-square object-cover" />
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
                  <img src={image} alt={names[index]} className="w-full block aspect-square object-cover" />
                  {names[index]}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <div className="absolute -bottom-10 sm:bottom-0 left-0 translate-y-full sm:translate-y-0">
          <Footer></Footer>
        </div>
      </main>

      <TapBar></TapBar>
    </>
  );
}
