import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-apple-purple-light/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-apple-blue-light/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-6 md:p-8 shadow-xl h-full">
              <h3 className="text-2xl font-semibold text-apple-gray-900 mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <p className="text-apple-gray-700">
                  I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out through the form or via my social media profiles.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:adityakrishna@wpi.edu" 
                    className="flex items-center text-apple-gray-700 hover:text-apple-blue-light transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-apple-blue-light/10 flex items-center justify-center mr-3">
                      <FiMail className="text-apple-blue-light" />
                    </div>
                    <span>adityakrishna@wpi.edu</span>
                  </a>
                  
                  <a 
                    href="https://github.com/Bleedingmetal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-apple-gray-700 hover:text-apple-blue-light transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-apple-blue-light/10 flex items-center justify-center mr-3">
                      <FiGithub className="text-apple-blue-light" />
                    </div>
                    <span>github.com/Bleedingmetal</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/aditya-manoj275/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-apple-gray-700 hover:text-apple-blue-light transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-apple-blue-light/10 flex items-center justify-center mr-3">
                      <FiLinkedin className="text-apple-blue-light" />
                    </div>
                    <span>linkedin.com/in/aditya-manoj275</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-apple-gray-900 mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-apple-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-apple-gray-300 focus:ring-2 focus:ring-apple-blue-light focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-apple-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-apple-gray-300 focus:ring-2 focus:ring-apple-blue-light focus:border-transparent outline-none transition-all"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-apple-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-apple-gray-300 focus:ring-2 focus:ring-apple-blue-light focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message"
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-gradient-to-r from-apple-blue-light to-apple-teal-light text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-spin mr-2">⟳</span>
                    ) : (
                      <FiSend className="mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}
                
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm"
                  >
                    {submitError}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
