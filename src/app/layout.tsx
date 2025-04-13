import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Notification from "@/app/components/Notification";
import { SessionProvider } from "next-auth/react";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "500", "700"],
});

export const metadata: Metadata = {
  title: "FlavorSync",
  description: "A restaurant ordering website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}  antialiased`}>
        <SessionProvider>
          <Notification />
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
