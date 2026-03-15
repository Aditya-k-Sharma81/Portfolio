import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#071120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-typography-lightest mb-4 flex items-center justify-center gap-2">
            <span className="text-accent-teal font-normal text-2xl md:text-3xl">02.</span>
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 max-w-3xl w-full"
          >
            <p className="text-typography-slate mb-6 leading-relaxed">
              I am a 6th-semester B.Tech student at <span className="text-accent-teal font-semibold">Lovely Professional University (LPU)</span> with a strong passion for software development and building meaningful digital experiences. My interest in technology started back in 10th grade when I often wondered how websites actually work behind the scenes. That curiosity became the starting point of my journey into the world of programming and web development.
            </p>
            <p className="text-typography-slate mb-6 leading-relaxed">
              After joining B.Tech, I began exploring different technologies and gradually built a strong foundation in both frontend and backend development. I have worked with the <span className="text-accent-teal font-semibold">MERN Stack</span> and <span className="text-accent-teal font-semibold">.NET development</span>, where I learned how to design scalable applications and build real-world projects that solve practical problems.
            </p>
            <p className="text-typography-slate mb-6 leading-relaxed">
              Alongside development, I also developed an interest in <span className="text-typography-lightest font-medium">UI/UX design</span> because I believe great software is not only about functionality but also about delivering a smooth and intuitive user experience.
            </p>
            <p className="text-typography-slate leading-relaxed">
              I enjoy learning new technologies, building real-time projects, and continuously improving my development skills. My goal is to create applications that are efficient, scalable, and user-friendly while staying updated with modern technologies in <span className="text-typography-lightest font-medium">Cloud Computing</span> and <span className="text-typography-lightest font-medium">DevOps</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
