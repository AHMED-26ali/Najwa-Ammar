import { useState } from 'react';
import { ArrowUpRight, Eye, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/agencyData';
import { ProjectItem } from '../types';

interface PortfolioGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function PortfolioGallery({ onSelectProject }: PortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'كافة الأعمال' },
    { id: 'branding', label: 'Branding (الهوية البصرية)' },
    { id: 'social', label: 'Social Media (السوشيال ميديا)' },
    { id: 'advertising', label: 'Advertising (الدعاية والإعلان)' },
    { id: 'printing', label: 'Printing (المطبوعات)' },
    { id: 'marketing', label: 'Digital Marketing (التسويق الرقمي)' },
  ];

  const filteredProjects = PORTFOLIO_DATA.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-slate-50/60">
      {/* Radiant Background Mesh */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>معرض الأعمال وقصص النجاح</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              أعمال صُنعت لتلهم <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 bg-clip-text text-transparent">وتُبهر</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              استكشف نماذج من أحدث حملاتنا وهوياتنا البصرية بأسلوب معرض الصور المستوحى من iOS؛ تفاصيل ملموسة وأرقام نمو حقيقية.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-bold bg-white/80 px-4 py-2 rounded-xl border border-slate-200/80 shadow-xs self-start md:self-auto">
            انقر على أي عمل لمشاهدة تفاصيل الحملة
          </div>
        </div>

        {/* iPhone Photos Album Style Category Segmented Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/80 shadow-xs overflow-x-auto max-w-full mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid with Large iPhone Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const isLarge = idx === 0 || idx === 1;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer relative rounded-[32px] overflow-hidden bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:shadow-emerald-950/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${
                  isLarge && filteredProjects.length > 2 ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category & Year Top Floating Pills */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                      {project.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-black/40 backdrop-blur-md text-white/90">
                      {project.year}
                    </span>
                  </div>

                  {/* Floating Result Metric Chip */}
                  <div className="absolute bottom-4 right-4 bg-emerald-500/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-2xl text-xs font-black shadow-lg flex items-center gap-1.5">
                    <span>{project.metric.label}:</span>
                    <span className="tabular-nums text-amber-200 text-sm">{project.metric.value}</span>
                  </div>

                  {/* Quick View Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="w-5 h-5 text-emerald-700" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-xs font-bold text-slate-400 mb-1">
                      {project.client}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 mb-2.5">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                    <span className="flex items-center gap-1">
                      <span>عرض تفاصيل المشروع الكاملة</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
