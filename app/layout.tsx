import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import "nes.css/css/nes.min.css";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
import SubscribeOrc from "@/components/ui/subscribeOrc/SubscribeOrc";

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "8bit Portfolio",
  description: "Portfolio website with next js, tailwind css and NES.css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <SubscribeOrc />
        <Footer />
      </body>
    </html>
  );
}
