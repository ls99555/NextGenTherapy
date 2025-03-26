import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/variables.css";
import { geistSans, geistMono } from "../styles/fonts"; 
import Header from "../components/header";
import Footer from "../components/footer";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}