"use client";
import HeaderDefault from "@/components/headerDefault";
import TapBar from "@/components/tap-bar";

import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import IconMaxPeople from "@/components/icons/IconMaxPeople";
import IconWifi from "@/components/icons/IconWifi";
import IconBathroom from "@/components/icons/IconBathroom";
import Footer from "@/components/footer";

export default function ChambreFamilliale() {
  const images = [
    "/medias/img/chambres hotels/ch confort/ch1.jpg",
    "/medias/img/chambres hotels/ch confort/ch2.jpg",
    "/medias/img/chambres hotels/ch confort/ch3.jpg",
    "/medias/img/chambres hotels/ch confort/ch4.jpg",
    "/medias/img/chambres hotels/ch confort/sdb.jpg",
  ];
  const alts = ["", "", "", "", ""];
  return (
    <>
      <HeaderDefault></HeaderDefault>
      <main id="chambreFamilliale" className="relative pt-8 lg:pt-52 flex justify-center flex-col items-center min-h-[calc(100vh-208px)] mb-20">
        <Swiper
          // Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full font-switzer font-semibold uppercase cursor-grab active:cursor-grabbing mb-24">
          <h2 className="absolute top-6 left-6 z-10 flex justify-start items-start flex-col text-content-secondary font-h2-chambre text-h2-chambre pointer-events-none normal-case">
            <span>{`Chambre`}</span>
            <span>{`familliale`}</span>
          </h2>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={alts[index]} className="w-full block aspect-[3/4] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <section className="w-full p-mobile">
          <div className="flex justify-start items-start flex-col gap-2">
            <h3 className="font-h3-chambre text-h3-chambre">{`Le confort comme chez soi`}</h3>
            <p className="text-p font-p">
              {`Lorem ipsum dolor sit amet consectetur. In malesuada urna eget nunc. In orci urna viverra faucibus aliquet. Facilisis cras ultrices eu et non nascetur a vestibulum `}
            </p>
            <div className="w-full flex justify-start items-center gap-2 text-content-secondary">
              <div className="flex justify-start items-center gap-1">
                <span className="text-lg">5</span>
                <IconMaxPeople></IconMaxPeople>
              </div>
              <IconWifi></IconWifi>
              <IconBathroom></IconBathroom>
              <a href="#" className="block border-b border-content-secondary">
                Voir plus
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
      <TapBar></TapBar>
    </>
  );
}
