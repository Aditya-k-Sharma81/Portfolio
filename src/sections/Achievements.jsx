import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Trophy } from 'lucide-react';

const Achievements = () => {
  const items = [
    {
      title: '100 Days LeetCode Challenge',
      type: 'Nov 2025',
      icon: <Award className="text-accent-indigo" />,
      description: 'Successfully completed the 100 Days LeetCode Challenge.'
    },
    {
      title: '5-Star HackerRank Badge',
      type: 'Sep 2025',
      icon: <Trophy className="text-yellow-500" />,
      description: 'Earned a 5-star badge on HackerRank for excellence in C++ problem solving.'
    },
    {
      title: '300+ LeetCode Problems',
      type: 'Aug 2025',
      icon: <BookOpen className="text-accent-indigo" />,
      description: 'Solved over 300 algorithmic data structures and algorithms problems across LeetCode.'
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements & Research</h2>
          <div className="w-20 h-1 bg-accent-indigo mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex flex-col items-center text-center group"
            >
              <div className="p-4 bg-white/5 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                {item.icon}
              </div>
              <h4 className="text-xs font-bold tracking-widest text-accent-indigo uppercase mb-2">{item.type}</h4>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
