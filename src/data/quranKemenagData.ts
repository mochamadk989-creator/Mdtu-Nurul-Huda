// Data Al-Qur'an Standar Resmi Kementerian Agama Republik Indonesia (Kemenag RI)
// Sumber: Lajnah Pentashihan Mushaf Al-Qur'an (LPMQ) Balitbang Diklat Kemenag RI
// Berisi ayat-ayat lengkap Rasm Utsmani, transliterasi Latin SKB Kemenag, dan terjemahan resmi.

export interface KemenagAyat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio?: Record<string, string>;
}

export interface KemenagSurah {
  nomor: number;
  namaLatin: string;
  namaArab: string;
  arti: string;
  jumlahAyat: number;
  tempatTurun: string;
  deskripsi?: string;
  audioFull?: Record<string, string>;
  ayat: KemenagAyat[];
}

export const KEMENAG_RI_SURAHS: Record<number, KemenagSurah> = {
  "1": {
    "nomor": 1,
    "namaLatin": "Al-Fatihah",
    "namaArab": "الفاتحة",
    "arti": "Pembukaan",
    "jumlahAyat": 7,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat <i>Al Faatihah</i> (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap  diantara surat-surat yang ada dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat ini disebut <i>Al Faatihah</i> (Pembukaan), karena dengan surat inilah dibuka dan dimulainya Al Quran. Dinamakan <i>Ummul Quran</i> (induk Al Quran) atau <i>Ummul Kitaab</i> (induk Al Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang.<br> Dinamakan pula <i>As Sab'ul matsaany</i> (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/001.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/001.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/001.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/001.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/001.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/001.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
        "teksLatin": "Bismillāhir-raḥmānir-raḥīm(i). ",
        "teksIndonesia": "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/001001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ",
        "teksLatin": "Al-ḥamdu lillāhi rabbil-‘ālamīn(a). ",
        "teksIndonesia": "Segala puji bagi Allah, Tuhan semesta alam",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/001002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "الرَّحْمٰنِ الرَّحِيْمِۙ",
        "teksLatin": "Ar-raḥmānir-raḥīm(i). ",
        "teksIndonesia": "Yang Maha Pengasih lagi Maha Penyayang,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/001003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "مٰلِكِ يَوْمِ الدِّيْنِۗ",
        "teksLatin": "Māliki yaumid-dīn(i). ",
        "teksIndonesia": "Pemilik hari Pembalasan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/001004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ",
        "teksLatin": "Iyyāka na‘budu wa iyyāka nasta‘īn(u), ",
        "teksIndonesia": "Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/001005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَۙ",
        "teksLatin": "Ihdinaṣ-ṣirāṭal-mustaqīm(a). ",
        "teksIndonesia": "Bimbinglah kami ke jalan yang lurus,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/001006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ ࣖ",
        "teksLatin": "Ṣirāṭal-lażīna an‘amta ‘alaihim, gairil-magḍūbi ‘alaihim wa laḍ-ḍāllīn(a). ",
        "teksIndonesia": "(yaitu) jalan orang-orang yang telah Engkau beri nikmat, bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) orang-orang yang sesat.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/001007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/001007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/001007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/001007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/001007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/001007.mp3"
        }
      }
    ]
  },
  "67": {
    "nomor": 67,
    "namaLatin": "Al-Mulk",
    "namaArab": "الملك",
    "arti": "Kerajaan",
    "jumlahAyat": 30,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 30 ayat, termasuk golongan surat-surat  Makkiyah, diturunkan sesudah Ath Thuur.<br> Nama <i>Al Mulk</i> diambil dari kata <i>Al Mulk</i> yang terdapat pada ayat pertama surat ini yang artinya kerajaan atau kekuasaan. Dinamai pula surat ini dengan <i>At Tabaarak</i> (Maha Suci).",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/067.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/067.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/067.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/067.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/067.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/067.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "تَبٰرَكَ الَّذِيْ بِيَدِهِ الْمُلْكُۖ وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌۙ",
        "teksLatin": "Tabārakal-lażī biyadihil-mulk(u), wa huwa ‘alā kulli syai'in qadīr(un).",
        "teksIndonesia": "Maha Berkah Zat yang menguasai (segala) kerajaan dan Dia Maha Kuasa atas segala sesuatu,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": " ۨالَّذِيْ خَلَقَ الْمَوْتَ وَالْحَيٰوةَ لِيَبْلُوَكُمْ اَيُّكُمْ اَحْسَنُ عَمَلًاۗ وَهُوَ الْعَزِيْزُ الْغَفُوْرُۙ",
        "teksLatin": "Allażī khalaqal-mauta wal-ḥayāta liyabluwakum ayyukum aḥsanu ‘amalā(n), wa huwal-‘azīzul-gafūr(u).",
        "teksIndonesia": "yaitu yang menciptakan kematian dan kehidupan untuk menguji kamu, siapa di antara kamu yang lebih baik amalnya. Dia Maha Perkasa lagi Maha Pengampun.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "الَّذِيْ خَلَقَ سَبْعَ سَمٰوٰتٍ طِبَاقًاۗ مَا تَرٰى فِيْ خَلْقِ الرَّحْمٰنِ مِنْ تَفٰوُتٍۗ فَارْجِعِ الْبَصَرَۙ هَلْ تَرٰى مِنْ فُطُوْرٍ ",
        "teksLatin": "Allażī khalaqa sab‘a samāwātin ṭibāqā(n), mā tarā fī khalqir-raḥmāni min tafāwut(in), farji‘il-baṣara hal tarā min fuṭūr(in).",
        "teksIndonesia": "(Dia juga) yang menciptakan tujuh langit berlapis-lapis. Kamu tidak akan melihat pada ciptaan Tuhan Yang Maha Pengasih ketidakseimbangan sedikit pun. Maka, lihatlah sekali lagi! Adakah kamu melihat suatu cela?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنْقَلِبْ اِلَيْكَ الْبَصَرُ خَاسِئًا وَّهُوَ حَسِيْرٌ ",
        "teksLatin": "Ṡummarji‘il-baṣara karrataini yanqalib ilaikal-baṣaru khāsi'aw wa huwa ḥasīr(un).",
        "teksIndonesia": "Kemudian, lihatlah sekali lagi (dan) sekali lagi (untuk mencari cela dalam ciptaan Allah), niscaya pandanganmu akan kembali kepadamu dengan kecewa dan dalam keadaan letih (karena tidak menemukannya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "وَلَقَدْ زَيَّنَّا السَّمَاۤءَ الدُّنْيَا بِمَصَابِيْحَ وَجَعَلْنٰهَا رُجُوْمًا لِّلشَّيٰطِيْنِ وَاَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيْرِ ",
        "teksLatin": "Wa laqad zayyannas-samā'ad-dun-yā bimaṣābīḥa wa ja‘alnāhā rujūmal lisy-syayāṭīni wa a‘tadnā lahum ‘ażābas-sa‘īr(i).",
        "teksIndonesia": "Sungguh, Kami benar-benar telah menghiasi langit dunia dengan bintang-bintang, menjadikannya (bintang-bintang itu) sebagai alat pelempar terhadap setan, dan menyediakan bagi mereka (setan-setan itu) azab (neraka) Sa‘ir (yang menyala-nyala).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "وَلِلَّذِيْنَ كَفَرُوْا بِرَبِّهِمْ عَذَابُ جَهَنَّمَۗ وَبِئْسَ الْمَصِيْرُ",
        "teksLatin": "Wa lil-lażīna kafarū birabbihim ‘ażābu jahannam(a), wa bi'sal-maṣīr(u).",
        "teksIndonesia": "Orang-orang yang kufur kepada Tuhannya akan mendapat azab (neraka) Jahanam. Itulah seburuk-buruk tempat kembali.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "اِذَآ اُلْقُوْا فِيْهَا سَمِعُوْا لَهَا شَهِيْقًا وَّهِيَ تَفُوْرُۙ",
        "teksLatin": "Iżā ulqū fīhā sami‘ū lahā syahīqaw wa hiya tafūr(u).",
        "teksIndonesia": "Apabila dilemparkan ke dalamnya (neraka), mereka pasti mendengar suaranya yang mengerikan saat ia membara.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِۗ كُلَّمَآ اُلْقِيَ فِيْهَا فَوْجٌ سَاَلَهُمْ خَزَنَتُهَآ اَلَمْ يَأْتِكُمْ نَذِيْرٌۙ",
        "teksLatin": "Takādu tamayyazu minal-gaiẓ(i), kullamā ulqiya fīhā faujun sa'alahum khazanatuhā alam ya'tikum nażīr(un).",
        "teksIndonesia": "(Neraka itu) hampir meledak karena marah. Setiap kali ada sekumpulan (orang-orang kafir) dilemparkan ke dalamnya, penjaga-penjaganya bertanya kepada mereka, “Tidak pernahkah seorang pemberi peringatan datang kepadamu (di dunia)?”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "قَالُوْا بَلٰى قَدْ جَاۤءَنَا نَذِيْرٌ ەۙ فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ اللّٰهُ مِنْ شَيْءٍۖ اِنْ اَنْتُمْ اِلَّا فِيْ ضَلٰلٍ كَبِيْرٍ",
        "teksLatin": "Qālū balā qad jā'anā nażīr(un), fa każżabnā wa qulnā mā nazzalallāhu min syai'(in), in antum illā fī ḍalālin kabīr(in).",
        "teksIndonesia": "Mereka menjawab, “Pernah! Sungguh, seorang pemberi peringatan telah datang kepada kami, tetapi kami mendustakan(-nya) dan mengatakan, ‘Allah tidak menurunkan sesuatu apa pun.’” (Para malaikat berkata,) “Kamu tidak lain hanyalah (berada) dalam kesesatan yang besar.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "وَقَالُوْا لَوْ كُنَّا نَسْمَعُ اَوْ نَعْقِلُ مَا كُنَّا فِيْٓ اَصْحٰبِ السَّعِيْرِ",
        "teksLatin": "Wa qālū lau kunnā nasma‘u au na‘qilu mā kunnā fī aṣḥābis-sa‘īr(i).",
        "teksIndonesia": "Mereka juga berkata, “Andaikan dahulu kami mendengarkan atau memikirkan (peringatan itu), tentulah kami tidak termasuk ke dalam (golongan) para penghuni (neraka) Sa‘ir (yang menyala-nyala).”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "فَاعْتَرَفُوْا بِذَنْۢبِهِمْۚ فَسُحْقًا لِّاَصْحٰبِ السَّعِيْرِ ",
        "teksLatin": "Fa‘tarafū biżambihim, fasuḥqal li'aṣḥābis-sa‘īr(i).",
        "teksIndonesia": "Mereka mengakui dosanya (saat penyesalan tidak lagi bermanfaat). Maka, jauhlah (dari rahmat Allah) bagi para penghuni (neraka) Sa‘ir (yang menyala-nyala) itu.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "اِنَّ الَّذِيْنَ يَخْشَوْنَ رَبَّهُمْ بِالْغَيْبِ لَهُمْ مَّغْفِرَةٌ وَّاَجْرٌ كَبِيْرٌ ",
        "teksLatin": "Innal-lażīna yakhsyauna rabbahum bil-gaibi lahum magfiratuw wa ajrun kabīr(un).",
        "teksIndonesia": "Sesungguhnya orang-orang yang takut kepada Tuhannya dengan tanpa melihat-Nya akan memperoleh ampunan dan pahala yang besar.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "وَاَسِرُّوْا قَوْلَكُمْ اَوِ اجْهَرُوْا بِهٖۗ اِنَّهٗ عَلِيْمٌ ۢبِذَاتِ الصُّدُوْرِ ",
        "teksLatin": "Wa asirrū qaulakum awijharū bih(ī), innahū ‘alīmum biżātiṣ-ṣudūr(i).",
        "teksIndonesia": "Rahasiakanlah perkataanmu atau nyatakanlah. Sesungguhnya Dia Maha Mengetahui segala isi hati.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "اَلَا يَعْلَمُ مَنْ خَلَقَۗ وَهُوَ اللَّطِيْفُ الْخَبِيْرُ ࣖ ",
        "teksLatin": "Alā ya‘lamu man khalaq(a), wa huwal-laṭīful-khabīr(u).",
        "teksIndonesia": "Apakah (pantas) Zat yang menciptakan itu tidak mengetahui, sedangkan Dia (juga) Maha Halus lagi Maha Mengetahui?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "هُوَ الَّذِيْ جَعَلَ لَكُمُ الْاَرْضَ ذَلُوْلًا فَامْشُوْا فِيْ مَنَاكِبِهَا وَكُلُوْا مِنْ رِّزْقِهٖۗ وَاِلَيْهِ النُّشُوْرُ ",
        "teksLatin": "Huwal-lażī ja‘ala lakumul-arḍa żalūlan famsyū fī manākibihā wa kulū mir rizqih(ī), wa ilaihin-nusyūr(u).",
        "teksIndonesia": "Dialah yang menjadikan bumi untuk kamu dalam keadaan mudah dimanfaatkan. Maka, jelajahilah segala penjurunya dan makanlah sebagian dari rezeki-Nya. Hanya kepada-Nya kamu (kembali setelah) dibangkitkan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "ءَاَمِنْتُمْ مَّنْ فِى السَّمَاۤءِ اَنْ يَّخْسِفَ بِكُمُ الْاَرْضَ فَاِذَا هِيَ تَمُوْرُۙ",
        "teksLatin": "A'amintum man fis-samā'i ay yakhsifa bikumul-arḍa  fa'iżā hiya tamūr(u).",
        "teksIndonesia": "Sudah merasa amankah kamu dari Zat yang di langit, yaitu (dari bencana) dibenamkannya bumi oleh-Nya bersama kamu ketika tiba-tiba ia terguncang?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "اَمْ اَمِنْتُمْ مَّنْ فِى السَّمَاۤءِ اَنْ يُّرْسِلَ عَلَيْكُمْ حَاصِبًاۗ فَسَتَعْلَمُوْنَ كَيْفَ نَذِيْرِ ",
        "teksLatin": "Am amintum man fis-samā'i ay yursila ‘alaikum ḥāṣibā(n), fa sata‘lamūna kaifa nażīr(i).",
        "teksIndonesia": "Atau, sudah merasa amankah kamu dari Zat yang di langit, yaitu (dari bencana) dikirimkannya badai batu oleh-Nya kepadamu? Kelak kamu akan mengetahui bagaimana (akibat mendustakan) peringatan-Ku.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "وَلَقَدْ كَذَّبَ الَّذِيْنَ مِنْ قَبْلِهِمْ فَكَيْفَ كَانَ نَكِيْرِ ",
        "teksLatin": "Wa laqad każżabal-lażīna min qablihim fakaifa kāna nakīr(i).",
        "teksIndonesia": "Sungguh, orang-orang sebelum mereka pun benar-benar telah mendustakan (rasul-rasul-Nya). Maka, betapa hebatnya kemurkaan-Ku!",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "اَوَلَمْ يَرَوْا اِلَى الطَّيْرِ فَوْقَهُمْ صٰۤفّٰتٍ وَّيَقْبِضْنَۘ مَا يُمْسِكُهُنَّ اِلَّا الرَّحْمٰنُۗ اِنَّهٗ بِكُلِّ شَيْءٍۢ بَصِيْرٌ ",
        "teksLatin": "Awalam yarau ilaṭ-ṭairi fauqahum ṣāffātiw wa yaqbiḍn(a), mā yumsikuhunna illar-raḥmān(u), innahū bikulli syai'im baṣīr(un).",
        "teksIndonesia": "Tidakkah mereka memperhatikan burung-burung yang mengembangkan dan mengatupkan sayapnya di atas mereka? Tidak ada yang menahannya (di udara) selain Yang Maha Pengasih. Sesungguhnya Dia Maha Melihat segala sesuatu.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067019.mp3"
        }
      },
      {
        "nomorAyat": 20,
        "teksArab": "اَمَّنْ هٰذَا الَّذِيْ هُوَ جُنْدٌ لَّكُمْ يَنْصُرُكُمْ مِّنْ دُوْنِ الرَّحْمٰنِۗ اِنِ الْكٰفِرُوْنَ اِلَّا فِيْ غُرُوْرٍۚ ",
        "teksLatin": "Am man hāżal-lażī huwa jundul lakum yanṣurukum min dūnir-raḥmān(i), inil-kāfirūna illā fī gurūr(in).",
        "teksIndonesia": "Atau, siapakah yang akan menjadi bala tentara bagimu yang dapat menolongmu selain (Allah) Yang Maha Pengasih? Orang-orang kafir itu tidak lain hanyalah dalam (keadaan) tertipu.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067020.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067020.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067020.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067020.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067020.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067020.mp3"
        }
      },
      {
        "nomorAyat": 21,
        "teksArab": "اَمَّنْ هٰذَا الَّذِيْ يَرْزُقُكُمْ اِنْ اَمْسَكَ رِزْقَهٗ ۚ بَلْ لَّجُّوْا فِيْ عُتُوٍّ وَّنُفُوْرٍ ",
        "teksLatin": "Am man hāżal-lażī yarzuqukum in amsaka rizqah(ū), bal lajjū fī ‘utuwwiw wa nufūr(in).",
        "teksIndonesia": "Atau, siapakah yang dapat memberimu rezeki jika Dia menahan rezeki-Nya? Sebaliknya, mereka terus-menerus dalam kesombongan dan menjauhkan diri (dari kebenaran).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067021.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067021.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067021.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067021.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067021.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067021.mp3"
        }
      },
      {
        "nomorAyat": 22,
        "teksArab": "اَفَمَنْ يَّمْشِيْ مُكِبًّا عَلٰى وَجْهِهٖٓ اَهْدٰىٓ اَمَّنْ يَّمْشِيْ سَوِيًّا عَلٰى صِرَاطٍ مُّسْتَقِيْمٍ ",
        "teksLatin": "Afamay yamsyī mukibban ‘alā wajhihī ahdā ammay yamsyī sawiyyan ‘alā ṣirāṭim mustaqīm(in).",
        "teksIndonesia": "Apakah orang yang berjalan dengan wajah tertelungkup itu lebih mendapatkan petunjuk ataukah orang yang berjalan tegap di atas jalan yang lurus?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067022.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067022.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067022.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067022.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067022.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067022.mp3"
        }
      },
      {
        "nomorAyat": 23,
        "teksArab": "قُلْ هُوَ الَّذِيْٓ اَنْشَاَكُمْ وَجَعَلَ لَكُمُ السَّمْعَ وَالْاَبْصَارَ وَالْاَفْـِٕدَةَۗ قَلِيْلًا مَّا تَشْكُرُوْنَ ",
        "teksLatin": "Qul huwal-lażī ansya'akum wa ja‘ala lakumus-sam‘a wal-abṣāra wal-af'idah(ta), qalīlam mā tasykurūn(a).",
        "teksIndonesia": "Katakanlah, “Dialah Zat yang menciptakanmu dan menjadikan bagimu pendengaran, penglihatan, dan hati nurani. (Akan tetapi,) sedikit sekali kamu bersyukur.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067023.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067023.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067023.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067023.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067023.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067023.mp3"
        }
      },
      {
        "nomorAyat": 24,
        "teksArab": "قُلْ هُوَ الَّذِيْ ذَرَاَكُمْ فِى الْاَرْضِ وَاِلَيْهِ تُحْشَرُوْنَ ",
        "teksLatin": "Qul huwal-lażī żara'akum fil-arḍi wa ilaihi tuḥsyarūn(a).",
        "teksIndonesia": "Katakanlah, “Dialah yang menjadikan kamu berkembang biak di muka bumi dan kepada-Nyalah kamu akan dikumpulkan.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067024.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067024.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067024.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067024.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067024.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067024.mp3"
        }
      },
      {
        "nomorAyat": 25,
        "teksArab": "وَيَقُوْلُوْنَ مَتٰى هٰذَا الْوَعْدُ اِنْ كُنْتُمْ صٰدِقِيْنَ ",
        "teksLatin": "Wa yaqūlūna matā hāżal-wa‘du in kuntum ṣādiqīn(a).",
        "teksIndonesia": "Mereka berkata, “Kapankah (datangnya) janji (azab) ini jika kamu orang-orang benar?”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067025.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067025.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067025.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067025.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067025.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067025.mp3"
        }
      },
      {
        "nomorAyat": 26,
        "teksArab": "قُلْ اِنَّمَا الْعِلْمُ عِنْدَ اللّٰهِ ۖوَاِنَّمَآ اَنَا۠ نَذِيْرٌ مُّبِيْنٌ ",
        "teksLatin": "Qul innamal-‘ilmu ‘indallāh(i), wa innamā ana nażīrum mubīn(un).",
        "teksIndonesia": "Katakanlah (Nabi Muhammad), “Sesungguhnya ilmu (tentang hari Kiamat itu) hanya ada pada Allah. Aku hanyalah seorang pemberi peringatan yang jelas.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067026.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067026.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067026.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067026.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067026.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067026.mp3"
        }
      },
      {
        "nomorAyat": 27,
        "teksArab": "فَلَمَّا رَاَوْهُ زُلْفَةً سِيْۤـَٔتْ وُجُوْهُ الَّذِيْنَ كَفَرُوْا وَقِيْلَ هٰذَا الَّذِيْ كُنْتُمْ بِهٖ تَدَّعُوْنَ ",
        "teksLatin": "Falammā ra'auhu zulfatan sī'at wujūhul-lażīna kafarū wa qīla hāżal-lażī kuntum bihī tadda‘ūn(a).",
        "teksIndonesia": "Ketika mereka melihat azab (pada hari Kiamat) sudah dekat, wajah orang-orang kafir itu menjadi muram. Dikatakan (kepada mereka), “Ini adalah (sesuatu) yang dahulu kamu selalu mengaku (bahwa kamu tidak akan dibangkitkan).”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067027.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067027.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067027.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067027.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067027.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067027.mp3"
        }
      },
      {
        "nomorAyat": 28,
        "teksArab": "قُلْ اَرَءَيْتُمْ اِنْ اَهْلَكَنِيَ اللّٰهُ وَمَنْ مَّعِيَ اَوْ رَحِمَنَاۙ فَمَنْ يُّجِيْرُ الْكٰفِرِيْنَ مِنْ عَذَابٍ اَلِيْمٍ ",
        "teksLatin": "Qul ara'aitum in ahlakaniyallāhu wa mam ma‘iya au raḥimanā, famay yujīrul-kāfirīna min ‘ażābin alīm(in).",
        "teksIndonesia": "Katakanlah (Nabi Muhammad), “Tahukah kamu jika Allah mematikan aku dan orang-orang yang bersamaku atau memberi rahmat kepada kami (dengan memperpanjang umur kami,) lalu siapa yang dapat melindungi orang-orang kafir dari azab yang pedih?”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067028.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067028.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067028.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067028.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067028.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067028.mp3"
        }
      },
      {
        "nomorAyat": 29,
        "teksArab": "قُلْ هُوَ الرَّحْمٰنُ اٰمَنَّا بِهٖ وَعَلَيْهِ تَوَكَّلْنَاۚ فَسَتَعْلَمُوْنَ مَنْ هُوَ فِيْ ضَلٰلٍ مُّبِيْنٍ ",
        "teksLatin": "Qul huwar-raḥmānu āmannā bihī wa ‘alaihi tawakkalnā, fasata‘lamūna man huwa fī ḍalālim mubīn(in).",
        "teksIndonesia": "Katakanlah (Nabi Muhammad), “Dialah Zat Yang Maha Pengasih, kami beriman kepada-Nya dan hanya kepada-Nya kami bertawakal. Kelak kamu akan tahu siapa yang berada dalam kesesatan yang nyata.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067029.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067029.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067029.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067029.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067029.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067029.mp3"
        }
      },
      {
        "nomorAyat": 30,
        "teksArab": "قُلْ اَرَءَيْتُمْ اِنْ اَصْبَحَ مَاۤؤُكُمْ غَوْرًا فَمَنْ يَّأْتِيْكُمْ بِمَاۤءٍ مَّعِيْنٍ ࣖ ",
        "teksLatin": "Qul ara'aitum in aṣbaḥa mā'ukum gauran famay ya'tīkum bimā'im ma‘īn(in).",
        "teksIndonesia": "Katakanlah (Nabi Muhammad), “Terangkanlah kepadaku jika (sumber) air kamu surut ke dalam tanah, siapa yang akan memberimu air yang mengalir?”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/067030.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/067030.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/067030.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/067030.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/067030.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/067030.mp3"
        }
      }
    ]
  },
  "78": {
    "nomor": 78,
    "namaLatin": "An-Naba'",
    "namaArab": "النبأ",
    "arti": "Berita Besar",
    "jumlahAyat": 40,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat An NabaÂ´ terdiri atas 40 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al MaÂ´aarij. <br>Dinamai <i>An NabaÂ´</i> (berita besar) diambil dari perkataan <i>An NabaÂ´</i> yang terdapat pada ayat 2 surat ini. Dinamai juga <i>Amma yatasaa aluun</i> diambil dari perkataan <i>Amma yatasaa aluun</i> yang terdapat pada ayat 1 surat ini.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/078.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/078.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/078.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/078.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/078.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/078.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "عَمَّ يَتَسَاۤءَلُوْنَۚ ",
        "teksLatin": "‘Amma yatasā'alūn(a).",
        "teksIndonesia": "Tentang apakah mereka saling bertanya?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "عَنِ النَّبَاِ الْعَظِيْمِۙ ",
        "teksLatin": "‘Anin naba'il-‘aẓīm(i).",
        "teksIndonesia": "Tentang berita yang besar (hari Kebangkitan)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "الَّذِيْ هُمْ فِيْهِ مُخْتَلِفُوْنَۗ ",
        "teksLatin": "Allażī hum fīhi mukhtalifūn(a).",
        "teksIndonesia": "yang dalam hal itu mereka berselisih.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "كَلَّا سَيَعْلَمُوْنَۙ ",
        "teksLatin": "Kallā saya‘lamūn(a).",
        "teksIndonesia": "Sekali-kali tidak! Kelak mereka akan mengetahui.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "ثُمَّ كَلَّا سَيَعْلَمُوْنَ",
        "teksLatin": "Ṡumma kallā saya‘lamūn(a).",
        "teksIndonesia": "Sekali lagi, tidak! Kelak mereka akan mengetahui.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "اَلَمْ نَجْعَلِ الْاَرْضَ مِهٰدًاۙ",
        "teksLatin": "Alam naj‘alil-arḍa mihādā(n).",
        "teksIndonesia": "Bukankah Kami telah menjadikan bumi sebagai hamparan",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "وَّالْجِبَالَ اَوْتَادًاۖ",
        "teksLatin": "Wal-jibāla autādā(n).",
        "teksIndonesia": "dan gunung-gunung sebagai pasak?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "وَّخَلَقْنٰكُمْ اَزْوَاجًاۙ ",
        "teksLatin": "Wa khalaqnākum azwājā(n).",
        "teksIndonesia": "Kami menciptakan kamu berpasang-pasangan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "وَّجَعَلْنَا نَوْمَكُمْ سُبَاتًاۙ ",
        "teksLatin": "Wa ja‘alnā naumakum subātā(n).",
        "teksIndonesia": "Kami menjadikan tidurmu untuk beristirahat.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "وَّجَعَلْنَا الَّيْلَ لِبَاسًاۙ ",
        "teksLatin": "Wa ja‘alnal-laila libāsā(n).",
        "teksIndonesia": "Kami menjadikan malam sebagai pakaian.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "وَّجَعَلْنَا النَّهَارَ مَعَاشًاۚ",
        "teksLatin": "Wa ja‘alnan-nahāra ma‘āsyā(n).",
        "teksIndonesia": "Kami menjadikan siang untuk mencari penghidupan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًاۙ ",
        "teksLatin": "Wa banainā fauqakum sab‘an syidādā(n).",
        "teksIndonesia": "Kami membangun tujuh (langit) yang kukuh di atasmu.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "وَّجَعَلْنَا سِرَاجًا وَّهَّاجًاۖ",
        "teksLatin": "Wa ja‘alnā sirājaw wahhājā(n).",
        "teksIndonesia": "Kami menjadikan pelita yang terang-benderang (matahari).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "وَّاَنْزَلْنَا مِنَ الْمُعْصِرٰتِ مَاۤءً ثَجَّاجًاۙ",
        "teksLatin": "Wa anzalnā minal-mu‘ṣirāti mā'an ṡajjājā(n).",
        "teksIndonesia": "Kami menurunkan dari awan air hujan yang tercurah dengan deras",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "لِّنُخْرِجَ بِهٖ حَبًّا وَّنَبَاتًاۙ",
        "teksLatin": "Linukhrija bihī ḥabbaw wa nabātā(n).",
        "teksIndonesia": "agar Kami menumbuhkan dengannya biji-bijian, tanam-tanaman,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "وَّجَنّٰتٍ اَلْفَافًاۗ",
        "teksLatin": "Wa jannātin alfāfā(n).",
        "teksIndonesia": "dan kebun-kebun yang rindang.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "اِنَّ يَوْمَ الْفَصْلِ كَانَ مِيْقَاتًاۙ",
        "teksLatin": "Inna yaumal-faṣli kāna mīqātā(n).",
        "teksIndonesia": "Sesungguhnya hari Keputusan itu adalah waktu yang telah ditetapkan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "يَّوْمَ يُنْفَخُ فِى الصُّوْرِ فَتَأْتُوْنَ اَفْوَاجًاۙ",
        "teksLatin": "Yauma yunfakhu fiṣ-ṣūri fa ta'tūna afwājā(n).",
        "teksIndonesia": "(yaitu) hari (ketika) sangkakala ditiup, lalu kamu datang berbondong-bondong.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "وَّفُتِحَتِ السَّمَاۤءُ فَكَانَتْ اَبْوَابًاۙ",
        "teksLatin": "Wa futiḥatis-samā'u fa kānat abwābā(n).",
        "teksIndonesia": "Langit pun dibuka. Maka, terdapatlah beberapa pintu.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078019.mp3"
        }
      },
      {
        "nomorAyat": 20,
        "teksArab": "وَّسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًاۗ",
        "teksLatin": "Wa suyyiratil-jibālu fa kānat sarābā(n).",
        "teksIndonesia": "Gunung-gunung pun dijalankan. Maka, ia menjadi (seperti) fatamorgana.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078020.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078020.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078020.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078020.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078020.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078020.mp3"
        }
      },
      {
        "nomorAyat": 21,
        "teksArab": "اِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًاۙ",
        "teksLatin": "Inna jahannama kānat mirṣādā(n).",
        "teksIndonesia": "Sesungguhnya (neraka) Jahanam itu (merupakan) tempat mengintai (bagi penjaga neraka)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078021.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078021.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078021.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078021.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078021.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078021.mp3"
        }
      },
      {
        "nomorAyat": 22,
        "teksArab": "لِّلطّٰغِيْنَ مَاٰبًاۙ",
        "teksLatin": "Liṭ-ṭāgīna ma'ābā(n).",
        "teksIndonesia": "(dan) menjadi tempat kembali bagi orang-orang yang melampaui batas.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078022.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078022.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078022.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078022.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078022.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078022.mp3"
        }
      },
      {
        "nomorAyat": 23,
        "teksArab": "لّٰبِثِيْنَ فِيْهَآ اَحْقَابًاۚ",
        "teksLatin": "Lābiṡīna fīhā aḥqābā(n).",
        "teksIndonesia": "Mereka tinggal di sana dalam masa yang lama.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078023.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078023.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078023.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078023.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078023.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078023.mp3"
        }
      },
      {
        "nomorAyat": 24,
        "teksArab": "لَا يَذُوْقُوْنَ فِيْهَا بَرْدًا وَّلَا شَرَابًاۙ",
        "teksLatin": "Lā yażūqūna fīhā bardaw wa lā syarābā(n).",
        "teksIndonesia": "Mereka tidak merasakan kesejukan di dalamnya dan tidak (pula mendapat) minuman,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078024.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078024.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078024.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078024.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078024.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078024.mp3"
        }
      },
      {
        "nomorAyat": 25,
        "teksArab": "اِلَّا حَمِيْمًا وَّغَسَّاقًاۙ",
        "teksLatin": "Illā ḥamīmaw wa gassāqā(n).",
        "teksIndonesia": "selain air yang mendidih dan nanah,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078025.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078025.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078025.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078025.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078025.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078025.mp3"
        }
      },
      {
        "nomorAyat": 26,
        "teksArab": "جَزَاۤءً وِّفَاقًاۗ",
        "teksLatin": "Jazā'aw wifāqā(n).",
        "teksIndonesia": "sebagai pembalasan yang setimpal.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078026.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078026.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078026.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078026.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078026.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078026.mp3"
        }
      },
      {
        "nomorAyat": 27,
        "teksArab": "اِنَّهُمْ كَانُوْا لَا يَرْجُوْنَ حِسَابًاۙ",
        "teksLatin": "Innahum kānū lā yarjūna ḥisābā(n).",
        "teksIndonesia": "Sesungguhnya mereka tidak pernah mengharapkan perhitungan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078027.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078027.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078027.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078027.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078027.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078027.mp3"
        }
      },
      {
        "nomorAyat": 28,
        "teksArab": "وَّكَذَّبُوْا بِاٰيٰتِنَا كِذَّابًاۗ",
        "teksLatin": "Wa każżabū bi'āyātinā kiżżābā(n).",
        "teksIndonesia": "Mereka benar-benar mendustakan ayat-ayat Kami.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078028.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078028.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078028.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078028.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078028.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078028.mp3"
        }
      },
      {
        "nomorAyat": 29,
        "teksArab": "وَكُلَّ شَيْءٍ اَحْصَيْنٰهُ كِتٰبًاۙ",
        "teksLatin": "Wa kulla syai'in aḥṣaināhu kitābā(n).",
        "teksIndonesia": "Segala sesuatu telah Kami catat dalam kitab (catatan amal manusia).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078029.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078029.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078029.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078029.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078029.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078029.mp3"
        }
      },
      {
        "nomorAyat": 30,
        "teksArab": "فَذُوْقُوْا فَلَنْ نَّزِيْدَكُمْ اِلَّا عَذَابًا ࣖ",
        "teksLatin": "Fa żūqū falan nazīdakum illā ‘ażābā(n)",
        "teksIndonesia": "Oleh karena itu, rasakanlah! Tidak akan Kami tambahkan kepadamu, kecuali azab.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078030.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078030.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078030.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078030.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078030.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078030.mp3"
        }
      },
      {
        "nomorAyat": 31,
        "teksArab": "اِنَّ لِلْمُتَّقِيْنَ مَفَازًاۙ",
        "teksLatin": "Inna lil-muttaqīna mafāzā(n).",
        "teksIndonesia": "Sesungguhnya bagi orang-orang yang bertakwa (ada) kemenangan (surga),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078031.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078031.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078031.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078031.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078031.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078031.mp3"
        }
      },
      {
        "nomorAyat": 32,
        "teksArab": "حَدَاۤىِٕقَ وَاَعْنَابًاۙ",
        "teksLatin": "Ḥadā'iqa wa a‘nābā(n).",
        "teksIndonesia": "(yaitu) kebun-kebun, buah anggur,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078032.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078032.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078032.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078032.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078032.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078032.mp3"
        }
      },
      {
        "nomorAyat": 33,
        "teksArab": "وَّكَوَاعِبَ اَتْرَابًاۙ",
        "teksLatin": "Wa kawā‘iba atrābā(n).",
        "teksIndonesia": "gadis-gadis molek yang sebaya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078033.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078033.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078033.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078033.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078033.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078033.mp3"
        }
      },
      {
        "nomorAyat": 34,
        "teksArab": "وَّكَأْسًا دِهَاقًاۗ",
        "teksLatin": "Wa ka'san dihāqā(n).",
        "teksIndonesia": "dan gelas-gelas yang penuh (berisi minuman).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078034.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078034.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078034.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078034.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078034.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078034.mp3"
        }
      },
      {
        "nomorAyat": 35,
        "teksArab": "لَا يَسْمَعُوْنَ فِيْهَا لَغْوًا وَّلَا كِذّٰبًا",
        "teksLatin": "Lā yasma‘ūna fīhā lagwaw wa lā kiżżābā(n).",
        "teksIndonesia": "Di sana mereka tidak mendengar percakapan yang sia-sia dan tidak pula (perkataan) dusta.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078035.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078035.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078035.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078035.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078035.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078035.mp3"
        }
      },
      {
        "nomorAyat": 36,
        "teksArab": "جَزَاۤءً مِّنْ رَّبِّكَ عَطَاۤءً حِسَابًاۙ",
        "teksLatin": "Jazā'am mir rabbika ‘aṭā'an ḥisābā(n).",
        "teksIndonesia": "(Hal itu) sebagai balasan (dan) pemberian yang banyak dari Tuhanmu,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078036.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078036.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078036.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078036.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078036.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078036.mp3"
        }
      },
      {
        "nomorAyat": 37,
        "teksArab": "رَّبِّ السَّمٰوٰتِ وَالْاَرْضِ وَمَا بَيْنَهُمَا الرَّحْمٰنِ لَا يَمْلِكُوْنَ مِنْهُ خِطَابًاۚ ",
        "teksLatin": "Rabbis-samāwāti wal-arḍi wa mā bainahumar-raḥmāni lā yamlikūna minhu khiṭābā(n).",
        "teksIndonesia": "(yaitu) Tuhan (pemelihara) langit, bumi, dan apa yang ada di antara keduanya, Yang Maha Pengasih. Mereka tidak memiliki (hak) berbicara dengan-Nya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078037.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078037.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078037.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078037.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078037.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078037.mp3"
        }
      },
      {
        "nomorAyat": 38,
        "teksArab": "يَوْمَ يَقُوْمُ الرُّوْحُ وَالْمَلٰۤىِٕكَةُ صَفًّاۙ  لَّا يَتَكَلَّمُوْنَ اِلَّا مَنْ اَذِنَ لَهُ الرَّحْمٰنُ وَقَالَ صَوَابًا",
        "teksLatin": "Yauma yaqūmur-rūḥu wal-malā'ikatu ṣaffā(n), lā yatakallamūna illā man ażina lahur-raḥmānu wa qāla ṣawābā(n).",
        "teksIndonesia": "Pada hari ketika Rūḥ dan malaikat berdiri bersaf-saf. Mereka tidak berbicara, kecuali yang diizinkan oleh Tuhan Yang Maha Pengasih dan dia mengatakan yang benar.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078038.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078038.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078038.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078038.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078038.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078038.mp3"
        }
      },
      {
        "nomorAyat": 39,
        "teksArab": "ذٰلِكَ الْيَوْمُ الْحَقُّۚ فَمَنْ شَاۤءَ اتَّخَذَ اِلٰى رَبِّهٖ مَاٰبًا",
        "teksLatin": "Żālikal-yaumul-ḥaqq(u), faman syā'attakhaża ilā rabbihī ma'ābā(n).",
        "teksIndonesia": "Itulah hari yang hak (pasti terjadi). Siapa yang menghendaki (keselamatan) niscaya menempuh jalan kembali kepada Tuhannya (dengan beramal saleh).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078039.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078039.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078039.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078039.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078039.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078039.mp3"
        }
      },
      {
        "nomorAyat": 40,
        "teksArab": "اِنَّآ اَنْذَرْنٰكُمْ عَذَابًا قَرِيْبًا ەۙ يَّوْمَ يَنْظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُوْلُ الْكٰفِرُ يٰلَيْتَنِيْ كُنْتُ تُرٰبًا ࣖ",
        "teksLatin": "Innā anżarnākum ‘ażāban qarībā(n), yauma yanẓurul-mar'u mā qaddamat yadāhu wa yaqūlul-kāfiru yā laitanī kuntu turābā(n).",
        "teksIndonesia": "Sesungguhnya Kami telah memperingatkan kamu akan azab yang dekat pada hari (ketika) manusia melihat apa yang telah diperbuat oleh kedua tangannya dan orang kafir berkata, “Oh, seandainya saja aku menjadi tanah.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/078040.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/078040.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/078040.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/078040.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/078040.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/078040.mp3"
        }
      }
    ]
  },
  "79": {
    "nomor": 79,
    "namaLatin": "An-Nazi'at",
    "namaArab": "النّٰزعٰت",
    "arti": "Malaikat Yang Mencabut",
    "jumlahAyat": 46,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat An NaaziÂ´aat terdiri atas 46 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat An NabaÂ´. Dinamai <i>An NaaziÂ´aat</i> diambil dari perkataan <i>An NaaziÂ´aat</i> yang terdapat pada ayat pertama surat ini. Dinamai pula <i>as Saahirah</i> yang diambil dari ayat 14, dinamai juga <i>Ath Thaammah</i> diambil dari ayat 34.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/079.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/079.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/079.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/079.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/079.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/079.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "وَالنّٰزِعٰتِ غَرْقًاۙ",
        "teksLatin": "Wan-nāzi‘āti garqā(n).",
        "teksIndonesia": "Demi (malaikat) yang mencabut (nyawa orang kafir) dengan keras,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَّالنّٰشِطٰتِ نَشْطًاۙ",
        "teksLatin": "Wan-nāsyiṭāti nasyṭā(n).",
        "teksIndonesia": "demi (malaikat) yang mencabut (nyawa orang mukmin) dengan lemah lembut,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَّالسّٰبِحٰتِ سَبْحًاۙ",
        "teksLatin": "Was-sābiḥāti sabḥā(n).",
        "teksIndonesia": "demi (malaikat) yang cepat (menunaikan tugasnya) dengan mudah,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "فَالسّٰبِقٰتِ سَبْقًاۙ",
        "teksLatin": "Fas-sābiqāti sabqā(n).",
        "teksIndonesia": "(malaikat) yang bergegas (melaksanakan perintah Allah) dengan cepat,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "فَالْمُدَبِّرٰتِ اَمْرًاۘ",
        "teksLatin": "Fal-mudabbirāti amrā(n).",
        "teksIndonesia": "dan (malaikat) yang mengatur urusan (dunia),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "يَوْمَ تَرْجُفُ الرَّاجِفَةُۙ",
        "teksLatin": "Yauma tarjufur-rājifah(tu).",
        "teksIndonesia": "(kamu benar-benar akan dibangkitkan) pada hari ketika tiupan pertama mengguncang (alam semesta).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "تَتْبَعُهَا الرَّادِفَةُ ۗ",
        "teksLatin": "Tatba‘uhar-rādifah(tu).",
        "teksIndonesia": "(Tiupan pertama) itu diiringi oleh tiupan kedua.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "قُلُوْبٌ يَّوْمَىِٕذٍ وَّاجِفَةٌۙ",
        "teksLatin": "Qulūbuy yauma'iżiw wājifah(tun).",
        "teksIndonesia": "Hati manusia pada hari itu merasa sangat takut;",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "اَبْصَارُهَا خَاشِعَةٌ  ۘ",
        "teksLatin": "Abṣāruhā khāsyi‘ah(tun).",
        "teksIndonesia": "pandangannya tertunduk.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "يَقُوْلُوْنَ ءَاِنَّا لَمَرْدُوْدُوْنَ فِى الْحَافِرَةِۗ",
        "teksLatin": "Yaqūlūna a'innā lamardūdūna fil-ḥāfirah(ti).",
        "teksIndonesia": "Mereka (di dunia) berkata, “Apakah kita benar-benar akan dikembalikan pada kehidupan yang semula?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "ءَاِذَا كُنَّا عِظَامًا نَّخِرَةً ۗ",
        "teksLatin": "A'iżā kunnā ‘iẓāman nakhirah(tan).",
        "teksIndonesia": "Apabila kita telah menjadi tulang-belulang yang hancur, apakah kita (akan dibangkitkan juga)?”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "قَالُوْا تِلْكَ اِذًا كَرَّةٌ خَاسِرَةٌ  ۘ",
        "teksLatin": "Qālū tilka iżan karratun khāsirah(tun).",
        "teksIndonesia": "Mereka berkata, “Kalau demikian, itu suatu pengembalian yang merugikan.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "فَاِنَّمَا هِيَ زَجْرَةٌ وَّاحِدَةٌۙ",
        "teksLatin": "Fa innamā hiya zajratuw wāḥidah(tun).",
        "teksIndonesia": "(Jangan dianggap sulit,) pengembalian itu (dilakukan) hanyalah dengan sekali tiupan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "فَاِذَا هُمْ بِالسَّاهِرَةِۗ",
        "teksLatin": "Fa iżā hum bis-sāhirah(ti).",
        "teksIndonesia": "Seketika itu, mereka hidup kembali di bumi (yang baru).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "هَلْ اَتٰىكَ حَدِيْثُ مُوْسٰىۘ",
        "teksLatin": "Hal atāka ḥadīṡu mūsā.",
        "teksIndonesia": "Sudah sampaikah kepadamu (Nabi Muhammad) kisah Musa?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "اِذْ نَادٰىهُ رَبُّهٗ بِالْوَادِ الْمُقَدَّسِ طُوًىۚ",
        "teksLatin": "Iż nādāhu rabbuhū bil-wādil-muqaddasi ṭuwā(n).",
        "teksIndonesia": "(Ingatlah) ketika Tuhannya menyeru dia (Musa) di lembah suci, yaitu Lembah Tuwa,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "اِذْهَبْ اِلٰى فِرْعَوْنَ اِنَّهٗ طَغٰىۖ",
        "teksLatin": "Iżhab ilā fir‘auna innahū ṭagā.",
        "teksIndonesia": "“Pergilah engkau kepada Fir‘aun! Sesungguhnya dia telah melampaui batas.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "فَقُلْ هَلْ لَّكَ اِلٰٓى اَنْ تَزَكّٰىۙ",
        "teksLatin": "Fa qul hal laka ilā an tazakkā.",
        "teksIndonesia": "Lalu, katakanlah (kepada Fir‘aun), ‘Adakah keinginanmu untuk menyucikan diri (dari kesesatan)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "وَاَهْدِيَكَ اِلٰى رَبِّكَ فَتَخْشٰىۚ",
        "teksLatin": "Wa ahdiyaka ilā rabbika fa takhsyā.",
        "teksIndonesia": "dan aku akan menunjukimu ke (jalan) Tuhanmu agar engkau takut (kepada-Nya)?’”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079019.mp3"
        }
      },
      {
        "nomorAyat": 20,
        "teksArab": "فَاَرٰىهُ الْاٰيَةَ الْكُبْرٰىۖ",
        "teksLatin": "Fa arāhul-āyatal-kubrā.",
        "teksIndonesia": "Lalu, dia (Musa) memperlihatkan mukjizat yang besar kepadanya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079020.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079020.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079020.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079020.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079020.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079020.mp3"
        }
      },
      {
        "nomorAyat": 21,
        "teksArab": "فَكَذَّبَ وَعَصٰىۖ",
        "teksLatin": "Fa każżaba wa ‘aṣā.",
        "teksIndonesia": "Akan tetapi, dia (Fir‘aun) mendustakan (kerasulan) dan mendurhakai (Allah).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079021.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079021.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079021.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079021.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079021.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079021.mp3"
        }
      },
      {
        "nomorAyat": 22,
        "teksArab": "ثُمَّ اَدْبَرَ يَسْعٰىۖ",
        "teksLatin": "Ṡumma adbara yas‘ā.",
        "teksIndonesia": "Kemudian, dia berpaling seraya berusaha (menantang Musa).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079022.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079022.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079022.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079022.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079022.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079022.mp3"
        }
      },
      {
        "nomorAyat": 23,
        "teksArab": "فَحَشَرَ فَنَادٰىۖ",
        "teksLatin": "Fa ḥasyara fanādā.",
        "teksIndonesia": "Maka, dia mengumpulkan (pembesar-pembesarnya), lalu berseru (memanggil kaumnya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079023.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079023.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079023.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079023.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079023.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079023.mp3"
        }
      },
      {
        "nomorAyat": 24,
        "teksArab": "فَقَالَ اَنَا۠ رَبُّكُمُ الْاَعْلٰىۖ",
        "teksLatin": "Fa qāla ana rabbukumul-a‘lā.",
        "teksIndonesia": "Dia berkata, “Akulah Tuhanmu yang paling tinggi.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079024.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079024.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079024.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079024.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079024.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079024.mp3"
        }
      },
      {
        "nomorAyat": 25,
        "teksArab": "فَاَخَذَهُ اللّٰهُ نَكَالَ الْاٰخِرَةِ وَالْاُوْلٰىۗ",
        "teksLatin": "Fa akhażahullāhu nakālal-ākhirati wal-ūlā.",
        "teksIndonesia": "Maka, Allah menghukumnya dengan azab di akhirat dan (siksaan) di dunia.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079025.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079025.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079025.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079025.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079025.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079025.mp3"
        }
      },
      {
        "nomorAyat": 26,
        "teksArab": "اِنَّ فِيْ ذٰلِكَ لَعِبْرَةً لِّمَنْ يَّخْشٰى ۗ ࣖ",
        "teksLatin": "Inna fī żālika la‘ibratal limay yakhsyā.",
        "teksIndonesia": "Sesungguhnya pada yang demikian itu benar-benar terdapat pelajaran bagi orang yang takut (kepada Allah).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079026.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079026.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079026.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079026.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079026.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079026.mp3"
        }
      },
      {
        "nomorAyat": 27,
        "teksArab": "ءَاَنْتُمْ اَشَدُّ خَلْقًا اَمِ السَّمَاۤءُ ۚ بَنٰىهَاۗ",
        "teksLatin": "A'antum asyaddu khalqan amis-samā'u banāhā.",
        "teksIndonesia": "Apakah penciptaan kamu yang lebih hebat ataukah langit yang telah dibangun-Nya?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079027.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079027.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079027.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079027.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079027.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079027.mp3"
        }
      },
      {
        "nomorAyat": 28,
        "teksArab": "رَفَعَ سَمْكَهَا فَسَوّٰىهَاۙ",
        "teksLatin": "Rafa‘a samkahā fa sawwāhā.",
        "teksIndonesia": "Dia telah meninggikan bangunannya, lalu menyempurnakannya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079028.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079028.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079028.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079028.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079028.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079028.mp3"
        }
      },
      {
        "nomorAyat": 29,
        "teksArab": "وَاَغْطَشَ لَيْلَهَا وَاَخْرَجَ ضُحٰىهَاۖ",
        "teksLatin": "Wa agṭasya lailahā wa akhraja ḍuḥāhā.",
        "teksIndonesia": "Dia menjadikan malamnya (gelap gulita) dan menjadikan siangnya (terang benderang).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079029.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079029.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079029.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079029.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079029.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079029.mp3"
        }
      },
      {
        "nomorAyat": 30,
        "teksArab": "وَالْاَرْضَ بَعْدَ ذٰلِكَ دَحٰىهَاۗ",
        "teksLatin": "Wal-arḍa ba‘da żālika daḥāhā.",
        "teksIndonesia": "Setelah itu, bumi Dia hamparkan (untuk dihuni).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079030.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079030.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079030.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079030.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079030.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079030.mp3"
        }
      },
      {
        "nomorAyat": 31,
        "teksArab": "اَخْرَجَ مِنْهَا مَاۤءَهَا وَمَرْعٰىهَاۖ",
        "teksLatin": "Akhraja minhā mā'ahā wa mar‘āhā.",
        "teksIndonesia": "Darinya (bumi) Dia mengeluarkan air dan (menyediakan) tempat penggembalaan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079031.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079031.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079031.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079031.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079031.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079031.mp3"
        }
      },
      {
        "nomorAyat": 32,
        "teksArab": "وَالْجِبَالَ اَرْسٰىهَاۙ",
        "teksLatin": "Wal-jibāla arsāhā.",
        "teksIndonesia": "Gunung-gunung Dia pancangkan dengan kukuh.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079032.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079032.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079032.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079032.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079032.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079032.mp3"
        }
      },
      {
        "nomorAyat": 33,
        "teksArab": "مَتَاعًا لَّكُمْ وَلِاَنْعَامِكُمْۗ",
        "teksLatin": "Matā‘al lakum wa li'an‘āmikum.",
        "teksIndonesia": "(Semua itu disediakan) untuk kesenanganmu dan hewan ternakmu.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079033.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079033.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079033.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079033.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079033.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079033.mp3"
        }
      },
      {
        "nomorAyat": 34,
        "teksArab": "فَاِذَا جَاۤءَتِ الطَّاۤمَّةُ الْكُبْرٰىۖ",
        "teksLatin": "Fa iżā jā'atiṭ-ṭāmmatul-kubrā.",
        "teksIndonesia": "Maka, apabila malapetaka terbesar (hari Kiamat) telah datang,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079034.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079034.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079034.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079034.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079034.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079034.mp3"
        }
      },
      {
        "nomorAyat": 35,
        "teksArab": "يَوْمَ يَتَذَكَّرُ الْاِنْسَانُ مَا سَعٰىۙ",
        "teksLatin": "Yauma yatażakkarul-insānu mā sa‘ā.",
        "teksIndonesia": "pada hari (itu) manusia teringat apa yang telah dikerjakannya",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079035.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079035.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079035.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079035.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079035.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079035.mp3"
        }
      },
      {
        "nomorAyat": 36,
        "teksArab": "وَبُرِّزَتِ الْجَحِيْمُ لِمَنْ يَّرٰى",
        "teksLatin": "Wa burrizatil-jaḥīmu limay yarā.",
        "teksIndonesia": "dan (neraka) Jahim diperlihatkan dengan jelas kepada orang yang melihat(-nya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079036.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079036.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079036.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079036.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079036.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079036.mp3"
        }
      },
      {
        "nomorAyat": 37,
        "teksArab": "فَاَمَّا مَنْ طَغٰىۖ",
        "teksLatin": "Fa ammā man ṭagā.",
        "teksIndonesia": "Adapun orang yang melampaui batas",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079037.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079037.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079037.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079037.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079037.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079037.mp3"
        }
      },
      {
        "nomorAyat": 38,
        "teksArab": "وَاٰثَرَ الْحَيٰوةَ الدُّنْيَاۙ",
        "teksLatin": "Wa āṡaral-ḥayātad-dun-yā.",
        "teksIndonesia": "dan lebih mengutamakan kehidupan dunia,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079038.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079038.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079038.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079038.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079038.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079038.mp3"
        }
      },
      {
        "nomorAyat": 39,
        "teksArab": "فَاِنَّ الْجَحِيْمَ هِيَ الْمَأْوٰىۗ",
        "teksLatin": "Fa innal-jaḥīma hiyal-ma'wā.",
        "teksIndonesia": "sesungguhnya (neraka) Jahimlah tempat tinggal(-nya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079039.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079039.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079039.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079039.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079039.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079039.mp3"
        }
      },
      {
        "nomorAyat": 40,
        "teksArab": "وَاَمَّا مَنْ خَافَ مَقَامَ رَبِّهٖ وَنَهَى النَّفْسَ عَنِ الْهَوٰىۙ",
        "teksLatin": "Wa ammā man khāfa maqāma rabbihī wa nahan-nafsa ‘anil-hawā.",
        "teksIndonesia": "Adapun orang-orang yang takut pada kebesaran Tuhannya dan menahan diri dari (keinginan) hawa nafsunya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079040.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079040.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079040.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079040.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079040.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079040.mp3"
        }
      },
      {
        "nomorAyat": 41,
        "teksArab": "فَاِنَّ الْجَنَّةَ هِيَ الْمَأْوٰىۗ",
        "teksLatin": "Fa innal-jannata hiyal-ma'wā.",
        "teksIndonesia": "sesungguhnya surgalah tempat tinggal(-nya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079041.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079041.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079041.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079041.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079041.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079041.mp3"
        }
      },
      {
        "nomorAyat": 42,
        "teksArab": "يَسْـَٔلُوْنَكَ عَنِ السَّاعَةِ اَيَّانَ مُرْسٰىهَاۗ",
        "teksLatin": "Yas'alūnaka ‘anis-sā‘ati ayyāna mursāhā.",
        "teksIndonesia": "Mereka (orang-orang kafir) bertanya kepadamu (Nabi Muhammad) tentang hari Kiamat, “Kapankah terjadinya?”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079042.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079042.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079042.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079042.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079042.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079042.mp3"
        }
      },
      {
        "nomorAyat": 43,
        "teksArab": "فِيْمَ اَنْتَ مِنْ ذِكْرٰىهَاۗ",
        "teksLatin": "Fīma anta min żikrāhā.",
        "teksIndonesia": "Untuk apa engkau perlu menyebutkan (waktu)-nya?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079043.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079043.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079043.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079043.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079043.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079043.mp3"
        }
      },
      {
        "nomorAyat": 44,
        "teksArab": "اِلٰى رَبِّكَ مُنْتَهٰىهَاۗ",
        "teksLatin": "Ilā rabbika muntahāhā.",
        "teksIndonesia": "Kepada Tuhanmulah (dikembalikan) kesudahan (ketentuan waktu)-nya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079044.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079044.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079044.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079044.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079044.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079044.mp3"
        }
      },
      {
        "nomorAyat": 45,
        "teksArab": "اِنَّمَآ اَنْتَ مُنْذِرُ مَنْ يَّخْشٰىهَاۗ",
        "teksLatin": "Innamā anta munżiru may yakhsyāhā.",
        "teksIndonesia": "Engkau (Nabi Muhammad) hanyalah pemberi peringatan kepada siapa yang takut padanya (hari Kiamat).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079045.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079045.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079045.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079045.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079045.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079045.mp3"
        }
      },
      {
        "nomorAyat": 46,
        "teksArab": "كَاَنَّهُمْ يَوْمَ يَرَوْنَهَا لَمْ يَلْبَثُوْٓا اِلَّا عَشِيَّةً اَوْ ضُحٰىهَا ࣖ",
        "teksLatin": "Ka'annahum yauma yaraunahā lam yalbaṡū illā ‘asyiyyatan au ḍuḥāhā.",
        "teksIndonesia": "Pada hari ketika melihatnya (hari Kiamat itu), mereka merasa seakan-akan hanya (sebentar) tinggal (di dunia) pada waktu petang atau pagi.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/079046.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/079046.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/079046.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/079046.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/079046.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/079046.mp3"
        }
      }
    ]
  },
  "80": {
    "nomor": 80,
    "namaLatin": "'Abasa",
    "namaArab": "عبس",
    "arti": "Bermuka Masam",
    "jumlahAyat": 42,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat 'Abasa terdiri atas 42 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat An Najm. Dinamai <i>'Abasa</i>  diambil dari perkataan <i>'Abasa</i> yang terdapat pada ayat pertama surat ini.<br> Menurut riwayat, pada suatu ketika Rasulullah s.a.w. menerima dan berbicara dengan pemuka-pemuka Quraisy yang beliau harapkan agar mereka masuk Islam. Dalam pada itu datanglah Ibnu Ummi Maktum, seorang sahabat yang buta yang mengharap agar Rasulullah s.a.w. membacakan kepadanya ayat- ayat Al Quran yang telah diturunkan Allah. tetapi Rasulullah s.a.w. bermuka masam dan memalingkan muka dari Ibnu Ummi Maktum yang buta itu, lalu Allah menurunkan surat ini sebagai teguran atas sikap Rasulullah terhadap ibnu Ummi Maktum itu.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/080.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/080.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/080.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/080.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/080.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/080.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "عَبَسَ وَتَوَلّٰىٓۙ",
        "teksLatin": "‘Abasa wa tawallā.",
        "teksIndonesia": "Dia (Nabi Muhammad) berwajah masam dan berpaling",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "اَنْ جَاۤءَهُ الْاَعْمٰىۗ",
        "teksLatin": "An jā'ahul-a‘mā.",
        "teksIndonesia": "karena seorang tunanetra (Abdullah bin Ummi Maktum) telah datang kepadanya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَمَا يُدْرِيْكَ لَعَلَّهٗ يَزَّكّٰىٓۙ",
        "teksLatin": "Wa mā yudrīka la‘allahū yazzakkā.",
        "teksIndonesia": "Tahukah engkau (Nabi Muhammad) boleh jadi dia ingin menyucikan dirinya (dari dosa)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "اَوْ يَذَّكَّرُ فَتَنْفَعَهُ الذِّكْرٰىۗ",
        "teksLatin": "Au yażżakkaru fatanfa‘ahuż-żikrā.",
        "teksIndonesia": "atau dia (ingin) mendapatkan pengajaran sehingga pengajaran itu bermanfaat baginya?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "اَمَّا مَنِ اسْتَغْنٰىۙ",
        "teksLatin": "Ammā manistagnā.",
        "teksIndonesia": "Adapun orang yang merasa dirinya serba cukup (para pembesar Quraisy),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "فَاَنْتَ لَهٗ تَصَدّٰىۗ",
        "teksLatin": "Fa anta lahū taṣaddā.",
        "teksIndonesia": "engkau (Nabi Muhammad) memberi perhatian kepadanya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "وَمَا عَلَيْكَ اَلَّا يَزَّكّٰىۗ",
        "teksLatin": "Wa mā ‘alaika allā yazzakkā.",
        "teksIndonesia": "Padahal, tidak ada (cela) atasmu kalau dia tidak menyucikan diri (beriman).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "وَاَمَّا مَنْ جَاۤءَكَ يَسْعٰىۙ",
        "teksLatin": "Wa ammā man jā'aka yas‘ā.",
        "teksIndonesia": "Adapun orang yang datang kepadamu dengan bersegera (untuk mendapatkan pengajaran),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "وَهُوَ يَخْشٰىۙ",
        "teksLatin": "Wa huwa yakhsyā.",
        "teksIndonesia": "sedangkan dia takut (kepada Allah),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "فَاَنْتَ عَنْهُ تَلَهّٰىۚ",
        "teksLatin": "Fa anta ‘anhu talahhā.",
        "teksIndonesia": "malah engkau (Nabi Muhammad) abaikan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "كَلَّآ اِنَّهَا تَذْكِرَةٌ ۚ",
        "teksLatin": "Kallā innahā tażkirah(tun).",
        "teksIndonesia": "Sekali-kali jangan (begitu)! Sesungguhnya (ajaran Allah) itu merupakan peringatan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "فَمَنْ شَاۤءَ ذَكَرَهٗ ۘ",
        "teksLatin": "Faman syā'a żakarah(ū).",
        "teksIndonesia": "Siapa yang menghendaki tentulah akan memperhatikannya",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "فِيْ صُحُفٍ مُّكَرَّمَةٍۙ",
        "teksLatin": "Fī ṣuḥufim mukarrmah(tin).",
        "teksIndonesia": "di dalam suhuf yang dimuliakan (di sisi Allah),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "مَّرْفُوْعَةٍ مُّطَهَّرَةٍ ۢ ۙ",
        "teksLatin": "Marfū‘atim muṭahharah(tin).",
        "teksIndonesia": "yang ditinggikan (kedudukannya) lagi disucikan",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "بِاَيْدِيْ سَفَرَةٍۙ",
        "teksLatin": "Bi'aidī safarah(tin).",
        "teksIndonesia": "di tangan para utusan (malaikat)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "كِرَامٍۢ بَرَرَةٍۗ",
        "teksLatin": "Kirāmim bararah(tin).",
        "teksIndonesia": "yang mulia lagi berbudi.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "قُتِلَ الْاِنْسَانُ مَآ اَكْفَرَهٗۗ",
        "teksLatin": "Qutilal-insānu mā akfarah(ū).",
        "teksIndonesia": "Celakalah manusia! Alangkah kufur dia!",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "مِنْ اَيِّ شَيْءٍ خَلَقَهٗۗ",
        "teksLatin": "Min ayyi syai'in khalaqah(ū).",
        "teksIndonesia": "Dari apakah Dia menciptakannya?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "مِنْ نُّطْفَةٍۗ خَلَقَهٗ فَقَدَّرَهٗۗ",
        "teksLatin": "Min nuṭfah(tin), khalaqahū fa qaddarah(ū).",
        "teksIndonesia": "Dia menciptakannya dari setetes mani, lalu menentukan (takdir)-nya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080019.mp3"
        }
      },
      {
        "nomorAyat": 20,
        "teksArab": "ثُمَّ السَّبِيْلَ يَسَّرَهٗۙ",
        "teksLatin": "Ṡummas-sabīla yassarah(ū).",
        "teksIndonesia": "Kemudian, jalannya Dia mudahkan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080020.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080020.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080020.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080020.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080020.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080020.mp3"
        }
      },
      {
        "nomorAyat": 21,
        "teksArab": "ثُمَّ اَمَاتَهٗ فَاَقْبَرَهٗۙ",
        "teksLatin": "Ṡumma amātahū fa aqbarah(ū).",
        "teksIndonesia": "Kemudian, Dia mematikannya lalu menguburkannya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080021.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080021.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080021.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080021.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080021.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080021.mp3"
        }
      },
      {
        "nomorAyat": 22,
        "teksArab": "ثُمَّ اِذَا شَاۤءَ اَنْشَرَهٗۗ",
        "teksLatin": "Ṡumma iżā syā'a ansyarah(ū).",
        "teksIndonesia": "Kemudian, jika menghendaki, Dia membangkitkannya kembali.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080022.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080022.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080022.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080022.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080022.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080022.mp3"
        }
      },
      {
        "nomorAyat": 23,
        "teksArab": "كَلَّا لَمَّا يَقْضِ مَآ اَمَرَهٗۗ",
        "teksLatin": "Kallā lammā yaqḍi mā amarah(ū).",
        "teksIndonesia": "Sekali-kali jangan (begitu)! Dia (manusia) itu belum melaksanakan apa yang Dia (Allah) perintahkan kepadanya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080023.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080023.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080023.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080023.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080023.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080023.mp3"
        }
      },
      {
        "nomorAyat": 24,
        "teksArab": "فَلْيَنْظُرِ الْاِنْسَانُ اِلٰى طَعَامِهٖٓ ۙ ",
        "teksLatin": "Falyanẓuril-insānu ilā ṭa‘āmih(ī).",
        "teksIndonesia": "Maka, hendaklah manusia itu memperhatikan makanannya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080024.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080024.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080024.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080024.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080024.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080024.mp3"
        }
      },
      {
        "nomorAyat": 25,
        "teksArab": "اَنَّا صَبَبْنَا الْمَاۤءَ صَبًّاۙ",
        "teksLatin": "Annā ṣababnal-mā'a ṣabbā(n).",
        "teksIndonesia": "Sesungguhnya Kami telah mencurahkan air (dari langit) dengan berlimpah.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080025.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080025.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080025.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080025.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080025.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080025.mp3"
        }
      },
      {
        "nomorAyat": 26,
        "teksArab": "ثُمَّ شَقَقْنَا الْاَرْضَ شَقًّاۙ",
        "teksLatin": "Ṡumma syaqaqnal-arḍa syaqqā(n).",
        "teksIndonesia": "Kemudian, Kami belah bumi dengan sebaik-baiknya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080026.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080026.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080026.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080026.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080026.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080026.mp3"
        }
      },
      {
        "nomorAyat": 27,
        "teksArab": "فَاَنْۢبَتْنَا فِيْهَا حَبًّاۙ",
        "teksLatin": "Fa'ambatnā fīhā ḥabbā(n).",
        "teksIndonesia": "Lalu, Kami tumbuhkan padanya biji-bijian,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080027.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080027.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080027.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080027.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080027.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080027.mp3"
        }
      },
      {
        "nomorAyat": 28,
        "teksArab": "وَّعِنَبًا وَّقَضْبًاۙ",
        "teksLatin": "Wa ‘inabaw wa qaḍbā(n).",
        "teksIndonesia": "anggur, sayur-sayuran,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080028.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080028.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080028.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080028.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080028.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080028.mp3"
        }
      },
      {
        "nomorAyat": 29,
        "teksArab": "وَّزَيْتُوْنًا وَّنَخْلًاۙ",
        "teksLatin": "Wa zaitūnaw wa nakhlā(n).",
        "teksIndonesia": "zaitun, pohon kurma,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080029.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080029.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080029.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080029.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080029.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080029.mp3"
        }
      },
      {
        "nomorAyat": 30,
        "teksArab": "وَّحَدَاۤىِٕقَ غُلْبًا",
        "teksLatin": "Wa ḥadā'iqa gulbā(n).",
        "teksIndonesia": "kebun-kebun (yang) rindang,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080030.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080030.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080030.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080030.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080030.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080030.mp3"
        }
      },
      {
        "nomorAyat": 31,
        "teksArab": "وَفَاكِهَةً وَّاَبًّا",
        "teksLatin": "Wa fākihataw wa abbā(n).",
        "teksIndonesia": "buah-buahan, dan rerumputan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080031.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080031.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080031.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080031.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080031.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080031.mp3"
        }
      },
      {
        "nomorAyat": 32,
        "teksArab": "مَتَاعًا لَّكُمْ وَلِاَنْعَامِكُمْۗ",
        "teksLatin": "Matā‘al lakum wa li'an‘āmikum.",
        "teksIndonesia": "(Semua itu disediakan) untuk kesenanganmu dan hewan-hewan ternakmu.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080032.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080032.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080032.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080032.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080032.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080032.mp3"
        }
      },
      {
        "nomorAyat": 33,
        "teksArab": "فَاِذَا جَاۤءَتِ الصَّاۤخَّةُ ۖ",
        "teksLatin": "Fa iżā jā'atiṣ-ṣākhkhah(tu).",
        "teksIndonesia": "Maka, apabila datang suara yang memekakkan (dari tiupan sangkakala),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080033.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080033.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080033.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080033.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080033.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080033.mp3"
        }
      },
      {
        "nomorAyat": 34,
        "teksArab": "يَوْمَ يَفِرُّ الْمَرْءُ مِنْ اَخِيْهِۙ",
        "teksLatin": "Yauma yafirrul-mar'u min akhīh(i).",
        "teksIndonesia": "pada hari itu manusia lari dari saudaranya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080034.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080034.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080034.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080034.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080034.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080034.mp3"
        }
      },
      {
        "nomorAyat": 35,
        "teksArab": "وَاُمِّهٖ وَاَبِيْهِۙ",
        "teksLatin": "Wa ummihī wa abīh(i).",
        "teksIndonesia": "(dari) ibu dan bapaknya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080035.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080035.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080035.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080035.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080035.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080035.mp3"
        }
      },
      {
        "nomorAyat": 36,
        "teksArab": "وَصَاحِبَتِهٖ وَبَنِيْهِۗ",
        "teksLatin": "Wa ṣāḥibatihī wa banīh(i).",
        "teksIndonesia": "serta (dari) istri dan anak-anaknya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080036.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080036.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080036.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080036.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080036.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080036.mp3"
        }
      },
      {
        "nomorAyat": 37,
        "teksArab": "لِكُلِّ امْرِئٍ مِّنْهُمْ يَوْمَىِٕذٍ شَأْنٌ يُّغْنِيْهِۗ",
        "teksLatin": "Likullimri'im minhum yauma'iżin sya'nuy yugnīh(i).",
        "teksIndonesia": "Setiap orang dari mereka pada hari itu mempunyai urusan yang menyibukkannya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080037.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080037.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080037.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080037.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080037.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080037.mp3"
        }
      },
      {
        "nomorAyat": 38,
        "teksArab": "وُجُوْهٌ يَّوْمَىِٕذٍ مُّسْفِرَةٌۙ",
        "teksLatin": "Wujūhuy yauma'iżim musfirah(tun).",
        "teksIndonesia": "Pada hari itu ada wajah-wajah yang berseri-seri,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080038.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080038.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080038.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080038.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080038.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080038.mp3"
        }
      },
      {
        "nomorAyat": 39,
        "teksArab": "ضَاحِكَةٌ مُّسْتَبْشِرَةٌ ۚ",
        "teksLatin": "Ḍāḥikatum mustabsyirah(tun).",
        "teksIndonesia": "tertawa lagi gembira ria.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080039.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080039.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080039.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080039.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080039.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080039.mp3"
        }
      },
      {
        "nomorAyat": 40,
        "teksArab": "وَوُجُوْهٌ يَّوْمَىِٕذٍ عَلَيْهَا غَبَرَةٌۙ",
        "teksLatin": "Wa wujūhuy yauma'iżin ‘alaihā gabarah(tun).",
        "teksIndonesia": "Pada hari itu ada (pula) wajah-wajah yang tertutup debu (suram)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080040.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080040.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080040.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080040.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080040.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080040.mp3"
        }
      },
      {
        "nomorAyat": 41,
        "teksArab": "تَرْهَقُهَا قَتَرَةٌ ۗ",
        "teksLatin": "Tarhaquhā qatarah(tun).",
        "teksIndonesia": "dan tertutup oleh kegelapan (ditimpa kehinaan dan kesusahan).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080041.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080041.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080041.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080041.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080041.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080041.mp3"
        }
      },
      {
        "nomorAyat": 42,
        "teksArab": "اُولٰۤىِٕكَ هُمُ الْكَفَرَةُ الْفَجَرَةُ ࣖ",
        "teksLatin": "Ulā'ika humul-kafaratul-fajarah(tu).",
        "teksIndonesia": "Mereka itulah orang-orang kafir lagi para pendurhaka.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/080042.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/080042.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/080042.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/080042.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/080042.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/080042.mp3"
        }
      }
    ]
  },
  "81": {
    "nomor": 81,
    "namaLatin": "At-Takwir",
    "namaArab": "التكوير",
    "arti": "Penggulungan",
    "jumlahAyat": 29,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat At Takwir terdiri atas 29 ayat dan termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Masadd. Kata <i>At Takwir</i> (terbelah) yang menjadi nama bagi surat ini adalah dari kata asal (mashdar) dari kata kerja <i>kuwwirat</i> (digulung) yang terdapat pada ayat pertama surat ini.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/081.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/081.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/081.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/081.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/081.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/081.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "اِذَا الشَّمْسُ كُوِّرَتْۖ",
        "teksLatin": "Iżasy-syamsu kuwwirat.",
        "teksIndonesia": "Apabila matahari digulung,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَاِذَا النُّجُوْمُ انْكَدَرَتْۖ",
        "teksLatin": "Wa iżan-nujūmunkadarat.",
        "teksIndonesia": "apabila bintang-bintang berjatuhan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَاِذَا الْجِبَالُ سُيِّرَتْۖ",
        "teksLatin": "Wa iżal-jibālu suyyirat.",
        "teksIndonesia": "apabila gunung-gunung dihancurkan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "وَاِذَا الْعِشَارُ عُطِّلَتْۖ",
        "teksLatin": "Wa iżal-‘isyāru ‘uṭṭilat.",
        "teksIndonesia": "apabila unta-unta yang bunting ditinggalkan (tidak terurus),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "وَاِذَا الْوُحُوْشُ حُشِرَتْۖ",
        "teksLatin": "Wa iżal-wuḥūsy ḥusyirat.",
        "teksIndonesia": "apabila binatang-binatang liar dikumpulkan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "وَاِذَا الْبِحَارُ سُجِّرَتْۖ",
        "teksLatin": "Wa iżal-biḥāru sujjirat.",
        "teksIndonesia": "apabila lautan dipanaskan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "وَاِذَا النُّفُوْسُ زُوِّجَتْۖ",
        "teksLatin": "Wa iżan-nufūsu zuwwijat.",
        "teksIndonesia": "apabila roh-roh dipertemukan (dengan tubuh),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "وَاِذَا الْمَوْءٗدَةُ سُىِٕلَتْۖ ",
        "teksLatin": "Wa iżal-mau'ūdatu su'ilat.",
        "teksIndonesia": "apabila bayi-bayi perempuan yang dikubur hidup-hidup ditanya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "بِاَيِّ ذَنْۢبٍ قُتِلَتْۚ",
        "teksLatin": "Bi'ayyi żambin qutilat.",
        "teksIndonesia": "“Karena dosa apa dia dibunuh,”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "وَاِذَا الصُّحُفُ نُشِرَتْۖ",
        "teksLatin": "Wa iżaṣ-ṣuḥufu nusyirat.",
        "teksIndonesia": "apabila lembaran-lembaran (catatan amal) telah dibuka lebar-lebar,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "وَاِذَا السَّمَاۤءُ كُشِطَتْۖ",
        "teksLatin": "Wa iżas-samā'u kusyiṭat.",
        "teksIndonesia": "apabila langit dilenyapkan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "وَاِذَا الْجَحِيْمُ سُعِّرَتْۖ",
        "teksLatin": "Wa iżal-jaḥīmu su‘‘irat.",
        "teksIndonesia": "apabila (neraka) Jahim dinyalakan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "وَاِذَا الْجَنَّةُ اُزْلِفَتْۖ",
        "teksLatin": "Wa iżal-jannatu uzlifat.",
        "teksIndonesia": "dan apabila surga didekatkan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "عَلِمَتْ نَفْسٌ مَّآ اَحْضَرَتْۗ",
        "teksLatin": "‘Alimat nafsum mā aḥḍarat.",
        "teksIndonesia": "setiap jiwa akan mengetahui apa yang telah dikerjakannya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "فَلَآ اُقْسِمُ بِالْخُنَّسِۙ",
        "teksLatin": "Falā uqsimu bil-khunnas(i).",
        "teksIndonesia": "Aku bersumpah demi bintang-bintang",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "الْجَوَارِ الْكُنَّسِۙ",
        "teksLatin": "Al-jawāril-kunnas(i).",
        "teksIndonesia": "yang beredar lagi terbenam,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "وَالَّيْلِ اِذَا عَسْعَسَۙ",
        "teksLatin": "Wal-laili iżā ‘as‘as(a).",
        "teksIndonesia": "demi malam apabila telah larut,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "وَالصُّبْحِ اِذَا تَنَفَّسَۙ",
        "teksLatin": "Waṣ-ṣubḥi iżā tanaffas(a).",
        "teksIndonesia": "demi subuh apabila (fajar) telah menyingsing,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "اِنَّهٗ لَقَوْلُ رَسُوْلٍ كَرِيْمٍۙ",
        "teksLatin": "Innahū laqaulu rasūlin karīm(in).",
        "teksIndonesia": "sesungguhnya (Al-Qur’an) itu benar-benar firman (Allah yang dibawa oleh) utusan yang mulia (Jibril)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081019.mp3"
        }
      },
      {
        "nomorAyat": 20,
        "teksArab": "ذِيْ قُوَّةٍ عِنْدَ ذِى الْعَرْشِ مَكِيْنٍۙ",
        "teksLatin": "Żī quwwatin ‘inda żil-‘arsyi makīn(in).",
        "teksIndonesia": "yang memiliki kekuatan dan kedudukan tinggi di sisi (Allah) yang memiliki ʻArasy,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081020.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081020.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081020.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081020.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081020.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081020.mp3"
        }
      },
      {
        "nomorAyat": 21,
        "teksArab": "مُّطَاعٍ ثَمَّ اَمِيْنٍۗ",
        "teksLatin": "Muṭā‘in ṡamma amīn(in).",
        "teksIndonesia": "yang di sana (Jibril) ditaati lagi dipercaya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081021.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081021.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081021.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081021.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081021.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081021.mp3"
        }
      },
      {
        "nomorAyat": 22,
        "teksArab": "وَمَا صَاحِبُكُمْ بِمَجْنُوْنٍۚ",
        "teksLatin": "Wa mā ṣāḥibukum bimajnūn(in).",
        "teksIndonesia": "Temanmu (Nabi Muhammad) itu bukanlah orang gila.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081022.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081022.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081022.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081022.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081022.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081022.mp3"
        }
      },
      {
        "nomorAyat": 23,
        "teksArab": "وَلَقَدْ رَاٰهُ بِالْاُفُقِ الْمُبِيْنِۚ",
        "teksLatin": "Wa laqad ra'āhu bil-ufuqil-mubīn(i).",
        "teksIndonesia": "Sungguh, dia (Nabi Muhammad) benar-benar telah melihatnya (Jibril) di ufuk yang terang.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081023.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081023.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081023.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081023.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081023.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081023.mp3"
        }
      },
      {
        "nomorAyat": 24,
        "teksArab": "وَمَا هُوَ عَلَى الْغَيْبِ بِضَنِيْنٍۚ",
        "teksLatin": "Wa mā huwa ‘alal-gaibi biḍanīn(in).",
        "teksIndonesia": "Dia (Nabi Muhammad) bukanlah seorang yang kikir (enggan) untuk menerangkan yang gaib.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081024.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081024.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081024.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081024.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081024.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081024.mp3"
        }
      },
      {
        "nomorAyat": 25,
        "teksArab": "وَمَا هُوَ بِقَوْلِ شَيْطٰنٍ رَّجِيْمٍۚ",
        "teksLatin": "Wa mā huwa biqauli syaiṭānir rajīm(in).",
        "teksIndonesia": "(Al-Qur’an) itu bukanlah perkataan setan yang terkutuk.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081025.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081025.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081025.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081025.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081025.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081025.mp3"
        }
      },
      {
        "nomorAyat": 26,
        "teksArab": "فَاَيْنَ تَذْهَبُوْنَۗ",
        "teksLatin": "Fa aina tażhabūn(a).",
        "teksIndonesia": "Maka, ke manakah kamu akan pergi?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081026.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081026.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081026.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081026.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081026.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081026.mp3"
        }
      },
      {
        "nomorAyat": 27,
        "teksArab": "اِنْ هُوَ اِلَّا ذِكْرٌ لِّلْعٰلَمِيْنَۙ",
        "teksLatin": "In huwa illā żikrul lil-‘ālamīn(a).",
        "teksIndonesia": "(Al-Qur’an) itu tidak lain, kecuali peringatan bagi semesta alam,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081027.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081027.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081027.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081027.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081027.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081027.mp3"
        }
      },
      {
        "nomorAyat": 28,
        "teksArab": "لِمَنْ شَاۤءَ مِنْكُمْ اَنْ يَّسْتَقِيْمَۗ",
        "teksLatin": "Liman syā'a minkum ay yastaqīm(a).",
        "teksIndonesia": "(yaitu) bagi siapa di antaramu yang hendak menempuh jalan yang lurus.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081028.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081028.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081028.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081028.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081028.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081028.mp3"
        }
      },
      {
        "nomorAyat": 29,
        "teksArab": "وَمَا تَشَاۤءُوْنَ اِلَّآ اَنْ يَّشَاۤءَ اللّٰهُ رَبُّ الْعٰلَمِيْنَ ࣖ",
        "teksLatin": "Wa mā tasyā'ūna illā ay yasyā'allāhu rabbul-‘ālamīn(a).",
        "teksIndonesia": "Kamu tidak dapat berkehendak, kecuali apabila dikehendaki Allah, Tuhan semesta alam.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/081029.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/081029.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/081029.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/081029.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/081029.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/081029.mp3"
        }
      }
    ]
  },
  "82": {
    "nomor": 82,
    "namaLatin": "Al-Infitar",
    "namaArab": "الانفطار",
    "arti": "Terbelah",
    "jumlahAyat": 19,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 19 ayat, termasuk golongan surat-surat Makkiyah dan diturunkan sesudah surat An Naazi'aat. Al Infithaar yang dijadikan  nama untuk surat ini adalah kata asal dari kata <i>Infatharat</i> (terbelah)  yang terdapat pada ayat pertama.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/082.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/082.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/082.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/082.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/082.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/082.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "اِذَا السَّمَاۤءُ انْفَطَرَتْۙ",
        "teksLatin": "Iżas-samā'unfaṭarat.",
        "teksIndonesia": "Apabila langit terbelah,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَاِذَا الْكَوَاكِبُ انْتَثَرَتْۙ",
        "teksLatin": "Wa iżal-kawākibuntaṡarat.",
        "teksIndonesia": "apabila bintang-bintang jatuh berserakan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَاِذَا الْبِحَارُ فُجِّرَتْۙ",
        "teksLatin": "Wa iżal-biḥāru fujjirat.",
        "teksIndonesia": "apabila lautan diluapkan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "وَاِذَا الْقُبُوْرُ بُعْثِرَتْۙ",
        "teksLatin": "Wa iżal-qubūru bu‘ṡirat.",
        "teksIndonesia": "dan apabila kuburan-kuburan dibongkar,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "عَلِمَتْ نَفْسٌ مَّا قَدَّمَتْ وَاَخَّرَتْۗ",
        "teksLatin": "‘Alimat nafsum mā qaddamat wa akhkharat.",
        "teksIndonesia": "setiap jiwa akan mengetahui apa yang telah dikerjakan dan yang dilalaikan(-nya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "يٰٓاَيُّهَا الْاِنْسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيْمِۙ",
        "teksLatin": "Yā ayyuhal-insānu mā garraka birabbikal-karīm(i).",
        "teksIndonesia": "Wahai manusia, apakah yang telah memperdayakanmu (berbuat durhaka) terhadap Tuhanmu Yang Maha Mulia,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "الَّذِيْ خَلَقَكَ فَسَوّٰىكَ فَعَدَلَكَۙ",
        "teksLatin": "Allażī khalaqaka fa sawwāka fa ‘adalak(a).",
        "teksIndonesia": "yang telah menciptakanmu lalu menyempurnakan kejadianmu dan menjadikan (susunan tubuh)-mu seimbang?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "فِيْٓ اَيِّ صُوْرَةٍ مَّا شَاۤءَ رَكَّبَكَۗ",
        "teksLatin": "Fī ayyi ṣūratim mā syā'a rakkabak(a).",
        "teksIndonesia": "Dalam bentuk apa saja yang dikehendaki, Dia menyusun (tubuh)-mu.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "كَلَّا بَلْ تُكَذِّبُوْنَ بِالدِّيْنِۙ",
        "teksLatin": "Kallā bal tukażżibūna bid-dīn(i).",
        "teksIndonesia": "Jangan sekali-kali begitu! Bahkan, kamu mendustakan hari Pembalasan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "وَاِنَّ عَلَيْكُمْ لَحٰفِظِيْنَۙ",
        "teksLatin": "Wa inna ‘alaikum laḥāfiẓīn(a).",
        "teksIndonesia": "Sesungguhnya bagi kamu ada (malaikat-malaikat) pengawas",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "كِرَامًا كٰتِبِيْنَۙ",
        "teksLatin": "Kirāman kātibīn(a).",
        "teksIndonesia": "yang mulia (di sisi Allah) dan mencatat (amal perbuatanmu).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "يَعْلَمُوْنَ مَا تَفْعَلُوْنَ",
        "teksLatin": "Ya‘lamūna mā taf‘alūn(a).",
        "teksIndonesia": "Mereka mengetahui apa yang kamu kerjakan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "اِنَّ الْاَبْرَارَ لَفِيْ نَعِيْمٍۙ",
        "teksLatin": "Innal-abrāra lafī na‘īm(in).",
        "teksIndonesia": "Sesungguhnya orang-orang yang berbakti benar-benar berada dalam (surga yang penuh) kenikmatan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "وَّاِنَّ الْفُجَّارَ لَفِيْ جَحِيْمٍ",
        "teksLatin": "Wa innal-fujjāra lafī jaḥīm(in).",
        "teksIndonesia": "Sesungguhnya orang-orang yang durhaka benar-benar berada dalam (neraka) Jahim.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "يَصْلَوْنَهَا يَوْمَ الدِّيْنِ",
        "teksLatin": "Yaṣlaunahā yaumad-dīn(i).",
        "teksIndonesia": "Mereka memasukinya pada hari Pembalasan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "وَمَا هُمْ عَنْهَا بِغَاۤىِٕبِيْنَۗ",
        "teksLatin": "Wa mā hum ‘anhā bigā'ibīn(a). ",
        "teksIndonesia": "Mereka tidak mungkin keluar dari (neraka) itu.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "وَمَآ اَدْرٰىكَ مَا يَوْمُ الدِّيْنِۙ",
        "teksLatin": "Wa mā adrāka mā yaumud-dīn(i).",
        "teksIndonesia": "Tahukah engkau apakah hari Pembalasan itu?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "ثُمَّ مَآ اَدْرٰىكَ مَا يَوْمُ الدِّيْنِۗ",
        "teksLatin": "Ṡumma mā adrāka mā yaumud-dīn(i).",
        "teksIndonesia": "Kemudian, tahukah engkau apakah hari Pembalasan itu?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "يَوْمَ لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْـًٔا ۗوَالْاَمْرُ يَوْمَىِٕذٍ لِّلّٰهِ ࣖ",
        "teksLatin": "Yauma lā tamliku nafsul linafsin syai'ā(n), wal-amru yauma'iżil lillāh(i).",
        "teksIndonesia": "(Itulah) hari (ketika) seseorang tidak berdaya (menolong) orang lain sedikit pun. Segala urusan pada hari itu adalah milik Allah.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/082019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/082019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/082019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/082019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/082019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/082019.mp3"
        }
      }
    ]
  },
  "83": {
    "nomor": 83,
    "namaLatin": "Al-Mutaffifin",
    "namaArab": "المطفّفين",
    "arti": "Orang-Orang Curang",
    "jumlahAyat": 36,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 36 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al 'Ankabuut dan merupakan  surat yang terakhir di Mekkah sebelum hijrah. <i>Al Muthaffifiin</i>  yang dijadikan nama bagi surat ini diambil dari kata  <i>Al Muthaffifiin</i> yang terdapat pada ayat pertama.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/083.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/083.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/083.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/083.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/083.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/083.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "وَيْلٌ لِّلْمُطَفِّفِيْنَۙ",
        "teksLatin": "Wailul lil-muṭaffifīn(a).",
        "teksIndonesia": "Celakalah orang-orang yang curang (dalam menakar dan menimbang)!",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "الَّذِيْنَ اِذَا اكْتَالُوْا عَلَى النَّاسِ يَسْتَوْفُوْنَۖ",
        "teksLatin": "Allażīna iżaktālū ‘alan-nāsi yastaufūn(a).",
        "teksIndonesia": "(Mereka adalah) orang-orang yang apabila menerima takaran dari orang lain, mereka minta dipenuhi.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَاِذَا كَالُوْهُمْ اَوْ وَّزَنُوْهُمْ يُخْسِرُوْنَۗ",
        "teksLatin": "Wa iżā kālūhum au wazanūhum yukhsirūn(a).",
        "teksIndonesia": "(Sebaliknya,) apabila mereka menakar atau menimbang untuk orang lain, mereka kurangi.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "اَلَا يَظُنُّ اُولٰۤىِٕكَ اَنَّهُمْ مَّبْعُوْثُوْنَۙ",
        "teksLatin": "Alā yaẓunnu ulā'ika annahum mab‘ūṡūn(a).",
        "teksIndonesia": "Tidakkah mereka mengira (bahwa) sesungguhnya mereka akan dibangkitkan",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "لِيَوْمٍ عَظِيْمٍۙ",
        "teksLatin": "Liyaumin ‘aẓīm(in).",
        "teksIndonesia": "pada suatu hari yang besar (Kiamat),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "يَّوْمَ يَقُوْمُ النَّاسُ لِرَبِّ الْعٰلَمِيْنَۗ",
        "teksLatin": "Yauma yaqūmun-nāsu lirabbil-‘ālamīn(a).",
        "teksIndonesia": "(yaitu) hari (ketika) manusia bangkit menghadap Tuhan seluruh alam?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "كَلَّآ اِنَّ كِتٰبَ الْفُجَّارِ لَفِيْ سِجِّيْنٍۗ",
        "teksLatin": "Kallā inna kitābal-fujjāri lafī sijjīn(in).",
        "teksIndonesia": "Jangan sekali-kali begitu! Sesungguhnya catatan orang yang durhaka benar-benar (tersimpan) dalam Sijjīn.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "وَمَآ اَدْرٰىكَ مَا سِجِّيْنٌۗ",
        "teksLatin": "Wa mā adrāka mā sijjīn(un).",
        "teksIndonesia": "Tahukah engkau apakah Sijjīn itu?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "كِتٰبٌ مَّرْقُوْمٌۗ",
        "teksLatin": "Kitābum marqūm(un).",
        "teksIndonesia": "(Ia adalah) kitab yang berisi catatan (amal).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "وَيْلٌ يَّوْمَىِٕذٍ لِّلْمُكَذِّبِيْنَۙ",
        "teksLatin": "Wailuy yauma'iżil lil-mukażżibīn(a).",
        "teksIndonesia": "Celakalah pada hari itu bagi para pendusta,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "الَّذِيْنَ يُكَذِّبُوْنَ بِيَوْمِ الدِّيْنِۗ",
        "teksLatin": "Allażīna yukażżibūna biyaumid-dīn(i).",
        "teksIndonesia": "yaitu orang-orang yang mendustakan hari Pembalasan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "وَمَا يُكَذِّبُ بِهٖٓ اِلَّا كُلُّ مُعْتَدٍ اَثِيْمٍۙ",
        "teksLatin": "Wa mā yukażżibu bihī illā kullu mu‘tadin aṡīm(in).",
        "teksIndonesia": "Tidak ada yang mendustakannya, kecuali setiap orang yang melampaui batas lagi sangat berdosa.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "اِذَا تُتْلٰى عَلَيْهِ اٰيٰتُنَا قَالَ اَسَاطِيْرُ الْاَوَّلِيْنَۗ",
        "teksLatin": "Iżā tutlā ‘alaihi āyātunā qāla asāṭīrul-awwalīn(a).",
        "teksIndonesia": "Apabila dibacakan kepadanya ayat-ayat Kami, dia berkata, “(Itu adalah) dongeng orang-orang dahulu.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "كَلَّا بَلْ ۜرَانَ عَلٰى قُلُوْبِهِمْ مَّا كَانُوْا يَكْسِبُوْنَ ",
        "teksLatin": "Kallā bal…rāna ‘alā qulūbihim mā kānū yaksibūn(a).",
        "teksIndonesia": "Sekali-kali tidak! Bahkan, apa yang selalu mereka kerjakan itu telah menutupi hati mereka.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "كَلَّآ اِنَّهُمْ عَنْ رَّبِّهِمْ يَوْمَىِٕذٍ لَّمَحْجُوْبُوْنَۗ",
        "teksLatin": "Kallā innahum ‘ar rabbihim yauma'iżil lamaḥjūbūn(a).",
        "teksIndonesia": "Sekali-kali tidak! Sesungguhnya mereka pada hari itu benar-benar terhalang dari (rahmat) Tuhannya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "ثُمَّ اِنَّهُمْ لَصَالُوا الْجَحِيْمِۗ",
        "teksLatin": "Ṡumma innahum laṣālul-jaḥīm(i). ",
        "teksIndonesia": "Sesungguhnya mereka kemudian benar-benar masuk (neraka) Jahim.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "ثُمَّ يُقَالُ هٰذَا الَّذِيْ كُنْتُمْ بِهٖ تُكَذِّبُوْنَۗ",
        "teksLatin": "Ṡumma yuqālu hāżal-lażī kuntum bihī tukażżibūn(a).",
        "teksIndonesia": "Lalu dikatakan (kepada mereka), “Inilah (azab) yang selalu kamu dustakan.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "كَلَّآ اِنَّ كِتٰبَ الْاَبْرَارِ لَفِيْ عِلِّيِّيْنَۗ ",
        "teksLatin": "Kallā inna kitābal-abrāri lafī ‘illiyyīn(a).",
        "teksIndonesia": "Sekali-kali tidak! Sesungguhnya catatan orang-orang yang berbakti benar-benar tersimpan dalam ‘Illiyyīn.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "وَمَآ اَدْرٰىكَ مَا عِلِّيُّوْنَۗ",
        "teksLatin": "Wa mā adrāka mā ‘illiyyūn(a).",
        "teksIndonesia": "Tahukah engkau apakah ‘Illiyyīn itu?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083019.mp3"
        }
      },
      {
        "nomorAyat": 20,
        "teksArab": "كِتٰبٌ مَّرْقُوْمٌۙ",
        "teksLatin": "Kitābum marqūm(un).",
        "teksIndonesia": "(Itulah) kitab yang berisi catatan (amal)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083020.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083020.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083020.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083020.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083020.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083020.mp3"
        }
      },
      {
        "nomorAyat": 21,
        "teksArab": "يَّشْهَدُهُ الْمُقَرَّبُوْنَۗ",
        "teksLatin": "Yasyhaduhul-muqarrabūn(a).",
        "teksIndonesia": "yang disaksikan oleh (malaikat-malaikat) yang didekatkan (kepada Allah).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083021.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083021.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083021.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083021.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083021.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083021.mp3"
        }
      },
      {
        "nomorAyat": 22,
        "teksArab": "اِنَّ الْاَبْرَارَ لَفِيْ نَعِيْمٍۙ",
        "teksLatin": "Innal-abrāra lafī na‘īm(in).",
        "teksIndonesia": "Sesungguhnya orang-orang yang berbakti benar-benar berada dalam (surga yang penuh) kenikmatan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083022.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083022.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083022.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083022.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083022.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083022.mp3"
        }
      },
      {
        "nomorAyat": 23,
        "teksArab": "عَلَى الْاَرَاۤىِٕكِ يَنْظُرُوْنَۙ",
        "teksLatin": "‘Alal-arā'iki yanẓurūn(a).",
        "teksIndonesia": "Mereka (duduk) di atas dipan-dipan (sambil) melepas pandangan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083023.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083023.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083023.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083023.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083023.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083023.mp3"
        }
      },
      {
        "nomorAyat": 24,
        "teksArab": "تَعْرِفُ فِيْ وُجُوْهِهِمْ نَضْرَةَ النَّعِيْمِۚ",
        "teksLatin": "Ta‘rifu fī wujūhihim naḍratan na‘īm(i).",
        "teksIndonesia": "Engkau dapat mengetahui pada wajah mereka gemerlapnya kenikmatan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083024.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083024.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083024.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083024.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083024.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083024.mp3"
        }
      },
      {
        "nomorAyat": 25,
        "teksArab": "يُسْقَوْنَ مِنْ رَّحِيْقٍ مَّخْتُوْمٍۙ",
        "teksLatin": "Yusqauna mir raḥīqim makhtūm(in).",
        "teksIndonesia": "Mereka diberi minum dari khamar murni (tidak memabukkan) yang (tempatnya) masih diberi lak (sebagai jaminan keasliannya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083025.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083025.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083025.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083025.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083025.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083025.mp3"
        }
      },
      {
        "nomorAyat": 26,
        "teksArab": "خِتٰمُهٗ مِسْكٌ ۗوَفِيْ ذٰلِكَ فَلْيَتَنَافَسِ الْمُتَنٰفِسُوْنَۗ",
        "teksLatin": "Khitāmuhū misk(un), wa fī żālika falyatanāfasil-mutanāfisūn(a).",
        "teksIndonesia": "Laknya terbuat dari kasturi. Untuk (mendapatkan) yang demikian itu hendaknya orang berlomba-lomba.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083026.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083026.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083026.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083026.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083026.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083026.mp3"
        }
      },
      {
        "nomorAyat": 27,
        "teksArab": "وَمِزَاجُهٗ مِنْ تَسْنِيْمٍۙ",
        "teksLatin": "Wa mizājuhū min tasnīm(in).",
        "teksIndonesia": "Campurannya terbuat dari tasnīm,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083027.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083027.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083027.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083027.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083027.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083027.mp3"
        }
      },
      {
        "nomorAyat": 28,
        "teksArab": "عَيْنًا يَّشْرَبُ بِهَا الْمُقَرَّبُوْنَۗ",
        "teksLatin": "‘Ainay yasyrabu bihal-muqarrabūn(a).",
        "teksIndonesia": "(yaitu) mata air yang diminum oleh mereka yang didekatkan (kepada Allah).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083028.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083028.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083028.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083028.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083028.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083028.mp3"
        }
      },
      {
        "nomorAyat": 29,
        "teksArab": "اِنَّ الَّذِيْنَ اَجْرَمُوْا كَانُوْا مِنَ الَّذِيْنَ اٰمَنُوْا يَضْحَكُوْنَۖ",
        "teksLatin": "Innal-lażīna ajramū kānū minal-lażīna āmanū yaḍḥakūn(a).",
        "teksIndonesia": "Sesungguhnya orang-orang yang berdosa adalah mereka yang dahulu selalu mentertawakan orang-orang yang beriman.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083029.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083029.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083029.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083029.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083029.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083029.mp3"
        }
      },
      {
        "nomorAyat": 30,
        "teksArab": "وَاِذَا مَرُّوْا بِهِمْ يَتَغَامَزُوْنَۖ",
        "teksLatin": "Wa iżā marrū bihim yatagāmazūn(a).",
        "teksIndonesia": "Apabila mereka (orang-orang yang beriman) melintas di hadapan mereka, mereka saling mengedip-ngedipkan matanya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083030.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083030.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083030.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083030.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083030.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083030.mp3"
        }
      },
      {
        "nomorAyat": 31,
        "teksArab": "وَاِذَا انْقَلَبُوْٓا اِلٰٓى اَهْلِهِمُ انْقَلَبُوْا فَكِهِيْنَۖ",
        "teksLatin": "Wa iżanqalabū ilā ahlihimunqalabū fakihīn(a).",
        "teksIndonesia": "Apabila kembali kepada kaumnya, mereka kembali dengan gembira ria (dan sombong).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083031.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083031.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083031.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083031.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083031.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083031.mp3"
        }
      },
      {
        "nomorAyat": 32,
        "teksArab": "وَاِذَا رَاَوْهُمْ قَالُوْٓا اِنَّ هٰٓؤُلَاۤءِ لَضَاۤلُّوْنَۙ",
        "teksLatin": "Wa iżā ra'auhum qālū inna hā'ulā'i laḍāllūn(a).",
        "teksIndonesia": "Apabila melihat (orang-orang mukmin), mereka mengatakan, “Sesungguhnya mereka benar-benar orang-orang sesat,”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083032.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083032.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083032.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083032.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083032.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083032.mp3"
        }
      },
      {
        "nomorAyat": 33,
        "teksArab": "وَمَآ اُرْسِلُوْا عَلَيْهِمْ حٰفِظِيْنَۗ",
        "teksLatin": "Wa mā ursilū ‘alaihim ḥāfiẓīn(a). ",
        "teksIndonesia": "padahal mereka (orang-orang yang berdosa itu) tidak diutus sebagai penjaga (orang-orang mukmin).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083033.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083033.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083033.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083033.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083033.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083033.mp3"
        }
      },
      {
        "nomorAyat": 34,
        "teksArab": "فَالْيَوْمَ الَّذِيْنَ اٰمَنُوْا مِنَ الْكُفَّارِ يَضْحَكُوْنَۙ",
        "teksLatin": "Fal-yaumal-lażīna āmanū minal kuffāri yaḍḥakūn(a).",
        "teksIndonesia": "Pada hari ini (hari Kiamat), orang-orang yang berimanlah yang mentertawakan orang-orang kafir.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083034.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083034.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083034.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083034.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083034.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083034.mp3"
        }
      },
      {
        "nomorAyat": 35,
        "teksArab": "عَلَى الْاَرَاۤىِٕكِ يَنْظُرُوْنَۗ",
        "teksLatin": "‘Alal-arā'iki yanẓurūn(a).",
        "teksIndonesia": "Mereka (duduk) di atas dipan-dipan (sambil) melepas pandangan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083035.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083035.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083035.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083035.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083035.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083035.mp3"
        }
      },
      {
        "nomorAyat": 36,
        "teksArab": "هَلْ ثُوِّبَ الْكُفَّارُ مَا كَانُوْا يَفْعَلُوْنَ ࣖ",
        "teksLatin": "Hal ṡuwwibal-kuffāru mā kānū yaf‘alūn(a).",
        "teksIndonesia": "Apakah orang-orang kafir itu telah diberi balasan (hukuman) terhadap apa yang selalu mereka perbuat?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/083036.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/083036.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/083036.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/083036.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/083036.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/083036.mp3"
        }
      }
    ]
  },
  "84": {
    "nomor": 84,
    "namaLatin": "Al-Insyiqaq",
    "namaArab": "الانشقاق",
    "arti": "Terbelah",
    "jumlahAyat": 25,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat Al Insyiqaaq, terdiri atas 25 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Infithaarr. Dinamai <i>Al Insyiqaaq</i> (terbelah), diambil dari perkataan <i>Insyaqqat</i> yang terdapat pada permulaan surat ini, yang pokok katanya ialah <i>insyiqaaq</i>.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/084.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/084.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/084.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/084.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/084.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/084.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "اِذَا السَّمَاۤءُ انْشَقَّتْۙ ",
        "teksLatin": "Iżas-samā'unsyaqqat.",
        "teksIndonesia": "Apabila langit terbelah",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَاَذِنَتْ لِرَبِّهَا وَحُقَّتْۙ ",
        "teksLatin": "Wa ażinat lirabbihā wa ḥuqqat.",
        "teksIndonesia": "serta patuh kepada Tuhannya dan sudah semestinya patuh.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَاِذَا الْاَرْضُ مُدَّتْۙ ",
        "teksLatin": "Wa iẓal-arḍu muddat. ",
        "teksIndonesia": "Apabila bumi diratakan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "وَاَلْقَتْ مَا فِيْهَا وَتَخَلَّتْۙ ",
        "teksLatin": "Wa alqat mā fīhā wa takhallat. ",
        "teksIndonesia": "memuntahkan apa yang ada di dalamnya dan menjadi kosong,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "وَاَذِنَتْ لِرَبِّهَا وَحُقَّتْۗ ",
        "teksLatin": "Wa ażinat lirabbihā wa ḥuqqat. ",
        "teksIndonesia": "serta patuh kepada Tuhannya, dan sudah semestinya patuh.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "يٰٓاَيُّهَا الْاِنْسَانُ اِنَّكَ كَادِحٌ اِلٰى رَبِّكَ كَدْحًا فَمُلٰقِيْهِۚ ",
        "teksLatin": "Yā ayyuhal-insānu innaka kādiḥun ilā rabbika kadḥan fa mulāqīh(i). ",
        "teksIndonesia": "Wahai manusia, sesungguhnya engkau telah bekerja keras menuju (pertemuan dengan) Tuhanmu. Maka, engkau pasti menemui-Nya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "فَاَمَّا مَنْ اُوْتِيَ كِتٰبَهٗ بِيَمِيْنِهٖۙ ",
        "teksLatin": "Fa ammā man ūtiya kitābahū biyamīnih(ī). ",
        "teksIndonesia": "Adapun orang yang catatannya diberikan dari sebelah kanannya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "فَسَوْفَ يُحَاسَبُ حِسَابًا يَّسِيْرًاۙ ",
        "teksLatin": "Fa saufa yuḥāsabu ḥisābay yasīrā(n).",
        "teksIndonesia": "dia akan dihisab dengan pemeriksaan yang mudah",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "وَّيَنْقَلِبُ اِلٰٓى اَهْلِهٖ مَسْرُوْرًاۗ ",
        "teksLatin": "Wa yanqalibu ilā ahlihī masrūrā(n).",
        "teksIndonesia": "dan dia akan kembali kepada keluarganya (yang sama-sama beriman) dengan gembira.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "وَاَمَّا مَنْ اُوْتِيَ كِتٰبَهٗ وَرَاۤءَ ظَهْرِهٖۙ ",
        "teksLatin": "Wa ammā man ūtiya kitābahū warā'a ẓahrih(ī).",
        "teksIndonesia": "Adapun orang yang catatannya diberikan dari belakang punggungnya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "فَسَوْفَ يَدْعُوْا ثُبُوْرًاۙ ",
        "teksLatin": "Fa saufa yad‘ū ṡubūrā(n).",
        "teksIndonesia": "dia akan berteriak, “Celakalah aku!”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "وَّيَصْلٰى سَعِيْرًاۗ ",
        "teksLatin": "Wa yaṣlā sa‘īrā(n).",
        "teksIndonesia": "Dia akan memasuki (neraka) Sa‘ir (yang menyala-nyala).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "اِنَّهٗ كَانَ فِيْٓ اَهْلِهٖ مَسْرُوْرًاۗ ",
        "teksLatin": "Innahū kāna fī ahlihī masrūrā(n).",
        "teksIndonesia": "Sesungguhnya dia dahulu (di dunia) bergembira di kalangan keluarganya (yang sama-sama kafir).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "اِنَّهٗ ظَنَّ اَنْ لَّنْ يَّحُوْرَ ۛ ",
        "teksLatin": "Innahū ẓanna allay yaḥūr(a).",
        "teksIndonesia": "Sesungguhnya dia mengira bahwa dia tidak akan kembali (kepada Tuhannya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "بَلٰىۛ اِنَّ رَبَّهٗ كَانَ بِهٖ بَصِيْرًاۗ ",
        "teksLatin": "Balā, inna rabbahū kāna bihī baṣīrā(n).",
        "teksIndonesia": "Tidak demikian. Sesungguhnya Tuhannya selalu melihatnya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "فَلَآ اُقْسِمُ بِالشَّفَقِۙ ",
        "teksLatin": "Falā uqsimu bisy-syafaq(i).",
        "teksIndonesia": "Aku bersumpah demi cahaya merah pada waktu senja,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "وَالَّيْلِ وَمَا وَسَقَۙ ",
        "teksLatin": "Wal-laili wa mā wasaq(a).",
        "teksIndonesia": "demi malam dan apa yang diselubunginya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "وَالْقَمَرِ اِذَا اتَّسَقَۙ ",
        "teksLatin": "Wal-qamari iżattasaq(a).",
        "teksIndonesia": "dan demi bulan apabila jadi purnama,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "لَتَرْكَبُنَّ طَبَقًا عَنْ طَبَقٍۗ ",
        "teksLatin": "Latarkabunna ṭabaqan ‘an ṭabaq(in).",
        "teksIndonesia": "sungguh, kamu benar-benar akan menjalani tingkat demi tingkat (dalam kehidupan).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084019.mp3"
        }
      },
      {
        "nomorAyat": 20,
        "teksArab": "فَمَا لَهُمْ لَا يُؤْمِنُوْنَۙ ",
        "teksLatin": "Famā lahum lā yu'minūn(a).",
        "teksIndonesia": "Maka, mengapa mereka tidak mau beriman?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084020.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084020.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084020.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084020.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084020.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084020.mp3"
        }
      },
      {
        "nomorAyat": 21,
        "teksArab": "وَاِذَا قُرِئَ عَلَيْهِمُ الْقُرْاٰنُ لَا يَسْجُدُوْنَ ۗ ۩ ",
        "teksLatin": "Wa iżā quri'a ‘alaihimul-qur'ānu lā yasjudūn(a).",
        "teksIndonesia": "Apabila Al-Qur’an dibacakan kepada mereka, mereka tidak (mau) bersujud,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084021.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084021.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084021.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084021.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084021.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084021.mp3"
        }
      },
      {
        "nomorAyat": 22,
        "teksArab": "بَلِ الَّذِيْنَ كَفَرُوْا يُكَذِّبُوْنَۖ ",
        "teksLatin": "Balil-lażīna kafarū yukażżibūn(a).",
        "teksIndonesia": "bahkan orang-orang yang kufur itu mendustakan(-nya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084022.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084022.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084022.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084022.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084022.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084022.mp3"
        }
      },
      {
        "nomorAyat": 23,
        "teksArab": "وَاللّٰهُ اَعْلَمُ بِمَا يُوْعُوْنَۖ ",
        "teksLatin": "Wallāhu a‘lamu bimā yū‘ūn(a).",
        "teksIndonesia": "Allah lebih mengetahui apa yang mereka sembunyikan (dalam hati mereka).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084023.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084023.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084023.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084023.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084023.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084023.mp3"
        }
      },
      {
        "nomorAyat": 24,
        "teksArab": "فَبَشِّرْهُمْ بِعَذَابٍ اَلِيْمٍۙ ",
        "teksLatin": "Fa basysyirhum bi‘ażābin alīm(in).",
        "teksIndonesia": "Maka, berilah mereka kabar ‘gembira’ dengan azab yang pedih,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084024.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084024.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084024.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084024.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084024.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084024.mp3"
        }
      },
      {
        "nomorAyat": 25,
        "teksArab": "اِلَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ لَهُمْ اَجْرٌ غَيْرُ مَمْنُوْنٍ ࣖ ",
        "teksLatin": "Illal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti lahum ajrun gairu mamnūn(in).",
        "teksIndonesia": "Kecuali orang-orang yang beriman dan mengerjakan kebajikan. Bagi merekalah pahala yang tidak putus-putus.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/084025.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/084025.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/084025.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/084025.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/084025.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/084025.mp3"
        }
      }
    ]
  },
  "85": {
    "nomor": 85,
    "namaLatin": "Al-Buruj",
    "namaArab": "البروج",
    "arti": "Gugusan Bintang",
    "jumlahAyat": 22,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat Al Buruuj terdiri atas 22 ayat, termasuk golongan surat-surat Makkiyyah diturunkan sesudah surat Asy-Syams.<br>Dinamai <i>Al Buruuj</i> (gugusan bintang) diambil dari perkataan <i>Al Buruuj</i> yang terdapat pada ayat 1 surat ini.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/085.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/085.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/085.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/085.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/085.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/085.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "وَالسَّمَاۤءِ ذَاتِ الْبُرُوْجِۙ ",
        "teksLatin": "Was-samā'i żātil-burūj(i).",
        "teksIndonesia": "Demi langit yang mempunyai gugusan bintang,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَالْيَوْمِ الْمَوْعُوْدِۙ ",
        "teksLatin": "Wal-yaumil-mau‘ūd(i).",
        "teksIndonesia": "demi hari yang dijanjikan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَشَاهِدٍ وَّمَشْهُوْدٍۗ ",
        "teksLatin": "Wa syāhidiw wa masyhūd(in).",
        "teksIndonesia": "demi yang menyaksikan dan yang disaksikan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "قُتِلَ اَصْحٰبُ الْاُخْدُوْدِۙ ",
        "teksLatin": "Qutila aṣḥābul-ukhdūd(i).",
        "teksIndonesia": "binasalah orang-orang yang membuat parit (tempat menyiksa orang mukmin)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "النَّارِ ذَاتِ الْوَقُوْدِۙ ",
        "teksLatin": "An-nāri żātil-waqūd(i).",
        "teksIndonesia": "(yang dikobarkan) api penuh kayu bakar.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "اِذْ هُمْ عَلَيْهَا قُعُوْدٌۙ ",
        "teksLatin": "Iż hum ‘alaihā qu‘ūd(un).",
        "teksIndonesia": "Ketika (itu) mereka (hanya) duduk di sekitarnya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "وَّهُمْ عَلٰى مَا يَفْعَلُوْنَ بِالْمُؤْمِنِيْنَ شُهُوْدٌ  ۗ ",
        "teksLatin": "Wa hum ‘alā mā yaf‘alūna bil-mu'minīna syuhūd(un).",
        "teksIndonesia": "Mereka menyaksikan apa yang mereka perbuat terhadap orang-orang mukmin.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "وَمَا نَقَمُوْا مِنْهُمْ اِلَّآ اَنْ يُّؤْمِنُوْا بِاللّٰهِ الْعَزِيْزِ الْحَمِيْدِۙ ",
        "teksLatin": "Wa mā naqamū minhum illā ay yu'minū billāhil-‘azīzil-ḥamīd(i).",
        "teksIndonesia": "Tidaklah mereka menyiksa (membakar) orang-orang mukmin itu, kecuali karena mereka beriman kepada Allah Yang Maha Perkasa lagi Maha Terpuji,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "الَّذِيْ لَهٗ مُلْكُ السَّمٰوٰتِ وَالْاَرْضِ ۗوَاللّٰهُ عَلٰى كُلِّ شَيْءٍ شَهِيْدٌ  ۗ ",
        "teksLatin": "Allażī lahū mulkus-samāwāti wal-arḍ(i), wallāhu ‘alā kulli syai'in syahīd(un).",
        "teksIndonesia": "yang memiliki kerajaan langit dan bumi. Allah Maha Menyaksikan segala sesuatu.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "اِنَّ الَّذِيْنَ فَتَنُوا الْمُؤْمِنِيْنَ وَالْمُؤْمِنٰتِ ثُمَّ لَمْ يَتُوْبُوْا فَلَهُمْ عَذَابُ جَهَنَّمَ وَلَهُمْ عَذَابُ الْحَرِيْقِۗ ",
        "teksLatin": "Innal-lażīna fatanul-mu'minīna wal-mu'mināti ṡumma lam yatūbū fa lahum ‘ażābu jahannama wa lahum ‘ażābul-ḥarīq(i).",
        "teksIndonesia": "Sesungguhnya, orang-orang yang menimpakan cobaan (siksa) terhadap mukmin laki-laki dan perempuan, lalu mereka tidak bertobat, mereka akan mendapat azab Jahanam dan mereka akan mendapat azab (neraka) yang membakar.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "اِنَّ الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ لَهُمْ جَنّٰتٌ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ ەۗ ذٰلِكَ الْفَوْزُ الْكَبِيْرُۗ",
        "teksLatin": "Innal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti lahum jannātun tajrī min taḥtihal-anhār(u), żālikal-fauzul-kabīr(u).",
        "teksIndonesia": "Sesungguhnya, orang-orang yang beriman dan mengerjakan kebajikan, mereka akan mendapat surga yang mengalir di bawahnya sungai-sungai. Itulah kemenangan yang besar.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "اِنَّ بَطْشَ رَبِّكَ لَشَدِيْدٌ ۗ ",
        "teksLatin": "Inna baṭsya rabbika lasyadīd(un).",
        "teksIndonesia": "Sesungguhnya azab Tuhanmu sangat keras.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "اِنَّهٗ هُوَ يُبْدِئُ وَيُعِيْدُۚ ",
        "teksLatin": "Innahū huwa yubdi'u wa yu‘īd(u).",
        "teksIndonesia": "Sesungguhnya Dialah yang memulai (penciptaan makhluk) dan yang mengembalikan (hidup setelah mati).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "وَهُوَ الْغَفُوْرُ الْوَدُوْدُۙ ",
        "teksLatin": "Wa huwal-gafūrul-wadūd(u).",
        "teksIndonesia": "Dialah Yang Maha Pengampun lagi Maha Pengasih,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "ذُو الْعَرْشِ الْمَجِيْدُۙ ",
        "teksLatin": "Żul-‘arsyil-majīd(i).",
        "teksIndonesia": "Pemilik ʻArasy lagi Maha Mulia,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "فَعَّالٌ لِّمَا يُرِيْدُۗ ",
        "teksLatin": "Fa‘‘ālul limā yurīd(u).",
        "teksIndonesia": "Maha Kuasa berbuat apa saja yang Dia kehendaki.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "هَلْ اَتٰىكَ حَدِيْثُ الْجُنُوْدِۙ ",
        "teksLatin": "Hal atāka ḥadīṡul-junūd(i).",
        "teksIndonesia": "Sudahkah sampai kepadamu berita tentang bala tentara,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "فِرْعَوْنَ وَثَمُوْدَۗ ",
        "teksLatin": "Fir‘auna wa ṡamūd(a).",
        "teksIndonesia": "(yaitu bala tentara) Fir‘aun dan Samud?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "بَلِ الَّذِيْنَ كَفَرُوْا فِيْ تَكْذِيْبٍۙ ",
        "teksLatin": "Balil-lażīna kafarū fī takżīb(in).",
        "teksIndonesia": "Memang orang-orang kafir (selalu) mendustakan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085019.mp3"
        }
      },
      {
        "nomorAyat": 20,
        "teksArab": "وَّاللّٰهُ مِنْ وَّرَاۤىِٕهِمْ مُّحِيْطٌۚ ",
        "teksLatin": "Wallāhu miw warā'ihim muḥīṭ(un).",
        "teksIndonesia": "padahal Allah mengepung dari belakang mereka.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085020.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085020.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085020.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085020.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085020.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085020.mp3"
        }
      },
      {
        "nomorAyat": 21,
        "teksArab": "بَلْ هُوَ قُرْاٰنٌ مَّجِيْدٌۙ ",
        "teksLatin": "Bal huwa qur'ānum majīd(un).",
        "teksIndonesia": "Bahkan, (yang didustakan itu) Al-Qur’an yang mulia",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085021.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085021.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085021.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085021.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085021.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085021.mp3"
        }
      },
      {
        "nomorAyat": 22,
        "teksArab": "فِيْ لَوْحٍ مَّحْفُوْظٍ ࣖ ",
        "teksLatin": "Fī lauḥim maḥfūẓ(in).",
        "teksIndonesia": "yang (tersimpan) dalam (tempat) yang terjaga (Lauhulmahfuz).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/085022.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/085022.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/085022.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/085022.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/085022.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/085022.mp3"
        }
      }
    ]
  },
  "86": {
    "nomor": 86,
    "namaLatin": "At-Tariq",
    "namaArab": "الطارق",
    "arti": "Yang Datang Di Malam Hari",
    "jumlahAyat": 17,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat Ath Thaariq terdiri atas 17 ayat, termasuk golongan surat-surat Makkiyah,  diturunkan sesudah surat Al Balad.  Dinamai <i>Ath Thaariq</i> (yang datang di malam hari) diambil dari  perkataan <i>Ath Thaariq</i> yang terdapat pada ayat 1 surat ini.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/086.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/086.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/086.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/086.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/086.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/086.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "وَالسَّمَاۤءِ وَالطَّارِقِۙ ",
        "teksLatin": "Was-samā'i waṭ-ṭāriq(i).",
        "teksIndonesia": "Demi langit dan yang datang pada malam hari.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَمَآ اَدْرٰىكَ مَا الطَّارِقُۙ ",
        "teksLatin": "Wa mā adrāka maṭ-ṭāriq(u).",
        "teksIndonesia": "Tahukah kamu apakah yang datang pada malam hari itu?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "النَّجْمُ الثَّاقِبُۙ ",
        "teksLatin": "An-najmuṡ-ṡāqib(u).",
        "teksIndonesia": "(Itulah) bintang yang bersinar tajam.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "اِنْ كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌۗ ",
        "teksLatin": "In kullu nafsil lammā ‘alaihā ḥāfiẓ(un).",
        "teksIndonesia": "Setiap orang pasti ada penjaganya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "فَلْيَنْظُرِ الْاِنْسَانُ مِمَّ خُلِقَ ",
        "teksLatin": "Falyanẓuril-insānu mimma khuliq(a).",
        "teksIndonesia": "Hendaklah manusia memperhatikan dari apa dia diciptakan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "خُلِقَ مِنْ مَّاۤءٍ دَافِقٍۙ ",
        "teksLatin": "Khuliqa mim mā'in dāfiq(in).",
        "teksIndonesia": "Dia diciptakan dari air (mani) yang memancar,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "يَّخْرُجُ مِنْۢ بَيْنِ الصُّلْبِ وَالتَّرَاۤىِٕبِۗ ",
        "teksLatin": "Yakhruju mim bainiṣ-ṣulbi wat-tarā'ib(i).",
        "teksIndonesia": "yang keluar dari antara tulang sulbi (punggung) dan tulang dada.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "اِنَّهٗ عَلٰى رَجْعِهٖ لَقَادِرٌۗ ",
        "teksLatin": "Innahū ‘alā raj‘ihī laqādir(un).",
        "teksIndonesia": "Sesungguhnya Dia (Allah) benar-benar kuasa untuk mengembalikannya (hidup setelah mati)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "يَوْمَ تُبْلَى السَّرَاۤىِٕرُۙ ",
        "teksLatin": "Yauma tublas-sarā'ir(u).",
        "teksIndonesia": "pada hari ditampakkan segala rahasia.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "فَمَا لَهٗ مِنْ قُوَّةٍ وَّلَا نَاصِرٍۗ ",
        "teksLatin": "Famā lahū min quwwatiw wa lā nāṣir(in).",
        "teksIndonesia": "Maka, baginya (manusia) tidak ada lagi kekuatan dan tidak (pula) ada penolong.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "وَالسَّمَاۤءِ ذَاتِ الرَّجْعِۙ ",
        "teksLatin": "Was-samā'i żātir-raj‘(i).",
        "teksIndonesia": "Demi langit yang mengandung hujan",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "وَالْاَرْضِ ذَاتِ الصَّدْعِۙ ",
        "teksLatin": "Wal-arḍi żātiṣ-ṣad‘(i).",
        "teksIndonesia": "dan bumi yang memiliki rekahan (tempat tumbuhnya pepohonan),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "اِنَّهٗ لَقَوْلٌ فَصْلٌۙ ",
        "teksLatin": "Innahū laqaulun faṣl(un).",
        "teksIndonesia": "sesungguhnya (Al-Qur’an) itu benar-benar firman pemisah (antara yang hak dan yang batil)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "وَّمَا هُوَ بِالْهَزْلِۗ ",
        "teksLatin": "Wa mā huwa bil-hazl(i).",
        "teksIndonesia": "dan ia (Al-Qur’an) sama sekali bukan perkataan senda gurau.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "اِنَّهُمْ يَكِيْدُوْنَ كَيْدًاۙ ",
        "teksLatin": "Innahum yakīdūna kaidā(n).",
        "teksIndonesia": "Sesungguhnya mereka (orang kafir) melakukan tipu daya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "وَّاَكِيْدُ كَيْدًاۖ ",
        "teksLatin": "Wa akīdu kaidā(n).",
        "teksIndonesia": "Aku pun membalasnya dengan tipu daya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "فَمَهِّلِ الْكٰفِرِيْنَ اَمْهِلْهُمْ رُوَيْدًا ࣖ ",
        "teksLatin": "Fa mahhilil-kāfirīna amhilhum ruwaidā(n).",
        "teksIndonesia": "Maka, tangguhkanlah orang-orang kafir itu. Biarkanlah mereka sejenak (bersenang-senang).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/086017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/086017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/086017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/086017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/086017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/086017.mp3"
        }
      }
    ]
  },
  "87": {
    "nomor": 87,
    "namaLatin": "Al-A'la",
    "namaArab": "الاعلى",
    "arti": "Maha Tinggi",
    "jumlahAyat": 19,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 19 ayat, termasuk golongan surat-surat Makkiyyah, dan diturunkan sesudah surat At Takwiir. Nama <i>Al AÂ´laa</i> diambil dari kata <i>Al AÂ´laa</i> yang terdapat pada ayat pertama, berarti <i>Yang Paling Tinggi</i>. Muslim meriwayatkan dalam kitab Al Jumu'ah, dan diriwayatkan pula oleh Ashhaabus Sunan, dari Nu'man ibnu Basyir bahwa Rasulullah s.a.w. pada shalat dua hari Raya (Fitri dan Adha) dan shalat Jum'at membaca surat Al AÂ´laa pada rakaat pertama, dan surat Al Ghaasyiyah pada rakaat kedua.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/087.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/087.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/087.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/087.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/087.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/087.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "سَبِّحِ اسْمَ رَبِّكَ الْاَعْلَىۙ ",
        "teksLatin": "Sabbiḥisma rabbikal-a‘lā.",
        "teksIndonesia": "Sucikanlah nama Tuhanmu Yang Maha Tinggi,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "الَّذِيْ خَلَقَ فَسَوّٰىۖ ",
        "teksLatin": "Allażī khalaqa fasawwā.",
        "teksIndonesia": "yang menciptakan, lalu menyempurnakan (ciptaan-Nya),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَالَّذِيْ قَدَّرَ فَهَدٰىۖ ",
        "teksLatin": "Wal-lażī qaddara fahadā.",
        "teksIndonesia": "yang menentukan kadar (masing-masing) dan memberi petunjuk,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "وَالَّذِيْٓ اَخْرَجَ الْمَرْعٰىۖ ",
        "teksLatin": "Wal-lażī akhrajal-mar‘ā.",
        "teksIndonesia": "dan yang menumbuhkan (rerumputan) padang gembala,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "فَجَعَلَهٗ غُثَاۤءً اَحْوٰىۖ ",
        "teksLatin": "Fa ja‘alahū guṡā'an aḥwā.",
        "teksIndonesia": "lalu menjadikannya kering kehitam-hitaman.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "سَنُقْرِئُكَ فَلَا تَنْسٰىٓ  ۖ ",
        "teksLatin": "Sanuqri'uka falā tansā.",
        "teksIndonesia": "Kami akan membacakan (Al-Qur’an) kepadamu (Nabi Muhammad) sehingga engkau tidak akan lupa,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "اِلَّا مَا شَاۤءَ اللّٰهُ ۗاِنَّهٗ يَعْلَمُ الْجَهْرَ وَمَا يَخْفٰىۗ ",
        "teksLatin": "Illā mā syā'allāh(u), innahū ya‘lamul-jahra wa mā yakhfā.",
        "teksIndonesia": "kecuali jika Allah menghendaki. Sesungguhnya Dia mengetahui yang terang dan yang tersembunyi.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "وَنُيَسِّرُكَ لِلْيُسْرٰىۖ ",
        "teksLatin": "Wa nuyassiruka lil-yusrā.",
        "teksIndonesia": "Kami akan melapangkan bagimu jalan kemudahan (dalam segala urusan).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "فَذَكِّرْ اِنْ نَّفَعَتِ الذِّكْرٰىۗ ",
        "teksLatin": "Fa żakkir in nafa‘atiż-żikrā.",
        "teksIndonesia": "Maka, sampaikanlah peringatan jika peringatan itu bermanfaat.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "سَيَذَّكَّرُ مَنْ يَّخْشٰىۙ ",
        "teksLatin": "Sayażżakkaru may yakhsyā.",
        "teksIndonesia": "Orang yang takut (kepada Allah) akan mengambil pelajaran,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "وَيَتَجَنَّبُهَا الْاَشْقَىۙ ",
        "teksLatin": "Wa yatajannabuhal-asyqā.",
        "teksIndonesia": "sedangkan orang-orang yang celaka (kafir) akan menjauhinya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "الَّذِيْ يَصْلَى النَّارَ الْكُبْرٰىۚ ",
        "teksLatin": "Allażī yaṣlan-nāral-kubrā.",
        "teksIndonesia": "(yaitu) orang yang akan memasuki api (neraka) yang besar.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "ثُمَّ لَا يَمُوْتُ فِيْهَا وَلَا يَحْيٰىۗ ",
        "teksLatin": "Ṡumma lā yamūtu fīhā wa lā yaḥyā.",
        "teksIndonesia": "Selanjutnya, dia tidak mati dan tidak (pula) hidup di sana.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "قَدْ اَفْلَحَ مَنْ تَزَكّٰىۙ ",
        "teksLatin": "Qad aflaḥa man tazakkā.",
        "teksIndonesia": "Sungguh, beruntung orang yang menyucikan diri (dari kekafiran)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "وَذَكَرَ اسْمَ رَبِّهٖ فَصَلّٰىۗ ",
        "teksLatin": "Wa żakarasma rabbihī fa ṣallā.",
        "teksIndonesia": "dan mengingat nama Tuhannya, lalu dia salat.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "بَلْ تُؤْثِرُوْنَ الْحَيٰوةَ الدُّنْيَاۖ ",
        "teksLatin": "Bal tu'ṡirūnal-ḥayātad-dun-yā.",
        "teksIndonesia": "Adapun kamu (orang-orang kafir) mengutamakan kehidupan dunia,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "وَالْاٰخِرَةُ خَيْرٌ وَّاَبْقٰىۗ ",
        "teksLatin": "Wal-ākhiratu khairuw wa abqā.",
        "teksIndonesia": "padahal kehidupan akhirat itu lebih baik dan lebih kekal.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "اِنَّ هٰذَا لَفِى الصُّحُفِ الْاُوْلٰىۙ ",
        "teksLatin": "Inna hāżā lafiṣ-ṣuḥufil-ūlā.",
        "teksIndonesia": "Sesungguhnya (penjelasan) ini terdapat dalam suhuf (lembaran-lembaran) yang terdahulu,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "صُحُفِ اِبْرٰهِيْمَ وَمُوْسٰى ࣖ ",
        "teksLatin": "Ṣuḥufi ibrāhīma wa mūsā.",
        "teksIndonesia": "(yaitu) suhuf (yang diturunkan kepada) Ibrahim dan Musa.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/087019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/087019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/087019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/087019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/087019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/087019.mp3"
        }
      }
    ]
  },
  "88": {
    "nomor": 88,
    "namaLatin": "Al-Gasyiyah",
    "namaArab": "الغاشية",
    "arti": "Hari Kiamat",
    "jumlahAyat": 26,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 26 ayat, termasuk surat-surat Makkiyah, diturunkan sesudah surat Adz Dzaariat. Nama <i>Ghaasyiyah</i> diambil dari kata <i>Al Ghaasyiyah</i> yang terdapat pada ayat pertama surat ini yang  artinya peristiwa yang dahsyat, tapi yang dimaksud adalah hari kiamat. Surat ini adalah surat yang kerap kali dibaca Nabi pada rakaat kedua  pada shalat hari-hari Raya dan shalat Jum'at",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/088.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/088.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/088.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/088.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/088.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/088.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "هَلْ اَتٰىكَ حَدِيْثُ الْغَاشِيَةِۗ",
        "teksLatin": "Hal atāka ḥadīṡul-gāsyiyah(ti).",
        "teksIndonesia": "Sudahkah sampai kepadamu berita tentang al-Gāsyiyah (hari Kiamat yang menutupi kesadaran manusia dengan kedahsyatannya)?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وُجُوْهٌ يَّوْمَىِٕذٍ خَاشِعَةٌ  ۙ",
        "teksLatin": "Wujūhuy yauma'iżin khāsyi‘ah(tun).",
        "teksIndonesia": "Pada hari itu banyak wajah yang tertunduk hina",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "عَامِلَةٌ نَّاصِبَةٌ  ۙ",
        "teksLatin": "‘Amilatun nāṣibah(tun).",
        "teksIndonesia": "(karena) berusaha keras (menghindari azab neraka) lagi kepayahan (karena dibelenggu).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "تَصْلٰى نَارًا حَامِيَةً  ۙ",
        "teksLatin": "Taṣlā nāran ḥāmiyah(tan).",
        "teksIndonesia": "Mereka memasuki api (neraka) yang sangat panas.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "تُسْقٰى مِنْ عَيْنٍ اٰنِيَةٍ ۗ",
        "teksLatin": "Tusqā min ‘ainin āniyah(tin).",
        "teksIndonesia": "(Mereka) diberi minum dari sumber mata air yang sangat panas.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "لَيْسَ لَهُمْ طَعَامٌ اِلَّا مِنْ ضَرِيْعٍۙ",
        "teksLatin": "Laisa lahum ṭa‘āmun illā min ḍarī‘(in).",
        "teksIndonesia": "Tidak ada makanan bagi mereka selain dari pohon yang berduri,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "لَّا يُسْمِنُ وَلَا يُغْنِيْ مِنْ جُوْعٍۗ",
        "teksLatin": "Lā yusminu wa lā yugnī min jū‘(in).",
        "teksIndonesia": "yang tidak menggemukkan dan tidak pula menghilangkan lapar.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "وُجُوْهٌ يَّوْمَىِٕذٍ نَّاعِمَةٌ  ۙ",
        "teksLatin": "Wujūhuy yauma'iżin nā‘imah(tun).",
        "teksIndonesia": "Pada hari itu banyak (pula) wajah yang berseri-seri,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "لِّسَعْيِهَا رَاضِيَةٌ  ۙ ",
        "teksLatin": "Lisa‘yihā rāḍiyah(tun).",
        "teksIndonesia": "merasa puas karena usahanya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "فِيْ جَنَّةٍ عَالِيَةٍۙ",
        "teksLatin": "Fī jannatin ‘āliyah(tin).",
        "teksIndonesia": "(Mereka) dalam surga yang tinggi.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "لَّا تَسْمَعُ فِيْهَا لَاغِيَةً ۗ",
        "teksLatin": "Lā tasama‘u fīhā lāgiyah(tan).",
        "teksIndonesia": "Di sana kamu tidak mendengar (perkataan) yang tidak berguna.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "فِيْهَا عَيْنٌ جَارِيَةٌ  ۘ",
        "teksLatin": "Fīhā ‘ainun jāriyah(tun).",
        "teksIndonesia": "Di sana ada mata air yang mengalir.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "فِيْهَا سُرُرٌ مَّرْفُوْعَةٌ  ۙ",
        "teksLatin": "Fīhā sururum marfū‘ah(tun).",
        "teksIndonesia": "Di sana ada (pula) dipan-dipan yang ditinggikan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "وَّاَكْوَابٌ مَّوْضُوْعَةٌ  ۙ",
        "teksLatin": "Wa akwābum mauḍū‘ah(tun).",
        "teksIndonesia": "gelas-gelas yang tersedia (di dekatnya),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "وَّنَمَارِقُ مَصْفُوْفَةٌ  ۙ ",
        "teksLatin": "Wa namāriqu maṣfūfah(tun).",
        "teksIndonesia": "bantal-bantal sandaran yang tersusun,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "وَّزَرَابِيُّ مَبْثُوْثَةٌ  ۗ",
        "teksLatin": "Wa zarābiyyu mabṡūṡah(tun).",
        "teksIndonesia": "dan permadani-permadani yang terhampar.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "اَفَلَا يَنْظُرُوْنَ اِلَى الْاِبِلِ كَيْفَ خُلِقَتْۗ",
        "teksLatin": "Afalā yanẓurūna ilal-ibili kaifa khuliqat.",
        "teksIndonesia": "Tidakkah mereka memperhatikan unta, bagaimana ia diciptakan?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "وَاِلَى السَّمَاۤءِ كَيْفَ رُفِعَتْۗ",
        "teksLatin": "Wa ilas-samā'i kaifa rufi‘at.",
        "teksIndonesia": "Bagaimana langit ditinggikan?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "وَاِلَى الْجِبَالِ كَيْفَ نُصِبَتْۗ",
        "teksLatin": "Wa ilal-jibāli kaifa nuṣibat.",
        "teksIndonesia": "Bagaimana gunung-gunung ditegakkan?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088019.mp3"
        }
      },
      {
        "nomorAyat": 20,
        "teksArab": "وَاِلَى الْاَرْضِ كَيْفَ سُطِحَتْۗ ",
        "teksLatin": "Wa ilal-arḍi kaifa suṭiḥat.",
        "teksIndonesia": "Bagaimana pula bumi dihamparkan?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088020.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088020.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088020.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088020.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088020.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088020.mp3"
        }
      },
      {
        "nomorAyat": 21,
        "teksArab": "فَذَكِّرْۗ اِنَّمَآ اَنْتَ مُذَكِّرٌۙ",
        "teksLatin": "Fa żakkir, innamā anta mużakkir(un).",
        "teksIndonesia": "Maka, berilah peringatan karena sesungguhnya engkau (Nabi Muhammad) hanyalah pemberi peringatan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088021.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088021.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088021.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088021.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088021.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088021.mp3"
        }
      },
      {
        "nomorAyat": 22,
        "teksArab": "لَّسْتَ عَلَيْهِمْ بِمُصَيْطِرٍۙ",
        "teksLatin": "Lasta ‘alaihim bimusaiṭir(in). ",
        "teksIndonesia": "Engkau bukanlah orang yang berkuasa atas mereka.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088022.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088022.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088022.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088022.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088022.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088022.mp3"
        }
      },
      {
        "nomorAyat": 23,
        "teksArab": "اِلَّا مَنْ تَوَلّٰى وَكَفَرَۙ",
        "teksLatin": "Illā man tawallā wa kafar(a).",
        "teksIndonesia": "Akan tetapi, orang yang berpaling dan kufur,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088023.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088023.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088023.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088023.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088023.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088023.mp3"
        }
      },
      {
        "nomorAyat": 24,
        "teksArab": "فَيُعَذِّبُهُ اللّٰهُ الْعَذَابَ الْاَكْبَرَۗ",
        "teksLatin": "Fa yu‘ażżibuhullāhul-‘ażābal-akbar(a).",
        "teksIndonesia": "Allah akan mengazabnya dengan azab yang paling besar.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088024.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088024.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088024.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088024.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088024.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088024.mp3"
        }
      },
      {
        "nomorAyat": 25,
        "teksArab": "اِنَّ اِلَيْنَآ اِيَابَهُمْ",
        "teksLatin": "Inna ilainā iyābahum.",
        "teksIndonesia": "Sesungguhnya kepada Kamilah mereka kembali.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088025.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088025.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088025.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088025.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088025.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088025.mp3"
        }
      },
      {
        "nomorAyat": 26,
        "teksArab": "ثُمَّ اِنَّ عَلَيْنَا حِسَابَهُمْ ࣖ",
        "teksLatin": "Ṡumma inna ‘alainā ḥisābahum.",
        "teksIndonesia": "Kemudian, sesungguhnya Kamilah yang berhak melakukan hisab (perhitungan) atas mereka.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/088026.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/088026.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/088026.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/088026.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/088026.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/088026.mp3"
        }
      }
    ]
  },
  "89": {
    "nomor": 89,
    "namaLatin": "Al-Fajr",
    "namaArab": "الفجر",
    "arti": "Fajar",
    "jumlahAyat": 30,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 30 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Lail. Nama <i>Al Fajr</i> diambil dari kata <i>Al Fajr</i> yang terdapat pada ayat pertama surat ini yang artinya <i>fajar</i>.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/089.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/089.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/089.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/089.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/089.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/089.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "وَالْفَجْرِۙ",
        "teksLatin": "Wal-fajr(i).",
        "teksIndonesia": "Demi waktu fajar,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَلَيَالٍ عَشْرٍۙ",
        "teksLatin": "Wa layālin ‘asyr(in).",
        "teksIndonesia": "demi malam yang sepuluh,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَّالشَّفْعِ وَالْوَتْرِۙ",
        "teksLatin": "Wasy-syaf‘i wal-watr(i).",
        "teksIndonesia": "demi yang genap dan yang ganjil,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "وَالَّيْلِ اِذَا يَسْرِۚ",
        "teksLatin": "Wal-laili iżā yasr(i).",
        "teksIndonesia": "dan demi malam apabila berlalu.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "هَلْ فِيْ ذٰلِكَ قَسَمٌ لِّذِيْ حِجْرٍۗ",
        "teksLatin": "Hal fī żālika qasamul liżī ḥijr(in).",
        "teksIndonesia": "Apakah pada yang demikian itu terdapat sumpah (yang dapat diterima) oleh (orang) yang berakal?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "اَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍۖ",
        "teksLatin": "Alam tara kaifa fa‘ala rabbuka bi‘ād(in).",
        "teksIndonesia": "Tidakkah engkau (Nabi Muhammad) memperhatikan bagaimana Tuhanmu berbuat terhadap (kaum) ‘Ad,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "اِرَمَ ذَاتِ الْعِمَادِۖ",
        "teksLatin": "Irama żātil-‘imād(i).",
        "teksIndonesia": "(yaitu) penduduk Iram (ibu kota kaum ‘Ad) yang mempunyai bangunan-bangunan yang tinggi",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "الَّتِيْ لَمْ يُخْلَقْ مِثْلُهَا فِى الْبِلَادِۖ",
        "teksLatin": "Allatī lam yukhlaq miṡluhā fil-bilād(i).",
        "teksIndonesia": "yang sebelumnya tidak pernah dibangun (suatu kota pun) seperti itu di negeri-negeri (lain)?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "وَثَمُوْدَ الَّذِيْنَ جَابُوا الصَّخْرَ بِالْوَادِۖ",
        "teksLatin": "Wa ṡamūdal-lażīna jābuṣ-ṣakhra bil-wād(i).",
        "teksIndonesia": "(Tidakkah engkau perhatikan pula kaum) Samud yang memotong batu-batu besar di lembah",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "وَفِرْعَوْنَ ذِى الْاَوْتَادِۖ",
        "teksLatin": "Wa fir‘auna żil-autād(i). ",
        "teksIndonesia": "dan Fir‘aun yang mempunyai pasak-pasak (bangunan yang besar)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "الَّذِيْنَ طَغَوْا فِى الْبِلَادِۖ",
        "teksLatin": "Allażīna ṭagau fil-bilād(i).",
        "teksIndonesia": "yang berbuat sewenang-wenang dalam negeri,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "فَاَكْثَرُوْا فِيْهَا الْفَسَادَۖ",
        "teksLatin": "Fa akṡarū fīhal-fasād(a).",
        "teksIndonesia": "lalu banyak berbuat kerusakan di dalamnya (negeri itu),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "فَصَبَّ عَلَيْهِمْ رَبُّكَ سَوْطَ عَذَابٍۖ",
        "teksLatin": "Fa ṣabba ‘alaihim rabbuka sauṭa ‘ażāb(in).",
        "teksIndonesia": "maka Tuhanmu menimpakan cemeti azab (yang dahsyat) kepada mereka?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "اِنَّ رَبَّكَ لَبِالْمِرْصَادِۗ",
        "teksLatin": "Inna rabbaka labil-mirṣād(i).",
        "teksIndonesia": "Sesungguhnya Tuhanmu benar-benar mengawasi.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "فَاَمَّا الْاِنْسَانُ اِذَا مَا ابْتَلٰىهُ رَبُّهٗ فَاَكْرَمَهٗ وَنَعَّمَهٗۙ فَيَقُوْلُ رَبِّيْٓ اَكْرَمَنِۗ",
        "teksLatin": "Fa ammal-insānu iżā mabtalāhu rabbuhū fa akramahū wa na‘‘amah(ū), fa yaqūlu rabbī akraman(i).",
        "teksIndonesia": "Adapun manusia, apabila Tuhan mengujinya lalu memuliakannya dan memberinya kenikmatan, berkatalah dia, “Tuhanku telah memuliakanku.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "وَاَمَّآ اِذَا مَا ابْتَلٰىهُ فَقَدَرَ عَلَيْهِ رِزْقَهٗ ەۙ فَيَقُوْلُ رَبِّيْٓ اَهَانَنِۚ",
        "teksLatin": "Wa ammā iżā mabtalāhu fa qadara ‘alaihi rizqah(ū), fa yaqūlu rabbī ahānan(i).",
        "teksIndonesia": "Sementara itu, apabila Dia mengujinya lalu membatasi rezekinya, berkatalah dia, “Tuhanku telah menghinaku.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "كَلَّا بَلْ لَّا تُكْرِمُوْنَ الْيَتِيْمَۙ",
        "teksLatin": "Kallā bal lā tukrimūnal-yatīm(a).",
        "teksIndonesia": "Sekali-kali tidak! Sebaliknya, kamu tidak memuliakan anak yatim,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "وَلَا تَحٰۤضُّوْنَ عَلٰى طَعَامِ الْمِسْكِيْنِۙ",
        "teksLatin": "Wa lā taḥāḍḍūna ‘alā ṭa‘āmil-miskīn(i).",
        "teksIndonesia": "tidak saling mengajak memberi makan orang miskin,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "وَتَأْكُلُوْنَ التُّرَاثَ اَكْلًا لَّمًّاۙ",
        "teksLatin": "Wa ta'kulūnat-turāṡa aklal lammā(n).",
        "teksIndonesia": "memakan harta warisan dengan cara mencampurbaurkan (yang halal dan yang haram),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089019.mp3"
        }
      },
      {
        "nomorAyat": 20,
        "teksArab": "وَّتُحِبُّوْنَ الْمَالَ حُبًّا جَمًّاۗ",
        "teksLatin": "Wa tuḥibbūnal-māla ḥubban jammā(n).",
        "teksIndonesia": "dan mencintai harta dengan kecintaan yang berlebihan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089020.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089020.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089020.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089020.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089020.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089020.mp3"
        }
      },
      {
        "nomorAyat": 21,
        "teksArab": "كَلَّآ اِذَا دُكَّتِ الْاَرْضُ دَكًّا دَكًّاۙ",
        "teksLatin": "Kallā iżā dukkatil-arḍu dakkan dakkā(n).",
        "teksIndonesia": "Jangan sekali-kali begitu! Apabila bumi diguncangkan berturut-turut (berbenturan),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089021.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089021.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089021.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089021.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089021.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089021.mp3"
        }
      },
      {
        "nomorAyat": 22,
        "teksArab": "وَّجَاۤءَ رَبُّكَ وَالْمَلَكُ صَفًّا صَفًّاۚ",
        "teksLatin": "Wa jā'a rabbuka wal-malaku ṣaffan ṣaffā(n).",
        "teksIndonesia": "Tuhanmu datang, begitu pula para malaikat (yang datang) berbaris-baris,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089022.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089022.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089022.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089022.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089022.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089022.mp3"
        }
      },
      {
        "nomorAyat": 23,
        "teksArab": "وَجِايْۤءَ يَوْمَىِٕذٍۢ بِجَهَنَّمَۙ يَوْمَىِٕذٍ يَّتَذَكَّرُ الْاِنْسَانُ وَاَنّٰى لَهُ الذِّكْرٰىۗ",
        "teksLatin": "Wa jī'a yauma'iżim bijahannam(a), yauma'iżiy yatażakkarul-insānu wa annā lahuż-żikrā.",
        "teksIndonesia": "dan pada hari itu (neraka) Jahanam didatangkan, sadarlah manusia pada hari itu juga. Akan tetapi, bagaimana bisa kesadaran itu bermanfaat baginya?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089023.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089023.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089023.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089023.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089023.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089023.mp3"
        }
      },
      {
        "nomorAyat": 24,
        "teksArab": "يَقُوْلُ يٰلَيْتَنِيْ قَدَّمْتُ لِحَيَاتِيْۚ",
        "teksLatin": "Yaqūlu yā laitanī qaddamtu liḥayātī.",
        "teksIndonesia": "Dia berkata, “Oh, seandainya dahulu aku mengerjakan (kebajikan) untuk hidupku ini!”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089024.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089024.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089024.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089024.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089024.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089024.mp3"
        }
      },
      {
        "nomorAyat": 25,
        "teksArab": "فَيَوْمَىِٕذٍ لَّا يُعَذِّبُ عَذَابَهٗٓ اَحَدٌ ۙ",
        "teksLatin": "Fa yauma'iżil lā yu‘ażżibu ‘ażābahū aḥad(un).",
        "teksIndonesia": "Pada hari itu tidak ada seorang pun yang mampu mengazab (seadil) azab-Nya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089025.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089025.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089025.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089025.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089025.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089025.mp3"
        }
      },
      {
        "nomorAyat": 26,
        "teksArab": "وَّلَا يُوْثِقُ وَثَاقَهٗٓ اَحَدٌ ۗ",
        "teksLatin": "Wa lā yūṡiqu waṡāqahū aḥad(un).",
        "teksIndonesia": "Tidak ada seorang pun juga yang mampu mengikat (sekuat) ikatan-Nya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089026.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089026.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089026.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089026.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089026.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089026.mp3"
        }
      },
      {
        "nomorAyat": 27,
        "teksArab": "يٰٓاَيَّتُهَا النَّفْسُ الْمُطْمَىِٕنَّةُۙ",
        "teksLatin": "Yā ayyatuhan-nafsul-muṭma'innah(tu).",
        "teksIndonesia": "Wahai jiwa yang tenang,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089027.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089027.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089027.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089027.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089027.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089027.mp3"
        }
      },
      {
        "nomorAyat": 28,
        "teksArab": "ارْجِعِيْٓ اِلٰى رَبِّكِ رَاضِيَةً مَّرْضِيَّةً ۚ",
        "teksLatin": "Irji‘ī ilā rabbiki rāḍiyatam marḍiyyah(tan).",
        "teksIndonesia": "kembalilah kepada Tuhanmu dengan rida dan diridai.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089028.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089028.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089028.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089028.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089028.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089028.mp3"
        }
      },
      {
        "nomorAyat": 29,
        "teksArab": "فَادْخُلِيْ فِيْ عِبٰدِيْۙ",
        "teksLatin": "Fadkhuli fī ‘ibādī.",
        "teksIndonesia": "Lalu, masuklah ke dalam golongan hamba-hamba-Ku",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089029.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089029.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089029.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089029.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089029.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089029.mp3"
        }
      },
      {
        "nomorAyat": 30,
        "teksArab": "وَادْخُلِيْ جَنَّتِيْ ࣖࣖ",
        "teksLatin": "Wadkhulī jannatī.",
        "teksIndonesia": "dan masuklah ke dalam surga-Ku!",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/089030.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/089030.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/089030.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/089030.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/089030.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/089030.mp3"
        }
      }
    ]
  },
  "90": {
    "nomor": 90,
    "namaLatin": "Al-Balad",
    "namaArab": "البلد",
    "arti": "Negeri",
    "jumlahAyat": 20,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat Al Balad terdiri atas 20 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Qaaf. Dinamai <i>Al Balad</i>, diambil dari perkataan <i>Al Balad</i> yang terdapat  pada ayat pertama surat ini. Yang dimaksud dengan kota di sini ialah kota Mekah.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/090.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/090.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/090.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/090.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/090.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/090.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "لَآ اُقْسِمُ بِهٰذَا الْبَلَدِۙ",
        "teksLatin": "Lā uqsimu bihāżal-balad(i).",
        "teksIndonesia": "Aku bersumpah demi negeri ini (Makkah),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَاَنْتَ حِلٌّۢ بِهٰذَا الْبَلَدِۙ",
        "teksLatin": "Wa anta ḥillum bihāżal-balad(i).",
        "teksIndonesia": "sedangkan engkau (Nabi Muhammad) bertempat tinggal di negeri (Makkah) ini.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَوَالِدٍ وَّمَا وَلَدَۙ",
        "teksLatin": "Wa wālidiw wa mā walad(a).",
        "teksIndonesia": "(Aku juga bersumpah) demi bapak dan anaknya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "لَقَدْ خَلَقْنَا الْاِنْسَانَ فِيْ كَبَدٍۗ",
        "teksLatin": "Laqad khalaqnal-insāna fī kabad(in).",
        "teksIndonesia": "sungguh, Kami benar-benar telah menciptakan manusia dalam keadaan susah payah.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "اَيَحْسَبُ اَنْ لَّنْ يَّقْدِرَ عَلَيْهِ اَحَدٌ ۘ",
        "teksLatin": "Ayaḥsabu allay yaqdira ‘alaihi  aḥad(un).",
        "teksIndonesia": "Apakah dia (manusia) itu mengira bahwa tidak ada seorang pun yang berkuasa atasnya?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "يَقُوْلُ اَهْلَكْتُ مَالًا لُّبَدًاۗ",
        "teksLatin": "Yaqūlu ahlaktu mālal lubadā(n).",
        "teksIndonesia": "Dia mengatakan, “Aku telah menghabiskan harta yang banyak.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "اَيَحْسَبُ اَنْ لَّمْ يَرَهٗٓ اَحَدٌۗ",
        "teksLatin": "Ayaḥsabu allam yarahū aḥad(un).",
        "teksIndonesia": "Apakah dia mengira bahwa tidak ada seorang pun yang melihatnya?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "اَلَمْ نَجْعَلْ لَّهٗ عَيْنَيْنِۙ",
        "teksLatin": "Alam naj‘al lahū ‘ainain(i).",
        "teksIndonesia": "Bukankah Kami telah menjadikan untuknya sepasang mata,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "وَلِسَانًا وَّشَفَتَيْنِۙ",
        "teksLatin": "Wa lisānaw wa syafatain(i).",
        "teksIndonesia": "lidah, dan sepasang bibir,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "وَهَدَيْنٰهُ النَّجْدَيْنِۙ",
        "teksLatin": "Wa hadaināhun-najdain(i).",
        "teksIndonesia": "serta Kami juga telah menunjukkan kepadanya dua jalan (kebajikan dan kejahatan)?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "فَلَا اقْتَحَمَ الْعَقَبَةَ ۖ",
        "teksLatin": "Falaqtaḥamal-‘aqabah(ta).",
        "teksIndonesia": "Maka, tidakkah sebaiknya dia menempuh jalan (kebajikan) yang mendaki dan sukar?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "وَمَآ اَدْرٰىكَ مَا الْعَقَبَةُ ۗ",
        "teksLatin": "Wa mā adrāka mal-‘aqabah(tu).",
        "teksIndonesia": "Tahukah kamu apakah jalan yang mendaki dan sukar itu?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "فَكُّ رَقَبَةٍۙ",
        "teksLatin": "Fakku raqabah(tin).",
        "teksIndonesia": "(Itulah upaya) melepaskan perbudakan",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "اَوْ اِطْعَامٌ فِيْ يَوْمٍ ذِيْ مَسْغَبَةٍۙ",
        "teksLatin": "Au iṭ‘āmun fī yaumin żī masgabah(tin).",
        "teksIndonesia": "atau memberi makan pada hari terjadi kelaparan",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "يَّتِيْمًا ذَا مَقْرَبَةٍۙ",
        "teksLatin": "Yatīman żā maqrabah(tin).",
        "teksIndonesia": "(kepada) anak yatim yang memiliki hubungan kekerabatan",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "اَوْ مِسْكِيْنًا ذَا مَتْرَبَةٍۗ",
        "teksLatin": "Au miskīnan żā matrabah(tin).",
        "teksIndonesia": "atau orang miskin yang sangat membutuhkan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "ثُمَّ كَانَ مِنَ الَّذِيْنَ اٰمَنُوْا وَتَوَاصَوْا بِالصَّبْرِ وَتَوَاصَوْا بِالْمَرْحَمَةِۗ",
        "teksLatin": "Ṡumma kāna minal-lażīna āmanū wa tawāṣau biṣ-ṣabri wa tawāṣau bil-marḥamah(ti). ",
        "teksIndonesia": "Kemudian, dia juga termasuk orang-orang yang beriman dan saling berpesan untuk bersabar serta saling berpesan untuk berkasih sayang.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "اُولٰۤىِٕكَ اَصْحٰبُ الْمَيْمَنَةِۗ",
        "teksLatin": "Ulā'ika aṣḥābul-maimanah(ti).",
        "teksIndonesia": "Mereka itulah golongan kanan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "وَالَّذِيْنَ كَفَرُوْا بِاٰيٰتِنَا هُمْ اَصْحٰبُ الْمَشْـَٔمَةِۗ",
        "teksLatin": "Wal-lażīna kafarū bi'āyātinā hum aṣḥābul-masy'amah(ti).",
        "teksIndonesia": "Adapun orang-orang yang kufur pada ayat-ayat Kami, merekalah golongan kiri.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090019.mp3"
        }
      },
      {
        "nomorAyat": 20,
        "teksArab": "عَلَيْهِمْ نَارٌ مُّؤْصَدَةٌ ࣖ",
        "teksLatin": "‘Alaihim nārum mu'ṣadah(tun).",
        "teksIndonesia": "Mereka berada dalam neraka yang ditutup rapat.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/090020.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/090020.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/090020.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/090020.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/090020.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/090020.mp3"
        }
      }
    ]
  },
  "91": {
    "nomor": 91,
    "namaLatin": "Asy-Syams",
    "namaArab": "الشمس",
    "arti": "Matahari",
    "jumlahAyat": 15,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat Asy Syams terdiri atas 15 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Qadar.  Dinamai <i>Asy Syams</i> (matahari) diambil dari perkataan <i>Asy Syams</i> yang terdapat pada ayat permulaan surat ini.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/091.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/091.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/091.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/091.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/091.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/091.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "وَالشَّمْسِ وَضُحٰىهَاۖ",
        "teksLatin": "Wasy-syamsi wa ḍuḥāhā.",
        "teksIndonesia": "Demi matahari dan sinarnya pada waktu duha (ketika matahari naik sepenggalah),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَالْقَمَرِ اِذَا تَلٰىهَاۖ",
        "teksLatin": "Wal-qamari iżā talāhā.",
        "teksIndonesia": "demi bulan saat mengiringinya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَالنَّهَارِ اِذَا جَلّٰىهَاۖ",
        "teksLatin": "Wan-nahāri iżā jallāhā.",
        "teksIndonesia": "demi siang saat menampakkannya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "وَالَّيْلِ اِذَا يَغْشٰىهَاۖ",
        "teksLatin": "Wal-laili iżā yagsyāhā.",
        "teksIndonesia": "demi malam saat menutupinya (gelap gulita),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "وَالسَّمَاۤءِ وَمَا بَنٰىهَاۖ",
        "teksLatin": "Was-samā'i wa mā banāhā.",
        "teksIndonesia": "demi langit serta pembuatannya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "وَالْاَرْضِ وَمَا طَحٰىهَاۖ",
        "teksLatin": "Wal-arḍi wa mā ṭaḥāhā.",
        "teksIndonesia": "demi bumi serta penghamparannya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "وَنَفْسٍ وَّمَا سَوّٰىهَاۖ",
        "teksLatin": "Wa nafsiw wa mā sawwāhā.",
        "teksIndonesia": "dan demi jiwa serta penyempurnaan (ciptaan)-nya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "فَاَلْهَمَهَا فُجُوْرَهَا وَتَقْوٰىهَاۖ",
        "teksLatin": "Fa alhamahā fujūrahā wa taqwāhā.",
        "teksIndonesia": "lalu Dia mengilhamkan kepadanya (jalan) kejahatan dan ketakwaannya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "قَدْ اَفْلَحَ مَنْ زَكّٰىهَاۖ",
        "teksLatin": "Qad aflaḥa man zakkāhā.",
        "teksIndonesia": "sungguh beruntung orang yang menyucikannya (jiwa itu)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "وَقَدْ خَابَ مَنْ دَسّٰىهَاۗ",
        "teksLatin": "Wa qad khāba man dassāhā.",
        "teksIndonesia": "dan sungguh rugi orang yang mengotorinya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "كَذَّبَتْ ثَمُوْدُ بِطَغْوٰىهَآ  ۖ",
        "teksLatin": "Każżabat ṡamūdu biṭagwāhā.",
        "teksIndonesia": "(Kaum) Samud telah mendustakan (rasulnya) karena mereka melampaui batas",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "اِذِ انْۢبَعَثَ اَشْقٰىهَاۖ",
        "teksLatin": "Iżimba‘aṡa asyqāhā.",
        "teksIndonesia": "ketika orang yang paling celaka di antara mereka bangkit (untuk menyembelih unta betina Allah).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "فَقَالَ لَهُمْ رَسُوْلُ اللّٰهِ نَاقَةَ اللّٰهِ وَسُقْيٰهَاۗ",
        "teksLatin": "Fa qāla lahum rasūlullāhi nāqatallāhi wa suqyāhā.",
        "teksIndonesia": "Rasul Allah (Saleh) lalu berkata kepada mereka, “(Biarkanlah) unta betina Allah ini beserta minumannya.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "فَكَذَّبُوْهُ فَعَقَرُوْهَاۖ فَدَمْدَمَ عَلَيْهِمْ رَبُّهُمْ بِذَنْۢبِهِمْ فَسَوّٰىهَاۖ",
        "teksLatin": "Fa każżabūhu fa ‘aqarūhā fa damdama ‘alaihim rabbuhum biżambihim fa sawwāhā.",
        "teksIndonesia": "Namun, mereka kemudian mendustakannya (Saleh) dan menyembelih (unta betina) itu. Maka, Tuhan membinasakan mereka karena dosa-dosanya, lalu meratakan mereka (dengan tanah).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "وَلَا يَخَافُ عُقْبٰهَا ࣖ",
        "teksLatin": "Wa lā yakhāfu ‘uqbāhā.",
        "teksIndonesia": "Dia tidak takut terhadap akibatnya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/091015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/091015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/091015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/091015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/091015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/091015.mp3"
        }
      }
    ]
  },
  "92": {
    "nomor": 92,
    "namaLatin": "Al-Lail",
    "namaArab": "الّيل",
    "arti": "Malam",
    "jumlahAyat": 21,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 21 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al A'laa. Surat ini dinamai <i>Al Lail</i> (malam), diambil dari perkataan <i>Al Lail</i> yang terdapat pada ayat pertama surat ini",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/092.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/092.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/092.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/092.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/092.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/092.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "وَالَّيْلِ اِذَا يَغْشٰىۙ",
        "teksLatin": "Wal-laili iżā yagsyā.",
        "teksIndonesia": "Demi malam apabila menutupi (cahaya siang),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَالنَّهَارِ اِذَا تَجَلّٰىۙ",
        "teksLatin": "Wan-nahāri iżā tajallā.",
        "teksIndonesia": "demi siang apabila terang benderang,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَمَا خَلَقَ الذَّكَرَ وَالْاُنْثٰىٓ ۙ",
        "teksLatin": "Wa mā khalaqaż-żakara wal-unṡā.",
        "teksIndonesia": "dan demi penciptaan laki-laki dan perempuan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "اِنَّ سَعْيَكُمْ لَشَتّٰىۗ",
        "teksLatin": "Inna sa‘yakum lasyattā.",
        "teksIndonesia": "sesungguhnya usahamu benar-benar beraneka ragam.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "فَاَمَّا مَنْ اَعْطٰى وَاتَّقٰىۙ",
        "teksLatin": "Fa ammā man a‘ṭā wattaqā.",
        "teksIndonesia": "Siapa yang memberikan (hartanya di jalan Allah) dan bertakwa",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "وَصَدَّقَ بِالْحُسْنٰىۙ",
        "teksLatin": "Wa ṣaddaqa bil-ḥusnā.",
        "teksIndonesia": "serta membenarkan adanya (balasan) yang terbaik (surga),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "فَسَنُيَسِّرُهٗ لِلْيُسْرٰىۗ",
        "teksLatin": "Fa sanuyassiruhū lil-yusrā.",
        "teksIndonesia": "Kami akan melapangkan baginya jalan kemudahan (kebahagiaan).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "وَاَمَّا مَنْۢ بَخِلَ وَاسْتَغْنٰىۙ",
        "teksLatin": "Wa ammā man bakhila wastagnā.",
        "teksIndonesia": "Adapun orang yang kikir dan merasa dirinya cukup (tidak perlu pertolongan Allah)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "وَكَذَّبَ بِالْحُسْنٰىۙ",
        "teksLatin": "Wa każżaba bil-ḥusnā.",
        "teksIndonesia": "serta mendustakan (balasan) yang terbaik,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "فَسَنُيَسِّرُهٗ لِلْعُسْرٰىۗ",
        "teksLatin": "Fa sanuyassiruhū lil-‘usrā.   ",
        "teksIndonesia": "Kami akan memudahkannya menuju jalan kesengsaraan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "وَمَا يُغْنِيْ عَنْهُ مَالُهٗٓ اِذَا تَرَدّٰىٓۙ",
        "teksLatin": "Wa mā yugnī ‘anhu māluhū iżā taraddā.",
        "teksIndonesia": "Hartanya tidak bermanfaat baginya apabila dia telah binasa.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "اِنَّ عَلَيْنَا لَلْهُدٰىۖ",
        "teksLatin": "Inna ‘alainā lal-hudā.",
        "teksIndonesia": "Sesungguhnya Kamilah yang (berhak) memberi petunjuk.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "وَاِنَّ لَنَا لَلْاٰخِرَةَ وَالْاُوْلٰىۗ",
        "teksLatin": "Wa inna lanā lal-ākhirata wal-ūlā.",
        "teksIndonesia": "Sesungguhnya milik Kamilah akhirat dan dunia.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "فَاَنْذَرْتُكُمْ نَارًا تَلَظّٰىۚ",
        "teksLatin": "Fa anżartukum nāran talaẓẓā.",
        "teksIndonesia": "Aku memperingatkanmu dengan neraka yang menyala-nyala.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "لَا يَصْلٰىهَآ اِلَّا الْاَشْقَىۙ",
        "teksLatin": "Lā yaṣlāhā illal-asyqā.",
        "teksIndonesia": "Tidak masuk ke dalamnya kecuali orang yang paling celaka,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "الَّذِيْ كَذَّبَ وَتَوَلّٰىۗ",
        "teksLatin": "Allażī każżaba wa tawallā.",
        "teksIndonesia": "yang mendustakan (kebenaran) dan berpaling (dari keimanan).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "وَسَيُجَنَّبُهَا الْاَتْقَىۙ",
        "teksLatin": "Wa sayujannabuhal-atqā.",
        "teksIndonesia": "Akan dijauhkan darinya (neraka) orang yang paling bertakwa,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "الَّذِيْ يُؤْتِيْ مَالَهٗ يَتَزَكّٰىۚ",
        "teksLatin": "Allażī yu'tī mālahū yatazakkā.",
        "teksIndonesia": "yang menginfakkan hartanya (di jalan Allah) untuk membersihkan (diri dari sifat kikir dan tamak).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "وَمَا لِاَحَدٍ عِنْدَهٗ مِنْ نِّعْمَةٍ تُجْزٰىٓۙ",
        "teksLatin": "Wa mā li'aḥadin ‘indahū min ni‘matin tujzā.",
        "teksIndonesia": "Tidak ada suatu nikmat pun yang diberikan seseorang kepadanya yang harus dibalas,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092019.mp3"
        }
      },
      {
        "nomorAyat": 20,
        "teksArab": "اِلَّا ابْتِغَاۤءَ وَجْهِ رَبِّهِ الْاَعْلٰىۚ",
        "teksLatin": "Illabtigā'a wajhi rabbihil-a‘lā.",
        "teksIndonesia": "kecuali (dia memberikannya semata-mata) karena mencari keridaan Tuhannya Yang Maha Tinggi.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092020.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092020.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092020.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092020.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092020.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092020.mp3"
        }
      },
      {
        "nomorAyat": 21,
        "teksArab": "وَلَسَوْفَ يَرْضٰى ࣖ",
        "teksLatin": "Wa lasaufa yarḍā.",
        "teksIndonesia": "Sungguh, kelak dia akan mendapatkan kepuasan (menerima balasan amalnya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/092021.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/092021.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/092021.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/092021.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/092021.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/092021.mp3"
        }
      }
    ]
  },
  "93": {
    "nomor": 93,
    "namaLatin": "Ad-Duha",
    "namaArab": "الضحى",
    "arti": "Duha",
    "jumlahAyat": 11,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 11 ayat, termasuk golongan surat Makiyyah dan diturunkan sesudah surat Al Fajr. Nama <i>Adh Dhuhaa</i> diambil dari kata yang terdapat pada ayat pertama, artinya : waktu matahari sepenggalahan naik.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/093.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/093.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/093.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/093.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/093.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/093.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "وَالضُّحٰىۙ",
        "teksLatin": "Waḍ-ḍuḥā.",
        "teksIndonesia": "Demi waktu duha",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/093001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/093001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/093001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/093001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/093001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/093001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَالَّيْلِ اِذَا سَجٰىۙ",
        "teksLatin": "Wal-laili iżā sajā.",
        "teksIndonesia": "dan demi waktu malam apabila telah sunyi,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/093002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/093002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/093002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/093002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/093002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/093002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلٰىۗ",
        "teksLatin": "Mā wadda‘aka rabbuka wa mā qalā.",
        "teksIndonesia": "Tuhanmu (Nabi Muhammad) tidak meninggalkan dan tidak (pula) membencimu.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/093003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/093003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/093003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/093003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/093003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/093003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "وَلَلْاٰخِرَةُ خَيْرٌ لَّكَ مِنَ الْاُوْلٰىۗ",
        "teksLatin": "Wa lal-ākhiratu khairul laka minal-ūlā.",
        "teksIndonesia": "Sungguh, akhirat itu lebih baik bagimu daripada yang permulaan (dunia).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/093004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/093004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/093004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/093004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/093004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/093004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "وَلَسَوْفَ يُعْطِيْكَ رَبُّكَ فَتَرْضٰىۗ",
        "teksLatin": "Wa lasaufa yu‘ṭīka rabbuka fa tarḍā.",
        "teksIndonesia": "Sungguh, kelak (di akhirat nanti) Tuhanmu pasti memberikan karunia-Nya kepadamu sehingga engkau rida.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/093005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/093005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/093005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/093005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/093005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/093005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "اَلَمْ يَجِدْكَ يَتِيْمًا فَاٰوٰىۖ",
        "teksLatin": "Alam yajidka yatīman fa āwā.",
        "teksIndonesia": "Bukankah Dia mendapatimu sebagai seorang yatim, lalu Dia melindungi(-mu);",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/093006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/093006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/093006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/093006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/093006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/093006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "وَوَجَدَكَ ضَاۤلًّا فَهَدٰىۖ",
        "teksLatin": "Wa wajadaka ḍāllan fa hadā.",
        "teksIndonesia": "mendapatimu sebagai seorang yang tidak tahu (tentang syariat), lalu Dia memberimu petunjuk (wahyu);",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/093007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/093007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/093007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/093007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/093007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/093007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "وَوَجَدَكَ عَاۤىِٕلًا فَاَغْنٰىۗ",
        "teksLatin": "Wa wajadaka ‘ā'ilan fa agnā.",
        "teksIndonesia": "dan mendapatimu sebagai seorang yang fakir, lalu Dia memberimu kecukupan?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/093008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/093008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/093008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/093008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/093008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/093008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "فَاَمَّا الْيَتِيْمَ فَلَا تَقْهَرْۗ",
        "teksLatin": "Fa ammal-yatīma falā taqhar.",
        "teksIndonesia": "Terhadap anak yatim, janganlah engkau berlaku sewenang-wenang.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/093009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/093009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/093009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/093009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/093009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/093009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "وَاَمَّا السَّاۤىِٕلَ فَلَا تَنْهَرْ",
        "teksLatin": "Wa ammas-sā'ila falā tanhar.",
        "teksIndonesia": "Terhadap orang yang meminta-minta, janganlah engkau menghardik.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/093010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/093010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/093010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/093010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/093010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/093010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "وَاَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ ࣖ",
        "teksLatin": "Wa ammā bini‘mati rabbika fa ḥaddiṡ.",
        "teksIndonesia": "Terhadap nikmat Tuhanmu, nyatakanlah (dengan bersyukur).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/093011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/093011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/093011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/093011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/093011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/093011.mp3"
        }
      }
    ]
  },
  "94": {
    "nomor": 94,
    "namaLatin": "Al-Insyirah",
    "namaArab": "الشرح",
    "arti": "Lapang",
    "jumlahAyat": 8,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 8 ayat, termasuk golongan surat-surat Makkiyah dan diturunkan sesudah surat Adh Dhuhaa. Nama <i>Alam Nasyrah</i> diambil dari kata <i>Alam Nasyrah</i> yang terdapat pada ayat pertama, yang berarti: bukankah Kami telah melapangkan.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/094.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/094.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/094.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/094.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/094.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/094.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "اَلَمْ نَشْرَحْ لَكَ صَدْرَكَۙ",
        "teksLatin": "Alam nasyraḥ laka ṣadrak(a).",
        "teksIndonesia": "Bukankah Kami telah melapangkan dadamu (Nabi Muhammad),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/094001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/094001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/094001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/094001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/094001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/094001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَوَضَعْنَا عَنْكَ وِزْرَكَۙ",
        "teksLatin": "Wa waḍa‘nā ‘anka wizrak(a).",
        "teksIndonesia": "meringankan beban (tugas-tugas kenabian) darimu",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/094002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/094002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/094002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/094002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/094002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/094002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "الَّذِيْٓ اَنْقَضَ ظَهْرَكَۙ",
        "teksLatin": "Allażī anqaḍa ẓahrak(a).",
        "teksIndonesia": "yang memberatkan punggungmu,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/094003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/094003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/094003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/094003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/094003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/094003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "وَرَفَعْنَا لَكَ ذِكْرَكَۗ",
        "teksLatin": "Wa rafa‘nā laka żikrak(a).",
        "teksIndonesia": "dan meninggikan (derajat)-mu (dengan selalu) menyebut-nyebut (nama)-mu?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/094004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/094004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/094004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/094004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/094004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/094004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "فَاِنَّ مَعَ الْعُسْرِ يُسْرًاۙ",
        "teksLatin": "Fa'inna ma‘al-‘usri yusrā(n).",
        "teksIndonesia": "Maka, sesungguhnya beserta kesulitan ada kemudahan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/094005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/094005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/094005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/094005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/094005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/094005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "اِنَّ مَعَ الْعُسْرِ يُسْرًاۗ",
        "teksLatin": "Inna ma‘al-‘usri yusrā(n).",
        "teksIndonesia": "Sesungguhnya beserta kesulitan ada kemudahan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/094006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/094006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/094006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/094006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/094006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/094006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "فَاِذَا فَرَغْتَ فَانْصَبْۙ",
        "teksLatin": "Fa iżā faragta fanṣab.",
        "teksIndonesia": "Apabila engkau telah selesai (dengan suatu kebajikan), teruslah bekerja keras (untuk kebajikan yang lain)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/094007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/094007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/094007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/094007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/094007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/094007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "وَاِلٰى رَبِّكَ فَارْغَبْ ࣖ",
        "teksLatin": "Wa ilā rabbika fargab.",
        "teksIndonesia": "dan hanya kepada Tuhanmu berharaplah!",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/094008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/094008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/094008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/094008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/094008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/094008.mp3"
        }
      }
    ]
  },
  "95": {
    "nomor": 95,
    "namaLatin": "At-Tin",
    "namaArab": "التين",
    "arti": "Buah Tin",
    "jumlahAyat": 8,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 8 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Buruuj. Nama At Tiin diambil dari kata <i>At Tiin</i> yang terdapat pada ayat pertama surat ini yang artinya buah Tin.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/095.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/095.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/095.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/095.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/095.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/095.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "وَالتِّيْنِ وَالزَّيْتُوْنِۙ",
        "teksLatin": "Wat-tīni waz-zaitūn(i).",
        "teksIndonesia": "Demi (buah) tin dan (buah) zaitun,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/095001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/095001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/095001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/095001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/095001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/095001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَطُوْرِ سِيْنِيْنَۙ",
        "teksLatin": "Wa ṭūri sīnīn(a).",
        "teksIndonesia": "demi gunung Sinai,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/095002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/095002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/095002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/095002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/095002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/095002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَهٰذَا الْبَلَدِ الْاَمِيْنِۙ",
        "teksLatin": "Wa hāżal-baladil-amīn(i).",
        "teksIndonesia": "dan demi negeri (Makkah) yang aman ini,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/095003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/095003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/095003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/095003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/095003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/095003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "لَقَدْ خَلَقْنَا الْاِنْسَانَ فِيْٓ اَحْسَنِ تَقْوِيْمٍۖ",
        "teksLatin": "Laqad khalaqnal-insāna fī aḥsani taqwīm(in).",
        "teksIndonesia": "sungguh, Kami benar-benar telah menciptakan manusia dalam bentuk yang sebaik-baiknya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/095004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/095004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/095004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/095004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/095004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/095004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "ثُمَّ رَدَدْنٰهُ اَسْفَلَ سٰفِلِيْنَۙ",
        "teksLatin": "Ṡumma radadnāhu asfala sāfilīn(a).",
        "teksIndonesia": "Kemudian, kami kembalikan dia ke tempat yang serendah-rendahnya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/095005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/095005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/095005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/095005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/095005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/095005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "اِلَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ فَلَهُمْ اَجْرٌ غَيْرُ مَمْنُوْنٍۗ",
        "teksLatin": "Illal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti falahum ajrun gairu mamnūn(in).",
        "teksIndonesia": "kecuali orang-orang yang beriman dan mengerjakan kebajikan. Maka, mereka akan mendapat pahala yang tidak putus-putusnya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/095006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/095006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/095006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/095006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/095006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/095006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّيْنِۗ",
        "teksLatin": "Famā yukażżibuka ba‘du bid-dīn(i).",
        "teksIndonesia": "Maka, apa alasanmu (wahai orang kafir) mendustakan hari Pembalasan setelah (adanya bukti-bukti) itu?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/095007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/095007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/095007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/095007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/095007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/095007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "اَلَيْسَ اللّٰهُ بِاَحْكَمِ الْحٰكِمِيْنَ ࣖ",
        "teksLatin": "Alaisallāhu bi'aḥkamil-ḥākimīn(a).",
        "teksIndonesia": "Bukankah Allah hakim yang paling adil?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/095008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/095008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/095008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/095008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/095008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/095008.mp3"
        }
      }
    ]
  },
  "96": {
    "nomor": 96,
    "namaLatin": "Al-'Alaq",
    "namaArab": "العلق",
    "arti": "Segumpal Darah",
    "jumlahAyat": 19,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat Al 'Alaq terdiri atas 19 ayat, termasuk golongan surat-surat Makkiyah. Ayat 1 sampai dengan 5 dari surat ini adalah ayat-ayat Al Quran yang pertama sekali diturunkan, yaitu di waktu Nabi Muhammad s.a.w. berkhalwat di gua Hira'. Surat ini dinamai <i>Al 'Alaq</i> (segumpal darah), diambil dari perkataan <i>Alaq</i> yang terdapat pada ayat 2 surat ini. Surat ini dinamai juga dengan <i>Iqra</i> atau <i>Al Qalam</i>.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/096.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/096.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/096.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/096.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/096.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/096.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِيْ خَلَقَۚ",
        "teksLatin": "Iqra' bismi rabbikal-lażī khalaq(a).",
        "teksIndonesia": "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan!",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "خَلَقَ الْاِنْسَانَ مِنْ عَلَقٍۚ",
        "teksLatin": "Khalaqal-insāna min ‘alaq(in).",
        "teksIndonesia": "Dia menciptakan manusia dari segumpal darah.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "اِقْرَأْ وَرَبُّكَ الْاَكْرَمُۙ",
        "teksLatin": "Iqra' wa rabbukal-akram(u).",
        "teksIndonesia": "Bacalah! Tuhanmulah Yang Maha Mulia,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "الَّذِيْ عَلَّمَ بِالْقَلَمِۙ",
        "teksLatin": "Allażī ‘allama bil-qalam(i).",
        "teksIndonesia": "yang mengajar (manusia) dengan pena.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "عَلَّمَ الْاِنْسَانَ مَا لَمْ يَعْلَمْۗ",
        "teksLatin": "‘Allamal-insāna mā lam ya‘lam.",
        "teksIndonesia": "Dia mengajarkan manusia apa yang tidak diketahuinya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "كَلَّآ اِنَّ الْاِنْسَانَ لَيَطْغٰىٓ ۙ",
        "teksLatin": "Kallā innal-insāna layaṭgā.",
        "teksIndonesia": "Sekali-kali tidak! Sesungguhnya manusia itu benar-benar melampaui batas",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "اَنْ رَّاٰهُ اسْتَغْنٰىۗ",
        "teksLatin": "Ar ra'āhustagnā.",
        "teksIndonesia": "ketika melihat dirinya serba berkecukupan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "اِنَّ اِلٰى رَبِّكَ الرُّجْعٰىۗ",
        "teksLatin": "Inna ilā rabbikar-ruj‘ā.",
        "teksIndonesia": "Sesungguhnya hanya kepada Tuhanmulah tempat kembali(-mu).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "اَرَاَيْتَ الَّذِيْ يَنْهٰىۙ",
        "teksLatin": "Ara'aital-lażī yanhā.",
        "teksIndonesia": "Tahukah kamu tentang orang yang melarang",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "عَبْدًا اِذَا صَلّٰىۗ",
        "teksLatin": "‘Abdan iżā ṣallā.",
        "teksIndonesia": "seorang hamba ketika dia melaksanakan salat?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "اَرَاَيْتَ اِنْ كَانَ عَلَى الْهُدٰىٓۙ",
        "teksLatin": "Ara'aita in kāna ‘alal-hudā.",
        "teksIndonesia": "Bagaimana pendapatmu kalau terbukti dia berada di dalam kebenaran",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096011.mp3"
        }
      },
      {
        "nomorAyat": 12,
        "teksArab": "اَوْ اَمَرَ بِالتَّقْوٰىۗ",
        "teksLatin": "Au amara bit-taqwā. ",
        "teksIndonesia": "atau dia menyuruh bertakwa (kepada Allah)?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096012.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096012.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096012.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096012.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096012.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096012.mp3"
        }
      },
      {
        "nomorAyat": 13,
        "teksArab": "اَرَاَيْتَ اِنْ كَذَّبَ وَتَوَلّٰىۗ",
        "teksLatin": "Ara'aita in każżaba wa tawallā.",
        "teksIndonesia": "Bagaimana pendapatmu kalau dia mendustakan (kebenaran) dan berpaling (dari keimanan)?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096013.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096013.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096013.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096013.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096013.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096013.mp3"
        }
      },
      {
        "nomorAyat": 14,
        "teksArab": "اَلَمْ يَعْلَمْ بِاَنَّ اللّٰهَ يَرٰىۗ",
        "teksLatin": "Alam ya‘lam bi'annallāha yarā.",
        "teksIndonesia": "Tidakkah dia mengetahui bahwa sesungguhnya Allah melihat (segala perbuatannya)?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096014.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096014.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096014.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096014.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096014.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096014.mp3"
        }
      },
      {
        "nomorAyat": 15,
        "teksArab": "كَلَّا لَىِٕنْ لَّمْ يَنْتَهِ ەۙ لَنَسْفَعًاۢ بِالنَّاصِيَةِۙ",
        "teksLatin": "Kallā la'il lam yantah(i), lanasfa‘am bin-nāṣiyah(ti).",
        "teksIndonesia": "Sekali-kali tidak! Sungguh, jika dia tidak berhenti (berbuat demikian), niscaya Kami tarik ubun-ubunnya (ke dalam neraka),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096015.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096015.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096015.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096015.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096015.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096015.mp3"
        }
      },
      {
        "nomorAyat": 16,
        "teksArab": "نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍۚ",
        "teksLatin": "Nāṣiyatin kāżibatin khāṭi'ah(tin).",
        "teksIndonesia": "(yaitu) ubun-ubun orang yang mendustakan (kebenaran) dan durhaka.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096016.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096016.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096016.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096016.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096016.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096016.mp3"
        }
      },
      {
        "nomorAyat": 17,
        "teksArab": "فَلْيَدْعُ نَادِيَهٗۙ",
        "teksLatin": "Falyad‘u nādiyah(ū).",
        "teksIndonesia": "Biarlah dia memanggil golongannya (untuk menolongnya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096017.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096017.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096017.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096017.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096017.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096017.mp3"
        }
      },
      {
        "nomorAyat": 18,
        "teksArab": "سَنَدْعُ الزَّبَانِيَةَۙ",
        "teksLatin": "Sanad‘uz-zabāniyah(ta).",
        "teksIndonesia": "Kelak Kami akan memanggil (Malaikat) Zabaniah (penyiksa orang-orang yang berdosa).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096018.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096018.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096018.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096018.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096018.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096018.mp3"
        }
      },
      {
        "nomorAyat": 19,
        "teksArab": "كَلَّاۗ  لَا تُطِعْهُ وَاسْجُدْ وَاقْتَرِبْ ۩ ࣖ",
        "teksLatin": "Kallā, lā tuṭi‘hu wasjud waqtarib.",
        "teksIndonesia": "Sekali-kali tidak! Janganlah patuh kepadanya, (tetapi) sujud dan mendekatlah (kepada Allah).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/096019.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/096019.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/096019.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/096019.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/096019.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/096019.mp3"
        }
      }
    ]
  },
  "97": {
    "nomor": 97,
    "namaLatin": "Al-Qadr",
    "namaArab": "القدر",
    "arti": "Kemuliaan",
    "jumlahAyat": 5,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat Al Qadr terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat 'Abasa. Surat ini dinamai <i>Al Qadr</i> (kemuliaan), diambil dari perkataan <i>Al Qadr</i> yang terdapat pada ayat pertama surat ini.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/097.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/097.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/097.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/097.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/097.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/097.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "اِنَّآ اَنْزَلْنٰهُ فِيْ لَيْلَةِ الْقَدْرِ ",
        "teksLatin": "Innā anzalnāhu fī lailatil-qadr(i).",
        "teksIndonesia": "Sesungguhnya Kami telah menurunkannya (Al-Qur’an) pada Lailatulqadar.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/097001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/097001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/097001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/097001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/097001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/097001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَمَآ اَدْرٰىكَ مَا لَيْلَةُ الْقَدْرِۗ",
        "teksLatin": "Wa mā adrāka mā lailatul-qadr(i).",
        "teksIndonesia": "Tahukah kamu apakah Lailatulqadar itu?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/097002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/097002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/097002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/097002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/097002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/097002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "لَيْلَةُ الْقَدْرِ ەۙ خَيْرٌ مِّنْ اَلْفِ شَهْرٍۗ",
        "teksLatin": "Lailatul-qadri khairum min alfi syahr(in).",
        "teksIndonesia": "Lailatulqadar itu lebih baik daripada seribu bulan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/097003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/097003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/097003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/097003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/097003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/097003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "تَنَزَّلُ الْمَلٰۤىِٕكَةُ وَالرُّوْحُ فِيْهَا بِاِذْنِ رَبِّهِمْۚ مِنْ كُلِّ اَمْرٍۛ",
        "teksLatin": "Tanazzalul-malā'ikatu war rūḥu fīhā bi'iżni rabbihim min kulli amr(in).",
        "teksIndonesia": "Pada malam itu turun para malaikat dan Rūḥ (Jibril) dengan izin Tuhannya untuk mengatur semua urusan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/097004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/097004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/097004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/097004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/097004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/097004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "سَلٰمٌ ۛهِيَ حَتّٰى مَطْلَعِ الْفَجْرِ ࣖ",
        "teksLatin": "Salāmun hiya ḥattā maṭla‘il-fajr(i). ",
        "teksIndonesia": "Sejahteralah (malam) itu sampai terbit fajar.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/097005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/097005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/097005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/097005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/097005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/097005.mp3"
        }
      }
    ]
  },
  "98": {
    "nomor": 98,
    "namaLatin": "Al-Bayyinah",
    "namaArab": "البيّنة",
    "arti": "Bukti Nyata",
    "jumlahAyat": 8,
    "tempatTurun": "Madinah",
    "deskripsi": "Surat Al Bayyinah terdiri atas 8 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Ath Thalaq. Dinamai <i>Al Bayyinah</i> (bukti yang nyata) diambil dari perkataan <i>Al Bayyinah</i> yang terdapat pada ayat pertama surat ini.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/098.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/098.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/098.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/098.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/098.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/098.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "لَمْ يَكُنِ الَّذِيْنَ كَفَرُوْا مِنْ اَهْلِ الْكِتٰبِ وَالْمُشْرِكِيْنَ مُنْفَكِّيْنَ حَتّٰى تَأْتِيَهُمُ الْبَيِّنَةُۙ",
        "teksLatin": "Lam yakunil-lażīna kafarū min ahlil-kitābi wal-musyrikīna munfakkīna ḥattā ta'tiyahumul-bayyinah(tu).",
        "teksIndonesia": "Orang-orang yang kufur dari golongan Ahlulkitab dan orang-orang musyrik tidak akan meninggalkan (kekufuran mereka) sampai datang kepada mereka bukti yang nyata,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/098001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/098001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/098001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/098001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/098001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/098001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "رَسُوْلٌ مِّنَ اللّٰهِ يَتْلُوْا صُحُفًا مُّطَهَّرَةًۙ",
        "teksLatin": "Rasūlum minallāhi yatlū ṣuḥufam muṭahharah(tan).",
        "teksIndonesia": "(yaitu) seorang Rasul dari Allah (Nabi Muhammad) yang membacakan lembaran-lembaran suci (Al-Qur’an)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/098002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/098002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/098002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/098002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/098002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/098002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "فِيْهَا كُتُبٌ قَيِّمَةٌ  ۗ",
        "teksLatin": "Fīhā kutubun qayyimah(tun).",
        "teksIndonesia": "yang di dalamnya terdapat (isi) kitab-kitab yang lurus (benar).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/098003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/098003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/098003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/098003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/098003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/098003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "وَمَا تَفَرَّقَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ اِلَّا مِنْۢ بَعْدِ مَا جَاۤءَتْهُمُ الْبَيِّنَةُ ۗ",
        "teksLatin": "Wa mā tafarraqal-lażīna ūtul-kitāba illā mim ba‘di mā jā'athumul-bayyinah(tu).",
        "teksIndonesia": "Tidaklah terpecah-belah orang-orang Ahlulkitab, melainkan setelah datang kepada mereka bukti yang nyata.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/098004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/098004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/098004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/098004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/098004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/098004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "وَمَآ اُمِرُوْٓا اِلَّا لِيَعْبُدُوا اللّٰهَ مُخْلِصِيْنَ لَهُ الدِّيْنَ ەۙ حُنَفَاۤءَ وَيُقِيْمُوا الصَّلٰوةَ وَيُؤْتُوا الزَّكٰوةَ وَذٰلِكَ دِيْنُ الْقَيِّمَةِۗ",
        "teksLatin": "Wa mā umirū illā liya‘budullāha mukhliṣīna lahud-dīn(a), ḥunafā'a wa yuqīmuṣ-ṣalāta wa yu'tuz-zakāta  wa żālika dīnul-qayyimah(ti).",
        "teksIndonesia": "Mereka tidak diperintah, kecuali untuk menyembah Allah dengan mengikhlaskan ketaatan kepada-Nya lagi hanif (istikamah), melaksanakan salat, dan menunaikan zakat. Itulah agama yang lurus (benar).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/098005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/098005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/098005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/098005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/098005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/098005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "اِنَّ الَّذِيْنَ كَفَرُوْا مِنْ اَهْلِ الْكِتٰبِ وَالْمُشْرِكِيْنَ فِيْ نَارِ جَهَنَّمَ خٰلِدِيْنَ فِيْهَاۗ اُولٰۤىِٕكَ هُمْ شَرُّ الْبَرِيَّةِۗ",
        "teksLatin": "Innal-lażīna kafarū min ahlil-kitābi wal-musyrikīna fī nāri jahannama khālidīna fīhā, ulā'ika hum syarrul-bariyyah(ti).",
        "teksIndonesia": "Sesungguhnya orang-orang yang kufur dari golongan Ahlulkitab dan orang-orang musyrik (akan masuk) neraka Jahanam. Mereka kekal di dalamnya. Mereka itulah seburuk-buruk makhluk.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/098006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/098006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/098006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/098006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/098006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/098006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "اِنَّ الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ اُولٰۤىِٕكَ هُمْ خَيْرُ الْبَرِيَّةِۗ",
        "teksLatin": "Innal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti ulā'ika hum khairul-bariyyah(ti).",
        "teksIndonesia": "Sesungguhnya orang-orang yang beriman dan mengerjakan kebajikan, mereka itulah sebaik-baik makhluk.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/098007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/098007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/098007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/098007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/098007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/098007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "جَزَاۤؤُهُمْ عِنْدَ رَبِّهِمْ جَنّٰتُ عَدْنٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ خٰلِدِيْنَ فِيْهَآ اَبَدًا ۗرَضِيَ اللّٰهُ عَنْهُمْ وَرَضُوْا عَنْهُ ۗ ذٰلِكَ لِمَنْ خَشِيَ رَبَّهٗ ࣖ",
        "teksLatin": "Jazā'uhum ‘inda rabbihim jannātu ‘adnin tajrī min taḥtihal-anhāru khālidīna fīhā abadā(n), raḍiyallāhu ‘anhum wa raḍū ‘anh(u), żālika liman khasyiya rabbah(ū).",
        "teksIndonesia": "Balasan mereka di sisi Tuhannya adalah surga ‘Adn yang mengalir di bawahnya sungai-sungai. Mereka kekal di dalamnya selama-lamanya. Allah rida terhadap mereka dan mereka pun rida kepada-Nya. Itu adalah (balasan) bagi orang yang takut kepada Tuhannya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/098008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/098008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/098008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/098008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/098008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/098008.mp3"
        }
      }
    ]
  },
  "99": {
    "nomor": 99,
    "namaLatin": "Az-Zalzalah",
    "namaArab": "الزلزلة",
    "arti": "Guncangan",
    "jumlahAyat": 8,
    "tempatTurun": "Madinah",
    "deskripsi": "Surat ini terdiri atas 8 ayat, termasuk golongan surat-surat Madaniyyah diturunkan sesudah surat An Nisaa'. Nama <i>Al Zalzalah</i> diambil dari kata: <i>Zilzaal</i> yang terdapat pada ayat pertama surat ini yang berarti goncangan.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/099.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/099.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/099.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/099.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/099.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/099.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "اِذَا زُلْزِلَتِ الْاَرْضُ زِلْزَالَهَاۙ",
        "teksLatin": "Iżā zulzilatil-arḍu zilzālahā.",
        "teksIndonesia": "Apabila bumi diguncangkan dengan guncangan yang dahsyat,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/099001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/099001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/099001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/099001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/099001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/099001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَاَخْرَجَتِ الْاَرْضُ اَثْقَالَهَاۙ",
        "teksLatin": "Wa akhrajatil-arḍu aṡqālahā.",
        "teksIndonesia": "bumi mengeluarkan isi perutnya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/099002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/099002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/099002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/099002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/099002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/099002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَقَالَ الْاِنْسَانُ مَا لَهَاۚ",
        "teksLatin": "Wa qālal-insānu mā lahā.",
        "teksIndonesia": "dan manusia bertanya, “Apa yang terjadi dengannya (bumi)?”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/099003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/099003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/099003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/099003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/099003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/099003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "يَوْمَىِٕذٍ تُحَدِّثُ اَخْبَارَهَاۙ",
        "teksLatin": "Yauma'iżin tuḥaddiṡu akhbārahā.",
        "teksIndonesia": "Pada hari itu (bumi) menyampaikan berita (tentang apa yang diperbuat manusia di atasnya)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/099004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/099004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/099004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/099004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/099004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/099004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "بِاَنَّ رَبَّكَ اَوْحٰى لَهَاۗ",
        "teksLatin": "Bi'anna rabbaka auḥā lahā.",
        "teksIndonesia": "karena sesungguhnya Tuhanmu telah memerintahkan (yang demikian itu) kepadanya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/099005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/099005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/099005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/099005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/099005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/099005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "يَوْمَىِٕذٍ يَّصْدُرُ النَّاسُ اَشْتَاتًا ەۙ لِّيُرَوْا اَعْمَالَهُمْۗ",
        "teksLatin": "Yauma'iżiy yaṣdurun-nāsu asytātā(n), liyurau a‘mālahum.",
        "teksIndonesia": "Pada hari itu manusia keluar (dari kuburnya) dalam keadaan terpencar untuk diperlihatkan kepada mereka (balasan) semua perbuatan mereka.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/099006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/099006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/099006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/099006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/099006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/099006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "فَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَّرَهٗۚ",
        "teksLatin": "Famay ya‘mal miṡqāla żarratin khairay yarah(ū).",
        "teksIndonesia": "Siapa yang mengerjakan kebaikan seberat zarah, dia akan melihat (balasan)-nya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/099007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/099007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/099007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/099007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/099007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/099007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "وَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَّرَهٗ ࣖ",
        "teksLatin": "Wa may ya‘mal miṡqāla żarratin syarray yarah(ū).",
        "teksIndonesia": "Siapa yang mengerjakan kejahatan seberat zarah, dia akan melihat (balasan)-nya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/099008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/099008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/099008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/099008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/099008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/099008.mp3"
        }
      }
    ]
  },
  "100": {
    "nomor": 100,
    "namaLatin": "Al-'Adiyat",
    "namaArab": "العٰديٰت",
    "arti": "Kuda Yang Berlari Kencang",
    "jumlahAyat": 11,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 11 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al'Ashr. Nama <i>Al 'Aadiyaat</i> diambil dari kata <i>Al 'Aadiyaat</i> yang terdapat pada ayat pertama surat ini, artinya yang berlari kencang.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/100.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/100.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/100.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/100.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/100.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/100.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "وَالْعٰدِيٰتِ ضَبْحًاۙ ",
        "teksLatin": "Wal-‘ādiyāti ḍabḥā(n). ",
        "teksIndonesia": "Demi kuda-kuda perang yang berlari kencang terengah-engah,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/100001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/100001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/100001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/100001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/100001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/100001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "فَالْمُوْرِيٰتِ قَدْحًاۙ",
        "teksLatin": "Fal-mūriyāti qadḥā(n).",
        "teksIndonesia": "yang memercikkan bunga api (dengan entakan kakinya),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/100002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/100002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/100002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/100002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/100002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/100002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "فَالْمُغِيْرٰتِ صُبْحًاۙ",
        "teksLatin": "Fal-mugīrāti ṣubḥā(n).",
        "teksIndonesia": "yang menyerang (dengan tiba-tiba) pada waktu pagi",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/100003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/100003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/100003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/100003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/100003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/100003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "فَاَثَرْنَ بِهٖ نَقْعًاۙ",
        "teksLatin": "Fa'aṡarna bihī naq‘ā(n).",
        "teksIndonesia": "sehingga menerbangkan debu,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/100004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/100004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/100004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/100004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/100004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/100004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "فَوَسَطْنَ بِهٖ جَمْعًاۙ",
        "teksLatin": "Fawasaṭna bihī jam‘ā(n).",
        "teksIndonesia": "lalu menyerbu ke tengah-tengah kumpulan musuh,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/100005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/100005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/100005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/100005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/100005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/100005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "اِنَّ الْاِنْسَانَ لِرَبِّهٖ لَكَنُوْدٌ ۚ",
        "teksLatin": "Innal-insāna lirabbihī lakanūd(un).",
        "teksIndonesia": "sesungguhnya manusia itu sangatlah ingkar kepada Tuhannya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/100006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/100006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/100006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/100006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/100006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/100006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "وَاِنَّهٗ عَلٰى ذٰلِكَ لَشَهِيْدٌۚ",
        "teksLatin": "Wa innahū ‘alā żālika lasyahīd(un).",
        "teksIndonesia": "Sesungguhnya dia benar-benar menjadi saksi atas hal itu (keingkarannya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/100007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/100007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/100007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/100007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/100007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/100007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "وَاِنَّهٗ لِحُبِّ الْخَيْرِ لَشَدِيْدٌ ۗ",
        "teksLatin": "Wa innahū liḥubbil-khairi lasyadīd(un).",
        "teksIndonesia": "Sesungguhnya cintanya pada harta benar-benar berlebihan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/100008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/100008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/100008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/100008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/100008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/100008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "۞ اَفَلَا يَعْلَمُ اِذَا بُعْثِرَ مَا فِى الْقُبُوْرِۙ",
        "teksLatin": "Afalā ya‘lamu iżā bu‘ṡira mā fil-qubūr(i).",
        "teksIndonesia": "Maka, tidakkah dia mengetahui (apa yang akan dialaminya) apabila dikeluarkan apa yang ada di dalam kubur",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/100009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/100009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/100009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/100009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/100009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/100009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "وَحُصِّلَ مَا فِى الصُّدُوْرِۙ",
        "teksLatin": "Wa ḥuṣṣila mā fiṣ-ṣudūr(i).",
        "teksIndonesia": "dan ditampakkan apa yang tersimpan di dalam dada?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/100010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/100010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/100010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/100010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/100010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/100010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "اِنَّ رَبَّهُمْ بِهِمْ يَوْمَىِٕذٍ لَّخَبِيْرٌ ࣖ",
        "teksLatin": "Inna rabbahum bihim yauma'iżil lakhabīr(un).",
        "teksIndonesia": "Sesungguhnya Tuhan mereka pada hari itu benar-benar Maha Teliti terhadap (keadaan) mereka.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/100011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/100011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/100011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/100011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/100011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/100011.mp3"
        }
      }
    ]
  },
  "101": {
    "nomor": 101,
    "namaLatin": "Al-Qari'ah",
    "namaArab": "القارعة",
    "arti": "Hari Kiamat",
    "jumlahAyat": 11,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 11 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Quraisy. Nama <i>Al Qaari'ah</i> diambil dari kata <i>Al Qaari'ah</i> yang terdapat pada ayat pertama, artinya mengetok dengan keras, kemudian kata ini dipakai untuk nama hari kiamat.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/101.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/101.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/101.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/101.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/101.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/101.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "اَلْقَارِعَةُۙ",
        "teksLatin": "Al-qāri‘ah(tu).",
        "teksIndonesia": "Al-Qāri‘ah (hari Kiamat yang menggetarkan).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/101001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/101001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/101001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/101001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/101001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/101001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "مَا الْقَارِعَةُ ۚ",
        "teksLatin": "Mal-qāri‘ah(tu).",
        "teksIndonesia": "Apakah al-Qāri‘ah itu?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/101002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/101002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/101002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/101002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/101002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/101002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَمَآ اَدْرٰىكَ مَا الْقَارِعَةُ ۗ",
        "teksLatin": "Wa mā adrāka mal-qāri‘ah(tu).",
        "teksIndonesia": "Tahukah kamu apakah al-Qāri‘ah itu?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/101003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/101003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/101003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/101003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/101003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/101003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "يَوْمَ يَكُوْنُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوْثِۙ",
        "teksLatin": "Yauma yakūnun-nāsu kal-farāsyil-mabṡūṡ(i).",
        "teksIndonesia": "Pada hari itu manusia seperti laron yang beterbangan",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/101004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/101004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/101004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/101004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/101004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/101004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "وَتَكُوْنُ الْجِبَالُ كَالْعِهْنِ الْمَنْفُوْشِۗ",
        "teksLatin": "Wa takūnul-jibālu kal-‘ihnil-manfūsy(i).",
        "teksIndonesia": "dan gunung-gunung seperti bulu yang berhamburan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/101005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/101005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/101005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/101005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/101005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/101005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "فَاَمَّا مَنْ ثَقُلَتْ مَوَازِيْنُهٗۙ ",
        "teksLatin": "Fa ammā man ṡaqulat mawāzīnuh(ū).",
        "teksIndonesia": "Siapa yang berat timbangan (kebaikan)-nya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/101006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/101006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/101006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/101006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/101006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/101006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "فَهُوَ فِيْ عِيْشَةٍ رَّاضِيَةٍۗ",
        "teksLatin": "Fa huwa fī ‘īsyatir rāḍiyah(tin).",
        "teksIndonesia": "dia berada dalam kehidupan yang menyenangkan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/101007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/101007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/101007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/101007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/101007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/101007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "وَاَمَّا مَنْ خَفَّتْ مَوَازِيْنُهٗۙ",
        "teksLatin": "Wa ammā man khaffat mawāzīnuh(ū).",
        "teksIndonesia": "Adapun orang yang ringan timbangan (kebaikan)-nya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/101008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/101008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/101008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/101008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/101008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/101008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "فَاُمُّهٗ هَاوِيَةٌ  ۗ",
        "teksLatin": "Fa ummuhū hāwiyah(tun).",
        "teksIndonesia": "tempat kembalinya adalah (neraka) Hawiyah.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/101009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/101009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/101009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/101009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/101009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/101009.mp3"
        }
      },
      {
        "nomorAyat": 10,
        "teksArab": "وَمَآ اَدْرٰىكَ مَا هِيَهْۗ",
        "teksLatin": "Wa mā adrāka mā hiyah.",
        "teksIndonesia": "Tahukah kamu apakah (neraka Hawiyah) itu?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/101010.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/101010.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/101010.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/101010.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/101010.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/101010.mp3"
        }
      },
      {
        "nomorAyat": 11,
        "teksArab": "نَارٌ حَامِيَةٌ ࣖ",
        "teksLatin": "Nārun ḥāmiyah(tun).",
        "teksIndonesia": "(Ia adalah) api yang sangat panas.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/101011.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/101011.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/101011.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/101011.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/101011.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/101011.mp3"
        }
      }
    ]
  },
  "102": {
    "nomor": 102,
    "namaLatin": "At-Takasur",
    "namaArab": "التكاثر",
    "arti": "Bermegah-Megahan",
    "jumlahAyat": 8,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat At Takaatsur terdiri atas 8 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Kautsar. Dinamai <i>At Takaatsur</i> (bermegah-megahan) diambil dari perkataan <i>At Takaatsur</i> yang terdapat pada ayat pertama surat ini.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/102.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/102.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/102.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/102.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/102.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/102.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "اَلْهٰىكُمُ التَّكَاثُرُۙ",
        "teksLatin": "Alhākumut-takāṡur(u). ",
        "teksIndonesia": "Berbangga-bangga dalam memperbanyak (dunia) telah melalaikanmu",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/102001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/102001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/102001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/102001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/102001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/102001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "حَتّٰى زُرْتُمُ الْمَقَابِرَۗ",
        "teksLatin": "Ḥattā zurtumul-maqābir(a).",
        "teksIndonesia": "sampai kamu masuk ke dalam kubur.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/102002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/102002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/102002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/102002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/102002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/102002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "كَلَّا سَوْفَ تَعْلَمُوْنَۙ",
        "teksLatin": "Kallā saufa ta‘lamūn(a).",
        "teksIndonesia": "Sekali-kali tidak! Kelak kamu akan mengetahui (akibat perbuatanmu itu).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/102003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/102003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/102003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/102003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/102003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/102003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "ثُمَّ كَلَّا سَوْفَ تَعْلَمُوْنَ ",
        "teksLatin": "Ṡumma kallā saufa ta‘lamūn(a).",
        "teksIndonesia": "Sekali-kali tidak (jangan melakukan itu)! Kelak kamu akan mengetahui (akibatnya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/102004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/102004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/102004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/102004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/102004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/102004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "كَلَّا لَوْ تَعْلَمُوْنَ عِلْمَ الْيَقِيْنِۗ",
        "teksLatin": "Kallā lau ta‘lamūna ‘ilmal-yaqīn(i).",
        "teksIndonesia": "Sekali-kali tidak (jangan melakukan itu)! Sekiranya kamu mengetahui dengan pasti, (niscaya kamu tidak akan melakukannya).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/102005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/102005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/102005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/102005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/102005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/102005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "لَتَرَوُنَّ الْجَحِيْمَۙ",
        "teksLatin": "Latarawunnal-jaḥīm(a).",
        "teksIndonesia": "Pasti kamu benar-benar akan melihat (neraka) Jahim.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/102006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/102006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/102006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/102006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/102006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/102006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِيْنِۙ",
        "teksLatin": "Ṡumma latarawunnahā ‘ainal-yaqīn(i).",
        "teksIndonesia": "Kemudian, kamu pasti benar-benar akan melihatnya dengan ainulyakin.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/102007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/102007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/102007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/102007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/102007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/102007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "ثُمَّ لَتُسْـَٔلُنَّ يَوْمَىِٕذٍ عَنِ النَّعِيْمِ ࣖ",
        "teksLatin": "Ṡumma latus'alunna yauma'iżin ‘anin-na‘īm(i).",
        "teksIndonesia": "Kemudian, kamu pasti benar-benar akan ditanya pada hari itu tentang kenikmatan (yang megah di dunia itu).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/102008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/102008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/102008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/102008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/102008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/102008.mp3"
        }
      }
    ]
  },
  "103": {
    "nomor": 103,
    "namaLatin": "Al-'Asr",
    "namaArab": "العصر",
    "arti": "Masa",
    "jumlahAyat": 3,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat Al 'Ashr terdiri atas 3 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Alam Nasyrah. Dinamai <i>Al 'Ashr</i> (masa) diambil dari perkataan <i>Al 'Ashr</i> yang terdapat pada ayat pertama surat ini.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/103.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/103.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/103.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/103.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/103.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/103.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "وَالْعَصْرِۙ",
        "teksLatin": "Wal-‘aṣr(i).",
        "teksIndonesia": "Demi masa,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/103001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/103001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/103001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/103001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/103001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/103001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "اِنَّ الْاِنْسَانَ لَفِيْ خُسْرٍۙ",
        "teksLatin": "Innal-insāna lafī khusr(in).",
        "teksIndonesia": "sesungguhnya manusia benar-benar berada dalam kerugian,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/103002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/103002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/103002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/103002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/103002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/103002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "اِلَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ وَتَوَاصَوْا بِالْحَقِّ ەۙ وَتَوَاصَوْا بِالصَّبْرِ ࣖ",
        "teksLatin": "Illal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti wa tawāṣau bil-ḥaqq(i), wa tawāṣau biṣ-ṣabr(i).",
        "teksIndonesia": "kecuali orang-orang yang beriman dan beramal saleh serta saling menasihati untuk kebenaran dan kesabaran.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/103003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/103003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/103003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/103003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/103003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/103003.mp3"
        }
      }
    ]
  },
  "104": {
    "nomor": 104,
    "namaLatin": "Al-Humazah",
    "namaArab": "الهمزة",
    "arti": "Pengumpat",
    "jumlahAyat": 9,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat Al Humazah terdiri atas 9 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Qiyaamah. Dinamai <i>Al Humazah</i> (pengumpat) diambil dari perkataan <i>Humazah</i> yang terdapat pada ayat pertama surat ini.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/104.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/104.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/104.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/104.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/104.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/104.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍۙ",
        "teksLatin": "Wailul likulli humazatil-lumazah(tin).",
        "teksIndonesia": "Celakalah setiap pengumpat lagi pencela",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/104001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/104001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/104001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/104001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/104001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/104001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": " ۨالَّذِيْ جَمَعَ مَالًا وَّعَدَّدَهٗۙ",
        "teksLatin": "Allażī jama‘a mālaw wa ‘addadah(ū).",
        "teksIndonesia": "yang mengumpulkan harta dan menghitung-hitungnya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/104002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/104002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/104002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/104002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/104002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/104002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "يَحْسَبُ اَنَّ مَالَهٗٓ اَخْلَدَهٗۚ",
        "teksLatin": "Yaḥsabu anna mālahū akhladah(ū).",
        "teksIndonesia": "Dia (manusia) mengira bahwa hartanya dapat mengekalkannya.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/104003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/104003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/104003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/104003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/104003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/104003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "كَلَّا لَيُنْۢبَذَنَّ فِى الْحُطَمَةِۖ",
        "teksLatin": "Kallā layumbażanna fil-ḥuṭamah(ti).",
        "teksIndonesia": "Sekali-kali tidak! Pasti dia akan dilemparkan ke dalam (neraka) Hutamah.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/104004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/104004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/104004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/104004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/104004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/104004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "وَمَآ اَدْرٰىكَ مَا الْحُطَمَةُ ۗ",
        "teksLatin": "Wa mā adrāka mal-ḥuṭamah(tu).",
        "teksIndonesia": "Tahukah kamu apakah (neraka) Hutamah?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/104005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/104005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/104005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/104005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/104005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/104005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "نَارُ اللّٰهِ الْمُوْقَدَةُۙ",
        "teksLatin": "Nārullāhil-mūqadah(tu).",
        "teksIndonesia": "(Ia adalah) api (azab) Allah yang dinyalakan",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/104006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/104006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/104006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/104006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/104006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/104006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "الَّتِيْ تَطَّلِعُ عَلَى الْاَفْـِٕدَةِۗ",
        "teksLatin": "Allatī taṭṭali‘u ‘alal-af'idah(ti).",
        "teksIndonesia": "yang (membakar) naik sampai ke hati.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/104007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/104007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/104007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/104007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/104007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/104007.mp3"
        }
      },
      {
        "nomorAyat": 8,
        "teksArab": "اِنَّهَا عَلَيْهِمْ مُّؤْصَدَةٌۙ",
        "teksLatin": "Innahā ‘alaihim mu'ṣadah(tun).",
        "teksIndonesia": "Sesungguhnya dia (api itu) tertutup rapat (sebagai hukuman) atas mereka,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/104008.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/104008.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/104008.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/104008.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/104008.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/104008.mp3"
        }
      },
      {
        "nomorAyat": 9,
        "teksArab": "فِيْ عَمَدٍ مُّمَدَّدَةٍ ࣖ",
        "teksLatin": "Fī ‘amadim mumaddadah(tin).",
        "teksIndonesia": "(sedangkan mereka) diikat pada tiang-tiang yang panjang.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/104009.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/104009.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/104009.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/104009.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/104009.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/104009.mp3"
        }
      }
    ]
  },
  "105": {
    "nomor": 105,
    "namaLatin": "Al-Fil",
    "namaArab": "الفيل",
    "arti": "Gajah",
    "jumlahAyat": 5,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Kaafirun. Nama <i>Al Fiil</i> diambil dari kata <i>Al Fiil</i> yang terdapat pada ayat pertama surat ini, artinya <i>gajah</i>. Surat Al Fiil mengemukakan cerita pasukan bergajah dari Yaman yang dipimpin oleh Abrahah yang ingin meruntuhkan Ka'bah di Mekah. Peristiwa ini terjadi pada tahun Nabi Muhammad s.a.w. dilahirkan.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/105.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/105.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/105.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/105.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/105.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/105.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "اَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِاَصْحٰبِ الْفِيْلِۗ",
        "teksLatin": "Alam tara kaifa fa‘ala rabbuka bi'aṣḥābil-fīl(i).",
        "teksIndonesia": "Tidakkah engkau (Nabi Muhammad) memperhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan bergajah?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/105001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/105001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/105001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/105001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/105001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/105001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "اَلَمْ يَجْعَلْ كَيْدَهُمْ فِيْ تَضْلِيْلٍۙ",
        "teksLatin": "Alam yaj‘al kaidahum fī taḍlīl(in).",
        "teksIndonesia": "Bukankah Dia telah menjadikan tipu daya mereka itu sia-sia?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/105002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/105002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/105002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/105002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/105002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/105002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَّاَرْسَلَ عَلَيْهِمْ طَيْرًا اَبَابِيْلَۙ",
        "teksLatin": "Wa arsala ‘alaihim ṭairan abābīl(a).",
        "teksIndonesia": "Dia mengirimkan kepada mereka burung yang berbondong-bondong",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/105003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/105003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/105003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/105003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/105003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/105003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "تَرْمِيْهِمْ بِحِجَارَةٍ مِّنْ سِجِّيْلٍۙ",
        "teksLatin": "Tarmīhim biḥijāratim min sijjīl(in).",
        "teksIndonesia": "yang melempari mereka dengan batu dari tanah liat yang dibakar,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/105004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/105004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/105004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/105004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/105004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/105004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُوْلٍ ࣖ ",
        "teksLatin": "Fa ja‘alahum ka‘aṣfim ma'kūl(in).",
        "teksIndonesia": "sehingga Dia menjadikan mereka seperti daun-daun yang dimakan (ulat).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/105005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/105005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/105005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/105005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/105005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/105005.mp3"
        }
      }
    ]
  },
  "106": {
    "nomor": 106,
    "namaLatin": "Quraisy",
    "namaArab": "قريش",
    "arti": "Quraisy",
    "jumlahAyat": 4,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 4 ayat, termasuk golongan surat-surat Makkiyyah dan diturunkan sesudah surat At Tiin. Nama <i>Quraisy</i> diambil dari kata <i>Quraisy</i> yang terdapat pada ayat pertama, artinya suku Quraisy. Suku Quraisy adalah suku yang mendapat  kehormatan untuk memelihara Ka'bah.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/106.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/106.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/106.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/106.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/106.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/106.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "لِاِيْلٰفِ قُرَيْشٍۙ",
        "teksLatin": "Li'īlāfi quraisy(in).",
        "teksIndonesia": "Disebabkan oleh kebiasaan orang-orang Quraisy,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/106001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/106001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/106001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/106001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/106001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/106001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "اٖلٰفِهِمْ رِحْلَةَ الشِّتَاۤءِ وَالصَّيْفِۚ",
        "teksLatin": "´lāfihim riḥlatasy-syitā'i waṣ-ṣaif(i).",
        "teksIndonesia": "(yaitu) kebiasaan mereka bepergian pada musim dingin dan musim panas (sehingga mendapatkan banyak keuntungan),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/106002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/106002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/106002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/106002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/106002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/106002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "فَلْيَعْبُدُوْا رَبَّ هٰذَا الْبَيْتِۙ",
        "teksLatin": "Falya‘budū rabba hāżal-bait(i).",
        "teksIndonesia": "maka hendaklah mereka menyembah Tuhan (pemilik) rumah ini (Ka‘bah)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/106003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/106003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/106003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/106003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/106003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/106003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "الَّذِيْٓ اَطْعَمَهُمْ مِّنْ جُوْعٍ ەۙ وَّاٰمَنَهُمْ مِّنْ خَوْفٍ ࣖ",
        "teksLatin": "Allażī aṭ‘amahum min jū‘(in), wa āmanahum min khauf(in).",
        "teksIndonesia": "yang telah memberi mereka makanan untuk menghilangkan lapar dan mengamankan mereka dari rasa takut.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/106004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/106004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/106004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/106004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/106004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/106004.mp3"
        }
      }
    ]
  },
  "107": {
    "nomor": 107,
    "namaLatin": "Al-Ma'un",
    "namaArab": "الماعون",
    "arti": "Barang Yang Berguna",
    "jumlahAyat": 7,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 7 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat At Taakatsur. Nama <i>Al Maa'uun</i> diambil dari kata <i>Al Maa'uun</i> yang terdapat pada ayat 7, artinya barang-barang yang berguna.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/107.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/107.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/107.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/107.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/107.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/107.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "اَرَءَيْتَ الَّذِيْ يُكَذِّبُ بِالدِّيْنِۗ",
        "teksLatin": "Ara'aital-lażī yukażżibu bid-dīn(i).",
        "teksIndonesia": "Tahukah kamu (orang) yang mendustakan agama?",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/107001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/107001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/107001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/107001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/107001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/107001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "فَذٰلِكَ الَّذِيْ يَدُعُّ الْيَتِيْمَۙ",
        "teksLatin": "Fa żālikal-lażī yadu‘‘ul-yatīm(a).",
        "teksIndonesia": "Itulah orang yang menghardik anak yatim",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/107002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/107002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/107002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/107002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/107002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/107002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَلَا يَحُضُّ عَلٰى طَعَامِ الْمِسْكِيْنِۗ",
        "teksLatin": "Wa lā yaḥuḍḍu ‘alā ṭa‘āmil-miskīn(i).",
        "teksIndonesia": "dan tidak menganjurkan untuk memberi makan orang miskin.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/107003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/107003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/107003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/107003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/107003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/107003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "فَوَيْلٌ لِّلْمُصَلِّيْنَۙ",
        "teksLatin": "Fawailul lil-muṣallīn(a).",
        "teksIndonesia": "Celakalah orang-orang yang melaksanakan salat,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/107004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/107004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/107004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/107004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/107004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/107004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "الَّذِيْنَ هُمْ عَنْ صَلَاتِهِمْ سَاهُوْنَۙ",
        "teksLatin": "Allażīna hum ‘an ṣalātihim sāhūn(a).",
        "teksIndonesia": "(yaitu) yang lalai terhadap salatnya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/107005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/107005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/107005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/107005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/107005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/107005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "الَّذِيْنَ هُمْ يُرَاۤءُوْنَۙ",
        "teksLatin": "Allażīna hum yurā'ūn(a).",
        "teksIndonesia": "yang berbuat riya,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/107006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/107006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/107006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/107006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/107006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/107006.mp3"
        }
      },
      {
        "nomorAyat": 7,
        "teksArab": "وَيَمْنَعُوْنَ الْمَاعُوْنَ ࣖ",
        "teksLatin": "Wa yamna‘ūnal-mā‘ūn(a).",
        "teksIndonesia": "dan enggan (memberi) bantuan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/107007.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/107007.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/107007.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/107007.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/107007.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/107007.mp3"
        }
      }
    ]
  },
  "108": {
    "nomor": 108,
    "namaLatin": "Al-Kausar",
    "namaArab": "الكوثر",
    "arti": "Pemberian Yang Banyak",
    "jumlahAyat": 3,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat Al Kautsar terdiri atas 3 ayat, termasuk golongan surat-surat  Makkiyyah diturunkan sesudah surat Al 'Aadiyaat. Dinamai <i>Al Kautsar</i> (nikmat yang banyak) diambil dari perkataan <i>Al Kautsar</i> yang terdapat pada ayat pertama surat ini.<br>Surat ini sebagai penghibur hati Nabi Muhammad s.a.w.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/108.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/108.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/108.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/108.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/108.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/108.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "اِنَّآ اَعْطَيْنٰكَ الْكَوْثَرَۗ",
        "teksLatin": "Innā a‘ṭainākal-kauṡar(a).",
        "teksIndonesia": "Sesungguhnya Kami telah memberimu (Nabi Muhammad) nikmat yang banyak.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/108001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/108001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/108001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/108001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/108001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/108001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "فَصَلِّ لِرَبِّكَ وَانْحَرْۗ",
        "teksLatin": "Faṣalli lirabbika wanḥar.",
        "teksIndonesia": "Maka, laksanakanlah salat karena Tuhanmu dan berkurbanlah!",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/108002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/108002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/108002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/108002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/108002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/108002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "اِنَّ شَانِئَكَ هُوَ الْاَبْتَرُ ࣖ",
        "teksLatin": "Inna syāni'aka huwal-abtar(u).",
        "teksIndonesia": "Sesungguhnya orang yang membencimu, dialah yang terputus (dari rahmat Allah).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/108003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/108003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/108003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/108003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/108003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/108003.mp3"
        }
      }
    ]
  },
  "109": {
    "nomor": 109,
    "namaLatin": "Al-Kafirun",
    "namaArab": "الكٰفرون",
    "arti": "Orang-Orang kafir",
    "jumlahAyat": 6,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat Al Kaafiruun terdiri atas 6 ayat, termasuk golongan surat-surat  Makkiyyah, diturunkan sesudah surat Al Maa'uun. Dinamai <i>Al Kaafiruun</i> (orang-orang kafir), diambil dari perkataan  <i>Al Kaafiruun</i> yang terdapat pada ayat pertama surat ini.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/109.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/109.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/109.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/109.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/109.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/109.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "قُلْ يٰٓاَيُّهَا الْكٰفِرُوْنَۙ",
        "teksLatin": "Qul yā ayyuhal-kāfirūn(a).",
        "teksIndonesia": "Katakanlah (Nabi Muhammad), “Wahai orang-orang kafir,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/109001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/109001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/109001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/109001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/109001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/109001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "لَآ اَعْبُدُ مَا تَعْبُدُوْنَۙ",
        "teksLatin": "Lā a‘budu mā ta‘budūn(a).",
        "teksIndonesia": "aku tidak akan menyembah apa yang kamu sembah.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/109002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/109002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/109002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/109002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/109002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/109002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَلَآ اَنْتُمْ عٰبِدُوْنَ مَآ اَعْبُدُۚ",
        "teksLatin": "Wa lā antum ‘ābidūna mā a‘bud(u).",
        "teksIndonesia": "Kamu juga bukan penyembah apa yang aku sembah.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/109003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/109003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/109003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/109003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/109003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/109003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "وَلَآ اَنَا۠ عَابِدٌ مَّا عَبَدْتُّمْۙ",
        "teksLatin": "Wa lā ana ‘ābidum mā ‘abattum.",
        "teksIndonesia": "Aku juga tidak pernah menjadi penyembah apa yang kamu sembah.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/109004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/109004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/109004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/109004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/109004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/109004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "وَلَآ اَنْتُمْ عٰبِدُوْنَ مَآ اَعْبُدُۗ",
        "teksLatin": "Wa lā antum ‘ābidūna mā a‘bud(u).",
        "teksIndonesia": "Kamu tidak pernah (pula) menjadi penyembah apa yang aku sembah.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/109005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/109005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/109005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/109005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/109005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/109005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "لَكُمْ دِيْنُكُمْ وَلِيَ دِيْنِ ࣖ",
        "teksLatin": "Lakum dīnukum wa liya dīn(i).",
        "teksIndonesia": "Untukmu agamamu dan untukku agamaku.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/109006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/109006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/109006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/109006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/109006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/109006.mp3"
        }
      }
    ]
  },
  "110": {
    "nomor": 110,
    "namaLatin": "An-Nasr",
    "namaArab": "النصر",
    "arti": "Pertolongan",
    "jumlahAyat": 3,
    "tempatTurun": "Madinah",
    "deskripsi": "Surat An Nashr terdiri atas 3 ayat, termasuk golongan surat-surat  Madaniyyah yang diturunkan di Mekah sesudah surat At Taubah.  Dinamai <i>An Nashr</i> (pertolongan) diambil dari perkataan <i>Nashr</i> yang  terdapat pada ayat pertama surat ini.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/110.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/110.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/110.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/110.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/110.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/110.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "اِذَا جَاۤءَ نَصْرُ اللّٰهِ وَالْفَتْحُۙ",
        "teksLatin": "Iżā jā'a naṣrullāhi wal-fatḥ(u).",
        "teksIndonesia": "Apabila telah datang pertolongan Allah dan kemenangan",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/110001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/110001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/110001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/110001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/110001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/110001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "وَرَاَيْتَ النَّاسَ يَدْخُلُوْنَ فِيْ دِيْنِ اللّٰهِ اَفْوَاجًاۙ",
        "teksLatin": "Wa ra'aitan-nāsa yadkhulūna fī dīnillāhi afwājā(n).",
        "teksIndonesia": "dan engkau melihat manusia berbondong-bondong masuk agama Allah,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/110002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/110002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/110002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/110002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/110002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/110002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُۗ اِنَّهٗ كَانَ تَوَّابًا ࣖ",
        "teksLatin": "Fasabbiḥ biḥamdi rabbika wastagfirh(u), innahū kāna tawwābā(n).",
        "teksIndonesia": "bertasbihlah dengan memuji Tuhanmu dan mohonlah ampun kepada-Nya. Sesungguhnya Dia Maha Penerima tobat.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/110003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/110003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/110003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/110003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/110003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/110003.mp3"
        }
      }
    ]
  },
  "111": {
    "nomor": 111,
    "namaLatin": "Al-Lahab",
    "namaArab": "اللهب",
    "arti": "Api Yang Bergejolak",
    "jumlahAyat": 5,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyyah,  diturunkan sesudah surat Al Fath. Nama <i>Al Lahab</i> diambil dari kata  <i>Al Lahab</i> yang terdapat pada ayat ketiga surat ini yang artinya gejolak  api. Surat ini juga dinamakan surat <i>Al Masad</i>.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/111.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/111.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/111.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/111.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/111.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/111.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "تَبَّتْ يَدَآ اَبِيْ لَهَبٍ وَّتَبَّۗ",
        "teksLatin": "Tabbat yadā abī lahabiw wa tabb(a).",
        "teksIndonesia": "Binasalah kedua tangan Abu Lahab dan benar-benar binasa dia.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/111001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/111001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/111001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/111001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/111001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/111001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "مَآ اَغْنٰى عَنْهُ مَالُهٗ وَمَا كَسَبَۗ",
        "teksLatin": "Mā agnā ‘anhu māluhū wa mā kasab(a).",
        "teksIndonesia": "Tidaklah berguna baginya hartanya dan apa yang dia usahakan.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/111002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/111002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/111002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/111002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/111002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/111002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "سَيَصْلٰى نَارًا ذَاتَ لَهَبٍۙ",
        "teksLatin": "Sayaṣlā nāran żāta lahab(in).",
        "teksIndonesia": "Kelak dia akan memasuki api yang bergejolak (neraka),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/111003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/111003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/111003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/111003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/111003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/111003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "وَّامْرَاَتُهٗ ۗحَمَّالَةَ الْحَطَبِۚ",
        "teksLatin": "Wamra'atuh(ū), ḥammālatal-ḥaṭab(i).",
        "teksIndonesia": "(begitu pula) istrinya, pembawa kayu bakar (penyebar fitnah).",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/111004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/111004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/111004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/111004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/111004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/111004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "فِيْ جِيْدِهَا حَبْلٌ مِّنْ مَّسَدٍ ࣖ",
        "teksLatin": "Fī jīdihā ḥablum mim masad(in).",
        "teksIndonesia": "Di lehernya ada tali dari sabut yang dipintal.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/111005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/111005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/111005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/111005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/111005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/111005.mp3"
        }
      }
    ]
  },
  "112": {
    "nomor": 112,
    "namaLatin": "Al-Ikhlas",
    "namaArab": "الاخلاص",
    "arti": "Ikhlas",
    "jumlahAyat": 4,
    "tempatTurun": "Mekkah",
    "deskripsi": "Surat ini terdiri atas 4 ayat, termasuk golongan surat-surat  Makkiyyah, diturunkan sesudah sesudah surat An Naas. Dinamakan <i>Al Ikhlas</i> karena surat ini sepenuhnya menegaskan kemurnian keesaan Allah s.w.t.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/112.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/112.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/112.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/112.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/112.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/112.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "قُلْ هُوَ اللّٰهُ اَحَدٌۚ",
        "teksLatin": "Qul huwallāhu aḥad(un).",
        "teksIndonesia": "Katakanlah (Nabi Muhammad), “Dialah Allah Yang Maha Esa.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/112001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/112001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/112001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/112001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/112001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/112001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "اَللّٰهُ الصَّمَدُۚ",
        "teksLatin": "Allāhuṣ-ṣamad(u).",
        "teksIndonesia": "Allah tempat meminta segala sesuatu.",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/112002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/112002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/112002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/112002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/112002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/112002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ",
        "teksLatin": "Lam yalid wa lam yūlad.",
        "teksIndonesia": "Dia tidak beranak dan tidak pula diperanakkan",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/112003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/112003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/112003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/112003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/112003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/112003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ ࣖ",
        "teksLatin": "Wa lam yakul lahū kufuwan aḥad(un).",
        "teksIndonesia": "serta tidak ada sesuatu pun yang setara dengan-Nya.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/112004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/112004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/112004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/112004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/112004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/112004.mp3"
        }
      }
    ]
  },
  "113": {
    "nomor": 113,
    "namaLatin": "Al-Falaq",
    "namaArab": "الفلق",
    "arti": "Subuh",
    "jumlahAyat": 5,
    "tempatTurun": "Madinah",
    "deskripsi": "Surat ini terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Fiil. Nama <i>Al Falaq</i> diambil dari kata <i>Al Falaq</i> yang terdapat pada ayat pertama surat ini yang artinya waktu subuh. Diriwayatkan oleh Abu Daud, At Tirmizi dan An Nasa-i dari 'Uqbah bin 'Aamir bahwa Rasulullah s.a.w. bersembahyang dengan membaca surat Al Falaq  dan surat An Naas dalam perjalanan.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/113.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/113.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/113.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/113.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/113.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/113.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِۙ",
        "teksLatin": "Qul a‘ūżu birabbil-falaq(i).",
        "teksIndonesia": "Katakanlah (Nabi Muhammad), “Aku berlindung kepada Tuhan yang (menjaga) fajar (subuh)",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/113001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/113001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/113001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/113001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/113001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/113001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "مِنْ شَرِّ مَا خَلَقَۙ",
        "teksLatin": "Min syarri mā khalaq(a).",
        "teksIndonesia": "dari kejahatan (makhluk yang) Dia ciptakan,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/113002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/113002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/113002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/113002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/113002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/113002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ",
        "teksLatin": "Wa min syarri gāsiqin iżā waqab(a).",
        "teksIndonesia": "dari kejahatan malam apabila telah gelap gulita,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/113003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/113003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/113003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/113003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/113003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/113003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "وَمِنْ شَرِّ النَّفّٰثٰتِ فِى الْعُقَدِۙ",
        "teksLatin": "Wa min syarrin-naffāṡāti fil-‘uqad(i).",
        "teksIndonesia": "dari kejahatan perempuan-perempuan (penyihir) yang meniup pada buhul-buhul (talinya),",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/113004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/113004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/113004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/113004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/113004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/113004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ ࣖ",
        "teksLatin": "Wa min syarri ḥāsidin iżā ḥasad(a).",
        "teksIndonesia": "dan dari kejahatan orang yang dengki apabila dia dengki.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/113005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/113005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/113005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/113005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/113005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/113005.mp3"
        }
      }
    ]
  },
  "114": {
    "nomor": 114,
    "namaLatin": "An-Nas",
    "namaArab": "الناس",
    "arti": "Manusia",
    "jumlahAyat": 6,
    "tempatTurun": "Madinah",
    "deskripsi": "Surat ini terdiri atas 6 ayat, termasuk golongan surat-surat Makkiyah,  diturunkan sesudah surat Al Falaq. Nama <i>An Naas</i> diambil dari <i>An Naas</i> yang berulang kali disebut dalam surat ini yang artinya manusia.",
    "audioFull": {
      "01": "https://cdn.equran.id/audio-full/Abdullah-Al-Juhany/114.mp3",
      "02": "https://cdn.equran.id/audio-full/Abdul-Muhsin-Al-Qasim/114.mp3",
      "03": "https://cdn.equran.id/audio-full/Abdurrahman-as-Sudais/114.mp3",
      "04": "https://cdn.equran.id/audio-full/Ibrahim-Al-Dossari/114.mp3",
      "05": "https://cdn.equran.id/audio-full/Misyari-Rasyid-Al-Afasi/114.mp3",
      "06": "https://cdn.equran.id/audio-full/Yasser-Al-Dosari/114.mp3"
    },
    "ayat": [
      {
        "nomorAyat": 1,
        "teksArab": "قُلْ اَعُوْذُ بِرَبِّ النَّاسِۙ",
        "teksLatin": "Qul a‘ūżu birabbin-nās(i).",
        "teksIndonesia": "Katakanlah (Nabi Muhammad), “Aku berlindung kepada Tuhan manusia,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/114001.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/114001.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/114001.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/114001.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/114001.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/114001.mp3"
        }
      },
      {
        "nomorAyat": 2,
        "teksArab": "مَلِكِ النَّاسِۙ",
        "teksLatin": "Malikin-nās(i).",
        "teksIndonesia": "raja manusia,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/114002.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/114002.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/114002.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/114002.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/114002.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/114002.mp3"
        }
      },
      {
        "nomorAyat": 3,
        "teksArab": "اِلٰهِ النَّاسِۙ",
        "teksLatin": "Ilāhin-nās(i).",
        "teksIndonesia": "sembahan manusia",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/114003.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/114003.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/114003.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/114003.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/114003.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/114003.mp3"
        }
      },
      {
        "nomorAyat": 4,
        "teksArab": "مِنْ شَرِّ الْوَسْوَاسِ ەۙ الْخَنَّاسِۖ",
        "teksLatin": "Min syarril-waswāsil-khannās(i).",
        "teksIndonesia": "dari kejahatan (setan) pembisik yang bersembunyi",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/114004.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/114004.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/114004.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/114004.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/114004.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/114004.mp3"
        }
      },
      {
        "nomorAyat": 5,
        "teksArab": "الَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِۙ",
        "teksLatin": "Allażī yuwaswisu fī ṣudūrin-nās(i).",
        "teksIndonesia": "yang membisikkan (kejahatan) ke dalam dada manusia,",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/114005.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/114005.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/114005.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/114005.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/114005.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/114005.mp3"
        }
      },
      {
        "nomorAyat": 6,
        "teksArab": "مِنَ الْجِنَّةِ وَالنَّاسِ ࣖ ",
        "teksLatin": "Minal jinnati wan-nās(i).",
        "teksIndonesia": "dari (golongan) jin dan manusia.”",
        "audio": {
          "01": "https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/114006.mp3",
          "02": "https://cdn.equran.id/audio-partial/Abdul-Muhsin-Al-Qasim/114006.mp3",
          "03": "https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/114006.mp3",
          "04": "https://cdn.equran.id/audio-partial/Ibrahim-Al-Dossari/114006.mp3",
          "05": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/114006.mp3",
          "06": "https://cdn.equran.id/audio-partial/Yasser-Al-Dosari/114006.mp3"
        }
      }
    ]
  }
};

export function getOfflineKemenagSurah(nomor: number): KemenagSurah | undefined {
  return KEMENAG_RI_SURAHS[nomor];
}
