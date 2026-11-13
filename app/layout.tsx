import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuantX",
  description: "Transforming market complexity into powerful intelligence through advanced analytics, precision-driven insights, and smarter strategies to unlock opportunities and redefine the future of investing.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>){
  return (
      <html lang="en" className="dark">
         <body
           className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
           {children}
         </body>
      </html>
  );
}