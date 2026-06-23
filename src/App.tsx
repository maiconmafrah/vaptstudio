import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { PolicyModal } from './components/PolicyModal';

export default function App() {
  const [activePolicyModal, setActivePolicyModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen border-4 lg:border-8 border-[#18181B] flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <Projects />
      </main>
      <Footer onOpenPolicy={(type) => setActivePolicyModal(type)} />
      
      <PolicyModal
        isOpen={activePolicyModal !== null}
        type={activePolicyModal}
        onClose={() => setActivePolicyModal(null)}
      />
    </div>
  );
}
