import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  Sparkles,
  Users,
  Calendar,
  DollarSign,
  Compass,
  MoreHorizontal,
  Book,
  BookOpen,
  Clock,
  Heart,
  Volume2,
  GraduationCap,
  Award,
  ChevronLeft,
  Plus,
  Edit,
  Trash2,
  Lock,
  Unlock,
  UserCheck,
  Moon,
  Printer,
  Smartphone,
} from 'lucide-react';
import { HeaderBanner } from './components/HeaderBanner';
import { GreetingCard } from './components/GreetingCard';
import { SearchBarSection } from './components/SearchBarSection';
import { StatCardsSection } from './components/StatCardsSection';
import { DashboardContent } from './components/DashboardContent';
import { SantriView } from './components/SantriView';
import { JadwalKelasView } from './components/JadwalKelasView';
import { KeuanganView } from './components/KeuanganView';
import { JadwalSholatView } from './components/JadwalSholatView';
import { ArahKiblatView } from './components/ArahKiblatView';
import { AlquranView } from './components/AlquranView';
import { DoaHarianView } from './components/DoaHarianView';
import { AdzanMurottalView } from './components/AdzanMurottalView';
import { UstazAiView } from './components/UstazAiView';
import { PrestasiView } from './components/PrestasiView';
import { AbsensiView } from './components/AbsensiView';
import { KalenderHijriyahView } from './components/KalenderHijriyahView';
import { CetakLaporanModal } from './components/CetakLaporanModal';
import { DownloadApkModal } from './components/DownloadApkModal';
import { EditLogoModal } from './components/EditLogoModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { AdminAuthModal } from './components/AdminAuthModal';
import { LogoConfig, DEFAULT_LOGO_CONFIG } from './types/logo';
import {
  NotifikasiModal,
  ProfilAdminModal,
  PengumumanDetailModal,
  EditStatistikModal,
  GuruModal,
} from './components/MdtuModals';
import {
  INITIAL_SANTRI,
  INITIAL_GURU,
  INITIAL_TAHFIDZ_LEVELS,
  INITIAL_KELAS,
  INITIAL_JADWAL,
  INITIAL_EKSKUL,
  INITIAL_DOA,
  INITIAL_TRANSAKSI,
  INITIAL_STATUS_BAYAR,
  INITIAL_PENGUMUMAN,
  INITIAL_ADZAN,
  INITIAL_QARI,
  INITIAL_PRESTASI,
  INITIAL_ABSENSI,
  INITIAL_AGENDA_KALENDER,
  ALL_SURAHS,
} from './data/mdtuData';
import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_LOCATION_NAME } from './utils/prayerCalculator';
import {
  Santri,
  Guru,
  TahfidzLevel,
  KelasData,
  JadwalPelajaran,
  Ekstrakurikuler,
  DoaHarian,
  TransaksiKeuangan,
  StatusBayarSantri,
  PengaturanSuaraAdzan,
  QariMurottal,
  Pengumuman,
  Prestasi,
  AbsensiRecord,
  AgendaKalender,
} from './types/mdtu';

