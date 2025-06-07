import { ArrowRight, Sparkles, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-purple-50/90 dark:from-slate-900/90 dark:via-slate-800/80 dark:to-slate-900/90"></div>
      
      {/* Interactive mouse follower */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-10 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [0.8, 1.1, 0.8],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Badge with 3D effect */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20 shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotateX: 5 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Globe size={16} />
            </motion.div>
            <span>International Freelancing Company</span>
          </motion.div>

          {/* Enhanced main heading with 3D text effect */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6"
            variants={itemVariants}
            style={{ textShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          >
            <motion.span
              className="block"
              whileHover={{ scale: 1.02 }}
            >
              We Build Digital
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Excellence
            </motion.span>
          </motion.h1>

          {/* Enhanced subheading */}
          <motion.p 
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            From stunning creative content to comprehensive digital marketing, we provide end-to-end freelancing solutions for businesses worldwide.
          </motion.p>

          {/* Enhanced CTA buttons with 3D effects */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full group shadow-2xl border-0"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotateX: -5, rotateY: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 rounded-full border-2 hover:bg-primary/10 backdrop-blur-sm shadow-xl"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats with 3D cards */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "5+", label: "Happy Clients" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  rotateX: 10, 
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="text-3xl font-bold text-primary mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}