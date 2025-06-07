import { Mail, Phone, Heart, Instagram, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Create WhatsApp message for newsletter subscription
      const message = `Hi PROGO Team! I would like to subscribe to your newsletter with email: ${email}`;
      const whatsappUrl = `https://wa.me/918299721019?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setEmail('');
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Social Media Handling',
    'Video Editing',
    'Graphic Design',
    'Website Development',
    'Custom Software',
    'Creative Packages'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 border border-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 bg-purple-500 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-center space-x-2">
              <img 
                src="/assets/logo.png" 
                alt="PROGO Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PROGO
              </div>
            </div>
            <p className="text-slate-300">
              Your trusted international freelancing partner for comprehensive creative and digital solutions that drive business growth.
            </p>
            <div className="space-y-2">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">progoteam1@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+91 82997 21019</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Instagram className="h-4 w-4 text-pink-400" />
                <span className="text-sm">@pro_goteam</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Globe className="h-4 w-4 text-green-400" />
                <span className="text-sm">Bangalore, India (International)</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-slate-300 text-sm block">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-slate-300 mb-4 text-sm">
              Subscribe to our updates for the latest news on creative services and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 transition-all duration-300"
                  required
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Subscribe via WhatsApp
                </Button>
              </motion.div>
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <motion.a
                  href="https://www.instagram.com/pro_goteam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="mailto:progoteam1@gmail.com"
                  className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="https://wa.me/918299721019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Phone className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom section */}
        <motion.div 
          className="border-t border-slate-800 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div 
              className="text-slate-400 text-sm"
              whileHover={{ scale: 1.02 }}
            >
              © 2024 PROGO. All rights reserved.
            </motion.div>
            <motion.div 
              className="flex items-center space-x-1 text-slate-400 text-sm"
              whileHover={{ scale: 1.02 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500" />
              </motion.div>
              <span>by PROGO Team</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}