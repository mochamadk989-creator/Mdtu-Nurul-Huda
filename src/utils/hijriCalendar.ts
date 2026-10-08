// Hijri & Gregorian Calendar Utilities for MDTU Nurul Huda

export const NAMA_BULAN_HIJRIYAH = [
  'Muharram',
  'Shafar',
  'Rabi\'ul Awwal',
  'Rabi\'ul Akhir',
  'Jumadil Ula',
  'Jumadil Akhir',
  'Rajab',
  'Sya\'ban',
  'Ramadhan',
  'Syawwal',
  'Dzulqa\'dah',
  'Dzulhijjah',
];

export const NAMA_HARI_INDONESIA = [
  'Ahad',
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  'Jum\'at',
  'Sabtu',
];

export const NAMA_BULAN_MASEHI = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

export interface HijriDateInfo {
  day: number;
  month: number; // 1-12
  monthName: string;
  year: number;
  formatted: string;
  dayName: string;
}

// Kuwaiti / Ummul Qura algorithm approximation for Hijri conversion
export function getHijriDate(date: Date = new Date(), adjustmentDays: number = 0): HijriDateInfo {
  const d = new Date(date);
  if (adjustmentDays !== 0) {
    d.setDate(d.getDate() + adjustmentDays);
  }

  // Native browser Intl support if available
  try {
    const formatter = new Intl.DateTimeFormat('id-TN-u-ca-islamic-umalqura', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    const parts = formatter.formatToParts(d);
    let hDay = 1;
    let hMonth = 1;
    let hYear = 1447;

    for (const part of parts) {
      if (part.type === 'day') hDay = parseInt(part.value, 10);
      if (part.type === 'month') hMonth = parseInt(part.value, 10);
      if (part.type === 'year') hYear = parseInt(part.value, 10);
    }

    if (hMonth >= 1 && hMonth <= 12 && !isNaN(hDay) && !isNaN(hYear)) {
      const monthName = NAMA_BULAN_HIJRIYAH[hMonth - 1] || 'Bulan Hijriyah';
      const dayName = NAMA_HARI_INDONESIA[d.getDay()];
      return {
        day: hDay,
        month: hMonth,
        monthName,
        year: hYear,
        formatted: `${hDay} ${monthName} ${hYear} H`,
        dayName,
      };
    }
  } catch {
    // Fallback algorithmic conversion
  }

  // Algorithmic fallback
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();

  let m = month + 1;
  let y = year;
  if (m < 3) {
    y -= 1;
    m += 12;
  }

  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5;

  const z = jd - 1948439.5 + 10632;
  const n = Math.floor((z - 1) / 10631);
  const z1 = z - 10631 * n + 354;
  const j = (Math.floor((10985 - z1) / 5316)) * (Math.floor((50 * z1) / 17719)) + (Math.floor(z1 / 5670)) * (Math.floor((43 * z1) / 15238));
  const z2 = z1 - (Math.floor((30 - j) / 15)) * (Math.floor((17719 * j) / 50)) - (Math.floor(j / 16)) * (Math.floor((15238 * j) / 43)) + 29;
  const hMonth = Math.floor((24 * z2) / 709);
  const hDay = Math.floor(z2 - Math.floor((709 * hMonth) / 24));
  const hYear = 30 * n + j - 30;

  const validMonth = Math.max(1, Math.min(12, hMonth));
  const monthName = NAMA_BULAN_HIJRIYAH[validMonth - 1] || 'Bulan Hijriyah';
  const dayName = NAMA_HARI_INDONESIA[d.getDay()];

  return {
    day: Math.max(1, Math.min(30, hDay)),
    month: validMonth,
    monthName,
    year: hYear,
    formatted: `${Math.max(1, Math.min(30, hDay))} ${monthName} ${hYear} H`,
    dayName,
  };
}

export function formatTanggalMasehi(date: Date = new Date()): string {
  const hari = NAMA_HARI_INDONESIA[date.getDay()];
  const tgl = date.getDate();
  const bln = NAMA_BULAN_MASEHI[date.getMonth()];
  const thn = date.getFullYear();
  return `${hari}, ${tgl} ${bln} ${thn}`;
}

export function formatTanggalSingkat(dateStr: string): string {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  if (!y || !m || !d) return dateStr;
  const bln = NAMA_BULAN_MASEHI[parseInt(m, 10) - 1] || m;
  return `${parseInt(d, 10)} ${bln} ${y}`;
}
