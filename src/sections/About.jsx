import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent-indigo mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 max-w-3xl w-full"
          >
            <p className="text-slate-400 mb-6 leading-relaxed">
              I am a dedicated 6th-semester B.Tech student at <span className="text-accent-indigo font-semibold">Lovely Professional University (LPU)</span>.
              My journey in software development has been driven by a passion for solving complex problems and building seamless user experiences.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Specializing in the <span className="text-accent-indigo font-semibold">MERN Stack</span>, I have developed a strong foundation in both frontend and backend technologies.
              I am particularly interested in <span className="text-white font-medium">Scalable Architecture</span> and the intersection of <span className="text-white font-medium">UI/UX Design</span> and Engineering.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I'm not coding, I focus on staying updated with latest research in cloud computing and devops tools. I believe in creating software that is not just functional, but also intuitive and high-performing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
