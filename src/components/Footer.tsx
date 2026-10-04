import { Sparkles, ArrowUp, Heart, MessageCircle, PhoneCall, Phone } from 'lucide-react';
import { HERO_DATA, SERVICES_DATA } from '../data/agencyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'لماذا نحن؟', href: '#why-us' },
    { label: 'أعمالنا', href: '#portfolio' },
    { label: 'إنجازاتنا', href: '#stats' },
    { label: 'آراء العملاء', href: '#testimonials' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-12 relative overflow-hidden border-t border-slate-900">
      
      {/* Radiant Glow in Footer */}
      <div className="absolute top-0 right-1/3 w-[450px] h-[250px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[250px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Brand Info & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#hero" className="flex items-center gap-3.5 text-white font-black text-xl group">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-emerald-400 to-blue-500 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
                <img
                  src="/najwa-ammar-logo.svg"
                  alt="شعار نجوى عمار الأصلي"
                  className="w-full h-full object-contain rounded-full bg-slate-950"
                />
              </div>
              <span className="group-hover:text-emerald-400 transition-colors">
                {HERO_DATA.brandName}
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              مطبعة رائدة متخصصة في الدعاية والإعلان، المطبوعات الفاخرة، بناء الهويات البصرية، والتسويق الرقمي الحديث. نبتكر تصاميم عصرية مبهجة وأفكاراً إعلانية ملهمة تصنع لعلامتك حضوراً استثنائياً في الأسواق.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-3 text-xs text-slate-300 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>نستقبل طلبات المشاريع الجديدة الآن لعام 2026</span>
              </div>
              <a
                href={HERO_DATA.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-amber-300/90 hover:text-amber-300 transition-colors"
              >
                <span>📍 قلين · بجوار بريد المنشأة الكبرى (2WX4+XXC)</span>
              </a>
            </div>
          </div>

          {/* Quick Section Links (Col 6-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider">
              أقسام الموقع
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Highlights (Col 8-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider">
              خدماتنا الرئيسية
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {SERVICES_DATA.slice(0, 8).map((s) => (
                <a
                  key={s.id}
                  href="#services"
                  className="hover:text-emerald-400 transition-colors truncate"
                >
                  {s.title}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-900 space-y-2.5">
              <div className="text-xs text-slate-400 font-bold">تواصل مباشر سريع:</div>
              <div className="flex flex-wrap items-center gap-2">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${HERO_DATA.whatsappNumber.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all text-xs font-bold border border-emerald-500/30"
                  title="محادثة فورية عبر واتساب"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>واتساب</span>
                </a>

                {/* Primary Call */}
                <a
                  href={`tel:${HERO_DATA.phonePrimary}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-teal-600/20 text-teal-300 hover:bg-teal-600 hover:text-white transition-all text-xs font-bold border border-teal-500/30"
                  title="اتصال هاتفي مباشر"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>اتصال مباشر</span>
                </a>

                {/* Secondary Call */}
                <a
                  href={`tel:${HERO_DATA.phoneSecondary}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600/20 text-blue-300 hover:bg-blue-600 hover:text-white transition-all text-xs font-bold border border-blue-500/30"
                  title="اتصال هاتفي (الخط الثاني)"
                >
                  <Phone className="w-4 h-4" />
                  <span>الخط الثاني</span>
                </a>

                {/* Facebook */}
                <a
                  href={HERO_DATA.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-500/15 text-blue-300 hover:bg-blue-600 hover:text-white transition-all text-xs font-bold border border-blue-500/30"
                  title="صفحتنا على فيسبوك"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>فيسبوك</span>
                </a>

                {/* Instagram */}
                <a
                  href={HERO_DATA.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-500/15 text-pink-300 hover:bg-pink-600 hover:text-white transition-all text-xs font-bold border border-pink-500/30"
                  title="حسابنا على إنستغرام"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>إنستغرام</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-center sm:text-right">
            <span>جميع الحقوق محفوظة © {new Date().getFullYear()}</span>
            <span className="text-white font-bold">{HERO_DATA.brandName}</span>
            <span>· نصنع أفكاراً تُرى وإعلانات تُحقق الفرق</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-2 focus:outline-none"
            title="العودة لأعلى الصفحة"
          >
            <span>للأعلى</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
