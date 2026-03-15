import React from 'react';
import { Award, CheckCircle, Star, ExternalLink } from 'lucide-react';
import chatgptCert from '../assets/chatgpt-cert.png';
import nptelCert from '../assets/nptel-cert.png';
import freecodecampCert from '../assets/freecodecamp-cert.png';

const Certifications = () => {
  const certifications = [
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: 'Nov 2025',
      icon: <Award className="text-yellow-500" />,
      image: nptelCert,
      link: 'https://drive.google.com/file/d/1kYo7W4anhOyzvWDXZIxQgr9jbHEoUUY_/view',
      description: 'Comprehensive certification in Cloud Computing concepts, architecture, and practical applications.'
    },
    {
      title: 'ChatGPT-4 Prompt Engineering',
      issuer: 'Generative AI & LLM',
      date: 'Aug 2025',
      icon: <Star className="text-accent-indigo" />,
      image: chatgptCert,
      link: 'https://drive.google.com/file/d/1oBYn5R3QkwQxvf5kXPJ4bEMPgouhG37Q/view',
      description: 'Mastered advanced techniques in prompt engineering and utilizing large language models for various tasks.'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'Oct 2023',
      icon: <CheckCircle className="text-accent-indigo" />,
      image: freecodecampCert,
      link: 'https://drive.google.com/file/d/1ZVhZo0gT185ne2FJlDRYACnxsXVXUKTr/view',
      description: 'Intensive course covering modern HTML5, CSS3, accessibility, and responsive web design principles.'
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-accent-indigo mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="glass-card p-6 flex flex-col h-full group relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-indigo-500/10"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-accent-indigo/10 blur-2xl rounded-full group-hover:bg-accent-indigo/20 transition-all z-0"></div>

              {cert.image && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900/50 rounded-xl overflow-hidden relative z-10 group-hover:shadow-lg transition-all mb-6 p-2 aspect-[4/3] flex items-center justify-center cursor-pointer block group/img"
                  title="View Certificate"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain rounded group-hover:scale-105 group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white transform scale-50 group-hover/img:scale-100 transition-transform duration-300 border border-white/20">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </div>
                </a>
              )}

              <div className="flex items-start justify-between mb-4 z-10">
                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 group-hover:bg-white/10 transition-all">
                  {cert.icon}
                </div>
                <div className="text-right">
                  <h4 className="text-[10px] font-bold tracking-widest text-accent-indigo uppercase">{cert.issuer}</h4>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mt-1">{cert.date}</p>
                </div>
              </div>

              <div className="flex-grow z-10">
                <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:accent-gradient-text transition-all">{cert.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
