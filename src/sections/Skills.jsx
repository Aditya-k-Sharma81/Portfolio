import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Settings, Zap } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiPhpmyadmin, SiMysql, SiPostman } from 'react-icons/si';
import { VscJson, VscServerProcess, VscVscode } from 'react-icons/vsc';
import { DiDotnet, DiMsqlServer, DiVisualstudio } from 'react-icons/di';
import { TbBrandCSharp, TbSql } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className="text-accent-teal" />,
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'React.Js', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-[#7952B3]" /> },
      ],
    },
    {
      title: 'Backend',
      icon: <Server className="text-accent-teal" />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-white" /> },
        { name: 'ASP.NET', icon: <DiDotnet className="text-[#512BD4]" /> },
        { name: 'C#', icon: <TbBrandCSharp className="text-[#239120]" /> },
        { name: 'PHP', icon: <FaPhp className="text-[#777BB4]" /> },
        { name: 'RESTful APIs', icon: <VscServerProcess className="text-accent-cyan" /> },
      ],
    },
    {
      title: 'Databases',
      icon: <Database className="text-pink-500" />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
        { name: 'Microsoft SQL Server', icon: <DiMsqlServer className="text-[#CC292B]" /> },
        { name: 'SQL', icon: <TbSql className="text-[#00758F]" /> },
      ],
    },
    {
      title: 'DevOps/Tools',
      icon: <Settings className="text-cyan-500" />,
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: 'GitHub', icon: <FaGithub className="text-white" /> },
        { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: 'Thunder Client', icon: <Zap className="text-[#8B5CF6]" /> },
        { name: 'Visual Studio Code', icon: <VscVscode className="text-[#007ACC]" /> },
        { name: 'Visual Studio 2022', icon: <DiVisualstudio className="text-[#5C2D91]" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0a172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-typography-lightest mb-4 flex items-center justify-center gap-2">
            <span className="text-accent-teal font-normal text-2xl md:text-3xl">03.</span>
            The Developer's Toolbox
          </h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:-translate-y-2 hover:shadow-teal-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-typography-lightest">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={typeof skill === 'string' ? skill : skill.name}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-typography-slate hover:text-accent-teal hover:bg-white/10 transition-colors flex items-center gap-2 font-medium"
                  >
                    {typeof skill === 'object' && <span className="text-sm">{skill.icon}</span>}
                    {typeof skill === 'string' ? skill : skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
