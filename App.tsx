
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">About Me</h2>
            <p className="text-lg text-slate-600 leading-relaxed italic">
              "Driven by a curiosity for how machine learning can bridge the gap between human reasoning and digital execution. 
              My expertise spans from training YOLO models to architecting RAG systems, all while maintaining a 
              performance-first mindset."
            </p>
          </div>
        </section>
        <ExperienceSection />
        <ProjectSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <Footer />
      <Assistant />
    </div>
  );
};

export default App;
