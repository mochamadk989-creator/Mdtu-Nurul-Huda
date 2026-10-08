import React from 'react';
import {
  Users,
  Calendar,
  DollarSign,
  Compass,
  BookOpen,
  Heart,
  Volume2,
  Sparkles,
  ChevronRight,
  Bell,
  Clock,
  MapPin,
  Award,
  Book,
  ShieldCheck,
  Edit,
  UserCheck,
  Moon,
  Printer,
  Smartphone,
  GraduationCap,
  Palette,
} from 'lucide-react';
import { Pengumuman } from '../types/mdtu';

interface DashboardContentProps {
  santriCount: number;
  guruCount: number;
  tahfidzLevelCount: number;
  kelasCount: number;
  pengumuman: Pengumuman;
  onNavigateTab: (tabId: string) => void;
  onOpenPengumumanModal: () => void;
  onEditStatistik: () => void;
  onOpenCetakLaporan?: () => void;
  onOpenDownloadApk?: () => void;
  onOpenEditLogo?: () => void;
}

export const DashboardContent: React.FC<DashboardContentProps> = ({
  santriCount,
  guruCount,
  tahfidzLevelCount,
  kelasCount,
  pengumuman,
  onNavigateTab,
  onOpenPengumumanModal,
  onEditStatistik,
  onOpenCetakLaporan,
  onOpenDownloadApk,
  onOpenEditLogo,
}) => {
  const menuGridItems = [
    { id: 'absensi', title: 'Presensi / Absensi', sub: 'TPQ, A, B, C & Guru', icon: UserCheck, color: 'bg-emerald-700' },
    { id: 'kalender', title: 'Kalender Hijriyah', sub: 'Penanggalan & Agenda', icon: Moon, color: 'bg-teal-800' },
    { id: 'prestasi', title: 'Prestasi Santri', sub: 'Kejuaraan & MHQ', icon: Award, color: 'bg-amber-600' },
    { id: 'edit-logo', title: 'Logo Madrasah', sub: 'Edit & Kustomisasi', icon: Palette, color: 'bg-amber-600' },
    { id: 'cetak-pdf', title: 'Cetak Laporan PDF', sub: 'Dokumen & Kop Resmi', icon: Printer, color: 'bg-emerald-800' },
    { id: 'download-apk', title: 'Unduh APK / App', sub: 'Android, iPhone & PC', icon: Smartphone, color: 'bg-teal-700' },
    { id: 'santri', title: 'Data Santri', sub: `${santriCount} Santri Aktif`, icon: Users, color: 'bg-emerald-600' },
    { id: 'guru', title: 'Dewan Asatidz', sub: `${guruCount} Asatidz Pengajar`, icon: GraduationCap, color: 'bg-emerald-900' },
    { id: 'tahfidz', title: 'Level Tahfidz', sub: `${tahfidzLevelCount} Tingkatan`, icon: BookOpen, color: 'bg-teal-700' },
    { id: 'jadwal', title: 'Jadwal & Kelas', sub: `${kelasCount} Rombel KBM`, icon: Calendar, color: 'bg-emerald-800' },
    { id: 'keuangan', title: 'SPP & Keuangan', sub: 'Rekap Kas Diniyah', icon: DollarSign, color: 'bg-yellow-600' },
    { id: 'sholat', title: 'Waktu Sholat', sub: 'GPS Akurat Garut', icon: Clock, color: 'bg-emerald-700' },
    { id: 'alquran', title: 'Al-Qur\'an', sub: '114 Surat & 30 Juz', icon: Book, color: 'bg-emerald-900' },
    { id: 'doa', title: 'Doa Harian', sub: 'Koleksi Santri', icon: Heart, color: 'bg-rose-600' },
    { id: 'kiblat', title: 'Arah Kiblat', sub: '295° Ka\'bah (GPS)', icon: Compass, color: 'bg-indigo-600' },
  ];

  const handleItemClick = (id: string) => {
    if (id === 'cetak-pdf') {
      if (onOpenCetakLaporan) onOpenCetakLaporan();
      else onNavigateTab('absensi');
    } else if (id === 'download-apk') {
      if (onOpenDownloadApk) onOpenDownloadApk();
      else onNavigateTab('dashboard');
    } else if (id === 'edit-logo') {
      if (onOpenEditLogo) onOpenEditLogo();
    } else {
      onNavigateTab(id);
    }
  };

  return (
    <div className="space-y-5">
      {/* 1. Quick Navigation Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-none">
        {onOpenEditLogo && (
          <button
            onClick={onOpenEditLogo}
            className="px-3.5 py-1.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 font-extrabold flex items-center gap-1.5 whitespace-nowrap transition-colors border border-amber-300 shadow-xs cursor-pointer"
          >
            <Palette className="w-3.5 h-3.5 text-amber-700" />
            <span>🎨 Edit Logo</span>
          </button>
        )}
        <button
          onClick={() => onNavigateTab('prestasi')}
          className="px-3.5 py-1.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 font-extrabold flex items-center gap-1.5 whitespace-nowrap transition-colors border border-amber-300 shadow-xs cursor-pointer"
        >
          <Award className="w-3.5 h-3.5 text-amber-700" />
          <span>🏆 Prestasi Santri</span>
        </button>
        <button
          onClick={() => onNavigateTab('ai')}
          className="px-3.5 py-1.5 rounded-full bg-emerald-100/80 hover:bg-emerald-200 text-emerald-900 font-extrabold flex items-center gap-1.5 whitespace-nowrap transition-colors border border-emerald-300 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Ustaz AI</span>
        </button>
        <button
          onClick={() => onNavigateTab('kiblat')}
          className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold whitespace-nowrap transition-colors cursor-pointer"
        >
          🧭 Arah Kiblat
        </button>
        <button
          onClick={() => onNavigateTab('keuangan')}
          className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold whitespace-nowrap transition-colors cursor-pointer"
        >
          💰 SPP & Kas
        </button>
        <button
          onClick={() => onNavigateTab('adzan')}
          className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold whitespace-nowrap transition-colors cursor-pointer"
        >
          🔊 Suara Adzan
        </button>
        <button
          onClick={() => onNavigateTab('alquran')}
          className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold whitespace-nowrap transition-colors cursor-pointer"
        >
          📖 Al-Qur&apos;an
        </button>
      </div>

      {/* 2. Ustaz AI Hero Card */}
      <div
        onClick={() => onNavigateTab('ai')}
        className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-2xl p-5 border border-emerald-600/40 shadow-lg cursor-pointer hover:shadow-xl transition-all relative overflow-hidden group"
      >
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-black shrink-0 shadow-md">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black tracking-tight text-white">
                  Ustaz AI MDTU
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-700 text-emerald-200 border border-emerald-500/30">
                  Gemini 3.8
                </span>
              </div>
              <p className="text-xs text-emerald-100/90 leading-relaxed max-w-xl">
                Asisten cerdas pembuatan paket soal kuis/ujian otomatis santri, penyusunan RPP guru, dan konsultasi materi Fiqih/Tajwid.
              </p>
            </div>
          </div>
          <button className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-black text-xs self-start md:self-auto shadow-md transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer">
            <span>Buka Ustaz AI</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Feature Pills */}
        <div className="mt-4 pt-3 border-t border-emerald-700/60 flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-200 border border-emerald-700/50">
            📝 Generator Soal Otomatis
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-200 border border-emerald-700/50">
            📚 Penyusun RPP Madrasah
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-200 border border-emerald-700/50">
            🕌 Konsultasi Fiqih Syafi&apos;i
          </span>
        </div>
      </div>

      {/* 3. Admin Mode Quick Action Bar */}
      <div className="bg-emerald-50/70 rounded-2xl p-3 border border-emerald-200/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-emerald-900 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>Mode Admin: Kelola Santri, Jadwal, SPP, Transaksi Kas & Audio Diniyah</span>
        </div>
        <button
          onClick={onEditStatistik}
          className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 underline shrink-0 cursor-pointer"
        >
          <Edit className="w-3 h-3" />
          <span>Ubah Angka Statistik</span>
        </button>
      </div>

      {/* 4. Menu Feature Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">Menu Utama MDTU Nurul Huda</h3>
          <span className="text-xs font-semibold text-emerald-700">14 Modul Terintegrasi</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          {menuGridItems.map((item) => {
            const IconCmp = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col items-center text-center justify-center space-y-2 group"
              >
                <div className={`w-11 h-11 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                  <IconCmp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Bottom Double Section: Pengumuman & Mutiara Hikmah */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left: Pengumuman Terkini (7 cols) */}
        <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-emerald-700" />
              <h3 className="text-sm font-bold text-slate-900">Pengumuman & Agenda</h3>
            </div>
            <button
              onClick={onOpenPengumumanModal}
              className="text-xs text-emerald-700 font-bold hover:underline cursor-pointer"
            >
              Lihat Lengkap &gt;
            </button>
          </div>
          <div
            onClick={onOpenPengumumanModal}
            className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors cursor-pointer space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800">{pengumuman.judul}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                {pengumuman.kategori || 'Halaqah'}
              </span>
            </div>
            <p className="text-xs text-slate-600 line-clamp-2">{pengumuman.deskripsi}</p>
            <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-600" />
                {pengumuman.waktu}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-600" />
                {pengumuman.lokasi}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Mutiara Hikmah Diniyah (5 cols) */}
        <div className="md:col-span-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200/80 p-5 shadow-sm flex flex-col justify-between text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
            <BookOpen className="w-5 h-5 text-amber-700" />
          </div>
          <blockquote className="font-arabic text-base sm:text-lg text-emerald-950 font-bold leading-loose">
            مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ
          </blockquote>
          <p className="text-xs text-amber-900 italic font-medium leading-relaxed">
            &quot;Barangsiapa menempuh jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju Surga.&quot;
          </p>
          <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest pt-1 border-t border-amber-200/60">
            (HR. Muslim No. 2699)
          </span>
        </div>
      </div>
    </div>
  );
};
