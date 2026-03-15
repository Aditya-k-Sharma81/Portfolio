import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowRight } from 'lucide-react';
import myPic from '../assets/myPic.jpeg';
import resumePDF from '../assets/Resume_Good.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 md:pt-20 pb-12 md:pb-0 overflow-hidden bg-[#0a172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent-teal font-semibold tracking-wider mb-4">WELCOME TO MY PORTFOLIO</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-typography-lightest mb-6 leading-tight">
              I'm <span className="text-accent-teal">Aditya</span><br />
              Full Stack Developer
            </h1>
            <p className="text-typography-slate text-lg mb-8 max-w-lg">
              Specializing in building high-performance, scalable web applications with the modern MERN stack and .NET frameworks.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={resumePDF} download="Aditya_Resume.pdf" className="btn-primary flex items-center gap-2 inline-flex">
                Download Resume <FileDown size={20} />
              </a>
              <a href="#projects" className="px-6 py-3 border border-accent-teal/30 hover:bg-accent-teal/10 text-accent-teal font-semibold rounded-full transition-all flex items-center gap-2">
                View Projects <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Profile Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent-teal/20 blur-[120px] rounded-full"></div>
            <div className="relative z-10 aspect-square w-full max-w-[450px] mx-auto glass-card p-4 overflow-hidden group">
              <div className="w-full h-full bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center">
                <div className="w-full h-full overflow-hidden flex items-center justify-center">
                  <img src={myPic} alt="Aditya" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              {/* Subtle Glow Effect (Border removed as requested) */}
              <div className="absolute inset-0 rounded-2xl transition-colors"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
