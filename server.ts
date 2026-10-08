import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Helper to get Gemini client
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check
app.get('/api/health', (req, res) => {
  const hasKey = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY');
  res.json({
    status: 'ok',
    appName: 'MDTU Nurul Huda Cikopo Panawa',
    hasApiKey: hasKey,
    model: 'gemini-3.8-flash',
  });
});

// Fallback response generator for Ustaz AI
function generateLocalUstazResponse(prompt: string, type = 'chat'): string {
  const p = prompt.toLowerCase();
  if (type === 'soal' || p.includes('soal') || p.includes('kuis') || p.includes('ujian')) {
    return `**PAKET SOAL EVALUASI SANTRI MDTU (Tingkat Ula)**
*Mata Pelajaran: Fiqih Ibadah & Al-Qur'an Tajwid*

**A. Pilihan Ganda (Pilihlah salah satu jawaban yang paling tepat):**
1. Rukun wudhu yang pertama kali dilakukan bersamaan dengan membasuh muka adalah...
   a. Membasuh telapak tangan
   b. Membaca niat di dalam hati
   c. Mengusap sebagian kepala
   *Kunci Jawaban: b*

2. Apabila nun sukun (نْ) bertemu dengan huruf 'Ain (ع), maka hukum bacaannya adalah...
   a. Idzhar Halqi (dibaca jelas)
   b. Idgham Bighunnah (dibaca dengung)
   c. Ikhfa Haqiqi (dibaca samar)
   *Kunci Jawaban: a*

3. Sholat fardhu yang berjumlah 3 rakaat dan dikerjakan setelah terbenamnya matahari adalah sholat...
   a. Dzuhur
   b. Ashar
   c. Maghrib
   *Kunci Jawaban: c*

**B. Soal Uraian / Esai:**
1. Sebutkan 3 hal yang dapat membatalkan wudhu santri!
   *Kunci: Keluarnya sesuatu dari dua jalan (qubul/dubur), hilang akal/tidur lelap, bersentuhan kulit laki-laki dan perempuan bukan mahram.*
2. Tuliskan lafadz niat sholat Subuh beserta artinya!
   *Kunci: Usholli fardhash-subhi rak'ataini mustaqbilal-qiblati adaa-an lillahi ta'ala.*`;
  }

  if (type === 'rpp' || p.includes('rpp') || p.includes('silabus')) {
    return `**RENCANA PELAKSANAAN PEMBELAJARAN (RPP) DINIYAH**
*Satuan Pendidikan: MDTU Nurul Huda Cikopo Panawa*
*Mata Pelajaran: Fiqih Ibadah / Tajwid*
*Alokasi Waktu: 2 x 35 Menit (1 Pertemuan)*

**1. Tujuan Pembelajaran:**
- Santri memahami syarat sah, rukun, dan sunnah sholat dengan benar.
- Santri mampu mempraktikkan gerakan sholat fardhu secara tertib dan thuma'ninah.

**2. Langkah-Langkah Pembelajaran:**
- **Pendahuluan (10 menit):** Pembacaan doa sebelum belajar bersama, tilawah surat pendek Juz 'Amma, dan apersepsi materi pekan lalu.
- **Kegiatan Inti (45 menit):**
  1. Penjelasan ustadz mengenai bacaan tasyahhud akhir dan duduk iftirasy/tawarruk.
  2. Demonstrasi peragaan sholat oleh santri teladan di hadapan kelas.
  3. Praktik bergantian per regu dengan bimbingan dan koreksi langsung wali kelas.
- **Penutup (15 menit):** Evaluasi lisan, mutaba'ah hafalan doa harian, dan doa kaffaratul majelis.

**3. Penilaian:**
- Tes lisan bacaan sholat dan penilaian praktik kesempurnaan gerakan.`;
  }

  if (type === 'surat' || p.includes('surat') || p.includes('pengumuman')) {
    return `**DRAFT SURAT PEMBERITAHUAN WALI SANTRI MDTU**
*Nomor: 042/MDTU-NH/X/2026*
*Perihal: Pemberitahuan Kegiatan Halaqah Subuh & Evaluasi Diniyah*

Kepada Yth.
Bapak/Ibu Orang Tua / Wali Santri MDTU Nurul Huda
Di Tempat

*Assalamu'alaikum Warahmatullahi Wabarakatuh,*

Puji dan syukur kita panjatkan ke hadirat Allah SWT atas limpahan rahmat-Nya. Shalawat serta salam senantiasa tercurah kepada baginda Rasulullah SAW.

Sehubungan dengan agenda akademik semester ini, kami menginformasikan hal-hal sebagai berikut:
1. **Kegiatan Ngaji Subuh (Halaqah Tahfidz):** Diadakan ba'da sholat Subuh hingga pukul 05.30 WIB di Masjid MDTU Nurul Huda Cikopo Panawa.
2. **Evaluasi Hafalan:** Santri diharapkan menyempurnakan setoran hafalan Juz 30 kepada ustadz wali kelas.
3. **Administrasi SPP & Infaq:** Mohon bagi wali santri yang belum menyelesaikan infaq bulanan dapat menyelesaikannya melalui bagian administrasi.

Demikian surat pemberitahuan ini kami sampaikan. Atas perhatian dan kerjasamanya, kami haturkan *jazakumullah khairan katsiran*.

*Wassalamu'alaikum Warahmatullahi Wabarakatuh.*

**Kepala MDTU Nurul Huda Cikopo Panawa**
*(Ust. Ahmad Syarifudin, S.Pd.I)*`;
  }

  return `*Assalamu'alaikum Warahmatullahi Wabarakatuh.*

Alhamdulillah, terima kasih atas pertanyaannya.

**Materi Pokok & Fiqih Ibadah Santri MDTU:**
1. **Adab Menuntut Ilmu:** Hendaknya santri mengawali belajar dengan bersuci (wudhu), berniat ikhlas karena Allah, dan bersikap hormat tawadhu' kepada guru.
2. **Pembiasaan Ibadah Harian:** Membiasakan sholat fardhu berjamaah di awal waktu, menjaga wudhu, dan melazimkan dzikir serta doa harian.
3. **Muroja'ah Al-Qur'an:** Menjaga hafalan ayat-ayat suci dengan metode tikrar (pengulangan berulang kali) setiap ba'da Maghrib dan ba'da Subuh.

*Ada materi fiqih, pembuatan paket soal ujian santri, atau penyusunan modul RPP yang ingin kami bantu rancang?*`;
}

