import React, { useState } from 'react';
import { Volume2, Play, Pause, Check, Mic2 } from 'lucide-react';
import { PengaturanSuaraAdzan, QariMurottal } from '../types/mdtu';

interface AdzanMurottalViewProps {
  adzanList: PengaturanSuaraAdzan[];
  qariList: QariMurottal[];
  onUpdateAdzan: (namaWaktu: string, namaSuara: string, aktif: boolean) => void;
  onSetQariAktif: (id: string) => void;
}

export const AdzanMurottalView: React.FC<AdzanMurottalViewProps> = ({
  adzanList,
  qariList,
  onUpdateAdzan,
  onSetQariAktif,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'adzan' | 'murottal'>('adzan');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [editingAdzan, setEditingAdzan] = useState<PengaturanSuaraAdzan | null>(null);
  const [pilihanSuara, setPilihanSuara] = useState('');

  const daftarPilihan = [
    'Adzan Subuh Makkah (Merdu)',
    'Adzan Madinah Al-Munawwarah',
    'Adzan Makkah Al-Mukarramah',
    'Adzan Al-Aqsha Palestina',
    'Adzan Diniyah Nusantara',
    'Adzan Santri MDTU Nurul Huda',
  ];

  const togglePlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };

  const handleSaveAdzanEdit = () => {
    if (editingAdzan && pilihanSuara) {
      onUpdateAdzan(editingAdzan.namaWaktu, pilihanSuara, editingAdzan.aktif);
      setEditingAdzan(null);
    }
  };

  return (
    <div className="space-y-4">
      {/* Subtab Navigation */}
      <div className="bg-white rounded-2xl p-1.5 border border-slate-200/80 shadow-sm flex items-center gap-1.5">
        <button
          onClick={() => setActiveSubTab('adzan')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'adzan'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Volume2 className="w-4 h-4" />
          <span>Suara Adzan 5 Waktu Sholat</span>
        </button>
        <button
          onClick={() => setActiveSubTab('murottal')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'murottal'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Mic2 className="w-4 h-4" />
          <span>Qari Murottal Al-Qur&apos;an</span>
        </button>
      </div>

      {/* 1. SUARA ADZAN */}
      {activeSubTab === 'adzan' && (
        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Kelola Suara Adzan Sholat</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Atur suara muadzin dan notifikasi otomatis saat waktu sholat tiba di madrasah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {adzanList.map((a) => {
              const isPlaying = playingId === a.id;
              return (
                <div
                  key={a.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
                      <Volume2 className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Waktu {a.namaWaktu}</h4>
                      <p className="text-xs text-emerald-700 font-medium">{a.namaSuara}</p>
                      {isPlaying && (
                        <p className="text-[11px] text-amber-600 font-bold animate-pulse mt-0.5">
                          ▶ Memutar simulasi adzan...
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => togglePlay(a.id)}
                      className={`p-2 rounded-xl transition-colors cursor-pointer ${
                        isPlaying
                          ? 'bg-amber-500 text-emerald-950 font-bold'
                          : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                      }`}
                      title={isPlaying ? 'Hentikan' : 'Tes Putar Suara'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => {
                        setEditingAdzan(a);
                        setPilihanSuara(a.namaSuara);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Ganti
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. QARI MUROTTAL */}
      {activeSubTab === 'murottal' && (
        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">Qari Pilihan Murottal Diniyah</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Pilihan rekaman tilawah imam besar internasional dan santri MDTU Nurul Huda
            </p>
          </div>

          <div className="space-y-3">
            {qariList.map((q) => {
              const isPlaying = playingId === q.id;
              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-2xl border p-4 shadow-sm flex items-center justify-between gap-3 transition-all ${
                    q.isAktif ? 'border-emerald-600 ring-1 ring-emerald-600/30 bg-emerald-50/20' : 'border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
                      <Mic2 className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900 text-sm">{q.namaQari}</h4>
                        {q.isAktif && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                            Aktif
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{q.riwayat}</p>
                      {isPlaying && (
                        <p className="text-[11px] text-emerald-700 font-bold animate-pulse mt-0.5">
                          ▶ Sedang melantunkan tilawah murottal...
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => togglePlay(q.id)}
                      className={`p-2 rounded-xl transition-colors cursor-pointer ${
                        isPlaying
                          ? 'bg-amber-500 text-emerald-950 font-bold'
                          : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                      }`}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    {!q.isAktif && (
                      <button
                        onClick={() => onSetQariAktif(q.id)}
                        className="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        Pilih Qari
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Modal Ganti Suara Adzan */}
      {editingAdzan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-sm w-full p-5 space-y-4 text-xs">
            <h3 className="font-bold text-sm text-slate-900">
              Pilih Suara Adzan {editingAdzan.namaWaktu}
            </h3>
            <div className="space-y-2">
              {daftarPilihan.map((p) => (
                <label
                  key={p}
                  onClick={() => setPilihanSuara(p)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer ${
                    pilihanSuara === p ? 'bg-emerald-50 border-emerald-600 font-bold text-emerald-900' : 'border-slate-200'
                  }`}
                >
                  <span>{p}</span>
                  {pilihanSuara === p && <Check className="w-4 h-4 text-emerald-600" />}
                </label>
              ))}
            </div>
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                onClick={() => setEditingAdzan(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={handleSaveAdzanEdit}
                className="px-5 py-2 rounded-xl bg-emerald-700 text-white font-bold cursor-pointer"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
