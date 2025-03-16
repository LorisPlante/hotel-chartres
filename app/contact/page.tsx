"use client";
import HeaderDefault from "@/components/headerDefault";
import TapBar from "@/components/tap-bar";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <>
      <HeaderDefault></HeaderDefault>
      <main id="laSuite" className="relative pt-8 lg:pt-52 flex justify-start flex-col gap-10 items-center min-h-[calc(100vh-208px)] mb-20">
        <section className="w-full p-mobile">
          <div className="bg-background-secondary text-content-ter flex flex-col justify-start items-start gap-2 p-mobile py-8">
            <h2 className=" font-h2-chambre text-h2-chambre ">Contact</h2>
            <p>L’Hôtel de Chartres</p>
            <p>28 rue du grand faubourg</p>
            <p>28000 Chartres</p>
            <p>France</p>
            <p>
              <span>Tel : </span>
              <span>+33 2 37 18 52 77</span>
            </p>
            <p>
              <span>Email : </span>
              <span>contact@lhotel-chartres.com</span>
            </p>
          </div>
        </section>
        <section className="p-mobile w-full flex flex-col justify-start items-start gap-2">
          <h2 className="font-h2-chambre text-h2-chambre">Accès</h2>
          <h3 className="font-h3-chambre text-h3-chambre">En train</h3>
          <p>Gare Montparnasse - Gare de Chartres</p>
          <h3 className="font-h3-chambre text-h3-chambre">En voiture</h3>
          <p>À 1 heure de Paris via l’A86</p>
          <p>À 1 heure du Mans via l’A12</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440.21752605832626!2d1.4816158465290694!3d48.44363787690131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e40c44008c1ebb%3A0xa4d7d4cb20ea960d!2s28%20Rue%20du%20Grand%20Faubourg%2C%2028000%20Chartres!5e0!3m2!1sfr!2sfr!4v1741771607246!5m2!1sfr!2sfr"
            style={{ border: 0 }}
            loading="lazy"
            className="w-full aspect-square mt-8"></iframe>
        </section>
      </main>
      <Footer></Footer>
      <TapBar></TapBar>
    </>
  );
}
