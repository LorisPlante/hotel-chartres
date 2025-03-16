"use client";
import HeaderDefault from "@/components/headerDefault";
import TapBar from "@/components/tap-bar";
import Footer from "@/components/footer";

export default function NosSalons() {
  const images = ["/medias/img/chambres hotels/suite/ch3.jpg", "/medias/img/chambres hotels/suite/ch1.jpg"];
  const alts = ["", ""];
  return (
    <>
      <HeaderDefault></HeaderDefault>
      <main id="laSuite" className="relative pt-8 lg:pt-52 flex justify-center flex-col items-center min-h-[calc(100vh-208px)] mb-20">
        <section className="w-full">
          <h2 className="text-content-secondary font-h2-chambre text-h2-chambre p-mobile">Nos salons</h2>
          <div className="w-full overflow-hidden flex justify-center items-center gap-4 pl-20">
            <img src={images[0]} alt={alts[0]} className="h-[60vh] aspect-[3/4] object-cover" />
            <img src={images[1]} alt={alts[1]} className="h-[60vh] aspect-[3/4] object-cover" />
          </div>
        </section>
        <section className="p-mobile my-8">
          <div className="w-full flex justify-center items-center flex-col gap-2 text-center">
            <h2 className="font-h2-chambre text-h3-chambre w-full block border-b border-black">Réserver une salle</h2>
            <p>Vous recevrez une réponse sur votre boîte mail</p>
          </div>
        </section>
      </main>
      <Footer></Footer>
      <TapBar></TapBar>
    </>
  );
}
