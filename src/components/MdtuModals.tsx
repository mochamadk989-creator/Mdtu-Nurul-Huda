import React, { useState } from 'react';
import { X, Bell, Edit } from 'lucide-react';
import { Pengumuman, Guru } from '../types/mdtu';

// 1. Notifikasi Modal
export const NotifikasiModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifs = [
    { title: 'Jadwal Sholat & Halaqah Subuh', desc: 'Waktu Subuh Cikopo Panawa 04.28 WIB. Rekaman suara adzan Makkah aktif otomatis.', time: '04.20 WIB' },
    { title: 'Laporan Keuangan Diniyah Siap', desc: 'Penerimaan SPP & Pendaftaran santri bulan Oktober telah direkap.', time: 'Kemarin' },
    { title: 'Verifikasi Arah Kiblat GPS', desc: 'Azimuth kiblat Cikopo Panawa Garut terverifikasi pada 295° barat laut.', time: '3 hari lalu' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden">
        <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
          <h3 className="font-bold text-sm flex items-center gap-2">
            <Bell className="w-4 h-4 text-amber-400" />
            Notifikasi &amp; Pemberitahuan
          </h3>
          <button onClick={onClose} className="text-emerald-200 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
        </div>
        <div className="p-4 space-y-3 max-h-[420px] overflow-y-auto">
          {notifs.map((n, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-950">{n.title}</span>
                <span className="text-[10px] text-slate-400">{n.time}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">{n.desc}</p>
            </div>
          ))}
        </div>
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-right">
          <button onClick={onClose} className="px-4 py-1.5 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

// 2. Profil Admin Modal
export const ProfilAdminModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onEditStatistik: () => void;
  onOpenEditLogo?: () => void;
}> = ({ isOpen, onClose, onEditStatistik, onOpenEditLogo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-sm w-full overflow-hidden text-center">
        <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
          <h3 className="font-bold text-sm">Profil Administrator</h3>
          <button onClick={onClose} className="text-emerald-200 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
        </div>
        <div className="p-6 space-y-4 text-xs">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-black mx-auto border-2 border-emerald-300">
            A
          </div>
          <div>
            <h4 className="font-bold text-base text-slate-900">Administrator Utama</h4>
            <p className="text-slate-500 text-xs mt-0.5">MDTU Nurul Huda Cikopo Panawa</p>
            <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
              Hak Akses Penuh (Super Admin)
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-1.5 text-slate-600 text-[11px]">
            <div>• Kelola Santri, Kelas, &amp; Wali Kelas</div>
            <div>• Rekap SPP, Pendaftaran &amp; Kas Diniyah</div>
            <div>• Pengaturan Jadwal Sholat, Suara Adzan &amp; Qari</div>
            <div>• Kustomisasi &amp; Ganti Logo Resmi Madrasah</div>
          </div>
          <div className="space-y-2">
            {onOpenEditLogo && (
              <button
                onClick={() => {
                  onClose();
                  onOpenEditLogo();
                }}
                className="w-full py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>✏️ Edit &amp; Ganti Logo Madrasah</span>
              </button>
            )}
            <button
              onClick={() => {
                onClose();
                onEditStatistik();
              }}
              className="w-full py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold transition-colors cursor-pointer"
            >
              Ubah Angka Santri &amp; Rombel Cepat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Pengumuman Detail Modal
export const PengumumanDetailModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  pengumuman: Pengumuman;
  onUpdatePengumuman: (updated: Pengumuman) => void;
}> = ({ isOpen, onClose, pengumuman, onUpdatePengumuman }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [judul, setJudul] = useState(pengumuman.judul);
  const [subjudul, setSubjudul] = useState(pengumuman.subjudul);
  const [waktu, setWaktu] = useState(pengumuman.waktu);
  const [lokasi, setLokasi] = useState(pengumuman.lokasi);
  const [deskripsi, setDeskripsi] = useState(pengumuman.deskripsi);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePengumuman({
      ...pengumuman,
      judul,
      subjudul,
      waktu,
      lokasi,
      deskripsi,
    });
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden">
        <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
          <h3 className="font-bold text-sm flex items-center gap-2">
            <Bell className="w-4 h-4 text-amber-400" />
            {isEditing ? 'Edit Pengumuman' : 'Detail Pengumuman Madrasah'}
          </h3>
          <button onClick={onClose} className="text-emerald-200 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
        </div>
        {isEditing ? (
          <form onSubmit={handleSave} className="p-5 space-y-3 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Judul Agenda</label>
              <input
                type="text"
                required
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Subjudul / Tema</label>
              <input
                type="text"
                value={subjudul}
                onChange={(e) => setSubjudul(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Waktu</label>
                <input
                  type="text"
                  value={waktu}
                  onChange={(e) => setWaktu(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Lokasi</label>
                <input
                  type="text"
                  value={lokasi}
                  onChange={(e) => setLokasi(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Keterangan Lengkap</label>
              <textarea
                rows={3}
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
              />
            </div>
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold cursor-pointer"
              >
                Batal
              </button>
              <button type="submit" className="px-5 py-2 rounded-xl bg-emerald-700 text-white font-bold cursor-pointer">
                Simpan
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 space-y-4 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                {pengumuman.kategori || 'Halaqah'}
              </span>
              <span className="text-slate-400">{pengumuman.tanggal}</span>
            </div>
            <div>
              <h4 className="text-lg font-black text-emerald-950">{pengumuman.judul}</h4>
              <p className="text-xs text-amber-700 font-semibold mt-0.5">{pengumuman.subjudul}</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 space-y-1">
              <div><strong>Waktu:</strong> {pengumuman.waktu}</div>
              <div><strong>Tempat:</strong> {pengumuman.lokasi}</div>
            </div>
            <p className="text-slate-600 leading-relaxed text-xs pt-1">{pengumuman.deskripsi}</p>
            <div className="pt-3 flex items-center justify-between border-t border-slate-100">
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Edit Pengumuman</span>
              </button>
              <button onClick={onClose} className="px-5 py-2 rounded-xl bg-emerald-700 text-white font-bold cursor-pointer">
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// 4. Edit Cepat Statistik Modal
export const EditStatistikModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  currentSantri: number;
  currentKelas: number;
  onSave: (santri: number, kelas: number) => void;
}> = ({ isOpen, onClose, currentSantri, currentKelas, onSave }) => {
  const [santri, setSantri] = useState(currentSantri.toString());
  const [kelas, setKelas] = useState(currentKelas.toString());

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const s = parseInt(santri, 10);
    const k = parseInt(kelas, 10);
    if (!isNaN(s) && !isNaN(k)) {
      onSave(s, k);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-sm w-full overflow-hidden">
        <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
          <h3 className="font-bold text-sm">Sesuaikan Statistik Cepat</h3>
          <button onClick={onClose} className="text-emerald-200 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-3.5 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Jumlah Santri Aktif</label>
            <input
              type="number"
              value={santri}
              onChange={(e) => setSantri(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">Jumlah Rombel / Kelas</label>
            <input
              type="number"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
            />
          </div>
          <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold cursor-pointer"
            >
              Batal
            </button>
            <button type="submit" className="px-5 py-2 rounded-xl bg-emerald-700 text-white font-bold cursor-pointer">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// 5. Guru Modal (Add / Edit)
export const GuruModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  initialGuru?: Guru | null;
  onSave: (guruData: Omit<Guru, 'id'>, id?: string) => void;
}> = ({ isOpen, onClose, initialGuru, onSave }) => {
  const [nama, setNama] = useState(initialGuru?.nama || '');
  const [jabatan, setJabatan] = useState(initialGuru?.jabatan || 'Pengampu Diniyah');
  const [mataPelajaran, setMataPelajaran] = useState(initialGuru?.mataPelajaran || '');
  const [kontak, setKontak] = useState(initialGuru?.kontak || '0812-xxxx-xxxx');

  React.useEffect(() => {
    if (initialGuru) {
      setNama(initialGuru.nama);
      setJabatan(initialGuru.jabatan);
      setMataPelajaran(initialGuru.mataPelajaran || '');
      setKontak(initialGuru.kontak || '');
    } else {
      setNama('');
      setJabatan('Pengampu Diniyah');
      setMataPelajaran('Fiqih / Tahfidz');
      setKontak('0812-xxxx-xxxx');
    }
  }, [initialGuru, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim()) return;
    onSave(
      {
        nama: nama.trim(),
        jabatan: jabatan.trim(),
        mataPelajaran: mataPelajaran.trim(),
        kontak: kontak.trim(),
      },
      initialGuru?.id
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-sm w-full overflow-hidden">
        <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
          <h3 className="font-bold text-sm">
            {initialGuru ? 'Edit Data Asatidz' : 'Tambah Guru / Asatidz Baru'}
          </h3>
          <button onClick={onClose} className="text-emerald-200 hover:text-white cursor-pointer"><X className="w-4 h-4" /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-3 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Nama Asatidz / Ustadzah</label>
            <input
              type="text"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Contoh: Ust. M. Zulkifli"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">Jabatan / Amanah</label>
            <input
              type="text"
              required
              value={jabatan}
              onChange={(e) => setJabatan(e.target.value)}
              placeholder="Contoh: Pengampu Tahfidz / Wali Kelas"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">Mata Pelajaran / Bidang</label>
            <input
              type="text"
              value={mataPelajaran}
              onChange={(e) => setMataPelajaran(e.target.value)}
              placeholder="Contoh: Tahfidz Juz 30 & Tajwid"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">Nomor Kontak / WA</label>
            <input
              type="text"
              value={kontak}
              onChange={(e) => setKontak(e.target.value)}
              placeholder="0812-xxxx-xxxx"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
            />
          </div>
          <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold cursor-pointer"
            >
              Batal
            </button>
            <button type="submit" className="px-5 py-2 rounded-xl bg-emerald-700 text-white font-bold cursor-pointer">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
