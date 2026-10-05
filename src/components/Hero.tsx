import { ArrowUpRight, MessageCircle, Sparkles, Star, TrendingUp, CheckCircle, Flame } from 'lucide-react';
import { HERO_DATA } from '../data/agencyData';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onOpenConsultation, onOpenContact }: HeroProps) {
  return (
    <section id="hero" className="relative pt-20 pb-16 sm:pt-28 md:pt-36 md:pb-28 overflow-hidden max-w-full">
      {/* Radiant Brazilian-Inspired Ambient Light Meshes */}
      <div className="absolute top-12 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-400/20 via-teal-300/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-28 left-10 w-[450px] h-[450px] bg-gradient-to-br from-amber-300/25 via-yellow-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[400px] bg-gradient-to-r from-blue-400/15 via-emerald-300/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Right Column (Arabic RTL: Leading Content) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-right">
            
            {/* Dynamic Kicker Tag with Official Logo */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/90 backdrop-blur-xl border border-amber-500/30 shadow-sm text-xs font-bold text-slate-800">
              <img
                src="/najwa-ammar-logo.svg"
                alt="شعار نجوى عمار"
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-contain shrink-0"
              />
              <span className="text-slate-900 font-extrabold">{HERO_DATA.brandName}</span>
            </div>

            {/* Main Headline with generous line-height and top padding to prevent letter clipping */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-normal leading-[1.4] sm:leading-[1.25] text-balance py-1">
              نصنع أفكاراً{' '}
              <span className="inline-block px-1.5 py-1.5 bg-gradient-to-l from-emerald-600 via-teal-600 to-amber-500 bg-clip-text text-transparent">
                تُرى…
              </span>
              <br className="hidden sm:inline" />{' '}
              وإعلانات{' '}
              <span className="relative inline-block px-1 py-1">
                <span className="relative z-10 inline-block px-1 py-1 bg-gradient-to-l from-amber-500 via-orange-500 to-emerald-600 bg-clip-text text-transparent">
                  تُحقق الفرق
                </span>
                <span className="absolute bottom-1.5 left-0 right-0 h-2.5 sm:h-3 bg-amber-200/50 -rotate-1 rounded-sm -z-0"></span>
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {HERO_DATA.description}
            </p>

            {/* Clear Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={onOpenConsultation}
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 fill-amber-300" />
                  <span>اطلب خدمتك الآن</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold text-slate-800 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-xs hover:bg-slate-50 hover:border-emerald-300 active:scale-98 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                <span>تواصل معنا</span>
              </button>
            </div>

            {/* Quick Proof Trust Indicators (Fluid & Responsive on Mobile) */}
            <div className="pt-4 sm:pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-2 sm:gap-6">
              <div className="min-w-0">
                <div className="text-base sm:text-2xl lg:text-3xl font-black text-slate-900 tabular-nums">
                  +80k<span className="text-emerald-600 text-xs sm:text-base font-bold"> مشروع</span>
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 leading-snug break-words">منجز بأعلى معايير الجودة</div>
              </div>
              <div className="min-w-0">
                <div className="text-base sm:text-2xl lg:text-3xl font-black text-slate-900 tabular-nums">
                  +500<span className="text-amber-500 text-xs sm:text-base font-bold"> عميل</span>
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 leading-snug break-words">يثقون في خدماتنا</div>
              </div>
              <div className="min-w-0">
                <div className="text-base sm:text-2xl lg:text-3xl font-black text-slate-900 tabular-nums">
                  +20<span className="text-blue-600 text-xs sm:text-base font-bold"> سنة</span>
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 leading-snug break-words">خبرة وإتقان في الطباعة</div>
              </div>
            </div>

          </div>

          {/* Left Column (Arabic RTL: Visual iPhone Showcase & Floating Glass Cards) */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 sm:pt-0 max-w-full">
            
            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-emerald-400/20 to-blue-500/20 rounded-full blur-2xl transform scale-90 -z-10" />

            {/* Modern Phone Hardware Mockup Container */}
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] bg-slate-900 p-2.5 sm:p-3.5 rounded-[40px] sm:rounded-[52px] shadow-[0_25px_60px_-15px_rgba(5,150,105,0.25)] border-[4px] border-slate-800/90 transition-transform duration-500 hover:scale-[1.02]">
              
              {/* iPhone Outer Ring Antenna & Buttons Accent */}
              <div className="relative bg-slate-950 rounded-[34px] sm:rounded-[46px] overflow-hidden border border-slate-700/50">
                
                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 bg-black rounded-full z-30 flex items-center justify-between px-2.5 border border-white/10 shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="text-[8px] sm:text-[9px] text-white font-mono font-bold tracking-tight">Najwa Ads</span>
                  </div>
                </div>

                {/* Phone Screen Content: The Generated High-Fidelity Showcase Image */}
                <div className="relative aspect-[9/18.5] w-full overflow-hidden bg-slate-900">
                  <img
                    src="/images/iphone_ad_mockup_1791143111186.jpg"
                    alt="تصاميم نجوى عمار للدعاية والإعلان على شاشة العرض"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Gradient Scrim for crisp readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* On-screen iOS Ad Campaign Preview */}
                  <div className="absolute bottom-3 left-2.5 right-2.5 sm:bottom-4 sm:left-3 sm:right-3 p-3 sm:p-3.5 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 text-white space-y-1.5 shadow-lg">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold flex items-center gap-1 text-amber-300 text-[11px] sm:text-xs">
                        <Flame className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                        حملة إعلانية نشطة
                      </span>
                      <span className="text-[10px] bg-emerald-500/40 text-emerald-200 px-2 py-0.5 rounded-full font-bold">
                        ROAS 6.8x
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-black text-white">
                      مبيعات قياسية وهوية متفردة
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-white/80">
                      مطبعة نجوى عمار · إبداع يفوق التوقعات
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating iOS Glass Card 1: Sales Growth Metric */}
              <div className="absolute -top-3 right-1 sm:-right-8 bg-white/95 backdrop-blur-2xl p-2.5 sm:p-3.5 rounded-2xl border border-white/90 shadow-xl shadow-emerald-950/5 flex items-center gap-2 sm:gap-3 scale-90 sm:scale-100 origin-top-right">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-medium">نمو المبيعات</div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 tabular-nums">+185% للأعمال</div>
                </div>
              </div>

              {/* Floating Official Brand Logo Badge */}
              <div className="absolute top-1/2 -translate-y-1/2 left-1 sm:-left-12 bg-slate-950/95 backdrop-blur-2xl p-2.5 sm:p-3 rounded-2xl border border-amber-400/40 shadow-2xl flex items-center gap-2 sm:gap-2.5 z-30 group hover:scale-105 transition-transform scale-90 sm:scale-100 origin-left">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-emerald-400 to-blue-500 shrink-0 shadow-md">
                  <img
                    src="/najwa-ammar-logo.svg"
                    alt="شعار نجوى عمار الأصلي"
                    className="w-full h-full object-contain rounded-full bg-slate-950"
                  />
                </div>
                <div className="text-right">
                  <div className="text-[9px] sm:text-[10px] text-amber-300 font-bold">اللوجو الأصلي</div>
                  <div className="text-[11px] sm:text-xs font-black text-white whitespace-nowrap">نجوى عمار للإعلان</div>
                </div>
              </div>

              {/* Floating iOS Glass Card 2: 5-Star Rating Badge */}
              <div className="absolute -bottom-3 left-1 sm:-left-8 bg-white/95 backdrop-blur-2xl p-2.5 sm:p-3.5 rounded-2xl border border-white/90 shadow-xl shadow-emerald-950/5 flex items-center gap-2 sm:gap-3 scale-90 sm:scale-100 origin-bottom-left">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-500 shrink-0">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-[10px] sm:text-xs font-bold">
                    <span>5.0 / 5.0</span>
                  </div>
                  <div className="text-[11px] sm:text-xs font-black text-slate-900">تقييم ممتاز للعملاء</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
