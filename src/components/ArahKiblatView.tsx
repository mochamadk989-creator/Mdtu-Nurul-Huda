import React, { useState, useEffect } from 'react';
import { Compass, MapPin, Navigation, CheckCircle, Info } from 'lucide-react';
import { calculateQibla, getDirectionLabel } from '../utils/qiblaCalculator';

interface ArahKiblatViewProps {
  currentLat: number;
  currentLng: number;
  locationLabel: string;
  onUpdateGPS: (lat: number, lng: number, label: string) => void;
}

export const ArahKiblatView: React.FC<ArahKiblatViewProps> = ({
  currentLat,
  currentLng,
  locationLabel,
  onUpdateGPS,
}) => {
  const qiblaInfo = calculateQibla(currentLat, currentLng, locationLabel);
  const [deviceHeading, setDeviceHeading] = useState<number>(0);
  const [hasCompassSensor, setHasCompassSensor] = useState<boolean>(false);
  const [gpsMessage, setGpsMessage] = useState<string | null>(null);

  // Device orientation compass sensor listener (for mobile phones/tablets)
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      // In iOS webkitCompassHeading, on Android e.alpha
      let heading = 0;
      if ('webkitCompassHeading' in e && typeof (e as any).webkitCompassHeading === 'number') {
        heading = (e as any).webkitCompassHeading;
        setHasCompassSensor(true);
      } else if (e.alpha !== null) {
        heading = 360 - e.alpha;
        setHasCompassSensor(true);
      }
      setDeviceHeading(heading);
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, true);
    }

    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleOrientation, true);
      }
    };
  }, []);

  // Relative angle of Kaaba from top of device
  const relativeAngle = (qiblaInfo.derajatKiblat - deviceHeading + 360) % 360;
  const isFacingKaaba = hasCompassSensor && (relativeAngle <= 5 || relativeAngle >= 355);

  const handleSyncGPS = () => {
    if (!navigator.geolocation) {
      setGpsMessage('GPS tidak tersedia pada peramban ini.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        onUpdateGPS(pos.coords.latitude, pos.coords.longitude, `GPS Aktif (${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)})`);
        setGpsMessage('Koordinat GPS berhasil diperbarui!');
      },
      () => {
        setGpsMessage('Menggunakan koordinat resmi MDTU Cikopo Panawa Garut.');
      }
    );
  };

  return (
    <div className="space-y-4">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white rounded-2xl p-5 border border-emerald-700/60 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{locationLabel}</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                {Math.round(qiblaInfo.derajatKiblat)}°
              </span>
              <span className="text-sm font-bold text-white uppercase">
                {getDirectionLabel(qiblaInfo.derajatKiblat)}
              </span>
            </div>
            <p className="text-xs text-emerald-200/90 mt-1">
              Jarak lurus ke Ka&apos;bah (Masjidil Haram): {Math.round(qiblaInfo.jarakKm).toLocaleString('id-ID')} km
            </p>
          </div>
          <button
            onClick={handleSyncGPS}
            className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 text-xs font-bold transition-all shadow-md flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Update Koordinat GPS</span>
          </button>
        </div>
        {gpsMessage && (
          <div className="mt-3 text-[11px] text-amber-300 bg-emerald-950/60 p-2 rounded-lg border border-emerald-700/60">
            {gpsMessage}
          </div>
        )}
      </div>

      {/* 2. Visual Compass Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center space-y-5">
        {/* Alignment alert badge */}
        <div className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border transition-all ${
          isFacingKaaba
            ? 'bg-emerald-100 text-emerald-800 border-emerald-300 shadow-sm'
            : 'bg-slate-100 text-slate-700 border-slate-200'
        }`}>
          {isFacingKaaba ? (
            <>
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Tepat Menghadap Ka&apos;bah!</span>
            </>
          ) : (
            <>
              <Compass className="w-4 h-4 text-amber-600" />
              <span>Arahkan jarum emas ke atas mengikuti sudut {Math.round(qiblaInfo.derajatKiblat)}°</span>
            </>
          )}
        </div>

        {/* The Circular Compass Graphic */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 border-emerald-800/80 bg-gradient-to-b from-slate-50 to-slate-100 shadow-xl flex items-center justify-center p-4">
          {/* Degree Ring markings */}
          <div className="absolute inset-2 rounded-full border border-dashed border-slate-300 pointer-events-none" />

          {/* Cardinal Directions */}
          <span className="absolute top-3 font-black text-xs text-rose-600">U (0°)</span>
          <span className="absolute bottom-3 font-bold text-xs text-slate-400">S (180°)</span>
          <span className="absolute right-3 font-bold text-xs text-slate-400">T (90°)</span>
          <span className="absolute left-3 font-bold text-xs text-slate-400">B (270°)</span>

          {/* Rotated Needle */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out"
            style={{
              transform: `rotate(${hasCompassSensor ? relativeAngle : qiblaInfo.derajatKiblat}deg)`,
            }}
          >
            {/* Kaaba Golden Needle Pointer */}
            <div className="w-1.5 h-28 bg-gradient-to-t from-emerald-600 via-amber-400 to-amber-500 rounded-full shadow-lg relative -top-7">
              {/* Arrow Head */}
              <div className="w-0 h-0 border-x-8 border-x-transparent border-b-[18px] border-b-amber-500 absolute -top-4 -left-1.5" />
            </div>
            {/* Opposite Needle Tail */}
            <div className="w-1 h-20 bg-slate-300 rounded-full absolute bottom-8" />
          </div>

          {/* Center Kaaba Cube Badge */}
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-emerald-950 border-2 border-amber-400 text-amber-300 flex flex-col items-center justify-center shadow-lg">
            <span className="text-xl font-bold leading-none">🕋</span>
            <span className="text-[9px] font-black tracking-widest text-white mt-1 uppercase">KIBLAT</span>
          </div>
        </div>

        {/* Guidance Notes */}
        <div className="max-w-md text-xs text-slate-500 space-y-1.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
          <div className="font-bold text-slate-800 flex items-center justify-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-emerald-600" />
            <span>Petunjuk Arah Sholat:</span>
          </div>
          <p className="leading-relaxed">
            Untuk wilayah Garut &amp; Jawa Barat, arah kiblat berada pada azimuth <strong>295°</strong> dari arah Utara (condong ke arah Barat Laut sekitar 25° dari Barat).
            Pegang ponsel secara mendatar dan jauhkan dari benda berbahan logam magnetis.
          </p>
        </div>
      </div>
    </div>
  );
};
