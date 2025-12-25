import { Link } from "react-router-dom";
import { Target, Eye, Heart, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const values = [
  {
    title: "Quality First",
    description: "Every product undergoes rigorous quality control to ensure safety and efficacy for animal health.",
  },
  {
    title: "Scientific Excellence",
    description: "Our formulations are developed based on the latest veterinary science and research.",
  },
  {
    title: "Ethical Practices",
    description: "We operate with transparency and integrity in all our business dealings.",
  },
  {
    title: "Animal Welfare",
    description: "Our ultimate goal is to improve the health and well-being of animals across India.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-foreground mb-6">
              About <span className="text-primary">Gou Pharma</span>
            </h1>
            <p className="body-lg text-muted-foreground">
              A trusted name in veterinary pharmaceuticals, dedicated to advancing 
              animal health through quality formulations and ethical practices.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground body-md">
                <p>
                  Gou Pharma Pvt. Ltd. is an Indian veterinary pharmaceutical company 
                  headquartered in Gujarat. We specialize in manufacturing and supplying 
                  high-quality veterinary medicines and feed supplements for a wide range 
                  of animals including cattle, buffalo, sheep, goats, swine, dogs, and cats.
                </p>
                <p>
                  Our comprehensive product portfolio addresses critical aspects of animal 
                  health including immunity enhancement, productivity improvement, milk yield 
                  optimization, deworming, pain management, liver care, and nutritional 
                  supplementation.
                </p>
                <p>
                  With a deep commitment to quality and animal welfare, we serve 
                  veterinarians, distributors, wholesalers, retailers, and dairy farmers 
                  across India, providing them with trusted pharmaceutical solutions they 
                  can rely on.
                </p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground">
                      To provide accessible, affordable, and effective veterinary 
                      pharmaceutical solutions that enhance animal health and 
                      productivity across India.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      Our Vision
                    </h3>
                    <p className="text-muted-foreground">
                      To become a leading name in veterinary healthcare, recognized 
                      for quality, innovation, and our unwavering commitment to 
                      animal welfare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="body-md text-muted-foreground">
              The principles that guide everything we do at Gou Pharma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              >
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="heading-lg mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="body-lg opacity-90 mb-8">
              At Gou Pharma, we understand that healthy animals are the foundation 
              of healthy communities and sustainable livelihoods. That's why we 
              invest in research, maintain strict quality standards, and work 
              closely with veterinary professionals to develop solutions that 
              truly make a difference.
            </p>
            <Button asChild variant="accent" size="lg">
              <Link to="/products">
                Explore Our Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="heading-md text-foreground mb-4">
                  Based in Gujarat, Serving All of India
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our headquarters in Kadi, Gujarat serves as the hub for our 
                  operations, from where we distribute quality veterinary 
                  products to partners and customers across the nation.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">Corporate Office</p>
                  <p>28HK Tapoven Dreamcity,</p>
                  <p>Kadi-Chhatral Road, Kadi,</p>
                  <p>Gujarat – 382715</p>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <Button asChild size="lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
