
import { Code, Smartphone, Cog, Video, Palette, Share2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import FloatingCard from './FloatingCard';

export default function Services() {
  const techServices = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies like React, Next.js, and more.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Native iOS/Android', 'Cross-platform', 'UI/UX Design', 'App Store Deployment']
    },
    {
      icon: Cog,
      title: 'Custom Software Solutions',
      description: 'Tailored software solutions to meet your specific business requirements.',
      features: ['Custom Development', 'API Integration', 'Database Design', 'Scalable Architecture']
    }
  ];

  const nonTechServices = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services for marketing, social media, and corporate content.',
      features: ['Professional Editing', 'Motion Graphics', 'Color Correction', 'Audio Enhancement']
    },
    {
      icon: Palette,
      title: 'Poster & Graphic Design',
      description: 'Eye-catching designs for your brand, marketing materials, and digital presence.',
      features: ['Brand Identity', 'Marketing Materials', 'Social Media Graphics', 'Print Design']
    },
    {
      icon: Share2,
      title: 'Social Media Handling',
      description: 'Complete social media management to boost your online presence and engagement.',
      features: ['Content Strategy', 'Post Scheduling', 'Engagement Management', 'Analytics Reporting']
    }
  ];

  const handleQuoteRequest = (serviceName: string) => {
    const message = `Hi! I'm interested in your ${serviceName} service. Could you please provide me with a quote?`;
    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;
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
            We offer a comprehensive range of digital services to help your business thrive in the modern world.
          </motion.p>
        </motion.div>

        {/* Tech Services */}
        <motion.div 
          className="mb-20"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techServices.map((service, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <Card className="h-full group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                  <CardHeader className="text-center relative">
                    <motion.div 
                      className="mx-auto mb-4 p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full w-fit"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        backgroundColor: "rgb(59, 130, 246)"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"
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
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white group shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => handleQuoteRequest(service.title)}
                      >
                        Request Quote
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
              </FloatingCard>
            ))}
          </div>
        </motion.div>

        {/* Non-Tech Services */}
        <motion.div
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
            {nonTechServices.map((service, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <Card className="h-full group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                  <CardHeader className="text-center relative">
                    <motion.div 
                      className="mx-auto mb-4 p-4 bg-purple-100 dark:bg-purple-900/20 rounded-full w-fit"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        backgroundColor: "rgb(147, 51, 234)"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"
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
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white group shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => handleQuoteRequest(service.title)}
                      >
                        Request Quote
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
              </FloatingCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
