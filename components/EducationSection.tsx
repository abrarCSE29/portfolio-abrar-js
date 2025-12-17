
import React from 'react';
import { EDUCATION, AWARDS, PUBLICATIONS } from '../constants';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Education</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>
          <div className="space-y-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900">{edu.institution}</h3>
                  <span className="text-sm font-semibold text-blue-600">{edu.period}</span>
                </div>
                <p className="text-slate-600 font-medium mb-1">{edu.degree}</p>
                <p className="text-sm text-slate-500 mb-3">CGPA: {edu.cgpa}</p>
                {edu.thesis && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">Thesis</p>
                    <p className="text-sm text-blue-700 italic">"{edu.thesis}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <i className="fas fa-book text-blue-600"></i> Publications
            </h2>
            {PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-md font-bold text-slate-900 mb-2">{pub.title}</h3>
                <p className="text-sm text-slate-600">{pub.venue}</p>
                <p className="text-xs text-blue-600 mt-2 font-semibold">{pub.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Awards & Honors</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>
          <div className="space-y-6">
            {AWARDS.map((award, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 hover:bg-white hover:rounded-xl hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-trophy text-yellow-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{award.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
