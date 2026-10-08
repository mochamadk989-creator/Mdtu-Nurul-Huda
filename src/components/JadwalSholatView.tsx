import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Navigation, Sunrise, Sun, Sunset, Moon, MoonStar, CheckCircle2 } from 'lucide-react';
import { calculatePrayerTimes, DEFAULT_LAT, DEFAULT_LNG, DEFAULT_LOCATION_NAME } from '../utils/prayerCalculator';
import { WaktuSholat } from '../types/mdtu';

interface JadwalSholatViewProps {
  currentLat: number;
  currentLng: number;
  locationLabel: string;
  onUpdateGPS: (lat: number, lng: number, label: string) => void;
}

export const JadwalSholatView: React.FC<JadwalSholatViewProps> = ({
  currentLat,
  currentLng,
  locationLabel,
  onUpdateGPS,
}) => {
  const [prayerTimes, setPrayerTimes] = useState<WaktuSholat[]>([]);
  const [gpsStatusMessage, setGpsStatusMessage] = useState<string | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState('');

  // Clock ticker & recalculate prayer times
  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setCurrentTimeStr(
        now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' WIB'
      );
      setPrayerTimes(calculatePrayerTimes(currentLat, currentLng, now));
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, [currentLat, currentLng]);

  const nextPrayer = prayerTimes.find((p) => p.isNext) || prayerTimes[0];

  const handleSyncGPS = () => {
    if (!navigator.geolocation) {
      setGpsStatusMessage('Perangkat tidak mendukung GPS langsung. Menggunakan koordinat Cikopo Panawa Garut.');
      return;
    }
    setIsLocating(true);
    setGpsStatusMessage('Mengakses GPS perangkat...');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        onUpdateGPS(lat, lng, `GPS Aktif (${lat.toFixed(4)}, ${lng.toFixed(4)})`);
        setGpsStatusMessage('Lokasi GPS perangkat berhasil disinkronkan!');
        setIsLocating(false);
      },
      () => {
        onUpdateGPS(DEFAULT_LAT, DEFAULT_LNG, DEFAULT_LOCATION_NAME);
        setGpsStatusMessage('Izin GPS belum diberikan. Menggunakan koordinat resmi MDTU Cikopo Panawa Garut.');
        setIsLocating(false);
      },
      { timeout: 8000 }
    );
  };

  const getPrayerIcon = (nama: string) => {
    switch (nama) {
      case 'Subuh':
        return <Sunrise className="w-5 h-5 text-amber-500" />;
      case 'Terbit':
      case 'Dhuha':
      case 'Dzuhur':
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Ashar':
        return <Sunset className="w-5 h-5 text-amber-500" />;
      case 'Maghrib':
        return <Moon className="w-5 h-5 text-indigo-400" />;
      default:
        return <MoonStar className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* 1. Hero Next Prayer Card */}
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white rounded-2xl p-5 border border-emerald-700/60 shadow-xl relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-600/20 blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          {/* Header Location & GPS */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-semibold text-emerald-100">{locationLabel}</span>
            </div>
            <button
              onClick={handleSyncGPS}
              disabled={isLocating}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 text-xs font-bold transition-all shadow-md flex items-center gap-1.5 self-start sm:self-auto disabled:opacity-50 cursor-pointer"
            >
              <Navigation className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin' : ''}`} />
              <span>{isLocating ? 'Mencari GPS...' : 'Sinkronkan GPS HP'}</span>
            </button>
          </div>

          {gpsStatusMessage && (
            <div className="text-[11px] text-amber-300 font-medium bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-700/60">
              {gpsStatusMessage}
            </div>
          )}

          {/* Next prayer highlight */}
          {nextPrayer && (
            <div className="flex items-end justify-between pt-2">
              <div>
                <span className="text-xs text-emerald-300 uppercase tracking-widest font-bold">
                  Sholat Mendatang:
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-0.5">
                  {nextPrayer.nama}
                </div>
                <div className="text-xs text-emerald-200 mt-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Waktu saat ini: {currentTimeStr}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight">
                  {nextPrayer.jam}
                </div>
                <div className="text-xs text-emerald-300 font-bold uppercase tracking-wider">
                  WIB
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. Prayer Times List */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">Jadwal Sholat Fardhu &amp; Sunnah Hari Ini</h3>
          <span className="text-xs text-slate-500">Standar Hisab Kemenag RI (Garut)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2.5">
          {prayerTimes.map((sholat) => (
            <div
              key={sholat.nama}
              className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                sholat.isNext
                  ? 'bg-emerald-50 border-emerald-600 shadow-sm ring-1 ring-emerald-600/30'
                  : 'bg-slate-50/70 border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold ${sholat.isNext ? 'text-emerald-950 font-black' : 'text-slate-700'}`}>
                  {sholat.nama}
                </span>
                {getPrayerIcon(sholat.nama)}
              </div>
              <div>
                <div className={`text-lg font-black tracking-tight ${sholat.isNext ? 'text-emerald-700' : 'text-slate-900'}`}>
                  {sholat.jam}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">WIB</div>
              </div>
              {sholat.isNext && (
                <div className="mt-2 text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Mendatang</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
