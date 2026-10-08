import React, { useState } from 'react';
import { Trophy, Plus, Edit, Trash2, Search, X } from 'lucide-react';
import { Prestasi } from '../types/mdtu';

interface PrestasiViewProps {
  prestasiList: Prestasi[];
  isAdmin: boolean;
  onAddPrestasi: (prestasi: Omit<Prestasi, 'id'>) => void;
  onUpdatePrestasi: (prestasi: Prestasi) => void;
  onDeletePrestasi: (id: string) => void;
  onPromptLoginAdmin: () => void;
}

export const PrestasiView: React.FC<PrestasiViewProps> = ({
  prestasiList,
  isAdmin,
  onAddPrestasi,
  onUpdatePrestasi,
  onDeletePrestasi,
  onPromptLoginAdmin,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKategori, setSelectedKategori] = useState('Semua');

  // Modal states
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingPrestasi, setEditingPrestasi] = useState<Prestasi | null>(null);

  // Form states
  const [formJudul, setFormJudul] = useState('');
  const [formSantri, setFormSantri] = useState('');
  const [formKejuaraan, setFormKejuaraan] = useState('Juara 1');
  const [formKategori, setFormKategori] = useState('Tahfidz (MHQ)');
  const [formTingkat, setFormTingkat] = useState('Kabupaten');
  const [formTahun, setFormTahun] = useState('2026');
  const [formDeskripsi, setFormDeskripsi] = useState('');

  const kategoriList = ['Semua', 'Tahfidz (MHQ)', 'Pidato Arab', 'Kaligrafi', 'Seni Hadroh', 'Madrasah'];

  const filtered = prestasiList.filter((p) => {
    const matchKat = selectedKategori === 'Semua' || p.kategori === selectedKategori;
    const matchSearch =
      p.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.santri.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tahun.includes(searchQuery.trim());
    return matchKat && matchSearch;
  });

  const openAdd = () => {
    if (!isAdmin) {
      onPromptLoginAdmin();
      return;
    }
    setFormJudul('');
    setFormSantri('');
    setFormKejuaraan('Juara 1');
    setFormKategori('Tahfidz (MHQ)');
    setFormTingkat('Kabupaten');
    setFormTahun('2026');
    setFormDeskripsi('');
    setIsAddOpen(true);
  };

  const openEdit = (p: Prestasi) => {
    if (!isAdmin) {
      onPromptLoginAdmin();
      return;
    }
    setEditingPrestasi(p);
    setFormJudul(p.judul);
    setFormSantri(p.santri);
    setFormKejuaraan(p.kejuaraan);
    setFormKategori(p.kategori);
    setFormTingkat(p.tingkat);
    setFormTahun(p.tahun);
    setFormDeskripsi(p.deskripsi);
  };

  const handleSaveAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formJudul.trim()) return;
    onAddPrestasi({
      judul: formJudul.trim(),
      santri: formSantri.trim() || 'Santri MDTU',
      kejuaraan: formKejuaraan,
      kategori: formKategori,
      tingkat: formTingkat,
      tahun: formTahun.trim() || '2026',
      deskripsi: formDeskripsi.trim(),
    });
    setIsAddOpen(false);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPrestasi || !formJudul.trim()) return;
    onUpdatePrestasi({
      ...editingPrestasi,
      judul: formJudul.trim(),
      santri: formSantri.trim() || 'Santri MDTU',
      kejuaraan: formKejuaraan,
      kategori: formKategori,
      tingkat: formTingkat,
      tahun: formTahun.trim() || '2026',
      deskripsi: formDeskripsi.trim(),
    });
    setEditingPrestasi(null);
  };

  return (
    <div className="space-y-4">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 text-slate-950 rounded-2xl p-5 border border-amber-400 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-emerald-950 shrink-0" />
            <h2 className="text-lg font-black tracking-tight text-emerald-950">
              Prestasi &amp; Kejuaraan MDTU Nurul Huda
            </h2>
          </div>
          <p className="text-xs text-emerald-950/80 font-medium mt-1">
            Daftar capaian prestasi santri dan madrasah pada ajang perlombaan keagamaan
          </p>
        </div>
        <button
          onClick={openAdd}
          className="px-4 py-2 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-amber-300 font-bold text-xs flex items-center gap-2 shadow-lg transition-all self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Prestasi (Admin)</span>
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kejuaraan, nama santri, atau tahun..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
          />
        </div>
        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          {kategoriList.map((kat) => (
            <button
              key={kat}
              onClick={() => setSelectedKategori(kat)}
              className={`px-3 py-1 rounded-xl font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedKategori === kat
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {kat}
            </button>
          ))}
        </div>
      </div>

      {/* Prestasi Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    🏆 {item.kejuaraan}
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Tingkat {item.tingkat}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {item.tahun}
                  </span>
                </div>
                {isAdmin && (
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => openEdit(item)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-amber-50 transition-colors cursor-pointer"
                      title="Edit Prestasi (Admin)"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Hapus prestasi "${item.judul}"?`)) {
                          onDeletePrestasi(item.id);
                        }
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                      title="Hapus Prestasi"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
              <h3 className="font-bold text-slate-900 text-sm leading-snug">{item.judul}</h3>
              <p className="text-xs font-semibold text-emerald-800 mt-1">
                Santri / Tim: {item.santri}
              </p>
              {item.deskripsi && (
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.deskripsi}</p>
              )}
            </div>
            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span>Bidang: {item.kategori}</span>
              <span>MDTU Nurul Huda</span>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs">
            Belum ada data prestasi yang cocok dengan pencarian.
          </div>
        )}
      </div>

      {/* Modal Add / Edit Prestasi */}
      {(isAddOpen || editingPrestasi) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden">
            <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                {isAddOpen ? 'Tambah Prestasi Baru (Admin)' : 'Edit Data Prestasi'}
              </h3>
              <button
                onClick={() => {
                  setIsAddOpen(false);
                  setEditingPrestasi(null);
                }}
                className="text-emerald-200 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={isAddOpen ? handleSaveAdd : handleSaveEdit} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nama Lomba / Kejuaraan</label>
                <input
                  type="text"
                  required
                  value={formJudul}
                  onChange={(e) => setFormJudul(e.target.value)}
                  placeholder="Contoh: Juara 1 MHQ 5 Juz Antar Diniyah"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nama Santri / Tim Peraih</label>
                <input
                  type="text"
                  required
                  value={formSantri}
                  onChange={(e) => setFormSantri(e.target.value)}
                  placeholder="Contoh: Ahmad Fauzi / MDTU Nurul Huda"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Peringkat Juara</label>
                  <select
                    value={formKejuaraan}
                    onChange={(e) => setFormKejuaraan(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="Juara 1">Juara 1 (Emas)</option>
                    <option value="Juara 2">Juara 2 (Perak)</option>
                    <option value="Juara 3">Juara 3 (Perunggu)</option>
                    <option value="Juara Harapan 1">Juara Harapan 1</option>
                    <option value="Madrasah Teladan">Madrasah Teladan</option>
                    <option value="Kategori Favorit">Kategori Favorit</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Tingkat</label>
                  <select
                    value={formTingkat}
                    onChange={(e) => setFormTingkat(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="Kecamatan">Kecamatan</option>
                    <option value="Kabupaten">Kabupaten</option>
                    <option value="Provinsi">Provinsi</option>
                    <option value="Nasional">Nasional</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Kategori</label>
                  <select
                    value={formKategori}
                    onChange={(e) => setFormKategori(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="Tahfidz (MHQ)">Tahfidz (MHQ)</option>
                    <option value="Pidato Arab">Pidato Arab</option>
                    <option value="Kaligrafi">Kaligrafi</option>
                    <option value="Seni Hadroh">Seni Hadroh</option>
                    <option value="Madrasah">Madrasah</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Tahun</label>
                  <input
                    type="text"
                    value={formTahun}
                    onChange={(e) => setFormTahun(e.target.value)}
                    placeholder="2026"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Keterangan / Catatan</label>
                <textarea
                  rows={2}
                  value={formDeskripsi}
                  onChange={(e) => setFormDeskripsi(e.target.value)}
                  placeholder="Penyelenggara, piala bergilir, dll..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddOpen(false);
                    setEditingPrestasi(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold cursor-pointer"
                >
                  Simpan Prestasi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
