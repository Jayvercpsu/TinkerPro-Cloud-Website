import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; 
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import 'animate.css';

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "TinkerPro POS",
  description:
    "TinkerPro Cloud POS is a smart, cloud-based point-of-sale system designed to help businesses manage sales, inventory, and operations efficiently anytime, anywhere.",
  icons: {
    icon: "/globe.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/globe.png" type="image/png" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" /> 
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <script src="/assets/js/jquery.min.js" defer></script>
        <script src="/assets/js/jquery.slick.min.js" defer></script>
        <script src="/assets/js/wow.min.js" defer></script>
        <script src="/assets/js/main.js" defer></script>
      </head>
      <body className="antialiased" cz-shortcut-listen="true"> 
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>  
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}