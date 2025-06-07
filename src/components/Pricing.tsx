import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Social Media Starter',
      price: '₹3,000',
      period: '/month',
      description: 'Perfect for small businesses starting their social media journey',
      icon: Star,
      color: 'blue',
      popular: false,
      features: [
        'Complete Social Media Strategy',
        'Daily Content Planning',
        'Post Scheduling & Management',
        'Basic Analytics & Reporting',
        '1 Platform Focus (Instagram/Facebook)',
        'Monthly Strategy Review',
        'Basic Hashtag Research',
        'Community Engagement'
      ]
    },
    {
      name: 'Video Editing Pro',
      price: '₹6,000',
      period: '/package',
      description: 'Professional video editing for your marketing needs',
      icon: Zap,
      color: 'purple',
      popular: true,
      features: [
        '4 Professional Video Edits',
        'Up to 30 seconds each',
        'Motion Graphics Included',
        'Color Correction & Grading',
        'Audio Enhancement',
        'Social Media Optimization',
        '2 Revision Rounds',
        'Fast 48-hour Delivery'
      ]
    },
    {
      name: 'Creative Premium',
      price: '₹9,000',
      period: '/package',
      description: 'Complete creative package for brand enhancement',
      icon: Crown,
      color: 'gradient',
      popular: false,
      features: [
        '4 Custom Poster Designs',
        '4 Professional Video Edits',
        'Advanced Motion Graphics',
        'Brand Consistency Check',
        'Multiple Format Outputs',
        'Unlimited Minor Revisions',
        'Priority Support',
        'Creative Consultation Call'
      ]
    }
  ];

  const handleGetStarted = (planName: string) => {
    const message = `Hi! I'm interested in the ${planName} package. Could you please provide more details and help me get started?`;
    const whatsappUrl = `https://wa.me/918299721019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
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
            Our Pricing
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transparent, affordable pricing for all your creative and digital needs. No hidden costs, just exceptional value.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm">
                    Most Popular
                  </Badge>
                </motion.div>
              )}
              
              <Card className={`h-full relative overflow-hidden transition-all duration-500 ${
                plan.popular 
                  ? 'ring-2 ring-purple-500 shadow-2xl bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20' 
                  : 'shadow-lg hover:shadow-2xl bg-white/90 dark:bg-slate-800/90'
              } backdrop-blur-sm border-0`}>
                
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${
                  plan.color === 'gradient' 
                    ? 'bg-gradient-to-br from-purple-400 to-pink-400' 
                    : plan.color === 'purple' 
                      ? 'bg-purple-400' 
                      : 'bg-blue-400'
                } opacity-10 rounded-bl-full`}></div>

                <CardHeader className="text-center pb-2">
                  <motion.div 
                    className={`mx-auto mb-4 p-3 rounded-full w-fit ${
                      plan.color === 'gradient' 
                        ? 'bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20' 
                        : plan.color === 'purple' 
                          ? 'bg-purple-100 dark:bg-purple-900/20' 
                          : 'bg-blue-100 dark:bg-blue-900/20'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <plan.icon className={`h-6 w-6 ${
                      plan.color === 'gradient' 
                        ? 'text-purple-600' 
                        : plan.color === 'purple' 
                          ? 'text-purple-600' 
                          : 'text-blue-600'
                    }`} />
                  </motion.div>
                  
                  <CardTitle className="text-xl font-bold mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </CardDescription>
                  
                  <motion.div 
                    className="flex items-baseline justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className={`text-4xl font-bold ${
                      plan.color === 'gradient' 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent' 
                        : plan.color === 'purple' 
                          ? 'text-purple-600' 
                          : 'text-blue-600'
                    }`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </motion.div>
                </CardHeader>

                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <Check className={`h-5 w-5 mt-0.5 mr-3 flex-shrink-0 ${
                          plan.color === 'gradient' 
                            ? 'text-purple-600' 
                            : plan.color === 'purple' 
                              ? 'text-purple-600' 
                              : 'text-blue-600'
                        }`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className={`w-full ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                          : plan.color === 'purple'
                            ? 'bg-purple-600 hover:bg-purple-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                      } shadow-lg hover:shadow-xl transition-all duration-300`}
                      onClick={() => handleGetStarted(plan.name)}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Services Note */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8 text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full w-fit"
              >
                <Zap className="h-6 w-6 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-200">
                Custom Tech Solutions
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                For website development and custom software solutions, pricing is based on project requirements and complexity.
              </p>
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={() => handleGetStarted('Custom Tech Solution')}
              >
                Get Custom Quote
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}