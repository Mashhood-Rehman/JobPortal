
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Home/Navbar"
import Footer from "../app/components/Home/Footer"
import ClientProvider from "./components/Hoc/ClientProvider";
import ScrollToTop from "./Helper/ScrollToTop";

const font = Plus_Jakarta_Sans({ 
  weight:['200', '300' , '400' , '500' , '600' , '700' , '800'],
  subsets:["latin"]
 });

export const metadata: Metadata = {
  title: "Jobify | Find Your Dream Job",
  description: "Find Your Dream Job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
    </ClientProvider>
  );
}
