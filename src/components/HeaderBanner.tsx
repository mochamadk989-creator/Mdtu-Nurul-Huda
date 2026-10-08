import React from 'react';
import { Bell, User, ShieldCheck, Lock, Unlock, Search, Home, Sparkles, Printer, Download, Palette, Edit } from 'lucide-react';
import { MdtuLogo } from './MdtuLogo';
import { LogoConfig } from '../types/logo';

interface HeaderBannerProps {
  notificationCount: number;
  onNotificationClick: () => void;
  onProfileClick: () => void;
  onLogoClick: () => void;
  isAdmin: boolean;
  onToggleAdminLogin: () => void;
  onOpenSearch: () => void;
  onOpenCetakLaporan?: () => void;
  onOpenDownloadApk?: () => void;
  onOpenEditLogo?: () => void;
  logoConfig?: LogoConfig;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  notificationCount,
  onNotificationClick,
  onProfileClick,
  onLogoClick,
  isAdmin,
  onToggleAdminLogin,
  onOpenSearch,
  onOpenCetakLaporan,
  onOpenDownloadApk,
  onOpenEditLogo,
  logoConfig,
}) => {
  return (
    <header className="w-full bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-800 text-white rounded-3xl shadow-xl p-4 sm:p-6 border border-emerald-700/50 relative overflow-hidden transition-all duration-300">
      {/* Decorative Islamic Background Glow & Geometry */}
      <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-emerald-600/20 blur-3xl pointer-events-none" />
      <div className="absolute right-36 -bottom-12 w-44 h-44 rounded-full bg-amber-400/15 blur-2xl pointer-events-none" />
      <div className="absolute left-1/3 top-0 w-32 h-32 rounded-full bg-teal-500/10 blur-xl pointer-events-none" />

      {/* Top Utility Bar: Status Akses, Search Trigger, Notif, dan Admin Switch */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 relative z-10 border-b border-emerald-800/60 pb-3">
        {/* Left: Status Mode Akses (Admin vs Tamu) */}
        <div className="flex items-center gap-2">
          {isAdmin ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Mode Admin Aktif (Hak Edit Penuh)</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-800/70 text-emerald-200 border border-emerald-700/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Mode Publik / Tamu (Hanya Lihat)</span>
            </span>
          )}
          <span className="text-[11px] text-emerald-300/70 hidden md:inline">
            T.A. 2026/2027
          </span>
        </div>

        {/* Right: Quick actions: Edit Logo, Search, Notifikasi, Admin Auth Button */}
        <div className="flex items-center gap-2">
          {/* Edit Logo Button */}
          {onOpenEditLogo && (
            <button
              onClick={onOpenEditLogo}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-amber-200 hover:text-white transition-all text-xs font-bold border border-emerald-600/40 shadow-xs cursor-pointer"
              title="Edit & Kustomisasi Logo Madrasah (Ganti Foto / Model Lambang)"
            >
              <Palette className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Edit Logo</span>
            </button>
          )}

          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 hover:text-white transition-all text-xs font-semibold border border-emerald-600/40 shadow-xs cursor-pointer"
            title="Cari Santri, Prestasi, Jadwal, Doa, Al-Qur'an (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Pencarian</span>
            <kbd className="hidden md:inline text-[9px] px-1.5 py-0.5 rounded bg-emerald-950/70 text-emerald-300 border border-emerald-700">
              ⌘K
            </kbd>
          </button>

          {/* Cetak PDF Button */}
          {onOpenCetakLaporan && (
            <button
              onClick={onOpenCetakLaporan}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 hover:text-white transition-all text-xs font-semibold border border-emerald-600/40 shadow-xs cursor-pointer"
              title="Cetak Dokumen & Laporan PDF Resmi"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-300" />
              <span className="hidden md:inline">Cetak PDF</span>
            </button>
          )}

          {/* Unduh APK / App Button */}
          {onOpenDownloadApk && (
            <button
              onClick={onOpenDownloadApk}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/90 hover:bg-amber-400 text-emerald-950 transition-all text-xs font-bold border border-amber-300 shadow-xs cursor-pointer"
              title="Download APK / Pasang Aplikasi ke Android, iPhone, PC"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Unduh App / APK</span>
            </button>
          )}

          {/* Bell Notification */}
          <button
            onClick={onNotificationClick}
            className="relative p-2 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 transition-colors border border-emerald-600/40 shadow-xs cursor-pointer"
            title="Pemberitahuan & Agenda Madrasah"
          >
            <Bell className="w-4 h-4" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-[10px] font-bold text-white flex items-center justify-center ring-2 ring-emerald-900 animate-pulse">
                {notificationCount}
              </span>
            )}
          </button>

          {/* Admin Login / Logout Switch */}
          <button
            onClick={onToggleAdminLogin}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs border cursor-pointer ${
              isAdmin
                ? 'bg-amber-400 hover:bg-amber-300 text-emerald-950 border-amber-300'
                : 'bg-emerald-800/80 hover:bg-emerald-700 text-white border-emerald-600/40'
            }`}
            title={isAdmin ? 'Kelola Pengaturan Admin / Keluar' : 'Masuk sebagai Administrator untuk Mengedit'}
          >
            {isAdmin ? (
              <>
                <Unlock className="w-3.5 h-3.5 text-emerald-950" />
                <span>Admin</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden sm:inline">Masuk Admin</span>
                <span className="sm:hidden">Login</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Madrasah Brand Identity with Clickable Home Logo & Edit Badge */}
      <div className="flex items-center gap-3.5 sm:gap-5 relative z-10">
        {/* LOGO SEBAGAI HOME DENGAN TOOLTIP & EDIT BADGE */}
        <div className="relative group shrink-0">
          <div
            onClick={onLogoClick}
            className="cursor-pointer transition-all duration-300 transform group-hover:scale-105 active:scale-95 group-hover:rotate-1"
            title="Klik Logo untuk kembali ke Beranda (Home)"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onLogoClick();
            }}
          >
            <div className="relative p-1 rounded-2xl bg-gradient-to-b from-amber-300/40 to-emerald-950 border-2 border-amber-400/80 shadow-lg shadow-black/40">
              <MdtuLogo size={68} onClick={onLogoClick} showHomeTooltip={false} config={logoConfig} />
              
              {/* Home badge overlay indicator */}
              <div className="absolute -bottom-1 -right-1 bg-amber-400 text-emerald-950 rounded-full p-1 shadow-md border border-white/60 transition-transform group-hover:scale-110">
                <Home className="w-3 h-3" />
              </div>

              {/* Edit Logo badge indicator on top right */}
              {onOpenEditLogo && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEditLogo();
                  }}
                  className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-emerald-950 rounded-full p-1 shadow-lg border border-white/90 transition-all hover:scale-125 cursor-pointer z-20"
                  title="Klik untuk Edit / Kustomisasi Logo Madrasah"
                >
                  <Edit className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Interactive Floating Tooltip */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900/95 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-amber-400/30 shadow-md">
            Klik: Beranda • Edit: Ikon Pensil
          </div>
        </div>

        {/* Madrasah Titles & Info */}
        <div className="space-y-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h1
              onClick={onLogoClick}
              className="text-lg sm:text-2xl font-black tracking-tight text-white leading-tight font-sans cursor-pointer hover:text-amber-200 transition-colors"
              title="Klik untuk ke Beranda"
            >
              {logoConfig?.institutionNameShort || 'MDTU NURUL HUDA'}
            </h1>
            <span className="text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded-md bg-amber-400 text-emerald-950 shadow-xs">
              {logoConfig?.tagline || 'Diniyah Takmiliyah'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap text-xs">
            <span className="font-bold text-amber-300 tracking-wider uppercase text-[11px] sm:text-xs">
              {logoConfig?.customTextRibbon || 'CIKOPO PANAWA'} - GARUT
            </span>
            <span className="text-emerald-400/60 hidden sm:inline">•</span>
            <span className="text-emerald-200/90 font-medium text-[11px] sm:text-xs">
              Kec. Pamulihan, Kab. Garut
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-emerald-100/90 font-medium italic flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
            <span>&quot;Mencetak Generasi Qur&apos;ani: Berilmu, Berakhlak &amp; Berprestasi&quot;</span>
          </p>
        </div>
      </div>
    </header>
  );
};
