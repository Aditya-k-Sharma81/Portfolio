import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Intern',
      company: 'eDatapings',
      period: 'Sep 2025 - Oct 2025',
      points: [
        'Built a full-stack Document Management System using .NET Core, integrating HTML, CSS, JavaScript, Bootstrap, and MS-SQL for efficient document storage and retrieval.',
        'Implemented OCR functionality to automatically extract text from uploaded documents, enabling faster document search and digital processing.',
        'Integrated Gemini-LLM based AI features and deployed the application on IIS Server, enhancing intelligent document handling and system accessibility.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#0a172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-typography-lightest mb-4 flex items-center justify-center gap-2">
            <span className="text-accent-teal font-normal text-2xl md:text-3xl">05.</span>
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative overflow-hidden group"
            >

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-typography-lightest">{exp.role}</h3>
                  <p className="text-accent-teal font-medium">{exp.company}</p>
                </div>
                <span className="text-typography-slate text-sm mt-2 md:mt-0 px-4 py-1.5 bg-white/5 rounded-full border border-white/10">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-3 text-typography-slate">
                    <span className="mt-1.5 min-w-[6px] h-[6px] bg-accent-teal rounded-full"></span>
                    <span className="text-sm md:text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
