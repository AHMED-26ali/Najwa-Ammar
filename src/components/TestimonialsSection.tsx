import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/agencyData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-amber-50/20 to-emerald-50/20">
      
      {/* Background Soft Blurs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>شهادات نعتز بها</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            ماذا يقول <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">شركاء نجاحنا؟</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            تجارب حقيقية لعملاء وثقوا برؤية نجوى عمار الإعلانية وحققوا طفرات نوعية في مبيعاتهم وحضور علاماتهم.
          </p>
        </div>

        {/* iOS-Style Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="group relative bg-white/85 backdrop-blur-xl rounded-[32px] p-8 border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:shadow-emerald-950/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Row: User Avatar & Info + Rating */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  
                  {/* Avatar & Name Info */}
                  <div className="flex items-center gap-3.5">
                    <div className={`w-13 h-13 rounded-2xl bg-gradient-to-tr ${t.avatarBg} text-white font-black text-base flex items-center justify-center shadow-md shadow-slate-900/10`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-slate-900 text-base">{t.author}</span>
                        <CheckCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {t.role} · <span className="text-slate-700 font-semibold">{t.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-emerald-600/10 absolute -top-3 -right-2 -scale-x-100 pointer-events-none" />
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium relative z-10">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>المشروع المنفذ:</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full">
                  {t.projectType}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
