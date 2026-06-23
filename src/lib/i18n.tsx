import React, { createContext, useContext, useState } from 'react';

export type Language = 'pt' | 'en' | 'es' | 'fr' | 'de';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getArray: (key: string) => string[];
}

const translations: Record<Language, Record<string, any>> = {
  pt: {
    // Header
    'nav.home': 'Home',
    'nav.apps': 'Nossos Aplicativos',
    'nav.contact': 'Contato',
    'header.partner': 'GOOGLE PLAY PARTNER',
    'header.playstore': 'Play Store',
    
    // Hero
    'hero.badge': 'Desenvolvimento Mobile',
    'hero.title.part1': 'Criando experiências',
    'hero.title.part2': 'excepcionais',
    'hero.description': 'Explore nosso portfólio de aplicativos projetados para facilitar e potencializar o seu dia a dia. Desempenho, utilidade e design no seu dispositivo Android.',
    
    // Projects Section
    'projects.title': 'Nossos Aplicativos',
    'projects.subtitle': 'Descubra ferramentas criadas para elevar a sua produtividade e a saúde do seu dispositivo.',
    'projects.view_playstore': 'VER NA PLAY STORE',
    
    // Project 1 - VaptPDF
    'project.vaptpdf.desc': 'Transforme, edite e gerencie seus documentos PDF com total facilidade e rapidez diretamente do seu dispositivo.',
    'project.vaptpdf.features': ['Leitor Rápido', 'Anotações', 'Conversão Fácil'],
    
    // Project 2 - Optimization Boost
    'project.optboost.desc': 'Otimize o desempenho do seu celular, libere espaço precioso e navegue de forma mais rápida e fluida.',
    'project.optboost.features': ['Limpeza de Cache', 'Bateria Estendida', 'Resfriamento'],

    // Footer
    'footer.stack': 'Technical Stack',
    'footer.stack.val': 'Android Native / Kotlin',
    'footer.localization': 'Localization',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
    'footer.contact': 'Contato',
    'footer.copyright': 'Vapt Studio. Projetado para experiências de alta velocidade.',

    // Policy Modal Common
    'modal.updated': 'Última atualização: 21 de Junho de 2026',
    'modal.close': 'Entendi',

    // Privacy Policy Details
    'privacy.intro': 'A sua privacidade é nossa principal prioridade. Nós do VaptPDF garantimos que os seus documentos são pessoais e privados.',
    'privacy.admob.title': 'Anúncios via Google AdMob',
    'privacy.admob.desc': 'Para manter o aplicativo gratuito, utilizamos o Google AdMob para exibir publicidade.',
    'privacy.admob.bullet1': 'Coletamos identificadores de publicidade do seu dispositivo (como o Android Advertising ID) para prover anúncios personalizados.',
    'privacy.admob.bullet2': 'Isso ocorre separadamente: NENHUM dado dos seus PDFs é compartilhado para fins de publicidade.',
    'privacy.offline.title': 'Processamento 100% Offline e Sem Envio',
    'privacy.offline.desc': 'Reforçamos que o processamento de PDFs (incluindo conversão, leitura e edição) ocorre 100% offline no seu próprio celular.',
    'privacy.offline.col1.title': 'Conexão',
    'privacy.offline.col1.desc': 'Nenhum documento é enviado para a internet ou servidores externos.',
    'privacy.offline.col2.title': 'Acesso',
    'privacy.offline.col2.desc': 'Não exigimos criação de contas ou login.',
    'privacy.offline.col3.title': 'Segurança',
    'privacy.offline.col3.desc': 'Seus arquivos nunca saem da memória do seu próprio telefone.',
    'privacy.storage.title': 'Uso do Armazenamento',
    'privacy.storage.desc': 'Para funcionar como leitor e editor, o VaptPDF solicita a permissão de Acesso a Todos os Arquivos (MANAGE_EXTERNAL_STORAGE). Ela serve unicamente para:',
    'privacy.storage.bullet1': 'Buscar e listar todos os ativos em PDF presentes no armazenamento do celular.',
    'privacy.storage.bullet2': 'Permitir a criação e edição dos documentos localmente e salvá-los.',
    'privacy.storage.footer': '* O app lê pastas apenas à procura de PDFs para gerenciá-los.',

    // Terms of Use Details
    'terms.intro': 'Ao usar o VaptPDF, você concorda com nossos termos. O app foca em gerenciar PDFs offline de forma simples e segura.',
    'terms.usage.title': 'Uso do Aplicativo',
    'terms.usage.desc': 'Você é responsável pelos arquivos que gerencia, mescla ou divide no app.',
    'terms.usage.bullet1': 'Concorda em não usar o app para cometer violações de leis vigentes.',
    'terms.usage.bullet2': 'Os processamentos e o tempo de conversão dependem apenas do processador do seu aparelho (offline).',
    'terms.liability.title': 'Limitação de Responsabilidade',
    'terms.liability.desc': 'Sendo um app puramente offline no seu dispositivo:',
    'terms.liability.bullet1': 'Não nos responsabilizamos pela perda de documentos caso o celular seja formatado ou danificado.',
    'terms.liability.bullet2': 'Nós NÃO temos acesso à internet ou nuvem para realizar backups ou restaurar arquivos.',
    'terms.liability.bullet3': 'Mantenha cópias de segurança em locais seguros.'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.apps': 'Our Apps',
    'nav.contact': 'Contact',
    'header.partner': 'GOOGLE PLAY PARTNER',
    'header.playstore': 'Play Store',
    
    // Hero
    'hero.badge': 'Mobile Development',
    'hero.title.part1': 'Creating exceptional',
    'hero.title.part2': 'experiences',
    'hero.description': 'Explore our portfolio of applications designed to simplify and empower your everyday routine. Performance, utility, and design on your Android device.',
    
    // Projects Section
    'projects.title': 'Our Apps',
    'projects.subtitle': 'Discover tools built to elevate your productivity and device health.',
    'projects.view_playstore': 'VIEW ON PLAY STORE',
    
    // Project 1 - VaptPDF
    'project.vaptpdf.desc': 'Convert, edit, and manage your PDF documents with absolute ease and speed directly from your device.',
    'project.vaptpdf.features': ['Fast Reader', 'Annotations', 'Easy Conversion'],
    
    // Project 2 - Optimization Boost
    'project.optboost.desc': 'Optimize your mobile performance, free up precious space, and browse faster and smoother.',
    'project.optboost.features': ['Cache Cleaning', 'Extended Battery', 'Device Cooling'],

    // Footer
    'footer.stack': 'Technical Stack',
    'footer.stack.val': 'Android Native / Kotlin',
    'footer.localization': 'Localization',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.contact': 'Contact',
    'footer.copyright': 'Vapt Studio. Designed for high-speed experiences.',

    // Policy Modal Common
    'modal.updated': 'Last updated: June 21, 2026',
    'modal.close': 'Got it',

    // Privacy Policy Details
    'privacy.intro': 'Your privacy is our top priority. We at VaptPDF guarantee that your documents are personal and private.',
    'privacy.admob.title': 'Ads via Google AdMob',
    'privacy.admob.desc': 'To keep the application free, we use Google AdMob to display advertisements.',
    'privacy.admob.bullet1': 'We collect advertising identifiers from your device (such as the Android Advertising ID) to provide personalized ads.',
    'privacy.admob.bullet2': 'This occurs separately: NO data from your PDFs is shared for advertising purposes.',
    'privacy.offline.title': '100% Offline and No-Upload Processing',
    'privacy.offline.desc': 'We reinforce that all PDF processing (including conversion, reading, and editing) occurs 100% offline on your own mobile phone.',
    'privacy.offline.col1.title': 'Connection',
    'privacy.offline.col1.desc': 'No document is sent to the internet or external servers.',
    'privacy.offline.col2.title': 'Access',
    'privacy.offline.col2.desc': 'We do not require account creation or login.',
    'privacy.offline.col3.title': 'Security',
    'privacy.offline.col3.desc': 'Your files never leave your own phone\'s memory.',
    'privacy.storage.title': 'Storage Usage',
    'privacy.storage.desc': 'To function as a reader and editor, VaptPDF requests the All Files Access permission (MANAGE_EXTERNAL_STORAGE). It is used solely to:',
    'privacy.storage.bullet1': 'Search for and list all PDF assets present in the phone storage.',
    'privacy.storage.bullet2': 'Allow local document creation, editing, and saving.',
    'privacy.storage.footer': '* The app only scans folders to look for PDFs to manage them.',

    // Terms of Use Details
    'terms.intro': 'By using VaptPDF, you agree to our terms. The app focuses on managing PDFs offline simply and securely.',
    'terms.usage.title': 'Application Usage',
    'terms.usage.desc': 'You are responsible for the files you manage, merge, or split in the app.',
    'terms.usage.bullet1': 'You agree not to use the app to violate any current laws.',
    'terms.usage.bullet2': 'Processing and conversion times depend solely on your device\'s processor (offline).',
    'terms.liability.title': 'Limitation of Liability',
    'terms.liability.desc': 'Being a purely offline app on your device:',
    'terms.liability.bullet1': 'We are not responsible for the loss of documents if the phone is formatted or damaged.',
    'terms.liability.bullet2': 'We do NOT have internet or cloud access to perform backups or restore files.',
    'terms.liability.bullet3': 'Please maintain security backups in safe locations.'
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.apps': 'Mis Aplicaciones',
    'nav.contact': 'Contacto',
    'header.partner': 'SOCIO DE GOOGLE PLAY',
    'header.playstore': 'Play Store',
    
    // Hero
    'hero.badge': 'Desarrollo Móvil',
    'hero.title.part1': 'Creando experiencias',
    'hero.title.part2': 'excepcionales',
    'hero.description': 'Explore nuestra cartera de aplicaciones diseñadas para facilitar y potenciar su día a día. Rendimiento, utilidad y diseño en su dispositivo Android.',
    
    // Projects Section
    'projects.title': 'Nuestras Aplicaciones',
    'projects.subtitle': 'Descubra herramientas creadas para elevar su productividad y la salud de su dispositivo.',
    'projects.view_playstore': 'VER EN PLAY STORE',
    
    // Project 1 - VaptPDF
    'project.vaptpdf.desc': 'Transforme, edite y gestione sus documentos PDF con total facilidad y rapidez directamente desde su dispositivo.',
    'project.vaptpdf.features': ['Lector Rápido', 'Anotaciones', 'Conversión Fácil'],
    
    // Project 2 - Optimization Boost
    'project.optboost.desc': 'Optimice el rendimiento de su teléfono móvil, libere espacio valioso y navegue de manera más rápida y fluida.',
    'project.optboost.features': ['Limpieza de Caché', 'Batería Extendida', 'Enfriamiento'],

    // Footer
    'footer.stack': 'Technical Stack',
    'footer.stack.val': 'Android Nativo / Kotlin',
    'footer.text.stack': 'Pila Tecnológica',
    'footer.localization': 'Localización',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Uso',
    'footer.contact': 'Contacto',
    'footer.copyright': 'Vapt Studio. Diseñado para experiencias de alta velocidad.',

    // Policy Modal Common
    'modal.updated': 'Última actualización: 21 de Junio de 2026',
    'modal.close': 'Entendido',

    // Privacy Policy Details
    'privacy.intro': 'Su privacidad es nuestra máxima prioridad. En VaptPDF garantizamos que sus documentos son personales y privados.',
    'privacy.admob.title': 'Anuncios vía Google AdMob',
    'privacy.admob.desc': 'Para mantener la aplicación gratuita, utilizamos Google AdMob para mostrar publicidad.',
    'privacy.admob.bullet1': 'Recopilamos identificadores de publicidad de su dispositivo (como el Android Advertising ID) para ofrecer anuncios personalizados.',
    'privacy.admob.bullet2': 'Esto ocurre por separado: NINGÚN dato de sus PDF se comparte con fines publicitarios.',
    'privacy.offline.title': 'Procesamiento 100% Offline y sin envíos',
    'privacy.offline.desc': 'Reforzamos que todo el procesamiento de PDF (incluyendo conversión, lectura y edición) ocurre 100% de forma local en su propio teléfono móvil.',
    'privacy.offline.col1.title': 'Conexión',
    'privacy.offline.col1.desc': 'Ningún documento se envía a internet ni a servidores externos.',
    'privacy.offline.col2.title': 'Acceso',
    'privacy.offline.col2.desc': 'No requerimos creación de cuentas ni inicio de sesión.',
    'privacy.offline.col3.title': 'Seguridad',
    'privacy.offline.col3.desc': 'Sus archivos nunca salen de la memoria de su propio teléfono.',
    'privacy.storage.title': 'Uso del Almacenamiento',
    'privacy.storage.desc': 'Para funcionar como lector y editor, VaptPDF solicita el permiso de Acceso a Todos los Archivos (MANAGE_EXTERNAL_STORAGE). Sirve únicamente para:',
    'privacy.storage.bullet1': 'Buscar y listar todos los archivos PDF presentes en el almacenamiento del teléfono.',
    'privacy.storage.bullet2': 'Permitir la creación y edición de documentos localmente y guardarlos.',
    'privacy.storage.footer': '* La aplicación solo lee carpetas en busca de archivos PDF para gestionarlos.',

    // Terms of Use Details
    'terms.intro': 'Al utilizar VaptPDF, usted acepta nuestros términos. La aplicación se enfoca en gestionar archivos PDF fuera de línea de manera simple y segura.',
    'terms.usage.title': 'Uso de la Aplicación',
    'terms.usage.desc': 'Usted es responsable de los archivos que gestiona, combina o divide en la aplicación.',
    'terms.usage.bullet1': 'Acepta no utilizar la aplicación para cometer infracciones a las leyes vigentes.',
    'terms.usage.bullet2': 'Los tiempos de procesamiento y conversión dependen exclusivamente del procesador de su dispositivo (fuera de línea).',
    'terms.liability.title': 'Limitación de Responsabilidad',
    'terms.liability.desc': 'Al ser una aplicación puramente local en su dispositivo:',
    'terms.liability.bullet1': 'No nos hacemos responsables de la pérdida de documentos en caso de que el teléfono se formatee o se dañe.',
    'terms.liability.bullet2': 'Nosotros NO tenemos acceso a internet o a la nube para realizar copias de seguridad o restaurar archivos.',
    'terms.liability.bullet3': 'Mantenga copias de seguridad en lugares seguros.'
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.apps': 'Nos Applications',
    'nav.contact': 'Contact',
    'header.partner': 'PARTENAIRE GOOGLE PLAY',
    'header.playstore': 'Play Store',
    
    // Hero
    'hero.badge': 'Développement Mobile',
    'hero.title.part1': 'Créer des expériences',
    'hero.title.part2': 'exceptionnelles',
    'hero.description': 'Explorez notre portefeuille d\'applications conçues pour simplifier et booster votre quotidien. Performance, utilité et design sur votre appareil Android.',
    
    // Projects Section
    'projects.title': 'Nos Applications',
    'projects.subtitle': 'Découvrez des outils conçus pour améliorer votre productivité et la santé de votre appareil.',
    'projects.view_playstore': 'VOIR SUR PLAY STORE',
    
    // Project 1 - VaptPDF
    'project.vaptpdf.desc': 'Transformez, modifiez et gérez vos documents PDF en toute simplicité et rapidité directement depuis votre appareil.',
    'project.vaptpdf.features': ['Lecteur Rapide', 'Annotations', 'Conversion Facile'],
    
    // Project 2 - Optimization Boost
    'project.optboost.desc': 'Optimisez les performances de votre téléphone, libérez de l\'espace précieux et naviguez plus rapidement et de manière plus fluide.',
    'project.optboost.features': ['Nettoyage de Cache', 'Batterie Prolongée', 'Refroidissement'],

    // Footer
    'footer.stack': 'Technical Stack',
    'footer.stack.val': 'Android Natif / Kotlin',
    'footer.localization': 'Localisation',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.contact': 'Contact',
    'footer.copyright': 'Vapt Studio. Conçu pour des expériences ultra-rapides.',

    // Policy Modal Common
    'modal.updated': 'Dernière mise à jour : 21 juin 2026',
    'modal.close': 'J\'ai compris',

    // Privacy Policy Details
    'privacy.intro': 'Votre vie privée est notre priorité absolue. Chez VaptPDF, nous garantissons que vos documents restent personnels et privés.',
    'privacy.admob.title': 'Publicités via Google AdMob',
    'privacy.admob.desc': 'Pour maintenir l\'application gratuite, nous utilisons Google AdMob pour afficher des publicités.',
    'privacy.admob.bullet1': 'Nous collectons les identifiants publicitaires de votre appareil (tels que l\'Android Advertising ID) pour proposer des publicités personnalisées.',
    'privacy.admob.bullet2': 'Cela se fait séparément : AUCUNE donnée de vos PDF n\'est partagée à des fins publicitaires.',
    'privacy.offline.title': 'Traitement 100% hors ligne et sans envoi',
    'privacy.offline.desc': 'Nous soulignons que le traitement des PDF (y compris la conversion, la lecture et l\'édition) s\'effectue à 100% hors ligne sur votre propre téléphone.',
    'privacy.offline.col1.title': 'Connexion',
    'privacy.offline.col1.desc': 'Aucun document n\'est envoyé sur internet ou vers des serveurs externes.',
    'privacy.offline.col2.title': 'Accès',
    'privacy.offline.col2.desc': 'Nous ne demandons aucune création de compte ou connexion.',
    'privacy.offline.col3.title': 'Sécurité',
    'privacy.offline.col3.desc': 'Vos fichiers ne quittent jamais la mémoire de votre téléphone.',
    'privacy.storage.title': 'Utilisation du Stockage',
    'privacy.storage.desc': 'Pour fonctionner en tant que lecteur et éditeur, VaptPDF demande l\'autorisation d\'Accès à Tous les Fichiers (MANAGE_EXTERNAL_STORAGE). Elle sert uniquement à :',
    'privacy.storage.bullet1': 'Rechercher et lister tous les fichiers PDF présents sur le stockage du téléphone.',
    'privacy.storage.bullet2': 'Permettre la création et l\'édition locale de documents et les enregistrer.',
    'privacy.storage.footer': '* L\'application parcourt les dossiers uniquement à la recherche de fichiers PDF pour les gérer.',

    // Terms of Use Details
    'terms.intro': 'En utilisant VaptPDF, vous acceptez nos conditions. L\'application se concentre sur la gestion simple et sécurisée de vos PDF hors ligne.',
    'terms.usage.title': 'Utilisation de l\'Application',
    'terms.usage.desc': 'Vous êtes responsable des fichiers que vous gérez, fusionnez ou divisez dans l\'application.',
    'terms.usage.bullet1': 'Vous acceptez de ne pas utiliser l\'application pour enfreindre les lois en vigueur.',
    'terms.usage.bullet2': 'Les temps de traitement et de conversion dépendent uniquement du processeur de votre appareil (hors ligne).',
    'terms.liability.title': 'Limitation de Responsabilité',
    'terms.liability.desc': 'S\'agissant d\'une application purement locale sur votre appareil :',
    'terms.liability.bullet1': 'Nous ne sommes pas responsables de la perte de documents si le téléphone est formaté ou endommagé.',
    'terms.liability.bullet2': 'Nous n\'avons AUCUN accès à internet ou au cloud pour effectuer des sauvegardes ou restaurer vos fichiers.',
    'terms.liability.bullet3': 'Conservez des copies de sauvegarde dans des lieux sûrs.'
  },
  de: {
    // Header
    'nav.home': 'Startseite',
    'nav.apps': 'Unsere Apps',
    'nav.contact': 'Kontakt',
    'header.partner': 'GOOGLE PLAY PARTNER',
    'header.playstore': 'Play Store',
    
    // Hero
    'hero.badge': 'Mobile Entwicklung',
    'hero.title.part1': 'Außergewöhnliche Erlebnisse',
    'hero.title.part2': 'schaffen',
    'hero.description': 'Entdecken Sie unser Portfolio an Apps, die Ihren Alltag vereinfachen und verbessern sollen. Leistung, Nutzen und Design auf Ihrem Android-Gerät.',
    
    // Projects Section
    'projects.title': 'Unsere Apps',
    'projects.subtitle': 'Entdecken Sie Tools, die Ihre Produktivität steigern und die Leistung Ihres Geräts optimieren.',
    'projects.view_playstore': 'IM PLAY STORE ANSEHEN',
    
    // Project 1 - VaptPDF
    'project.vaptpdf.desc': 'Konvertieren, bearbeiten und verwalten Sie Ihre PDF-Dokumente ganz einfach und schnell direkt auf Ihrem Gerät.',
    'project.vaptpdf.features': ['Schneller Reader', 'Anmerkungen', 'Einfache Konvertierung'],
    
    // Project 2 - Optimization Boost
    'project.optboost.desc': 'Optimieren Sie die Leistung Ihres Telefons, geben Sie wertvollen Speicherplatz frei und surfen Sie schneller und flüssiger.',
    'project.optboost.features': ['Cache-Bereinigung', 'Verlängerte Batterie', 'Gerätekühlung'],

    // Footer
    'footer.stack': 'Technical Stack',
    'footer.stack.val': 'Android Nativ / Kotlin',
    'footer.localization': 'Lokalisierung',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.contact': 'Kontakt',
    'footer.copyright': 'Vapt Studio. Entwickelt für High-Speed-Erlebnisse.',

    // Policy Modal Common
    'modal.updated': 'Letzte Aktualisierung: 21. Juni 2026',
    'modal.close': 'Verstanden',

    // Privacy Policy Details
    'privacy.intro': 'Ihre Privatsphäre ist unsere oberste Priorität. Wir von VaptPDF garantieren, dass Ihre Dokumente persönlich und privat bleiben.',
    'privacy.admob.title': 'Anzeigen über Google AdMob',
    'privacy.admob.desc': 'Um die App kostenlos anzubieten, verwenden wir Google AdMob zur Anzeige von Werbung.',
    'privacy.admob.bullet1': 'Wir erfassen Werbe-Identifikatoren Ihres Geräts (z. B. die Android-Werbe-ID), um personalisierte Anzeigen bereitzustellen.',
    'privacy.admob.bullet2': 'Dies geschieht separat: KEINE Daten aus Ihren PDFs werden für Werbezwecke weitergegeben.',
    'privacy.offline.title': '100% Offline-Verarbeitung ohne Upload',
    'privacy.offline.desc': 'Wir betonen, dass die PDF-Verarbeitung (einschließlich Konvertierung, Lesen und Bearbeiten) zu 100% offline auf Ihrem eigenen Mobiltelefon stattfindet.',
    'privacy.offline.col1.title': 'Verbindung',
    'privacy.offline.col1.desc': 'Es werden keine Dokumente an das Internet oder externe Server gesendet.',
    'privacy.offline.col2.title': 'Zugang',
    'privacy.offline.col2.desc': 'Wir erfordern keine Registrierung oder Anmeldung.',
    'privacy.offline.col3.title': 'Sicherheit',
    'privacy.offline.col3.desc': 'Ihre Dateien verlassen niemals den Speicher Ihres eigenen Telefons.',
    'privacy.storage.title': 'Nutzung des Speichers',
    'privacy.storage.desc': 'Um als Reader und Editor zu funktionieren, fordert VaptPDF die Berechtigung für den Zugriff auf alle Dateien (MANAGE_EXTERNAL_STORAGE) an. Diese dient ausschließlich dazu:',
    'privacy.storage.bullet1': 'Alle PDF-Dokumente im Speicher des Mobiltelefons zu suchen und aufzulisten.',
    'privacy.storage.bullet2': 'Die lokale Erstellung, Bearbeitung und Speicherung von Dokumenten zu ermöglichen.',
    'privacy.storage.footer': '* Die App durchsucht Ordner nur nach PDFs, um diese zu verwalten.',

    // Terms of Use Details
    'terms.intro': 'Mit der Nutzung von VaptPDF stimmen Sie unseren Nutzungsbedingungen zu. Die App konzentriert sich darauf, PDFs einfach und sicher offline zu verwalten.',
    'terms.usage.title': 'Nutzung der Anwendung',
    'terms.usage.desc': 'Sie sind für die Dateien verantwortlich, die Sie in der App verwalten, zusammenführen oder aufteilen.',
    'terms.usage.bullet1': 'Sie stimmen zu, die App nicht für Verstöße gegen geltendes Recht zu nutzen.',
    'terms.usage.bullet2': 'Die Verarbeitungs- und Konvertierungszeiten hängen ausschließlich vom Prozessor Ihres Geräts ab (offline).',
    'terms.liability.title': 'Haftungsbeschränkung',
    'terms.liability.desc': 'Da es sich um eine reine Offline-App auf Ihrem Gerät handelt:',
    'terms.liability.bullet1': 'Wir haften nicht für den Verlust von Dokumenten, wenn das Telefon formatiert oder beschädigt wird.',
    'terms.liability.bullet2': 'Wir haben KEINEN Zugriff auf das Internet oder eine Cloud, um Backups zu erstellen oder Dateien wiederherzustellen.',
    'terms.liability.bullet3': 'Bitte bewahren Sie Sicherheitskopien an sicheren Orten auf.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('vapt_lang');
    if (saved && ['pt', 'en', 'es', 'fr', 'de'].includes(saved)) {
      return saved as Language;
    }
    // Auto-detect browser language if available
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (['pt', 'en', 'es', 'fr', 'de'].includes(browserLang)) {
      return browserLang as Language;
    }
    return 'pt'; // Default to PT
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('vapt_lang', lang);
  };

  const t = (key: string): string => {
    const translation = translations[language]?.[key];
    if (typeof translation === 'string') {
      return translation;
    }
    // Fallback to pt, then to key itself
    return translations['pt']?.[key] || key;
  };

  const getArray = (key: string): string[] => {
    const translation = translations[language]?.[key];
    if (Array.isArray(translation)) {
      return translation;
    }
    return translations['pt']?.[key] || [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getArray }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
