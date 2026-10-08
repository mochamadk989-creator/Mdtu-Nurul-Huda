export interface Santri {
  id: string;
  nama: string;
  kelas: string;
  hafalanSurat: string;
  nomorInduk?: string;
  wali?: string;
  kehadiran?: 'Hadir' | 'Izin' | 'Sakit' | 'Alpha';
}

export interface Guru {
  id: string;
  nama: string;
  jabatan: string;
  mataPelajaran?: string;
  kontak?: string;
}

export interface TahfidzLevel {
  id: string;
  levelName: string;
  keterangan: string;
  suratTarget: string;
}

export interface Pengumuman {
  id: string;
  judul: string;
  subjudul: string;
  waktu: string;
  lokasi: string;
  tanggal: string;
  deskripsi: string;
  kategori?: string;
}

export interface KelasData {
  id: string;
  namaKelas: string;
  tingkat: string;
  waliKelas: string;
  jumlahSantri: number;
  ruangan: string;
}

export interface JadwalPelajaran {
  id: string;
  hari: string;
  jamMulai: string;
  jamSelesai: string;
  mataPelajaran: string;
  kelas: string;
  guruPengampu: string;
}

export interface Ekstrakurikuler {
  id: string;
  nama: string;
  pembina: string;
  jadwal: string;
  lokasi: string;
  deskripsi: string;
}

export interface DoaHarian {
  id: string;
  judul: string;
  lafadzArab: string;
  latin: string;
  arti: string;
  kategori: string;
}

export interface Ayat {
  nomorAyat: number;
  teksArab: string;
  teksLatin?: string;
  teksIndonesia?: string;
  terjemahan?: string;
  audio?: Record<string, string>;
}

export interface Surah {
  nomor: number;
  namaLatin: string;
  namaArab: string;
  arti: string;
  jumlahAyat: number;
  tempatTurun: string;
  deskripsi?: string;
  audioFull?: Record<string, string>;
  ayat?: Ayat[];
  ayatSampel?: Ayat[];
}

export interface WaktuSholat {
  nama: string;
  jam: string;
  iconName: string;
  isNext: boolean;
}

export type TipeTransaksi = 'MASUK' | 'KELUAR';

export interface TransaksiKeuangan {
  id: string;
  tipe: TipeTransaksi;
  kategori: string; // 'SPP' | 'Pendaftaran' | 'Infaq' | 'Operasional' | 'Bisyr Guru'
  judul: string;
  nominal: number;
  tanggal: string;
  keterangan: string;
}

export interface StatusBayarSantri {
  id: string;
  santriId: string;
  namaSantri: string;
  kelas: string;
  bayarPendaftaran: boolean;
  bayarSppBulanIni: boolean;
  nominalSpp: number;
  tanggalTerakhirBayar: string;
  catatan: string;
}

export interface PengaturanSuaraAdzan {
  id: string;
  namaWaktu: string; // Subuh, Dzuhur, Ashar, Maghrib, Isya
  aktif: boolean;
  namaSuara: string;
  audioUrl?: string;
}

export interface QariMurottal {
  id: string;
  namaQari: string;
  riwayat: string;
  audioUrl: string;
  isAktif: boolean;
}

export interface InfoKiblat {
  derajatKiblat: number;
  jarakKm: number;
  namaLokasi: string;
  latitude: number;
  longitude: number;
}

export interface Prestasi {
  id: string;
  judul: string;
  santri: string;
  kejuaraan: string; // Juara 1, Juara 2, Juara 3, Harapan
  kategori: string;  // Tahfidz (MHQ), Pidato Arab, Kaligrafi, Hadroh, Madrasah
  tingkat: string;   // Kecamatan, Kabupaten, Provinsi, Nasional
  tahun: string;
  deskripsi: string;
}

export type StatusAbsensi = 'Hadir' | 'Izin' | 'Sakit' | 'Alpa';
export type KategoriAbsensi = 'TPQ' | 'Kelas A' | 'Kelas B' | 'Kelas C' | 'Guru';

export interface AbsensiRecord {
  id: string;
  tanggal: string; // Format YYYY-MM-DD
  kategori: KategoriAbsensi;
  targetId: string; // id santri atau guru
  nama: string;
  kelas?: string;
  status: StatusAbsensi;
  keterangan?: string;
  waktuInput?: string;
}

export interface AgendaKalender {
  id: string;
  tanggal: string; // Format YYYY-MM-DD
  tanggalHijriyah?: string;
  judul: string;
  kategori: 'Hari Besar Islam' | 'Puasa Sunnah' | 'Kegiatan MDTU' | 'Ujian / Imtihan' | 'Libur';
  deskripsi: string;
  waktu?: string;
  lokasi?: string;
  isPenting?: boolean;
}

export type JenisLaporan = 'absensi' | 'santri' | 'keuangan' | 'prestasi' | 'jadwal' | 'kartu-spp';
