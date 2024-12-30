import Topbar from "@/components/home/topbar/Topbar";
import Navbar from "@/components/home/navbar/Navbar";
import Footer from "@/components/home/footer/Footer";
import "@/styles/globals.scss";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Tienda de Ropa Online para Hombre y Mujer | Movies",
  description: "Tienda de Ropa Online para Hombre y Mujer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
