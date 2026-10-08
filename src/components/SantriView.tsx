import React, { useState } from 'react';
import { Users, Search, Plus, Edit, Trash2, BookOpen, CheckCircle, X } from 'lucide-react';
import { Santri } from '../types/mdtu';

interface SantriViewProps {
  santriList: Santri[];
  isAdmin?: boolean;
  onAddSantri: (santri: Omit<Santri, 'id'>) => void;
  onUpdateSantri: (santri: Santri) => void;
  onDeleteSantri: (id: string) => void;
  onPromptLoginAdmin?: () => void;
}

export const SantriView: React.FC<SantriViewProps> = ({
  santriList,
  isAdmin = false,
  onAddSantri,
  onUpdateSantri,
  onDeleteSantri,
  onPromptLoginAdmin,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKelasFilter, setSelectedKelasFilter] = useState('Semua');
  const [editingSantri, setEditingSantri] = useState<Santri | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form states for Add/Edit
  const [formNama, setFormNama] = useState('');
  const [formKelas, setFormKelas] = useState('Kelas A');
  const [formHafalan, setFormHafalan] = useState('Juz 30 (An-Naas s.d An-Naba\')');
  const [formNomorInduk, setFormNomorInduk] = useState('');
  const [formWali, setFormWali] = useState('');

  const filteredSantri = santriList.filter((s) => {
    const matchKelas = selectedKelasFilter === 'Semua' || s.kelas === selectedKelasFilter;
    const matchSearch =
      s.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.hafalanSurat.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.nomorInduk && s.nomorInduk.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchKelas && matchSearch;
  });

  const openAddModal = () => {
    if (!isAdmin) {
      if (onPromptLoginAdmin) onPromptLoginAdmin();
      return;
    }
    setFormNama('');
    setFormKelas('Kelas A');
    setFormHafalan('Juz 30 (An-Naas s.d An-Naba\')');
    setFormNomorInduk(`2026-${(santriList.length + 1).toString().padStart(3, '0')}`);
    setFormWali('');
    setIsAddModalOpen(true);
  };

  const openEditModal = (s: Santri) => {
    if (!isAdmin) {
      if (onPromptLoginAdmin) onPromptLoginAdmin();
      return;
    }
    setEditingSantri(s);
    setFormNama(s.nama);
    setFormKelas(s.kelas);
    setFormHafalan(s.hafalanSurat);
    setFormNomorInduk(s.nomorInduk || '');
    setFormWali(s.wali || '');
  };

  const handleSaveAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formNama.trim()) return;
    onAddSantri({
      nama: formNama.trim(),
      kelas: formKelas,
      hafalanSurat: formHafalan.trim(),
      nomorInduk: formNomorInduk.trim(),
      wali: formWali.trim(),
      kehadiran: 'Hadir',
    });
    setIsAddModalOpen(false);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSantri || !formNama.trim()) return;
    onUpdateSantri({
      ...editingSantri,
      nama: formNama.trim(),
      kelas: formKelas,
      hafalanSurat: formHafalan.trim(),
      nomorInduk: formNomorInduk.trim(),
      wali: formWali.trim(),
    });
    setEditingSantri(null);
  };

  return (
    <div className="space-y-4">
      {/* Top Header Card */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-600" />
            Data Santri MDTU Nurul Huda
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Total {santriList.length} santri aktif terdaftar pada jenjang Diniyah Takmiliyah Ula
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-emerald-700/20 transition-all self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Santri Baru</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama santri, hafalan, atau nomor induk..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
          />
        </div>

        {/* Kelas Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {['Semua', 'TPQ', 'Kelas A', 'Kelas B', 'Kelas C'].map((kls) => (
            <button
              key={kls}
              onClick={() => setSelectedKelasFilter(kls)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedKelasFilter === kls
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {kls}
            </button>
          ))}
        </div>
      </div>

      {/* Santri Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredSantri.map((santri) => (
          <div
            key={santri.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Card Header: Avatar & Name */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-base border border-emerald-200 shrink-0 shadow-inner">
                    {santri.nama.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-emerald-700 transition-colors">
                      {santri.nama}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                        {santri.kelas}
                      </span>
                      {santri.nomorInduk && (
                        <span className="text-[10px] text-slate-600">
                          NIS: {santri.nomorInduk}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Edit & Delete Action Buttons - Admin Only */}
                {isAdmin ? (
                  <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => openEditModal(santri)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer"
                      title="Edit Data Santri (Admin)"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Hapus data santri "${santri.nama}"?`)) {
                          onDeleteSantri(santri.id);
                        }
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                      title="Hapus Santri"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={onPromptLoginAdmin}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-amber-600 transition-colors cursor-pointer"
                    title="Hanya Admin yang dapat mengedit"
                  >
                    <Edit className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Target & Capaian Hafalan Surat */}
              <div className="mt-3.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-800">
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>Target Hafalan:</span>
                </div>
                <p className="text-xs text-slate-700 font-medium pl-5 leading-relaxed">
                  {santri.hafalanSurat}
                </p>
                {santri.wali && (
                  <p className="text-[10px] text-slate-500 pl-5">
                    Wali: {santri.wali}
                  </p>
                )}
              </div>
            </div>

            {/* Footer status kehadiran & badge */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-800 font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
                Status: {santri.kehadiran || 'Hadir'}
              </span>
              <span className="text-[10px] text-slate-600 font-medium">
                MDTU Nurul Huda
              </span>
            </div>
          </div>
        ))}

        {filteredSantri.length === 0 && (
          <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs">
            Tidak ada santri yang sesuai dengan kriteria pencarian.
          </div>
        )}
      </div>

      {/* Modal Tambah Santri */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden">
            <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Plus className="w-4 h-4 text-amber-400" />
                Tambah Santri Baru
              </h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-emerald-200 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleSaveAdd} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nama Lengkap Santri</label>
                <input
                  type="text"
                  required
                  value={formNama}
                  onChange={(e) => setFormNama(e.target.value)}
                  placeholder="Contoh: Muhammad Raihan"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Kelas Diniyah</label>
                <select
                  value={formKelas}
                  onChange={(e) => setFormKelas(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                >
                  <option value="TPQ">TPQ (Tingkat Pra-Diniyah)</option>
                  <option value="Kelas A">Kelas A (Tingkat Dasar Awal)</option>
                  <option value="Kelas B">Kelas B (Tingkat Menengah)</option>
                  <option value="Kelas C">Kelas C (Tingkat Lanjutan)</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nomor Induk Santri (NIS)</label>
                <input
                  type="text"
                  value={formNomorInduk}
                  onChange={(e) => setFormNomorInduk(e.target.value)}
                  placeholder="2026-001"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nama Orang Tua / Wali</label>
                <input
                  type="text"
                  value={formWali}
                  onChange={(e) => setFormWali(e.target.value)}
                  placeholder="Contoh: Bpk. Gunawan"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Target / Capaian Hafalan Al-Qur&apos;an</label>
                <input
                  type="text"
                  required
                  value={formHafalan}
                  onChange={(e) => setFormHafalan(e.target.value)}
                  placeholder="Contoh: Juz 30 (An-Naas s.d An-Naba')"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold cursor-pointer"
                >
                  Simpan Santri
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Edit Santri */}
      {editingSantri && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden">
            <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Edit className="w-4 h-4 text-amber-400" />
                Edit Data Santri
              </h3>
              <button onClick={() => setEditingSantri(null)} className="text-emerald-200 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleSaveEdit} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nama Lengkap Santri</label>
                <input
                  type="text"
                  required
                  value={formNama}
                  onChange={(e) => setFormNama(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Kelas Diniyah</label>
                <select
                  value={formKelas}
                  onChange={(e) => setFormKelas(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                >
                  <option value="TPQ">TPQ (Tingkat Pra-Diniyah)</option>
                  <option value="Kelas A">Kelas A (Tingkat Dasar Awal)</option>
                  <option value="Kelas B">Kelas B (Tingkat Menengah)</option>
                  <option value="Kelas C">Kelas C (Tingkat Lanjutan)</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nomor Induk Santri (NIS)</label>
                <input
                  type="text"
                  value={formNomorInduk}
                  onChange={(e) => setFormNomorInduk(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nama Orang Tua / Wali</label>
                <input
                  type="text"
                  value={formWali}
                  onChange={(e) => setFormWali(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Target / Capaian Hafalan Al-Qur&apos;an</label>
                <input
                  type="text"
                  required
                  value={formHafalan}
                  onChange={(e) => setFormHafalan(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingSantri(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold cursor-pointer"
                >
                  Perbarui Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
