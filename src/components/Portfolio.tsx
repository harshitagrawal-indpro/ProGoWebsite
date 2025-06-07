import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Play, Instagram, Video, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Social Media Campaign - Tech Startup',
      category: 'social',
      type: 'Social Media Management',
      description: 'Complete social media strategy and content creation for a growing tech startup.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
      technologies: ['Instagram', 'Facebook', 'Content Strategy'],
      link: 'https://www.instagram.com/pro_goteam/',
      metrics: '300% engagement increase'
    },
    {
      id: 2,
      title: 'Product Launch Video Series',
      category: 'video',
      type: 'Video Editing',
      description: 'Professional video editing for product launch with motion graphics and animations.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop',
      technologies: ['After Effects', 'Premiere Pro', 'Motion Graphics'],
      link: '#',
      isVideo: true,
      metrics: '50K+ views across platforms'
    },
    {
      id: 3,
      title: 'Restaurant Brand Identity',
      category: 'design',
      type: 'Graphic Design',
      description: 'Complete brand identity design including logo, menu, and promotional materials.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Adobe Illustrator', 'Photoshop', 'Brand Design'],
      link: '#',
      metrics: 'Complete brand transformation'
    },
    {
      id: 4,
      title: 'E-commerce Website',
      category: 'tech',
      type: 'Website Development',
      description: 'Responsive e-commerce website with modern design and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'Stripe Integration'],
      link: '#',
      metrics: '200% conversion rate improvement'
    },
    {
      id: 5,
      title: 'Corporate Video Content',
      category: 'video',
      type: 'Video Editing',
      description: 'Professional corporate video editing with testimonials and company showcase.',
      image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=500&h=300&fit=crop',
      technologies: ['Final Cut Pro', 'Color Grading', 'Audio Enhancement'],
      link: '#',
      isVideo: true,
      metrics: 'Used for global presentations'
    },
    {
      id: 6,
      title: 'Marketing Poster Collection',
      category: 'design',
      type: 'Poster Design',
      description: 'Creative poster designs for various marketing campaigns and events.',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=300&fit=crop',
      technologies: ['Adobe Creative Suite', 'Typography', 'Visual Design'],
      link: '#',
      metrics: '15+ unique designs delivered'
    },
    {
      id: 7,
      title: 'Small Business Social Media',
      category: 'social',
      type: 'Social Media Handling',
      description: 'Monthly social media management for local business growth.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop',
      technologies: ['Content Creation', 'Scheduling', 'Analytics'],
      link: 'https://www.instagram.com/pro_goteam/',
      metrics: '500+ new followers monthly'
    },
    {
      id: 8,
      title: 'Custom Software Solution',
      category: 'tech',
      type: 'Custom Software',
      description: 'Tailored inventory management system for retail business.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      link: '#',
      metrics: 'Reduced processing time by 70%'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: null },
    { id: 'social', label: 'Social Media', icon: Instagram },
    { id: 'video', label: 'Video Editing', icon: Video },
    { id: 'design', label: 'Design Projects', icon: Palette },
    { id: 'tech', label: 'Tech Projects', icon: ExternalLink }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 border border-primary"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 bg-purple-500 rounded-full"
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
            Our Portfolio
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore our diverse portfolio of successful projects across creative and technical domains.
          </motion.p>

          {/* Filter buttons with enhanced animations */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <motion.div
                key={filter.id}
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.id 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'hover:bg-primary/10 hover:shadow-md'
                  }`}
                >
                  {filter.icon && <filter.icon className="h-4 w-4" />}
                  {filter.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects grid with enhanced animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 shadow-lg h-full">
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {project.isVideo && (
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div 
                        className="bg-white/90 rounded-full p-3"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Play className="h-6 w-6 text-primary" />
                      </motion.div>
                    </motion.div>
                  )}
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Badge variant="secondary" className="bg-white/90 text-primary backdrop-blur-sm">
                      {project.type}
                    </Badge>
                  </motion.div>
                  
                  {project.metrics && (
                    <motion.div 
                      className="absolute bottom-4 left-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Badge className="bg-green-600/90 text-white backdrop-blur-sm">
                        {project.metrics}
                      </Badge>
                    </motion.div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <motion.h3 
                    className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                      onClick={() => {
                        if (project.link === 'https://www.instagram.com/pro_goteam/') {
                          window.open(project.link, '_blank');
                        } else {
                          // For other projects, open WhatsApp with inquiry
                          const message = `Hi! I'm interested in learning more about your ${project.title} project. Could you share more details?`;
                          const whatsappUrl = `https://wa.me/918299721019?text=${encodeURIComponent(message)}`;
                          window.open(whatsappUrl, '_blank');
                        }
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {project.link === 'https://www.instagram.com/pro_goteam/' ? 'View on Instagram' : 'Learn More'}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8 text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full w-fit"
              >
                <ExternalLink className="h-6 w-6 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-200">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Let's discuss how we can bring your vision to life with our creative and technical expertise.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  onClick={() => {
                    const message = "Hi PROGO Team! I saw your portfolio and I'm interested in starting a project. Could we discuss my requirements?";
                    const whatsappUrl = `https://wa.me/918299721019?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Start Your Project
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}