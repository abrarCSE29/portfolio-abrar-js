
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900">
                    <i className="fab fa-github text-xl"></i>
                  </a>
                )}
              </div>
              <p className="text-sm text-blue-500 font-medium mb-4 italic">
                {project.association}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-slate-600 leading-relaxed flex items-start">
                    <span className="text-slate-400 mr-2">›</span>
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

export default ProjectSection;
