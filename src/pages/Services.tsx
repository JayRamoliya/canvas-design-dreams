import { Check, Sparkles, Users, Presentation, Megaphone, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "Social Media Design",
      icon: Sparkles,
      description: "Eye-catching posts, stories, and thumbnails that drive engagement",
      features: [
        "Instagram Posts & Stories",
        "YouTube Thumbnails",
        "Facebook Ads",
        "LinkedIn Banners",
        "Twitter Headers",
        "Magic Resize for All Platforms"
      ],
      price: "Starting at $25",
      highlight: false
    },
    {
      title: "Business Branding",
      icon: Palette,
      description: "Complete brand identity solutions that make you stand out",
      features: [
        "Logo Design",
        "Brand Kit Creation",
        "Business Cards",
        "Letterhead Design",
        "Brand Guidelines",
        "Color Palette Development"
      ],
      price: "Starting at $150",
      highlight: true
    },
    {
      title: "Presentation Design",
      icon: Presentation,
      description: "Professional presentations that captivate your audience",
      features: [
        "Pitch Decks",
        "Workshop Slides",
        "Sales Presentations",
        "Training Materials",
        "Animated Elements",
        "Template Creation"
      ],
      price: "Starting at $100",
      highlight: false
    },
    {
      title: "Marketing Materials",
      icon: Megaphone,
      description: "Event and promotional materials that get noticed",
      features: [
        "Event Posters",
        "Flyers & Brochures",
        "Banner Design",
        "Email Templates",
        "Advertisement Design",
        "Print-Ready Files"
      ],
      price: "Starting at $50",
      highlight: false
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Discovery",
      description: "We discuss your vision, brand, and project goals"
    },
    {
      step: "02", 
      title: "Design",
      description: "I create initial concepts using Canva Pro tools"
    },
    {
      step: "03",
      title: "Revisions",
      description: "We refine the design based on your feedback"
    },
    {
      step: "04",
      title: "Delivery",
      description: "Final files delivered in all required formats"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Professional design services tailored to your brand's unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card 
                key={service.title} 
                className={`relative ${service.highlight ? 'ring-2 ring-primary shadow-glow' : 'shadow-card'} hover:scale-105 transition-transform`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <service.icon className={`w-12 h-12 mx-auto mb-4 ${service.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="text-3xl font-bold text-primary mt-4">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${service.highlight ? 'bg-gradient-primary' : ''} hover:scale-105 transition-transform`}
                    variant={service.highlight ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-accent-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {processes.map((process, index) => (
              <div key={process.step} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>
                  {index < processes.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300"></div>
                  )}
                </div>
                <h3 className="font-bold text-lg mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Pricing CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-secondary text-white text-center shadow-elegant">
            <CardContent className="p-12">
              <Users className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Every project is unique. Let's discuss your specific needs and create a custom package 
                that fits your budget and timeline perfectly.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform">
                Get Custom Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;