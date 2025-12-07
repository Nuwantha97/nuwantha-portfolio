import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import { Code2, BrainCircuit, Terminal } from 'lucide-react';

const SKILL_ICONS: Record<string, string> = {
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "SQLite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "Scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "Jira": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Hugging Face": "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  "LangChain": "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
};

const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-brand-dark relative overflow-hidden transition-colors duration-300">
      {/* Background noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore my technical proficiency across different domains.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Sidebar / Tabs */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 w-full md:w-1/3 shrink-0 scrollbar-hide">
            {SKILL_CATEGORIES.map((category, idx) => {
              const Icon = category.icon;
              const isActive = idx === activeCategoryIndex;
              
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${
                    isActive 
                      ? 'bg-white dark:bg-slate-800 border-brand-primary shadow-lg shadow-brand-primary/10' 
                      : 'bg-transparent border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <div className={`p-3 rounded-lg transition-colors ${isActive ? 'bg-brand-primary text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className={`font-bold ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 hidden md:block">
                      {category.skills.length} skills
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white dark:bg-slate-800/40 rounded-3xl p-8 border border-slate-200 dark:border-slate-700/50 min-h-[400px]">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategoryIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    {React.createElement(SKILL_CATEGORIES[activeCategoryIndex].icon, { 
                        size: 32, 
                        className: "text-brand-primary" 
                    })}
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {SKILL_CATEGORIES[activeCategoryIndex].title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill, idx) => {
                      const iconUrl = SKILL_ICONS[skill];
                      const FallbackIcon = skill.includes('ML') || skill.includes('AI') ? BrainCircuit : skill.includes('Code') ? Code2 : Terminal;

                      return (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="group relative bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:border-brand-secondary transition-colors flex flex-col items-center gap-3 text-center"
                        >
                          <div className="w-12 h-12 flex items-center justify-center p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                            {iconUrl ? (
                              <img src={iconUrl} alt={skill} className="w-full h-full object-contain" />
                            ) : (
                              <FallbackIcon className="w-6 h-6 text-brand-primary" />
                            )}
                          </div>
                          <span className="font-medium text-slate-700 dark:text-slate-200 text-sm relative z-10">
                            {skill}
                          </span>
                          <div className="absolute inset-0 bg-brand-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;