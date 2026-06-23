import { ProjectCard } from './ProjectCard';
import { FileText, Zap } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

export function Projects() {
  const { t, getArray } = useLanguage();

  const projects = [
    {
      id: 'vaptpdf',
      title: 'VaptPDF',
      description: t('project.vaptpdf.desc'),
      icon: <FileText className="w-10 h-10 text-indigo-400" />,
      color: 'from-indigo-500/20 to-purple-500/20',
      borderColor: 'hover:border-indigo-500/50',
      buttonBg: 'bg-indigo-600 hover:bg-indigo-500',
      features: getArray('project.vaptpdf.features'),
      link: '#' 
    },
    {
      id: 'optimizationboost',
      title: 'Optimization Boost',
      description: t('project.optboost.desc'),
      icon: <Zap className="w-10 h-10 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'hover:border-emerald-500/50',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-500',
      features: getArray('project.optboost.features'),
      link: '#' 
    }
  ];

  return (
    <section id="projetos" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-24 scroll-mt-20">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">{t('projects.title')}</h2>
        <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto md:mx-0">{t('projects.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

