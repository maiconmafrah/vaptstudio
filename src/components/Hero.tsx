import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32 flex flex-col items-center md:items-start justify-center min-h-[70vh] text-center md:text-left">
      <div className="max-w-2xl mb-12 w-full">
        <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase inline-block mb-4">
          Desenvolvimento Mobile
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
          Criando experiências <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            excepcionais
          </span>.
        </h1>
        
        <p className="max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-[#A1A1AA] font-medium leading-relaxed">
          Explore nosso portfólio de aplicativos projetados para facilitar e potencializar o seu dia a dia. Desempenho, utilidade e design no seu dispositivo Android.
        </p>
      </div>

      <a
        href="#projetos"
        className="w-14 h-14 rounded-full bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#71717A] hover:text-white hover:border-indigo-500/50 transition-all hover:scale-105 mt-4"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
