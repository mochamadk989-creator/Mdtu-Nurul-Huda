import { InfoKiblat } from '../types/mdtu';
import { DEFAULT_LAT, DEFAULT_LNG } from './prayerCalculator';

// Kaaba, Masjidil Haram coordinates
export const KAABA_LAT = 21.422487;
export const KAABA_LNG = 39.826206;

export function calculateQibla(
  userLat = DEFAULT_LAT,
  userLng = DEFAULT_LNG,
  locationLabel = 'Cikopo Panawa, Garut'
): InfoKiblat {
  const lat1 = (userLat * Math.PI) / 180.0;
  const lat2 = (KAABA_LAT * Math.PI) / 180.0;
  const deltaLng = ((KAABA_LNG - userLng) * Math.PI) / 180.0;

  const y = Math.sin(deltaLng);
  const x = Math.cos(lat1) * Math.tan(lat2) - Math.sin(lat1) * Math.cos(deltaLng);

  let qiblaDegrees = (Math.atan2(y, x) * 180.0) / Math.PI;
  if (qiblaDegrees < 0) {
    qiblaDegrees += 360.0;
  }

  // Great-circle distance
  const earthRadiusKm = 6371.0;
  const dLat = lat2 - lat1;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceKm = earthRadiusKm * c;

  return {
    derajatKiblat: qiblaDegrees,
    jarakKm: distanceKm,
    namaLokasi: locationLabel,
    latitude: userLat,
    longitude: userLng,
  };
}

export function getDirectionLabel(degrees: number): string {
  if (degrees >= 337.5 || degrees < 22.5) return 'Utara';
  if (degrees >= 22.5 && degrees < 67.5) return 'Timur Laut';
  if (degrees >= 67.5 && degrees < 112.5) return 'Timur';
  if (degrees >= 112.5 && degrees < 157.5) return 'Tenggara';
  if (degrees >= 157.5 && degrees < 202.5) return 'Selatan';
  if (degrees >= 202.5 && degrees < 247.5) return 'Barat Daya';
  if (degrees >= 247.5 && degrees < 292.5) return 'Barat';
  return 'Barat Laut (Arah Kiblat Indonesia)';
}
