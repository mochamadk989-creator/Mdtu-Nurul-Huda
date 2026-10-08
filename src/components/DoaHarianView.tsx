import React, { useState } from 'react';
import { Heart, Search, Plus, Edit, Trash2, Copy, Check, X } from 'lucide-react';
import { DoaHarian } from '../types/mdtu';

interface DoaHarianViewProps {
  doaList: DoaHarian[];
  isAdmin?: boolean;
  onAddDoa: (doa: Omit<DoaHarian, 'id'>) => void;
  onUpdateDoa: (doa: DoaHarian) => void;
  onDeleteDoa: (id: string) => void;
  onPromptLoginAdmin?: () => void;
}

export const DoaHarianView: React.FC<DoaHarianViewProps> = ({
  doaList,
  isAdmin = false,
  onAddDoa,
  onUpdateDoa,
  onDeleteDoa,
  onPromptLoginAdmin,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Modal Add / Edit
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingDoa, setEditingDoa] = useState<DoaHarian | null>(null);
  const [formJudul, setFormJudul] = useState('');
  const [formArab, setFormArab] = useState('');
  const [formLatin, setFormLatin] = useState('');
  const [formArti, setFormArti] = useState('');
  const [formKategori, setFormKategori] = useState('Harian');

  const categories = ['Semua', 'Belajar', 'Tahfidz', 'Adab & Keluarga', 'Sholat & Masjid', 'Harian'];

  const filteredDoa = doaList.filter((d) => {
    const matchCat = selectedCategory === 'Semua' || d.kategori.includes(selectedCategory);
    const matchSearch =
      d.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.arti.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.latin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleCopy = (doa: DoaHarian) => {
    const text = `${doa.judul}\n\n${doa.lafadzArab}\n\nLatin: ${doa.latin}\n\nArtinya: ${doa.arti}`;
    navigator.clipboard.writeText(text);
    setCopiedId(doa.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const openAdd = () => {
    if (!isAdmin) {
      if (onPromptLoginAdmin) onPromptLoginAdmin();
      return;
    }
    setFormJudul('');
    setFormArab('');
    setFormLatin('');
    setFormArti('');
    setFormKategori('Belajar');
    setIsAddOpen(true);
  };

  const openEdit = (d: DoaHarian) => {
    if (!isAdmin) {
      if (onPromptLoginAdmin) onPromptLoginAdmin();
      return;
    }
    setEditingDoa(d);
    setFormJudul(d.judul);
    setFormArab(d.lafadzArab);
    setFormLatin(d.latin);
    setFormArti(d.arti);
    setFormKategori(d.kategori);
  };

  const handleSaveAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formJudul.trim() || !formArab.trim()) return;
    onAddDoa({
      judul: formJudul.trim(),
      lafadzArab: formArab.trim(),
      latin: formLatin.trim(),
      arti: formArti.trim(),
      kategori: formKategori,
    });
    setIsAddOpen(false);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDoa || !formJudul.trim()) return;
    onUpdateDoa({
      ...editingDoa,
      judul: formJudul.trim(),
      lafadzArab: formArab.trim(),
      latin: formLatin.trim(),
      arti: formArti.trim(),
      kategori: formKategori,
    });
    setEditingDoa(null);
  };

  return (
    <div className="space-y-4">
      {/* Header bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500" />
            Doa-Doa Harian &amp; Adab Santri
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Kumpulan doa hafalan santri MDTU Nurul Huda bersumber dari Al-Qur&apos;an dan As-Sunnah
          </p>
        </div>
        <button
          onClick={openAdd}
          className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Doa Baru</span>
        </button>
      </div>

      {/* Search & Categories */}
      <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-sm space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari doa (contoh: Belajar, Orang Tua, Masjid)..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
          />
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Doa Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDoa.map((doa) => (
          <div
            key={doa.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">{doa.judul}</h3>
                  <span className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                    {doa.kategori}
                  </span>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleCopy(doa)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors cursor-pointer"
                    title="Salin Teks Doa"
                  >
                    {copiedId === doa.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  {isAdmin && (
                    <>
                      <button
                        onClick={() => openEdit(doa)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-amber-50 transition-colors cursor-pointer"
                        title="Edit Doa (Admin)"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Hapus doa "${doa.judul}"?`)) onDeleteDoa(doa.id);
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                        title="Hapus Doa (Admin)"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Lafadz Arab */}
              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-right font-arabic text-xl sm:text-2xl font-bold text-emerald-950 leading-loose">
                {doa.lafadzArab}
              </div>

              {/* Latin & Arti */}
              <div className="mt-3 space-y-1.5 text-xs">
                <p className="text-emerald-800 italic font-medium">{doa.latin}</p>
                <p className="text-slate-600 leading-relaxed font-sans">{doa.arti}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Add / Edit */}
      {(isAddOpen || editingDoa) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden">
            <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm">
                {isAddOpen ? 'Tambah Doa Harian Baru' : 'Edit Doa Harian'}
              </h3>
              <button
                onClick={() => {
                  setIsAddOpen(false);
                  setEditingDoa(null);
                }}
                className="text-emerald-200 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={isAddOpen ? handleSaveAdd : handleSaveEdit} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Judul Doa</label>
                <input
                  type="text"
                  required
                  value={formJudul}
                  onChange={(e) => setFormJudul(e.target.value)}
                  placeholder="Contoh: Doa Sebelum Masuk Kelas"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Lafadz Bahasa Arab</label>
                <textarea
                  rows={2}
                  required
                  value={formArab}
                  onChange={(e) => setFormArab(e.target.value)}
                  placeholder="اللَّهُمَّ..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 font-arabic text-lg text-right"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Transliterasi Latin</label>
                <input
                  type="text"
                  value={formLatin}
                  onChange={(e) => setFormLatin(e.target.value)}
                  placeholder="Rabbi zidni 'ilman..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 italic"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Arti / Terjemahan</label>
                <textarea
                  rows={2}
                  value={formArti}
                  onChange={(e) => setFormArti(e.target.value)}
                  placeholder="Ya Allah, tambahkanlah ilmuku..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Kategori</label>
                <select
                  value={formKategori}
                  onChange={(e) => setFormKategori(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                >
                  <option value="Belajar">Belajar</option>
                  <option value="Tahfidz">Tahfidz</option>
                  <option value="Adab & Keluarga">Adab &amp; Keluarga</option>
                  <option value="Sholat & Masjid">Sholat &amp; Masjid</option>
                  <option value="Harian">Harian</option>
                </select>
              </div>
              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddOpen(false);
                    setEditingDoa(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold cursor-pointer"
                >
                  Simpan Doa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
