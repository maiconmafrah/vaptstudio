import { ProjectCard } from './ProjectCard';
import { FileText, Zap } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 'vaptpdf',
      title: 'VaptPDF',
      description: 'Transforme, edite e gerencie seus documentos PDF com total facilidade e rapidez diretamente do seu dispositivo.',
      icon: <FileText className="w-10 h-10 text-indigo-400" />,
      color: 'from-indigo-500/20 to-purple-500/20',
      borderColor: 'hover:border-indigo-500/50',
      buttonBg: 'bg-indigo-600 hover:bg-indigo-500',
      features: ['Leitor Rápido', 'Anotações', 'Conversão Fácil'],
      link: '#' 
    },
    {
      id: 'optimizationboost',
      title: 'Optimization Boost',
      description: 'Otimize o desempenho do seu celular, libere espaço precioso e navegue de forma mais rápida e fluida.',
      icon: <Zap className="w-10 h-10 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'hover:border-emerald-500/50',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-500',
      features: ['Limpeza de Cache', 'Bateria Estendida', 'Resfriamento'],
      link: '#' 
    }
  ];

  return (
    <section id="projetos" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-24 scroll-mt-20">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Nossos Aplicativos</h2>
        <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto md:mx-0">Descubra ferramentas criadas para elevar a sua produtividade e a saúde do seu dispositivo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
