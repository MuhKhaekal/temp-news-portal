
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-slate-950 pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Efek Glow Oranye Halus di Sudut Kanan Bawah */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-orange-dark/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Kolom 1: Info Perusahaan */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block text-3xl font-bold text-white tracking-wide mb-6">
              YourCompany<span className="text-brand-orange">.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-8">
              Kami berkomitmen untuk terus menghadirkan inovasi digital tanpa batas. Mari berkolaborasi dan wujudkan visi bisnis Anda menjadi kenyataan bersama tim ahli kami.
            </p>

            {/* Input Newsletter Singkat */}
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all w-full max-w-xs"
              />
              <button className="bg-brand-orange hover:bg-brand-orange-dark text-white p-3 rounded-full transition-colors flex-shrink-0">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Jelajahi</h4>
            <ul className="space-y-4">
              {["Layanan Kami", "Portofolio Proyek", "Tentang Perusahaan", "Karir", "Blog & Artikel"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/50 group-hover:bg-brand-yellow transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Hubungi Kami</h4>
            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>Jl. Perintis Kemerdekaan, Makassar, Sulawesi Selatan</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <a href='' className="hover:text-white transition-colors">
                  yourcompaniesname@solutions.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>Senin - Jumat, 09.00 - 17.00 WITA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bagian Bawah: Copyright & SuloDev Branding */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm text-center md:text-left">&copy; {currentYear} YourCompany Solutions. All rights reserved.</p>

          {/* SULODEV BRANDING SECTION */}
          <div className="flex items-center gap-3 bg-white/[0.03] px-5 py-2.5 rounded-full border border-white/5 hover:bg-white/[0.08] transition-colors">
            <span className="text-gray-400 text-sm">Template dibuat oleh</span>
            <div className="flex items-center gap-2">
              {/* Tempat (Placeholder) untuk Logo SuloDev */}
              <div className="w-7 h-7 bg-brand-blue rounded-full flex items-center justify-center overflow-hidden border border-white/20 shrink-0">
                {/* 
                  Nanti Anda bisa mengganti src ini dengan path gambar logo Anda. 
                  Misalnya: src="/sulodev-logo.png" (jika file ditaruh di folder public/) 
                */}
                <img src="/SuloDev.png" alt="SuloDev Logo" className="w-full h-full object-cover text-[8px] text-center text-gray-500" />
              </div>
              {/* Teks Nama SuloDev */}
              <span className="text-white font-bold tracking-wide text-sm">
                Sulo<span className="text-brand-orange">Dev</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
