import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  MapPin,
  Moon,
  ShieldCheck,
  X,
  Check,
} from 'lucide-react';
import { AgendaKalender } from '../types/mdtu';
import {
  NAMA_BULAN_MASEHI,
  getHijriDate,
  formatTanggalMasehi,
  formatTanggalSingkat,
} from '../utils/hijriCalendar';

interface KalenderHijriyahViewProps {
  agendaList: AgendaKalender[];
  isAdmin?: boolean;
  onAddAgenda: (agenda: Omit<AgendaKalender, 'id'>) => void;
  onDeleteAgenda: (id: string) => void;
  onPromptLoginAdmin?: () => void;
}

export const KalenderHijriyahView: React.FC<KalenderHijriyahViewProps> = ({
  agendaList,
  isAdmin = false,
  onAddAgenda,
  onDeleteAgenda,
  onPromptLoginAdmin,
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [filterKategori, setFilterKategori] = useState<string>('Semua');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New agenda form state
  const [formJudul, setFormJudul] = useState('');
  const [formTanggal, setFormTanggal] = useState(new Date().toISOString().split('T')[0]);
  const [formKategori, setFormKategori] = useState<AgendaKalender['kategori']>('Kegiatan MDTU');
  const [formDeskripsi, setFormDeskripsi] = useState('');
  const [formWaktu, setFormWaktu] = useState('13.30 WIB');
  const [formLokasi, setFormLokasi] = useState('MDTU Nurul Huda');

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-11

  // First day of current month and total days
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 for Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Selected date info
  const selectedHijri = getHijriDate(selectedDay);
  const selectedMasehi = formatTanggalMasehi(selectedDay);
  const selectedDateStr = selectedDay.toISOString().split('T')[0];

  // Navigation handlers
  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDay(today);
  };

  // Check events for a specific date (YYYY-MM-DD)
  const getAgendasForDate = (dateStr: string) => {
    return agendaList.filter((ag) => ag.tanggal === dateStr);
  };

  // Handle add agenda submit
  const handleSaveAgenda = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formJudul.trim()) return;

    const hijriInfo = getHijriDate(new Date(formTanggal));
    onAddAgenda({
      judul: formJudul,
      tanggal: formTanggal,
      tanggalHijriyah: hijriInfo.formatted,
      kategori: formKategori,
      deskripsi: formDeskripsi || 'Agenda resmi MDTU Nurul Huda.',
      waktu: formWaktu,
      lokasi: formLokasi,
      isPenting: formKategori === 'Hari Besar Islam' || formKategori === 'Ujian / Imtihan',
    });

    setIsAddModalOpen(false);
    setFormJudul('');
    setFormDeskripsi('');
  };

  // Filtered agenda list for current month or search
  const currentMonthAgendas = agendaList.filter((ag) => {
    const agDate = new Date(ag.tanggal);
    const matchesMonth = agDate.getMonth() === month && agDate.getFullYear() === year;
    const matchesCategory = filterKategori === 'Semua' || ag.kategori === filterKategori;
    return matchesMonth && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-800 to-teal-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden border border-emerald-700/50">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-52 h-52 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold mb-2">
              <Moon className="w-3.5 h-3.5 text-amber-300" />
              Penanggalan Hijriyah &amp; Masehi
            </div>
            <h2 className="text-2xl lg:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              Kalender Islam &amp; Agenda MDTU
            </h2>
            <p className="text-emerald-100/80 text-sm mt-1">
              Jadwal kegiatan madrasah, peringatan hari besar Islam (PHBI), puasa sunnah, dan imtihan santri.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleToday}
              className="px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all active:scale-95 cursor-pointer"
            >
              Kembali ke Hari Ini
            </button>

            {isAdmin ? (
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-emerald-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Tambah Agenda
              </button>
            ) : (
              <button
                onClick={onPromptLoginAdmin}
                className="px-4 py-2.5 rounded-2xl bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 text-xs font-semibold flex items-center gap-1.5 border border-emerald-600/40 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                Login Admin untuk Tambah Agenda
              </button>
            )}
          </div>
        </div>

        {/* Current Selected Date Highlight */}
        <div className="mt-6 p-4 rounded-2xl bg-emerald-900/70 border border-emerald-600/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
          <div>
            <span className="text-emerald-300 text-xs uppercase tracking-wider font-semibold">
              Tanggal Terpilih:
            </span>
            <div className="text-lg font-black text-white flex items-center gap-2 mt-0.5">
              <span>{selectedMasehi}</span>
              <span className="text-amber-300 font-bold">• {selectedHijri.formatted}</span>
            </div>
          </div>

          {/* Sunnah Reminder for Day */}
          <div className="text-xs text-emerald-200/90 bg-emerald-950/60 px-3.5 py-2 rounded-xl border border-emerald-700/50">
            {selectedDay.getDay() === 1 ? (
              <span className="text-amber-300 font-semibold">☀️ Sunnah Hari Senin: Puasa Sunnah Senin</span>
            ) : selectedDay.getDay() === 4 ? (
              <span className="text-amber-300 font-semibold">☀️ Sunnah Hari Kamis: Puasa Sunnah Kamis</span>
            ) : selectedDay.getDay() === 5 ? (
              <span className="text-emerald-300 font-semibold">🕌 Sayyidul Ayyam: Sholat Jum&apos;at, Surat Al-Kahfi &amp; Sholawat</span>
            ) : (
              <span>✨ Amalan Harian: Dzikir Pagi-Petang &amp; Tilawah Qur&apos;an</span>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid: Calendar on Left, Agenda on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Calendar Grid (7 cols on lg) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
          {/* Month & Year Navigation Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-slate-900">
                {NAMA_BULAN_MASEHI[month]} {year}
              </h3>
              <p className="text-xs font-semibold text-emerald-700">
                {getHijriDate(new Date(year, month, 15)).monthName}{' '}
                {getHijriDate(new Date(year, month, 15)).year} H
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200">
              <button
                onClick={handlePrevMonth}
                className="p-2 rounded-xl hover:bg-white text-slate-700 transition-colors cursor-pointer"
                title="Bulan Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextMonth}
                className="p-2 rounded-xl hover:bg-white text-slate-700 transition-colors cursor-pointer"
                title="Bulan Berikutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-1 text-center font-bold text-xs text-slate-500 py-2 border-b border-slate-100">
            {['Ahd', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((d, i) => (
              <div
                key={d}
                className={i === 5 ? 'text-emerald-600 font-extrabold' : i === 0 ? 'text-rose-500' : ''}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Calendar Cells */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {/* Blank leading cells */}
            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`blank-${i}`} className="min-h-[64px] sm:min-h-[74px] p-1.5 rounded-2xl bg-slate-50/50" />
            ))}

            {/* Days of month */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const cellDate = new Date(year, month, dayNum);
              const cellDateStr = cellDate.toISOString().split('T')[0];
              const cellHijri = getHijriDate(cellDate);
              const isToday =
                new Date().toISOString().split('T')[0] === cellDateStr;
              const isSelected = selectedDateStr === cellDateStr;
              const events = getAgendasForDate(cellDateStr);
              const isFriday = cellDate.getDay() === 5;
              const isSunday = cellDate.getDay() === 0;

              return (
                <button
                  key={`day-${dayNum}`}
                  onClick={() => setSelectedDay(cellDate)}
                  className={`min-h-[64px] sm:min-h-[74px] p-1.5 rounded-2xl border text-left flex flex-col justify-between transition-all group relative cursor-pointer ${
                    isSelected
                      ? 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500/30 shadow-md'
                      : isToday
                      ? 'border-amber-400 bg-amber-50/60'
                      : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {/* Gregorian Day */}
                    <span
                      className={`text-sm sm:text-base font-black ${
                        isSelected
                          ? 'text-emerald-800'
                          : isToday
                          ? 'text-amber-800'
                          : isSunday
                          ? 'text-rose-600'
                          : isFriday
                          ? 'text-emerald-700'
                          : 'text-slate-800'
                      }`}
                    >
                      {dayNum}
                    </span>
                    {/* Hijri Day badge */}
                    <span
                      className={`text-[10px] font-bold px-1 rounded ${
                        isSelected
                          ? 'bg-emerald-700 text-white'
                          : 'text-emerald-700 bg-emerald-50 group-hover:bg-emerald-100'
                      }`}
                    >
                      {cellHijri.day}
                    </span>
                  </div>

                  {/* Events / Dot Badges */}
                  <div className="flex items-center gap-1 mt-1 flex-wrap">
                    {events.slice(0, 2).map((ev) => (
                      <span
                        key={ev.id}
                        className={`w-2 h-2 rounded-full ${
                          ev.kategori === 'Hari Besar Islam'
                            ? 'bg-amber-500'
                            : ev.kategori === 'Ujian / Imtihan'
                            ? 'bg-purple-500'
                            : ev.kategori === 'Puasa Sunnah'
                            ? 'bg-blue-500'
                            : 'bg-emerald-600'
                        }`}
                        title={ev.judul}
                      />
                    ))}
                    {events.length > 2 && (
                      <span className="text-[9px] font-bold text-slate-400">
                        +{events.length - 2}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-4 text-[11px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span>Hari Besar Islam</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span>Kegiatan MDTU</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <span>Ujian / Imtihan</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>Puasa Sunnah</span>
            </div>
          </div>
        </div>

        {/* Right Column: Events on Selected Date & Monthly Agenda (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Selected Date Agenda Details */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-emerald-700" />
                <h4 className="font-bold text-slate-800 text-sm">
                  Agenda Tanggal Ini
                </h4>
              </div>
              <span className="text-xs text-slate-500">
                {formatTanggalSingkat(selectedDateStr)}
              </span>
            </div>

            {getAgendasForDate(selectedDateStr).length === 0 ? (
              <div className="py-6 text-center text-slate-400 space-y-2">
                <p className="text-xs">Tidak ada agenda khusus pada tanggal ini.</p>
                {isAdmin && (
                  <button
                    onClick={() => {
                      setFormTanggal(selectedDateStr);
                      setIsAddModalOpen(true);
                    }}
                    className="text-xs text-emerald-700 hover:text-emerald-800 font-bold underline cursor-pointer"
                  >
                    + Buat agenda untuk tanggal ini
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {getAgendasForDate(selectedDateStr).map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 hover:border-emerald-200 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase ${
                          item.kategori === 'Hari Besar Islam'
                            ? 'bg-amber-100 text-amber-800'
                            : item.kategori === 'Ujian / Imtihan'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {item.kategori}
                      </span>
                      {isAdmin && (
                        <button
                          onClick={() => onDeleteAgenda(item.id)}
                          className="text-slate-400 hover:text-rose-600 transition-colors text-xs cursor-pointer"
                          title="Hapus Agenda"
                        >
                          Hapus
                        </button>
                      )}
                    </div>

                    <h5 className="font-bold text-slate-900 text-sm">{item.judul}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.deskripsi}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] text-slate-500 border-t border-slate-200/60">
                      {item.waktu && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {item.waktu}
                        </span>
                      )}
                      {item.lokasi && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {item.lokasi}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Agenda Bulan Ini List */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="font-bold text-slate-800 text-sm">
                Agenda {NAMA_BULAN_MASEHI[month]} {year}
              </h4>
              {/* Filter */}
              <select
                value={filterKategori}
                onChange={(e) => setFilterKategori(e.target.value)}
                className="text-xs bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1 text-slate-700 outline-none"
              >
                <option value="Semua">Semua Kategori</option>
                <option value="Hari Besar Islam">Hari Besar Islam</option>
                <option value="Kegiatan MDTU">Kegiatan MDTU</option>
                <option value="Ujian / Imtihan">Ujian / Imtihan</option>
                <option value="Puasa Sunnah">Puasa Sunnah</option>
              </select>
            </div>

            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {currentMonthAgendas.length === 0 ? (
                <div className="p-6 text-center text-slate-400 text-xs">
                  Tidak ada agenda bulan ini dengan filter &quot;{filterKategori}&quot;.
                </div>
              ) : (
                currentMonthAgendas.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedDay(new Date(item.tanggal))}
                    className="p-3 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div className="space-y-0.5">
                      <div className="text-[11px] text-emerald-700 font-bold">
                        {formatTanggalSingkat(item.tanggal)} • {item.tanggalHijriyah || ''}
                      </div>
                      <div className="font-bold text-slate-900 text-xs">
                        {item.judul}
                      </div>
                    </div>
                    <span
                      className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase shrink-0 ${
                        item.kategori === 'Hari Besar Islam'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {item.kategori}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Tambah Agenda (Admin Only) */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-emerald-700" />
                <h3 className="font-bold text-slate-900 text-base">
                  Tambah Agenda Madrasah
                </h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveAgenda} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Agenda / Kegiatan *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Imtihan Semester Ganjil"
                  value={formJudul}
                  onChange={(e) => setFormJudul(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tanggal *
                  </label>
                  <input
                    type="date"
                    required
                    value={formTanggal}
                    onChange={(e) => setFormTanggal(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kategori *
                  </label>
                  <select
                    value={formKategori}
                    onChange={(e) =>
                      setFormKategori(e.target.value as AgendaKalender['kategori'])
                    }
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Kegiatan MDTU">Kegiatan MDTU</option>
                    <option value="Hari Besar Islam">Hari Besar Islam</option>
                    <option value="Ujian / Imtihan">Ujian / Imtihan</option>
                    <option value="Puasa Sunnah">Puasa Sunnah</option>
                    <option value="Libur">Libur Madrasah</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Waktu / Jam
                  </label>
                  <input
                    type="text"
                    placeholder="13.30 - 15.00 WIB"
                    value={formWaktu}
                    onChange={(e) => setFormWaktu(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Lokasi
                  </label>
                  <input
                    type="text"
                    placeholder="Aula MDTU Nurul Huda"
                    value={formLokasi}
                    onChange={(e) => setFormLokasi(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Keterangan / Deskripsi
                </label>
                <textarea
                  rows={2}
                  placeholder="Keterangan acara..."
                  value={formDeskripsi}
                  onChange={(e) => setFormDeskripsi(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  Simpan Agenda
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
