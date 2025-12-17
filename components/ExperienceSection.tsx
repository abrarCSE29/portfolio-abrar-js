
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Work Experience</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-100 pb-2 last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <div className="text-sm text-slate-500 mt-1 md:mt-0 text-right">
                  <span className="font-semibold block md:inline">{exp.period}</span>
                  <span className="hidden md:inline mx-2 text-slate-300">|</span>
                  <span className="block md:inline">{exp.location}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start text-slate-600 leading-relaxed">
                    <span className="text-blue-500 mr-2 mt-1.5">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
