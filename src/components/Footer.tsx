interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export function Footer({ onOpenPolicy }: FooterProps) {
  return (
    <footer className="w-full px-6 lg:px-12 py-8 bg-[#0A0A0C] border-t border-[#27272A] flex flex-col md:flex-row justify-between items-center text-[#71717A] text-xs gap-6 mt-20">
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col gap-1">
          <span className="uppercase font-semibold text-[#A1A1AA]">Technical Stack</span>
          <span>Android Native / Kotlin</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="uppercase font-semibold text-[#A1A1AA]">Localization</span>
          <span>PT-BR / EN / ES</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center md:items-end gap-2">
        <div className="flex items-center gap-6 mb-2 text-[#71717A]">
          <button
            onClick={() => onOpenPolicy('privacy')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 font-medium"
          >
            Política de Privacidade
          </button>
          <button
            onClick={() => onOpenPolicy('terms')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 font-medium"
          >
            Termos de Uso
          </button>
          <a href="mailto:contato@vaptstudio.com" className="hover:text-white transition-colors font-medium">Contato</a>
        </div>
        <div>
          © {new Date().getFullYear()} Vapt Studio. Designed for high-speed experiences.
        </div>
      </div>
    </footer>
  );
}
