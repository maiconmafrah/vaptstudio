import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText, Calendar, HardDrive, Smartphone, EyeOff, AlertTriangle } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export function PolicyModal({ isOpen, type, onClose }: PolicyModalProps) {
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
                    {isPrivacy ? 'Política de Privacidade' : 'Termos de Uso'}
                  </h2>
                  <p className="text-xs text-[#71717A] mt-0.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Última atualização: 21 de Junho de 2026
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
                      A sua privacidade é nossa principal prioridade. Nós do <span className="text-indigo-400 font-semibold">VaptPDF</span> garantimos que os seus documentos são pessoais e privados.
                    </p>
                  </div>

                  {/* Section: AdMob */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-indigo-400" />
                      Anúncios via Google AdMob
                    </h3>
                    <p className="text-[#A1A1AA] leading-relaxed text-sm">
                      Para manter o aplicativo gratuito, utilizamos o Google AdMob para exibir publicidade.
                    </p>
                    <div className="p-3.5 bg-white/[0.02] border border-white/[0.05] rounded-xl text-xs sm:text-sm text-[#A1A1AA] space-y-2">
                      <p>
                        • Coletamos identificadores de publicidade do seu dispositivo (como o Android Advertising ID) para prover anúncios personalizados.
                      </p>
                      <p className="text-indigo-300 font-medium">
                        • Isso ocorre separadamente: NENHUM dado dos seus PDFs é compartilhado para fins de publicidade.
                      </p>
                    </div>
                  </div>

                  {/* Section: 100% Offline */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <EyeOff className="w-5 h-5 text-emerald-400" />
                      Processamento 100% Offline e Sem Envio
                    </h3>
                    <p className="text-[#A1A1AA] leading-relaxed text-sm">
                      Reforçamos que o processamento de PDFs (incluindo conversão, leitura e edição) ocorre <span className="text-emerald-400 font-semibold">100% offline</span> no seu próprio celular.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                        <span className="block text-xs font-semibold text-white uppercase tracking-wider mb-1">Conexão</span>
                        <span className="text-xs text-[#A1A1AA]">Nenhum documento é enviado para a internet ou servidores externos.</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                        <span className="block text-xs font-semibold text-white uppercase tracking-wider mb-1">Acesso</span>
                        <span className="text-xs text-[#A1A1AA]">Não exigimos criação de contas ou login para o funcionamento.</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                        <span className="block text-xs font-semibold text-white uppercase tracking-wider mb-1">Segurança</span>
                        <span className="text-xs text-[#A1A1AA]">Seus arquivos nunca saem da memória do seu próprio telefone.</span>
                      </div>
                    </div>
                  </div>

                  {/* Section: Storage Permission */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <HardDrive className="w-5 h-5 text-indigo-400" />
                      Uso do Armazenamento
                    </h3>
                    <p className="text-[#A1A1AA] leading-relaxed text-sm">
                      Para funcionar como leitor e editor, o VaptPDF solicita a permissão de Acesso a Todos os Arquivos (<code className="px-1.5 py-0.5 bg-white/5 rounded text-xs font-mono text-indigo-300">MANAGE_EXTERNAL_STORAGE</code>). Ela serve unicamente para:
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#A1A1AA] pl-4 list-disc">
                      <li>Buscar e listar todos os ativos em PDF presentes no armazenamento do celular.</li>
                      <li>Permitir a criação e edição dos documentos localmente e salvá-los.</li>
                    </ul>
                    <p className="text-xs text-[#71717A] italic pl-4">
                      * O app lê pastas apenas à procura de PDFs para gerenciá-los.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Terms Intro */}
                  <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                    <p className="text-[#D4D4D8] leading-relaxed text-sm sm:text-base font-medium">
                      Ao usar o <span className="text-purple-400 font-semibold">VaptPDF</span>, você concorda com nossos termos. O app foca em gerenciar PDFs offline de forma simples e segura.
                    </p>
                  </div>

                  {/* Section: App Usage */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-purple-400" />
                      Uso do Aplicativo
                    </h3>
                    <p className="text-[#A1A1AA] leading-relaxed text-sm">
                      Você é responsável pelos arquivos que gerencia, mescla ou divide no app.
                    </p>
                    <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl text-xs sm:text-sm text-[#A1A1AA] space-y-2.5">
                      <p>
                        • Concorda em não usar o app para cometer violações de leis vigentes.
                      </p>
                      <p>
                        • Os processamentos e o tempo de conversão dependem apenas do processador do seu aparelho (processamento 100% offline).
                      </p>
                    </div>
                  </div>

                  {/* Section: Liability Limitation */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-400" />
                      Limitação de Responsabilidade
                    </h3>
                    <p className="text-[#A1A1AA] leading-relaxed text-sm">
                      Sendo um app puramente offline no seu dispositivo:
                    </p>
                    <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl space-y-3 text-xs sm:text-sm text-[#D4D4D8]">
                      <p>
                        • Não nos responsabilizamos pela perda de documentos caso o celular seja formatado ou danificado.
                      </p>
                      <p className="text-amber-400 font-medium">
                        • Nós NÃO temos acesso à internet ou nuvem para realizar backups ou restaurar arquivos.
                      </p>
                      <p>
                        • Mantenha sempre cópias de segurança em locais seguros.
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
                Entendi
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
