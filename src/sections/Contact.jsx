import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-teal font-semibold tracking-wider mb-2 text-sm">07. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-typography-lightest mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-typography-lightest mb-6">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: <Mail className="text-accent-teal" />, label: 'Email', value: 'adityasharmaas813@gmail.com', href: 'mailto:adityasharmaas813@gmail.com' },
                { icon: <Linkedin className="text-blue-500" />, label: 'LinkedIn', value: 'linkedin.com/in/aditya-k-sharma81', href: 'https://www.linkedin.com/in/aditya-k-sharma81/' },
                { icon: <Github className="text-white" />, label: 'GitHub', value: 'github.com/Aditya-k-Sharma81', href: 'https://github.com/Aditya-k-Sharma81' },
                { icon: <MapPin className="text-red-500" />, label: 'Location', value: 'LPU, Punjab, India', href: null },
              ].map((item, idx) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-accent-teal/10 group-hover:border-accent-teal/30 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-typography-slate font-bold uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-typography-lightest font-medium hover:text-accent-teal transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-typography-lightest font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-typography-slate mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-typography-lightest focus:outline-none focus:border-accent-teal transition-colors`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-typography-slate mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-typography-lightest focus:outline-none focus:border-accent-teal transition-colors`}
                  placeholder="name@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-typography-slate mb-2">Message</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-typography-lightest focus:outline-none focus:border-accent-teal transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                <Send size={18} className={`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${isSubmitting || submitted ? 'hidden' : ''}`} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
