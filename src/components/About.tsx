
import { Target, Eye, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with cutting-edge digital solutions that drive growth and innovation.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading digital transformation partner for businesses worldwide.'
    },
    {
      icon: Users,
      title: 'Our Values',
      description: 'Innovation, integrity, excellence, and customer-centricity guide everything we do.'
    }
  ];

  const founders = [
    {
      name: 'Anurag Singh',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      bio: 'Passionate entrepreneur with 5+ years of experience in digital solutions and business strategy.',
      linkedin: '#'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About SparkServices
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a dynamic startup dedicated to providing comprehensive digital solutions 
            that bridge the gap between technology and creativity.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Founder section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">Meet Our Founder</h3>
          
          <div className="max-w-md mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-8">
                  <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AvatarImage src={founder.image} alt={founder.name} />
                    <AvatarFallback>{founder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-xl font-bold mb-2">{founder.name}</h4>
                  <p className="text-primary font-medium mb-4">{founder.role}</p>
                  <p className="text-muted-foreground mb-4">{founder.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company stats */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Why Choose Us?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">48h</div>
              <div className="text-muted-foreground">Quick Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
