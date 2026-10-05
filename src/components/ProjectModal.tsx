import { X, CheckCircle, ArrowUpRight, MessageCircle } from 'lucide-react';
import { ProjectItem } from '../types';
import { HERO_DATA } from '../data/agencyData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export default function ProjectModal({ project, onClose, onRequestSimilar }: ProjectModalProps) {
  if (!project) return null;

  const handleWhatsappProject = () => {
    const message = `مرحباً مطبعة نجوى عمار للدعاية والإعلان،
أعجبني مشروعكم: "${project.title}" لعميلكم "${project.client}".
أود الاستفسار عن تنفيذ مشروع مماثل لعلامتي التجارية.`;
    window.open(`https://wa.me/${HERO_DATA.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl bg-white rounded-[36px] overflow-hidden shadow-2xl border border-white/60 z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-colors focus:outline-none"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Media Header */}
        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.opacity = '0';
            }}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          
          <div className="absolute bottom-6 right-6 left-6 text-white space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md border border-white/30">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-slate-300 font-mono">
                {project.year} · {project.client}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Key Metric Highlight Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between">
            <div>
              <div className="text-xs text-emerald-800 font-bold">النتيجة والأثر التسويقي المحقق:</div>
              <div className="text-sm text-slate-600 mt-0.5">{project.metric.label}</div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 tabular-nums">
              {project.metric.value}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2">عن المشروع والرؤية الإبداعية:</h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Deliverables Scope Checklist */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-3">مخرجات ونطاق العمل المنجز:</h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {project.scope.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Quote if available */}
          {project.clientQuote && (
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs sm:text-sm text-slate-700 italic">
              "{project.clientQuote}"
              <span className="block mt-1 font-bold text-amber-800 not-italic text-xs">
                — {project.client}
              </span>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-end gap-3">
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.title);
              }}
              className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 flex items-center gap-2"
            >
              <span>طلب دراسة لمشروع مماثل</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleWhatsappProject}
              className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>استفسار فوري عبر واتساب</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
