import React from 'react';
import { Users, GraduationCap, BookOpen, Layers, ChevronRight } from 'lucide-react';

interface StatCardsSectionProps {
  santriCount: number;
  guruCount: number;
  tahfidzLevelCount: number;
  kelasCount: number;
  onCardClick: (tabName: string) => void;
}

export const StatCardsSection: React.FC<StatCardsSectionProps> = ({
  santriCount,
  guruCount,
  tahfidzLevelCount,
  kelasCount,
  onCardClick,
}) => {
  const stats = [
    {
      id: 'santri',
      label: 'Santri Aktif',
      count: santriCount,
      sub: 'Tingkat Ula 1 - 3',
      icon: Users,
      gradient: 'from-emerald-700 to-emerald-900',
      iconBg: 'bg-emerald-600/40',
      badge: 'Terdata',
    },
    {
      id: 'guru',
      label: 'Guru & Tendik',
      count: guruCount,
      sub: 'Asatidz & Ustadzah',
      icon: GraduationCap,
      gradient: 'from-amber-600 to-amber-800',
      iconBg: 'bg-amber-500/40',
      badge: 'Aktif',
    },
    {
      id: 'tahfidz',
      label: 'Level Tahfidz',
      count: tahfidzLevelCount,
      sub: 'Target Juz 30 - 28',
      icon: BookOpen,
      gradient: 'from-emerald-800 to-teal-950',
      iconBg: 'bg-teal-600/40',
      badge: 'Kurikulum',
    },
    {
      id: 'kelas',
      label: 'Rombel Kelas',
      count: kelasCount,
      sub: 'Ula 1, 2 & 3',
      icon: Layers,
      gradient: 'from-yellow-600 to-amber-700',
      iconBg: 'bg-yellow-500/40',
      badge: 'Ruangan',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.id}
            onClick={() => onCardClick(item.id)}
            className={`relative rounded-2xl p-4 bg-gradient-to-br ${item.gradient} text-white shadow-lg shadow-black/10 hover:shadow-xl hover:scale-[1.02] cursor-pointer transition-all duration-200 border border-white/10 flex flex-col justify-between group overflow-hidden`}
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center text-white backdrop-blur-sm border border-white/20 shadow-inner`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/15 text-white/90 backdrop-blur-sm">
                {item.badge}
              </span>
            </div>

            {/* Counts & Label */}
            <div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight">{item.count}</div>
              <div className="text-xs font-bold text-white/95 mt-0.5">{item.label}</div>
              <div className="text-[11px] text-white/75 flex items-center justify-between mt-1">
                <span>{item.sub}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
