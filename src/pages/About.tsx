import { Palette, Zap, Users, Award, Coffee, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const skills = [
    "Canva Pro", "Brand Kits", "Presentations", "Social Media Ads", 
    "Magic Resize", "Content Planning", "Typography", "Color Theory"
  ];

  const tools = [
    { name: "Canva Pro", icon: Palette },
    { name: "Magic Resize", icon: Zap },
    { name: "Brand Kits", icon: Award },
    { name: "Collaboration", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Passionate designer with 4+ years of experience crafting beautiful visual stories
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card border-0">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">My Journey</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    I've been using Canva Pro since 2021, and it completely transformed how I approach design. 
                    What started as a side passion has grown into a full-time career helping brands tell their 
                    visual stories.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I specialize in creating cohesive brand experiences through social media graphics, 
                    presentations, and marketing materials that not only look stunning but drive real results.
                  </p>
                  <Button className="bg-gradient-primary hover:scale-105 transition-transform">
                    Download My Resume
                  </Button>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-secondary rounded-2xl p-8 flex items-center justify-center">
                    <Camera className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-accent-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm font-medium">
                {skill}
              </Badge>
            ))}
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <Card key={tool.name} className="text-center p-6 hover:scale-105 transition-transform">
                <tool.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">{tool.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">When I'm Not Designing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <Coffee className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Coffee Enthusiast</h3>
              <p className="text-muted-foreground">My best designs happen with a perfect cup of coffee</p>
            </div>
            <div className="p-6">
              <Camera className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Photography</h3>
              <p className="text-muted-foreground">Capturing moments that inspire my design work</p>
            </div>
            <div className="p-6">
              <Palette className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Art Collector</h3>
              <p className="text-muted-foreground">Always seeking inspiration from other artists</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;