import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Sparkles,
  Clock,
  Navigation,
  CheckCircle2,
  Sunrise,
  Sun,
  Sunset,
  Moon,
  MoonStar,
  RefreshCw,
} from 'lucide-react';
import { calculatePrayerTimes, DEFAULT_LAT, DEFAULT_LNG, DEFAULT_LOCATION_NAME } from '../utils/prayerCalculator';
import { getHijriDate, formatTanggalMasehi } from '../utils/hijriCalendar';

interface GreetingCardProps {
  currentLat?: number;
  currentLng?: number;
  locationLabel?: string;
  onUpdateGPS?: (lat: number, lng: number, label: string) => void;
  onOpenSholat?: () => void;
}

export const GreetingCard: React.FC<GreetingCardProps> = ({
  currentLat = DEFAULT_LAT,
  currentLng = DEFAULT_LNG,
  locationLabel = DEFAULT_LOCATION_NAME,
  onUpdateGPS,
  onOpenSholat,
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isLocating, setIsLocating] = useState(false);
  const [gpsNotification, setGpsNotification] = useState<string | null>(null);

  // Update clock every second from HP / device time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format real-time clock from device
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');

  // Detect timezone abbreviation
  const tzOffset = -currentDate.getTimezoneOffset() / 60;
  let tzLabel = 'WIB';
  if (tzOffset === 8) tzLabel = 'WITA';
  else if (tzOffset === 9) tzLabel = 'WIT';
  else if (tzOffset !== 7) tzLabel = `GMT${tzOffset >= 0 ? '+' : ''}${tzOffset}`;

  // Real-time Gregorian & Hijri date
  const masehiStr = formatTanggalMasehi(currentDate);
  const hijriInfo = getHijriDate(currentDate);

  // Calculate live prayer times based on current date & GPS coords
  const prayerTimes = calculatePrayerTimes(currentLat, currentLng, currentDate);
  const nextPrayer = prayerTimes.find((p) => p.isNext) || prayerTimes[0];

  // Calculate time remaining until next prayer
  const getRemainingTime = () => {
    if (!nextPrayer) return '';
    const [pHours, pMinutes] = nextPrayer.jam.split(':').map(Number);
    const prayerDate = new Date(currentDate);
    prayerDate.setHours(pHours, pMinutes, 0, 0);

    // If prayer is earlier in hours, it's tomorrow (e.g. Subuh next day)
    if (prayerDate.getTime() <= currentDate.getTime()) {
      prayerDate.setDate(prayerDate.getDate() + 1);
    }

    const diffMs = prayerDate.getTime() - currentDate.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    if (diffHours === 0 && diffMins <= 5) {
      return 'Segera masuk waktu sholat!';
    }
    if (diffHours === 0) {
      return `${diffMins} menit lagi`;
    }
    return `${diffHours} jam ${diffMins} mnt lagi`;
  };

  const remainingStr = getRemainingTime();

  // Get Prayer Icon
  const getPrayerIcon = (name: string) => {
    switch (name) {
      case 'Subuh':
        return <Sunrise className="w-4 h-4 text-amber-500" />;
      case 'Terbit':
      case 'Dhuha':
      case 'Dzuhur':
        return <Sun className="w-4 h-4 text-amber-500" />;
      case 'Ashar':
        return <Sunset className="w-4 h-4 text-amber-500" />;
      case 'Maghrib':
        return <Moon className="w-4 h-4 text-indigo-400" />;
      default:
        return <MoonStar className="w-4 h-4 text-indigo-400" />;
    }
  };

  // Sync GPS with device
  const handleSyncGpsDevice = () => {
    if (!navigator.geolocation) {
      setGpsNotification('Perangkat HP/Browser ini tidak mendukung GPS.');
      setTimeout(() => setGpsNotification(null), 4000);
      return;
    }

    setIsLocating(true);
    setGpsNotification('Sedang membaca sensor GPS perangkat HP...');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const accuracy = Math.round(pos.coords.accuracy || 0);
        const label = `GPS HP Aktif (${lat.toFixed(4)}, ${lng.toFixed(4)} • ±${accuracy}m)`;

        if (onUpdateGPS) {
          onUpdateGPS(lat, lng, label);
        }

        setIsLocating(false);
        setGpsNotification('Lokasi & Waktu GPS HP berhasil disinkronkan!');
        setTimeout(() => setGpsNotification(null), 3500);
      },
      (err) => {
        setIsLocating(false);
        let msg = 'Izin akses GPS belum diaktifkan di HP.';
        if (err.code === err.PERMISSION_DENIED) {
          msg = 'Izin lokasi GPS ditolak. Silakan izinkan lokasi di pengaturan browser HP.';
        } else if (err.code === err.TIMEOUT) {
          msg = 'Pencarian sinyal GPS batas waktu habis. Menggunakan koordinat Cikopo Panawa.';
        }
        setGpsNotification(msg);
        setTimeout(() => setGpsNotification(null), 4500);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
    );
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-sm border border-slate-200/90 p-4 sm:p-5 -mt-2 relative z-10 transition-all">
      {/* Toast Notification for GPS sync */}
      {gpsNotification && (
        <div className="mb-3 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold flex items-center justify-between gap-2 animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{gpsNotification}</span>
          </div>
          <button
            onClick={() => setGpsNotification(null)}
            className="text-emerald-700 hover:text-emerald-900 font-bold"
          >
            ✕
          </button>
        </div>
      )}

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left Section: Greeting & Live HP Digital Clock */}
        <div className="flex items-start gap-3.5">
          <div className="w-1.5 h-16 bg-gradient-to-b from-amber-400 to-emerald-600 rounded-full shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Assalamu&apos;alaikum Warahmatullah
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-bold text-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Waktu HP / GPS
              </span>
            </div>

            {/* REAL-TIME DIGITAL CLOCK DISPLAY */}
            <div className="flex items-baseline gap-2 pt-0.5">
              <div className="flex items-baseline font-mono text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                <span>{hours}</span>
                <span className="text-emerald-700 animate-pulse mx-0.5">:</span>
                <span>{minutes}</span>
                <span className="text-emerald-700 animate-pulse mx-0.5">:</span>
                <span className="text-emerald-700">{seconds}</span>
              </div>
              <span className="text-xs font-black uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                {tzLabel}
              </span>
            </div>

            {/* Dual Calendar: Gregorian & Hijri */}
            <div className="flex items-center gap-2 flex-wrap text-xs text-slate-600 pt-0.5">
              <span className="font-bold text-slate-800 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                {masehiStr}
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                {hijriInfo.formatted}
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Next Prayer Countdown & Location / GPS Sync */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
          {/* Next Prayer Quick Card */}
          {nextPrayer && (
            <button
              onClick={onOpenSholat}
              className="flex-1 sm:flex-initial flex items-center gap-3 p-2.5 sm:px-3.5 sm:py-2 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:from-emerald-100/70 hover:to-teal-100/70 border border-emerald-200/80 transition-all text-left shadow-2xs group cursor-pointer"
              title="Klik untuk membuka jadwal sholat lengkap"
            >
              <div className="w-9 h-9 rounded-xl bg-white text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200/60 shadow-xs group-hover:scale-105 transition-transform">
                {getPrayerIcon(nextPrayer.nama)}
              </div>
              <div>
                <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1">
                  <span>Sholat {nextPrayer.nama}</span>
                  <span className="text-[9px] font-medium text-slate-400">({remainingStr})</span>
                </div>
                <div className="text-base font-black text-slate-900 leading-tight">
                  {nextPrayer.jam} <span className="text-[10px] font-bold text-slate-500">WIB</span>
                </div>
              </div>
            </button>
          )}

          {/* Location & GPS Sync Button */}
          <div className="flex-1 sm:flex-initial flex flex-col justify-center">
            <button
              onClick={handleSyncGpsDevice}
              disabled={isLocating}
              className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-800 text-xs font-bold transition-all shadow-2xs group cursor-pointer disabled:opacity-50 text-left"
              title="Klik untuk sinkronkan dengan sensor GPS HP saat ini"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                {isLocating ? (
                  <RefreshCw className="w-4 h-4 animate-spin text-emerald-700" />
                ) : (
                  <Navigation className="w-4 h-4 text-emerald-700 group-hover:rotate-45 transition-transform" />
                )}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{isLocating ? 'Membaca GPS...' : 'Lokasi & GPS'}</span>
                </div>
                <div className="text-xs font-bold text-slate-900 truncate max-w-[140px] sm:max-w-[180px]">
                  {locationLabel}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
