import { Target, Eye, Users, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses worldwide with innovative creative and digital solutions that drive growth and success.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading international freelancing company, bridging creativity and technology for global businesses.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Our Values',
      description: 'Excellence, creativity, reliability, and client-centricity guide everything we do in our freelancing journey.',
      gradient: 'from-pink-500 to-red-600'
    }
  ];

  const teamMembers = [
    {
      name: 'Harshit Agrawal',
      role: 'Founder & CEO',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHGIbaTVhguDw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715881696505?e=1755129600&v=beta&t=J9ncujJ8z9u0EDZH5_euBHDM2Qs817R2iCtbuMn7y_Q',
      bio: 'Visionary leader with extensive experience in digital solutions and business strategy.',
      linkedin: '#',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Anurag Singh',
      role: 'Co-founder & Lead Digital Marketer',
      image: 'https://i.ibb.co/GvZwK6d4/image.png',
      bio: 'Expert digital marketer and researcher, driving innovative marketing strategies.',
      linkedin: '#',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      name: 'Shashika',
      role: 'Video Editing Lead',
      image: 'https://i.ibb.co/hRkRJrhv/image.png',
      bio: 'Creative video editing specialist with expertise in professional post-production and visual storytelling.',
      linkedin: '#',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Prajwal Mahajan',
      role: 'Lead Video Editor',
      image: 'https://i.ibb.co/GvGmVj8Q/image.png',
      bio: 'Creative video editing specialist with a passion for storytelling through visuals.',
      linkedin: '#',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      name: 'Shalini Singh',
      role: 'Lead of Design Team',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHkV0RQSkMMzQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707935936825?e=1755129600&v=beta&t=5aaFP6MsGb5cOdRKibR2NS_Qpqzb6SWgwQV9-wxlT3g',
      bio: 'Talented designer creating stunning visuals that captivate and convert.',
      linkedin: '#',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      name: 'Mudit Saxena',
      role: 'Tech R&D Lead',
      image: 'https://i.ibb.co/mVmtZvfj/image.png',
      bio: 'Technical research and development specialist driving innovation in software solutions.',
      linkedin: '#',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Yash Raj',
      role: 'Lead of Market Team',
      image: '/assets/yash_raj.png',
      bio: 'Strategic market analyst ensuring our services meet global market demands.',
      linkedin: '#',
      gradient: 'from-indigo-400 to-purple-500'
    }
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
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 border-2 border-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 border-2 border-purple-500 rounded-full"
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About PROGO
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are an international freelancing company dedicated to providing exceptional creative and digital solutions 
            that help businesses thrive in the global marketplace.
          </p>
        </motion.div>

        {/* Mission, Vision, Values - Updated Background */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 backdrop-blur-sm border-0 h-full">
                <CardContent className="p-8">
                  <motion.div 
                    className={`mx-auto mb-6 p-4 bg-gradient-to-r ${value.gradient} rounded-full w-fit`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Team section - Updated Background */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">Meet Our Team</h3>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="text-center group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 backdrop-blur-sm border-0 h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Avatar className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <AvatarImage 
                          src={member.image} 
                          alt={member.name}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <AvatarFallback className="text-lg font-semibold bg-gradient-to-r from-blue-100 to-purple-100">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{member.name}</h4>
                    <p className="text-primary font-medium mb-3 text-sm">{member.role}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center">
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-sm"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Company stats */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8">Why Choose PROGO?</h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "20+", label: "Projects Completed" },
              { number: "🌍", label: "International Reach" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  rotateX: 10, 
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl"
              >
                <motion.div 
                  className="text-3xl font-bold text-primary mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-700 dark:text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Location Info */}
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
                <Globe className="h-6 w-6 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-200">
                Based in Bangalore, Serving Globally
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                While our headquarters are in Bangalore, India, we proudly serve clients worldwide as an international freelancing company.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}