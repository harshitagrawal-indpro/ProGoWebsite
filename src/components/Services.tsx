import { Code, Video, Palette, Share2, Cog, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function Services() {
  const creativeServices = [
    {
      icon: Share2,
      title: 'Social Media Handling',
      description: 'Complete social media management to boost your online presence and engagement across all platforms.',
      features: ['Content Strategy & Planning', 'Daily Post Scheduling', 'Engagement Management', 'Analytics & Reporting', 'Brand Consistency', 'Hashtag Research']
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services for marketing, social media, and corporate content with motion graphics.',
      features: ['Professional Editing', 'Motion Graphics & Animation', 'Color Correction & Grading', 'Audio Enhancement', 'Social Media Optimization', 'Promotional Videos']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching designs for your brand, marketing materials, and digital presence with custom creativity.',
      features: ['Custom Poster Design', 'Brand Identity & Logos', 'Marketing Materials', 'Social Media Graphics', 'Print Design', 'Creative Concepts']
    }
  ];

  const techServices = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies and optimized for performance.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX', 'E-commerce Solutions', 'Content Management']
    },
    {
      icon: Cog,
      title: 'Custom Software Solutions',
      description: 'Tailored software solutions to meet your specific business requirements and challenges.',
      features: ['Custom Development', 'API Integration', 'Database Design', 'Scalable Architecture', 'Automation Tools', 'Business Logic']
    }
  ];

  const handleQuoteRequest = (serviceName: string) => {
    const message = `Hi! I'm interested in your ${serviceName} service. Could you please provide me with a quote?`;
    const whatsappUrl = `https://wa.me/918299721019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const ServiceCard = ({ service, index, color }) => (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10, 
        rotateX: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <Card className="h-full group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
        <CardHeader className="text-center relative">
          <motion.div 
            className={`mx-auto mb-4 p-4 bg-${color}-100 dark:bg-${color}-900/20 rounded-full w-fit`}
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              backgroundColor: color === 'blue' ? "rgba(59, 130, 246,.3)" : "rgba(147, 51, 234,0.3)"
            }}
            transition={{ duration: 0.6 }}
          >
            <service.icon className={`h-8 w-8 text-${color}-600 group-hover:text-white transition-colors duration-300`} />
          </motion.div>
          <CardTitle className={`text-xl font-bold group-hover:text-${color}-600 transition-colors text-gray-900 dark:text-white`}>
            {service.title}
          </CardTitle>
          <CardDescription className="text-gray-700 dark:text-gray-300">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <motion.div 
                  className={`w-1.5 h-1.5 bg-${color}-600 rounded-full mr-3`}
                  whileHover={{ scale: 1.5 }}
                />
                {feature}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className={`w-full bg-${color}-600 hover:bg-${color}-700 text-white group shadow-lg hover:shadow-xl transition-all duration-300`}
              onClick={() => handleQuoteRequest(service.title)}
            >
              Get Quote
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 border-2 border-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 border-2 border-purple-500 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We offer comprehensive creative and technical services to help your business thrive in the digital world.
          </motion.p>
        </motion.div>

        {/* Creative Services */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-purple-600"
            variants={itemVariants}
          >
            Creative Services
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} color="purple" />
            ))}
          </div>
        </motion.div>

        {/* Tech Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-blue-600"
            variants={itemVariants}
          >
            Tech Services
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {techServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} color="blue" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}