// Ustaz AI Chat API
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { prompt, type = 'chat' } = req.body;
    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Use intelligent pedagogical fallback
      const reply = generateLocalUstazResponse(prompt, type);
      res.json({ reply, source: 'local' });
      return;
    }

    const systemInstruction = `Anda adalah "Ustaz AI MDTU", asisten cerdas resmi Madrasah Diniyah Takmiliyah Ula (MDTU) Nurul Huda Cikopo Panawa, Garut.
Tugas Anda:
1. Menjawab pertanyaan seputar Fiqih Ibadah dasar (madzhab Syafi'i), Aqidah Akhlak, Tajwid Al-Qur'an, Hadits, dan Bahasa Arab dengan bahasa yang santun, jelas, dan mendidik.
2. Membantu ustadz/ustadzah menyusun paket soal kuis/ujian pilihan ganda & esai santri beserta kunci jawaban lengkap.
3. Membantu membuat Rencana Pelaksanaan Pembelajaran (RPP) dan silabus pengajaran madrasah diniyah.
4. Membantu membuat draft surat resmi pengumuman wali santri dan undangan kegiatan diniyah.
Format jawaban dengan rapi menggunakan poin-poin tebal dan bahasa Indonesia yang mudah dipahami santri maupun dewan guru.`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const reply = response.text || generateLocalUstazResponse(prompt, type);
      res.json({ reply, source: 'gemini' });
    } catch (apiErr) {
      console.warn('Gemini API call failed, using local pedagogical response:', apiErr);
      const reply = generateLocalUstazResponse(prompt, type);
      res.json({ reply, source: 'fallback' });
    }
  } catch (error: any) {
    console.error('Error in /api/ai/chat:', error);
    res.status(500).json({
      error: error?.message || 'Internal server error',
      reply: generateLocalUstazResponse('fiqih ibadah'),
    });
  }
});

// In-memory cache for Quran Kemenag RI data
const quranSuratListCache: { data: any; timestamp: number } = { data: null, timestamp: 0 };
const quranSuratDetailCache: Map<number, { data: any; timestamp: number }> = new Map();
const quranPageCache: Map<number, { data: any; timestamp: number }> = new Map();

// API: Get list of all 114 Surahs (Standar Kemenag RI)
app.get('/api/quran/surat', async (req, res) => {
  try {
    const now = Date.now();
    if (quranSuratListCache.data && now - quranSuratListCache.timestamp < 3600000) {
      return res.json(quranSuratListCache.data);
    }
    const response = await fetch('https://equran.id/api/v2/surat');
    if (!response.ok) throw new Error('Failed to fetch from equran.id');
    const json = await response.json();
    quranSuratListCache.data = json;
    quranSuratListCache.timestamp = now;
    res.json(json);
  } catch (error: any) {
    console.error('Error fetching surah list:', error);
    res.status(500).json({ error: "Gagal mengambil daftar surat Al-Qur'an" });
  }
});

