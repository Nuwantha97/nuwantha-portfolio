import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../constants';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-100 dark:bg-slate-950 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Interested in collaboration or have a question about my research?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg dark:shadow-none">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Details</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-brand-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Email</p>
                    <a href={`mailto:${PROFILE.email}`} className="text-slate-900 dark:text-white hover:text-brand-primary dark:hover:text-brand-accent transition-colors">
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-brand-secondary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Phone</p>
                    <a href={`tel:${PROFILE.phone}`} className="text-slate-900 dark:text-white hover:text-brand-primary dark:hover:text-brand-accent transition-colors">
                      {PROFILE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-brand-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Location</p>
                    <p className="text-slate-900 dark:text-white">Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-slate-900 dark:text-white font-medium mb-4">Social Profiles</h4>
                <div className="flex gap-4">
                  <a href={PROFILE.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-brand-primary hover:text-white transition-all">
                    <Github size={20} />
                  </a>
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-brand-secondary hover:text-white transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Name</label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-slate-900 dark:text-white outline-none transition-all"
                      placeholder="Your name"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Email</label>
                    <input
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      type="email"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-slate-900 dark:text-white outline-none transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1">Valid email is required</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Message</label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-slate-900 dark:text-white outline-none transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-xs mt-1">Message is required</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-brand-primary/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : submitSuccess ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Nuwantha Siriwardhana. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;