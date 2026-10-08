import React, { useState } from 'react';
import { Lock, Unlock, ShieldCheck, Key, X, AlertCircle } from 'lucide-react';

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAdmin: boolean;
  onLoginSuccess: () => void;
  onLogout: () => void;
  adminPin: string;
  onUpdatePin: (newPin: string) => void;
}

export const AdminAuthModal: React.FC<AdminAuthModalProps> = ({
  isOpen,
  onClose,
  isAdmin,
  onLoginSuccess,
  onLogout,
  adminPin,
  onUpdatePin,
}) => {
  const [inputPin, setInputPin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isChangingPin, setIsChangingPin] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPin === adminPin) {
      onLoginSuccess();
      setErrorMsg('');
      setInputPin('');
      onClose();
    } else {
      setErrorMsg('PIN Admin salah. Silakan coba kembali (PIN default: 1926)');
    }
  };

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.length < 4) {
      setErrorMsg('PIN minimal 4 digit.');
      return;
    }
    if (newPin !== confirmPin) {
      setErrorMsg('Konfirmasi PIN baru tidak cocok.');
      return;
    }
    onUpdatePin(newPin);
    setIsChangingPin(false);
    setNewPin('');
    setConfirmPin('');
    alert('PIN Admin berhasil diperbarui!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-sm w-full overflow-hidden text-xs">
        {/* Header */}
        <div className="px-5 py-4 bg-emerald-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isAdmin ? <Unlock className="w-5 h-5 text-amber-400" /> : <Lock className="w-5 h-5 text-amber-400" />}
            <h3 className="font-bold text-sm">
              {isAdmin ? 'Pengaturan Akses Admin' : 'Masuk Mode Admin'}
            </h3>
          </div>
          <button onClick={onClose} className="text-emerald-300 hover:text-white cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {isAdmin ? (
            /* Logged in state */
            <div className="space-y-4 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto border-2 border-emerald-300">
                <ShieldCheck className="w-8 h-8 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Mode Admin Sedang Aktif</h4>
                <p className="text-slate-500 text-[11px] mt-1">
                  Anda memiliki hak akses penuh untuk mengedit, menambah, dan menghapus seluruh fitur MDTU Nurul Huda.
                </p>
              </div>

              {isChangingPin ? (
                <form onSubmit={handleChangePin} className="space-y-2.5 text-left p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-800 text-[11px]">Ganti PIN Admin Baru:</div>
                  <input
                    type="password"
                    required
                    placeholder="PIN Baru (minimal 4 digit)"
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                  <input
                    type="password"
                    required
                    placeholder="Ulangi PIN Baru"
                    value={confirmPin}
                    onChange={(e) => setConfirmPin(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:border-emerald-600"
                  />
                  {errorMsg && <p className="text-rose-600 font-semibold text-[10px]">{errorMsg}</p>}
                  <div className="flex gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setIsChangingPin(false)}
                      className="flex-1 py-1.5 rounded-lg bg-slate-200 text-slate-700 font-bold cursor-pointer"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-1.5 rounded-lg bg-emerald-700 text-white font-bold cursor-pointer"
                    >
                      Simpan PIN
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    onClick={() => setIsChangingPin(true)}
                    className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Key className="w-3.5 h-3.5" />
                    <span>Ubah PIN Admin</span>
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      onClose();
                    }}
                    className="w-full py-2 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 font-bold cursor-pointer"
                  >
                    Keluar dari Mode Admin
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Login Form */
            <form onSubmit={handleLogin} className="space-y-3.5">
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 leading-relaxed text-[11px]">
                <strong>Info Mode:</strong> Aplikasi ini dapat dinikmati dan diakses oleh semua orang (santri, wali murid, masyarakat). Hak mengedit fitur hanya dapat diakses setelah memasukkan PIN Admin.
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Masukkan PIN Admin:</label>
                <input
                  type="password"
                  required
                  autoFocus
                  placeholder="Ketik PIN Admin..."
                  value={inputPin}
                  onChange={(e) => {
                    setInputPin(e.target.value);
                    setErrorMsg('');
                  }}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-center tracking-widest text-base font-bold focus:outline-none focus:border-emerald-600"
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  *PIN bawaan: <strong>1926</strong> (dapat diubah kapan saja)
                </p>
              </div>
              {errorMsg && (
                <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 flex items-center gap-1.5 text-[11px]">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}
              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2 rounded-xl bg-slate-100 text-slate-600 font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold shadow-md cursor-pointer"
                >
                  Masuk Admin
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
