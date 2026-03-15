import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import generalStoreImg from '../assets/General Store.png';
import lostifyImg from '../assets/Lostify.png';
import hospitalBedImg from '../assets/Hospital_Bed_Management_System_1.png';

const Projects = () => {
  const projects = [
    {
      title: 'General Store',
      description: 'Engineered a full-stack e-commerce platform using the MERN stack to digitize local vegetable sales and streamline store operations. Integrated Stripe payment processing, Cloudinary for product image management, and automated email notifications, delivering a seamless purchasing experience for users and efficient inventory control for administrators.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      live: '#',
      github: 'https://github.com/Aditya-k-Sharma81/ECommerce',
      image: generalStoreImg
    },
    {
      title: 'Lostify',
      description: 'Developed a centralized MERN stack application to manage lost and found items efficiently. Integrated TensorFlow with the MobileNet deep learning model to perform image similarity detection, automatically matching uploaded images with reported lost items to help users and administrators reunite items with their owners.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      live: 'https://lostify-hazel.vercel.app/',
      github: 'https://github.com/Aditya-k-Sharma81/Lostify',
      image: lostifyImg
    },
    {
      title: 'Hospital Bed Management System',
      description: 'Developed a full-stack real-time hospital management dashboard to monitor and manage bed availability. Engineered with WebSockets for live status updates, allowing healthcare administrators to efficiently allocate resources, reduce patient wait times, and maintain accurate facility records.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      live: '#',
      github: 'https://github.com/Aditya-k-Sharma81/Hospital-Management-with-Bed-Availability',
      image: hospitalBedImg
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-[#071120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-typography-lightest mb-4 flex items-center justify-center gap-2">
            <span className="text-accent-teal font-normal text-2xl md:text-3xl">04.</span>
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-black/40 rounded-t-xl p-4 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-60 pointer-events-none"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 bg-accent-teal/10 text-accent-teal border border-accent-teal/20 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-accent-teal mb-2">{project.title}</h3>
                <p className="text-typography-slate text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-typography-slate hover:text-accent-teal transition-colors">
                      <ExternalLink size={14} /> LIVE DEMO
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-typography-slate hover:text-accent-teal transition-colors">
                      <Github size={14} /> GITHUB CODE
                    </a>
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
