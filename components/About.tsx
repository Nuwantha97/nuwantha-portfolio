import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE, PROJECTS } from '../constants';
import { User, Cpu, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Visual Side */}
          <div className="w-full lg:w-1/3 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-30 blur-lg rounded-xl" />
            <div className="relative bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-none">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <User className="text-brand-primary dark:text-brand-accent" />
                Quick Highlights
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <Sparkles className="w-5 h-5 text-yellow-500 dark:text-yellow-400 shrink-0 mt-1" />
                  <span>Graduated from <strong>University of Jaffna</strong> (Computer Engineering)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <Cpu className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <span>Interned at <strong>Sri Lanka Ports Authority</strong></span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <Cpu className="w-5 h-5 text-brand-secondary shrink-0 mt-1" />
                  <span>Researching <strong>TB Diagnosis using ML</strong></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-2/3">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">About Me</h2>
              <div className="w-20 h-1.5 bg-brand-primary rounded-full"></div>
            </div>

            <div className="text-slate-700 dark:text-slate-300 space-y-6 text-lg leading-relaxed">
              {PROFILE.aboutLong.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-center border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
                <span className="block text-3xl font-bold text-brand-primary dark:text-brand-accent mb-1">{PROJECTS.length}+</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Projects</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-center border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
                <span className="block text-3xl font-bold text-brand-secondary mb-1">4+</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">ML Models</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-center border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
                <span className="block text-3xl font-bold text-brand-primary mb-1">10+</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Tech Stack</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;