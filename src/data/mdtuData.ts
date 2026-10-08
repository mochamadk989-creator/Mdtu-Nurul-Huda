import {
  Santri,
  Guru,
  TahfidzLevel,
  KelasData,
  JadwalPelajaran,
  Ekstrakurikuler,
  DoaHarian,
  Surah,
  TransaksiKeuangan,
  StatusBayarSantri,
  PengaturanSuaraAdzan,
  QariMurottal,
  Pengumuman,
  Prestasi,
  AbsensiRecord,
  AgendaKalender,
} from '../types/mdtu';

export const INITIAL_SANTRI: Santri[] = [
  // TPQ
  { id: 'S1', nama: 'Ahmad Fauzi', kelas: 'TPQ', hafalanSurat: 'Surat Al-Fatihah & An-Naas', kehadiran: 'Hadir', nomorInduk: 'TPQ-001', wali: 'Bpk. Hendra Fauzi' },
  { id: 'S2', nama: 'Aisyah Putri Humaira', kelas: 'TPQ', hafalanSurat: 'Surat Al-Falaq & Al-Ikhlas', kehadiran: 'Hadir', nomorInduk: 'TPQ-002', wali: 'Bpk. Bambang Sutrisno' },
  { id: 'S3', nama: 'Bilqis Salsabila', kelas: 'TPQ', hafalanSurat: 'Surat Al-Lahab & An-Nashr', kehadiran: 'Hadir', nomorInduk: 'TPQ-003', wali: 'Bpk. Gunawan Wibowo' },
  { id: 'S4', nama: 'Fakhri Aliando', kelas: 'TPQ', hafalanSurat: 'Surat Al-Kautsar & Al-Ma\'un', kehadiran: 'Sakit', nomorInduk: 'TPQ-004', wali: 'Ibu Maryam' },

  // Kelas A
  { id: 'S5', nama: 'Chairul Anam', kelas: 'Kelas A', hafalanSurat: 'Juz 30 (Ad-Duha s.d An-Naas)', kehadiran: 'Hadir', nomorInduk: 'KLA-001', wali: 'Bpk. H. Anam' },
  { id: 'S6', nama: 'Dinda Rahmah', kelas: 'Kelas A', hafalanSurat: 'Juz 30 (Al-A\'la s.d An-Naas)', kehadiran: 'Hadir', nomorInduk: 'KLA-002', wali: 'Bpk. Ahmad Suwandi' },
  { id: 'S7', nama: 'Ehsan Al-Ghifari', kelas: 'Kelas A', hafalanSurat: 'Juz 30 (Al-Fajr s.d An-Naas)', kehadiran: 'Izin', nomorInduk: 'KLA-003', wali: 'Bpk. Ridwan Hakim' },
  { id: 'S8', nama: 'Fatimah Az-Zahra', kelas: 'Kelas A', hafalanSurat: 'Juz 30 Lengkap (An-Naba\' s.d An-Naas)', kehadiran: 'Hadir', nomorInduk: 'KLA-004', wali: 'Bpk. Farhan Az-Zahra' },

  // Kelas B
  { id: 'S9', nama: 'Ghani Ramadhan', kelas: 'Kelas B', hafalanSurat: 'Juz 29 (Al-Mulk s.d Al-Mursalat)', kehadiran: 'Hadir', nomorInduk: 'KLB-001', wali: 'Bpk. Ramadhan' },
  { id: 'S10', nama: 'Hafidzah Nailah', kelas: 'Kelas B', hafalanSurat: 'Juz 29 (Al-Qalam & Al-Haqqah)', kehadiran: 'Sakit', nomorInduk: 'KLB-002', wali: 'Ibu Halimah' },
  { id: 'S11', nama: 'Ilyas Muhammad', kelas: 'Kelas B', hafalanSurat: 'Juz 29 (Al-Insan & Al-Qiyamah)', kehadiran: 'Hadir', nomorInduk: 'KLB-003', wali: 'Bpk. Muhammad Syarif' },
  { id: 'S12', nama: 'Jasmine Aulia', kelas: 'Kelas B', hafalanSurat: 'Juz 29 (Al-Muzzammil s.d Al-Mursalat)', kehadiran: 'Hadir', nomorInduk: 'KLB-004', wali: 'Bpk. Denny Aulia' },

  // Kelas C
  { id: 'S13', nama: 'Khalid Basalamah', kelas: 'Kelas C', hafalanSurat: 'Juz 28 (Al-Mujadilah s.d At-Tahrim)', kehadiran: 'Hadir', nomorInduk: 'KLC-001', wali: 'Bpk. Salim Basalamah' },
  { id: 'S14', nama: 'Luthfi Hakim', kelas: 'Kelas C', hafalanSurat: 'Juz 28 & Juz 27 (Ar-Rahman)', kehadiran: 'Hadir', nomorInduk: 'KLC-002', wali: 'Bpk. Hakim Santoso' },
  { id: 'S15', nama: 'Muhammad Nabil', kelas: 'Kelas C', hafalanSurat: 'Juz 28 & Juz 27 (Al-Waqi\'ah)', kehadiran: 'Hadir', nomorInduk: 'KLC-003', wali: 'Bpk. Zulkifli Nabil' },
  { id: 'S16', nama: 'Nadia Syafiqah', kelas: 'Kelas C', hafalanSurat: 'Juz 27 & Al-Baqarah 1-100', kehadiran: 'Hadir', nomorInduk: 'KLC-004', wali: 'Ibu Ratih Syafiqah' },
];

export const INITIAL_GURU: Guru[] = [
  { id: 'G1', nama: 'Ust. Ahmad Syarifudin, S.Pd.I', jabatan: 'Kepala MDTU / Pengampu Fiqih Ibadah', mataPelajaran: 'Fiqih Ibadah & Praktik Sholat', kontak: '0812-3456-7890' },
  { id: 'G2', nama: 'Ust. M. Ridwan', jabatan: 'Pengampu Tahfidz & Tajwid', mataPelajaran: 'Tahfidz Al-Qur\'an Juz 30 & Tajwid', kontak: '0821-2345-6789' },
  { id: 'G3', nama: 'Ustzh. Siti Halimah', jabatan: 'Wali Kelas Ula 1 & Pengampu Akhlak', mataPelajaran: 'Aqidah Akhlak & Adab Santri', kontak: '0857-3456-7890' },
  { id: 'G4', nama: 'Ust. Dedi Supriadi', jabatan: 'Pengampu Bahasa Arab & Imla\'', mataPelajaran: 'Bahasa Arab & Mufrodat Diniyah', kontak: '0813-4567-8901' },
  { id: 'G5', nama: 'Ustzh. Nur Aisyah', jabatan: 'Tata Usaha & Administrasi Keuangan', mataPelajaran: 'Administrasi & SPP', kontak: '0878-5678-9012' },
  { id: 'G6', nama: 'Ust. Salman Al-Farisi', jabatan: 'Pembina Halaqah Subuh & Hadroh', mataPelajaran: 'Seni Hadroh & Murottal', kontak: '0896-6789-0123' },
  { id: 'G7', nama: 'Ustzh. Rina Maryani', jabatan: 'Pengampu Tarikh Islam & Sirah', mataPelajaran: 'Sejarah Kebudayaan Islam', kontak: '0815-7890-1234' },
  { id: 'G8', nama: 'Ust. Wildan Gunawan', jabatan: 'Pengampu Khath & Kaligrafi', mataPelajaran: 'Seni Kaligrafi Islam', kontak: '0822-8901-2345' },
];

export const INITIAL_TAHFIDZ_LEVELS: TahfidzLevel[] = Array.from({ length: 18 }, (_, i) => {
  const levelNum = i + 1;
  let juz = 'Juz 30';
  let target = 'Surat Pendek Juz \'Amma';

  if (levelNum <= 4) {
    juz = 'Juz 30 (Dasar)';
    target = 'An-Naas s.d Ad-Duha';
  } else if (levelNum <= 8) {
    juz = 'Juz 30 (Lanjutan)';
    target = 'Al-Lail s.d An-Naba\'';
  } else if (levelNum <= 12) {
    juz = 'Juz 29';
    target = 'Al-Mulk s.d Al-Mursalat';
  } else if (levelNum <= 16) {
    juz = 'Juz 28';
    target = 'Al-Mujadilah s.d At-Tahrim';
  } else {
    juz = 'Juz 1 & 2';
    target = 'Al-Baqarah 1-141';
  }

  return {
    id: `T${levelNum}`,
    levelName: `Level ${levelNum}`,
    keterangan: juz,
    suratTarget: target,
  };
});

export const INITIAL_KELAS: KelasData[] = [
  { id: 'K0', namaKelas: 'TPQ', tingkat: 'Tingkat Pra-Diniyah (Usia 5-7 Thn)', waliKelas: 'Ustzh. Nur Aisyah', jumlahSantri: 24, ruangan: 'Ruang Raudhah Al-Qur\'an' },
  { id: 'K1', namaKelas: 'Kelas A', tingkat: 'Tingkat Dasar A (Ula Awal)', waliKelas: 'Ustzh. Siti Halimah', jumlahSantri: 28, ruangan: 'Ruang Abu Bakar As-Siddiq' },
  { id: 'K2', namaKelas: 'Kelas B', tingkat: 'Tingkat Menengah B (Ula Wustha)', waliKelas: 'Ust. M. Ridwan', jumlahSantri: 30, ruangan: 'Ruang Umar bin Khattab' },
  { id: 'K3', namaKelas: 'Kelas C', tingkat: 'Tingkat Lanjutan C (Ula Ulya)', waliKelas: 'Ust. Dedi Supriadi', jumlahSantri: 26, ruangan: 'Ruang Utsman bin Affan' },
];

export const INITIAL_JADWAL: JadwalPelajaran[] = [
  { id: 'J1', hari: 'Senin', jamMulai: '13.30', jamSelesai: '15.00', mataPelajaran: 'Tahfidz Juz 30 & Tajwid', kelas: 'Semua Kelas', guruPengampu: 'Ust. M. Ridwan' },
  { id: 'J2', hari: 'Senin', jamMulai: '13.30', jamSelesai: '15.00', mataPelajaran: 'Fiqih Ibadah & Praktik Sholat', kelas: 'Kelas Ula 1 & 2', guruPengampu: 'Ust. Ahmad Syarifudin' },
  { id: 'J3', hari: 'Selasa', jamMulai: '13.30', jamSelesai: '15.00', mataPelajaran: 'Aqidah Akhlak & Adab Santri', kelas: 'Semua Kelas', guruPengampu: 'Ustzh. Siti Halimah' },
  { id: 'J4', hari: 'Selasa', jamMulai: '13.30', jamSelesai: '15.00', mataPelajaran: 'Bahasa Arab Dasar & Mufrodat', kelas: 'Kelas Ula 2 & 3', guruPengampu: 'Ust. Dedi Supriadi' },
  { id: 'J5', hari: 'Rabu', jamMulai: '13.30', jamSelesai: '15.00', mataPelajaran: 'Tarikh Islam & Kisah Nabi', kelas: 'Semua Kelas', guruPengampu: 'Ustzh. Rina Maryani' },
  { id: 'J6', hari: 'Kamis', jamMulai: '13.30', jamSelesai: '15.00', mataPelajaran: 'Imla\' & Pegon Nusantara', kelas: 'Kelas Ula 1 & 2', guruPengampu: 'Ust. Wildan Gunawan' },
  { id: 'J7', hari: 'Jumat', jamMulai: '13.30', jamSelesai: '15.00', mataPelajaran: 'Praktik Khitobah & Doa Harian', kelas: 'Semua Kelas', guruPengampu: 'Ustzh. Siti Halimah' },
];

export const INITIAL_EKSKUL: Ekstrakurikuler[] = [
  { id: 'E1', nama: 'Seni Hadroh & Marawis', pembina: 'Ust. Salman Al-Farisi', jadwal: 'Ahad, 08.00 - 10.00 WIB', lokasi: 'Aula MDTU Nurul Huda', deskripsi: 'Pelatihan tabuhan rebana, qasidah sholawat, dan vokal Islami santri.' },
  { id: 'E2', nama: 'Kaligrafi Islam (Khath)', pembina: 'Ust. Wildan Gunawan', jadwal: 'Kamis, 16.00 - 17.15 WIB', lokasi: 'Ruang Utsman bin Affan', deskripsi: 'Seni tulis indah aksara Arab dengan kaidah Naskhi dan Tsuluts.' },
  { id: 'E3', nama: 'Khitobah (Pidato 3 Bahasa)', pembina: 'Ustzh. Siti Halimah', jadwal: 'Jumat, 15.30 - 17.00 WIB', lokasi: 'Mimbar Utama Madrasah', deskripsi: 'Pembentukan mental dakwah santri melalui pidato bahasa Indonesia, Sunda, dan Arab.' },
];

export const INITIAL_DOA: DoaHarian[] = [
  {
    id: 'D1',
    judul: 'Doa Sebelum Belajar',
    lafadzArab: 'رَضِيْتُ بِاللهِ رَبًّا، وَبِالإِسْلَامِ دِيْنًا، وَبِمُحَمَّدٍ نَبِيًّا وَرَسُوْلاً. رَبِّ زِدْنِي عِلْمًا وَارْزُقْنِي فَهْمًا',
    latin: 'Radhitu billahi rabba, wa bil-islami dina, wa bi Muhammadin nabiyya wa rasula. Rabbi zidni \'ilman warzuqni fahma.',
    arti: 'Aku ridha Allah Tuhanku, Islam agamaku, dan Nabi Muhammad Nabiku. Ya Allah, tambahkanlah ilmuku dan karuniakanlah kepadaku pemahaman yang mendalam.',
    kategori: 'Belajar',
  },
  {
    id: 'D2',
    judul: 'Doa Kemudahan Menghafal Al-Qur\'an',
    lafadzArab: 'اللَّهُمَّ ارْزُقْنَا حِفْظَ كِتَابِكَ الْكَرِيْمِ وَتِلَاوَتَهُ آنَاءَ اللَّيْلِ وَأَطْرَافَ النَّهَارِ',
    latin: 'Allahummarzuqna hifza kitabikal-karim wa tilawatahu ana-al-layli wa athrafan-nahar.',
    arti: 'Ya Allah, karuniakanlah kepada kami kemudahan menjaga dan menghafal Kitab-Mu yang mulia, serta membacanya di keheningan malam dan penghujung siang.',
    kategori: 'Tahfidz',
  },
  {
    id: 'D3',
    judul: 'Doa untuk Kedua Orang Tua',
    lafadzArab: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    latin: 'Rabbighfir li wa liwalidayya warhamhuma kama rabbayani saghira.',
    arti: 'Wahai Tuhanku, ampunilah dosaku dan dosa kedua orang tuaku, dan kasihanilah mereka berdua sebagaimana mereka mendidikku di waktu kecil.',
    kategori: 'Adab & Keluarga',
  },
  {
    id: 'D4',
    judul: 'Doa Kebaikan Dunia & Akhirat (Sapu Jagad)',
    lafadzArab: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    latin: 'Rabbana atina fid-dunya hasanah, wa fil-akhirati hasanah, wa qina \'adzaban-nar.',
    arti: 'Ya Tuhan kami, berikanlah kepada kami kebaikan di dunia dan kebaikan di akhirat, serta lindungilah kami dari siksa api neraka.',
    kategori: 'Harian',
  },
  {
    id: 'D5',
    judul: 'Doa Kaffaratul Majelis (Penutup Belajar)',
    lafadzArab: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ',
    latin: 'Subhanakallahumma wa bihamdika, asyhadu an la ilaha illa anta, astaghfiruka wa atubu ilayk.',
    arti: 'Mahasuci Engkau ya Allah dan dengan memuji-Mu, aku bersaksi bahwa tidak ada sesembahan yang berhak disembah selain Engkau, aku memohon ampunan-Mu dan bertobat kepada-Mu.',
    kategori: 'Belajar',
  },
  {
    id: 'D6',
    judul: 'Doa Masuk Masjid',
    lafadzArab: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    latin: 'Allahummaf-tah li abwaba rahmatik.',
    arti: 'Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.',
    kategori: 'Sholat & Masjid',
  },
];

