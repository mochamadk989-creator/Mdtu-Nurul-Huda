import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, RefreshCw, Copy, Check, Bot, User } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const UstazAiView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-0',
      sender: 'ai',
      text: `*Assalamu'alaikum Warahmatullahi Wabarakatuh,*

Ahlan wa sahlan! Saya adalah **Ustaz AI - Asisten Cerdas MDTU Nurul Huda Cikopo Panawa**. Ditenagai oleh kecerdasan buatan Google Gemini.

Saya dapat membantu para Asatidz, Pengurus, dan Santri dalam hal:
1. **Konsultasi Materi:** Fiqih Ibadah dasar, Tajwid Al-Qur'an, dan Aqidah Akhlak.
2. **Generator Soal Ujian:** Membuat paket kuis pilihan ganda & esai beserta kunci jawaban lengkap untuk santri.
3. **Penyusun RPP & Silabus:** Merancang rencana pembelajaran diniyah mingguan.
4. **Draft Surat & Pengumuman:** Menyusun surat edaran resmi untuk wali santri.

Silakan ajukan pertanyaan Anda atau gunakan tombol bantuan di bawah ini.`,
      timestamp: 'Baru saja',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { label: '📝 Buat 5 Soal Fiqih Sholat', prompt: 'Buatkan 5 soal pilihan ganda dan 2 soal esai tentang rukun dan tata cara sholat untuk santri Kelas Ula 1 beserta kunci jawabannya.', type: 'soal' },
    { label: '📚 RPP Bab Wudhu Sempurna', prompt: 'Susun Rencana Pelaksanaan Pembelajaran (RPP) madrasah diniyah untuk materi Tata Cara Wudhu yang Sempurna (alokasi 2 JP).', type: 'rpp' },
    { label: '✉️ Draft Surat Ujian Diniyah', prompt: 'Buatkan draft surat edaran resmi kepada wali santri mengenai jadwal Ujian Akhir Semester Diniyah dan pelunasan infaq SPP.', type: 'surat' },
    { label: '📖 Hukum Bacaan Tajwid Nun Mati', prompt: 'Jelaskan ringkasan hukum bacaan Nun Mati dan Tanwin lengkap dengan contoh huruf dan cara membacanya untuk santri diniyah.', type: 'chat' },
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text: string, type = 'chat') => {
    if (!text.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text.trim(), type }),
      });
      const data = await res.json();
      const aiReply = data.reply || 'Afwan, terjadi kendala saat memproses jawaban.';

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiReply,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      const fallbackMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: 'Mohon maaf, koneksi sedang mengalami gangguan. Silakan coba kembali sesaat lagi.',
        timestamp: 'Baru saja',
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm flex flex-col h-[650px] overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 bg-gradient-to-r from-emerald-950 to-emerald-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <span>Ustaz AI MDTU</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-800 text-emerald-200">
                Gemini AI
              </span>
            </h3>
            <p className="text-[11px] text-emerald-200">
              Asisten Cerdas Asatidz &amp; Santri MDTU Nurul Huda
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            if (confirm('Mulai percakapan baru dengan Ustaz AI?')) {
              setMessages([messages[0]]);
            }
          }}
          className="p-2 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 transition-colors cursor-pointer"
          title="Mulai Ulang Percakapan"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Prompts Bar */}
      <div className="p-2.5 bg-emerald-50/60 border-b border-emerald-100 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
        {quickPrompts.map((qp, idx) => (
          <button
            key={idx}
            onClick={() => sendMessage(qp.prompt, qp.type)}
            disabled={loading}
            className="px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-100/80 text-emerald-900 font-semibold border border-emerald-200 shadow-2xs whitespace-nowrap transition-colors flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
          >
            <span>{qp.label}</span>
          </button>
        ))}
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/40">
        {messages.map((msg) => {
          const isAi = msg.sender === 'ai';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isAi ? 'justify-start' : 'justify-end'}`}
            >
              {isAi && (
                <div className="w-8 h-8 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center font-bold shrink-0 mt-1 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 shadow-sm text-xs leading-relaxed space-y-2 ${
                  isAi
                    ? 'bg-white text-slate-800 border border-slate-200'
                    : 'bg-emerald-700 text-white font-medium'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>
                <div className={`flex items-center justify-between pt-1 border-t text-[10px] ${
                  isAi ? 'border-slate-100 text-slate-400' : 'border-emerald-600 text-emerald-200'
                }`}>
                  <span>{msg.timestamp}</span>
                  {isAi && (
                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      className="hover:text-emerald-700 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === msg.id ? 'Tersalin' : 'Salin'}</span>
                    </button>
                  )}
                </div>
              </div>
              {!isAi && (
                <div className="w-8 h-8 rounded-xl bg-amber-500 text-emerald-950 flex items-center justify-center font-bold shrink-0 mt-1 shadow-sm">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
        {loading && (
          <div className="flex items-center gap-3 text-xs text-emerald-800 font-medium bg-emerald-50 p-3 rounded-2xl border border-emerald-200 w-fit">
            <RefreshCw className="w-4 h-4 animate-spin text-emerald-600" />
            <span>Ustaz AI sedang menyusun materi &amp; jawaban...</span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(inputText);
        }}
        className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Tanyakan materi fiqih, minta buatkan soal kuis, atau RPP..."
          disabled={loading}
          className="flex-1 px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
        />
        <button
          type="submit"
          disabled={loading || !inputText.trim()}
          className="p-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold transition-all shadow-md disabled:opacity-50 cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
