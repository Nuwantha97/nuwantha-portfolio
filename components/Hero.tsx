import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {

  const CV_URL = "assets/CV4.pdf"
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = CV_URL;
    link.download = "CV.pdf";
    link.click();
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gray-50 dark:bg-brand-dark transition-colors duration-300">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-secondary/10 dark:bg-brand-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/10 dark:bg-brand-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-hero-pattern opacity-[0.03] dark:invert-0 invert" />
      </div>

      <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight text-slate-900 dark:text-white">
            Nuwantha <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-brand-accent dark:to-brand-secondary">
              Siriwardhana
            </span>
          </h1>
          <h2 className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
            AI-Driven Software Engineer
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {PROFILE.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a href="#contact" className="px-8 py-3 bg-brand-primary hover:bg-blue-600 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
              Contact Me <ArrowRight size={18} />
            </a>
            <a href="#projects" className="px-8 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2">
              View Projects
            </a>
            <button className="px-8 py-3 bg-transparent border border-slate-300 dark:border-slate-600 hover:border-brand-primary dark:hover:border-brand-accent text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-accent rounded-full font-semibold transition-all flex items-center justify-center gap-2"
              onClick={downloadCV}
            >
              Download CV <Download size={18} />
            </button>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start pt-6">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
            {/* Profile Image Container */}
            <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl shadow-brand-primary/20 bg-white dark:bg-slate-900">
              <img
                src="https://picsum.photos/seed/nuwantha/800/800"
                alt="Nuwantha Siriwardhana"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;