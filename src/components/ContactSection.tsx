import { useState } from 'react';
import {
  MessageCircle,
  PhoneCall,
  Phone,
  Sparkles,
  MapPin,
  Clock,
  ArrowUpRight,
  ExternalLink,
  Copy,
  Check,
  Navigation
} from 'lucide-react';
import { HERO_DATA } from '../data/agencyData';

interface ContactSectionProps {
  initialService?: string;
}

export default function ContactSection({}: ContactSectionProps) {
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const handleWhatsappDirect = () => {
    const text = `مرحباً مطبعة نجوى عمار للدعاية والإعلان،
أود الاستفسار والتواصل بخصوص خدماتكم في الطباعة والإعلان.`;
    window.open(`https://wa.me/${HERO_DATA.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(HERO_DATA.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2000);
  };

  const handleShareLocationWhatsapp = () => {
    const text = `موقع مطبعة نجوى عمار للدعاية والإعلان:
📍 العنوان: قلين، بجوار بريد المنشأة الكبرى، محافظة كفر الشيخ
🗺️ رمز الخريطة (Plus Code): ${HERO_DATA.plusCode}
🔗 رابط خرائط Google: ${HERO_DATA.googleMapsUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Background Soft Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>تواصل وزيارة مباشرة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            تواصل مع <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 bg-clip-text text-transparent">مطبعة نجوى عمار</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            فريقنا جاهز لاستقبالكم في مقرنا أو خدمتكم فوراً عبر قنوات التواصل السريعة لتنفيذ أرقى المطبوعات والإعلانات.
          </p>
        </div>

        {/* 2-Column Responsive Grid: Channels & Map Block */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column: Direct Social Channels & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Direct Communication Channels - Zero Raw Links or Phone Digits on Buttons */}
            <div className="bg-slate-900 text-white p-7 sm:p-9 rounded-[36px] border border-slate-800 shadow-2xl space-y-6">
              <div className="text-center sm:text-right">
                <h3 className="text-2xl font-bold text-white mb-1.5">
                  قنوات التواصل المباشرة
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  انقر على أي خيار للتحويل المباشر للاتصال أو المراسلة فوراً:
                </p>
              </div>

              <div className="space-y-3">
                {/* 1. WhatsApp Button - Clean, Instant Redirection */}
                <button
                  type="button"
                  onClick={handleWhatsappDirect}
                  className="w-full p-4 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-between text-xs sm:text-sm font-bold shadow-xs group"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </span>
                    <span className="text-right">
                      <span className="block font-bold">محادثة واتساب فورية</span>
                      <span className="block text-[11px] text-emerald-300/80 font-normal group-hover:text-white/80">استجابة سريعة لطلباتكم واستفساراتكم</span>
                    </span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                {/* 2. Direct Call (Primary) - Direct tel: redirection */}
                <a
                  href={`tel:${HERO_DATA.phonePrimary}`}
                  className="w-full p-4 rounded-2xl bg-teal-600/20 border border-teal-500/40 text-teal-200 hover:bg-teal-600 hover:text-white transition-all flex items-center justify-between text-xs sm:text-sm font-bold shadow-xs group"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-300 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <PhoneCall className="w-5 h-5" />
                    </span>
                    <span className="text-right">
                      <span className="block font-bold">اتصال هاتفي مباشر</span>
                      <span className="block text-[11px] text-teal-200/80 font-normal group-hover:text-white/80">الخط الأول · خدمة العملاء والتنفيذ</span>
                    </span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* 3. Direct Call (Secondary Line) - Direct tel: redirection */}
                <a
                  href={`tel:${HERO_DATA.phoneSecondary}`}
                  className="w-full p-4 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-200 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-between text-xs sm:text-sm font-bold shadow-xs group"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </span>
                    <span className="text-right">
                      <span className="block font-bold">اتصال هاتفي (الخط الثاني)</span>
                      <span className="block text-[11px] text-blue-200/80 font-normal group-hover:text-white/80">الخط الثاني · متاح لاستقبال مكالماتكم</span>
                    </span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* 4. Facebook - Clean Redirection */}
                <a
                  href={HERO_DATA.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full p-4 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-200 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-between text-xs sm:text-sm font-bold group"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </span>
                    <span className="text-right">
                      <span className="block font-bold">صفحتنا على فيسبوك</span>
                      <span className="block text-[11px] text-blue-200/80 font-normal group-hover:text-white/80">متابعة أحدث العروض والمنشورات والنماذج</span>
                    </span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* 5. Instagram - Clean Redirection */}
                <a
                  href={HERO_DATA.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-amber-500/20 border border-pink-500/30 text-pink-200 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-amber-600 hover:text-white transition-all flex items-center justify-between text-xs sm:text-sm font-bold group"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-300 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </span>
                    <span className="text-right">
                      <span className="block font-bold">حسابنا على إنستغرام</span>
                      <span className="block text-[11px] text-pink-200/80 font-normal group-hover:text-white/80">معرض التصاميم والهويات البصرية اليومية</span>
                    </span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-slate-50 p-6 rounded-[28px] border border-slate-200/80 space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">ساعات العمل والرد السريع</div>
                  <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                    السبت - الخميس: من 9:00 صباحاً حتى 8:00 مساءً<br />
                    (الاتصال والمحادثات متاحة للرد الفوري على مدار الساعة)
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Left Column: Interactive Location Map Block */}
          <div className="lg:col-span-7 bg-white rounded-[36px] border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-8 space-y-6">
            
            {/* Location Header with Landmark and Plus Code */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>مقر المطبعة المعتمد</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  مطبعة نجوى عمار للدعاية والإعلان
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-2">
                  <span className="font-bold text-amber-600">العلامة المميزة:</span>
                  <span>بجوار بريد المنشأة الكبرى، قلين، كفر الشيخ</span>
                </p>
              </div>

              {/* Plus Code Badge with 1-click Copy */}
              <div className="flex sm:flex-col items-center sm:items-end gap-2">
                <span className="text-[11px] font-bold text-slate-400">رمز الموقع (Plus Code):</span>
                <button
                  type="button"
                  onClick={handleCopyPlusCode}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-xs font-mono font-bold text-slate-800 transition-all flex items-center gap-1.5 group"
                  title="انقر لنسخ رمز الموقع"
                >
                  {copiedPlusCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-800" />
                      <span>{HERO_DATA.plusCode}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Interactive Embedded Map View */}
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200/90 shadow-inner group">
              <iframe
                title="موقع مطبعة نجوى عمار - قلين بجوار بريد المنشأة الكبرى"
                src="https://maps.google.com/maps?q=2WX4%2BXXC%20%D9%82%D9%84%D9%8A%D9%86%20%D9%83%D9%81%D8%B1%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />

              {/* Floating Landmark Badge on Top of Map */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 flex items-center gap-2 pointer-events-none text-xs font-bold text-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-600 -mr-3.5" />
                <span>2WX4+XXC قلين · بجوار بريد المنشأة الكبرى</span>
              </div>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {/* Open in Google Maps */}
              <a
                href={HERO_DATA.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>فتح الاتجاهات في Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Share Location via WhatsApp */}
              <button
                type="button"
                onClick={handleShareLocationWhatsapp}
                className="w-full py-3.5 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200/90 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>إرسال الموقع والملاحة بالواتساب</span>
              </button>
            </div>

            {/* Local Transportation Note */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">سهولة الوصول:</span> يقع مقر المطبعة مباشرة بجوار مكتب بريد المنشأة الكبرى في مركز قلين، ويتوفر موقف سيارات ومداخل ممهدة لسهولة الاستلام وشحن المطبوعات لكافة المدن.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
