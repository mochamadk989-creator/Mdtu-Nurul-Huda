import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarSectionProps {
  onOpenSearchModal: () => void;
  onQuickNavigate: (tab: string) => void;
}

export const SearchBarSection: React.FC<SearchBarSectionProps> = ({
  onOpenSearchModal,
  onQuickNavigate,
}) => {
  const quickTags = [
    { label: '🕌 Presensi Santri & Guru', tab: 'absensi' },
    { label: '🌙 Kalender Hijriyah', tab: 'kalender' },
    { label: '🏆 Prestasi Santri', tab: 'prestasi' },
    { label: '📖 Al-Qur\'an 114 Surat', tab: 'alquran' },
    { label: '👥 Data Santri', tab: 'santri' },
    { label: '📅 Jadwal Pelajaran', tab: 'jadwal' },
    { label: '💰 Kas & SPP', tab: 'keuangan' },
    { label: '🤲 Doa Harian', tab: 'doa' },
    { label: '🧭 Arah Kiblat', tab: 'kiblat' },
    { label: '✨ Ustaz AI', tab: 'ai' },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200/90 p-3 sm:p-4 transition-all">
      {/* Search Input Bar */}
      <div
        onClick={onOpenSearchModal}
        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200 hover:border-emerald-500/50 cursor-pointer transition-all group shadow-inner"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onOpenSearchModal();
        }}
      >
        <Search className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-600 truncate font-medium">
            Ketik untuk cari santri, prestasi, jadwal, surat Al-Qur&apos;an, doa harian, ustadz...
          </p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="hidden sm:inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-200">
            Akses Cepat
          </span>
          <kbd className="hidden md:inline-flex text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold border border-slate-300">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Quick Access Badges Bar */}
      <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
          Pintasan:
        </span>
        {quickTags.map((tag) => (
          <button
            key={tag.tab}
            onClick={() => onQuickNavigate(tag.tab)}
            className="px-2.5 py-1 rounded-lg bg-emerald-50/70 hover:bg-emerald-100 text-emerald-900 hover:text-emerald-950 font-semibold border border-emerald-200/70 shrink-0 transition-colors active:scale-95 flex items-center gap-1 cursor-pointer"
          >
            <span>{tag.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
