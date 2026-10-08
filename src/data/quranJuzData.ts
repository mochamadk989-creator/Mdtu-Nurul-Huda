export interface JuzInfo {
  juz: number;
  nama: string;
  suratMulai: string;
  ayatMulai: number;
  suratSelesai: string;
  ayatSelesai: number;
  halamanMulai: number;
  halamanSelesai: number;
  suratMulaiNomor: number;
}

export const DATA_30_JUZ: JuzInfo[] = [
  { juz: 1, nama: 'Juz 1', suratMulai: 'Al-Fatihah', ayatMulai: 1, suratSelesai: 'Al-Baqarah', ayatSelesai: 141, halamanMulai: 1, halamanSelesai: 21, suratMulaiNomor: 1 },
  { juz: 2, nama: 'Juz 2', suratMulai: 'Al-Baqarah', ayatMulai: 142, suratSelesai: 'Al-Baqarah', ayatSelesai: 252, halamanMulai: 22, halamanSelesai: 41, suratMulaiNomor: 2 },
  { juz: 3, nama: 'Juz 3', suratMulai: 'Al-Baqarah', ayatMulai: 253, suratSelesai: 'Ali \'Imran', ayatSelesai: 92, halamanMulai: 42, halamanSelesai: 61, suratMulaiNomor: 2 },
  { juz: 4, nama: 'Juz 4', suratMulai: 'Ali \'Imran', ayatMulai: 93, suratSelesai: 'An-Nisa\'', ayatSelesai: 23, halamanMulai: 62, halamanSelesai: 81, suratMulaiNomor: 3 },
  { juz: 5, nama: 'Juz 5', suratMulai: 'An-Nisa\'', ayatMulai: 24, suratSelesai: 'An-Nisa\'', ayatSelesai: 147, halamanMulai: 82, halamanSelesai: 101, suratMulaiNomor: 4 },
  { juz: 6, nama: 'Juz 6', suratMulai: 'An-Nisa\'', ayatMulai: 148, suratSelesai: 'Al-Ma\'idah', ayatSelesai: 81, halamanMulai: 102, halamanSelesai: 121, suratMulaiNomor: 4 },
  { juz: 7, nama: 'Juz 7', suratMulai: 'Al-Ma\'idah', ayatMulai: 82, suratSelesai: 'Al-An\'am', ayatSelesai: 110, halamanMulai: 122, halamanSelesai: 141, suratMulaiNomor: 5 },
  { juz: 8, nama: 'Juz 8', suratMulai: 'Al-An\'am', ayatMulai: 111, suratSelesai: 'Al-A\'raf', ayatSelesai: 87, halamanMulai: 142, halamanSelesai: 161, suratMulaiNomor: 6 },
  { juz: 9, nama: 'Juz 9', suratMulai: 'Al-A\'raf', ayatMulai: 88, suratSelesai: 'Al-Anfal', ayatSelesai: 40, halamanMulai: 162, halamanSelesai: 181, suratMulaiNomor: 7 },
  { juz: 10, nama: 'Juz 10', suratMulai: 'Al-Anfal', ayatMulai: 41, suratSelesai: 'At-Taubah', ayatSelesai: 92, halamanMulai: 182, halamanSelesai: 201, suratMulaiNomor: 8 },
  { juz: 11, nama: 'Juz 11', suratMulai: 'At-Taubah', ayatMulai: 93, suratSelesai: 'Hud', ayatSelesai: 5, halamanMulai: 202, halamanSelesai: 221, suratMulaiNomor: 9 },
  { juz: 12, nama: 'Juz 12', suratMulai: 'Hud', ayatMulai: 6, suratSelesai: 'Yusuf', ayatSelesai: 52, halamanMulai: 222, halamanSelesai: 241, suratMulaiNomor: 11 },
  { juz: 13, nama: 'Juz 13', suratMulai: 'Yusuf', ayatMulai: 53, suratSelesai: 'Ibrahim', ayatSelesai: 52, halamanMulai: 242, halamanSelesai: 261, suratMulaiNomor: 12 },
  { juz: 14, nama: 'Juz 14', suratMulai: 'Al-Hijr', ayatMulai: 1, suratSelesai: 'An-Nahl', ayatSelesai: 128, halamanMulai: 262, halamanSelesai: 281, suratMulaiNomor: 15 },
  { juz: 15, nama: 'Juz 15', suratMulai: 'Al-Isra\'', ayatMulai: 1, suratSelesai: 'Al-Kahf', ayatSelesai: 74, halamanMulai: 282, halamanSelesai: 301, suratMulaiNomor: 17 },
  { juz: 16, nama: 'Juz 16', suratMulai: 'Al-Kahf', ayatMulai: 75, suratSelesai: 'Taha', ayatSelesai: 135, halamanMulai: 302, halamanSelesai: 321, suratMulaiNomor: 18 },
  { juz: 17, nama: 'Juz 17', suratMulai: 'Al-Anbiya\'', ayatMulai: 1, suratSelesai: 'Al-Hajj', ayatSelesai: 78, halamanMulai: 322, halamanSelesai: 341, suratMulaiNomor: 21 },
  { juz: 18, nama: 'Juz 18', suratMulai: 'Al-Mu\'minun', ayatMulai: 1, suratSelesai: 'Al-Furqan', ayatSelesai: 20, halamanMulai: 342, halamanSelesai: 361, suratMulaiNomor: 23 },
  { juz: 19, nama: 'Juz 19', suratMulai: 'Al-Furqan', ayatMulai: 21, suratSelesai: 'An-Naml', ayatSelesai: 55, halamanMulai: 362, halamanSelesai: 381, suratMulaiNomor: 25 },
  { juz: 20, nama: 'Juz 20', suratMulai: 'An-Naml', ayatMulai: 56, suratSelesai: 'Al-\'Ankabut', ayatSelesai: 45, halamanMulai: 382, halamanSelesai: 401, suratMulaiNomor: 27 },
  { juz: 21, nama: 'Juz 21', suratMulai: 'Al-\'Ankabut', ayatMulai: 46, suratSelesai: 'Luqman', ayatSelesai: 34, halamanMulai: 402, halamanSelesai: 421, suratMulaiNomor: 29 },
  { juz: 22, nama: 'Juz 22', suratMulai: 'Al-Ahzab', ayatMulai: 31, suratSelesai: 'Yasin', ayatSelesai: 27, halamanMulai: 422, halamanSelesai: 441, suratMulaiNomor: 33 },
  { juz: 23, nama: 'Juz 23', suratMulai: 'Yasin', ayatMulai: 28, suratSelesai: 'Az-Zumar', ayatSelesai: 31, halamanMulai: 442, halamanSelesai: 461, suratMulaiNomor: 36 },
  { juz: 24, nama: 'Juz 24', suratMulai: 'Az-Zumar', ayatMulai: 32, suratSelesai: 'Fussilat', ayatSelesai: 46, halamanMulai: 462, halamanSelesai: 481, suratMulaiNomor: 39 },
  { juz: 25, nama: 'Juz 25', suratMulai: 'Fussilat', ayatMulai: 47, suratSelesai: 'Al-Jasiyah', ayatSelesai: 37, halamanMulai: 482, halamanSelesai: 501, suratMulaiNomor: 41 },
  { juz: 26, nama: 'Juz 26', suratMulai: 'Al-Ahqaf', ayatMulai: 1, suratSelesai: 'Az-Zariyat', ayatSelesai: 30, halamanMulai: 502, halamanSelesai: 521, suratMulaiNomor: 46 },
  { juz: 27, nama: 'Juz 27', suratMulai: 'Az-Zariyat', ayatMulai: 31, suratSelesai: 'Al-Hadid', ayatSelesai: 29, halamanMulai: 522, halamanSelesai: 541, suratMulaiNomor: 51 },
  { juz: 28, nama: 'Juz 28', suratMulai: 'Al-Mujadilah', ayatMulai: 1, suratSelesai: 'At-Tahrim', ayatSelesai: 12, halamanMulai: 542, halamanSelesai: 561, suratMulaiNomor: 58 },
  { juz: 29, nama: 'Juz 29', suratMulai: 'Al-Mulk', ayatMulai: 1, suratSelesai: 'Al-Mursalat', ayatSelesai: 50, halamanMulai: 562, halamanSelesai: 581, suratMulaiNomor: 67 },
  { juz: 30, nama: 'Juz 30 (Juz \'Amma)', suratMulai: 'An-Naba\'', ayatMulai: 1, suratSelesai: 'An-Nas', ayatSelesai: 6, halamanMulai: 582, halamanSelesai: 604, suratMulaiNomor: 78 },
];
