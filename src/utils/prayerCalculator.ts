import { WaktuSholat } from '../types/mdtu';

export const DEFAULT_LAT = -7.2278;
export const DEFAULT_LNG = 107.9087;
export const DEFAULT_LOCATION_NAME = 'Cikopo Panawa, Garut (WIB)';

export function calculatePrayerTimes(
  latitude = DEFAULT_LAT,
  longitude = DEFAULT_LNG,
  date = new Date()
): WaktuSholat[] {
  // Day of year
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const timeZone = 7.0; // WIB (GMT+7)

  // Solar declination
  const d = (2 * Math.PI * (dayOfYear - 1)) / 365.0;
  const decl =
    0.006918 -
    0.399912 * Math.cos(d) +
    0.070257 * Math.sin(d) -
    0.006758 * Math.cos(2 * d) +
    0.000907 * Math.sin(2 * d) -
    0.002697 * Math.cos(3 * d) +
    0.00148 * Math.sin(3 * d);

  // Equation of Time in minutes
  const eqTime =
    229.18 *
    (0.000075 +
      0.001868 * Math.cos(d) -
      0.032077 * Math.sin(d) -
      0.014615 * Math.cos(2 * d) -
      0.040849 * Math.sin(2 * d));

  // Solar Noon (Dzuhur)
  const solarNoon = 12.0 + (timeZone * 15.0 - longitude) / 15.0 - eqTime / 60.0;
  const dzuhurTime = solarNoon + 2.0 / 60.0; // 2 min ihtiyat

  const latRad = (latitude * Math.PI) / 180.0;

  function hourAngle(angle: number): number {
    const aRad = (angle * Math.PI) / 180.0;
    const cosHA = (Math.sin(aRad) - Math.sin(latRad) * Math.sin(decl)) / (Math.cos(latRad) * Math.cos(decl));
    if (cosHA > 1.0) return 0.0;
    if (cosHA < -1.0) return 180.0;
    return (Math.acos(cosHA) * 180.0) / Math.PI;
  }

  // Subuh: 20 degrees below horizon (Kemenag standard)
  const fajrHA = hourAngle(-20.0);
  const subuhTime = solarNoon - fajrHA / 15.0;

  // Terbit (Sunrise): -0.833 degrees
  const sunriseHA = hourAngle(-0.833);
  const terbitTime = solarNoon - sunriseHA / 15.0;

  // Dhuha: ~25 mins after sunrise
  const dhuhaTime = terbitTime + 25.0 / 60.0;

  // Ashar: Shafi'i shadow factor = 1
  const asrAngle =
    (Math.atan(1.0 / (1.0 + Math.tan(Math.abs(latitude - (decl * 180.0) / Math.PI) * (Math.PI / 180.0)))) *
      180.0) /
    Math.PI;
  const asrHA = hourAngle(asrAngle);
  const asharTime = solarNoon + asrHA / 15.0;

  // Maghrib: Sunset + 2 min ihtiyat
  const sunsetHA = hourAngle(-0.833);
  const maghribTime = solarNoon + sunsetHA / 15.0 + 2.0 / 60.0;

  // Isya: 18 degrees below horizon
  const ishaHA = hourAngle(-18.0);
  const isyaTime = solarNoon + ishaHA / 15.0;

  function formatHours(h: number): string {
    let totalMin = Math.round(h * 60);
    if (totalMin < 0) totalMin += 24 * 60;
    const hours = Math.floor(totalMin / 60) % 24;
    const minutes = totalMin % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  const currentMinutes = date.getHours() * 60 + date.getMinutes();
  const timesInMin = [
    Math.round(subuhTime * 60),
    Math.round(terbitTime * 60),
    Math.round(dhuhaTime * 60),
    Math.round(dzuhurTime * 60),
    Math.round(asharTime * 60),
    Math.round(maghribTime * 60),
    Math.round(isyaTime * 60),
  ];

  let nextIndex = timesInMin.findIndex((t) => t > currentMinutes);
  if (nextIndex === -1) nextIndex = 0; // After Isya, next is Subuh

  return [
    { nama: 'Subuh', jam: formatHours(subuhTime), iconName: 'Sunrise', isNext: nextIndex === 0 },
    { nama: 'Terbit', jam: formatHours(terbitTime), iconName: 'Sun', isNext: nextIndex === 1 },
    { nama: 'Dhuha', jam: formatHours(dhuhaTime), iconName: 'SunMedium', isNext: nextIndex === 2 },
    { nama: 'Dzuhur', jam: formatHours(dzuhurTime), iconName: 'Sun', isNext: nextIndex === 3 },
    { nama: 'Ashar', jam: formatHours(asharTime), iconName: 'Sunset', isNext: nextIndex === 4 },
    { nama: 'Maghrib', jam: formatHours(maghribTime), iconName: 'Moon', isNext: nextIndex === 5 },
    { nama: 'Isya', jam: formatHours(isyaTime), iconName: 'MoonStar', isNext: nextIndex === 6 },
  ];
}
