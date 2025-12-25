import { Link } from "react-router-dom";
import { 
  Shield, 
  Microscope, 
  Award, 
  Users, 
  Package, 
  HeartHandshake,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const reasons = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every product undergoes rigorous quality control testing to ensure safety, efficacy, and regulatory compliance. We maintain strict manufacturing standards.",
    points: [
      "GMP-compliant manufacturing",
      "Batch-wise quality testing",
      "Stability studies conducted",
      "Regulatory documentation maintained",
    ],
  },
  {
    icon: Microscope,
    title: "Scientifically Formulated",
    description: "Our products are developed based on the latest veterinary research and pharmaceutical science, ensuring optimal therapeutic outcomes.",
    points: [
      "Research-backed formulations",
      "Optimal bioavailability",
      "Evidence-based dosing",
      "Continuous product improvement",
    ],
  },
  {
    icon: Award,
    title: "Veterinary Recommended",
    description: "Trusted by veterinary professionals across India, our products are developed in consultation with practicing veterinarians.",
    points: [
      "Developed with vet input",
      "Field-tested solutions",
      "Professional-grade quality",
      "Reliable therapeutic results",
    ],
  },
  {
    icon: Package,
    title: "Wide Product Range",
    description: "From dewormers to supplements, we offer a comprehensive portfolio addressing diverse veterinary needs for livestock and pets.",
    points: [
      "Complete therapeutic categories",
      "Multiple dosage forms",
      "Various pack sizes",
      "Species-specific solutions",
    ],
  },
  {
    icon: Users,
    title: "Customer Support",
    description: "Our dedicated team provides technical support and guidance to distributors, retailers, and end-users.",
    points: [
      "Product training available",
      "Technical assistance",
      "Responsive communication",
      "After-sales support",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Ethical Business Practices",
    description: "We operate with integrity, transparency, and a genuine commitment to improving animal health across India.",
    points: [
      "Honest product claims",
      "Fair business dealings",
      "Sustainable practices",
      "Community-focused approach",
    ],
  },
];

const stats = [
  { value: "10+", label: "Products" },
  { value: "100+", label: "Happy Partners" },
  { value: "Gujarat", label: "Based" },
  { value: "All India", label: "Distribution" },
];

const WhyChooseUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-foreground mb-6">
              Why Choose <span className="text-primary">Gou Pharma</span>
            </h1>
            <p className="body-lg text-muted-foreground">
              Discover what makes us a trusted partner for veterinary professionals, 
              distributors, and farmers across India.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/5 py-12">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              The Gou Pharma Difference
            </h2>
            <p className="body-md text-muted-foreground">
              We're committed to delivering quality, value, and trust in every 
              product and interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div 
                key={reason.title}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 hover:shadow-medium transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <reason.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="heading-sm text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {reason.description}
                </p>
                <ul className="space-y-2">
                  {reason.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg text-foreground mb-6">
                Our Promise to You
              </h2>
              <p className="body-lg text-muted-foreground mb-8">
                At Gou Pharma, we understand that the health of your animals directly 
                impacts your livelihood and well-being. That's why we go beyond just 
                selling products – we're committed to being your trusted partner in 
                animal healthcare. Every formulation we create, every quality check we 
                perform, and every relationship we build is guided by this commitment.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 text-primary">
                  <Shield className="h-5 w-5" />
                  <span className="font-medium">Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Award className="h-5 w-5" />
                  <span className="font-medium">Professional Grade</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <HeartHandshake className="h-5 w-5" />
                  <span className="font-medium">Ethical Practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="body-lg opacity-90 mb-8">
              Join the growing network of veterinarians, distributors, and farmers 
              who trust Gou Pharma for their veterinary pharmaceutical needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="accent" size="lg">
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;
