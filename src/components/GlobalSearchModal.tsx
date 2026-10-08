import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Users, Book, Heart, Calendar, GraduationCap, Trophy, Compass, Clock, DollarSign, Sparkles, ChevronRight, UserCheck, Moon, Palette } from 'lucide-react';
import { Santri, Guru, DoaHarian, Surah, JadwalPelajaran, Prestasi } from '../types/mdtu';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  santriList: Santri[];
  guruList: Guru[];
  doaList: DoaHarian[];
  surahList: Surah[];
  jadwalList: JadwalPelajaran[];
  prestasiList: Prestasi[];
  onSelectResult: (targetTab: string, detailItem?: any) => void;
  onOpenEditLogo?: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  santriList,
  guruList,
  doaList,
  surahList,
  jadwalList,
  prestasiList,
  onSelectResult,
  onOpenEditLogo,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Search in categories
  const matchedSantri = q ? santriList.filter((s) => s.nama.toLowerCase().includes(q) || s.hafalanSurat.toLowerCase().includes(q)).slice(0, 4) : [];
  const matchedSurah = q ? surahList.filter((s) => s.namaLatin.toLowerCase().includes(q) || s.arti.toLowerCase().includes(q) || s.nomor.toString() === q).slice(0, 4) : [];
  const matchedDoa = q ? doaList.filter((d) => d.judul.toLowerCase().includes(q) || d.arti.toLowerCase().includes(q)).slice(0, 3) : [];
  const matchedJadwal = q ? jadwalList.filter((j) => j.mataPelajaran.toLowerCase().includes(q) || j.hari.toLowerCase().includes(q)).slice(0, 3) : [];
  const matchedGuru = q ? guruList.filter((g) => g.nama.toLowerCase().includes(q) || g.jabatan.toLowerCase().includes(q)).slice(0, 3) : [];
  const matchedPrestasi = q ? prestasiList.filter((p) => p.judul.toLowerCase().includes(q) || p.santri.toLowerCase().includes(q)).slice(0, 3) : [];

  const quickFeatures = [
    { id: 'absensi', title: 'Presensi Absensi (TPQ, A, B, C & Guru)', icon: UserCheck, color: 'text-emerald-700' },
    { id: 'kalender', title: 'Kalender Hijriyah & Agenda MDTU', icon: Moon, color: 'text-teal-700' },
    { id: 'edit-logo', title: 'Edit & Kustomisasi Logo Madrasah', icon: Palette, color: 'text-amber-600', isAction: true },
    { id: 'ai', title: 'Ustaz AI (Asisten Cerdas)', icon: Sparkles, color: 'text-amber-500' },
    { id: 'sholat', title: 'Jadwal Sholat Cikopo Panawa (GPS)', icon: Clock, color: 'text-emerald-600' },
    { id: 'kiblat', title: 'Kompas Arah Kiblat (295°)', icon: Compass, color: 'text-indigo-600' },
    { id: 'alquran', title: 'Al-Qur\'an 114 Surat & 30 Juz', icon: Book, color: 'text-emerald-700' },
    { id: 'keuangan', title: 'Pembayaran SPP & Kas Madrasah', icon: DollarSign, color: 'text-yellow-600' },
    { id: 'prestasi', title: 'Prestasi & Kejuaraan Santri', icon: Trophy, color: 'text-amber-600' },
  ].filter((f) => !q || f.title.toLowerCase().includes(q) || (f.id === 'edit-logo' && ('logo'.includes(q) || 'gambar'.includes(q) || 'ikon'.includes(q) || 'icon'.includes(q))));

  const totalResults =
    matchedSantri.length +
    matchedSurah.length +
    matchedDoa.length +
    matchedJadwal.length +
    matchedGuru.length +
    matchedPrestasi.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden flex flex-col max-h-[82vh]">
        {/* Search input header */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-emerald-700 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari santri, surat Al-Qur'an, doa, jadwal, guru, prestasi..."
            className="w-full text-xs sm:text-sm bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="px-2.5 py-1 text-xs rounded-lg bg-slate-200 text-slate-700 font-bold hover:bg-slate-300 cursor-pointer">
            Tutup
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          {/* If empty query, show quick modules */}
          {!q && (
            <div className="space-y-2">
              <span className="font-bold text-[11px] text-slate-400 uppercase tracking-wider">
                Akses Cepat Modul MDTU
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickFeatures.map((f) => {
                  const IconCmp = f.icon;
                  return (
                    <button
                      key={f.id}
                      onClick={() => {
                        onClose();
                        if (f.id === 'edit-logo') {
                          if (onOpenEditLogo) onOpenEditLogo();
                        } else {
                          onSelectResult(f.id);
                        }
                      }}
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50/80 border border-slate-200 text-left flex items-center gap-2.5 transition-colors group cursor-pointer"
                    >
                      <IconCmp className={`w-4 h-4 ${f.color}`} />
                      <span className="font-bold text-slate-800 text-xs group-hover:text-emerald-900">
                        {f.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Matches list */}
          {q && (
            <>
              {totalResults === 0 ? (
                <div className="py-10 text-center text-slate-400">
                  Tidak ditemukan hasil untuk &quot;{query}&quot;. Coba kata kunci lain.
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Santri Matches */}
                  {matchedSantri.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="font-bold text-[11px] text-emerald-800 uppercase flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>Data Santri ({matchedSantri.length})</span>
                      </div>
                      {matchedSantri.map((s) => (
                        <div
                          key={s.id}
                          onClick={() => {
                            onSelectResult('santri', s);
                            onClose();
                          }}
                          className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 cursor-pointer flex items-center justify-between transition-colors"
                        >
                          <div>
                            <div className="font-bold text-slate-900">{s.nama}</div>
                            <div className="text-[10px] text-slate-500">{s.kelas} • Hafalan: {s.hafalanSurat}</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Surah Matches */}
                  {matchedSurah.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="font-bold text-[11px] text-emerald-800 uppercase flex items-center gap-1.5">
                        <Book className="w-3.5 h-3.5" />
                        <span>Al-Qur&apos;an ({matchedSurah.length})</span>
                      </div>
                      {matchedSurah.map((surah) => (
                        <div
                          key={surah.nomor}
                          onClick={() => {
                            onSelectResult('alquran', surah);
                            onClose();
                          }}
                          className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 cursor-pointer flex items-center justify-between transition-colors"
                        >
                          <div>
                            <div className="font-bold text-slate-900">{surah.nomor}. QS. {surah.namaLatin} ({surah.namaArab})</div>
                            <div className="text-[10px] text-slate-500">{surah.arti} • {surah.jumlahAyat} Ayat</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Doa Matches */}
                  {matchedDoa.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="font-bold text-[11px] text-emerald-800 uppercase flex items-center gap-1.5">
                        <Heart className="w-3.5 h-3.5" />
                        <span>Doa Harian ({matchedDoa.length})</span>
                      </div>
                      {matchedDoa.map((d) => (
                        <div
                          key={d.id}
                          onClick={() => {
                            onSelectResult('doa', d);
                            onClose();
                          }}
                          className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 cursor-pointer flex items-center justify-between transition-colors"
                        >
                          <div>
                            <div className="font-bold text-slate-900">{d.judul}</div>
                            <div className="text-[10px] text-slate-500 truncate max-w-sm">{d.arti}</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Jadwal Matches */}
                  {matchedJadwal.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="font-bold text-[11px] text-emerald-800 uppercase flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Jadwal Pelajaran ({matchedJadwal.length})</span>
                      </div>
                      {matchedJadwal.map((j) => (
                        <div
                          key={j.id}
                          onClick={() => {
                            onSelectResult('jadwal', j);
                            onClose();
                          }}
                          className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 cursor-pointer flex items-center justify-between transition-colors"
                        >
                          <div>
                            <div className="font-bold text-slate-900">{j.mataPelajaran} ({j.hari})</div>
                            <div className="text-[10px] text-slate-500">{j.jamMulai}-{j.jamSelesai} • {j.kelas} • Guru: {j.guruPengampu}</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Prestasi Matches */}
                  {matchedPrestasi.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="font-bold text-[11px] text-emerald-800 uppercase flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5" />
                        <span>Prestasi Santri ({matchedPrestasi.length})</span>
                      </div>
                      {matchedPrestasi.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => {
                            onSelectResult('prestasi', p);
                            onClose();
                          }}
                          className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 cursor-pointer flex items-center justify-between transition-colors"
                        >
                          <div>
                            <div className="font-bold text-slate-900">{p.kejuaraan} - {p.judul}</div>
                            <div className="text-[10px] text-slate-500">{p.santri} • Tahun {p.tahun}</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Guru Matches */}
                  {matchedGuru.length > 0 && (
                    <div className="space-y-1.5">
                      <div className="font-bold text-[11px] text-emerald-800 uppercase flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>Dewan Guru ({matchedGuru.length})</span>
                      </div>
                      {matchedGuru.map((g) => (
                        <div
                          key={g.id}
                          onClick={() => {
                            onSelectResult('guru', g);
                            onClose();
                          }}
                          className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 cursor-pointer flex items-center justify-between transition-colors"
                        >
                          <div>
                            <div className="font-bold text-slate-900">{g.nama}</div>
                            <div className="text-[10px] text-slate-500">{g.jabatan}</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
