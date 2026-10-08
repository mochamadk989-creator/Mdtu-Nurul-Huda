import React, { useState } from 'react';
import {
  Users,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  XCircle,
  Calendar,
  Printer,
  Search,
  Check,
  Clock,
  ShieldCheck,
  Lock,
  UserCheck,
} from 'lucide-react';
import { Santri, Guru, AbsensiRecord, StatusAbsensi, KategoriAbsensi } from '../types/mdtu';
import { getHijriDate, formatTanggalMasehi } from '../utils/hijriCalendar';

interface AbsensiViewProps {
  santriList: Santri[];
  guruList: Guru[];
  absensiList: AbsensiRecord[];
  isAdmin?: boolean;
  onUpdateAbsensi: (records: AbsensiRecord[]) => void;
  onOpenCetakLaporan: (kategori: string, tanggal: string) => void;
  onPromptLoginAdmin?: () => void;
}

export const AbsensiView: React.FC<AbsensiViewProps> = ({
  santriList,
  guruList,
  absensiList,
  isAdmin = false,
  onUpdateAbsensi,
  onOpenCetakLaporan,
  onPromptLoginAdmin,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    return new Date().toISOString().split('T')[0];
  });
  const [activeCategory, setActiveCategory] = useState<KategoriAbsensi>('TPQ');
  const [searchQuery, setSearchQuery] = useState('');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  const selectedDateObj = new Date(selectedDate);
  const hijriInfo = getHijriDate(selectedDateObj);
  const formattedMasehi = formatTanggalMasehi(selectedDateObj);

  // Targets for current category
  const currentTargets = React.useMemo(() => {
    if (activeCategory === 'Guru') {
      return guruList.map((g) => ({
        id: g.id,
        nama: g.nama,
        kelas: g.jabatan,
        sub: g.mataPelajaran || g.kontak || 'Dewan Guru',
      }));
    }
    return santriList
      .filter((s) => s.kelas === activeCategory)
      .map((s) => ({
        id: s.id,
        nama: s.nama,
        kelas: s.kelas,
        sub: s.hafalanSurat || `NIS: ${s.nomorInduk || '-'}`,
      }));
  }, [activeCategory, santriList, guruList]);

  // Current records for selected date and category
  const attendanceMap = React.useMemo(() => {
    const map = new Map<string, { status: StatusAbsensi; keterangan: string }>();
    absensiList
      .filter((r) => r.tanggal === selectedDate && r.kategori === activeCategory)
      .forEach((r) => {
        map.set(r.targetId, {
          status: r.status,
          keterangan: r.keterangan || '',
        });
      });
    return map;
  }, [absensiList, selectedDate, activeCategory]);

  // Handle single attendance toggle
  const handleSetStatus = (targetId: string, nama: string, kelas: string, status: StatusAbsensi) => {
    if (!isAdmin) {
      if (onPromptLoginAdmin) onPromptLoginAdmin();
      return;
    }
    const existingIndex = absensiList.findIndex(
      (r) => r.tanggal === selectedDate && r.kategori === activeCategory && r.targetId === targetId
    );
    const nowTime = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    let updatedList: AbsensiRecord[];
    if (existingIndex >= 0) {
      updatedList = [...absensiList];
      updatedList[existingIndex] = {
        ...updatedList[existingIndex],
        status,
        waktuInput: nowTime,
      };
    } else {
      const newRecord: AbsensiRecord = {
        id: `AB-${Date.now()}-${targetId}`,
        tanggal: selectedDate,
        kategori: activeCategory,
        targetId,
        nama,
        kelas,
        status,
        waktuInput: nowTime,
      };
      updatedList = [...absensiList, newRecord];
    }
    onUpdateAbsensi(updatedList);
  };

  // Handle keterangan update
  const handleSetKeterangan = (targetId: string, nama: string, kelas: string, keterangan: string) => {
    if (!isAdmin) return;
    const existingIndex = absensiList.findIndex(
      (r) => r.tanggal === selectedDate && r.kategori === activeCategory && r.targetId === targetId
    );

    let updatedList: AbsensiRecord[];
    if (existingIndex >= 0) {
      updatedList = [...absensiList];
      updatedList[existingIndex] = {
        ...updatedList[existingIndex],
        keterangan,
      };
    } else {
      const newRecord: AbsensiRecord = {
        id: `AB-${Date.now()}-${targetId}`,
        tanggal: selectedDate,
        kategori: activeCategory,
        targetId,
        nama,
        kelas,
        status: 'Hadir',
        keterangan,
        waktuInput: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };
      updatedList = [...absensiList, newRecord];
    }
    onUpdateAbsensi(updatedList);
  };

  // Quick action: Mark all present
  const handleMarkAllPresent = () => {
    if (!isAdmin) {
      if (onPromptLoginAdmin) onPromptLoginAdmin();
      return;
    }
    const nowTime = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    // Filter out existing records for this date & category
    const remainingList = absensiList.filter(
      (r) => !(r.tanggal === selectedDate && r.kategori === activeCategory)
    );

    const newRecords: AbsensiRecord[] = currentTargets.map((t) => ({
      id: `AB-${Date.now()}-${t.id}`,
      tanggal: selectedDate,
      kategori: activeCategory,
      targetId: t.id,
      nama: t.nama,
      kelas: t.kelas,
      status: 'Hadir',
      waktuInput: nowTime,
    }));

    onUpdateAbsensi([...remainingList, ...newRecords]);
    setSaveSuccessMsg(true);
    setTimeout(() => setSaveSuccessMsg(false), 2500);
  };

  // Statistics calculation for current view
  const stats = React.useMemo(() => {
    let hadir = 0;
    let izin = 0;
    let sakit = 0;
    let alpa = 0;
    let belumAbsen = 0;

    currentTargets.forEach((t) => {
      const rec = attendanceMap.get(t.id);
      if (!rec) {
        belumAbsen++;
      } else if (rec.status === 'Hadir') {
        hadir++;
      } else if (rec.status === 'Izin') {
        izin++;
      } else if (rec.status === 'Sakit') {
        sakit++;
      } else if (rec.status === 'Alpa') {
        alpa++;
      }
    });

    const total = currentTargets.length;
    const persenHadir = total > 0 ? Math.round((hadir / total) * 100) : 0;

    return { hadir, izin, sakit, alpa, belumAbsen, total, persenHadir };
  }, [currentTargets, attendanceMap]);

  // Filtered targets
  const filteredTargets = currentTargets.filter(
    (t) =>
      t.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.sub.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Banner & Date Selector */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden border border-emerald-700/50">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-emerald-600/20 rounded-full blur-2xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold mb-2">
              <UserCheck className="w-3.5 h-3.5" />
              Presensi Madrasah Terpadu
            </div>
            <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              Absensi Santri &amp; Dewan Guru
            </h2>
            <p className="text-emerald-100/80 text-sm mt-1">
              Catat kehadiran harian TPQ, Kelas A, Kelas B, Kelas C, dan Asatidz dengan akurat.
            </p>
          </div>

          {/* Date Picker & Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-emerald-950/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-emerald-600/40 flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-emerald-300" />
              <div>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-transparent text-white font-bold outline-none cursor-pointer text-sm"
                />
                <div className="text-[11px] text-emerald-300">
                  {hijriInfo.formatted}
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenCetakLaporan(activeCategory, selectedDate)}
              className="px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-emerald-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Cetak PDF
            </button>
          </div>
        </div>

        {/* Hijri & Gregorian Date Ribbon */}
        <div className="mt-4 pt-4 border-t border-emerald-700/60 flex flex-wrap items-center justify-between text-xs text-emerald-200">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Tanggal:</span>
            <span>{formattedMasehi}</span>
            <span>•</span>
            <span className="font-semibold text-amber-300">{hijriInfo.formatted}</span>
          </div>

          <div className="flex items-center gap-2">
            {isAdmin ? (
              <span className="inline-flex items-center gap-1 text-emerald-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                Mode Admin: Akses Simpan &amp; Edit Aktif
              </span>
            ) : (
              <button
                onClick={onPromptLoginAdmin}
                className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 underline cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                Mode Tamu (Klik untuk Login Admin)
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Class/Category Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-200/80">
        {(['TPQ', 'Kelas A', 'Kelas B', 'Kelas C', 'Guru'] as KategoriAbsensi[]).map((kat) => {
          const isActive = activeCategory === kat;
          const count =
            kat === 'Guru'
              ? guruList.length
              : santriList.filter((s) => s.kelas === kat).length;

          return (
            <button
              key={kat}
              onClick={() => setActiveCategory(kat)}
              className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span>{kat === 'Guru' ? 'Dewan Asatidz' : kat}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-emerald-800 text-emerald-100' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Total {activeCategory === 'Guru' ? 'Asatidz' : 'Santri'}
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-black text-slate-800">{stats.total}</span>
            <span className="text-xs text-slate-400 font-medium">Orang</span>
          </div>
        </div>

        <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
              Hadir (H)
            </span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-black text-emerald-700">{stats.hadir}</span>
            <span className="text-xs text-emerald-600 font-bold">{stats.persenHadir}%</span>
          </div>
        </div>

        <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider">
              Izin (I)
            </span>
            <HelpCircle className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-black text-blue-700">{stats.izin}</span>
            <span className="text-xs text-blue-600 font-medium">Orang</span>
          </div>
        </div>

        <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider">
              Sakit (S)
            </span>
            <AlertCircle className="w-4 h-4 text-amber-600" />
          </div>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-black text-amber-700">{stats.sakit}</span>
            <span className="text-xs text-amber-600 font-medium">Orang</span>
          </div>
        </div>

        <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-rose-700 uppercase tracking-wider">
              Alpa (A)
            </span>
            <XCircle className="w-4 h-4 text-rose-600" />
          </div>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-black text-rose-700">{stats.alpa}</span>
            <span className="text-xs text-rose-600 font-medium">Orang</span>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Belum Diabsen
            </span>
            <Clock className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-black text-slate-600">{stats.belumAbsen}</span>
            <span className="text-xs text-slate-400 font-medium">Orang</span>
          </div>
        </div>
      </div>

      {/* Action Bar: Search, Quick Mark All Present */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Cari nama ${activeCategory === 'Guru' ? 'ustadz/ustadzah' : 'santri'} di ${activeCategory}...`}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="flex items-center gap-2">
          {saveSuccessMsg && (
            <span className="text-xs text-emerald-600 font-bold flex items-center gap-1 animate-pulse">
              <Check className="w-4 h-4" /> Berhasil disimpan!
            </span>
          )}
          <button
            onClick={handleMarkAllPresent}
            className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            title="Tandai semua santri/guru di kelas ini sebagai Hadir"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Tandai Semua Hadir
          </button>
        </div>
      </div>

      {/* Attendance Table / Cards */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-700" />
            <h3 className="font-bold text-slate-800 text-sm">
              Daftar Presensi {activeCategory === 'Guru' ? 'Dewan Asatidz' : `Santri ${activeCategory}`}
            </h3>
            <span className="text-xs text-slate-500">
              ({filteredTargets.length} nama)
            </span>
          </div>
          <span className="text-xs font-medium text-slate-500">
            Klik H / I / S / A untuk mengubah status
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredTargets.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm">
              Tidak ada data ditemukan untuk pencarian &quot;{searchQuery}&quot;.
            </div>
          ) : (
            filteredTargets.map((item, index) => {
              const currentRecord = attendanceMap.get(item.id);
              const currentStatus = currentRecord?.status;
              const currentKeterangan = currentRecord?.keterangan || '';

              return (
                <div
                  key={item.id}
                  className="p-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                >
                  {/* Left: Name and Info */}
                  <div className="flex items-center gap-3 min-w-[240px]">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        {item.nama}
                        {currentStatus && (
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                              currentStatus === 'Hadir'
                                ? 'bg-emerald-100 text-emerald-800'
                                : currentStatus === 'Izin'
                                ? 'bg-blue-100 text-blue-800'
                                : currentStatus === 'Sakit'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {currentStatus}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500">{item.sub}</div>
                    </div>
                  </div>

                  {/* Right: Status Selector & Keterangan Input */}
                  <div className="flex flex-wrap items-center gap-3">
                    {/* H / I / S / A status toggle buttons */}
                    <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
                      <button
                        onClick={() => handleSetStatus(item.id, item.nama, item.kelas, 'Hadir')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                          currentStatus === 'Hadir'
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
                        }`}
                        title="Hadir"
                      >
                        <Check className="w-3 h-3" />
                        Hadir
                      </button>
                      <button
                        onClick={() => handleSetStatus(item.id, item.nama, item.kelas, 'Izin')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                          currentStatus === 'Izin'
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
                        }`}
                        title="Izin"
                      >
                        Izin
                      </button>
                      <button
                        onClick={() => handleSetStatus(item.id, item.nama, item.kelas, 'Sakit')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                          currentStatus === 'Sakit'
                            ? 'bg-amber-500 text-white shadow-sm'
                            : 'text-slate-600 hover:text-amber-700 hover:bg-amber-50'
                        }`}
                        title="Sakit"
                      >
                        Sakit
                      </button>
                      <button
                        onClick={() => handleSetStatus(item.id, item.nama, item.kelas, 'Alpa')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                          currentStatus === 'Alpa'
                            ? 'bg-rose-600 text-white shadow-sm'
                            : 'text-slate-600 hover:text-rose-700 hover:bg-rose-50'
                        }`}
                        title="Alpa / Tanpa Keterangan"
                      >
                        Alpa
                      </button>
                    </div>

                    {/* Keterangan input */}
                    <input
                      type="text"
                      disabled={!isAdmin}
                      placeholder={isAdmin ? 'Catatan/keterangan...' : 'Tanpa catatan'}
                      value={currentKeterangan}
                      onChange={(e) =>
                        handleSetKeterangan(item.id, item.nama, item.kelas, e.target.value)
                      }
                      className="w-full sm:w-44 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 disabled:bg-slate-100 disabled:text-slate-400"
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
