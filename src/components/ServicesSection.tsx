import { useState } from 'react';
import {
  Palette,
  Sparkles,
  Megaphone,
  TrendingUp,
  Layers,
  PenTool,
  Printer,
  Layout,
  Globe,
  Camera,
  Video,
  Smartphone,
  ArrowUpRight,
  Search,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectService, onRequestQuote }: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'كافة الخدمات' },
    { id: 'Branding', label: 'الهوية والتصميم' },
    { id: 'Advertising', label: 'الدعاية والإعلان' },
    { id: 'Digital Marketing', label: 'التسويق الرقمي' },
    { id: 'Social Media', label: 'السوشيال ميديا' },
    { id: 'Printing', label: 'المطبوعات الفاخرة' }
  ];

  const getIcon = (iconName: string, accentColor: string) => {
    const props = { className: "w-6 h-6 transition-transform group-hover:scale-110 duration-200" };
    switch (iconName) {
      case 'Palette': return <Palette {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Megaphone': return <Megaphone {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'PenTool': return <PenTool {...props} />;
      case 'Printer': return <Printer {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Camera': return <Camera {...props} />;
      case 'Video': return <Video {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const getAccentStyles = (color: string) => {
    switch (color) {
      case 'amber':
        return {
          iconBox: 'bg-amber-500/15 text-amber-600 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-white',
          hoverBorder: 'hover:border-amber-400/80',
          dot: 'bg-amber-500'
        };
      case 'blue':
        return {
          iconBox: 'bg-blue-600/15 text-blue-600 border border-blue-600/30 group-hover:bg-blue-600 group-hover:text-white',
          hoverBorder: 'hover:border-blue-400/80',
          dot: 'bg-blue-600'
        };
      case 'emerald':
      default:
        return {
          iconBox: 'bg-emerald-600/15 text-emerald-700 border border-emerald-600/30 group-hover:bg-emerald-600 group-hover:text-white',
          hoverBorder: 'hover:border-emerald-400/80',
          dot: 'bg-emerald-600'
        };
    }
  };

  const filteredServices = SERVICES_DATA.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.englishTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-emerald-50/30 to-amber-50/20">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-emerald-300/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-40 w-96 h-96 rounded-full bg-amber-300/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>خدماتنا المتكاملة</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            حلول إعلانية تجمع <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">البهجة والفخامة</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg">
            من الفكرة الأولى وبناء الهوية البصرية، وحتى إطلاق الحملات الرقمية وإدارة المطبوعات؛ نغطي كافة احتياجات علامتك التجارية بأعلى دقة ومعايير عالمية.
          </p>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/60">
          
          {/* Segmented Controls / Categories */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/80 shadow-xs overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="ابحث عن خدمة معينة…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>

        </div>

        {/* 12 Services Grid with Modern Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const styles = getAccentStyles(service.accentColor);
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className={`group cursor-pointer relative bg-white/80 backdrop-blur-xl rounded-[28px] p-7 border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ${styles.hoverBorder} hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Top Row: Icon & English Subtitle / Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-colors duration-300 ${styles.iconBox}`}>
                      {getIcon(service.icon, service.accentColor)}
                    </div>
                    {service.badge ? (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-800 border border-amber-400/30">
                        {service.badge}
                      </span>
                    ) : (
                      <span className="text-xs font-mono font-medium text-slate-400 dir-ltr">
                        {service.englishTitle}
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Quick Feature Checklist */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="group-hover:text-emerald-700 flex items-center gap-1 transition-colors">
                    <span>تفاصيل الخدمة والطلب</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRequestQuote(service.title);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    طلب فوري
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state for search */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white/60 rounded-3xl border border-slate-200">
            <p className="text-slate-500 font-medium">لم يتم العثور على خدمات مطابقة لبحثك.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-sm font-bold text-emerald-600 hover:underline"
            >
              عرض كافة الخدمات
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
