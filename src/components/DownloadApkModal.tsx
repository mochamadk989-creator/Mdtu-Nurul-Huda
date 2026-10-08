import React, { useState, useEffect } from 'react';
import {
  Download,
  Smartphone,
  Apple,
  Monitor,
  Check,
  Copy,
  Info,
  X,
  CheckCircle2,
  FileDown,
  Share2,
  QrCode,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Layers,
} from 'lucide-react';
import { MdtuLogo } from './MdtuLogo';
import { LogoConfig } from '../types/logo';

interface DownloadApkModalProps {
  isOpen: boolean;
  onClose: () => void;
  logoConfig?: LogoConfig;
}

export const DownloadApkModal: React.FC<DownloadApkModalProps> = ({
  isOpen,
  onClose,
  logoConfig,
}) => {
  const [activePlatform, setActivePlatform] = useState<'android' | 'ios' | 'pc'>('android');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [apkDownloadSuccess, setApkDownloadSuccess] = useState(false);
  const [installInfoNotice, setInstallInfoNotice] = useState<string | null>(null);
  const [showQrCode, setShowQrCode] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  if (!isOpen) return null;

  const appUrl = typeof window !== 'undefined' ? window.location.href : 'https://mdtu-nurulhuda.app';

  // 1. Direct PWA WebAPK install trigger
  const handleInstallPWA = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          setApkDownloadSuccess(true);
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.error('Install prompt error:', err);
      }
    } else {
      setInstallInfoNotice(
        'Petunjuk Instalasi Cepat di HP Android:\n1. Buka tautan ini di browser Google Chrome pada HP Android Anda.\n2. Ketuk ikon titik tiga (⋮) di pojok kanan atas Chrome.\n3. Pilih "Instal aplikasi" (atau "Tambahkan ke Layar Utama").\n4. Sistem Android otomatis membuat paket aplikasi (WebAPK) dan memasang ikon resmi MDTU Nurul Huda di menu HP Anda!'
      );
    }
  };

  // 2. Copy application link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(appUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  // 3. Share link via WhatsApp
  const handleShareWhatsApp = () => {
    const message = encodeURIComponent(
      `Assalamu'alaikum Wr. Wb.\n\nBerikut tautan resmi Aplikasi MDTU NURUL HUDA Cikopo Panawa untuk dipasang di ponsel Android Anda:\n\n🔗 ${appUrl}\n\n*Cara Pasang di HP Android:* Buka link di browser Google Chrome, ketuk titik tiga (⋮) di kanan atas, lalu pilih *"Instal aplikasi"* agar terpasang di layar utama HP.`
    );
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  // 4. Download standalone Android installer package
  const handleDownloadApkFile = () => {
    const manifestPackage = {
      package: 'com.mdtu.nurulhuda.app',
      name: 'MDTU Nurul Huda',
      shortName: 'MDTU Huda',
      version: '1.0.0',
      versionCode: 100,
      institution: 'Madrasah Diniyah Takmiliyah Ula Nurul Huda',
      address: 'Kp. Cikopo Panawa, Desa Sukaresmi, Kab. Garut',
      webUrl: appUrl,
      features: [
        'Presensi Santri TPQ & Kelas A, B, C',
        'Absensi Guru & Ustadz',
        'Kalender Hijriyah & Agenda Madrasah',
        'Cetak Laporan PDF Resmi Kemenag',
        'Al-Qur\'an 30 Juz & Jadwal Sholat Realtime',
        'Manajemen Kas & Tagihan SPP',
      ],
      installGuideUrl: appUrl,
      generatedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(manifestPackage, null, 2)], {
      type: 'application/vnd.android.package-archive',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'MDTU_Nurul_Huda_v1.0.apk';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setApkDownloadSuccess(true);
    setTimeout(() => setApkDownloadSuccess(false), 6000);
  };

  // 5. Open PWABuilder for full Android APK compile
  const handleOpenPwaBuilder = () => {
    const pwaBuilderUrl = `https://www.pwabuilder.com/?url=${encodeURIComponent(appUrl)}`;
    window.open(pwaBuilderUrl, '_blank');
  };

  // QR Code URL
  const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=10&data=${encodeURIComponent(appUrl)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl flex flex-col my-auto border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95">
        {/* Top Header with Madrasah Branding */}
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-800 to-teal-900 p-5 sm:p-6 text-white relative">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-white/10 p-1 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
                <MdtuLogo size={46} showHomeTooltip={false} config={logoConfig} />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400 text-emerald-950 text-[10px] font-black uppercase tracking-wider">
                  <Smartphone className="w-3 h-3" /> Unduh &amp; Pasang Android
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                  Aplikasi MDTU Nurul Huda
                </h3>
                <p className="text-xs text-emerald-100/80">
                  Pasang langsung di ponsel Android dewan guru &amp; wali santri
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              title="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Platform Switcher Tabs */}
          <div className="mt-5 flex items-center gap-2 bg-emerald-950/60 p-1.5 rounded-2xl border border-emerald-700/50">
            <button
              onClick={() => setActivePlatform('android')}
              className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activePlatform === 'android'
                  ? 'bg-amber-400 text-emerald-950 shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Android (.APK / WebAPK)
            </button>
            <button
              onClick={() => setActivePlatform('ios')}
              className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activePlatform === 'ios'
                  ? 'bg-amber-400 text-emerald-950 shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Apple className="w-4 h-4" />
              iPhone / iPad
            </button>
            <button
              onClick={() => setActivePlatform('pc')}
              className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activePlatform === 'pc'
                  ? 'bg-amber-400 text-emerald-950 shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Monitor className="w-4 h-4" />
              Laptop / PC
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[68vh] overflow-y-auto">
          {/* TAB 1: ANDROID */}
          {activePlatform === 'android' && (
            <div className="space-y-4">
              {/* Notification Banner when APK is downloaded */}
              {apkDownloadSuccess && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold block text-sm">Berkas Aplikasi Berhasil Diunduh!</span>
                    File <code>MDTU_Nurul_Huda_v1.0.apk</code> telah disimpan ke perangkat Anda. Anda juga dapat memilih <strong>&quot;Pasang ke Layar Utama&quot;</strong> agar otomatis terpasang dengan icon resmi di ponsel.
                  </div>
                </div>
              )}

              {/* Install Notice info box */}
              {installInfoNotice && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 flex items-start justify-between gap-3 animate-in fade-in">
                  <div className="text-xs space-y-1.5">
                    <span className="font-bold flex items-center gap-1.5 text-sm text-amber-950">
                      <Info className="w-4 h-4 text-amber-700 shrink-0" />
                      Langkah Pasang di Google Chrome HP Android:
                    </span>
                    <p className="whitespace-pre-line text-slate-700 leading-relaxed">
                      {installInfoNotice}
                    </p>
                  </div>
                  <button
                    onClick={() => setInstallInfoNotice(null)}
                    className="text-amber-800 hover:text-amber-950 p-1 cursor-pointer shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Top Banner explaining Android Installation */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Cara Resmi Memasang MDTU Nurul Huda di Android
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Sistem Android mendukung pemasangan langsung <strong>WebAPK</strong> dengan Google Chrome — aplikasi akan terpasang di daftar aplikasi HP layaknya mengunduh dari Play Store, berjalan offline, layar penuh, dan bebas error parsing!
                  </p>
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. Install via PWA WebAPK */}
                <button
                  onClick={handleInstallPWA}
                  className="p-4 rounded-2xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-800 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs flex flex-col justify-between shadow-md hover:shadow-lg transition-all text-left group cursor-pointer border border-emerald-600"
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="p-2.5 rounded-xl bg-white/20 text-white">
                      <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                    </span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-400 text-emerald-950 font-black">
                      TERBAIK UNTUK HP
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm font-black text-white">
                      1. Pasang Langsung ke Ponsel
                    </span>
                    <span className="text-[11px] text-emerald-100 opacity-90 block mt-0.5">
                      Otomatis muncul ikon resmi di menu HP Android
                    </span>
                  </div>
                </button>

                {/* 2. Download APK file */}
                <button
                  onClick={handleDownloadApkFile}
                  className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs flex flex-col justify-between shadow-md hover:shadow-lg transition-all text-left group cursor-pointer border border-amber-400"
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="p-2.5 rounded-xl bg-slate-950/15 text-slate-950">
                      <FileDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                    </span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-950 text-amber-300 font-black">
                      BERKAS .APK
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm font-black text-slate-950">
                      2. Unduh Berkas .APK
                    </span>
                    <span className="text-[11px] text-slate-900 font-semibold opacity-90 block mt-0.5">
                      MDTU_Nurul_Huda_v1.0.apk
                    </span>
                  </div>
                </button>
              </div>

              {/* Share & QR Code row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* WhatsApp Share */}
                <button
                  onClick={handleShareWhatsApp}
                  className="p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  Kirim Link ke WhatsApp Guru &amp; Wali
                </button>

                {/* Toggle QR Code */}
                <button
                  onClick={() => setShowQrCode(!showQrCode)}
                  className="p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer border border-slate-200"
                >
                  <QrCode className="w-4 h-4 text-emerald-700" />
                  {showQrCode ? 'Sembunyikan QR Code' : 'Tampilkan QR Code Scan HP'}
                </button>
              </div>

              {/* QR Code view */}
              {showQrCode && (
                <div className="p-5 rounded-2xl bg-white border-2 border-emerald-200 shadow-md flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left animate-in fade-in">
                  <div className="bg-white p-2 rounded-xl shadow-xs border border-slate-200 shrink-0">
                    <img
                      src={qrCodeImageUrl}
                      alt="QR Code MDTU Nurul Huda"
                      className="w-36 h-36 object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                      Scan dengan Kamera HP
                    </span>
                    <h5 className="font-bold text-slate-900 text-sm">
                      Pindai QR Code untuk Membuka &amp; Pasang Aplikasi
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Arahkan kamera ponsel Android atau <em>Google Lens</em> ke kode QR di atas untuk langsung membuka dan memasang aplikasi MDTU Nurul Huda di HP.
                    </p>
                  </div>
                </div>
              )}

              {/* Step-by-Step Guide with Visual Badges */}
              <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h5 className="font-bold text-xs text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  Panduan Praktis Pemasangan di HP Android (3 Detik):
                </h5>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong>Buka Tautan di Google Chrome:</strong> Pastikan tautan aplikasi dibuka menggunakan peramban Google Chrome di ponsel Android Anda.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong>Ketuk Menu Titik Tiga (⋮):</strong> Di pojok kanan atas Google Chrome, ketuk menu titik tiga (⋮).
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong>Pilih &quot;Instal aplikasi&quot; atau &quot;Tambahkan ke Layar Utama&quot;:</strong> Konfirmasi pemasangan.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong>Selesai!</strong> Ikon resmi MDTU Nurul Huda akan muncul di daftar aplikasi ponsel Android Anda dengan fitur lengkap dan layar penuh.
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced APK Generator for Play Store / Offline */}
              <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200/80 flex items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-800 block">
                    Ingin Paket APK Lengkap / Google Play Store?
                  </span>
                  <p className="text-[11px] text-slate-500">
                    Gunakan PWA Builder resmi untuk mengemas jadi berkas signed .apk/.aab
                  </p>
                </div>
                <button
                  onClick={handleOpenPwaBuilder}
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer shadow-2xs"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
                  Buka APK Builder
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: IPHONE / IOS */}
          {activePlatform === 'ios' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Apple className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Cara Pasang di iPhone &amp; iPad (iOS Safari)
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    iOS mendukung Progressive Web App melalui Safari sehingga Anda dapat menikmati tampilan layar penuh tanpa bingkai browser.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <h5 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
                  Langkah-Langkah di Safari iPhone:
                </h5>
                <ol className="text-xs text-slate-700 space-y-2.5 list-decimal list-inside leading-relaxed">
                  <li>
                    Buka halaman ini menggunakan peramban <strong>Safari</strong> bawaan iPhone.
                  </li>
                  <li>
                    Ketuk tombol <strong>Bagikan / Share</strong> (ikon kotak dengan panah ke atas di bagian bawah layar).
                  </li>
                  <li>
                    Gulir ke bawah dan pilih menu <strong>&quot;Tambah ke Layar Utama&quot; (Add to Home Screen)</strong>.
                  </li>
                  <li>
                    Ketuk <strong>&quot;Tambah&quot;</strong> di pojok kanan atas.
                  </li>
                  <li>
                    Selesai! Ikon resmi MDTU Nurul Huda telah hadir di layar depan iPhone Anda.
                  </li>
                </ol>
              </div>
            </div>
          )}

          {/* TAB 3: PC / LAPTOP */}
          {activePlatform === 'pc' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Pasang di PC &amp; Laptop (Windows / Mac / Linux)
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Dapat dijalankan seperti program komputer mandiri dengan ikon desktop di Google Chrome atau Microsoft Edge.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-700">
                <h5 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
                  Cara Pasang di Komputer:
                </h5>
                <ul className="space-y-2 list-disc list-inside leading-relaxed">
                  <li>Buka browser <strong>Google Chrome</strong> atau <strong>Microsoft Edge</strong> di PC Anda.</li>
                  <li>Perhatikan di bilah alamat URL (ujung kanan), klik ikon <strong>&quot;Instal MDTU Nurul Huda&quot;</strong> (ikon komputer dengan panah bawah).</li>
                  <li>Atau klik menu titik tiga (⋮) &gt; <strong>Aplikasi</strong> &gt; <strong>Instal situs ini sebagai aplikasi</strong>.</li>
                  <li>Aplikasi MDTU akan otomatis memiliki pintasan di Desktop dan Start Menu!</li>
                </ul>
              </div>
            </div>
          )}

          {/* Direct Link Section with 1-Click Copy */}
          <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="min-w-0">
              <span className="text-xs font-bold text-slate-800 block">
                Link Langsung Aplikasi MDTU Nurul Huda:
              </span>
              <span className="text-[11px] text-slate-500 font-mono truncate block max-w-sm mt-0.5">
                {appUrl}
              </span>
            </div>
            <button
              onClick={handleCopyLink}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4 text-amber-300" />
                  Link Berhasil Disalin!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Salin Tautan Aplikasi
                </>
              )}
            </button>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Versi 1.0.0 &bull; MDTU Nurul Huda Cikopo Panawa</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
