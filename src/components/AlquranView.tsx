import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  Search,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  Book,
  Layers,
  Check,
  Play,
  Pause,
  Volume2,
  Copy,
  ChevronLeft,
  ChevronRight,
  Sliders,
  Sparkles,
  Info,
  RefreshCw,
  Eye,
  EyeOff,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { ALL_SURAHS } from '../data/mdtuData';
import { DATA_30_JUZ, JuzInfo } from '../data/quranJuzData';
import { getOfflineKemenagSurah } from '../data/quranKemenagData';
import { Surah, Ayat } from '../types/mdtu';

interface KemenagSurahDetail extends Surah {
  nama?: string;
  deskripsi?: string;
  audioFull?: Record<string, string>;
  ayat: Array<{
    nomorAyat: number;
    teksArab: string;
    teksLatin: string;
    teksIndonesia: string;
    audio?: Record<string, string>;
  }>;
}

export const AlquranView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'surat' | 'mushaf' | 'juz'>('surat');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterKategori, setFilterKategori] = useState<'semua' | 'juz30' | 'pilihan' | 'mekah' | 'madinah'>('semua');

  // Selected Surah reading state
  const [selectedSurahBasic, setSelectedSurahBasic] = useState<Surah | null>(null);
  const [surahDetail, setSurahDetail] = useState<KemenagSurahDetail | null>(null);
  const [isLoadingSurah, setIsLoadingSurah] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Audio state
  const [isPlayingFullAudio, setIsPlayingFullAudio] = useState(false);
  const [playingAyatNomor, setPlayingAyatNomor] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [selectedQariKey, setSelectedQariKey] = useState<string>('05'); // 05 = Misyari Rasyid Al-Afasy

  // Reading appearance preferences
  const [arabicFontSize, setArabicFontSize] = useState<number>(() => {
    try {
      const s = localStorage.getItem('mdtu_quran_font_size');
      return s ? parseInt(s, 10) : 28;
    } catch {
      return 28;
    }
  });
  const [showTerjemahan, setShowTerjemahan] = useState<boolean>(true);
  const [showLatin, setShowLatin] = useState<boolean>(true);
  const [showTafsir, setShowTafsir] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Mushaf Per Halaman states (1 - 604)
  const [currentPage, setCurrentPage] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('mdtu_last_read_page');
      return saved ? parseInt(saved, 10) : 1;
    } catch {
      return 1;
    }
  });
  const [mushafMode, setMushafMode] = useState<'gambar' | 'teks'>('gambar');
  const [pageVerses, setPageVerses] = useState<any[]>([]);
  const [isLoadingPageVerses, setIsLoadingPageVerses] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [jumpInput, setJumpInput] = useState('');

  // Toast & Bookmark states
  const [lastBookmark, setLastBookmark] = useState<{
    surahNomor?: number;
    surahNama?: string;
    ayatNomor?: number;
    page?: number;
  }>(() => {
    try {
      const b = localStorage.getItem('mdtu_last_quran_bookmark');
      return b ? JSON.parse(b) : { page: 1, surahNomor: 1, surahNama: 'Al-Fatihah', ayatNomor: 1 };
    } catch {
      return { page: 1, surahNomor: 1, surahNama: 'Al-Fatihah', ayatNomor: 1 };
    }
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedAyatId, setCopiedAyatId] = useState<number | null>(null);

  // Save font size preference
  useEffect(() => {
    try {
      localStorage.setItem('mdtu_quran_font_size', arabicFontSize.toString());
    } catch {}
  }, [arabicFontSize]);

  // Stop audio when changing surah or unmounting
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [selectedSurahBasic]);

  // Fetch full official Kemenag Surah detail when a surah is selected
  useEffect(() => {
    if (!selectedSurahBasic) {
      setSurahDetail(null);
      return;
    }

    let isMounted = true;
    setFetchError(null);
    setIsPlayingFullAudio(false);
    setPlayingAyatNomor(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // Check embedded verified Kemenag RI dataset first (Juz 30, Al-Fatihah, Al-Mulk, dll.)
    const offlineKemenag = getOfflineKemenagSurah(selectedSurahBasic.nomor);
    if (offlineKemenag) {
      setSurahDetail(offlineKemenag as any);
      setIsLoadingSurah(false);
    } else {
      setIsLoadingSurah(true);
    }

    const fetchSurah = async () => {
      try {
        const res = await fetch(`/api/quran/surat/${selectedSurahBasic.nomor}`);
        if (res.ok) {
          const json = await res.json();
          if (isMounted && json.data && json.data.ayat) {
            setSurahDetail(json.data);
            setIsLoadingSurah(false);
            return;
          }
        }
        throw new Error('Fallback needed');
      } catch (err) {
        // Fallback 1: try fetching from direct equran.id endpoint
        try {
          const directRes = await fetch(`https://equran.id/api/v2/surat/${selectedSurahBasic.nomor}`);
          if (directRes.ok) {
            const directJson = await directRes.json();
            if (isMounted && directJson.data && directJson.data.ayat) {
              setSurahDetail(directJson.data);
              setIsLoadingSurah(false);
              return;
            }
          }
        } catch {}

        // Fallback 2: try fetching from api.quran.gading.dev
        try {
          const altRes = await fetch(`https://api.quran.gading.dev/surah/${selectedSurahBasic.nomor}`);
          if (altRes.ok) {
            const altJson = await altRes.json();
            if (isMounted && altJson.data?.verses) {
              setSurahDetail({
                ...selectedSurahBasic,
                audioFull: {
                  '05': `https://equran.nos.wjv-1.neo.id/audio-full/Misyari-Rasyid-Al-Afasi/${selectedSurahBasic.nomor.toString().padStart(3, '0')}.mp3`,
                },
                ayat: altJson.data.verses.map((v: any) => ({
                  nomorAyat: v.number?.inSurah,
                  teksArab: v.text?.arab,
                  teksLatin: v.text?.transliteration?.en || '',
                  teksIndonesia: v.translation?.id || '',
                  audio: { '05': v.audio?.primary || '' },
                })),
              } as any);
              setIsLoadingSurah(false);
              return;
            }
          }
        } catch {}

        // If offline data was already set, don't show error!
        if (offlineKemenag && isMounted) {
          setSurahDetail(offlineKemenag as any);
          setIsLoadingSurah(false);
          return;
        }

        // If sample verses are present in ALL_SURAHS
        if (selectedSurahBasic.ayatSampel && selectedSurahBasic.ayatSampel.length > 0 && isMounted) {
          setSurahDetail({
            ...selectedSurahBasic,
            ayat: selectedSurahBasic.ayatSampel.map((a) => ({
              nomorAyat: a.nomorAyat,
              teksArab: a.teksArab,
              teksLatin: a.teksLatin,
              teksIndonesia: a.terjemahan,
            })),
          } as any);
          setIsLoadingSurah(false);
          return;
        }

        if (isMounted && !offlineKemenag) {
          setFetchError('Tidak dapat memuat ayat online saat ini. Silakan periksa koneksi internet atau pilih surat Juz 30 / Pilihan.');
          setIsLoadingSurah(false);
        }
      } finally {
        if (isMounted && offlineKemenag) {
          setIsLoadingSurah(false);
        }
      }
    };

    fetchSurah();

    return () => {
      isMounted = false;
    };
  }, [selectedSurahBasic]);

  // Fetch page verses if in text mode
  useEffect(() => {
    if (activeTab === 'mushaf' && mushafMode === 'teks') {
      let isMounted = true;
      setIsLoadingPageVerses(true);

      fetch(`/api/quran/page/${currentPage}`)
        .then((res) => res.json())
        .then((data) => {
          if (isMounted && data.verses) {
            setPageVerses(data.verses);
          }
        })
        .catch(() => {
          // Fallback direct
          fetch(`https://api.quran.com/api/v4/verses/by_page/${currentPage}?language=id&words=false&translations=33&fields=text_uthmani,chapter_id`)
            .then((r) => r.json())
            .then((d) => {
              if (isMounted && d.verses) setPageVerses(d.verses);
            })
            .catch(() => {});
        })
        .finally(() => {
          if (isMounted) setIsLoadingPageVerses(false);
        });

      return () => {
        isMounted = false;
      };
    }
  }, [currentPage, activeTab, mushafMode]);

  // Audio Player Handlers
  const handleToggleFullAudio = () => {
    if (!surahDetail?.audioFull) return;

    if (isPlayingFullAudio) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlayingFullAudio(false);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audioUrl = surahDetail.audioFull[selectedQariKey] || Object.values(surahDetail.audioFull)[0];
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.onended = () => {
        setIsPlayingFullAudio(false);
      };
      audio.onerror = () => {
        setIsPlayingFullAudio(false);
        showToast('Audio murottal belum dapat dimuat.');
      };
      audio.play().then(() => {
        setIsPlayingFullAudio(true);
        setPlayingAyatNomor(null);
      }).catch(() => {
        setIsPlayingFullAudio(false);
      });
    }
  };

  const handlePlayAyatAudio = (ayatNomor: number, audioObj?: any) => {
    if (!audioObj) return;

    if (playingAyatNomor === ayatNomor) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingAyatNomor(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlayingFullAudio(false);

    let audioUrl = '';
    if (typeof audioObj === 'string') {
      audioUrl = audioObj;
    } else if (typeof audioObj === 'object' && audioObj !== null) {
      audioUrl = audioObj[selectedQariKey] || Object.values(audioObj)[0] || '';
    }

    if (!audioUrl) return;

    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    audio.onended = () => {
      setPlayingAyatNomor(null);
    };
    audio.onerror = () => {
      setPlayingAyatNomor(null);
      showToast('Audio ayat belum dapat diputar.');
    };
    audio.play().then(() => {
      setPlayingAyatNomor(ayatNomor);
    }).catch(() => {
      setPlayingAyatNomor(null);
    });
  };

  // Toast Helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Bookmark Verse
  const handleBookmarkAyat = (ayatNomor: number) => {
    if (!selectedSurahBasic) return;
    const b = {
      surahNomor: selectedSurahBasic.nomor,
      surahNama: selectedSurahBasic.namaLatin,
      ayatNomor,
      page: currentPage,
    };
    setLastBookmark(b);
    try {
      localStorage.setItem('mdtu_last_quran_bookmark', JSON.stringify(b));
    } catch {}
    showToast(`Berhasil menandai Surat ${selectedSurahBasic.namaLatin} Ayat ${ayatNomor}`);
  };

  // Bookmark Page
  const handleBookmarkPage = (page: number) => {
    const b = {
      ...lastBookmark,
      page,
    };
    setCurrentPage(page);
    setLastBookmark(b);
    try {
      localStorage.setItem('mdtu_last_read_page', page.toString());
      localStorage.setItem('mdtu_last_quran_bookmark', JSON.stringify(b));
    } catch {}
    showToast(`Halaman ${page} berhasil ditandai sebagai terakhir dibaca!`);
  };

  // Copy Verse
  const handleCopyAyat = (ayat: { nomorAyat: number; teksArab: string; teksLatin?: string; teksIndonesia?: string }) => {
    if (!selectedSurahBasic) return;
    const text = `QS. ${selectedSurahBasic.namaLatin} [${selectedSurahBasic.nomor}:${ayat.nomorAyat}]

${ayat.teksArab}

${ayat.teksLatin ? `Latin: ${ayat.teksLatin}\n` : ''}Artinya: "${ayat.teksIndonesia || '-'}"
(Standar Kemenag RI)`;

    navigator.clipboard.writeText(text);
    setCopiedAyatId(ayat.nomorAyat);
    setTimeout(() => setCopiedAyatId(null), 2000);
    showToast(`Ayat ${ayat.nomorAyat} berhasil disalin!`);
  };

  // Jump to next or previous surah
  const handleNavigateSurah = (delta: number) => {
    if (!selectedSurahBasic) return;
    const targetNomor = selectedSurahBasic.nomor + delta;
    if (targetNomor < 1 || targetNomor > 114) return;
    const nextSurah = ALL_SURAHS.find((s) => s.nomor === targetNomor);
    if (nextSurah) {
      setSelectedSurahBasic(nextSurah);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Jump to specific page
  const handleJumpPage = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseInt(jumpInput, 10);
    if (!isNaN(p) && p >= 1 && p <= 604) {
      setCurrentPage(p);
      setJumpInput('');
    } else {
      showToast('Masukkan nomor halaman antara 1 s.d. 604');
    }
  };

  // Filtered Surahs List
  const filteredSurahs = ALL_SURAHS.filter((s) => {
    const matchesSearch =
      s.namaLatin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.arti.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.nomor.toString() === searchQuery.trim();

    if (!matchesSearch) return false;

    if (filterKategori === 'juz30') {
      return s.nomor >= 78 && s.nomor <= 114;
    }
    if (filterKategori === 'pilihan') {
      return [1, 18, 36, 55, 56, 67].includes(s.nomor);
    }
    if (filterKategori === 'mekah') {
      return s.tempatTurun.toLowerCase().includes('mek') || s.tempatTurun.toLowerCase().includes('mak');
    }
    if (filterKategori === 'madinah') {
      return s.tempatTurun.toLowerCase().includes('mad');
    }
    return true;
  });

  const getJuzForPage = (page: number): number => {
    const found = DATA_30_JUZ.find((j) => page >= j.halamanMulai && page <= j.halamanSelesai);
    return found ? found.juz : 30;
  };

  // Quick shortcut pages
  const quickPages = [
    { label: 'Hal 1 (Al-Fatihah)', page: 1 },
    { label: 'Hal 2 (Al-Baqarah)', page: 2 },
    { label: 'Hal 293 (Al-Kahf)', page: 293 },
    { label: 'Hal 440 (Yasin)', page: 440 },
    { label: 'Hal 562 (Al-Mulk)', page: 562 },
    { label: 'Hal 582 (Juz 30 An-Naba\')', page: 582 },
    { label: 'Hal 604 (An-Naas)', page: 604 },
  ];

  // ----------------------------------------------------------------------
  // VIEW: BACA SURAT LENGKAP (SURAH DETAIL VIEW)
  // ----------------------------------------------------------------------
  if (selectedSurahBasic) {
    const currentNomor = selectedSurahBasic.nomor;
    const prevSurah = currentNomor > 1 ? ALL_SURAHS.find((s) => s.nomor === currentNomor - 1) : null;
    const nextSurah = currentNomor < 114 ? ALL_SURAHS.find((s) => s.nomor === currentNomor + 1) : null;

    return (
      <div className="space-y-4 pb-12 animate-in fade-in duration-200">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-emerald-800 text-white font-bold text-xs rounded-full shadow-2xl flex items-center gap-2 border border-emerald-500 animate-in fade-in">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Top Header Navigation & Controls */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              setSelectedSurahBasic(null);
              if (audioRef.current) {
                audioRef.current.pause();
              }
            }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-emerald-100/70 text-emerald-950 font-bold text-xs transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Daftar 114 Surat</span>
          </button>

          {/* Quick Settings & Audio Tools */}
          <div className="flex items-center gap-2">
            {/* Full Audio Play/Pause Button */}
            {surahDetail?.audioFull && (
              <button
                onClick={handleToggleFullAudio}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs ${
                  isPlayingFullAudio
                    ? 'bg-amber-400 text-emerald-950 animate-pulse'
                    : 'bg-emerald-700 hover:bg-emerald-600 text-white'
                }`}
                title={isPlayingFullAudio ? 'Jeda Audio Murottal Surat' : 'Putar Audio Murottal 1 Surat Penuh'}
              >
                {isPlayingFullAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isPlayingFullAudio ? 'Jeda Murottal' : 'Putar Murottal'}</span>
              </button>
            )}

            {/* Qari Selector */}
            <select
              value={selectedQariKey}
              onChange={(e) => {
                setSelectedQariKey(e.target.value);
                if (audioRef.current) {
                  audioRef.current.pause();
                  setIsPlayingFullAudio(false);
                  setPlayingAyatNomor(null);
                }
              }}
              className="px-2.5 py-1.5 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-700 font-semibold cursor-pointer outline-none"
              title="Pilih Suara Qari"
            >
              <option value="05">Misyari Rasyid Al-Afasy</option>
              <option value="03">Abdurrahman As-Sudais</option>
              <option value="01">Abdullah Al-Juhany</option>
              <option value="02">Abdul Muhsin Al-Qasim</option>
              <option value="04">Ibrahim Al-Dossari</option>
            </select>

            {/* Settings Drawer Button */}
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`p-2 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                isSettingsOpen
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
              title="Pengaturan Tampilan Huruf & Terjemahan"
            >
              <Sliders className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dropdown / Collapsible Settings Bar */}
        {isSettingsOpen && (
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-emerald-200 shadow-sm space-y-3 animate-in fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-emerald-700" />
                Pengaturan Tampilan Al-Qur&apos;an Kemenag RI
              </span>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                Tutup
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {/* Font Size Slider */}
              <div className="space-y-1">
                <div className="flex items-center justify-between font-bold text-slate-700">
                  <span>Ukuran Huruf Arab:</span>
                  <span className="text-emerald-700">{arabicFontSize}px</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="46"
                  step="2"
                  value={arabicFontSize}
                  onChange={(e) => setArabicFontSize(parseInt(e.target.value, 10))}
                  className="w-full accent-emerald-700 cursor-pointer"
                />
              </div>

              {/* Toggle Terjemahan */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-700">Terjemahan Kemenag RI</span>
                <button
                  onClick={() => setShowTerjemahan(!showTerjemahan)}
                  className={`w-10 h-6 rounded-full transition-colors relative cursor-pointer ${
                    showTerjemahan ? 'bg-emerald-700' : 'bg-slate-300'
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      showTerjemahan ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              {/* Toggle Transliterasi Latin */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-700">Transliterasi Latin</span>
                <button
                  onClick={() => setShowLatin(!showLatin)}
                  className={`w-10 h-6 rounded-full transition-colors relative cursor-pointer ${
                    showLatin ? 'bg-emerald-700' : 'bg-slate-300'
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      showLatin ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              {/* Toggle Deskripsi / Tafsir Ringkas */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-700">Tafsir / Pengantar Surat</span>
                <button
                  onClick={() => setShowTafsir(!showTafsir)}
                  className={`w-10 h-6 rounded-full transition-colors relative cursor-pointer ${
                    showTafsir ? 'bg-emerald-700' : 'bg-slate-300'
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      showTafsir ? 'right-1' : 'left-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Surah Hero Header Card */}
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden border border-emerald-700/60 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10 space-y-2 max-w-xl mx-auto">
            <span className="inline-block px-3 py-0.5 rounded-full bg-amber-400 text-emerald-950 font-black text-[10px] uppercase tracking-widest shadow-xs">
              Surat ke-{selectedSurahBasic.nomor} • {selectedSurahBasic.tempatTurun}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-sans">
              {selectedSurahBasic.namaLatin}
            </h1>
            <p className="font-arabic text-3xl sm:text-4xl font-bold text-amber-300 pt-1 leading-relaxed">
              {surahDetail?.nama || selectedSurahBasic.namaArab}
            </p>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium pt-1">
              Arti: &quot;{selectedSurahBasic.arti}&quot; • Terdiri dari {selectedSurahBasic.jumlahAyat} Ayat
            </p>
            <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-emerald-300 font-semibold">
              <span className="px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-700/50">
                Standar Rasm Utsmani Kemenag RI
              </span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-700/50">
                Terjemahan Resmi Kemenag RI
              </span>
            </div>
          </div>
        </div>

        {/* Tafsir / Deskripsi Ringkas Surat jika diaktifkan */}
        {showTafsir && surahDetail?.deskripsi && (
          <div className="bg-emerald-50/70 rounded-3xl p-5 border border-emerald-200 text-xs text-slate-700 space-y-2 leading-relaxed">
            <h4 className="font-bold text-emerald-900 flex items-center gap-2 text-sm">
              <Info className="w-4 h-4 text-emerald-700" />
              Tentang &amp; Kandungan Surat {selectedSurahBasic.namaLatin}:
            </h4>
            <div
              className="prose prose-xs max-w-none text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: surahDetail.deskripsi }}
            />
          </div>
        )}

        {/* Bismillah Banner (Kecuali Surat ke-1 Al-Fatihah di mana Basmalah adalah Ayat 1 resmi Kemenag RI, dan Surat ke-9 At-Taubah) */}
        {selectedSurahBasic.nomor !== 1 && selectedSurahBasic.nomor !== 9 && (
          <div className="bg-[#fffdf7] rounded-3xl p-6 sm:p-8 text-center border-2 border-emerald-800/40 shadow-xs relative overflow-hidden">
            <div className="font-arabic text-2xl sm:text-3xl font-bold text-emerald-950 leading-loose">
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </div>
            {showLatin && (
              <p className="text-xs text-emerald-800 font-serif italic mt-1">
                Bismillāhir-raḥmānir-raḥīm(i)
              </p>
            )}
            {showTerjemahan && (
              <p className="text-[11px] text-slate-500 font-sans mt-0.5">
                Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
              </p>
            )}
          </div>
        )}

        {/* Loading Indicator */}
        {isLoadingSurah && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <RefreshCw className="w-8 h-8 text-emerald-600 animate-spin mx-auto" />
            <p className="text-sm font-bold text-slate-700">
              Memuat ayat lengkap Surat {selectedSurahBasic.namaLatin} Standar Kemenag RI...
            </p>
            <p className="text-xs text-slate-400">
              Menghubungkan teks Arab Rasm Utsmani dan terjemahan resmi Kemenag RI
            </p>
          </div>
        )}

        {/* Error message */}
        {fetchError && !isLoadingSurah && (
          <div className="bg-rose-50 rounded-3xl p-6 text-center border border-rose-200 text-xs text-rose-800 space-y-3">
            <p className="font-bold text-sm text-rose-900">{fetchError}</p>
            <button
              onClick={() => setSelectedSurahBasic({ ...selectedSurahBasic })}
              className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold cursor-pointer hover:bg-emerald-600 transition-colors"
            >
              Coba Muat Ulang
            </button>
          </div>
        )}

        {/* Ayat-Ayat Al-Qur'an Standar Kemenag RI */}
        {!isLoadingSurah && surahDetail?.ayat && (
          <div className="space-y-4">
            {surahDetail.ayat.map((ayat) => {
              const isPlayingThisAyat = playingAyatNomor === ayat.nomorAyat;
              const isCopied = copiedAyatId === ayat.nomorAyat;
              const isBookmarked =
                lastBookmark.surahNomor === selectedSurahBasic.nomor &&
                lastBookmark.ayatNomor === ayat.nomorAyat;

              return (
                <div
                  key={ayat.nomorAyat}
                  id={`ayat-${ayat.nomorAyat}`}
                  className={`bg-white rounded-3xl border p-5 sm:p-7 shadow-xs hover:shadow-md transition-all space-y-4 ${
                    isBookmarked
                      ? 'border-emerald-600 ring-2 ring-emerald-500/20 bg-emerald-50/20'
                      : isPlayingThisAyat
                      ? 'border-amber-400 ring-2 ring-amber-400/20 bg-amber-50/20'
                      : 'border-slate-200/90'
                  }`}
                >
                  {/* Ayat Header: Tools & Verse number */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      {/* Verse number in ornate circle */}
                      <span className="w-8 h-8 rounded-2xl bg-emerald-100 text-emerald-900 font-black text-xs flex items-center justify-center border border-emerald-200 shadow-2xs">
                        {ayat.nomorAyat}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">
                        {selectedSurahBasic.namaLatin}:{ayat.nomorAyat}
                      </span>
                    </div>

                    {/* Action buttons per verse */}
                    <div className="flex items-center gap-1.5">
                      {/* Play Verse Audio */}
                      {ayat.audio && (
                        <button
                          onClick={() => handlePlayAyatAudio(ayat.nomorAyat, ayat.audio)}
                          className={`p-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                            isPlayingThisAyat
                              ? 'bg-amber-400 text-emerald-950 font-black'
                              : 'bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-900'
                          }`}
                          title={isPlayingThisAyat ? 'Jeda Audio Ayat' : 'Putar Audio Murottal Ayat'}
                        >
                          {isPlayingThisAyat ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        </button>
                      )}

                      {/* Bookmark Verse */}
                      <button
                        onClick={() => handleBookmarkAyat(ayat.nomorAyat)}
                        className={`p-2 rounded-xl text-xs transition-colors cursor-pointer ${
                          isBookmarked
                            ? 'bg-emerald-700 text-white shadow-xs'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-emerald-800'
                        }`}
                        title="Tandai Ayat Terakhir Dibaca"
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                      </button>

                      {/* Copy Verse */}
                      <button
                        onClick={() => handleCopyAyat(ayat)}
                        className={`p-2 rounded-xl text-xs transition-colors cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                        }`}
                        title="Salin Ayat & Terjemahan"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Teks Arab Rasm Utsmani Standar Kemenag RI */}
                  <div
                    className="font-arabic font-bold text-emerald-950 text-right leading-loose pt-2 tracking-wide select-text"
                    style={{ fontSize: `${arabicFontSize}px`, lineHeight: `${Math.round(arabicFontSize * 2.1)}px` }}
                    dir="rtl"
                  >
                    {ayat.teksArab}
                  </div>

                  {/* Transliterasi Latin Resmi Kemenag */}
                  {showLatin && ayat.teksLatin && (
                    <div className="pt-2 text-xs font-serif text-emerald-800/95 italic leading-relaxed">
                      {ayat.teksLatin}
                    </div>
                  )}

                  {/* Terjemahan Bahasa Indonesia Kemenag RI */}
                  {showTerjemahan && (
                    <div className="pt-2 text-xs sm:text-sm font-sans text-slate-700 leading-relaxed border-t border-slate-100">
                      <span className="font-semibold text-slate-900 mr-1.5">Artinya:</span>
                      {ayat.teksIndonesia}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Navigation: Prev Surah, Back to Top, Next Surah */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-center justify-between gap-3 mt-6">
          {prevSurah ? (
            <button
              onClick={() => handleNavigateSurah(-1)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-emerald-100 text-emerald-950 font-bold text-xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <div className="text-left hidden sm:block">
                <div className="text-[10px] text-slate-400">Sebelumnya</div>
                <div>{prevSurah.namaLatin}</div>
              </div>
              <span className="sm:hidden">Sebelumnya</span>
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-600 transition-colors cursor-pointer"
          >
            Ke Atas ↑
          </button>

          {nextSurah ? (
            <button
              onClick={() => handleNavigateSurah(1)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-emerald-100 text-emerald-950 font-bold text-xs transition-colors cursor-pointer"
            >
              <div className="text-right hidden sm:block">
                <div className="text-[10px] text-slate-400">Berikutnya</div>
                <div>{nextSurah.namaLatin}</div>
              </div>
              <span className="sm:hidden">Berikutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------
  // VIEW: MAIN DIRECTORY (TABS: 114 SURAT | MUSHAF PER HALAMAN | 30 JUZ)
  // ----------------------------------------------------------------------
  return (
    <div className="space-y-4 pb-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-emerald-800 text-white font-bold text-xs rounded-full shadow-2xl flex items-center gap-2 border border-emerald-500 animate-in fade-in">
          <Check className="w-4 h-4 text-amber-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Bookmark Resume Banner */}
      {lastBookmark?.page && (
        <div className="bg-gradient-to-r from-amber-500/15 via-emerald-50 to-teal-50 rounded-3xl p-4 border border-amber-300/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-black shrink-0 shadow-xs">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 block">
                Penanda Terakhir Dibaca:
              </span>
              <div className="text-xs sm:text-sm font-black text-slate-900">
                {lastBookmark.surahNama ? `Surat ${lastBookmark.surahNama} (Ayat ${lastBookmark.ayatNomor || 1})` : `Mushaf Halaman ${lastBookmark.page}`}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {lastBookmark.surahNomor && (
              <button
                onClick={() => {
                  const s = ALL_SURAHS.find((item) => item.nomor === lastBookmark.surahNomor);
                  if (s) setSelectedSurahBasic(s);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
              >
                Lanjutkan Surat →
              </button>
            )}
            <button
              onClick={() => {
                setCurrentPage(lastBookmark.page || 1);
                setActiveTab('mushaf');
              }}
              className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs transition-colors cursor-pointer shadow-xs"
            >
              Buka Mushaf Hal {lastBookmark.page || 1}
            </button>
          </div>
        </div>
      )}

      {/* Main Tab Switcher Bar */}
      <div className="bg-white rounded-3xl p-1.5 border border-slate-200/80 shadow-xs flex items-center gap-1.5">
        <button
          onClick={() => setActiveTab('surat')}
          className={`flex-1 py-2.5 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'surat'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Book className="w-4 h-4" />
          <span>114 Surat (Standar Kemenag)</span>
        </button>
        <button
          onClick={() => setActiveTab('mushaf')}
          className={`flex-1 py-2.5 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'mushaf'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Mushaf Per Halaman (1-604)</span>
        </button>
        <button
          onClick={() => setActiveTab('juz')}
          className={`flex-1 py-2.5 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'juz'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>30 Juz Al-Qur&apos;an</span>
        </button>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 1. TAB 114 SURAT AL-QUR'AN                                          */}
      {/* ------------------------------------------------------------------ */}
      {activeTab === 'surat' && (
        <div className="space-y-4">
          {/* Search & Category Filter */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari surat (contoh: Yasin, Al-Mulk, Al-Kahf, Al-Fatihah, 36, 67)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Quick Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
              {[
                { id: 'semua', label: 'Semua (114 Surat)' },
                { id: 'juz30', label: '⭐ Juz 30 (Juz \'Amma)' },
                { id: 'pilihan', label: '👑 Surat Pilihan Utama' },
                { id: 'mekah', label: 'Makkiyyah' },
                { id: 'madinah', label: 'Madaniyyah' },
              ].map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => setFilterKategori(chip.id as any)}
                  className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-colors cursor-pointer ${
                    filterKategori === chip.id
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* Surah Grid List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredSurahs.map((surah) => {
              const isLastRead = lastBookmark?.surahNomor === surah.nomor;

              return (
                <div
                  key={surah.nomor}
                  onClick={() => setSelectedSurahBasic(surah)}
                  className={`bg-white rounded-3xl border p-4 shadow-xs hover:shadow-md hover:border-emerald-400 transition-all cursor-pointer flex items-center justify-between gap-3 group relative ${
                    isLastRead ? 'border-amber-400 bg-amber-50/15 ring-2 ring-amber-400/20' : 'border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-900 font-black text-xs flex items-center justify-center border border-emerald-200 shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                      {surah.nomor}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors truncate">
                          {surah.namaLatin}
                        </h4>
                        {isLastRead && (
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-amber-400 text-emerald-950">
                            Terakhir
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {surah.arti} • {surah.jumlahAyat} Ayat
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-arabic text-xl font-bold text-emerald-900 leading-tight block">
                      {surah.namaArab}
                    </span>
                    <span className="text-[10px] text-slate-400 capitalize block mt-0.5">
                      {surah.tempatTurun}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredSurahs.length === 0 && (
            <div className="bg-white rounded-3xl p-12 text-center text-slate-400 text-xs border border-slate-200">
              Tidak ada surat yang cocok dengan pencarian &quot;{searchQuery}&quot;.
            </div>
          )}
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* 2. TAB MUSHAF PER HALAMAN (HALAMAN 1 S.D. 604)                      */}
      {/* ------------------------------------------------------------------ */}
      {activeTab === 'mushaf' && (
        <div className="space-y-4">
          {/* Mushaf Navigation Header */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-2xl bg-emerald-700 text-white font-black text-sm shadow-xs">
                Halaman {currentPage}
              </span>
              <div>
                <span className="text-xs font-black text-slate-900 block">
                  Juz {getJuzForPage(currentPage)} • Standar Mushaf Madinah 15 Baris
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  Rasm Utsmani Standar Kemenag RI (Total 604 Halaman)
                </span>
              </div>
            </div>

            {/* Page Jump Form & Bookmark & View Mode Switch */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Jump to page form */}
              <form onSubmit={handleJumpPage} className="flex items-center gap-1">
                <input
                  type="number"
                  min="1"
                  max="604"
                  placeholder="Hal (1-604)"
                  value={jumpInput}
                  onChange={(e) => setJumpInput(e.target.value)}
                  className="w-24 px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none text-slate-800 font-semibold"
                />
                <button
                  type="submit"
                  className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                >
                  Buka
                </button>
              </form>

              {/* Bookmark Button */}
              <button
                onClick={() => handleBookmarkPage(currentPage)}
                className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Tandai Halaman Ini Terakhir Dibaca"
              >
                <Bookmark className="w-3.5 h-3.5 text-amber-600" />
                <span className="hidden sm:inline">Bookmark Hal {currentPage}</span>
              </button>

              {/* Mode Switcher: Gambar Asli vs Teks Ayat */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200">
                <button
                  onClick={() => setMushafMode('gambar')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    mushafMode === 'gambar' ? 'bg-emerald-700 text-white' : 'text-slate-600'
                  }`}
                  title="Tampilan Gambar Kaligrafi Mushaf Asli"
                >
                  Mushaf Asli
                </button>
                <button
                  onClick={() => setMushafMode('teks')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    mushafMode === 'teks' ? 'bg-emerald-700 text-white' : 'text-slate-600'
                  }`}
                  title="Tampilan Teks Ayat Interaktif dengan Terjemahan"
                >
                  Teks &amp; Arti
                </button>
              </div>

              {/* Prev / Next Page Stepper */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage <= 1}
                  className="p-1.5 rounded-xl hover:bg-white text-slate-700 disabled:opacity-30 cursor-pointer"
                  title="Halaman Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold px-2 text-slate-700">{currentPage}/604</span>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(604, p + 1))}
                  disabled={currentPage >= 604}
                  className="p-1.5 rounded-xl hover:bg-white text-slate-700 disabled:opacity-30 cursor-pointer"
                  title="Halaman Berikutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick shortcuts */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
            <span className="text-slate-400 font-bold mr-1 shrink-0">Pintasan Cepat:</span>
            {quickPages.map((pt) => (
              <button
                key={pt.page}
                onClick={() => setCurrentPage(pt.page)}
                className={`px-2.5 py-1 rounded-xl font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  currentPage === pt.page
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {pt.label}
              </button>
            ))}
          </div>

          {/* ------------------------------------------------------------- */}
          {/* MODE 1: GAMBAR MUSHAF MADINAH 15 BARIS ASLI (100% PRECISE)   */}
          {/* ------------------------------------------------------------- */}
          {mushafMode === 'gambar' && (
            <div className="bg-[#fcfaf2] rounded-3xl p-3 sm:p-6 border-2 border-emerald-900/30 shadow-md flex flex-col items-center justify-center relative overflow-hidden">
              {/* Header Info Banner on Sheet */}
              <div className="w-full max-w-2xl flex items-center justify-between pb-3 mb-3 border-b border-amber-300/80 text-xs font-bold text-emerald-950">
                <span>Juz {getJuzForPage(currentPage)}</span>
                <span className="font-arabic text-base text-emerald-900">مُصْحَفُ المَدِينَةِ النَّبَوِيَّةِ</span>
                <span>Halaman {currentPage}</span>
              </div>

              {/* High-Resolution King Fahd / Kemenag Standard Medina Mushaf Page Image */}
              <div className={`relative max-w-2xl w-full flex items-center justify-center transition-all ${
                isImageZoomed ? 'scale-110' : ''
              }`}>
                <img
                  src={`https://files.quran.app/hafs/madani/width_1024/page${currentPage.toString().padStart(3, '0')}.png`}
                  alt={`Mushaf Madinah Halaman ${currentPage}`}
                  className="w-full h-auto max-h-[82vh] object-contain rounded-2xl shadow-sm border border-amber-200/50"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to secondary mirror if needed
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = `https://android.quran.com/data/width_1024/page${currentPage.toString().padStart(3, '0')}.png`;
                    }
                  }}
                />

                {/* Floating Zoom toggle */}
                <button
                  onClick={() => setIsImageZoomed(!isImageZoomed)}
                  className="absolute bottom-3 right-3 p-2 bg-emerald-900/80 hover:bg-emerald-800 text-white rounded-xl shadow-md backdrop-blur-md cursor-pointer transition-colors"
                  title={isImageZoomed ? 'Perkecil' : 'Perbesar Tampilan'}
                >
                  {isImageZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Footer Sheet Navigation */}
              <div className="w-full max-w-2xl flex items-center justify-between pt-4 mt-3 border-t border-amber-300/80 text-xs">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage <= 1}
                  className="text-emerald-800 hover:text-emerald-950 font-bold disabled:opacity-30 cursor-pointer flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Halaman Sebelumnya
                </button>
                <span className="font-black text-slate-800">~ {currentPage} ~</span>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(604, p + 1))}
                  disabled={currentPage >= 604}
                  className="text-emerald-800 hover:text-emerald-950 font-bold disabled:opacity-30 cursor-pointer flex items-center gap-1"
                >
                  Halaman Berikutnya <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* MODE 2: TEKS AYAT HALAMAN DENGAN TERJEMAHAN BAHASA INDONESIA  */}
          {/* ------------------------------------------------------------- */}
          {mushafMode === 'teks' && (
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Ayat-Ayat Al-Qur&apos;an di Halaman {currentPage}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Rasm Utsmani dan Terjemahan Bahasa Indonesia Kemenag RI
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Juz {getJuzForPage(currentPage)}
                </span>
              </div>

              {isLoadingPageVerses ? (
                <div className="py-12 text-center text-slate-400 space-y-2">
                  <RefreshCw className="w-6 h-6 animate-spin mx-auto text-emerald-600" />
                  <p className="text-xs">Memuat ayat halaman {currentPage}...</p>
                </div>
              ) : pageVerses.length > 0 ? (
                <div className="space-y-4">
                  {pageVerses.map((v, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200/60">
                        <span className="font-bold text-emerald-800">
                          Ayat: {v.verse_key || `${v.chapter_id}:${v.verse_number || idx + 1}`}
                        </span>
                      </div>
                      <div
                        className="font-arabic font-bold text-emerald-950 text-right leading-loose text-2xl tracking-wide select-text"
                        dir="rtl"
                      >
                        {v.text_uthmani}
                      </div>
                      {v.translations?.[0]?.text && (
                        <div
                          className="text-xs text-slate-700 leading-relaxed font-sans pt-1 border-t border-slate-200/60"
                          dangerouslySetInnerHTML={{ __html: v.translations[0].text }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-xs text-slate-400">
                  Gunakan mode <strong>&quot;Mushaf Asli&quot;</strong> di atas untuk melihat lembaran kaligrafi mushaf beresolusi tinggi.
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* 3. TAB 30 JUZ AL-QUR'AN                                            */}
      {/* ------------------------------------------------------------------ */}
      {activeTab === 'juz' && (
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs">
            <h3 className="font-bold text-base text-slate-900">
              30 Juz Al-Qur&apos;anul Karim
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Pembagian 30 Juz standar mushaf dengan rincian surat awal, ayat, dan rentang halaman.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {DATA_30_JUZ.map((j) => (
              <div
                key={j.juz}
                className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between space-y-3 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-900 font-black text-sm flex items-center justify-center border border-emerald-200 shadow-2xs group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                      {j.juz}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      Hal {j.halamanMulai} - {j.halamanSelesai}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{j.nama}</h4>
                  <div className="text-xs text-slate-600 space-y-1 mt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Awal:</span>
                      <span className="font-semibold text-emerald-800">
                        {j.suratMulai} (Ayat {j.ayatMulai})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Akhir:</span>
                      <span className="font-semibold text-emerald-800">
                        {j.suratSelesai} (Ayat {j.ayatSelesai})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => {
                      const s = ALL_SURAHS.find((item) => item.nomor === j.suratMulaiNomor);
                      if (s) setSelectedSurahBasic(s);
                    }}
                    className="flex-1 py-1.5 px-2.5 rounded-xl bg-slate-100 hover:bg-emerald-100 text-emerald-900 font-bold text-xs transition-colors cursor-pointer text-center"
                  >
                    Buka Surat
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage(j.halamanMulai);
                      setActiveTab('mushaf');
                    }}
                    className="flex-1 py-1.5 px-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors cursor-pointer text-center"
                  >
                    Buka Mushaf
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
