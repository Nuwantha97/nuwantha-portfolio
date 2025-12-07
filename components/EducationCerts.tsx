import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../constants';

const EducationCerts: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-brand-dark border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-brand-secondary/10 rounded-xl text-brand-secondary">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>

            <div className="space-y-8 relative pl-4 border-l-2 border-slate-800 ml-4">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-brand-secondary group-hover:bg-brand-secondary transition-colors" />
                  
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-brand-accent font-medium mb-1">{edu.institution}</p>
                  {edu.year && (
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                      <Calendar size={14} />
                      <span>{edu.year}</span>
                    </div>
                  )}
                  <p className="text-slate-400 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                <Award size={28} />
              </div>
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>

            <div className="grid gap-4">
              {CERTIFICATIONS.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/60 hover:border-brand-primary/30 transition-all flex items-start gap-4"
                >
                   <div className="mt-1">
                     <Award className="w-5 h-5 text-slate-500" />
                   </div>
                   <div>
                     <h4 className="text-white font-medium">{cert.name}</h4>
                     <p className="text-sm text-slate-500">{cert.issuer}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationCerts;