import React, { useState, useRef } from 'react';
import {
  Printer,
  X,
  FileText,
  Users,
  DollarSign,
  Award,
  CreditCard,
} from 'lucide-react';
import { MdtuLogo } from './MdtuLogo';
import {
  Santri,
  Guru,
  AbsensiRecord,
  TransaksiKeuangan,
  StatusBayarSantri,
  Prestasi,
} from '../types/mdtu';
import {
  getHijriDate,
  formatTanggalMasehi,
  formatTanggalSingkat,
} from '../utils/hijriCalendar';

type JenisLaporanTab = 'absensi' | 'santri' | 'keuangan' | 'prestasi' | 'kartu-spp';

interface CetakLaporanModalProps {
  isOpen: boolean;
  onClose: () => void;
  santriList: Santri[];
  guruList: Guru[];
  absensiList: AbsensiRecord[];
  transaksiList: TransaksiKeuangan[];
  statusBayarList: StatusBayarSantri[];
  prestasiList: Prestasi[];
  initialTab?: JenisLaporanTab;
  initialKategori?: string;
  initialTanggal?: string;
}

export const CetakLaporanModal: React.FC<CetakLaporanModalProps> = ({
  isOpen,
  onClose,
  santriList,
  absensiList,
  transaksiList,
  statusBayarList,
  prestasiList,
  initialTab = 'absensi',
  initialKategori = 'Semua',
  initialTanggal = new Date().toISOString().split('T')[0],
}) => {
  const [activeTab, setActiveTab] = useState<JenisLaporanTab>(initialTab);
  const [selectedTanggal, setSelectedTanggal] = useState<string>(initialTanggal);
  const [selectedKelas, setSelectedKelas] = useState<string>(initialKategori || 'Semua');
  const [selectedSantriId, setSelectedSantriId] = useState<string>(
    santriList[0]?.id || ''
  );

  const printAreaRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const hijriToday = getHijriDate(new Date(selectedTanggal));
  const masehiToday = formatTanggalMasehi(new Date(selectedTanggal));

  // Trigger browser print
  const handlePrint = () => {
    window.print();
  };

  // Filtered attendance for report
  const filteredAbsensi = absensiList.filter((r) => {
    const matchesDate = r.tanggal === selectedTanggal;
    const matchesClass =
      selectedKelas === 'Semua' ||
      (selectedKelas === 'Guru' ? r.kategori === 'Guru' : r.kelas === selectedKelas || r.kategori === selectedKelas);
    return matchesDate && matchesClass;
  });

  // Filtered santri
  const filteredSantri = santriList.filter((s) => {
    return selectedKelas === 'Semua' || s.kelas === selectedKelas;
  });

  // Calculate finance totals
  const totalMasuk = transaksiList
    .filter((t) => t.tipe === 'MASUK')
    .reduce((sum, t) => sum + t.nominal, 0);

  const totalKeluar = transaksiList
    .filter((t) => t.tipe === 'KELUAR')
    .reduce((sum, t) => sum + t.nominal, 0);

  const saldoAkhir = totalMasuk - totalKeluar;

  // Selected santri for kartu SPP
  const currentKartuSantri =
    santriList.find((s) => s.id === selectedSantriId) || santriList[0];
  const santriStatusBayar = statusBayarList.find(
    (sb) => sb.santriId === currentKartuSantri?.id
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex justify-center p-2 sm:p-4 print:p-0 print:bg-white print:static print:inset-auto">
      {/* Container */}
      <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl flex flex-col my-auto border border-slate-200 overflow-hidden print:border-none print:shadow-none print:rounded-none print:w-full print:max-w-none">
        {/* Modal Top Bar - Hidden on print */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-800 flex items-center justify-center text-amber-300">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-base text-white">
                Cetak Laporan Resmi MDTU Nurul Huda
              </h3>
              <p className="text-xs text-slate-400">
                Pilih format dokumen dan klik Cetak / Simpan PDF
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Cetak / Simpan PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls - Hidden on print */}
        <div className="p-4 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 print:hidden">
          {/* Tab buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'absensi', label: 'Presensi / Absensi', icon: Users },
              { id: 'santri', label: 'Rekap Santri', icon: FileText },
              { id: 'keuangan', label: 'Kas & Keuangan', icon: DollarSign },
              { id: 'prestasi', label: 'Prestasi Santri', icon: Award },
              { id: 'kartu-spp', label: 'Kartu Iuran SPP', icon: CreditCard },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as JenisLaporanTab)}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Filter options depending on tab */}
          <div className="flex items-center gap-2">
            {activeTab === 'absensi' && (
              <>
                <input
                  type="date"
                  value={selectedTanggal}
                  onChange={(e) => setSelectedTanggal(e.target.value)}
                  className="px-2.5 py-1 text-xs bg-white border border-slate-300 rounded-xl font-semibold text-slate-700"
                />
                <select
                  value={selectedKelas}
                  onChange={(e) => setSelectedKelas(e.target.value)}
                  className="px-2.5 py-1 text-xs bg-white border border-slate-300 rounded-xl font-semibold text-slate-700"
                >
                  <option value="Semua">Semua Kategori</option>
                  <option value="TPQ">TPQ</option>
                  <option value="Kelas A">Kelas A</option>
                  <option value="Kelas B">Kelas B</option>
                  <option value="Kelas C">Kelas C</option>
                  <option value="Guru">Dewan Asatidz</option>
                </select>
              </>
            )}

            {activeTab === 'santri' && (
              <select
                value={selectedKelas}
                onChange={(e) => setSelectedKelas(e.target.value)}
                className="px-2.5 py-1 text-xs bg-white border border-slate-300 rounded-xl font-semibold text-slate-700"
              >
                <option value="Semua">Semua Kelas</option>
                <option value="TPQ">TPQ</option>
                <option value="Kelas A">Kelas A</option>
                <option value="Kelas B">Kelas B</option>
                <option value="Kelas C">Kelas C</option>
              </select>
            )}

            {activeTab === 'kartu-spp' && (
              <select
                value={selectedSantriId}
                onChange={(e) => setSelectedSantriId(e.target.value)}
                className="px-2.5 py-1 text-xs bg-white border border-slate-300 rounded-xl font-semibold text-slate-700"
              >
                {santriList.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.nama} ({s.kelas})
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {/* Printable Paper Document Container */}
        <div
          ref={printAreaRef}
          className="p-6 sm:p-10 bg-white text-slate-900 max-h-[72vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-0 space-y-6"
        >
          {/* KOP SURAT RESMI MDTU */}
          <div className="border-b-[3px] border-double border-slate-900 pb-3 text-center relative flex items-center justify-between">
            {/* Logo Kiri */}
            <div className="w-20 h-20 shrink-0 flex items-center justify-center">
              <MdtuLogo size={74} showHomeTooltip={false} />
            </div>

            {/* Teks Lembaga */}
            <div className="flex-1 px-4 text-center">
              <h4 className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                YAYASAN PENDIDIKAN ISLAM NURUL HUDA
              </h4>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-wide mt-0.5">
                MADRASAH DINIYAH TAKMILIYAH ULA (MDTU)
              </h2>
              <h1 className="text-xl sm:text-2xl font-black text-emerald-900 tracking-wider">
                NURUL HUDA
              </h1>
              <p className="text-[10px] text-slate-600 mt-0.5 font-medium">
                Izin Operasional Kemenag • NSM: 311.232.050.129 • NPSN: 69981240
              </p>
              <p className="text-[10px] text-slate-600 font-medium">
                Alamat: Kp. Cikopo Panawa RT 02/04, Desa Panawa, Kec. Pamulihan, Kab. Garut 44168
              </p>
            </div>

            {/* Simbol Kanan untuk Simetri Dokumen */}
            <div className="w-20 h-20 shrink-0 hidden sm:flex items-center justify-center text-emerald-900">
              <MdtuLogo size={74} showHomeTooltip={false} />
            </div>
          </div>

          {/* DOKUMEN 1: LAPORAN ABSENSI */}
          {activeTab === 'absensi' && (
            <div className="space-y-4">
              <div className="text-center space-y-1">
                <h3 className="text-base sm:text-lg font-black uppercase tracking-wider underline">
                  LAPORAN PRESENSI &amp; KEHADIRAN HARIAN
                </h3>
                <p className="text-xs text-slate-600">
                  Tanggal: {masehiToday} / {hijriToday.formatted} • Kategori: {selectedKelas}
                </p>
              </div>

              <table className="w-full text-xs border-collapse border border-slate-800">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-800 px-2 py-1.5 w-10 text-center">No</th>
                    <th className="border border-slate-800 px-3 py-1.5 text-left">Nama</th>
                    <th className="border border-slate-800 px-2 py-1.5 text-center w-24">Kelas / Jabatan</th>
                    <th className="border border-slate-800 px-2 py-1.5 text-center w-24">Status Kehadiran</th>
                    <th className="border border-slate-800 px-3 py-1.5 text-left">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAbsensi.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="border border-slate-800 p-4 text-center text-slate-500">
                        Tidak ada catatan presensi untuk tanggal {selectedTanggal} ({selectedKelas}).
                      </td>
                    </tr>
                  ) : (
                    filteredAbsensi.map((row, i) => (
                      <tr key={row.id} className={i % 2 === 1 ? 'bg-slate-50' : ''}>
                        <td className="border border-slate-800 px-2 py-1.5 text-center font-bold">
                          {i + 1}
                        </td>
                        <td className="border border-slate-800 px-3 py-1.5 font-bold">
                          {row.nama}
                        </td>
                        <td className="border border-slate-800 px-2 py-1.5 text-center">
                          {row.kelas || row.kategori}
                        </td>
                        <td className="border border-slate-800 px-2 py-1.5 text-center font-bold">
                          {row.status}
                        </td>
                        <td className="border border-slate-800 px-3 py-1.5 text-slate-600">
                          {row.keterangan || '-'}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              {/* Ringkasan Kehadiran */}
              <div className="text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl flex flex-wrap items-center justify-between gap-3">
                <span className="font-bold">Rekapitulasi:</span>
                <span>Hadir: {filteredAbsensi.filter((r) => r.status === 'Hadir').length}</span>
                <span>Izin: {filteredAbsensi.filter((r) => r.status === 'Izin').length}</span>
                <span>Sakit: {filteredAbsensi.filter((r) => r.status === 'Sakit').length}</span>
                <span>Alpa: {filteredAbsensi.filter((r) => r.status === 'Alpa').length}</span>
                <span className="font-bold">Total: {filteredAbsensi.length} Orang</span>
              </div>
            </div>
          )}

          {/* DOKUMEN 2: REKAP SANTRI */}
          {activeTab === 'santri' && (
            <div className="space-y-4">
              <div className="text-center space-y-1">
                <h3 className="text-base sm:text-lg font-black uppercase tracking-wider underline">
                  BUKU INDUK &amp; DAFTAR SANTRI AKTIF
                </h3>
                <p className="text-xs text-slate-600">
                  Tahun Ajaran 1447-1448 H / 2026 M • Kelas: {selectedKelas}
                </p>
              </div>

              <table className="w-full text-xs border-collapse border border-slate-800">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-800 px-2 py-1.5 w-10 text-center">No</th>
                    <th className="border border-slate-800 px-2 py-1.5 text-center w-24">NIS</th>
                    <th className="border border-slate-800 px-3 py-1.5 text-left">Nama Santri</th>
                    <th className="border border-slate-800 px-2 py-1.5 text-center w-20">Kelas</th>
                    <th className="border border-slate-800 px-3 py-1.5 text-left">Nama Wali</th>
                    <th className="border border-slate-800 px-3 py-1.5 text-left">Capaian Tahfidz</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSantri.map((s, i) => (
                    <tr key={s.id} className={i % 2 === 1 ? 'bg-slate-50' : ''}>
                      <td className="border border-slate-800 px-2 py-1.5 text-center font-bold">
                        {i + 1}
                      </td>
                      <td className="border border-slate-800 px-2 py-1.5 text-center font-mono">
                        {s.nomorInduk || `-`}
                      </td>
                      <td className="border border-slate-800 px-3 py-1.5 font-bold">
                        {s.nama}
                      </td>
                      <td className="border border-slate-800 px-2 py-1.5 text-center">
                        {s.kelas}
                      </td>
                      <td className="border border-slate-800 px-3 py-1.5">
                        {s.wali || '-'}
                      </td>
                      <td className="border border-slate-800 px-3 py-1.5 text-slate-700">
                        {s.hafalanSurat}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* DOKUMEN 3: LAPORAN KEUANGAN */}
          {activeTab === 'keuangan' && (
            <div className="space-y-4">
              <div className="text-center space-y-1">
                <h3 className="text-base sm:text-lg font-black uppercase tracking-wider underline">
                  LAPORAN ARUS KAS &amp; KEUANGAN MADRASAH
                </h3>
                <p className="text-xs text-slate-600">
                  MDTU Nurul Huda Cikopo Panawa • Periode Aktif 2026
                </p>
              </div>

              {/* Ringkasan Finansial */}
              <div className="grid grid-cols-3 gap-3 text-xs text-center">
                <div className="p-2 border border-slate-800 bg-slate-50">
                  <span className="block font-bold">Total Pemasukan</span>
                  <span className="font-mono font-bold text-emerald-800">
                    Rp {totalMasuk.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="p-2 border border-slate-800 bg-slate-50">
                  <span className="block font-bold">Total Pengeluaran</span>
                  <span className="font-mono font-bold text-rose-800">
                    Rp {totalKeluar.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="p-2 border border-slate-800 bg-slate-100 font-bold">
                  <span className="block">Saldo Akhir Kas</span>
                  <span className="font-mono text-emerald-900">
                    Rp {saldoAkhir.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <table className="w-full text-xs border-collapse border border-slate-800">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-800 px-2 py-1.5 w-10 text-center">No</th>
                    <th className="border border-slate-800 px-2 py-1.5 text-center w-24">Tanggal</th>
                    <th className="border border-slate-800 px-3 py-1.5 text-left">Uraian Transaksi</th>
                    <th className="border border-slate-800 px-2 py-1.5 text-center w-20">Jenis</th>
                    <th className="border border-slate-800 px-3 py-1.5 text-right w-28">Nominal</th>
                  </tr>
                </thead>
                <tbody>
                  {transaksiList.map((tr, i) => (
                    <tr key={tr.id} className={i % 2 === 1 ? 'bg-slate-50' : ''}>
                      <td className="border border-slate-800 px-2 py-1.5 text-center font-bold">
                        {i + 1}
                      </td>
                      <td className="border border-slate-800 px-2 py-1.5 text-center">
                        {formatTanggalSingkat(tr.tanggal)}
                      </td>
                      <td className="border border-slate-800 px-3 py-1.5 font-medium">
                        {tr.judul} ({tr.kategori})
                      </td>
                      <td className="border border-slate-800 px-2 py-1.5 text-center font-bold">
                        {tr.tipe}
                      </td>
                      <td className="border border-slate-800 px-3 py-1.5 text-right font-mono font-bold">
                        Rp {tr.nominal.toLocaleString('id-ID')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* DOKUMEN 4: PRESTASI SANTRI */}
          {activeTab === 'prestasi' && (
            <div className="space-y-4">
              <div className="text-center space-y-1">
                <h3 className="text-base sm:text-lg font-black uppercase tracking-wider underline">
                  DAFTAR PRESTASI &amp; KEJUARAAN SANTRI
                </h3>
                <p className="text-xs text-slate-600">
                  MDTU Nurul Huda Cikopo Panawa
                </p>
              </div>

              <table className="w-full text-xs border-collapse border border-slate-800">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-800 px-2 py-1.5 w-10 text-center">No</th>
                    <th className="border border-slate-800 px-3 py-1.5 text-left">Nama Kejuaraan / Lomba</th>
                    <th className="border border-slate-800 px-3 py-1.5 text-left">Santri / Tim</th>
                    <th className="border border-slate-800 px-2 py-1.5 text-center w-24">Peringkat</th>
                    <th className="border border-slate-800 px-2 py-1.5 text-center w-24">Tingkat</th>
                    <th className="border border-slate-800 px-2 py-1.5 text-center w-16">Tahun</th>
                  </tr>
                </thead>
                <tbody>
                  {prestasiList.map((pr, i) => (
                    <tr key={pr.id} className={i % 2 === 1 ? 'bg-slate-50' : ''}>
                      <td className="border border-slate-800 px-2 py-1.5 text-center font-bold">
                        {i + 1}
                      </td>
                      <td className="border border-slate-800 px-3 py-1.5 font-bold">
                        {pr.judul}
                      </td>
                      <td className="border border-slate-800 px-3 py-1.5">
                        {pr.santri}
                      </td>
                      <td className="border border-slate-800 px-2 py-1.5 text-center font-bold">
                        {pr.kejuaraan}
                      </td>
                      <td className="border border-slate-800 px-2 py-1.5 text-center">
                        {pr.tingkat}
                      </td>
                      <td className="border border-slate-800 px-2 py-1.5 text-center">
                        {pr.tahun}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* DOKUMEN 5: KARTU IURAN SPP */}
          {activeTab === 'kartu-spp' && (
            <div className="space-y-4">
              <div className="text-center space-y-1">
                <h3 className="text-base sm:text-lg font-black uppercase tracking-wider underline">
                  KARTU IURAN BULANAN (SPP) SANTRI
                </h3>
                <p className="text-xs text-slate-600">
                  Tahun Ajaran 1447-1448 H / 2026 M
                </p>
              </div>

              {/* Data Santri */}
              <div className="grid grid-cols-2 gap-2 text-xs border border-slate-800 p-3 bg-slate-50">
                <div>
                  <span className="font-semibold text-slate-600">Nama Santri:</span>{' '}
                  <span className="font-bold text-slate-900">{currentKartuSantri?.nama}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-600">NIS:</span>{' '}
                  <span className="font-bold text-slate-900">
                    {currentKartuSantri?.nomorInduk || '-'}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-slate-600">Kelas:</span>{' '}
                  <span className="font-bold text-slate-900">{currentKartuSantri?.kelas}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-600">Nominal SPP:</span>{' '}
                  <span className="font-bold text-emerald-800">Rp 50.000 / Bulan</span>
                </div>
              </div>

              {/* 12 Bulan Grid */}
              <table className="w-full text-xs border-collapse border border-slate-800">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-800 px-2 py-1.5 text-center">Bulan</th>
                    <th className="border border-slate-800 px-2 py-1.5 text-center">Nominal</th>
                    <th className="border border-slate-800 px-2 py-1.5 text-center">Status</th>
                    <th className="border border-slate-800 px-2 py-1.5 text-center">Tgl Bayar</th>
                    <th className="border border-slate-800 px-2 py-1.5 text-center">Paraf Petugas</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
                    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                  ].map((bulan, idx) => {
                    const isLunas = idx <= 3 || santriStatusBayar?.bayarSppBulanIni;
                    return (
                      <tr key={bulan} className={idx % 2 === 1 ? 'bg-slate-50' : ''}>
                        <td className="border border-slate-800 px-2 py-1 text-center font-bold">
                          {bulan}
                        </td>
                        <td className="border border-slate-800 px-2 py-1 text-center font-mono">
                          Rp 50.000
                        </td>
                        <td className="border border-slate-800 px-2 py-1 text-center font-bold">
                          {isLunas ? 'LUNAS' : 'BELUM'}
                        </td>
                        <td className="border border-slate-800 px-2 py-1 text-center text-[10px]">
                          {isLunas ? `10 ${bulan} 2026` : '-'}
                        </td>
                        <td className="border border-slate-800 px-2 py-1 text-center">
                          {isLunas ? '✓ (Stempel)' : '-'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* TANDA TANGAN & PENGESAHAN DOKUMEN RESMI */}
          <div className="pt-8 grid grid-cols-2 gap-8 text-xs text-center border-t border-slate-200">
            <div>
              <p className="text-slate-600">Mengetahui,</p>
              <p className="font-bold text-slate-900 mt-0.5">Kepala MDTU Nurul Huda</p>
              <div className="h-16 flex items-center justify-center">
                <span className="text-[10px] text-slate-400 italic font-mono">
                  (Tanda Tangan &amp; Stempel Resmi)
                </span>
              </div>
              <p className="font-bold underline text-slate-900">
                Ust. Ahmad Syarifudin, S.Pd.I
              </p>
              <p className="text-[10px] text-slate-600">NIPD. 19820514.201201.1.001</p>
            </div>
            <div>
              <p className="text-slate-600">
                Pamulihan, {masehiToday}
              </p>
              <p className="font-bold text-slate-900 mt-0.5">
                Tata Usaha / Bendahara Madrasah
              </p>
              <div className="h-16 flex items-center justify-center">
                <span className="text-[10px] text-slate-400 italic font-mono">
                  (Tanda Tangan)
                </span>
              </div>
              <p className="font-bold underline text-slate-900">
                Ustzh. Nur Aisyah
              </p>
              <p className="text-[10px] text-slate-600">Pengelola Administrasi Terpadu</p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar - Hidden on print */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between print:hidden">
          <span className="text-xs text-slate-500">
            Tips: Gunakan menu &quot;Simpan sebagai PDF&quot; di opsi tujuan cetak browser.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-all cursor-pointer"
            >
              Tutup
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2 text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Cetak / Simpan PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
