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
          ? 'bg-white/80 backdrop-blur-2xl border-b border-emerald-950/5 shadow-xs py-3.5'
          : 'bg-white/40 backdrop-blur-md py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark with official logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-lg sm:text-xl font-black tracking-tight text-slate-900 focus:outline-none"
          >
            <div className="relative w-11 h-11 shrink-0 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-emerald-500 to-blue-500 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <img
                src="/najwa-ammar-logo.svg"
                alt="شعار نجوى عمار للدعاية والإعلان"
                className="w-full h-full object-contain rounded-full bg-slate-950"
              />
            </div>
            <span className="text-slate-900 group-hover:text-emerald-700 transition-colors">
              {HERO_DATA.brandName}
            </span>
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
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="relative group overflow-hidden rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>اطلب خدمتك الآن</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 bg-white/80 border border-slate-200/80 hover:bg-slate-100 transition-colors"
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