export const INITIAL_TRANSAKSI: TransaksiKeuangan[] = [
  { id: 'TR1', tipe: 'MASUK', kategori: 'SPP', judul: 'Penerimaan SPP Bulan Oktober (42 Santri)', nominal: 2100000, tanggal: '6 Oktober 2026', keterangan: 'Pembayaran loket kasir madrasah' },
  { id: 'TR2', tipe: 'MASUK', kategori: 'Pendaftaran', judul: 'Uang Pendaftaran Santri Baru Gelombang 2', nominal: 1500000, tanggal: '4 Oktober 2026', keterangan: '3 santri baru masuk' },
  { id: 'TR3', tipe: 'MASUK', kategori: 'Infaq', judul: 'Infaq Kotak Jum\'at Berkah Jamaah Diniyah', nominal: 750000, tanggal: '3 Oktober 2026', keterangan: 'Infaq ta\'mir madrasah' },
  { id: 'TR4', tipe: 'KELUAR', kategori: 'Bisyr Guru', judul: 'Honorarium Pengajar Tahfidz & Diniyah (8 Asatidz)', nominal: 2800000, tanggal: '1 Oktober 2026', keterangan: 'Bisyr bulanan dewan asatidz' },
  { id: 'TR5', tipe: 'KELUAR', kategori: 'Operasional', judul: 'Pembelian Kitab Jurumiyah & Juz \'Amma', nominal: 650000, tanggal: '28 September 2026', keterangan: 'Buku pegangan belajar santri' },
  { id: 'TR6', tipe: 'KELUAR', kategori: 'Operasional', judul: 'Tagihan Listrik, Air & Kebersihan Madrasah', nominal: 350000, tanggal: '25 September 2026', keterangan: 'Operasional bulanan' },
];

export const INITIAL_STATUS_BAYAR: StatusBayarSantri[] = INITIAL_SANTRI.map((s, idx) => ({
  id: `B_${idx + 1}`,
  santriId: s.id,
  namaSantri: s.nama,
  kelas: s.kelas,
  bayarPendaftaran: idx !== 4 && idx !== 7,
  bayarSppBulanIni: idx % 2 === 0,
  nominalSpp: 50000,
  tanggalTerakhirBayar: idx % 2 === 0 ? '5 Oktober 2026' : '-',
  catatan: idx % 2 === 0 ? 'Lunas SPP Oktober' : 'Tunggakan SPP 1 Bulan',
}));

export const INITIAL_PENGUMUMAN: Pengumuman = {
  id: 'P1',
  judul: 'BESOK NGAJI SUBUH (Tahfidz Juz 30)',
  subjudul: 'Halaqah Tahfidz & Muraja\'ah Ba\'da Subuh',
  waktu: 'Setelah Sholat Subuh - 05.30 WIB',
  lokasi: 'Masjid MDTU Nurul Huda Cikopo Panawa',
  tanggal: 'Senin, 6 Oktober 2026',
  deskripsi: 'Kegiatan rutin halaqah tahfidz ba\'da Subuh untuk seluruh santri tingkat Ula. Diharapkan santri membawa mushaf masing-masing dan hadir tepat waktu.',
  kategori: 'Halaqah',
};

export const INITIAL_ADZAN: PengaturanSuaraAdzan[] = [
  { id: 'A1', namaWaktu: 'Subuh', aktif: true, namaSuara: 'Adzan Subuh Makkah (Merdu)', audioUrl: 'https://audio.qurancdn.com/adzan_subuh.mp3' },
  { id: 'A2', namaWaktu: 'Dzuhur', aktif: true, namaSuara: 'Adzan Madinah Al-Munawwarah', audioUrl: 'https://audio.qurancdn.com/adzan_madinah.mp3' },
  { id: 'A3', namaWaktu: 'Ashar', aktif: true, namaSuara: 'Adzan Makkah Al-Mukarramah', audioUrl: 'https://audio.qurancdn.com/adzan_makkah.mp3' },
  { id: 'A4', namaWaktu: 'Maghrib', aktif: true, namaSuara: 'Adzan Al-Aqsha Palestina', audioUrl: 'https://audio.qurancdn.com/adzan_aqsha.mp3' },
  { id: 'A5', namaWaktu: 'Isya', aktif: true, namaSuara: 'Adzan Diniyah Nusantara', audioUrl: 'https://audio.qurancdn.com/adzan_isya.mp3' },
];

export const INITIAL_QARI: QariMurottal[] = [
  { id: 'Q1', namaQari: 'Syaikh Misyari Rasyid Al-Afasy', riwayat: 'Imam Besar Masjid Kuwait, Murattal Mujawwad', audioUrl: 'https://server8.mp3quran.net/afs/', isAktif: true },
  { id: 'Q2', namaQari: 'Syaikh Abdurrahman As-Sudais', riwayat: 'Imam Masjidil Haram Makkah', audioUrl: 'https://server11.mp3quran.net/sds/', isAktif: false },
  { id: 'Q3', namaQari: 'Syaikh Sa\'ad Al-Ghamidi', riwayat: 'Qari Internasional Arab Saudi', audioUrl: 'https://server7.mp3quran.net/ghamdi/', isAktif: false },
  { id: 'Q4', namaQari: 'Santri & Asatidz MDTU Nurul Huda', riwayat: 'Rekaman Halaqah Diniyah Cikopo Panawa Garut', audioUrl: 'local://mdtu_nurul_huda', isAktif: false },
];

