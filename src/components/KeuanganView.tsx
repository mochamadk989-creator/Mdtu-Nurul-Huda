import React, { useState } from 'react';
import { DollarSign, ArrowDownLeft, ArrowUpRight, Plus, CheckCircle, AlertCircle, Edit, Check, X } from 'lucide-react';
import { TransaksiKeuangan, StatusBayarSantri, TipeTransaksi } from '../types/mdtu';

interface KeuanganViewProps {
  totalMasuk: number;
  totalKeluar: number;
  statusBayarList: StatusBayarSantri[];
  transaksiList: TransaksiKeuangan[];
  isAdmin?: boolean;
  onToggleSpp: (id: string, lunas: boolean) => void;
  onTogglePendaftaran: (id: string, lunas: boolean) => void;
  onTambahTransaksi: (tx: Omit<TransaksiKeuangan, 'id'>) => void;
  onUpdateSaldoManual: (masuk: number, keluar: number) => void;
  onPromptLoginAdmin?: () => void;
}

export const KeuanganView: React.FC<KeuanganViewProps> = ({
  totalMasuk,
  totalKeluar,
  statusBayarList,
  transaksiList,
  isAdmin = false,
  onToggleSpp,
  onTogglePendaftaran,
  onTambahTransaksi,
  onUpdateSaldoManual,
  onPromptLoginAdmin,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'spp' | 'kas'>('spp');
  const [filterKelas, setFilterKelas] = useState('Semua');

  // Modal states
  const [isTambahTxOpen, setIsTambahTxOpen] = useState(false);
  const [isEditSaldoOpen, setIsEditSaldoOpen] = useState(false);

  // Form states
  const [formTipe, setFormTipe] = useState<TipeTransaksi>('MASUK');
  const [formKategori, setFormKategori] = useState('SPP');
  const [formJudul, setFormJudul] = useState('');
  const [formNominal, setFormNominal] = useState('50000');
  const [formTanggal, setFormTanggal] = useState('6 Oktober 2026');
  const [formKeterangan, setFormKeterangan] = useState('');

  const [formEditMasuk, setFormEditMasuk] = useState(totalMasuk.toString());
  const [formEditKeluar, setFormEditKeluar] = useState(totalKeluar.toString());

  const saldoBersih = totalMasuk - totalKeluar;
  const lunasCount = statusBayarList.filter((s) => s.bayarSppBulanIni).length;
  const belumCount = statusBayarList.length - lunasCount;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const filteredStatusBayar = statusBayarList.filter((s) => {
    return filterKelas === 'Semua' || s.kelas === filterKelas;
  });

  const handleSaveTx = (e: React.FormEvent) => {
    e.preventDefault();
    const nom = parseInt(formNominal, 10);
    if (!formJudul.trim() || isNaN(nom) || nom <= 0) return;
    onTambahTransaksi({
      tipe: formTipe,
      kategori: formKategori,
      judul: formJudul.trim(),
      nominal: nom,
      tanggal: formTanggal.trim(),
      keterangan: formKeterangan.trim(),
    });
    setIsTambahTxOpen(false);
    setFormJudul('');
  };

  const handleSaveSaldoManual = (e: React.FormEvent) => {
    e.preventDefault();
    const m = parseInt(formEditMasuk, 10);
    const k = parseInt(formEditKeluar, 10);
    if (!isNaN(m) && !isNaN(k)) {
      onUpdateSaldoManual(m, k);
      setIsEditSaldoOpen(false);
    }
  };

  const handleOpenEditSaldo = () => {
    if (!isAdmin) {
      if (onPromptLoginAdmin) onPromptLoginAdmin();
      return;
    }
    setFormEditMasuk(totalMasuk.toString());
    setFormEditKeluar(totalKeluar.toString());
    setIsEditSaldoOpen(true);
  };

  const handleOpenTambahTx = () => {
    if (!isAdmin) {
      if (onPromptLoginAdmin) onPromptLoginAdmin();
      return;
    }
    setIsTambahTxOpen(true);
  };

  const handleToggleSppSafe = (id: string, lunas: boolean) => {
    if (!isAdmin) {
      if (onPromptLoginAdmin) onPromptLoginAdmin();
      return;
    }
    onToggleSpp(id, lunas);
  };

  const handleTogglePendaftaranSafe = (id: string, lunas: boolean) => {
    if (!isAdmin) {
      if (onPromptLoginAdmin) onPromptLoginAdmin();
      return;
    }
    onTogglePendaftaran(id, lunas);
  };

  return (
    <div className="space-y-4">
      {/* 1. Saldo Kas Summary Banner */}
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white rounded-2xl p-5 border border-emerald-700/50 shadow-lg relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-amber-400" />
              <span>Total Saldo Kas MDTU Nurul Huda</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
              {formatRupiah(saldoBersih)}
            </div>
            <p className="text-xs text-emerald-200/80 mt-0.5">
              Akumulasi penerimaan infaq santri &amp; operasional madrasah
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenEditSaldo}
              className="px-3 py-1.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-amber-300 text-xs font-bold border border-emerald-600/50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Edit className="w-3.5 h-3.5" />
              <span>Edit Saldo {isAdmin ? '(Admin)' : ''}</span>
            </button>
            <button
              onClick={handleOpenTambahTx}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 text-xs font-extrabold shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Catat Transaksi {isAdmin ? '(Admin)' : ''}</span>
            </button>
          </div>
        </div>

        {/* Breakdown bar */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-emerald-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-300 flex items-center justify-center shrink-0">
              <ArrowDownLeft className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-emerald-300">Total Kas Masuk</div>
              <div className="text-sm font-bold text-white">{formatRupiah(totalMasuk)}</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-rose-200">Total Kas Keluar</div>
              <div className="text-sm font-bold text-white">{formatRupiah(totalKeluar)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtab Buttons */}
      <div className="bg-white rounded-2xl p-1.5 border border-slate-200/80 shadow-sm flex items-center gap-1.5">
        <button
          onClick={() => setActiveSubTab('spp')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'spp'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <CheckCircle className="w-4 h-4" />
          <span>Status SPP &amp; Pendaftaran Santri</span>
        </button>
        <button
          onClick={() => setActiveSubTab('kas')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeSubTab === 'kas'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>Riwayat Kas Masuk &amp; Keluar</span>
        </button>
      </div>

      {/* SUBTAB 1: STATUS SPP SANTRI */}
      {activeSubTab === 'spp' && (
        <div className="space-y-4">
          {/* Recap chips */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-emerald-50 rounded-2xl p-3.5 border border-emerald-200/70 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-200/70 text-emerald-800 flex items-center justify-center font-bold">
                <Check className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <div className="text-xs text-emerald-800 font-semibold">Sudah Bayar SPP Bulan Ini</div>
                <div className="text-xl font-black text-emerald-950">{lunasCount} Santri</div>
              </div>
            </div>
            <div className="bg-rose-50 rounded-2xl p-3.5 border border-rose-200/70 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-200/70 text-rose-800 flex items-center justify-center font-bold">
                <AlertCircle className="w-5 h-5 text-rose-700" />
              </div>
              <div>
                <div className="text-xs text-rose-800 font-semibold">Tunggakan SPP Bulan Ini</div>
                <div className="text-xl font-black text-rose-950">{belumCount} Santri</div>
              </div>
            </div>
          </div>

          {/* Filter kelas */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1">
            <div className="flex items-center gap-1.5">
              {['Semua', 'TPQ', 'Kelas A', 'Kelas B', 'Kelas C'].map((k) => (
                <button
                  key={k}
                  onClick={() => setFilterKelas(k)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    filterKelas === k
                      ? 'bg-emerald-700 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
            <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
              SPP: Rp 50.000 / bln
            </span>
          </div>

          {/* List of santri payment status */}
          <div className="space-y-2.5">
            {filteredStatusBayar.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900">{item.namaSantri}</h4>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                      {item.kelas}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 flex items-center gap-3">
                    <span>Terakhir Bayar: {item.tanggalTerakhirBayar}</span>
                    <span>•</span>
                    <span className="italic">{item.catatan}</span>
                  </div>
                </div>

                {/* Toggle buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  {/* SPP Toggle */}
                  <button
                    onClick={() => handleToggleSppSafe(item.id, !item.bayarSppBulanIni)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      item.bayarSppBulanIni
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
                        : 'bg-rose-100 text-rose-800 hover:bg-rose-200 border border-rose-300'
                    }`}
                  >
                    {item.bayarSppBulanIni ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>SPP: Lunas</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>SPP: Belum</span>
                      </>
                    )}
                  </button>

                  {/* Pendaftaran Toggle */}
                  <button
                    onClick={() => handleTogglePendaftaranSafe(item.id, !item.bayarPendaftaran)}
                    className={`px-2.5 py-1.5 rounded-xl text-[11px] font-semibold transition-all cursor-pointer ${
                      item.bayarPendaftaran
                        ? 'bg-slate-100 text-emerald-800 hover:bg-slate-200'
                        : 'bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300'
                    }`}
                  >
                    Daftar: {item.bayarPendaftaran ? 'Lunas' : 'Belum'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 2: RIWAYAT KAS */}
      {activeSubTab === 'kas' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Buku Kas Madrasah</h3>
              <p className="text-xs text-slate-500 mt-0.5">Catatan seluruh transaksi masuk &amp; keluar terverifikasi</p>
            </div>
            <button
              onClick={handleOpenTambahTx}
              className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Transaksi</span>
            </button>
          </div>

          <div className="space-y-2.5">
            {transaksiList.map((tx) => {
              const isMasuk = tx.tipe === 'MASUK';
              return (
                <div
                  key={tx.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-sm flex items-start sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isMasuk ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isMasuk ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{tx.judul}</h4>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                          {tx.kategori}
                        </span>
                        <span>•</span>
                        <span>{tx.tanggal}</span>
                      </div>
                      {tx.keterangan && (
                        <p className="text-[11px] text-slate-500 italic">{tx.keterangan}</p>
                      )}
                    </div>
                  </div>
                  <div className={`text-xs sm:text-sm font-extrabold text-right shrink-0 ${
                    isMasuk ? 'text-emerald-700' : 'text-rose-600'
                  }`}>
                    {isMasuk ? '+' : '-'} {formatRupiah(tx.nominal)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Modal Tambah Transaksi */}
      {isTambahTxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden">
            <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Plus className="w-4 h-4 text-amber-400" />
                Catat Transaksi Kas Baru
              </h3>
              <button onClick={() => setIsTambahTxOpen(false)} className="text-emerald-200 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleSaveTx} className="p-5 space-y-3.5 text-xs">
              {/* Tipe Selector */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Jenis Transaksi</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setFormTipe('MASUK');
                      setFormKategori('SPP');
                    }}
                    className={`py-2 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      formTipe === 'MASUK'
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ArrowDownLeft className="w-4 h-4" /> Kas Masuk
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormTipe('KELUAR');
                      setFormKategori('Operasional');
                    }}
                    className={`py-2 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      formTipe === 'KELUAR'
                        ? 'bg-rose-700 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" /> Kas Keluar
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Kategori</label>
                <select
                  value={formKategori}
                  onChange={(e) => setFormKategori(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                >
                  {formTipe === 'MASUK' ? (
                    <>
                      <option value="SPP">SPP Bulanan Santri</option>
                      <option value="Pendaftaran">Uang Pendaftaran Santri Baru</option>
                      <option value="Infaq">Infaq &amp; Donasi Jamaah</option>
                      <option value="Lainnya">Penerimaan Lainnya</option>
                    </>
                  ) : (
                    <>
                      <option value="Bisyr Guru">Bisyr &amp; Honorarium Asatidz</option>
                      <option value="Operasional">Operasional &amp; Kitab Santri</option>
                      <option value="Perawatan">Listrik, Air &amp; Perawatan Gedung</option>
                      <option value="Kegiatan">Acara / Peringatan Hari Besar</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Judul / Uraian</label>
                <input
                  type="text"
                  required
                  value={formJudul}
                  onChange={(e) => setFormJudul(e.target.value)}
                  placeholder="Contoh: Pembayaran SPP Ahmad Fauzi"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nominal (Rp)</label>
                  <input
                    type="number"
                    required
                    min="1000"
                    value={formNominal}
                    onChange={(e) => setFormNominal(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Tanggal</label>
                  <input
                    type="text"
                    value={formTanggal}
                    onChange={(e) => setFormTanggal(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Keterangan Tambahan</label>
                <input
                  type="text"
                  value={formKeterangan}
                  onChange={(e) => setFormKeterangan(e.target.value)}
                  placeholder="Opsional (loket kasir, kwitansi no...)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsTambahTxOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold cursor-pointer"
                >
                  Simpan Transaksi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Edit Saldo Manual */}
      {isEditSaldoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-sm w-full overflow-hidden">
            <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm">Sesuaikan Saldo Kas Manual</h3>
              <button onClick={() => setIsEditSaldoOpen(false)} className="text-emerald-200 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleSaveSaldoManual} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Total Kas Masuk (Rp)</label>
                <input
                  type="number"
                  value={formEditMasuk}
                  onChange={(e) => setFormEditMasuk(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Total Kas Keluar (Rp)</label>
                <input
                  type="number"
                  value={formEditKeluar}
                  onChange={(e) => setFormEditKeluar(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsEditSaldoOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold cursor-pointer"
                >
                  Perbarui Saldo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
