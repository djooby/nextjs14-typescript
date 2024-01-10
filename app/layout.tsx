import type { Metadata } from "next";
import { Inter, Raleway, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const quicksand = Quicksand({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Home - Next App",
  description: "The home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={quicksand.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
