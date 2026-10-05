import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Users, Clock, Flame, Sparkles } from 'lucide-react';
import { STATS_DATA } from '../data/agencyData';

export default function StatsCounter() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    projects: 0,
    clients: 0,
    experience: 0,
    campaigns: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers up smoothly
          STATS_DATA.forEach((stat) => {
            const duration = 1800; // ms
            const steps = 60;
            const stepTime = duration / steps;
            let current = 0;
            const increment = stat.targetNumber / steps;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.targetNumber) {
                current = stat.targetNumber;
                clearInterval(timer);
              }
              setCounts((prev) => ({
                ...prev,
                [stat.id]: Math.floor(current),
              }));
            }, stepTime);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6" };
    switch (iconName) {
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'Flame': return <Flame {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="stats" ref={sectionRef} className="py-20 relative overflow-hidden bg-white">
      {/* Decorative Radial Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-emerald-100/40 via-amber-100/40 to-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Glass Container */}
        <div className="rounded-[32px] sm:rounded-[36px] p-4 sm:p-8 lg:p-12 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white shadow-2xl relative overflow-hidden border border-slate-800">
          
          {/* Subtle Ambient Glows inside */}
          <div className="absolute top-0 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Top Kicker Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3 mb-8 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold border border-white/10">
              <Sparkles className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>أرقام حقيقية تصنع الفارق</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-normal leading-[1.4] sm:leading-[1.25] py-1">
              إنجازات تترجم{' '}
              <span className="inline-block px-1.5 py-1.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                ثقة عملائنا
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
              وراء كل رقم قصة نجاح إعلانية ملهمة وشراكة مستمرة مع رواد الأعمال والشركات.
            </p>
          </div>

          {/* 4 Animated Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {STATS_DATA.map((stat) => {
              const displayVal = counts[stat.id] || (hasAnimated ? stat.targetNumber : 0);
              return (
                <div
                  key={stat.id}
                  className="group relative p-3.5 sm:p-6 rounded-[22px] sm:rounded-[28px] bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.08] transition-all duration-300 text-center flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl mx-auto mb-2.5 sm:mb-4 bg-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      {getIcon(stat.icon)}
                    </div>

                    <div className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight tabular-nums text-white mb-1 sm:mb-2 flex items-center justify-center gap-0.5">
                      <span className="text-emerald-400">{stat.suffix}</span>
                      <span>{displayVal.toLocaleString()}</span>
                    </div>

                    <div className="text-xs sm:text-base font-bold text-slate-200 mb-1">
                      {stat.label}
                    </div>
                  </div>

                  <div className="text-[10px] sm:text-xs text-slate-400 leading-snug break-words">
                    {stat.subtext}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
