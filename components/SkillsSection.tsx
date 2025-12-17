
import React from 'react';
import { SKILLS } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Technical Skills</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm rounded-lg shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
