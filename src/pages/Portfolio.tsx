import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "social", name: "Social Media" },
    { id: "branding", name: "Branding" },
    { id: "presentations", name: "Presentations" },
    { id: "marketing", name: "Marketing" },
  ];

  const projects = [
    {
      id: 1,
      title: "Brand Identity Suite",
      category: "branding",
      tools: ["Canva Pro", "Brand Kit"],
      description: "Complete brand identity including logo, colors, and templates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Social Media Campaign",
      category: "social",
      tools: ["Canva Pro", "Magic Resize"],
      description: "30-day Instagram campaign with consistent visual style",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Startup Pitch Deck",
      category: "presentations",
      tools: ["Canva Pro", "Animation"],
      description: "Professional presentation for Series A funding",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Product Launch Kit",
      category: "marketing",
      tools: ["Canva Pro", "Brand Kit", "Magic Resize"],
      description: "Complete marketing materials for product launch",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "YouTube Thumbnails",
      category: "social",
      tools: ["Canva Pro", "Templates"],
      description: "High-converting thumbnail designs for YouTube channel",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Event Poster Series",
      category: "marketing",
      tools: ["Canva Pro", "Typography"],
      description: "Eye-catching posters for tech conference series",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 bg-gradient-hero">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A collection of my favorite design projects and creative solutions
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-accent-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Like What You See?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next design project. I'd love to help bring your vision to life.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-transform">
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;