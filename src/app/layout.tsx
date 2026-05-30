import type { Metadata } from "next";
import { Inter } from "next/font/google"; // atau font yang Anda gunakan
import "./globals.css";

// 1. Tambahkan import Footer
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuloDev | Template News Portal",
  description: "Portal berita teknologi, bisnis, dan gaya hidup terkini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Navbar di paling atas */}
        <Navbar />
        
        {/* Konten halaman akan mengisi ruang tengah secara fleksibel */}
        <div className="flex-grow">
          {children}
        </div>
        
        {/* Footer di paling bawah */}
        <Footer />
      </body>
    </html>
  );
}