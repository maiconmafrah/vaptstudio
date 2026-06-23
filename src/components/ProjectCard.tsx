import { Download } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  buttonBg: string;
  features: string[];
  link: string;
}

export function ProjectCard({ title, description, icon, borderColor, buttonBg, features, link }: ProjectCardProps) {
  return (
    <div className={`group relative bg-[#18181B] border border-[#27272A] rounded-2xl p-8 flex flex-col gap-4 text-left transition-colors duration-300 ${borderColor}`}>
      
      <div className="flex items-start justify-between">
        <div className="w-16 h-16 bg-[#27272A] rounded-xl flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-white mt-2">{title}</h3>
        <p className="text-[#A1A1AA] text-sm mt-2 leading-relaxed">{description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-2">
        {features.map((feature, i) => (
          <span key={i} className="px-3 py-1 bg-[#27272A] text-[#E4E4E7] text-xs font-medium rounded-md">
            {feature}
          </span>
        ))}
      </div>
      
      <div className="mt-auto flex items-center justify-between pt-6 border-t border-[#27272A]">
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 ${buttonBg} rounded-lg text-xs font-bold text-white w-full uppercase tracking-wider transition-colors inline-flex justify-center items-center gap-2`}
        >
          <Download className="w-4 h-4" />
          VER NA PLAY STORE
        </a>
      </div>
    </div>
  );
}
