"use client";

export default function Footer() {
  return (
    <footer className="max-w-full p-mobile sm:p-desktop pb-20 sm:pb-0 flex flex-wrap gap-x-2 gap-y-1 font-thin">
      <a href="#" className="block border-r border-content pr-1">
        Mentions légales
      </a>
      <a href="#" className="block border-r border-content pr-1">
        Politique de confidentialité
      </a>
      <a href="#" className="block border-r border-content pr-1">
        Plan du site
      </a>
      <a href="#">Contact</a>
    </footer>
  );
}
