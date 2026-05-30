'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, LayoutDashboard, Settings, LogOut, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Fungsi pura-pura submit berita
  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi loading ke server selama 1.5 detik
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Hilangkan pesan sukses setelah 3 detik
      setTimeout(() => setShowSuccess(false), 3000);
      
      // Di sini idealnya form di-reset, tapi kita biarkan untuk simulasi UI
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      
      {/* --- SIDEBAR ADMIN --- */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 hidden md:block fixed h-full z-10">
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900">
            SARDES<span className="text-brand-orange">NEWS</span>
          </Link>
          <p className="text-xs text-gray-500 mt-1 font-medium">Ruang Redaksi</p>
        </div>
        
        <nav className="p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-brand-blue/5 text-brand-blue rounded-xl font-bold border border-brand-blue/10">
            <PenTool className="w-5 h-5" />
            Tulis Berita
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-brand-orange rounded-xl font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            Daftar Publikasi
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-brand-orange rounded-xl font-medium transition-colors">
            <Settings className="w-5 h-5" />
            Pengaturan
          </a>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors">
            <LogOut className="w-5 h-5" />
            Keluar
          </Link>
        </div>
      </aside>

      {/* --- KONTEN UTAMA DASHBOARD --- */}
      <main className="flex-1 md:ml-64 p-4 sm:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          
          <header className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Editor Berita</h1>
            <p className="text-gray-500">Buat, edit, dan publikasikan artikel ke portal berita Anda.</p>
          </header>

          {/* Form Tulis Berita */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <form onSubmit={handlePublish} className="p-6 sm:p-8">
              
              {/* Input Judul */}
              <div className="mb-6">
                <input 
                  type="text" 
                  placeholder="Ketik judul berita di sini..."
                  required
                  className="w-full text-2xl sm:text-3xl font-bold text-slate-900 placeholder-gray-300 border-none focus:ring-0 px-0 bg-transparent"
                />
              </div>

              {/* Baris Kategori & Penulis */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Kategori</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-slate-700 bg-gray-50">
                    <option>Teknologi</option>
                    <option>Bisnis</option>
                    <option>Gaya Hidup</option>
                    <option>Opini</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Penulis</label>
                  <input 
                    type="text" 
                    defaultValue="Tim Redaksi"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-slate-700 bg-gray-50"
                  />
                </div>
              </div>

              {/* Area Upload Gambar (Simulasi) */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Gambar Utama (Cover)</label>
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-brand-blue transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-slate-700">Klik untuk mengunggah gambar</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG, WebP (Max 2MB)</p>
                </div>
              </div>

              {/* Editor Konten Berita */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Isi Berita</label>
                <textarea 
                  rows={10}
                  required
                  placeholder="Tuliskan isi berita yang komprehensif..."
                  className="w-full border border-gray-200 rounded-2xl p-4 text-slate-700 text-base leading-relaxed focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all resize-y bg-gray-50"
                ></textarea>
              </div>

              {/* Tombol Publikasi & Notifikasi Sukses */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3.5 rounded-xl font-bold text-white transition-all shadow-lg ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-brand-blue hover:bg-[#012269] hover:shadow-brand-blue/30 hover:-translate-y-0.5'
                  }`}
                >
                  {isSubmitting ? 'Mempublikasikan...' : 'Publikasikan Sekarang'}
                </button>
                <button type="button" className="px-6 py-3.5 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors">
                  Simpan Draft
                </button>

                <AnimatePresence>
                  {showSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="ml-auto flex items-center gap-2 text-green-600 font-bold bg-green-50 px-4 py-2 rounded-lg"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm">Berita berhasil tayang!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </motion.div>

        </div>
      </main>

    </div>
  );
}