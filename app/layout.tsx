import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "L'Hôtel de Chartres, réservation de votre chambre",
  description: "En plein cœur de la ville de Chartres, cet établissement de charme sera votre nid douillet pour votre prochaine visite. Situé derrière notre restaurant...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" dir="ltr">
      <body className="bg-background relative">{children}</body>
    </html>
  );
}
