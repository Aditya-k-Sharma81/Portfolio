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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
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

          {/* Stats/Highlight Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Semester', value: '6th' },
              { label: 'GPA', value: '9.0+' },
              { label: 'Projects', value: '15+' },
              { label: 'Experience', value: '1 yr+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center group hover:border-accent-indigo/50 transition-colors"
              >
                <div className="text-2xl font-bold text-white mb-1 group-hover:accent-gradient-text transition-all">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
