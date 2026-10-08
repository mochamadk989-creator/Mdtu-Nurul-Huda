import React, { useState } from 'react';
import {
  Calendar,
  Layers,
  Award,
  Plus,
  Edit,
  Trash2,
  User,
  Clock,
  MapPin,
  Check,
  X,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';
import { JadwalPelajaran, KelasData, Ekstrakurikuler, Guru } from '../types/mdtu';

interface JadwalKelasViewProps {
  jadwalList: JadwalPelajaran[];
  kelasList: KelasData[];
  ekskulList: Ekstrakurikuler[];
  guruList: Guru[];
  isAdmin?: boolean;
  onAddJadwal: (jadwal: Omit<JadwalPelajaran, 'id'>) => void;
  onUpdateJadwal: (jadwal: JadwalPelajaran) => void;
  onDeleteJadwal: (id: string) => void;
  onUpdateWaliKelas: (kelasId: string, newWaliKelas: string) => void;
  onAddKelas: (kelas: Omit<KelasData, 'id'>) => void;
  onUpdateKelas: (kelas: KelasData) => void;
  onDeleteKelas: (id: string) => void;
  onAddEkskul: (ekskul: Omit<Ekstrakurikuler, 'id'>) => void;
  onUpdateEkskul: (ekskul: Ekstrakurikuler) => void;
  onDeleteEkskul: (id: string) => void;
  onPromptLoginAdmin?: () => void;
}

export const JadwalKelasView: React.FC<JadwalKelasViewProps> = ({
  jadwalList,
  kelasList,
  ekskulList,
  guruList,
  isAdmin = false,
  onAddJadwal,
  onUpdateJadwal,
  onDeleteJadwal,
  onUpdateWaliKelas,
  onAddKelas,
  onUpdateKelas,
  onDeleteKelas,
  onAddEkskul,
  onUpdateEkskul,
  onDeleteEkskul,
  onPromptLoginAdmin,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'jadwal' | 'rombel' | 'ekskul'>('jadwal');
  const [filterHari, setFilterHari] = useState<string>('Semua');

  // Modal States: JADWAL
  const [isJadwalModalOpen, setIsJadwalModalOpen] = useState(false);
  const [editingJadwal, setEditingJadwal] = useState<JadwalPelajaran | null>(null);
  const [formHari, setFormHari] = useState('Senin');
  const [formMulai, setFormMulai] = useState('13.30');
  const [formSelesai, setFormSelesai] = useState('15.00');
  const [formMapel, setFormMapel] = useState('');
  const [formKelas, setFormKelas] = useState('Semua Kelas');
  const [formGuru, setFormGuru] = useState(guruList[0]?.nama || 'Ust. Ahmad Syarifudin');

  // Modal States: KELAS / ROMBEL
  const [isKelasModalOpen, setIsKelasModalOpen] = useState(false);
  const [editingKelas, setEditingKelas] = useState<KelasData | null>(null);
  const [formNamaKelas, setFormNamaKelas] = useState('');
  const [formTingkat, setFormTingkat] = useState('');
  const [formWaliKelas, setFormWaliKelas] = useState('');
  const [formRuangan, setFormRuangan] = useState('');
  const [formJumlahSantri, setFormJumlahSantri] = useState(25);

  // Quick Wali Kelas Modal
  const [editingKelasForWali, setEditingKelasForWali] = useState<KelasData | null>(null);
  const [selectedWaliName, setSelectedWaliName] = useState('');

  // Modal States: EKSKUL
  const [isEkskulModalOpen, setIsEkskulModalOpen] = useState(false);
  const [editingEkskul, setEditingEkskul] = useState<Ekstrakurikuler | null>(null);
  const [formNamaEkskul, setFormNamaEkskul] = useState('');
  const [formPembina, setFormPembina] = useState('');
  const [formJadwalEkskul, setFormJadwalEkskul] = useState('');
  const [formLokasiEkskul, setFormLokasiEkskul] = useState('');
  const [formDeskripsiEkskul, setFormDeskripsiEkskul] = useState('');

  // Delete Confirmation Modal State
  const [deleteTarget, setDeleteTarget] = useState<{
    type: 'jadwal' | 'kelas' | 'ekskul';
    id: string;
    title: string;
  } | null>(null);

  const checkAdmin = () => {
    if (!isAdmin) {
      if (onPromptLoginAdmin) onPromptLoginAdmin();
      return false;
    }
    return true;
  };

  // --- JADWAL HANDLERS ---
  const handleOpenAddJadwal = () => {
    if (!checkAdmin()) return;
    setEditingJadwal(null);
    setFormHari('Senin');
    setFormMulai('13.30');
    setFormSelesai('15.00');
    setFormMapel('');
    setFormKelas('Semua Kelas');
    setFormGuru(guruList[0]?.nama || 'Ust. Ahmad Syarifudin');
    setIsJadwalModalOpen(true);
  };

  const handleOpenEditJadwal = (j: JadwalPelajaran) => {
    if (!checkAdmin()) return;
    setEditingJadwal(j);
    setFormHari(j.hari);
    setFormMulai(j.jamMulai);
    setFormSelesai(j.jamSelesai);
    setFormMapel(j.mataPelajaran);
    setFormKelas(j.kelas);
    setFormGuru(j.guruPengampu);
    setIsJadwalModalOpen(true);
  };

  const handleSaveJadwal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formMapel.trim()) return;
    if (editingJadwal) {
      onUpdateJadwal({
        id: editingJadwal.id,
        hari: formHari,
        jamMulai: formMulai,
        jamSelesai: formSelesai,
        mataPelajaran: formMapel.trim(),
        kelas: formKelas,
        guruPengampu: formGuru,
      });
    } else {
      onAddJadwal({
        hari: formHari,
        jamMulai: formMulai,
        jamSelesai: formSelesai,
        mataPelajaran: formMapel.trim(),
        kelas: formKelas,
        guruPengampu: formGuru,
      });
    }
    setIsJadwalModalOpen(false);
  };

  // --- KELAS / ROMBEL HANDLERS ---
  const handleOpenAddKelas = () => {
    if (!checkAdmin()) return;
    setEditingKelas(null);
    setFormNamaKelas('');
    setFormTingkat('Tingkat Dasar (Ula)');
    setFormWaliKelas(guruList[0]?.nama || 'Ustzh. Nur Aisyah');
    setFormRuangan('Ruang Kelas Baru');
    setFormJumlahSantri(20);
    setIsKelasModalOpen(true);
  };

  const handleOpenEditKelas = (k: KelasData) => {
    if (!checkAdmin()) return;
    setEditingKelas(k);
    setFormNamaKelas(k.namaKelas);
    setFormTingkat(k.tingkat);
    setFormWaliKelas(k.waliKelas);
    setFormRuangan(k.ruangan);
    setFormJumlahSantri(k.jumlahSantri);
    setIsKelasModalOpen(true);
  };

  const handleSaveKelas = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formNamaKelas.trim()) return;
    if (editingKelas) {
      onUpdateKelas({
        id: editingKelas.id,
        namaKelas: formNamaKelas.trim(),
        tingkat: formTingkat.trim() || 'Tingkat Diniyah',
        waliKelas: formWaliKelas.trim(),
        ruangan: formRuangan.trim() || 'Ruang Madrasah',
        jumlahSantri: Number(formJumlahSantri) || 0,
      });
    } else {
      onAddKelas({
        namaKelas: formNamaKelas.trim(),
        tingkat: formTingkat.trim() || 'Tingkat Diniyah',
        waliKelas: formWaliKelas.trim(),
        ruangan: formRuangan.trim() || 'Ruang Madrasah',
        jumlahSantri: Number(formJumlahSantri) || 0,
      });
    }
    setIsKelasModalOpen(false);
  };

  const openQuickWaliModal = (kelas: KelasData) => {
    if (!checkAdmin()) return;
    setEditingKelasForWali(kelas);
    setSelectedWaliName(kelas.waliKelas);
  };

  const handleSaveQuickWali = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingKelasForWali && selectedWaliName) {
      onUpdateWaliKelas(editingKelasForWali.id, selectedWaliName);
      setEditingKelasForWali(null);
    }
  };

  // --- EKSKUL HANDLERS ---
  const handleOpenAddEkskul = () => {
    if (!checkAdmin()) return;
    setEditingEkskul(null);
    setFormNamaEkskul('');
    setFormPembina(guruList[0]?.nama || 'Ust. Salman Al-Farisi');
    setFormJadwalEkskul('Ahad, 08.00 - 10.00 WIB');
    setFormLokasiEkskul('Aula MDTU Nurul Huda');
    setFormDeskripsiEkskul('');
    setIsEkskulModalOpen(true);
  };

  const handleOpenEditEkskul = (e: Ekstrakurikuler) => {
    if (!checkAdmin()) return;
    setEditingEkskul(e);
    setFormNamaEkskul(e.nama);
    setFormPembina(e.pembina);
    setFormJadwalEkskul(e.jadwal);
    setFormLokasiEkskul(e.lokasi);
    setFormDeskripsiEkskul(e.deskripsi);
    setIsEkskulModalOpen(true);
  };

  const handleSaveEkskul = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formNamaEkskul.trim()) return;
    if (editingEkskul) {
      onUpdateEkskul({
        id: editingEkskul.id,
        nama: formNamaEkskul.trim(),
        pembina: formPembina.trim(),
        jadwal: formJadwalEkskul.trim(),
        lokasi: formLokasiEkskul.trim(),
        deskripsi: formDeskripsiEkskul.trim(),
      });
    } else {
      onAddEkskul({
        nama: formNamaEkskul.trim(),
        pembina: formPembina.trim(),
        jadwal: formJadwalEkskul.trim(),
        lokasi: formLokasiEkskul.trim(),
        deskripsi: formDeskripsiEkskul.trim(),
      });
    }
    setIsEkskulModalOpen(false);
  };

  // Confirm Delete
  const handleConfirmDelete = () => {
    if (!deleteTarget) return;
    if (deleteTarget.type === 'jadwal') {
      onDeleteJadwal(deleteTarget.id);
    } else if (deleteTarget.type === 'kelas') {
      onDeleteKelas(deleteTarget.id);
    } else if (deleteTarget.type === 'ekskul') {
      onDeleteEkskul(deleteTarget.id);
    }
    setDeleteTarget(null);
  };

  // Filtered Jadwal
  const filteredJadwal = jadwalList.filter((j) => {
    if (filterHari === 'Semua') return true;
    return j.hari.toLowerCase() === filterHari.toLowerCase();
  });

  return (
    <div className="space-y-4">
      {/* Sub-tab Navigation */}
      <div className="bg-white rounded-2xl p-1.5 border border-slate-200/80 shadow-xs flex items-center gap-1.5">
        <button
          onClick={() => setActiveSubTab('jadwal')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'jadwal'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Jadwal Pelajaran ({jadwalList.length})</span>
        </button>
        <button
          onClick={() => setActiveSubTab('rombel')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'rombel'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Wali Kelas &amp; Rombel ({kelasList.length})</span>
        </button>
        <button
          onClick={() => setActiveSubTab('ekskul')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'ekskul'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Ekstrakurikuler ({ekskulList.length})</span>
        </button>
      </div>

      {/* 1. JADWAL PELAJARAN (KBM) SUBTAB */}
      {activeSubTab === 'jadwal' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900">Jadwal Belajar Mengajar (KBM)</h3>
                {isAdmin ? (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-300">
                    Mode Admin Aktif
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-medium border border-slate-200">
                    Mode Tamu / Santri
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Kegiatan belajar diniyah TPQ, Kelas A, Kelas B, dan Kelas C (13.30 - 15.00 WIB)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleOpenAddJadwal}
                className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all hover:shadow cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Jadwal</span>
              </button>
            </div>
          </div>

          {/* Filter by Day */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-500 font-semibold px-2 shrink-0">Hari:</span>
            {['Semua', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Ahad'].map((h) => (
              <button
                key={h}
                onClick={() => setFilterHari(h)}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  filterHari === h
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {h}
              </button>
            ))}
          </div>

          {/* Jadwal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredJadwal.map((j) => (
              <div
                key={j.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="flex items-start gap-3.5">
                  {/* Day & Time badge */}
                  <div className="w-20 rounded-xl bg-emerald-50 border border-emerald-200/60 p-2 text-center shrink-0">
                    <div className="text-xs font-black text-emerald-800 uppercase">{j.hari}</div>
                    <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">
                      {j.jamMulai} - {j.jamSelesai}
                    </div>
                  </div>
                  {/* Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                      {j.mataPelajaran}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-[11px] font-bold">
                        {j.kelas}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-amber-800 font-medium pt-1">
                      <User className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate">Guru: {j.guruPengampu}</span>
                    </div>
                  </div>
                </div>

                {/* Admin Actions: Edit & Hapus */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-end gap-2">
                  <button
                    onClick={() => handleOpenEditJadwal(j)}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-amber-50 text-amber-700 hover:text-amber-800 font-bold text-xs flex items-center gap-1 transition-colors border border-slate-200 hover:border-amber-300 cursor-pointer"
                    title="Ubah Jadwal"
                  >
                    <Edit className="w-3.5 h-3.5" />
                    <span>Ubah</span>
                  </button>
                  <button
                    onClick={() => {
                      if (!checkAdmin()) return;
                      setDeleteTarget({
                        type: 'jadwal',
                        id: j.id,
                        title: `${j.mataPelajaran} (${j.hari}, ${j.kelas})`,
                      });
                    }}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-rose-50 text-rose-600 hover:text-rose-700 font-bold text-xs flex items-center gap-1 transition-colors border border-slate-200 hover:border-rose-300 cursor-pointer"
                    title="Hapus Jadwal"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Hapus</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJadwal.length === 0 && (
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-700">Belum ada jadwal untuk hari {filterHari}</p>
              <p className="text-xs text-slate-400 mt-1">
                Klik tombol &quot;Tambah Jadwal&quot; di atas untuk menambahkan jadwal pelajaran.
              </p>
            </div>
          )}
        </div>
      )}

      {/* 2. ROMBEL & WALI KELAS SUBTAB */}
      {activeSubTab === 'rombel' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900">Data Rombel &amp; Wali Kelas</h3>
                {isAdmin ? (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-300">
                    Admin: Edit &amp; Hapus Tersedia
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-medium border border-slate-200">
                    Info Rombel
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Daftar rombongan belajar: TPQ, Kelas A, Kelas B, Kelas C, dan penanggung jawab kelas
              </p>
            </div>
            <button
              onClick={handleOpenAddKelas}
              className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all hover:shadow cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Rombel Baru</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kelasList.map((k) => (
              <div
                key={k.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {k.tingkat}
                    </span>
                    <span className="text-xs font-extrabold text-slate-700">
                      {k.jumlahSantri} Santri
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-emerald-950">{k.namaKelas}</h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{k.ruangan}</span>
                    </p>
                  </div>

                  {/* Wali Kelas Highlight Card */}
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 space-y-1">
                    <div className="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-700" />
                      <span>Wali Kelas:</span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 pl-5 truncate">{k.waliKelas}</div>
                  </div>
                </div>

                {/* Action Buttons: Ubah Wali, Edit Detail Rombel, Hapus */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  <button
                    onClick={() => openQuickWaliModal(k)}
                    className="w-full py-1.5 px-3 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <User className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Ganti Wali Kelas</span>
                  </button>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      onClick={() => handleOpenEditKelas(k)}
                      className="py-1.5 px-2 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-amber-800 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <Edit className="w-3.5 h-3.5 text-amber-600" />
                      <span>Edit Rombel</span>
                    </button>
                    <button
                      onClick={() => {
                        if (!checkAdmin()) return;
                        setDeleteTarget({
                          type: 'kelas',
                          id: k.id,
                          title: `Rombel ${k.namaKelas} (${k.tingkat})`,
                        });
                      }}
                      className="py-1.5 px-2 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-rose-600 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                      <span>Hapus</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. EKSTRAKURIKULER SUBTAB */}
      {activeSubTab === 'ekskul' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900">Ekstrakurikuler &amp; Minat Bakat</h3>
                {isAdmin ? (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-300">
                    Admin: Edit &amp; Tambah Aktif
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-medium border border-slate-200">
                    Bakat Santri
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Pengembangan seni Islam Hadroh, Kaligrafi, Pidato/Khitobah, dan bakat santri MDTU Nurul Huda
              </p>
            </div>
            <button
              onClick={handleOpenAddEkskul}
              className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all hover:shadow cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Ekskul Baru</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ekskulList.map((e) => (
              <div
                key={e.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Aktif
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{e.nama}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed min-h-[3rem]">{e.deskripsi}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{e.jadwal}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{e.lokasi}</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-800 font-semibold pt-1">
                    <User className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate">Pembina: {e.pembina}</span>
                  </div>
                </div>
                {/* Admin Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                  <button
                    onClick={() => handleOpenEditEkskul(e)}
                    className="flex-1 py-1.5 px-2.5 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-amber-800 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <Edit className="w-3.5 h-3.5 text-amber-600" />
                    <span>Ubah</span>
                  </button>
                  <button
                    onClick={() => {
                      if (!checkAdmin()) return;
                      setDeleteTarget({
                        type: 'ekskul',
                        id: e.id,
                        title: `Ekstrakurikuler ${e.nama}`,
                      });
                    }}
                    className="flex-1 py-1.5 px-2.5 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-rose-600 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                    <span>Hapus</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODAL: TAMBAH / EDIT JADWAL */}
      {isJadwalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden">
            <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm flex items-center gap-2">
                {editingJadwal ? (
                  <>
                    <Edit className="w-4 h-4 text-amber-400" />
                    <span>Ubah Jadwal Pelajaran</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-amber-400" />
                    <span>Tambah Jadwal Pelajaran Diniyah</span>
                  </>
                )}
              </h3>
              <button onClick={() => setIsJadwalModalOpen(false)} className="text-emerald-200 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleSaveJadwal} className="p-5 space-y-3.5 text-xs">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Hari</label>
                  <select
                    value={formHari}
                    onChange={(e) => setFormHari(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 bg-white"
                  >
                    {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Ahad'].map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mulai</label>
                  <input
                    type="text"
                    value={formMulai}
                    onChange={(e) => setFormMulai(e.target.value)}
                    placeholder="13.30"
                    className="w-full px-2.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Selesai</label>
                  <input
                    type="text"
                    value={formSelesai}
                    onChange={(e) => setFormSelesai(e.target.value)}
                    placeholder="15.00"
                    className="w-full px-2.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-semibold">Preset Waktu:</span>
                <button
                  type="button"
                  onClick={() => {
                    setFormMulai('13.30');
                    setFormSelesai('15.00');
                  }}
                  className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold border border-emerald-300 cursor-pointer transition-colors"
                >
                  ⚡ 13.30 - 15.00 WIB (Standar MDTU)
                </button>
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Mata Pelajaran</label>
                <input
                  type="text"
                  required
                  value={formMapel}
                  onChange={(e) => setFormMapel(e.target.value)}
                  placeholder="Contoh: Tahfidz Juz 30 / Fiqih Ibadah"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Sasaran Rombel / Kelas</label>
                <select
                  value={formKelas}
                  onChange={(e) => setFormKelas(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 bg-white"
                >
                  <option value="Semua Kelas">Semua Kelas</option>
                  {kelasList.map((k) => (
                    <option key={k.id} value={k.namaKelas}>
                      {k.namaKelas} ({k.tingkat})
                    </option>
                  ))}
                  <option value="TPQ & Kelas A">TPQ &amp; Kelas A</option>
                  <option value="Kelas B & C">Kelas B &amp; C</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Guru Pengampu</label>
                <select
                  value={formGuru}
                  onChange={(e) => setFormGuru(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 bg-white"
                >
                  {guruList.map((g) => (
                    <option key={g.id} value={g.nama}>
                      {g.nama} ({g.jabatan})
                    </option>
                  ))}
                </select>
              </div>
              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsJadwalModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold cursor-pointer"
                >
                  {editingJadwal ? 'Simpan Perubahan' : 'Tambah Jadwal'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: TAMBAH / EDIT ROMBEL KELAS */}
      {isKelasModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden">
            <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm flex items-center gap-2">
                {editingKelas ? (
                  <>
                    <Edit className="w-4 h-4 text-amber-400" />
                    <span>Edit Rombel {editingKelas.namaKelas}</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-amber-400" />
                    <span>Tambah Rombel Kelas Baru</span>
                  </>
                )}
              </h3>
              <button onClick={() => setIsKelasModalOpen(false)} className="text-emerald-200 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleSaveKelas} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nama Rombel / Kelas</label>
                <input
                  type="text"
                  required
                  value={formNamaKelas}
                  onChange={(e) => setFormNamaKelas(e.target.value)}
                  placeholder="Contoh: TPQ, Kelas A, Kelas B, Kelas C, Kelas Khusus"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Tingkatan / Keterangan</label>
                <input
                  type="text"
                  value={formTingkat}
                  onChange={(e) => setFormTingkat(e.target.value)}
                  placeholder="Contoh: Tingkat Dasar (Ula) / Pra-Diniyah"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Wali Kelas (Asatidz / Ustadzah)</label>
                <select
                  value={formWaliKelas}
                  onChange={(e) => setFormWaliKelas(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 bg-white"
                >
                  {guruList.map((g) => (
                    <option key={g.id} value={g.nama}>
                      {g.nama} ({g.jabatan})
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Jumlah Santri</label>
                  <input
                    type="number"
                    min="1"
                    value={formJumlahSantri}
                    onChange={(e) => setFormJumlahSantri(parseInt(e.target.value, 10) || 0)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Ruangan Belajar</label>
                  <input
                    type="text"
                    value={formRuangan}
                    onChange={(e) => setFormRuangan(e.target.value)}
                    placeholder="Contoh: Ruang Abu Bakar"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>
              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsKelasModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold cursor-pointer"
                >
                  {editingKelas ? 'Simpan Rombel' : 'Tambah Rombel'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: QUICK UBAH WALI KELAS */}
      {editingKelasForWali && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden">
            <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Edit className="w-4 h-4 text-amber-400" />
                Ubah Wali Kelas {editingKelasForWali.namaKelas}
              </h3>
              <button onClick={() => setEditingKelasForWali(null)} className="text-emerald-200 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleSaveQuickWali} className="p-5 space-y-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                <div className="font-bold text-emerald-900">{editingKelasForWali.namaKelas}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {editingKelasForWali.tingkat} • {editingKelasForWali.ruangan}
                </div>
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-2">Pilih Dewan Guru Sebagai Wali Kelas:</label>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {guruList.map((g) => (
                    <label
                      key={g.id}
                      onClick={() => setSelectedWaliName(g.nama)}
                      className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                        selectedWaliName === g.nama
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selectedWaliName === g.nama
                              ? 'border-emerald-600 bg-emerald-600 text-white'
                              : 'border-slate-400'
                          }`}
                        >
                          {selectedWaliName === g.nama && <Check className="w-3 h-3" />}
                        </div>
                        <span>{g.nama}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-normal">{g.jabatan.slice(0, 22)}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingKelasForWali(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold cursor-pointer"
                >
                  Simpan Wali Kelas
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: TAMBAH / EDIT EKSKUL */}
      {isEkskulModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden">
            <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm flex items-center gap-2">
                {editingEkskul ? (
                  <>
                    <Edit className="w-4 h-4 text-amber-400" />
                    <span>Ubah Ekstrakurikuler</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-amber-400" />
                    <span>Tambah Ekstrakurikuler Baru</span>
                  </>
                )}
              </h3>
              <button onClick={() => setIsEkskulModalOpen(false)} className="text-emerald-200 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleSaveEkskul} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nama Ekstrakurikuler</label>
                <input
                  type="text"
                  required
                  value={formNamaEkskul}
                  onChange={(e) => setFormNamaEkskul(e.target.value)}
                  placeholder="Contoh: Seni Hadroh & Rebana / Kaligrafi"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Pembina / Pelatih</label>
                <input
                  type="text"
                  required
                  value={formPembina}
                  onChange={(e) => setFormPembina(e.target.value)}
                  placeholder="Nama Ustadz / Ustadzah Pembina"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Jadwal &amp; Waktu</label>
                  <input
                    type="text"
                    value={formJadwalEkskul}
                    onChange={(e) => setFormJadwalEkskul(e.target.value)}
                    placeholder="Ahad, 08.00 - 10.00"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Lokasi Latihan</label>
                  <input
                    type="text"
                    value={formLokasiEkskul}
                    onChange={(e) => setFormLokasiEkskul(e.target.value)}
                    placeholder="Aula MDTU Nurul Huda"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Deskripsi Kegiatan</label>
                <textarea
                  rows={3}
                  value={formDeskripsiEkskul}
                  onChange={(e) => setFormDeskripsiEkskul(e.target.value)}
                  placeholder="Uraian kegiatan latihan, tujuan dan keterampilan santri..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsEkskulModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold cursor-pointer"
                >
                  {editingEkskul ? 'Simpan Ekskul' : 'Tambah Ekskul'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: KONFIRMASI HAPUS */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-sm w-full p-5 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-slate-900">Konfirmasi Hapus Data</h3>
              <p className="text-xs text-slate-600">
                Apakah Anda yakin ingin menghapus data <strong>&quot;{deleteTarget.title}&quot;</strong>? Tindakan ini tidak dapat dibatalkan.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="flex-1 py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs cursor-pointer"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