// Surat Al-Qur'an (114 Surat Lengkap)
export const ALL_SURAHS: Surah[] = [
  { nomor: 1, namaLatin: 'Al-Fatihah', namaArab: 'الفَاتِحَة', arti: 'Pembukaan', jumlahAyat: 7, tempatTurun: 'Mekkah', ayatSampel: [
    { nomorAyat: 1, teksArab: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', teksLatin: 'Bismillahir-rahmanir-rahim', terjemahan: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.' },
    { nomorAyat: 2, teksArab: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', teksLatin: 'Al-hamdu lillahi rabbil-\'alamin', terjemahan: 'Segala puji bagi Allah, Tuhan seluruh alam.' },
    { nomorAyat: 3, teksArab: 'الرَّحْمَٰنِ الرَّحِيمِ', teksLatin: 'Ar-rahmanir-rahim', terjemahan: 'Yang Maha Pengasih, Maha Penyayang.' },
    { nomorAyat: 4, teksArab: 'مَالِكِ يَوْمِ الدِّينِ', teksLatin: 'Maliki yawmid-din', terjemahan: 'Pemilik hari pembalasan.' },
    { nomorAyat: 5, teksArab: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', teksLatin: 'Iyyaka na\'budu wa iyyaka nasta\'in', terjemahan: 'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan.' },
    { nomorAyat: 6, teksArab: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', teksLatin: 'Ihdinas-siratal-mustaqim', terjemahan: 'Tunjukilah kami jalan yang lurus,' },
    { nomorAyat: 7, teksArab: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', teksLatin: 'Siratallazina an\'amta \'alayhim ghayril-maghdubi \'alayhim wa lad-dallin', terjemahan: '(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.' }
  ]},
  { nomor: 2, namaLatin: 'Al-Baqarah', namaArab: 'البَقَرَة', arti: 'Sapi Betina', jumlahAyat: 286, tempatTurun: 'Madinah' },
  { nomor: 3, namaLatin: 'Ali \'Imran', namaArab: 'آل عِمْرَان', arti: 'Keluarga Imran', jumlahAyat: 200, tempatTurun: 'Madinah' },
  { nomor: 4, namaLatin: 'An-Nisa\'', namaArab: 'النِّسَاء', arti: 'Wanita', jumlahAyat: 176, tempatTurun: 'Madinah' },
  { nomor: 5, namaLatin: 'Al-Ma\'idah', namaArab: 'المَائِدَة', arti: 'Jamuan Hidangan', jumlahAyat: 120, tempatTurun: 'Madinah' },
  { nomor: 6, namaLatin: 'Al-An\'am', namaArab: 'الأَنْعَام', arti: 'Binatang Ternak', jumlahAyat: 165, tempatTurun: 'Mekkah' },
  { nomor: 7, namaLatin: 'Al-A\'raf', namaArab: 'الأَعْرَاف', arti: 'Tempat Tertinggi', jumlahAyat: 206, tempatTurun: 'Mekkah' },
  { nomor: 8, namaLatin: 'Al-Anfal', namaArab: 'الأَنْفَال', arti: 'Rampasan Perang', jumlahAyat: 75, tempatTurun: 'Madinah' },
  { nomor: 9, namaLatin: 'At-Taubah', namaArab: 'التَّوْبَة', arti: 'Pengampunan', jumlahAyat: 129, tempatTurun: 'Madinah' },
  { nomor: 10, namaLatin: 'Yunus', namaArab: 'يُونُس', arti: 'Nabi Yunus', jumlahAyat: 109, tempatTurun: 'Mekkah' },
  { nomor: 11, namaLatin: 'Hud', namaArab: 'هُود', arti: 'Nabi Hud', jumlahAyat: 123, tempatTurun: 'Mekkah' },
  { nomor: 12, namaLatin: 'Yusuf', namaArab: 'يُوسُف', arti: 'Nabi Yusuf', jumlahAyat: 111, tempatTurun: 'Mekkah' },
  { nomor: 13, namaLatin: 'Ar-Ra\'d', namaArab: 'الرَّعْد', arti: 'Guruh', jumlahAyat: 43, tempatTurun: 'Madinah' },
  { nomor: 14, namaLatin: 'Ibrahim', namaArab: 'إِبْرَاهِيم', arti: 'Nabi Ibrahim', jumlahAyat: 52, tempatTurun: 'Mekkah' },
  { nomor: 15, namaLatin: 'Al-Hijr', namaArab: 'الحِجْر', arti: 'Gunung Al-Hijr', jumlahAyat: 99, tempatTurun: 'Mekkah' },
  { nomor: 16, namaLatin: 'An-Nahl', namaArab: 'النَّحْل', arti: 'Lebah', jumlahAyat: 128, tempatTurun: 'Mekkah' },
  { nomor: 17, namaLatin: 'Al-Isra\'', namaArab: 'الإِسْرَاء', arti: 'Memperjalankan di Malam Hari', jumlahAyat: 111, tempatTurun: 'Mekkah' },
  { nomor: 18, namaLatin: 'Al-Kahf', namaArab: 'الكَهْف', arti: 'Gua', jumlahAyat: 110, tempatTurun: 'Mekkah', ayatSampel: [
    { nomorAyat: 1, teksArab: 'الْحَمْدُ لِلَّهِ الَّذِي أَنْزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَلْ لَهُ عِوَجًا', teksLatin: 'Al-hamdu lillahillazi anzala \'ala \'abdihil-kitaba wa lam yaj\'al lahu \'iwaja', terjemahan: 'Segala puji bagi Allah yang telah menurunkan Kitab (Al-Qur\'an) kepada hamba-Nya dan Dia tidak menjadikannya bengkok;' }
  ]},
  { nomor: 19, namaLatin: 'Maryam', namaArab: 'مَرْيَم', arti: 'Siti Maryam', jumlahAyat: 98, tempatTurun: 'Mekkah' },
  { nomor: 20, namaLatin: 'Taha', namaArab: 'طه', arti: 'Taha', jumlahAyat: 135, tempatTurun: 'Mekkah' },
  { nomor: 21, namaLatin: 'Al-Anbiya\'', namaArab: 'الأَنْبِيَاء', arti: 'Nabi-Nabi', jumlahAyat: 112, tempatTurun: 'Mekkah' },
  { nomor: 22, namaLatin: 'Al-Hajj', namaArab: 'الحَجّ', arti: 'Haji', jumlahAyat: 78, tempatTurun: 'Madinah' },
  { nomor: 23, namaLatin: 'Al-Mu\'minun', namaArab: 'المُؤْمِنُون', arti: 'Orang-Orang Mukmin', jumlahAyat: 118, tempatTurun: 'Mekkah' },
  { nomor: 24, namaLatin: 'An-Nur', namaArab: 'النُّور', arti: 'Cahaya', jumlahAyat: 64, tempatTurun: 'Madinah' },
  { nomor: 25, namaLatin: 'Al-Furqan', namaArab: 'الفُرْقَان', arti: 'Pembeda', jumlahAyat: 77, tempatTurun: 'Mekkah' },
  { nomor: 26, namaLatin: 'Asy-Syu\'ara\'', namaArab: 'الشُّعَرَاء', arti: 'Penyair', jumlahAyat: 227, tempatTurun: 'Mekkah' },
  { nomor: 27, namaLatin: 'An-Naml', namaArab: 'النَّمْل', arti: 'Semut', jumlahAyat: 93, tempatTurun: 'Mekkah' },
  { nomor: 28, namaLatin: 'Al-Qasas', namaArab: 'القَصَص', arti: 'Kisah-Kisah', jumlahAyat: 88, tempatTurun: 'Mekkah' },
  { nomor: 29, namaLatin: 'Al-\'Ankabut', namaArab: 'العَنْكَبُوت', arti: 'Laba-Laba', jumlahAyat: 69, tempatTurun: 'Mekkah' },
  { nomor: 30, namaLatin: 'Ar-Rum', namaArab: 'الرُّوم', arti: 'Bangsa Romawi', jumlahAyat: 60, tempatTurun: 'Mekkah' },
  { nomor: 31, namaLatin: 'Luqman', namaArab: 'لُقْمَان', arti: 'Luqman', jumlahAyat: 34, tempatTurun: 'Mekkah' },
  { nomor: 32, namaLatin: 'As-Sajdah', namaArab: 'السَّجْدَة', arti: 'Sujud', jumlahAyat: 30, tempatTurun: 'Mekkah' },
  { nomor: 33, namaLatin: 'Al-Ahzab', namaArab: 'الأَحْزَاب', arti: 'Golongan yang Bersekutu', jumlahAyat: 73, tempatTurun: 'Madinah' },
  { nomor: 34, namaLatin: 'Saba\'', namaArab: 'سَبَأ', arti: 'Kaum Saba\'', jumlahAyat: 54, tempatTurun: 'Mekkah' },
  { nomor: 35, namaLatin: 'Fatir', namaArab: 'فَاطِر', arti: 'Pencipta', jumlahAyat: 45, tempatTurun: 'Mekkah' },
  { nomor: 36, namaLatin: 'Yasin', namaArab: 'يس', arti: 'Yasin', jumlahAyat: 83, tempatTurun: 'Mekkah', ayatSampel: [
    { nomorAyat: 1, teksArab: 'يس', teksLatin: 'Ya Sin', terjemahan: 'Ya Sin.' },
    { nomorAyat: 2, teksArab: 'وَالْقُرْآنِ الْحَكِيمِ', teksLatin: 'Wal-qur\'anil-hakim', terjemahan: 'Demi Al-Qur\'an yang penuh hikmah,' },
    { nomorAyat: 3, teksArab: 'إِنَّكَ لَمِنَ الْمُرْسَلِينَ', teksLatin: 'Innaka laminal-mursalin', terjemahan: 'sungguh engkau (Muhammad) adalah salah seorang dari rasul-rasul.' }
  ]},
  { nomor: 37, namaLatin: 'As-Saffat', namaArab: 'الصَّافَّات', arti: 'Barisan-Barisan', jumlahAyat: 182, tempatTurun: 'Mekkah' },
  { nomor: 38, namaLatin: 'Sad', namaArab: 'ص', arti: 'Sad', jumlahAyat: 88, tempatTurun: 'Mekkah' },
  { nomor: 39, namaLatin: 'Az-Zumar', namaArab: 'الزُّمَر', arti: 'Rombongan', jumlahAyat: 75, tempatTurun: 'Mekkah' },
  { nomor: 40, namaLatin: 'Ghafir', namaArab: 'غَافِر', arti: 'Maha Pengampun', jumlahAyat: 85, tempatTurun: 'Mekkah' },
  { nomor: 41, namaLatin: 'Fussilat', namaArab: 'فُصِّلَت', arti: 'Yang Dijelaskan', jumlahAyat: 54, tempatTurun: 'Mekkah' },
  { nomor: 42, namaLatin: 'Asy-Syura', namaArab: 'الشُّورَىٰ', arti: 'Musyawarah', jumlahAyat: 53, tempatTurun: 'Mekkah' },
  { nomor: 43, namaLatin: 'Az-Zukhruf', namaArab: 'الزُّخْرُف', arti: 'Perhiasan', jumlahAyat: 89, tempatTurun: 'Mekkah' },
  { nomor: 44, namaLatin: 'Ad-Dukhan', namaArab: 'الدُّخَان', arti: 'Kabut', jumlahAyat: 59, tempatTurun: 'Mekkah' },
  { nomor: 45, namaLatin: 'Al-Jasiyah', namaArab: 'الجَاثِيَة', arti: 'Yang Berlutut', jumlahAyat: 37, tempatTurun: 'Mekkah' },
  { nomor: 46, namaLatin: 'Al-Ahqaf', namaArab: 'الأَحْقَاف', arti: 'Bukit Pasir', jumlahAyat: 35, tempatTurun: 'Mekkah' },
  { nomor: 47, namaLatin: 'Muhammad', namaArab: 'مُحَمَّد', arti: 'Nabi Muhammad', jumlahAyat: 38, tempatTurun: 'Madinah' },
  { nomor: 48, namaLatin: 'Al-Fath', namaArab: 'الفَتْح', arti: 'Kemenangan', jumlahAyat: 29, tempatTurun: 'Madinah' },
  { nomor: 49, namaLatin: 'Al-Hujurat', namaArab: 'الحُجُرَات', arti: 'Kamar-Kamar', jumlahAyat: 18, tempatTurun: 'Madinah' },
  { nomor: 50, namaLatin: 'Qaf', namaArab: 'ق', arti: 'Qaf', jumlahAyat: 45, tempatTurun: 'Mekkah' },
  { nomor: 51, namaLatin: 'Az-Zariyat', namaArab: 'الذَّارِيَات', arti: 'Angin yang Menerbangkan', jumlahAyat: 60, tempatTurun: 'Mekkah' },
  { nomor: 52, namaLatin: 'At-Tur', namaArab: 'الطُّور', arti: 'Bukit Tursina', jumlahAyat: 49, tempatTurun: 'Mekkah' },
  { nomor: 53, namaLatin: 'An-Najm', namaArab: 'النَّجْم', arti: 'Bintang', jumlahAyat: 62, tempatTurun: 'Mekkah' },
  { nomor: 54, namaLatin: 'Al-Qamar', namaArab: 'القَمَر', arti: 'Bulan', jumlahAyat: 55, tempatTurun: 'Mekkah' },
  { nomor: 55, namaLatin: 'Ar-Rahman', namaArab: 'الرَّحْمَٰن', arti: 'Maha Pengasih', jumlahAyat: 78, tempatTurun: 'Madinah', ayatSampel: [
    { nomorAyat: 1, teksArab: 'الرَّحْمَٰنُ', teksLatin: 'Ar-Rahman', terjemahan: '(Allah) Yang Maha Pengasih,' },
    { nomorAyat: 2, teksArab: 'عَلَّمَ الْقُرْآنَ', teksLatin: '\'Allamal-qur\'an', terjemahan: 'yang telah mengajarkan Al-Qur\'an.' }
  ]},
  { nomor: 56, namaLatin: 'Al-Waqi\'ah', namaArab: 'الوَاقِعَة', arti: 'Hari Kiamat', jumlahAyat: 96, tempatTurun: 'Mekkah' },
  { nomor: 57, namaLatin: 'Al-Hadid', namaArab: 'الحَدِيد', arti: 'Besi', jumlahAyat: 29, tempatTurun: 'Madinah' },
  { nomor: 58, namaLatin: 'Al-Mujadilah', namaArab: 'المُجَادَلَة', arti: 'Gugatan', jumlahAyat: 22, tempatTurun: 'Madinah' },
  { nomor: 59, namaLatin: 'Al-Hasyr', namaArab: 'الحَشْر', arti: 'Pengusiran', jumlahAyat: 24, tempatTurun: 'Madinah' },
  { nomor: 60, namaLatin: 'Al-Mumtahanah', namaArab: 'المُمْتَحَنَة', arti: 'Wanita yang Diuji', jumlahAyat: 13, tempatTurun: 'Madinah' },
  { nomor: 61, namaLatin: 'As-Saff', namaArab: 'الصَّفّ', arti: 'Barisan', jumlahAyat: 14, tempatTurun: 'Madinah' },
  { nomor: 62, namaLatin: 'Al-Jumu\'ah', namaArab: 'الجُمُعَة', arti: 'Hari Jum\'at', jumlahAyat: 11, tempatTurun: 'Madinah' },
  { nomor: 63, namaLatin: 'Al-Munafiqun', namaArab: 'المُنَافِقُون', arti: 'Orang Munafik', jumlahAyat: 11, tempatTurun: 'Madinah' },
  { nomor: 64, namaLatin: 'At-Taghabun', namaArab: 'التَّغَابُن', arti: 'Hari Ditampakkan Kesalahan', jumlahAyat: 18, tempatTurun: 'Madinah' },
  { nomor: 65, namaLatin: 'At-Talaq', namaArab: 'الطَّلَاق', arti: 'Perceraian', jumlahAyat: 12, tempatTurun: 'Madinah' },
  { nomor: 66, namaLatin: 'At-Tahrim', namaArab: 'التَّحْرِيم', arti: 'Mengharamkan', jumlahAyat: 12, tempatTurun: 'Madinah' },
  { nomor: 67, namaLatin: 'Al-Mulk', namaArab: 'المُلْك', arti: 'Kerajaan', jumlahAyat: 30, tempatTurun: 'Mekkah', ayatSampel: [
    { nomorAyat: 1, teksArab: 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', teksLatin: 'Tabarakallazi biyadihil-mulku wa huwa \'ala kulli syay\'in qadir', terjemahan: 'Mahasuci Allah yang menguasai (segala) kerajaan, dan Dia Mahakuasa atas segala sesuatu.' }
  ]},
  { nomor: 68, namaLatin: 'Al-Qalam', namaArab: 'القَلَم', arti: 'Pena', jumlahAyat: 52, tempatTurun: 'Mekkah' },
  { nomor: 69, namaLatin: 'Al-Haqqah', namaArab: 'الحَاقَّة', arti: 'Hari Kiamat', jumlahAyat: 52, tempatTurun: 'Mekkah' },
  { nomor: 70, namaLatin: 'Al-Ma\'arij', namaArab: 'المَعَارِج', arti: 'Tempat Naik', jumlahAyat: 44, tempatTurun: 'Mekkah' },
  { nomor: 71, namaLatin: 'Nuh', namaArab: 'نُوح', arti: 'Nabi Nuh', jumlahAyat: 28, tempatTurun: 'Mekkah' },
  { nomor: 72, namaLatin: 'Al-Jinn', namaArab: 'الجِنّ', arti: 'Jin', jumlahAyat: 28, tempatTurun: 'Mekkah' },
  { nomor: 73, namaLatin: 'Al-Muzzammil', namaArab: 'المُزَّمِّل', arti: 'Orang Berselimut', jumlahAyat: 20, tempatTurun: 'Mekkah' },
  { nomor: 74, namaLatin: 'Al-Muddassir', namaArab: 'المُدَّثِّر', arti: 'Orang Berkemul', jumlahAyat: 56, tempatTurun: 'Mekkah' },
  { nomor: 75, namaLatin: 'Al-Qiyamah', namaArab: 'القِيَامَة', arti: 'Hari Kiamat', jumlahAyat: 40, tempatTurun: 'Mekkah' },
  { nomor: 76, namaLatin: 'Al-Insan', namaArab: 'الإِنْسَان', arti: 'Manusia', jumlahAyat: 31, tempatTurun: 'Madinah' },
  { nomor: 77, namaLatin: 'Al-Mursalat', namaArab: 'المُرْسَلَات', arti: 'Malaikat yang Diutus', jumlahAyat: 50, tempatTurun: 'Mekkah' },
  { nomor: 78, namaLatin: 'An-Naba\'', namaArab: 'النَّبَأ', arti: 'Berita Besar', jumlahAyat: 40, tempatTurun: 'Mekkah', ayatSampel: [
    { nomorAyat: 1, teksArab: 'عَمَّ يَتَسَاءَلُونَ', teksLatin: '\'Amma yatasa\'alun', terjemahan: 'Tentang apakah mereka saling bertanya-tanya?' },
    { nomorAyat: 2, teksArab: 'عَنِ النَّبَإِ الْعَظِيمِ', teksLatin: '\'Anin-naba\'il-\'azim', terjemahan: 'Tentang berita yang besar (hari berbangkit),' }
  ]},
  { nomor: 79, namaLatin: 'An-Nazi\'at', namaArab: 'النَّازِعَات', arti: 'Malaikat yang Mencabut', jumlahAyat: 46, tempatTurun: 'Mekkah' },
  { nomor: 80, namaLatin: '\'Abasa', namaArab: 'عَبَسَ', arti: 'Ia Bermuka Masam', jumlahAyat: 42, tempatTurun: 'Mekkah' },
  { nomor: 81, namaLatin: 'At-Takwir', namaArab: 'التَّكْوِير', arti: 'Menggulung', jumlahAyat: 29, tempatTurun: 'Mekkah' },
  { nomor: 82, namaLatin: 'Al-Infitar', namaArab: 'الانْفِطَار', arti: 'Terbelah', jumlahAyat: 19, tempatTurun: 'Mekkah' },
  { nomor: 83, namaLatin: 'Al-Mutaffifin', namaArab: 'المُطَفِّفِين', arti: 'Orang Curang', jumlahAyat: 36, tempatTurun: 'Mekkah' },
  { nomor: 84, namaLatin: 'Al-Insyiqaq', namaArab: 'الانْشِقَاق', arti: 'Terbelah', jumlahAyat: 25, tempatTurun: 'Mekkah' },
  { nomor: 85, namaLatin: 'Al-Buruj', namaArab: 'البُرُوج', arti: 'Gugusan Bintang', jumlahAyat: 22, tempatTurun: 'Mekkah' },
  { nomor: 86, namaLatin: 'At-Tariq', namaArab: 'الطَّارِق', arti: 'Yang Datang di Malam Hari', jumlahAyat: 17, tempatTurun: 'Mekkah' },
  { nomor: 87, namaLatin: 'Al-A\'la', namaArab: 'الأَعْلَىٰ', arti: 'Yang Mahatinggi', jumlahAyat: 19, tempatTurun: 'Mekkah' },
  { nomor: 88, namaLatin: 'Al-Ghasyiyah', namaArab: 'الغَاشِيَة', arti: 'Hari Pembalasan', jumlahAyat: 26, tempatTurun: 'Mekkah' },
  { nomor: 89, namaLatin: 'Al-Fajr', namaArab: 'الفَجْر', arti: 'Fajar', jumlahAyat: 30, tempatTurun: 'Mekkah' },
  { nomor: 90, namaLatin: 'Al-Balad', namaArab: 'البَلَد', arti: 'Negeri', jumlahAyat: 20, tempatTurun: 'Mekkah' },
  { nomor: 91, namaLatin: 'Asy-Syams', namaArab: 'الشَّمْس', arti: 'Matahari', jumlahAyat: 15, tempatTurun: 'Mekkah' },
  { nomor: 92, namaLatin: 'Al-Lail', namaArab: 'اللَّيْل', arti: 'Malam', jumlahAyat: 21, tempatTurun: 'Mekkah' },
  { nomor: 93, namaLatin: 'Ad-Duha', namaArab: 'الضُّحَىٰ', arti: 'Waktu Duha', jumlahAyat: 11, tempatTurun: 'Mekkah' },
  { nomor: 94, namaLatin: 'Asy-Syarh', namaArab: 'الشَّرْح', arti: 'Melapangkan', jumlahAyat: 8, tempatTurun: 'Mekkah' },
  { nomor: 95, namaLatin: 'At-Tin', namaArab: 'التِّين', arti: 'Buah Tin', jumlahAyat: 8, tempatTurun: 'Mekkah' },
  { nomor: 96, namaLatin: 'Al-\'Alaq', namaArab: 'العَلَق', arti: 'Segumpal Darah', jumlahAyat: 19, tempatTurun: 'Mekkah' },
  { nomor: 97, namaLatin: 'Al-Qadr', namaArab: 'القَدْر', arti: 'Kemuliaan', jumlahAyat: 5, tempatTurun: 'Mekkah' },
  { nomor: 98, namaLatin: 'Al-Bayyinah', namaArab: 'البَيِّنَة', arti: 'Bukti Nyata', jumlahAyat: 8, tempatTurun: 'Madinah' },
  { nomor: 99, namaLatin: 'Az-Zalzalah', namaArab: 'الزَّلْزَلَة', arti: 'Goncangan', jumlahAyat: 8, tempatTurun: 'Madinah' },
  { nomor: 100, namaLatin: 'Al-\'Adiyat', namaArab: 'العَادِيَات', arti: 'Kuda Perang yang Berlari', jumlahAyat: 11, tempatTurun: 'Mekkah' },
  { nomor: 101, namaLatin: 'Al-Qari\'ah', namaArab: 'القَارِعَة', arti: 'Hari Kiamat', jumlahAyat: 11, tempatTurun: 'Mekkah' },
  { nomor: 102, namaLatin: 'At-Takasur', namaArab: 'التَّكَاثُر', arti: 'Bermegah-Megahan', jumlahAyat: 8, tempatTurun: 'Mekkah' },
  { nomor: 103, namaLatin: 'Al-\'Asr', namaArab: 'العَصْر', arti: 'Masa / Waktu', jumlahAyat: 3, tempatTurun: 'Mekkah', ayatSampel: [
    { nomorAyat: 1, teksArab: 'وَالْعَصْرِ', teksLatin: 'Wal-\'asr', terjemahan: 'Demi masa.' },
    { nomorAyat: 2, teksArab: 'إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ', teksLatin: 'Innal-insana lafi khusr', terjemahan: 'Sungguh, manusia berada dalam kerugian,' },
    { nomorAyat: 3, teksArab: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ', teksLatin: 'Illallazina amanu wa \'amilus-salihati wa tawashaw bil-haqqi wa tawashaw bis-sabr', terjemahan: 'kecuali orang-orang yang beriman dan mengerjakan kebajikan serta saling menasihati untuk kebenaran dan kesabaran.' }
  ]},
  { nomor: 104, namaLatin: 'Al-Humazah', namaArab: 'الهُمَزَة', arti: 'Pengumpat', jumlahAyat: 9, tempatTurun: 'Mekkah' },
  { nomor: 105, namaLatin: 'Al-Fil', namaArab: 'الفِيل', arti: 'Gajah', jumlahAyat: 5, tempatTurun: 'Mekkah' },
  { nomor: 106, namaLatin: 'Quraisy', namaArab: 'قُرَيْش', arti: 'Suku Quraisy', jumlahAyat: 4, tempatTurun: 'Mekkah' },
  { nomor: 107, namaLatin: 'Al-Ma\'un', namaArab: 'المَاعُون', arti: 'Barang-Barang Berguna', jumlahAyat: 7, tempatTurun: 'Mekkah' },
  { nomor: 108, namaLatin: 'Al-Kausar', namaArab: 'الكَوْثَر', arti: 'Nikmat yang Banyak', jumlahAyat: 3, tempatTurun: 'Mekkah', ayatSampel: [
    { nomorAyat: 1, teksArab: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ', teksLatin: 'Inna a\'taynakal-kawthar', terjemahan: 'Sungguh, Kami telah memberimu (Muhammad) nikmat yang banyak.' },
    { nomorAyat: 2, teksArab: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ', teksLatin: 'Fa salli li rabbika wan-har', terjemahan: 'Maka laksanakanlah sholat karena Tuhanmu, dan berkurbanlah.' },
    { nomorAyat: 3, teksArab: 'إِنَّ شَانِئَكَ هُوَ الأَبْتَرُ', teksLatin: 'Inna syani\'aka huwal-abtar', terjemahan: 'Sungguh, orang yang membencimu dialah yang terputus (dari rahmat Allah).' }
  ]},
  { nomor: 109, namaLatin: 'Al-Kafirun', namaArab: 'الكَافِرُون', arti: 'Orang-Orang Kafir', jumlahAyat: 6, tempatTurun: 'Mekkah' },
  { nomor: 110, namaLatin: 'An-Nasr', namaArab: 'النَّصْر', arti: 'Pertolongan', jumlahAyat: 3, tempatTurun: 'Madinah' },
  { nomor: 111, namaLatin: 'Al-Lahab', namaArab: 'المَسَد', arti: 'Gejolak Api', jumlahAyat: 5, tempatTurun: 'Mekkah' },
  { nomor: 112, namaLatin: 'Al-Ikhlas', namaArab: 'الإِخْلَاص', arti: 'Keesaan Allah', jumlahAyat: 4, tempatTurun: 'Mekkah', ayatSampel: [
    { nomorAyat: 1, teksArab: 'قُلْ هُوَ اللَّهُ أَحَدٌ', teksLatin: 'Qul huwallahu ahad', terjemahan: 'Katakanlah (Muhammad), "Dialah Allah, Yang Maha Esa."' },
    { nomorAyat: 2, teksArab: 'اللَّهُ الصَّمَدُ', teksLatin: 'Allahus-samad', terjemahan: 'Allah tempat meminta segala sesuatu.' },
    { nomorAyat: 3, teksArab: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', teksLatin: 'Lam yalid wa lam yulad', terjemahan: '(Allah) tidak beranak dan tidak pula diperanakkan,' },
    { nomorAyat: 4, teksArab: 'وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ', teksLatin: 'Wa lam yakul lahu kufuwan ahad', terjemahan: 'dan tidak ada sesuatu yang setara dengan Dia.' }
  ]},
  { nomor: 113, namaLatin: 'Al-Falaq', namaArab: 'الفَلَق', arti: 'Waktu Subuh', jumlahAyat: 5, tempatTurun: 'Madinah', ayatSampel: [
    { nomorAyat: 1, teksArab: 'قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِۙ', teksLatin: 'Qul a‘ūżu birabbil-falaq(i).', terjemahan: 'Katakanlah (Nabi Muhammad), "Aku berlindung kepada Tuhan yang (menjaga) fajar (subuh)' },
    { nomorAyat: 2, teksArab: 'مِنْ شَرِّ مَا خَلَقَۙ', teksLatin: 'Min syarri mā khalaq(a).', terjemahan: 'dari kejahatan (makhluk yang) Dia ciptakan,' },
    { nomorAyat: 3, teksArab: 'وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ', teksLatin: 'Wa min syarri gāsiqin iżā waqab(a).', terjemahan: 'dari kejahatan malam apabila telah gelap gulita,' },
    { nomorAyat: 4, teksArab: 'وَمِنْ شَرِّ النَّفّٰثٰتِ فِى الْعُقَدِۙ', teksLatin: 'Wa min syarrin-naffāṡāti fil-‘uqad(i).', terjemahan: 'dari kejahatan perempuan-perempuan (penyihir) yang meniup pada buhul-buhul (talinya),' },
    { nomorAyat: 5, teksArab: 'وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ ࣖ', teksLatin: 'Wa min syarri ḥāsidin iżā ḥasad(a).', terjemahan: 'dan dari kejahatan orang yang dengki apabila dia dengki."' }
  ]},
  { nomor: 114, namaLatin: 'An-Nas', namaArab: 'النَّاس', arti: 'Manusia', jumlahAyat: 6, tempatTurun: 'Madinah', ayatSampel: [
    { nomorAyat: 1, teksArab: 'قُلْ اَعُوْذُ بِرَبِّ النَّاسِۙ', teksLatin: 'Qul a‘ūżu birabbin-nās(i).', terjemahan: 'Katakanlah (Nabi Muhammad), "Aku berlindung kepada Tuhan manusia,' },
    { nomorAyat: 2, teksArab: 'مَلِكِ النَّاسِۙ', teksLatin: 'Malikin-nās(i).', terjemahan: 'raja manusia,' },
    { nomorAyat: 3, teksArab: 'اِلٰهِ النَّاسِۙ', teksLatin: 'Ilāhin-nās(i).', terjemahan: 'sembahan manusia,' },
    { nomorAyat: 4, teksArab: 'مِنْ شَرِّ الْوَسْوَاسِ ەۙ الْخَنَّاسِۖ', teksLatin: 'Min syarril-waswāsil-khannās(i).', terjemahan: 'dari kejahatan (bisikan) setan yang bersembunyi,' },
    { nomorAyat: 5, teksArab: 'الَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِۙ', teksLatin: 'Allażī yuwaswisu fī ṣudūrin-nās(i).', terjemahan: 'yang membisikkan (kejahatan) ke dalam dada manusia,' },
    { nomorAyat: 6, teksArab: 'مِنَ الْجِنَّةِ وَالنَّاسِ ࣖ', teksLatin: 'Minal-jinnati wan-nās(i).', terjemahan: 'dari (golongan) jin dan manusia."' }
  ]}
];

export const INITIAL_PRESTASI: Prestasi[] = [
  {
    id: 'PR1',
    judul: 'Juara 1 Musabaqah Hifdzil Qur\'an (MHQ) 5 Juz Antar Diniyah',
    santri: 'Ahmad Fauzi (Kelas Ula 1)',
    kejuaraan: 'Juara 1',
    kategori: 'Tahfidz (MHQ)',
    tingkat: 'Kabupaten',
    tahun: '2026',
    deskripsi: 'Meraih nilai tertinggi tajwid dan fasohah pada ajang MHQ Porsadin Tingkat Kabupaten Garut.',
  },
  {
    id: 'PR2',
    judul: 'Juara 2 Lomba Pidato Bahasa Arab Santri Diniyah',
    santri: 'Bilqis Humaira (Kelas Ula 2)',
    kejuaraan: 'Juara 2',
    kategori: 'Pidato Arab',
    tingkat: 'Kabupaten',
    tahun: '2026',
    deskripsi: 'Menyampaikan khitobah bertema Birrul Walidain dengan makhraj dan intonasi fasih.',
  },
  {
    id: 'PR3',
    judul: 'Juara 1 Lomba Kaligrafi Seni Khath Naskhi',
    santri: 'Chairul Anam (Kelas Ula 3)',
    kejuaraan: 'Juara 1',
    kategori: 'Kaligrafi',
    tingkat: 'Kecamatan',
    tahun: '2025',
    deskripsi: 'Karya mushaf surat Al-Ikhlas dengan kaidah Naskhi dan ornamen khas Nusantara.',
  },
  {
    id: 'PR4',
    judul: 'Madrasah Diniyah Takmiliyah Teladan & Berprestasi',
    santri: 'Seluruh Santri & Asatidz MDTU',
    kejuaraan: 'Juara 1',
    kategori: 'Madrasah',
    tingkat: 'Kecamatan',
    tahun: '2025',
    deskripsi: 'Penghargaan Forum Komunikasi Diniyah Takmiliyah (FKDT) Kecamatan Pamulihan Garut atas tata kelola dan kurikulum unggulan.',
  },
  {
    id: 'PR5',
    judul: 'Juara 3 Festival Sholawat & Seni Hadroh Santri',
    santri: 'Tim Hadroh Nurul Huda',
    kejuaraan: 'Juara 3',
    kategori: 'Seni Hadroh',
    tingkat: 'Kabupaten',
    tahun: '2025',
    deskripsi: 'Penampilan tabuhan al-banjari dengan aransemen qasidah Thola\'al Badru \'Alayna.',
  },
];

const todayStr = new Date().toISOString().split('T')[0];

export const INITIAL_ABSENSI: AbsensiRecord[] = [
  // TPQ
  { id: 'AB-S1', tanggal: todayStr, kategori: 'TPQ', targetId: 'S1', nama: 'Ahmad Fauzi', kelas: 'TPQ', status: 'Hadir', waktuInput: '14:05' },
  { id: 'AB-S2', tanggal: todayStr, kategori: 'TPQ', targetId: 'S2', nama: 'Aisyah Putri Humaira', kelas: 'TPQ', status: 'Hadir', waktuInput: '14:05' },
  { id: 'AB-S3', tanggal: todayStr, kategori: 'TPQ', targetId: 'S3', nama: 'Bilqis Salsabila', kelas: 'TPQ', status: 'Hadir', waktuInput: '14:06' },
  { id: 'AB-S4', tanggal: todayStr, kategori: 'TPQ', targetId: 'S4', nama: 'Fakhri Aliando', kelas: 'TPQ', status: 'Sakit', keterangan: 'Demam & batuk, surat dari orang tua', waktuInput: '14:06' },

  // Kelas A
  { id: 'AB-S5', tanggal: todayStr, kategori: 'Kelas A', targetId: 'S5', nama: 'Chairul Anam', kelas: 'Kelas A', status: 'Hadir', waktuInput: '14:02' },
  { id: 'AB-S6', tanggal: todayStr, kategori: 'Kelas A', targetId: 'S6', nama: 'Dinda Rahmah', kelas: 'Kelas A', status: 'Hadir', waktuInput: '14:03' },
  { id: 'AB-S7', tanggal: todayStr, kategori: 'Kelas A', targetId: 'S7', nama: 'Ehsan Al-Ghifari', kelas: 'Kelas A', status: 'Izin', keterangan: 'Acara keluarga di luar kota', waktuInput: '14:03' },
  { id: 'AB-S8', tanggal: todayStr, kategori: 'Kelas A', targetId: 'S8', nama: 'Fatimah Az-Zahra', kelas: 'Kelas A', status: 'Hadir', waktuInput: '14:04' },

  // Kelas B
  { id: 'AB-S9', tanggal: todayStr, kategori: 'Kelas B', targetId: 'S9', nama: 'Ghani Ramadhan', kelas: 'Kelas B', status: 'Hadir', waktuInput: '14:00' },
  { id: 'AB-S10', tanggal: todayStr, kategori: 'Kelas B', targetId: 'S10', nama: 'Hafidzah Nailah', kelas: 'Kelas B', status: 'Sakit', keterangan: 'Sakit gigi', waktuInput: '14:01' },
  { id: 'AB-S11', tanggal: todayStr, kategori: 'Kelas B', targetId: 'S11', nama: 'Ilyas Muhammad', kelas: 'Kelas B', status: 'Hadir', waktuInput: '14:01' },
  { id: 'AB-S12', tanggal: todayStr, kategori: 'Kelas B', targetId: 'S12', nama: 'Jasmine Aulia', kelas: 'Kelas B', status: 'Hadir', waktuInput: '14:02' },

  // Kelas C
  { id: 'AB-S13', tanggal: todayStr, kategori: 'Kelas C', targetId: 'S13', nama: 'Khalid Basalamah', kelas: 'Kelas C', status: 'Hadir', waktuInput: '14:00' },
  { id: 'AB-S14', tanggal: todayStr, kategori: 'Kelas C', targetId: 'S14', nama: 'Luthfi Hakim', kelas: 'Kelas C', status: 'Hadir', waktuInput: '14:01' },
  { id: 'AB-S15', tanggal: todayStr, kategori: 'Kelas C', targetId: 'S15', nama: 'Muhammad Nabil', kelas: 'Kelas C', status: 'Hadir', waktuInput: '14:02' },
  { id: 'AB-S16', tanggal: todayStr, kategori: 'Kelas C', targetId: 'S16', nama: 'Nadia Syafiqah', kelas: 'Kelas C', status: 'Hadir', waktuInput: '14:03' },

  // Dewan Guru / Asatidz
  { id: 'AB-G1', tanggal: todayStr, kategori: 'Guru', targetId: 'G1', nama: 'Ust. Ahmad Syarifudin, S.Pd.I', kelas: 'Kepala MDTU', status: 'Hadir', waktuInput: '13:45' },
  { id: 'AB-G2', tanggal: todayStr, kategori: 'Guru', targetId: 'G2', nama: 'Ust. M. Ridwan', kelas: 'Guru Tahfidz', status: 'Hadir', waktuInput: '13:50' },
  { id: 'AB-G3', tanggal: todayStr, kategori: 'Guru', targetId: 'G3', nama: 'Ustzh. Siti Halimah', kelas: 'Wali Kelas A', status: 'Hadir', waktuInput: '13:50' },
  { id: 'AB-G4', tanggal: todayStr, kategori: 'Guru', targetId: 'G4', nama: 'Ust. Dedi Supriadi', kelas: 'Guru B. Arab', status: 'Hadir', waktuInput: '13:52' },
  { id: 'AB-G5', tanggal: todayStr, kategori: 'Guru', targetId: 'G5', nama: 'Ustzh. Nur Aisyah', kelas: 'Tata Usaha / TPQ', status: 'Hadir', waktuInput: '13:40' },
  { id: 'AB-G6', tanggal: todayStr, kategori: 'Guru', targetId: 'G6', nama: 'Ust. Salman Al-Farisi', kelas: 'Pembina Hadroh', status: 'Hadir', waktuInput: '13:55' },
  { id: 'AB-G7', tanggal: todayStr, kategori: 'Guru', targetId: 'G7', nama: 'Ustzh. Rina Maryani', kelas: 'Guru Tarikh', status: 'Izin', keterangan: 'Dinas FKDT Kecamatan', waktuInput: '13:30' },
  { id: 'AB-G8', tanggal: todayStr, kategori: 'Guru', targetId: 'G8', nama: 'Ust. Wildan Gunawan', kelas: 'Guru Kaligrafi', status: 'Hadir', waktuInput: '13:58' },
];

export const INITIAL_AGENDA_KALENDER: AgendaKalender[] = [
  {
    id: 'AG-1',
    tanggal: '2026-03-20',
    tanggalHijriyah: '1 Syawwal 1447 H',
    judul: 'Hari Raya Idul Fitri 1447 H',
    kategori: 'Hari Besar Islam',
    deskripsi: 'Sholat Ied bersama dan silaturahmi akbar keluarga besar MDTU Nurul Huda.',
    waktu: '06.30 WIB',
    lokasi: 'Masjid Jami\' Nurul Huda',
    isPenting: true,
  },
  {
    id: 'AG-2',
    tanggal: '2026-05-27',
    tanggalHijriyah: '10 Dzulhijjah 1447 H',
    judul: 'Hari Raya Idul Adha 1447 H & Qurban Berkah',
    kategori: 'Hari Besar Islam',
    deskripsi: 'Pelaksanaan Sholat Idul Adha dan penyembelihan hewan qurban bersama santri dan asatidz.',
    waktu: '06.30 WIB',
    lokasi: 'Halaman MDTU & Masjid Nurul Huda',
    isPenting: true,
  },
  {
    id: 'AG-3',
    tanggal: '2026-06-16',
    tanggalHijriyah: '1 Muharram 1448 H',
    judul: 'Tahun Baru Islam 1448 Hijriyah',
    kategori: 'Hari Besar Islam',
    deskripsi: 'Pawai Ta\'aruf Obor santri MDTU Nurul Huda keliling desa dan doa akhir-awal tahun.',
    waktu: '18.30 WIB',
    lokasi: 'Rute Kp. Cikopo Panawa',
    isPenting: true,
  },
  {
    id: 'AG-4',
    tanggal: '2026-06-25',
    tanggalHijriyah: '10 Muharram 1448 H',
    judul: 'Hari Asyura & Santunan Anak Yatim',
    kategori: 'Hari Besar Islam',
    deskripsi: 'Puasa Tasu\'a & Asyura serta penyaluran santunan bagi anak yatim dan dhuafa di lingkungan madrasah.',
    waktu: '16.00 WIB',
    lokasi: 'Aula MDTU Nurul Huda',
    isPenting: true,
  },
  {
    id: 'AG-5',
    tanggal: '2026-08-25',
    tanggalHijriyah: '12 Rabiul Awwal 1448 H',
    judul: 'Peringatan Maulid Nabi Muhammad SAW',
    kategori: 'Hari Besar Islam',
    deskripsi: 'Tabligh akbar, pembacaan Maulid Simthuddurar & Diba\'i oleh grup hadroh santri.',
    waktu: '19.30 WIB',
    lokasi: 'Masjid Jami\' Nurul Huda',
    isPenting: true,
  },
  {
    id: 'AG-6',
    tanggal: '2026-06-08',
    tanggalHijriyah: '22 Dzulhijjah 1447 H',
    judul: 'Imtihan Akhirussanah & Ujian Semester MDTU',
    kategori: 'Ujian / Imtihan',
    deskripsi: 'Ujian komprehensif Fiqih, Tahfidz, Tajwid, Bahasa Arab, dan Aqidah Akhlak santri TPQ s.d Kelas C.',
    waktu: '14.00 - 17.00 WIB',
    lokasi: 'Ruang Kelas MDTU',
    isPenting: true,
  },
  {
    id: 'AG-7',
    tanggal: '2026-06-20',
    tanggalHijriyah: '5 Muharram 1448 H',
    judul: 'Haflah Khotmil Qur\'an & Wisuda Tahfidz Juz 30',
    kategori: 'Kegiatan MDTU',
    deskripsi: 'Prosesi wisuda kelulusan santri Kelas C dan wisuda tahfidz santri penghafal Juz 30, 29, dan 28.',
    waktu: '08.00 - 12.00 WIB',
    lokasi: 'Panggung Utama MDTU',
    isPenting: true,
  },
  {
    id: 'AG-8',
    tanggal: '2026-10-15',
    tanggalHijriyah: '4 Jumadil Ula 1448 H',
    judul: 'Musyawarah Bulanan Wali Santri & Asatidz',
    kategori: 'Kegiatan MDTU',
    deskripsi: 'Laporan perkembangan hafalan, kedisiplinan santri, dan evaluasi kurikulum MDTU.',
    waktu: '09.00 WIB',
    lokasi: 'Ruang Abu Bakar As-Siddiq',
    isPenting: false,
  },
];
