
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingCard from './FloatingCard';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'tech',
      type: 'Website Development',
      description: 'Modern e-commerce platform with payment integration and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'tech',
      type: 'App Development',
      description: 'Secure mobile banking application with biometric authentication.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      link: '#'
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'design',
      type: 'Graphic Design',
      description: 'Complete brand identity package for a tech startup.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Adobe Illustrator', 'Photoshop'],
      link: '#'
    },
    {
      id: 4,
      title: 'Product Launch Video',
      category: 'video',
      type: 'Video Editing',
      description: 'Promotional video for product launch with motion graphics.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop',
      technologies: ['After Effects', 'Premiere Pro'],
      link: '#',
      isVideo: true
    },
    {
      id: 5,
      title: 'Social Media Campaign',
      category: 'design',
      type: 'Social Media',
      description: 'Complete social media campaign with graphics and content strategy.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
      technologies: ['Canva', 'Figma', 'Buffer'],
      link: '#'
    },
    {
      id: 6,
      title: 'CRM System',
      category: 'tech',
      type: 'Custom Software',
      description: 'Custom CRM system with analytics dashboard and reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'Python', 'PostgreSQL'],
      link: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'tech', label: 'Tech Projects' },
    { id: 'design', label: 'Design Projects' },
    { id: 'video', label: 'Video Projects' }
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
            Explore our diverse portfolio of successful projects across different domains.
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
                  className={`rounded-full px-6 py-2 transition-all duration-300 ${
                    activeFilter === filter.id 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'hover:bg-primary/10 hover:shadow-md'
                  }`}
                >
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
            >
              <FloatingCard delay={index * 0.1}>
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
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </FloatingCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
