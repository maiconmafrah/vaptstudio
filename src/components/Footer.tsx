import { useLanguage } from '../lib/i18n';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export function Footer({ onOpenPolicy }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="w-full px-6 lg:px-12 py-8 bg-[#0A0A0C] border-t border-[#27272A] flex flex-col md:flex-row justify-between items-center text-[#71717A] text-xs gap-6 mt-20" id="app-footer">
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col gap-1">
          <span className="uppercase font-semibold text-[#A1A1AA]">{t('footer.stack')}</span>
          <span>{t('footer.stack.val')}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="uppercase font-semibold text-[#A1A1AA]">{t('footer.localization')}</span>
          <span>PT-BR / EN / ES / FR / DE</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center md:items-end gap-2">
        <div className="flex items-center gap-6 mb-2 text-[#71717A]">
          <button
            onClick={() => onOpenPolicy('privacy')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 font-medium"
            id="footer-privacy-btn"
          >
            {t('footer.privacy')}
          </button>
          <button
            onClick={() => onOpenPolicy('terms')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 font-medium"
            id="footer-terms-btn"
          >
            {t('footer.terms')}
          </button>
          <a
            href="mailto:vaptstudio@gmail.com"
            className="hover:text-white transition-colors font-medium"
            id="footer-contact-link"
          >
            {t('footer.contact')}
          </a>
        </div>
        <div id="footer-copyright">
          © {new Date().getFullYear()} {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}