// API: Get full detail of Surah with all verses, Latin, and Indonesian translation (Standar Kemenag RI)
app.get('/api/quran/surat/:nomor', async (req, res) => {
  try {
    const nomor = parseInt(req.params.nomor, 10);
    if (isNaN(nomor) || nomor < 1 || nomor > 114) {
      return res.status(400).json({ error: 'Nomor surat harus antara 1 dan 114' });
    }
    const now = Date.now();
    const cached = quranSuratDetailCache.get(nomor);
    if (cached && now - cached.timestamp < 3600000) {
      return res.json(cached.data);
    }

    let json: any = null;

    // 1. Primary Kemenag endpoint (equran.id)
    try {
      const response = await fetch(`https://equran.id/api/v2/surat/${nomor}`, {
        signal: AbortSignal.timeout(6000),
      });
      if (response.ok) {
        const parsed = await response.json();
        if (parsed?.data?.ayat) {
          json = parsed;
        }
      }
    } catch (e1: any) {
      console.warn(`Primary equran.id mirror failed for surah ${nomor}:`, e1?.message);
    }

    // 2. Secondary mirror: api.quran.gading.dev
    if (!json || !json.data) {
      try {
        const altRes = await fetch(`https://api.quran.gading.dev/surah/${nomor}`, {
          signal: AbortSignal.timeout(6000),
        });
        if (altRes.ok) {
          const altJson = await altRes.json();
          if (altJson?.data?.verses) {
            json = {
              code: 200,
              message: 'Data retrieved successfully (mirror Kemenag)',
              data: {
                nomor: altJson.data.number,
                namaLatin: altJson.data.name?.transliteration?.id || altJson.data.name?.transliteration?.en,
                nama: altJson.data.name?.short,
                arti: altJson.data.name?.translation?.id,
                jumlahAyat: altJson.data.numberOfVerses,
                tempatTurun: altJson.data.revelation?.id === 'Makkiyyah' ? 'Mekkah' : 'Madinah',
                deskripsi: altJson.data.tafsir?.id || '',
                audioFull: {
                  '05': `https://equran.nos.wjv-1.neo.id/audio-full/Misyari-Rasyid-Al-Afasi/${nomor.toString().padStart(3, '0')}.mp3`,
                },
                ayat: altJson.data.verses.map((v: any) => ({
                  nomorAyat: v.number?.inSurah,
                  teksArab: v.text?.arab,
                  teksLatin: v.text?.transliteration?.en || '',
                  teksIndonesia: v.translation?.id || '',
                  audio: {
                    '05': v.audio?.primary || '',
                  },
                })),
              },
            };
          }
        }
      } catch (e2: any) {
        console.warn(`Secondary mirror failed for surah ${nomor}:`, e2?.message);
      }
    }

    if (json && json.data) {
      quranSuratDetailCache.set(nomor, { data: json, timestamp: now });
      return res.json(json);
    }

    res.status(502).json({ error: `Gagal memuat ayat surat nomor ${nomor} dari server Kemenag RI` });
  } catch (error: any) {
    console.error(`Error fetching surah ${req.params.nomor}:`, error);
    res.status(500).json({ error: `Gagal mengambil ayat surat nomor ${req.params.nomor}` });
  }
});

// API: Get verses for a specific page (1 - 604)
app.get('/api/quran/page/:page', async (req, res) => {
  try {
    const page = parseInt(req.params.page, 10);
    if (isNaN(page) || page < 1 || page > 604) {
      return res.status(400).json({ error: 'Halaman harus antara 1 dan 604' });
    }
    const now = Date.now();
    const cached = quranPageCache.get(page);
    if (cached && now - cached.timestamp < 3600000) {
      return res.json(cached.data);
    }
    const response = await fetch(`https://api.quran.com/api/v4/verses/by_page/${page}?language=id&words=false&translations=33&fields=text_uthmani,chapter_id`);
    if (!response.ok) throw new Error(`Failed to fetch page ${page}`);
    const json = await response.json();
    quranPageCache.set(page, { data: json, timestamp: now });
    res.json(json);
  } catch (error: any) {
    console.error(`Error fetching page ${req.params.page}:`, error);
    res.status(500).json({ error: `Gagal mengambil ayat halaman ${req.params.page}` });
  }
});

// Setup Vite middleware for development
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`MDTU Nurul Huda App server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
