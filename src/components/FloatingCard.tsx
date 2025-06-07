import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  scale?: number;
  rotateX?: number;
  rotateY?: number;
}

export default function FloatingCard({ 
  children, 
  delay = 0, 
  className = "",
  direction = 'up',
  duration = 0.8,
  scale = 1.02,
  rotateX = 5,
  rotateY = 5
}: FloatingCardProps) {
  
  const getInitialPosition = () => {
    switch (direction) {
      case 'down':
        return { opacity: 0, y: -50, rotateX: 10 };
      case 'left':
        return { opacity: 0, x: 50, rotateY: -10 };
      case 'right':
        return { opacity: 0, x: -50, rotateY: 10 };
      default: // 'up'
        return { opacity: 0, y: 50, rotateX: -10 };
    }
  };

  const getAnimatePosition = () => {
    return { opacity: 1, y: 0, x: 0, rotateX: 0, rotateY: 0 };
  };

  const getHoverEffect = () => {
    switch (direction) {
      case 'down':
        return { 
          y: 10, 
          rotateX: -rotateX,
          scale: scale,
          transition: { duration: 0.3 }
        };
      case 'left':
        return { 
          x: 10, 
          rotateY: rotateY,
          scale: scale,
          transition: { duration: 0.3 }
        };
      case 'right':
        return { 
          x: -10, 
          rotateY: -rotateY,
          scale: scale,
          transition: { duration: 0.3 }
        };
      default: // 'up'
        return { 
          y: -10, 
          rotateX: rotateX,
          scale: scale,
          transition: { duration: 0.3 }
        };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getAnimatePosition()}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: duration, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 12
      }}
      whileHover={getHoverEffect()}
      whileTap={{ scale: 0.98 }}
      className={`perspective-1000 transform-gpu ${className}`}
      style={{ 
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      <motion.div
        className="w-full h-full text-foreground"
        transition={{ duration: 0.3 }}
        style={{ 
          color: 'inherit',
          backgroundColor: 'inherit'
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Additional variant for more complex floating animations
export function AdvancedFloatingCard({ 
  children, 
  delay = 0, 
  className = "",
  enableFloat = true,
  floatDistance = 10,
  floatDuration = 3
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  enableFloat?: boolean;
  floatDistance?: number;
  floatDuration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10, rotateY: -5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -15, 
        rotateX: 8,
        rotateY: 5,
        scale: 1.03,
        transition: { duration: 0.4, type: "spring", stiffness: 300 }
      }}
      animate={enableFloat ? {
        y: [0, -floatDistance, 0],
        rotateX: [0, 2, 0],
        rotateY: [0, 1, 0],
        transition: {
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut"
        }
      } : {}}
      className={`perspective-1000 transform-gpu ${className}`}
      style={{ 
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
}

// Staggered container for multiple floating cards
export function FloatingCardContainer({ 
  children, 
  staggerDelay = 0.1,
  className = ""
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      rotateX: -10,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}