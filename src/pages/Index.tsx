import { Link } from "react-router-dom";
import { ArrowRight, Shield, Microscope, Users, Award, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const highlights = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every product meets stringent quality standards and regulatory compliance.",
  },
  {
    icon: Microscope,
    title: "Scientifically Formulated",
    description: "Research-backed formulations developed by veterinary pharmaceutical experts.",
  },
  {
    icon: Users,
    title: "Trusted by Professionals",
    description: "Preferred by veterinarians, distributors, and dairy farmers across India.",
  },
];

const animalCategories = [
  { name: "Cattle & Buffalo", icon: "🐄" },
  { name: "Sheep & Goats", icon: "🐐" },
  
  { name: "Dogs & Cats", icon: "🐕" },
];

const productCategories = [
  {
    title: "Bolus & Tablets",
    description: "Dewormers, pain relief, antibiotics, and milk enhancers in convenient oral dosage forms.",
    items: ["Dewormers", "Pain Relief", "Antibiotics", "Milk Enhancers"],
  },
  {
    title: "Injectable Solutions",
    description: "Fast-acting parenteral formulations for critical care and therapeutic interventions.",
    items: ["Antibiotics", "Anti-inflammatories", "Vitamins"],
  },
  {
    title: "Liver Tonics",
    description: "Hepatoprotective formulations to support liver function and overall animal health.",
    items: ["Hepatoprotectives", "Digestive Aids"],
  },
  {
    title: "Feed Supplements",
    description: "Comprehensive nutritional supplements to enhance productivity and immunity.",
    items: ["Vitamins", "Minerals", "Immunity Boosters"],
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-background to-muted overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--sage)/0.3)_0%,_transparent_60%)]" />
        <div className="container-custom section-padding relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
              <Leaf className="h-4 w-4" />
              <span>Veterinary Pharmaceutical Excellence</span>
            </div>
            
            <h1 className="heading-xl text-foreground mb-6 animate-fade-up animate-delay-100">
              Advancing Veterinary Health with{" "}
              <span className="text-primary">Trusted Formulations</span>
            </h1>
            
            <p className="body-lg text-muted-foreground mb-10 max-w-2xl animate-fade-up animate-delay-200">
              Gou Pharma Pvt. Ltd. delivers quality veterinary medicines and feed supplements 
              for livestock and companion animals. Committed to animal health, productivity, 
              and welfare across India.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
              <Button asChild variant="hero" size="xl">
                <Link to="/products">
                  View Products
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Animal Categories */}
      <section className="bg-primary/5 py-8">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {animalCategories.map((animal) => (
              <div 
                key={animal.name} 
                className="flex items-center gap-3 text-muted-foreground"
              >
                <span className="text-2xl">{animal.icon}</span>
                <span className="text-sm font-medium">{animal.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              Why Veterinary Professionals Trust Us
            </h2>
            <p className="body-md text-muted-foreground">
              Our commitment to quality, science, and animal welfare sets us apart 
              in the veterinary pharmaceutical industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="heading-sm text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="heading-lg text-foreground mb-4">
                Our Product Range
              </h2>
              <p className="body-md text-muted-foreground max-w-xl">
                Comprehensive veterinary solutions for livestock health, productivity, 
                and immunity enhancement.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/products">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <div 
                key={category.title}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {category.description}
                </p>
                <ul className="space-y-1.5">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="heading-lg mb-6">
              Committed to Animal Health & Welfare
            </h2>
            <p className="body-lg opacity-90 mb-8">
              At Gou Pharma, we believe healthy animals mean healthier communities. 
              Our mission is to provide accessible, quality veterinary care solutions 
              to farmers and pet owners across India.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Quality Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Regulatory Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Microscope className="h-5 w-5" />
                <span>Research Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-secondary to-muted rounded-2xl p-8 md:p-12 text-center">
            <h2 className="heading-md text-foreground mb-4">
              Looking for Quality Veterinary Products?
            </h2>
            <p className="body-md text-muted-foreground mb-8 max-w-xl mx-auto">
              Connect with us to learn more about our product range and how we can 
              support your veterinary needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
