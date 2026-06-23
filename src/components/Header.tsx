import { Smartphone, Globe } from 'lucide-react';
import { useLanguage, Language } from '../lib/i18n';

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="w-full border-b border-[#27272A] bg-[#0A0A0C] sticky top-0 z-50" id="app-header">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 lg:py-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xl">
            V
          </div>
          <span className="font-semibold text-2xl tracking-tight text-white">
            Vapt Studio
          </span>
        </div>
        
        <nav className="hidden md:flex gap-10 text-sm font-medium text-[#A1A1AA]" id="header-nav">
          <a href="#" className="text-white border-b-2 border-indigo-500 pb-1">{t('nav.home')}</a>
          <a href="#projetos" className="hover:text-white transition-colors">{t('nav.apps')}</a>
          <a href="#footer-contact-link" className="hover:text-white transition-colors">{t('nav.contact')}</a>
        </nav>
        
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-full hover:bg-white/10 transition-colors" id="language-selector-container">
            <Globe className="w-3.5 h-3.5 text-[#71717A]" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-[11px] text-white font-bold uppercase focus:outline-none cursor-pointer pr-1 border-none appearance-none"
              id="language-select-dropdown"
            >
              <option value="pt" className="bg-[#121214] text-white">PT</option>
              <option value="en" className="bg-[#121214] text-white">EN</option>
              <option value="es" className="bg-[#121214] text-white">ES</option>
              <option value="fr" className="bg-[#121214] text-white">FR</option>
              <option value="de" className="bg-[#121214] text-white">DE</option>
            </select>
          </div>

          <a
            href="https://play.google.com/store/apps/dev?id=VaptStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-white items-center gap-2 hover:bg-white/10 transition-colors uppercase tracking-wide"
            id="playstore-partner-btn"
          >
            <Smartphone className="w-4 h-4 hidden sm:block" />
            <span className="hidden sm:inline">{t('header.partner')}</span>
            <span className="sm:hidden">{t('header.playstore')}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

