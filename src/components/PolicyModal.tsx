import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText, Calendar, HardDrive, Smartphone, EyeOff, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

interface PolicyModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export function PolicyModal({ isOpen, type, onClose }: PolicyModalProps) {
  const { t } = useLanguage();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A0A0C]/80 backdrop-blur-md"
            id="policy-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-3xl max-h-[85vh] flex flex-col bg-[#121214] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden z-10"
            id="policy-content-container"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#27272A] bg-[#18181B]/50" id="policy-header">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${isPrivacy ? 'bg-indigo-500/10 text-indigo-400' : 'bg-purple-500/10 text-purple-400'}`}>
                  {isPrivacy ? <Shield className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {isPrivacy ? t('footer.privacy') : t('footer.terms')}
                  </h2>
                  <p className="text-xs text-[#71717A] mt-0.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {t('modal.updated')}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-[#71717A] hover:text-white hover:bg-white/5 transition-all"
                aria-label="Fechar"
                id="policy-close-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 scrollbar-thin scrollbar-thumb-[#27272A]" id="policy-body">
              {isPrivacy ? (
                <>
                  {/* Privacy Intro */}
                  <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                    <p className="text-[#D4D4D8] leading-relaxed text-sm sm:text-base font-medium">
                      {t('privacy.intro')}
                    </p>
                  </div>

                  {/* Section: AdMob */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-indigo-400" />
                      {t('privacy.admob.title')}
                    </h3>
                    <p className="text-[#A1A1AA] leading-relaxed text-sm">
                      {t('privacy.admob.desc')}
                    </p>
                    <div className="p-3.5 bg-white/[0.02] border border-white/[0.05] rounded-xl text-xs sm:text-sm text-[#A1A1AA] space-y-2">
                      <p>
                        • {t('privacy.admob.bullet1')}
                      </p>
                      <p className="text-indigo-300 font-medium">
                        • {t('privacy.admob.bullet2')}
                      </p>
                    </div>
                  </div>

                  {/* Section: 100% Offline */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <EyeOff className="w-5 h-5 text-emerald-400" />
                      {t('privacy.offline.title')}
                    </h3>
                    <p className="text-[#A1A1AA] leading-relaxed text-sm">
                      {t('privacy.offline.desc')}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                        <span className="block text-xs font-semibold text-white uppercase tracking-wider mb-1">{t('privacy.offline.col1.title')}</span>
                        <span className="text-xs text-[#A1A1AA]">{t('privacy.offline.col1.desc')}</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                        <span className="block text-xs font-semibold text-white uppercase tracking-wider mb-1">{t('privacy.offline.col2.title')}</span>
                        <span className="text-xs text-[#A1A1AA]">{t('privacy.offline.col2.desc')}</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                        <span className="block text-xs font-semibold text-white uppercase tracking-wider mb-1">{t('privacy.offline.col3.title')}</span>
                        <span className="text-xs text-[#A1A1AA]">{t('privacy.offline.col3.desc')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Section: Storage Permission */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <HardDrive className="w-5 h-5 text-indigo-400" />
                      {t('privacy.storage.title')}
                    </h3>
                    <p className="text-[#A1A1AA] leading-relaxed text-sm">
                      {t('privacy.storage.desc')}
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#A1A1AA] pl-4 list-disc">
                      <li>{t('privacy.storage.bullet1')}</li>
                      <li>{t('privacy.storage.bullet2')}</li>
                    </ul>
                    <p className="text-xs text-[#71717A] italic pl-4">
                      {t('privacy.storage.footer')}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Terms Intro */}
                  <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                    <p className="text-[#D4D4D8] leading-relaxed text-sm sm:text-base font-medium">
                      {t('terms.intro')}
                    </p>
                  </div>

                  {/* Section: App Usage */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-purple-400" />
                      {t('terms.usage.title')}
                    </h3>
                    <p className="text-[#A1A1AA] leading-relaxed text-sm">
                      {t('terms.usage.desc')}
                    </p>
                    <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl text-xs sm:text-sm text-[#A1A1AA] space-y-2.5">
                      <p>
                        • {t('terms.usage.bullet1')}
                      </p>
                      <p>
                        • {t('terms.usage.bullet2')}
                      </p>
                    </div>
                  </div>

                  {/* Section: Liability Limitation */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-400" />
                      {t('terms.liability.title')}
                    </h3>
                    <p className="text-[#A1A1AA] leading-relaxed text-sm">
                      {t('terms.liability.desc')}
                    </p>
                    <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl space-y-3 text-xs sm:text-sm text-[#D4D4D8]">
                      <p>
                        • {t('terms.liability.bullet1')}
                      </p>
                      <p className="text-amber-400 font-medium">
                        • {t('terms.liability.bullet2')}
                      </p>
                      <p>
                        • {t('terms.liability.bullet3')}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#27272A] bg-[#18181B]/50 flex justify-end" id="policy-footer">
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-white text-black font-semibold text-sm rounded-xl hover:bg-white/90 active:scale-95 transition-all"
                id="policy-footer-close-btn"
              >
                {t('modal.close')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

