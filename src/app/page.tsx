"use client";

import { motion } from "framer-motion";
import { newsArticles } from "@/data/news";
import { Clock, Sparkles } from "lucide-react";
import Link from "next/link"; // JANGAN LUPA IMPORT INI

export default function Home() {
  const headline = newsArticles[0];
  const otherNews = newsArticles.slice(1);

  return (
    <main className="min-h-screen bg-white">
      {/* Ticker Breaking News dengan Framer Motion (Pengganti Marquee) */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-brand-blue/[0.03] blur-[100px]" 
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
          className="absolute top-[30%] -right-[10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-orange/[0.04] blur-[120px]" 
        />
      </div>

      {/* --- TICKER BREAKING NEWS --- */}
      <div className="bg-white border-b border-gray-100 shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-4 overflow-hidden">
          <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-bold uppercase tracking-wider text-[11px] sm:text-xs">Breaking News</span>
          </div>
          <div className="w-full overflow-hidden whitespace-nowrap flex items-center relative mask-image-fade">
            <motion.div 
              animate={{ x: ["100%", "-100%"] }} 
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }} 
              className="inline-block font-medium text-gray-600 text-sm"
            >
              Selamat datang di TemplateNews — Portal berita terkini. Jelajahi informasi terbaru seputar teknologi, bisnis, gaya hidup, dan opini pakar hari ini.
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Layout Berita Utama (Hero Section) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* --- KOLOM KIRI: Berita Utama (Headline) --- */}
          {/* Perhatikan: Di sini menggunakan 'headline.id', bukan 'news.id' */}
          <Link href={`/berita/${headline.id}`} className="lg:col-span-8 group cursor-pointer block">
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="relative h-[400px] sm:h-[500px] w-full rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${headline.image})` }} />
                {/* Overlay gelap di bagian bawah agar tag kategori menonjol */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">{headline.category}</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight group-hover:text-brand-orange transition-colors">{headline.title}</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">{headline.excerpt}</p>

              <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                <span className="text-brand-blue font-bold">{headline.author}</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {headline.date}
                </span>
              </div>
            </motion.article>
          </Link>

          {/* --- KOLOM KANAN: Berita Lainnya --- */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <div className="border-b-2 border-slate-900 pb-2 mb-2">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-wider">Sedang Hangat</h3>
            </div>

            {/* Perhatikan: Di sini baru menggunakan 'news.id' karena ada di dalam .map() */}
            {otherNews.map((news, index) => (
              <Link href={`/berita/${news.id}`} key={news.id} className="block">
                <motion.article initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="group cursor-pointer grid grid-cols-3 gap-4">
                  <div className="col-span-1 h-24 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${news.image})` }} />
                  </div>
                  <div className="col-span-2 flex flex-col justify-center">
                    <span className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-1">{news.category}</span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">{news.title}</h4>
                    <span className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {news.date}
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
