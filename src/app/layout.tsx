import type { Metadata } from "next";
import "./globals.css";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Update from './Components/update'
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Update/>
        <Footer/>
      </body>
    </html>
  );
}
