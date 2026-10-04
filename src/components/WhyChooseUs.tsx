import { Lightbulb, Award, Zap, ShieldCheck, TrendingUp, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHY_US_DATA } from '../data/agencyData';

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-white" };
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb {...props} />;
      case 'Award': return <Award {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Background Cinematic Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>بصمتنا الاستثنائية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            لماذا تختار <span className="bg-gradient-to-l from-amber-400 via-yellow-300 to-emerald-400 bg-clip-text text-transparent">نجوى عمار</span> للدعاية والإعلان؟
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            نجمع بين العاطفة الإبداعية المبهجة والتنفيذ الهندسي الصارم، لنقدم لعلامتك تجربة شراكة فريدة تضمن التأثير والنتائج.
          </p>
        </div>

        {/* Modern Bento Grid (6 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_US_DATA.map((item, index) => {
            const isMarquee = index === 0 || index === 4;
            return (
              <div
                key={item.id}
                className={`group relative rounded-[32px] p-8 bg-white/[0.05] backdrop-blur-2xl border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between ${
                  isMarquee ? 'lg:col-span-2 bg-gradient-to-br from-white/[0.08] to-white/[0.02]' : ''
                }`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-105 transition-transform duration-300`}>
                      {getIcon(item.icon)}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-emerald-300 border border-white/10">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Subtitle & Title */}
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400/90 mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Assurance */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>معتمد في كافة باقات وخدمات المطبعة</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modern Quote Banner */}
        <div className="mt-14 p-8 rounded-[32px] bg-gradient-to-r from-emerald-900/60 via-slate-900/80 to-amber-900/40 backdrop-blur-xl border border-emerald-500/30 text-center max-w-4xl mx-auto shadow-2xl">
          <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
            "في مطبعة نجوى عمار، لا ننتج مجرد مطبوعات عادية، بل نقدم جودة استثنائية وأثراً بصرياً عميقاً يشعل ثقة العميل ويظل محفوراً في ذاكرته دائماً."
          </p>
          <div className="mt-4 text-sm font-bold text-amber-300">
            نجوى عمار · المؤسسة والمديرة الإبداعية
          </div>
        </div>

      </div>
    </section>
  );
}
