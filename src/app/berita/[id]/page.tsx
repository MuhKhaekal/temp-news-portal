"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { newsArticles } from "@/data/news";
import { Clock, User, ArrowLeft, Share2, Bookmark, MessageSquare } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function DetailBerita({ params }: PageProps) {
  // Mengunwrap params Promise sesuai dengan standar Next.js modern
  const { id } = use(params);

  // Mencari artikel berdasarkan ID dari URL
  const article = newsArticles.find((item) => item.id === parseInt(id));

  // Jika artikel tidak ditemukan
  if (!article) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Artikel Tidak Duntemukan</h2>
        <p className="text-gray-500 mb-6">Maaf, berita yang Anda cari tidak ada atau telah dihapus.</p>
        <Link href="/" className="px-6 py-3 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-orange transition-colors">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  // Mengambil berita terkait (berita selain yang sedang dibaca)
  const relatedArticles = newsArticles.filter((item) => item.id !== article.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white pt-8 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tombol Kembali */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-orange mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>

        {/* --- AREA HEADER ARTIKEL --- */}
        <header className="mb-8">
          {/* Badge Kategori */}
          <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider rounded-md mb-4">{article.category}</span>

          {/* Judul Utama */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-6">{article.title}</h1>

          {/* Metadata Penulis & Tanggal */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-6 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-brand-blue">
                  <User className="w-4 h-4" />
                </div>
                <span>
                  Oleh <strong className="text-slate-900">{article.author}</strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
            </div>

            {/* Tombol Interaksi Sosial Singkat */}
            <div className="flex items-center gap-2 text-gray-400">
              <button className="p-2 hover:bg-gray-100 hover:text-slate-700 rounded-full transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 hover:text-slate-700 rounded-full transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* --- GAMBAR UTAMA ARTIKEL --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative h-[300px] sm:h-[450px] w-full rounded-2xl overflow-hidden mb-10 shadow-md">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }} />
        </motion.div>

        {/* --- ISI KONTEN UTAMA (EDITORIAL STYLE) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Sisi Kiri: Teks Artikel Penuh */}
          <article className="lg:col-span-12 prose prose-slate max-w-none text-slate-800 text-lg leading-relaxed space-y-6">
            <p className="font-semibold text-slate-900 text-xl leading-normal">{article.excerpt}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Pasca perkembangan teknologi yang masif, integrasi sistem digital dinilai menjadi kunci utama dalam mempertahankan
              eksistensi operasional di era modern.
            </p>
            <blockquote className="border-l-4 border-brand-orange pl-4 italic text-slate-900 font-medium text-xl my-8 bg-gray-50 py-4 pr-4 rounded-r-xl">
              &quot;Inovasi digital bukan lagi sekadar pilihan atau alternatif beralih, melainkan sebuah pondasi utama kepemimpinan industri di masa depan.&quot;
            </blockquote>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
          </article>
        </div>

        {/* --- SEKSI BERITA TERKAIT --- */}
        <footer className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Baca Juga Berita Lainnya</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedArticles.map((item) => (
              <Link key={item.id} href={`/berita/${item.id}`} className="group cursor-pointer flex flex-col">
                <div className="h-40 rounded-xl overflow-hidden relative mb-3 bg-gray-100">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${item.image})` }} />
                </div>
                <span className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                <h4 className="font-bold text-slate-900 leading-snug group-hover:text-brand-blue transition-colors line-clamp-2 text-sm sm:text-base">{item.title}</h4>
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
