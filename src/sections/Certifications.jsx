import React from 'react';
import { Award, CheckCircle, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Dec 2023',
      icon: <Award className="text-yellow-500" />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
      description: 'Validated expertise in designing distributed systems and deploying applications on the AWS platform.'
    },
    {
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Coursera',
      date: 'Aug 2023',
      icon: <Star className="text-accent-indigo" />,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400',
      description: 'Comprehensive program covering React, UI/UX, and modern web development practices.'
    },
    {
      title: 'Full Stack Web Development Boot Camp',
      issuer: 'Udemy',
      date: 'May 2022',
      icon: <CheckCircle className="text-accent-indigo" />,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400',
      description: 'Intensive course on building dynamic web applications using the MERN stack.'
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
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
                <div className="w-full h-40 mb-6 rounded-xl overflow-hidden relative z-10 group-hover:shadow-lg transition-all">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all duration-300"></div>
                </div>
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
