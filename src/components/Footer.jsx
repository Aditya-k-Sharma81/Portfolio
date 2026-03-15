import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Aditya-k-Sharma81', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/aditya-k-sharma81/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:adityasharmaas813@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="relative py-8 overflow-hidden bg-[#0c182d]">
      {/* Top subtle glow separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-teal/50 to-transparent"></div>

      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent-teal/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center pb-4"
        >
          <h2 className="text-2xl font-bold text-typography-lightest mb-2 tracking-tight">
            Let's build something <span className="text-accent-teal">amazing</span> together.
          </h2>
          <p className="text-typography-slate max-w-md mx-auto mb-6 text-sm leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          {/* Social Links Pill */}
          <div className="glass-card px-8 py-4 rounded-full flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-typography-slate hover:text-accent-teal hover:scale-110 hover:-translate-y-1 transition-all duration-300 drop-shadow-md"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
