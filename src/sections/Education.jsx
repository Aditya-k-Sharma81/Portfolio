import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      institution: 'LOVELY PROFESSIONAL UNIVERSITY, PHAGWARA, PUNJAB',
      year: 'Since Aug 2023',
      desc: 'CGPA: 7.9'
    },
    {
      degree: 'Intermediate',
      institution: 'A.N.D COLLEGE SHAHPUR PATORI, BIHAR',
      year: 'May 2021 – Mar 2023',
      desc: 'Percentage: 73.6%'
    },
    {
      degree: 'Matriculation',
      institution: 'G B HIGH SCHOOL SHAHPUR PATORI, BIHAR',
      year: 'Apr 2020 – Mar 2021',
      desc: 'Percentage: 72.4%'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Educational Journey</h2>
          <div className="w-20 h-1 bg-accent-indigo mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto before:absolute before:inset-y-0 before:left-0 md:before:left-1/2 before:w-[2px] before:bg-white/10">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 pl-8 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right text-left'}`}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 -left-[11px] md:left-auto md:right-auto md:top-2 w-6 h-6 bg-dark border-4 border-accent-indigo rounded-full z-10 md:left-1/2 md:-translate-x-1/2"></div>

              <div className="glass-card p-6 hover:shadow-indigo-500/10 transition-all group">
                <div className={`flex items-center gap-3 mb-2 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <GraduationCap className="text-accent-indigo" size={20} />
                  <span className="text-accent-indigo font-bold text-sm uppercase tracking-wider">{edu.year}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:accent-gradient-text transition-all">{edu.degree}</h3>
                <p className="text-white/80 font-medium text-sm mb-3">{edu.institution}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
