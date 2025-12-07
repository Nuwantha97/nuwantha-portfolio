import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-brand-secondary rounded-full mb-4"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              From full-stack enterprise portals to research-driven ML diagnostic tools.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 dark:bg-brand-dark border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-brand-secondary/50 hover:shadow-xl hover:shadow-brand-secondary/10 transition-all duration-300 flex flex-col"
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                   {project.github && (
                     <a href={project.github} className="p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur text-slate-900 dark:text-white rounded-full hover:text-brand-primary dark:hover:text-brand-accent transition-colors shadow-sm">
                       <Github size={16} />
                     </a>
                   )}
                   {project.link && (
                     <a href={project.link} className="p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur text-slate-900 dark:text-white rounded-full hover:text-brand-primary dark:hover:text-brand-accent transition-colors shadow-sm">
                       <ExternalLink size={16} />
                     </a>
                   )}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm font-mono text-brand-primary">{project.role}</span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.slice(0, 4).map(tech => (
                    <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-500 border border-slate-300 dark:border-slate-700">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;