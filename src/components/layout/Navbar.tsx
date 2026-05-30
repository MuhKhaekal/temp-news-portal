'use client';

import Link from 'next/link'; // Import Link dari Next.js
import { Menu, Search, UserCircle } from 'lucide-react';
import { categories } from '@/data/news';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Bar - Brand & Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Menu Mobile & Search */}
          <div className="flex items-center gap-4 flex-1">
            <button className="p-2 -ml-2 text-gray-600 hover:text-brand-blue transition-colors lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-brand-blue transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Logo Tengah (Ganti <a> menjadi <Link>) */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1">
            <Link href="/" className="text-3xl font-black tracking-tighter text-slate-900">
              TEMPLATE<span className="text-brand-orange">NEWS</span>
            </Link>
          </div>

          {/* Tombol Admin/Login Kanan (Ganti <a> menjadi <Link>) */}
          <div className="flex items-center justify-end flex-1">
            <Link href="/admin" className="hidden sm:flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-orange transition-colors">
              <UserCircle className="w-5 h-5" />
              Ruang Redaksi
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Categories Navigation */}
      <div className="border-t border-gray-100 hidden lg:block bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-8">
            {categories.map((category) => (
              <Link 
                key={category} 
                href=''
                className="py-3 text-sm font-semibold text-gray-600 hover:text-brand-orange transition-colors uppercase tracking-wider relative group"
              >
                {category}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}