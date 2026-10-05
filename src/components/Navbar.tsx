import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../data/agencyData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'لماذا نجوى عمار؟', href: '#why-us' },
    { label: 'أعمالنا', href: '#portfolio' },
    { label: 'إنجازاتنا', href: '#stats' },
    { label: 'آراء العملاء', href: '#testimonials' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs py-2 sm:py-3'
          : 'bg-white/80 sm:bg-white/50 backdrop-blur-md py-2.5 sm:py-4 border-b border-slate-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 sm:h-12">
          {/* Zone 1: Single text element wordmark with official logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2 sm:gap-3 text-slate-900 focus:outline-none"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-emerald-500 to-blue-500 shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <img
                src="/najwa-ammar-logo.svg"
                alt="شعار نجوى عمار للدعاية والإعلان"
                className="w-full h-full object-contain rounded-full bg-slate-950"
              />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xs sm:text-base lg:text-lg font-black tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
                {HERO_DATA.brandName}
              </span>
              <span className="text-[10px] text-slate-500 font-medium hidden sm:inline leading-none mt-0.5">
                للدعاية والإعلان والمطبوعات
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-700 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single primary action CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex relative group overflow-hidden rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>اطلب خدمتك</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl text-slate-700 bg-white/90 border border-slate-200/90 hover:bg-slate-100 active:scale-95 transition-all"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200/80 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-amber-500 shadow-sm flex items-center justify-center gap-2"
              >
                <span>اطلب خدمتك الآن</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
