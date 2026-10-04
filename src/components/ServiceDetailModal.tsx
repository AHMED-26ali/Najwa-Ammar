import { X, CheckCircle2, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';
import { HERO_DATA } from '../data/agencyData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOrderService: (serviceTitle: string) => void;
}

export default function ServiceDetailModal({ service, onClose, onOrderService }: ServiceDetailModalProps) {
  if (!service) return null;

  const handleWhatsappOrder = () => {
    const message = `مرحباً مطبعة نجوى عمار للدعاية والإعلان،
أرغب في طلب خدمة: "${service.title}" (${service.englishTitle}).
يرجى إفادتي بالتفاصيل والعرض المناسب.`;
    window.open(`https://wa.me/${HERO_DATA.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-[36px] overflow-hidden shadow-2xl border border-white/60 z-10 my-8 p-6 sm:p-8 animate-in zoom-in-95 duration-200 space-y-6">
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                {service.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {service.englishTitle}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              {service.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {service.description}
        </p>

        {/* Detailed Scope of Work */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>نطاق العمل والمخرجات المشمولة:</span>
          </h4>
          <div className="space-y-2.5">
            {service.detailedScope.map((scopeItem, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{scopeItem}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Advantages */}
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
          <div className="text-xs font-bold text-amber-900 mb-2">مميزات التنفيذ مع نجوى عمار:</div>
          <div className="flex flex-wrap gap-2">
            {service.features.map((feat, idx) => (
              <span key={idx} className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-slate-800 border border-amber-200">
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-end gap-3">
          <button
            onClick={() => {
              onClose();
              onOrderService(service.title);
            }}
            className="px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 flex items-center gap-2"
          >
            <span>طلب الخدمة عبر الموقع</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleWhatsappOrder}
            className="px-6 py-3.5 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>طلب فوري عبر واتساب</span>
          </button>
        </div>

      </div>
    </div>
  );
}
