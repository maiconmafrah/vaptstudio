import { Smartphone } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full border-b border-[#27272A] bg-[#0A0A0C] sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 lg:py-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xl">
            V
          </div>
          <span className="font-semibold text-2xl tracking-tight text-white">
            Vapt Studio
          </span>
        </div>
        <nav className="hidden md:flex gap-10 text-sm font-medium text-[#A1A1AA]">
          <a href="#" className="text-white border-b-2 border-indigo-500 pb-1">Home</a>
          <a href="#projetos" className="hover:text-white">Nossos Aplicativos</a>
          <a href="#" className="hover:text-white">Contato</a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="https://play.google.com/store/apps/dev?id=VaptStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-white items-center gap-2 hover:bg-white/10 transition-colors uppercase tracking-wide"
          >
            <Smartphone className="w-4 h-4 hidden sm:block" />
            <span className="hidden sm:inline">GOOGLE PLAY PARTNER</span>
            <span className="sm:hidden">Play Store</span>
          </a>
        </div>
      </div>
    </header>
  );
}
