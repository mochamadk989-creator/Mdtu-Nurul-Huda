import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Upload,
  Image as ImageIcon,
  Palette,
  Type,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Layers,
  Trash2,
  Eye,
  Shield,
  Circle,
  Star,
} from 'lucide-react';
import { LogoConfig, LogoPresetStyle, LogoShape, LogoColorTheme, DEFAULT_LOGO_CONFIG } from '../types/logo';
import { MdtuLogo } from './MdtuLogo';

interface EditLogoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentConfig: LogoConfig;
  onSaveConfig: (newConfig: LogoConfig) => void;
}

export const EditLogoModal: React.FC<EditLogoModalProps> = ({
  isOpen,
  onClose,
  currentConfig,
  onSaveConfig,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'preset' | 'text'>('preset');
  const [config, setConfig] = useState<LogoConfig>(currentConfig);
  const [urlInput, setUrlInput] = useState('');
  const [savedAlert, setSavedAlert] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setConfig(currentConfig);
      setSavedAlert(false);
    }
  }, [isOpen, currentConfig]);

  if (!isOpen) return null;

  // Handle image upload from file picker
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Mohon pilih berkas gambar (PNG, JPG, SVG, WebP)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setConfig((prev) => ({
          ...prev,
          mode: 'custom-image',
          customImageUrl: result,
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) return;
    setConfig((prev) => ({
      ...prev,
      mode: 'custom-image',
      customImageUrl: urlInput.trim(),
    }));
    setUrlInput('');
  };

  const handleRemoveCustomImage = () => {
    setConfig((prev) => ({
      ...prev,
      mode: 'preset',
      customImageUrl: null,
    }));
  };

  const handleResetToDefault = () => {
    if (confirm('Kembalikan logo ke pengaturan dan desain resmi bawaan?')) {
      setConfig(DEFAULT_LOGO_CONFIG);
    }
  };

  const handleSave = () => {
    onSaveConfig(config);
    setSavedAlert(true);
    setTimeout(() => {
      setSavedAlert(false);
      onClose();
    }, 600);
  };

  const presetOptions: {
    id: LogoPresetStyle;
    title: string;
    desc: string;
    badge: string;
  }[] = [
    {
      id: 'official-shield',
      title: 'Perisai Resmi MDTU Nurul Huda',
      desc: 'Lambang lengkap: Kubah Emas, Menara, Al-Qur\'an di atas Rehal, Karangan Daun Zaitun & Pita Cikopo Panawa.',
      badge: 'Resmi',
    },
    {
      id: 'green-dome',
      title: 'Kubah Agung Nabawi & Sinar Emas',
      desc: 'Kubah hijau keemasan terinspirasi Masjid Nabawi dengan gerbang lengkung mihrab islami.',
      badge: 'Klasik',
    },
    {
      id: 'golden-star',
      title: 'Bintang Delapan Rub El Hizb',
      desc: 'Simbol geometri bintang 8 islami dengan lafadz Asma Allah dan aksen emas berkilau.',
      badge: 'Elegan',
    },
    {
      id: 'kemenag-classic',
      title: 'Standar Madrasah Kemenag RI',
      desc: 'Lambang bintang lima, perisai hijau, kitab suci serta ornamen pendidikan Islam Nusantara.',
      badge: 'Formal',
    },
    {
      id: 'quran-pen',
      title: 'Kitab Suci Al-Qur\'an & Kalam Ilmu',
      desc: 'Mencerminkan dedikasi santri dalam menuntut ilmu agama, menghafal Al-Qur\'an & adab.',
      badge: 'Edukasi',
    },
  ];

  const colorThemes: {
    id: LogoColorTheme;
    name: string;
    primaryHex: string;
    goldHex: string;
  }[] = [
    {
      id: 'emerald-gold',
      name: 'Hijau Zamrud & Emas (Standar MDTU)',
      primaryHex: '#04432f',
      goldHex: '#f5b83d',
    },
    {
      id: 'sapphire-gold',
      name: 'Biru Safir & Emas',
      primaryHex: '#0c2850',
      goldHex: '#f5b83d',
    },
    {
      id: 'ruby-gold',
      name: 'Merah Marun & Emas',
      primaryHex: '#520b1a',
      goldHex: '#f5b83d',
    },
    {
      id: 'onyx-gold',
      name: 'Hitam Onyx Elegan & Emas',
      primaryHex: '#161920',
      goldHex: '#f5b83d',
    },
  ];

  const shapeOptions: {
    id: LogoShape;
    name: string;
    icon: any;
  }[] = [
    { id: 'shield', name: 'Perisai Pentagonal', icon: Shield },
    { id: 'circle', name: 'Lingkaran Keemasan', icon: Circle },
    { id: 'octagram', name: 'Segi 8 Islami', icon: Star },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white flex items-center justify-between border-b border-emerald-700/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center shadow-md font-black">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black tracking-tight text-white flex items-center gap-2">
                Edit & Kustomisasi Logo Madrasah
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-emerald-950 font-black">
                  Identitas
                </span>
              </h2>
              <p className="text-xs text-emerald-200/90">
                Ubah logo madrasah, upload gambar sendiri, atau pilih desain lambang islami resmi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-emerald-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Split 2 Kolom (Preview di Kiri / Atas, Editor di Kanan) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-50/70">
          {/* Kolom Kiri: Live Preview Showcase */}
          <div className="md:col-span-5 flex flex-col items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-full flex items-center justify-between text-xs text-slate-500 font-bold border-b pb-2">
              <span className="flex items-center gap-1.5 text-emerald-800">
                <Eye className="w-4 h-4" /> Live Preview Logo
              </span>
              <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                {config.mode === 'custom-image' ? 'Foto Upload' : 'Lambang Vektor'}
              </span>
            </div>

            {/* Main Center Large Preview */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-100 via-emerald-50/30 to-amber-50/40 border border-slate-200 flex flex-col items-center justify-center w-full shadow-inner relative overflow-hidden group">
              <div className="relative z-10 transition-transform duration-300 transform group-hover:scale-105">
                <MdtuLogo size={140} config={config} showHomeTooltip={false} />
              </div>

              <div className="mt-4 text-center space-y-1 relative z-10">
                <div className="font-extrabold text-slate-900 text-sm">
                  {config.institutionNameShort}
                </div>
                <div className="text-xs text-emerald-800 font-semibold">
                  {config.customTextRibbon}
                </div>
                <div className="text-[11px] text-slate-400 font-arabic">
                  {config.customTextArabic}
                </div>
              </div>
            </div>

            {/* Mini Context Previews (How it looks in Header, Print & APK) */}
            <div className="w-full space-y-2 pt-2 border-t border-slate-100 text-xs">
              <div className="text-[11px] font-bold text-slate-500">Pratinjau di Berbagai Bagian:</div>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 rounded-xl bg-slate-900 text-white flex flex-col items-center gap-1 text-center">
                  <div className="scale-75 origin-center">
                    <MdtuLogo size={40} config={config} showHomeTooltip={false} />
                  </div>
                  <span className="text-[9px] font-semibold text-amber-300">Header App</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-slate-200 flex flex-col items-center gap-1 text-center shadow-2xs">
                  <div className="scale-75 origin-center">
                    <MdtuLogo size={40} config={config} showHomeTooltip={false} />
                  </div>
                  <span className="text-[9px] font-semibold text-slate-700">Kop Surat PDF</span>
                </div>
                <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 text-white flex flex-col items-center gap-1 text-center">
                  <div className="scale-75 origin-center">
                    <MdtuLogo size={40} config={config} showHomeTooltip={false} />
                  </div>
                  <span className="text-[9px] font-semibold text-emerald-200">Ikon APK HP</span>
                </div>
              </div>
            </div>

            {/* Mode switch or Remove Image button */}
            {config.mode === 'custom-image' && (
              <button
                onClick={handleRemoveCustomImage}
                className="w-full py-2 px-3 text-xs font-bold text-rose-700 hover:text-rose-800 hover:bg-rose-50 rounded-xl transition-colors border border-rose-200 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Hapus Foto & Gunakan Vektor Asli
              </button>
            )}
          </div>

          {/* Kolom Kanan: Settings Tabs */}
          <div className="md:col-span-7 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            {/* Tabs Header */}
            <div className="flex border-b border-slate-200 bg-slate-50">
              <button
                onClick={() => setActiveTab('preset')}
                className={`flex-1 py-3 px-3 text-xs font-extrabold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                  activeTab === 'preset'
                    ? 'border-emerald-700 text-emerald-800 bg-white shadow-2xs'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Desain Lambang</span>
              </button>
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex-1 py-3 px-3 text-xs font-extrabold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                  activeTab === 'upload'
                    ? 'border-emerald-700 text-emerald-800 bg-white shadow-2xs'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Upload className="w-4 h-4 text-emerald-600" />
                <span>Upload Foto / File</span>
              </button>
              <button
                onClick={() => setActiveTab('text')}
                className={`flex-1 py-3 px-3 text-xs font-extrabold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                  activeTab === 'text'
                    ? 'border-emerald-700 text-emerald-800 bg-white shadow-2xs'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Type className="w-4 h-4 text-teal-600" />
                <span>Teks & Tulisan</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-4">
              {/* TAB 1: PRESET VECTOR DESIGNS */}
              {activeTab === 'preset' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Pilih Model Lambang Islami:
                    </label>
                    <div className="space-y-2">
                      {presetOptions.map((opt) => {
                        const isSelected =
                          config.mode === 'preset' && config.presetStyle === opt.id;
                        return (
                          <div
                            key={opt.id}
                            onClick={() => {
                              setConfig((prev) => ({
                                ...prev,
                                mode: 'preset',
                                presetStyle: opt.id,
                              }));
                            }}
                            className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                              isSelected
                                ? 'border-emerald-600 bg-emerald-50/50 shadow-xs'
                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/70'
                            }`}
                          >
                            <div className="mt-0.5">
                              <input
                                type="radio"
                                checked={isSelected}
                                onChange={() => {}}
                                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <div className="text-xs font-black text-slate-900">
                                  {opt.title}
                                </div>
                                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                                  {opt.badge}
                                </span>
                              </div>
                              <div className="text-[11px] text-slate-500 mt-0.5">
                                {opt.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pilihan Bentuk Bingkai */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Bentuk Bingkai / Frame:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {shapeOptions.map((shp) => {
                        const isSelected = config.shape === shp.id;
                        const Icon = shp.icon;
                        return (
                          <button
                            key={shp.id}
                            type="button"
                            onClick={() =>
                              setConfig((prev) => ({ ...prev, shape: shp.id }))
                            }
                            className={`p-2.5 rounded-xl border-2 text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                              isSelected
                                ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs'
                                : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                            }`}
                          >
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-emerald-700' : 'text-slate-400'}`} />
                            <span className="text-[11px]">{shp.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pilihan Tema Warna */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Kombinasi Warna & Aksen:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {colorThemes.map((clr) => {
                        const isSelected = config.colorTheme === clr.id;
                        return (
                          <div
                            key={clr.id}
                            onClick={() =>
                              setConfig((prev) => ({ ...prev, colorTheme: clr.id }))
                            }
                            className={`p-2.5 rounded-xl border-2 transition-all cursor-pointer flex items-center gap-2.5 ${
                              isSelected
                                ? 'border-emerald-600 bg-emerald-50/40 shadow-xs'
                                : 'border-slate-200 hover:border-slate-300 bg-white'
                            }`}
                          >
                            <div className="flex -space-x-1">
                              <span
                                className="w-5 h-5 rounded-full border border-white shadow-xs"
                                style={{ backgroundColor: clr.primaryHex }}
                              />
                              <span
                                className="w-5 h-5 rounded-full border border-white shadow-xs"
                                style={{ backgroundColor: clr.goldHex }}
                              />
                            </div>
                            <span className="text-xs font-bold text-slate-800 leading-tight">
                              {clr.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: UPLOAD CUSTOM IMAGE FILE */}
              {activeTab === 'upload' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                    <div className="font-extrabold flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-emerald-700" />
                      Pasang Foto / Logo Resmi Lembaga
                    </div>
                    <p className="text-emerald-800">
                      Anda dapat mengunggah berkas gambar logo resmi (PNG transparan, JPG, atau WebP) dari HP atau komputer Anda. Logo ini otomatis ditampilkan pada Header, Laporan PDF, dan Aplikasi.
                    </p>
                  </div>

                  {/* File Upload Box */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-emerald-50/20 group"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200 flex items-center justify-center mx-auto mb-3 transition-colors">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-black text-slate-800 group-hover:text-emerald-800">
                      Pilih Foto / Gambar dari Galeri atau File
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Format PNG, JPG, WebP, SVG (Maks. 5 MB)
                    </div>
                  </div>

                  {/* Or Enter Image URL */}
                  <div className="space-y-1.5 pt-2">
                    <label className="block text-xs font-bold text-slate-700">
                      Atau Masukkan Tautan / URL Gambar Online:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        placeholder="https://contoh-link.com/logo-madrasah.png"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleApplyUrl}
                        className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition-colors cursor-pointer"
                      >
                        Gunakan URL
                      </button>
                    </div>
                  </div>

                  {/* Shape for uploaded image */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Bentuk Bingkai untuk Foto yang Diunggah:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {shapeOptions.map((shp) => {
                        const isSelected = config.shape === shp.id;
                        const Icon = shp.icon;
                        return (
                          <button
                            key={shp.id}
                            type="button"
                            onClick={() =>
                              setConfig((prev) => ({ ...prev, shape: shp.id }))
                            }
                            className={`p-2.5 rounded-xl border-2 text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                              isSelected
                                ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs'
                                : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                            }`}
                          >
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-emerald-700' : 'text-slate-400'}`} />
                            <span className="text-[11px]">{shp.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: CUSTOM TEXT & LABELS */}
              {activeTab === 'text' && (
                <div className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Pendek Lembaga (Header & Ringkasan)
                    </label>
                    <input
                      type="text"
                      value={config.institutionNameShort}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          institutionNameShort: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Kaligrafi Tulisan Arab (Lengkung Atas Emblem)
                    </label>
                    <input
                      type="text"
                      dir="rtl"
                      value={config.customTextArabic}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          customTextArabic: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-arabic font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Wilayah / Pita Emas Bawah
                    </label>
                    <input
                      type="text"
                      value={config.customTextRibbon}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          customTextRibbon: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none uppercase"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Lengkap Melingkar (Di Lingkar Luar)
                    </label>
                    <input
                      type="text"
                      value={config.customTextLatin}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          customTextLatin: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-5 py-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleResetToDefault}
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset ke Standar Awal
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-xs transition-colors cursor-pointer"
            >
              Batal
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {savedAlert ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-amber-300" />
                  <span>Tersimpan!</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Simpan Perubahan Logo</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