type NavigationTab =
  | 'dashboard'
  | 'absensi'
  | 'kalender'
  | 'ai'
  | 'santri'
  | 'jadwal'
  | 'keuangan'
  | 'kiblat'
  | 'sholat'
  | 'alquran'
  | 'doa'
  | 'adzan'
  | 'guru'
  | 'tahfidz'
  | 'prestasi'
  | 'lainnya';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');

  // Admin Access Control States
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return localStorage.getItem('mdtu_is_admin') === 'true';
    } catch {
      return false;
    }
  });

  const [adminPin, setAdminPin] = useState<string>(() => {
    try {
      return localStorage.getItem('mdtu_admin_pin') || '1926';
    } catch {
      return '1926';
    }
  });

  // Search Modal & Admin Auth Modal
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Database States with localStorage persistence
  const [santriList, setSantriList] = useState<Santri[]>(() => {
    try {
      const s = localStorage.getItem('mdtu_santri_list');
      return s ? JSON.parse(s) : INITIAL_SANTRI;
    } catch {
      return INITIAL_SANTRI;
    }
  });

  const [guruList, setGuruList] = useState<Guru[]>(() => {
    try {
      const g = localStorage.getItem('mdtu_guru_list');
      return g ? JSON.parse(g) : INITIAL_GURU;
    } catch {
      return INITIAL_GURU;
    }
  });

  const [tahfidzLevels, setTahfidzLevels] = useState<TahfidzLevel[]>(() => {
    try {
      const t = localStorage.getItem('mdtu_tahfidz_levels');
      return t ? JSON.parse(t) : INITIAL_TAHFIDZ_LEVELS;
    } catch {
      return INITIAL_TAHFIDZ_LEVELS;
    }
  });

  const [kelasList, setKelasList] = useState<KelasData[]>(() => {
    try {
      const k = localStorage.getItem('mdtu_kelas_list');
      return k ? JSON.parse(k) : INITIAL_KELAS;
    } catch {
      return INITIAL_KELAS;
    }
  });

  const [jadwalList, setJadwalList] = useState<JadwalPelajaran[]>(() => {
    try {
      const j = localStorage.getItem('mdtu_jadwal_list');
      if (j) {
        const parsed: JadwalPelajaran[] = JSON.parse(j);
        // Automatically sync all standard MDTU class times to 13.30 - 15.00
        const normalized = parsed.map((item) => {
          if (!item.jamMulai || item.jamMulai !== '13.30') {
            return { ...item, jamMulai: '13.30', jamSelesai: '15.00' };
          }
          if (!item.jamSelesai || item.jamSelesai !== '15.00') {
            return { ...item, jamMulai: '13.30', jamSelesai: '15.00' };
          }
          return item;
        });
        localStorage.setItem('mdtu_jadwal_list', JSON.stringify(normalized));
        return normalized;
      }
      return INITIAL_JADWAL;
    } catch {
      return INITIAL_JADWAL;
    }
  });

  const [ekskulList, setEkskulList] = useState<Ekstrakurikuler[]>(() => {
    try {
      const e = localStorage.getItem('mdtu_ekskul_list');
      return e ? JSON.parse(e) : INITIAL_EKSKUL;
    } catch {
      return INITIAL_EKSKUL;
    }
  });

  const [doaList, setDoaList] = useState<DoaHarian[]>(() => {
    try {
      const d = localStorage.getItem('mdtu_doa_list');
      return d ? JSON.parse(d) : INITIAL_DOA;
    } catch {
      return INITIAL_DOA;
    }
  });

  const [prestasiList, setPrestasiList] = useState<Prestasi[]>(() => {
    try {
      const p = localStorage.getItem('mdtu_prestasi_list');
      return p ? JSON.parse(p) : INITIAL_PRESTASI;
    } catch {
      return INITIAL_PRESTASI;
    }
  });

  // Keuangan States
  const [totalMasuk, setTotalMasuk] = useState<number>(() => {
    try {
      const m = localStorage.getItem('mdtu_kas_masuk');
      return m ? parseInt(m, 10) : 14850000;
    } catch {
      return 14850000;
    }
  });

  const [totalKeluar, setTotalKeluar] = useState<number>(() => {
    try {
      const k = localStorage.getItem('mdtu_kas_keluar');
      return k ? parseInt(k, 10) : 4350000;
    } catch {
      return 4350000;
    }
  });

  const [transaksiList, setTransaksiList] = useState<TransaksiKeuangan[]>(() => {
    try {
      const tr = localStorage.getItem('mdtu_transaksi_list');
      return tr ? JSON.parse(tr) : INITIAL_TRANSAKSI;
    } catch {
      return INITIAL_TRANSAKSI;
    }
  });

  const [statusBayarList, setStatusBayarList] = useState<StatusBayarSantri[]>(() => {
    try {
      const sb = localStorage.getItem('mdtu_status_bayar');
      return sb ? JSON.parse(sb) : INITIAL_STATUS_BAYAR;
    } catch {
      return INITIAL_STATUS_BAYAR;
    }
  });

  // Audio & GPS States
  const [adzanList, setAdzanList] = useState<PengaturanSuaraAdzan[]>(() => {
    try {
      const a = localStorage.getItem('mdtu_adzan_list');
      return a ? JSON.parse(a) : INITIAL_ADZAN;
    } catch {
      return INITIAL_ADZAN;
    }
  });

  const [qariList, setQariList] = useState<QariMurottal[]>(() => {
    try {
      const q = localStorage.getItem('mdtu_qari_list');
      return q ? JSON.parse(q) : INITIAL_QARI;
    } catch {
      return INITIAL_QARI;
    }
  });

  const [pengumuman, setPengumuman] = useState<Pengumuman>(() => {
    try {
      const p = localStorage.getItem('mdtu_pengumuman');
      return p ? JSON.parse(p) : INITIAL_PENGUMUMAN;
    } catch {
      return INITIAL_PENGUMUMAN;
    }
  });

  // Presensi & Kalender States
  const [absensiList, setAbsensiList] = useState<AbsensiRecord[]>(() => {
    try {
      const ab = localStorage.getItem('mdtu_absensi_list');
      return ab ? JSON.parse(ab) : INITIAL_ABSENSI;
    } catch {
      return INITIAL_ABSENSI;
    }
  });

  const [agendaList, setAgendaList] = useState<AgendaKalender[]>(() => {
    try {
      const ag = localStorage.getItem('mdtu_agenda_list');
      return ag ? JSON.parse(ag) : INITIAL_AGENDA_KALENDER;
    } catch {
      return INITIAL_AGENDA_KALENDER;
    }
  });

  // Cetak Laporan PDF & Unduh APK Modal States
  const [isCetakModalOpen, setIsCetakModalOpen] = useState(false);
  const [cetakParams, setCetakParams] = useState<{ kategori: string; tanggal: string }>({
    kategori: 'Semua',
    tanggal: new Date().toISOString().split('T')[0],
  });
  const [isDownloadApkModalOpen, setIsDownloadApkModalOpen] = useState(false);

  const [currentLat, setCurrentLat] = useState<number>(DEFAULT_LAT);
  const [currentLng, setCurrentLng] = useState<number>(DEFAULT_LNG);
  const [locationLabel, setLocationLabel] = useState<string>(DEFAULT_LOCATION_NAME);

  // Quick stats overrides
  const [customSantriTotal, setCustomSantriTotal] = useState<number>(() => {
    try {
      const s = localStorage.getItem('mdtu_santri_total');
      return s ? parseInt(s, 10) : 84;
    } catch {
      return 84;
    }
  });

  const [customKelasCount, setCustomKelasCount] = useState<number>(() => {
    try {
      const k = localStorage.getItem('mdtu_kelas_count');
      return k ? parseInt(k, 10) : 4;
    } catch {
      return 4;
    }
  });

  // Logo Configuration State
  const [logoConfig, setLogoConfig] = useState<LogoConfig>(() => {
    try {
      const saved = localStorage.getItem('mdtu_logo_config');
      return saved ? JSON.parse(saved) : DEFAULT_LOGO_CONFIG;
    } catch {
      return DEFAULT_LOGO_CONFIG;
    }
  });
  const [isEditLogoOpen, setIsEditLogoOpen] = useState(false);

  const handleSaveLogoConfig = (newConfig: LogoConfig) => {
    setLogoConfig(newConfig);
    try {
      localStorage.setItem('mdtu_logo_config', JSON.stringify(newConfig));
    } catch {}
  };

  // Modals
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isPengumumanOpen, setIsPengumumanOpen] = useState(false);
  const [isEditStatistikOpen, setIsEditStatistikOpen] = useState(false);

  // Guru Modal State
  const [isGuruModalOpen, setIsGuruModalOpen] = useState(false);
  const [editingGuru, setEditingGuru] = useState<Guru | null>(null);

  // Tahfidz Edit State
  const [editingTahfidz, setEditingTahfidz] = useState<TahfidzLevel | null>(null);
  const [editTahfidzTarget, setEditTahfidzTarget] = useState('');

  // Keyboard shortcut listener for Global Search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mdtu_is_admin', isAdmin.toString());
    } catch {}
  }, [isAdmin]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_admin_pin', adminPin);
    } catch {}
  }, [adminPin]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_santri_list', JSON.stringify(santriList));
    } catch {}
  }, [santriList]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_guru_list', JSON.stringify(guruList));
    } catch {}
  }, [guruList]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_tahfidz_levels', JSON.stringify(tahfidzLevels));
    } catch {}
  }, [tahfidzLevels]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_kelas_list', JSON.stringify(kelasList));
    } catch {}
  }, [kelasList]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_jadwal_list', JSON.stringify(jadwalList));
    } catch {}
  }, [jadwalList]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_ekskul_list', JSON.stringify(ekskulList));
    } catch {}
  }, [ekskulList]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_doa_list', JSON.stringify(doaList));
    } catch {}
  }, [doaList]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_prestasi_list', JSON.stringify(prestasiList));
    } catch {}
  }, [prestasiList]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_kas_masuk', totalMasuk.toString());
      localStorage.setItem('mdtu_kas_keluar', totalKeluar.toString());
      localStorage.setItem('mdtu_transaksi_list', JSON.stringify(transaksiList));
      localStorage.setItem('mdtu_status_bayar', JSON.stringify(statusBayarList));
    } catch {}
  }, [totalMasuk, totalKeluar, transaksiList, statusBayarList]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_pengumuman', JSON.stringify(pengumuman));
    } catch {}
  }, [pengumuman]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_absensi_list', JSON.stringify(absensiList));
    } catch {}
  }, [absensiList]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_agenda_list', JSON.stringify(agendaList));
    } catch {}
  }, [agendaList]);

  useEffect(() => {
    try {
      localStorage.setItem('mdtu_santri_total', customSantriTotal.toString());
      localStorage.setItem('mdtu_kelas_count', customKelasCount.toString());
    } catch {}
  }, [customSantriTotal, customKelasCount]);

  // Prompt Login Helper
  const handlePromptLoginAdmin = () => {
    setIsAuthModalOpen(true);
  };

  // Operations: Presensi / Absensi
  const handleUpdateAbsensi = (records: AbsensiRecord[]) => {
    setAbsensiList(records);
  };

  // Operations: Kalender & Agenda
  const handleAddAgenda = (newAgenda: Omit<AgendaKalender, 'id'>) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    const item: AgendaKalender = {
      ...newAgenda,
      id: `AG-${Date.now()}`,
    };
    setAgendaList((prev) => [item, ...prev]);
  };

  const handleDeleteAgenda = (id: string) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setAgendaList((prev) => prev.filter((ag) => ag.id !== id));
  };

  // Handler for Cetak Laporan
  const handleOpenCetakLaporan = (kategori: string = 'Semua', tanggal: string = new Date().toISOString().split('T')[0]) => {
    setCetakParams({ kategori, tanggal });
    setIsCetakModalOpen(true);
  };

  // Operations: Santri
  const handleAddSantri = (newSantri: Omit<Santri, 'id'>) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    const s: Santri = { ...newSantri, id: `S${Date.now()}` };
    setSantriList((prev) => [s, ...prev]);
    setCustomSantriTotal((c) => c + 1);
    setStatusBayarList((prev) => [
      {
        id: `B_${Date.now()}`,
        santriId: s.id,
        namaSantri: s.nama,
        kelas: s.kelas,
        bayarPendaftaran: false,
        bayarSppBulanIni: false,
        nominalSpp: 50000,
        tanggalTerakhirBayar: '-',
        catatan: 'Santri Baru',
      },
      ...prev,
    ]);
  };

  const handleUpdateSantri = (updated: Santri) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setSantriList((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
    setStatusBayarList((prev) =>
      prev.map((b) => (b.santriId === updated.id ? { ...b, namaSantri: updated.nama, kelas: updated.kelas } : b))
    );
  };

  const handleDeleteSantri = (id: string) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setSantriList((prev) => prev.filter((s) => s.id !== id));
    setStatusBayarList((prev) => prev.filter((b) => b.santriId !== id));
    setCustomSantriTotal((c) => Math.max(0, c - 1));
  };

  // Operations: Prestasi
  const handleAddPrestasi = (newPrestasi: Omit<Prestasi, 'id'>) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    const p: Prestasi = { ...newPrestasi, id: `PR${Date.now()}` };
    setPrestasiList((prev) => [p, ...prev]);
  };

  const handleUpdatePrestasi = (updated: Prestasi) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setPrestasiList((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const handleDeletePrestasi = (id: string) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setPrestasiList((prev) => prev.filter((p) => p.id !== id));
  };

  // Operations: Guru
  const handleSaveGuru = (guruData: Omit<Guru, 'id'>, id?: string) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    if (id) {
      setGuruList((prev) => prev.map((g) => (g.id === id ? { ...guruData, id } : g)));
    } else {
      const g: Guru = { ...guruData, id: `G${Date.now()}` };
      setGuruList((prev) => [...prev, g]);
    }
    setEditingGuru(null);
  };

  const handleDeleteGuru = (id: string) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setGuruList((prev) => prev.filter((g) => g.id !== id));
  };

  // Operations: Tahfidz
  const handleSaveTahfidzTarget = (levelId: string, newTarget: string) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setTahfidzLevels((prev) =>
      prev.map((t) => (t.id === levelId ? { ...t, suratTarget: newTarget } : t))
    );
    setEditingTahfidz(null);
  };

  // Operations: Jadwal & Kelas & Ekskul (Full CRUD for Admin)
  const handleUpdateWaliKelas = (kelasId: string, newWaliKelas: string) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setKelasList((prev) =>
      prev.map((k) => (k.id === kelasId ? { ...k, waliKelas: newWaliKelas } : k))
    );
  };

  const handleAddJadwal = (newJadwal: Omit<JadwalPelajaran, 'id'>) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setJadwalList((prev) => [...prev, { ...newJadwal, id: `J${Date.now()}` }]);
  };

  const handleUpdateJadwal = (updated: JadwalPelajaran) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setJadwalList((prev) => prev.map((j) => (j.id === updated.id ? updated : j)));
  };

  const handleDeleteJadwal = (id: string) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setJadwalList((prev) => prev.filter((j) => j.id !== id));
  };

  const handleAddKelas = (newKelas: Omit<KelasData, 'id'>) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setKelasList((prev) => [...prev, { ...newKelas, id: `K${Date.now()}` }]);
  };

  const handleUpdateKelas = (updated: KelasData) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setKelasList((prev) => prev.map((k) => (k.id === updated.id ? updated : k)));
  };

  const handleDeleteKelas = (id: string) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setKelasList((prev) => prev.filter((k) => k.id !== id));
  };

  const handleAddEkskul = (newEkskul: Omit<Ekstrakurikuler, 'id'>) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setEkskulList((prev) => [...prev, { ...newEkskul, id: `E${Date.now()}` }]);
  };

  const handleUpdateEkskul = (updated: Ekstrakurikuler) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setEkskulList((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));
  };

  const handleDeleteEkskul = (id: string) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setEkskulList((prev) => prev.filter((e) => e.id !== id));
  };

  // Operations: Keuangan
  const handleToggleSpp = (id: string, lunas: boolean) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setStatusBayarList((prev) =>
      prev.map((b) => {
        if (b.id === id) {
          const updated = {
            ...b,
            bayarSppBulanIni: lunas,
            tanggalTerakhirBayar: lunas ? '6 Oktober 2026' : '-',
            catatan: lunas ? 'Lunas SPP Oktober' : 'Belum bayar SPP',
          };
          if (lunas) {
            setTotalMasuk((m) => m + b.nominalSpp);
            setTransaksiList((t) => [
              {
                id: `TR${Date.now()}`,
                tipe: 'MASUK',
                kategori: 'SPP',
                judul: `Pembayaran SPP: ${b.namaSantri} (${b.kelas})`,
                nominal: b.nominalSpp,
                tanggal: '6 Oktober 2026',
                keterangan: 'Verifikasi Lunas oleh Admin',
              },
              ...t,
            ]);
          }
          return updated;
        }
        return b;
      })
    );
  };

  const handleTogglePendaftaran = (id: string, lunas: boolean) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setStatusBayarList((prev) =>
      prev.map((b) => (b.id === id ? { ...b, bayarPendaftaran: lunas } : b))
    );
  };

  const handleTambahTransaksi = (tx: Omit<TransaksiKeuangan, 'id'>) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    const newTx: TransaksiKeuangan = { ...tx, id: `TR${Date.now()}` };
    setTransaksiList((prev) => [newTx, ...prev]);
    if (tx.tipe === 'MASUK') {
      setTotalMasuk((prev) => prev + tx.nominal);
    } else {
      setTotalKeluar((prev) => prev + tx.nominal);
    }
  };

  // Operations: Doa
  const handleAddDoa = (newDoa: Omit<DoaHarian, 'id'>) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setDoaList((prev) => [{ ...newDoa, id: `D${Date.now()}` }, ...prev]);
  };

  const handleUpdateDoa = (updated: DoaHarian) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setDoaList((prev) => prev.map((d) => (d.id === updated.id ? updated : d)));
  };

  const handleDeleteDoa = (id: string) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setDoaList((prev) => prev.filter((d) => d.id !== id));
  };

  // Operations: Adzan & GPS
  const handleUpdateAdzan = (namaWaktu: string, namaSuara: string, aktif: boolean) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setAdzanList((prev) =>
      prev.map((a) => (a.namaWaktu === namaWaktu ? { ...a, namaSuara, aktif } : a))
    );
  };

  const handleSetQariAktif = (id: string) => {
    if (!isAdmin) {
      handlePromptLoginAdmin();
      return;
    }
    setQariList((prev) => prev.map((q) => ({ ...q, isAktif: q.id === id })));
  };

  const handleUpdateGPS = (lat: number, lng: number, label: string) => {
    setCurrentLat(lat);
    setCurrentLng(lng);
    setLocationLabel(label);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans antialiased pb-24 md:pb-10 transition-colors">
      {/* Top Header Identity with Clickable Home Logo & Admin Status */}
      <div className="max-w-6xl w-full mx-auto p-3 sm:p-5 space-y-3">
        <HeaderBanner
          notificationCount={3}
          onNotificationClick={() => setIsNotifOpen(true)}
          onProfileClick={() => setIsProfileOpen(true)}
          onLogoClick={() => setActiveTab('dashboard')}
          isAdmin={isAdmin}
          onToggleAdminLogin={() => setIsAuthModalOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenCetakLaporan={() => handleOpenCetakLaporan()}
          onOpenDownloadApk={() => setIsDownloadApkModalOpen(true)}
          onOpenEditLogo={() => setIsEditLogoOpen(true)}
          logoConfig={logoConfig}
        />

        <GreetingCard
          currentLat={currentLat}
          currentLng={currentLng}
          locationLabel={locationLabel}
          onUpdateGPS={handleUpdateGPS}
          onOpenSholat={() => setActiveTab('sholat')}
        />

        {/* KOLOM PENCARIAN (SEARCH BAR) AGAR LEBIH MUDAH MENGAKSES SEMUA FITUR */}
        <SearchBarSection
          onOpenSearchModal={() => setIsSearchOpen(true)}
          onQuickNavigate={(tab) => setActiveTab(tab as any)}
        />
      </div>

      {/* Main Container Area with Smooth Slide & Fade Transitions */}
      <main className="max-w-6xl w-full mx-auto px-3 sm:px-5 flex-1">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="space-y-5"
            >
              {/* Highlight Stat Cards */}
              <StatCardsSection
                santriCount={customSantriTotal}
                guruCount={guruList.length}
                tahfidzLevelCount={tahfidzLevels.length}
                kelasCount={customKelasCount}
                onCardClick={(tab) => {
                  if (tab === 'santri') setActiveTab('santri');
                  else if (tab === 'guru') setActiveTab('guru');
                  else if (tab === 'tahfidz') setActiveTab('tahfidz');
                  else if (tab === 'kelas') setActiveTab('jadwal');
                }}
              />

              {/* Main Dashboard Modules */}
              <DashboardContent
                santriCount={customSantriTotal}
                guruCount={guruList.length}
                tahfidzLevelCount={tahfidzLevels.length}
                kelasCount={customKelasCount}
                pengumuman={pengumuman}
                onNavigateTab={(tab) => setActiveTab(tab as any)}
                onOpenPengumumanModal={() => setIsPengumumanOpen(true)}
                onEditStatistik={() => {
                  if (!isAdmin) {
                    handlePromptLoginAdmin();
                    return;
                  }
                  setIsEditStatistikOpen(true);
                }}
                onOpenCetakLaporan={() => handleOpenCetakLaporan()}
                onOpenDownloadApk={() => setIsDownloadApkModalOpen(true)}
                onOpenEditLogo={() => setIsEditLogoOpen(true)}
              />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="space-y-4"
            >
              {/* Sub-view Header with Home / Back Navigation Button */}
              <div className="flex items-center justify-between bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-100/70 text-emerald-950 font-bold text-xs transition-colors group cursor-pointer"
                  title="Kembali ke Beranda (Home)"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Kembali ke Beranda</span>
                </button>

                <h2 className="text-xs sm:text-base font-extrabold text-emerald-950 uppercase tracking-tight text-center px-2 truncate">
                  {activeTab === 'absensi' && 'Presensi / Absensi Santri & Dewan Guru'}
                  {activeTab === 'kalender' && 'Kalender Hijriyah & Agenda Madrasah'}
                  {activeTab === 'ai' && 'Ustaz AI MDTU - Asisten Cerdas'}
                  {activeTab === 'santri' && 'Data Santri MDTU Nurul Huda'}
                  {activeTab === 'jadwal' && 'Jadwal, Kelas & Ekskul'}
                  {activeTab === 'keuangan' && 'Keuangan, SPP & Kas Diniyah'}
                  {activeTab === 'kiblat' && 'Arah Kiblat Digital (GPS)'}
                  {activeTab === 'sholat' && 'Jadwal Sholat Cikopo Panawa'}
                  {activeTab === 'alquran' && "Al-Qur'an 114 Surat & 30 Juz"}
                  {activeTab === 'doa' && 'Koleksi Doa Harian Santri'}
                  {activeTab === 'adzan' && 'Suara Adzan & Qari Murottal'}
                  {activeTab === 'guru' && 'Dewan Asatidz & Ustadzah'}
                  {activeTab === 'tahfidz' && "18 Level Tahfidz Al-Qur'an"}
                  {activeTab === 'prestasi' && 'Prestasi & Kejuaraan Santri'}
                  {activeTab === 'lainnya' && 'Daftar Menu & Modul Madrasah'}
                </h2>

                <div className="flex items-center gap-1.5">
                  {isAdmin ? (
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      <Unlock className="w-3 h-3 text-amber-700" />
                      Admin
                    </span>
                  ) : (
                    <button
                      onClick={handlePromptLoginAdmin}
                      className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-300 transition-colors cursor-pointer"
                      title="Klik untuk Masuk Admin"
                    >
                      <Lock className="w-3 h-3 text-slate-500" />
                      Login Admin
                    </button>
                  )}
                </div>
              </div>

              {/* Dynamic Module Content */}
              {activeTab === 'absensi' && (
                <AbsensiView
                  santriList={santriList}
                  guruList={guruList}
                  absensiList={absensiList}
                  isAdmin={isAdmin}
                  onUpdateAbsensi={handleUpdateAbsensi}
                  onOpenCetakLaporan={(kat, tgl) => handleOpenCetakLaporan(kat, tgl)}
                  onPromptLoginAdmin={handlePromptLoginAdmin}
                />
              )}

              {activeTab === 'kalender' && (
                <KalenderHijriyahView
                  agendaList={agendaList}
                  isAdmin={isAdmin}
                  onAddAgenda={handleAddAgenda}
                  onDeleteAgenda={handleDeleteAgenda}
                  onPromptLoginAdmin={handlePromptLoginAdmin}
                />
              )}

              {activeTab === 'ai' && <UstazAiView />}

              {activeTab === 'santri' && (
                <SantriView
                  santriList={santriList}
                  isAdmin={isAdmin}
                  onAddSantri={handleAddSantri}
                  onUpdateSantri={handleUpdateSantri}
                  onDeleteSantri={handleDeleteSantri}
                  onPromptLoginAdmin={handlePromptLoginAdmin}
                />
              )}

              {activeTab === 'prestasi' && (
                <PrestasiView
                  prestasiList={prestasiList}
                  isAdmin={isAdmin}
                  onAddPrestasi={handleAddPrestasi}
                  onUpdatePrestasi={handleUpdatePrestasi}
                  onDeletePrestasi={handleDeletePrestasi}
                  onPromptLoginAdmin={handlePromptLoginAdmin}
                />
              )}

              {activeTab === 'jadwal' && (
                <JadwalKelasView
                  jadwalList={jadwalList}
                  kelasList={kelasList}
                  ekskulList={ekskulList}
                  guruList={guruList}
                  isAdmin={isAdmin}
                  onAddJadwal={handleAddJadwal}
                  onUpdateJadwal={handleUpdateJadwal}
                  onDeleteJadwal={handleDeleteJadwal}
                  onUpdateWaliKelas={handleUpdateWaliKelas}
                  onAddKelas={handleAddKelas}
                  onUpdateKelas={handleUpdateKelas}
                  onDeleteKelas={handleDeleteKelas}
                  onAddEkskul={handleAddEkskul}
                  onUpdateEkskul={handleUpdateEkskul}
                  onDeleteEkskul={handleDeleteEkskul}
                  onPromptLoginAdmin={handlePromptLoginAdmin}
                />
              )}

              {activeTab === 'keuangan' && (
                <KeuanganView
                  totalMasuk={totalMasuk}
                  totalKeluar={totalKeluar}
                  statusBayarList={statusBayarList}
                  transaksiList={transaksiList}
                  isAdmin={isAdmin}
                  onToggleSpp={handleToggleSpp}
                  onTogglePendaftaran={handleTogglePendaftaran}
                  onTambahTransaksi={handleTambahTransaksi}
                  onUpdateSaldoManual={(m, k) => {
                    if (!isAdmin) {
                      handlePromptLoginAdmin();
                      return;
                    }
                    setTotalMasuk(m);
                    setTotalKeluar(k);
                  }}
                  onPromptLoginAdmin={handlePromptLoginAdmin}
                />
              )}

              {activeTab === 'kiblat' && (
                <ArahKiblatView
                  currentLat={currentLat}
                  currentLng={currentLng}
                  locationLabel={locationLabel}
                  onUpdateGPS={handleUpdateGPS}
                />
              )}

              {activeTab === 'sholat' && (
                <JadwalSholatView
                  currentLat={currentLat}
                  currentLng={currentLng}
                  locationLabel={locationLabel}
                  onUpdateGPS={handleUpdateGPS}
                />
              )}

              {activeTab === 'alquran' && <AlquranView />}

              {activeTab === 'doa' && (
                <DoaHarianView
                  doaList={doaList}
                  isAdmin={isAdmin}
                  onAddDoa={handleAddDoa}
                  onUpdateDoa={handleUpdateDoa}
                  onDeleteDoa={handleDeleteDoa}
                  onPromptLoginAdmin={handlePromptLoginAdmin}
                />
              )}

              {activeTab === 'adzan' && (
                <AdzanMurottalView
                  adzanList={adzanList}
                  qariList={qariList}
                  onUpdateAdzan={handleUpdateAdzan}
                  onSetQariAktif={handleSetQariAktif}
                />
              )}

              {/* GURU & DEWAN ASATIDZ VIEW */}
              {activeTab === 'guru' && (
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-amber-600" />
                        Dewan Asatidz &amp; Pengajar MDTU Nurul Huda
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Total {guruList.length} asatidz dan ustadzah aktif pengampu kurikulum diniyah
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        if (!isAdmin) {
                          handlePromptLoginAdmin();
                          return;
                        }
                        setEditingGuru(null);
                        setIsGuruModalOpen(true);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all self-start sm:self-auto cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Tambah Guru {isAdmin ? '(Admin)' : ''}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {guruList.map((g) => (
                      <div
                        key={g.id}
                        className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3.5 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 border border-amber-300">
                            <GraduationCap className="w-6 h-6 text-amber-700" />
                          </div>
                          <div className="space-y-0.5 min-w-0">
                            <h4 className="font-bold text-sm text-slate-900 truncate">{g.nama}</h4>
                            <p className="text-xs text-emerald-800 font-semibold truncate">{g.jabatan}</p>
                            <p className="text-[11px] text-slate-500 truncate">{g.mataPelajaran || 'Pengajar Diniyah'}</p>
                            {g.kontak && (
                              <p className="text-[10px] text-slate-400">Kontak: {g.kontak}</p>
                            )}
                          </div>
                        </div>
                        {isAdmin && (
                          <div className="flex items-center gap-1 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => {
                                setEditingGuru(g);
                                setIsGuruModalOpen(true);
                              }}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors cursor-pointer"
                              title="Edit Asatidz"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Hapus data ${g.nama}?`)) {
                                  handleDeleteGuru(g.id);
                                }
                              }}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                              title="Hapus Asatidz"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAHFIDZ 18 LEVEL VIEW */}
              {activeTab === 'tahfidz' && (
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-emerald-700" />
                        Kurikulum 18 Tingkat Tahfidz Al-Qur&apos;an
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Target hafalan berjenjang santri dari Juz 30 hingga Juz 28 dan Juz 1-2
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {tahfidzLevels.map((lvl) => (
                      <div
                        key={lvl.id}
                        className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-2 hover:shadow-sm transition-all relative group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-black text-emerald-900 text-sm">{lvl.levelName}</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {lvl.keterangan}
                          </span>
                        </div>
                        {editingTahfidz?.id === lvl.id ? (
                          <div className="space-y-2 pt-1">
                            <input
                              type="text"
                              value={editTahfidzTarget}
                              onChange={(e) => setEditTahfidzTarget(e.target.value)}
                              className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-emerald-500 focus:outline-none"
                            />
                            <div className="flex items-center gap-1.5 justify-end text-[10px]">
                              <button
                                onClick={() => setEditingTahfidz(null)}
                                className="px-2 py-1 rounded bg-slate-100 font-bold text-slate-600 cursor-pointer"
                              >
                                Batal
                              </button>
                              <button
                                onClick={() => handleSaveTahfidzTarget(lvl.id, editTahfidzTarget)}
                                className="px-2.5 py-1 rounded bg-emerald-700 font-bold text-white cursor-pointer"
                              >
                                Simpan
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between gap-2 pt-1">
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                              Target: {lvl.suratTarget}
                            </p>
                            {isAdmin && (
                              <button
                                onClick={() => {
                                  setEditingTahfidz(lvl);
                                  setEditTahfidzTarget(lvl.suratTarget);
                                }}
                                className="p-1 rounded text-slate-400 hover:text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                title="Edit Target Hafalan"
                              >
                                <Edit className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MENU LAINNYA VIEW */}
              {activeTab === 'lainnya' && (
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    <h3 className="text-base font-bold text-slate-900">Seluruh Menu &amp; Pengaturan Madrasah</h3>
                    <p className="text-xs text-slate-500">Pintasan ke seluruh modul sistem informasi MDTU Nurul Huda</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { id: 'absensi', title: 'Presensi / Absensi', sub: 'TPQ, A, B, C & Asatidz', icon: UserCheck, color: 'text-emerald-700' },
                      { id: 'kalender', title: 'Kalender Hijriyah', sub: 'Penanggalan & Agenda MDTU', icon: Moon, color: 'text-teal-700' },
                      { id: 'prestasi', title: 'Prestasi Santri', sub: 'Daftar Kejuaraan & MHQ', icon: Award, color: 'text-amber-500' },
                      { id: 'cetak-pdf', title: 'Cetak Laporan PDF', sub: 'Kop Resmi & Dokumen', icon: Printer, color: 'text-emerald-800' },
                      { id: 'download-apk', title: 'Unduh APK / App', sub: 'Android, iPhone & PC', icon: Smartphone, color: 'text-teal-600' },
                      { id: 'ai', title: 'Ustaz AI (Gemini Assistant)', sub: 'Konsultasi Fiqih, Soal & RPP', icon: Sparkles, color: 'text-amber-500' },
                      { id: 'alquran', title: 'Al-Qur\'an Digital', sub: '114 Surat & 30 Juz Mushaf', icon: Book, color: 'text-emerald-700' },
                      { id: 'sholat', title: 'Jadwal Sholat Garut', sub: 'Otomatis Sesuai GPS', icon: Clock, color: 'text-emerald-600' },
                      { id: 'kiblat', title: 'Kompas Arah Kiblat', sub: '295° Azimuth Ka\'bah', icon: Compass, color: 'text-indigo-600' },
                      { id: 'doa', title: 'Koleksi Doa Harian', sub: 'Doa Hafalan Santri', icon: Heart, color: 'text-rose-600' },
                      { id: 'adzan', title: 'Suara Adzan & Murottal', sub: 'Kelola Audio Muadzin & Qari', icon: Volume2, color: 'text-teal-600' },
                      { id: 'guru', title: 'Dewan Guru & Tendik', sub: `${guruList.length} Asatidz & Ustadzah`, icon: GraduationCap, color: 'text-amber-600' },
                      { id: 'tahfidz', title: '18 Level Tahfidz', sub: 'Tingkatan Hafalan Al-Qur\'an', icon: BookOpen, color: 'text-emerald-800' },
                    ].map((m) => {
                      const IconCmp = m.icon;
                      return (
                        <div
                          key={m.id}
                          onClick={() => {
                            if (m.id === 'cetak-pdf') {
                              handleOpenCetakLaporan();
                            } else if (m.id === 'download-apk') {
                              setIsDownloadApkModalOpen(true);
                            } else {
                              setActiveTab(m.id as any);
                            }
                          }}
                          className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs hover:border-emerald-400 hover:shadow-sm cursor-pointer flex items-center gap-3.5 transition-all"
                        >
                          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200">
                            <IconCmp className={`w-5 h-5 ${m.color}`} />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs sm:text-sm text-slate-900">{m.title}</h4>
                            <p className="text-[11px] text-slate-500">{m.sub}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Persistent Bottom Navigation Bar (Mobile / Responsive) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-2 py-1.5 md:hidden">
        <div className="max-w-md mx-auto flex items-center justify-around text-[10px] font-bold">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center gap-1 p-1 rounded-xl transition-colors cursor-pointer ${
              activeTab === 'dashboard' ? 'text-emerald-700' : 'text-slate-400'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Beranda</span>
          </button>
          <button
            onClick={() => setActiveTab('absensi')}
            className={`flex flex-col items-center gap-1 p-1 rounded-xl transition-colors cursor-pointer ${
              activeTab === 'absensi' ? 'text-emerald-700' : 'text-slate-400'
            }`}
          >
            <UserCheck className="w-5 h-5" />
            <span>Presensi</span>
          </button>
          <button
            onClick={() => setActiveTab('kalender')}
            className={`flex flex-col items-center gap-1 p-1 rounded-xl transition-colors cursor-pointer ${
              activeTab === 'kalender' ? 'text-teal-700' : 'text-slate-400'
            }`}
          >
            <Moon className="w-5 h-5" />
            <span>Kalender</span>
          </button>
          <button
            onClick={() => setActiveTab('prestasi')}
            className={`flex flex-col items-center gap-1 p-1 rounded-xl transition-colors cursor-pointer ${
              activeTab === 'prestasi' ? 'text-amber-600 font-black' : 'text-slate-400'
            }`}
          >
            <Award className="w-5 h-5 text-amber-500" />
            <span>Prestasi</span>
          </button>
          <button
            onClick={() => setActiveTab('santri')}
            className={`flex flex-col items-center gap-1 p-1 rounded-xl transition-colors cursor-pointer ${
              activeTab === 'santri' ? 'text-emerald-700' : 'text-slate-400'
            }`}
          >
            <Users className="w-5 h-5" />
            <span>Santri</span>
          </button>
          <button
            onClick={() => setActiveTab('lainnya')}
            className={`flex flex-col items-center gap-1 p-1 rounded-xl transition-colors cursor-pointer ${
              activeTab === 'lainnya' ? 'text-emerald-700' : 'text-slate-400'
            }`}
          >
            <MoreHorizontal className="w-5 h-5" />
            <span>Lainnya</span>
          </button>
        </div>
      </nav>

      {/* Global Modals & Dialogs */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        santriList={santriList}
        guruList={guruList}
        doaList={doaList}
        surahList={ALL_SURAHS}
        jadwalList={jadwalList}
        prestasiList={prestasiList}
        onSelectResult={(targetTab) => {
          setActiveTab(targetTab as any);
          setIsSearchOpen(false);
        }}
        onOpenEditLogo={() => setIsEditLogoOpen(true)}
      />

      <AdminAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        isAdmin={isAdmin}
        adminPin={adminPin}
        onLoginSuccess={() => {
          setIsAdmin(true);
        }}
        onLogout={() => {
          setIsAdmin(false);
        }}
        onUpdatePin={(newPin) => {
          setAdminPin(newPin);
        }}
      />

      <NotifikasiModal isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />

      <ProfilAdminModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onEditStatistik={() => {
          if (!isAdmin) {
            handlePromptLoginAdmin();
            return;
          }
          setIsEditStatistikOpen(true);
        }}
        onOpenEditLogo={() => setIsEditLogoOpen(true)}
      />

      <PengumumanDetailModal
        isOpen={isPengumumanOpen}
        onClose={() => setIsPengumumanOpen(false)}
        pengumuman={pengumuman}
        onUpdatePengumuman={(updated) => {
          if (!isAdmin) {
            handlePromptLoginAdmin();
            return;
          }
          setPengumuman(updated);
        }}
      />

      <EditStatistikModal
        isOpen={isEditStatistikOpen}
        onClose={() => setIsEditStatistikOpen(false)}
        currentSantri={customSantriTotal}
        currentKelas={customKelasCount}
        onSave={(s, k) => {
          if (!isAdmin) {
            handlePromptLoginAdmin();
            return;
          }
          setCustomSantriTotal(s);
          setCustomKelasCount(k);
        }}
      />

      {/* Edit & Kustomisasi Logo Madrasah Modal */}
      <EditLogoModal
        isOpen={isEditLogoOpen}
        onClose={() => setIsEditLogoOpen(false)}
        currentConfig={logoConfig}
        onSaveConfig={handleSaveLogoConfig}
      />

      <GuruModal
        isOpen={isGuruModalOpen}
        onClose={() => {
          setIsGuruModalOpen(false);
          setEditingGuru(null);
        }}
        initialGuru={editingGuru}
        onSave={handleSaveGuru}
      />

      {/* Cetak Laporan PDF Modal */}
      <CetakLaporanModal
        isOpen={isCetakModalOpen}
        onClose={() => setIsCetakModalOpen(false)}
        santriList={santriList}
        guruList={guruList}
        absensiList={absensiList}
        transaksiList={transaksiList}
        statusBayarList={statusBayarList}
        prestasiList={prestasiList}
        initialKategori={cetakParams.kategori}
        initialTanggal={cetakParams.tanggal}
      />

      {/* Unduh APK & PWA Multi-Platform Modal */}
      <DownloadApkModal
        isOpen={isDownloadApkModalOpen}
        onClose={() => setIsDownloadApkModalOpen(false)}
        logoConfig={logoConfig}
      />
    </div>
  );
}
