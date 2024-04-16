import { Josefin_Slab, Novecento } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Footer from "./Component/Footer";
import Conact from "./Component/Conact";

const inter = Josefin_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "THE GATEWAY",
  description: "L&T Realty - The Gateway sewri in mumbai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.png" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`} >{children}</body>
      <Conact />
      <Footer></Footer>
    </html>
  );
}
