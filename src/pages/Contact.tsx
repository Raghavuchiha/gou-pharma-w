import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: ["28HK Tapoven Dreamcity,", "Kadi-Chhatral Road, Kadi,", "Gujarat – 382715"],
    link: null,
  },
  {
    icon: Phone,
    title: "Phone",
    content: [""],
    link: "",
  },
  {
    icon: Mail,
    title: "Email",
    content: ["goupharma11@gmail.com"],
    link: "mailto:goupharma11@gmail.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: ["Monday – Saturday", "9:00 AM – 6:00 PM"],
    link: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-foreground mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="body-lg text-muted-foreground">
              Have questions about our products or want to become a distribution partner? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="heading-md text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Product inquiry, Distribution, etc."
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <h2 className="heading-md text-foreground mb-6">
                  Get in Touch
                </h2>
                
                {contactInfo.map((info) => (
                  <div 
                    key={info.title}
                    className="flex gap-4 p-4 rounded-lg bg-secondary/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content.join(", ")}
                        </a>
                      ) : (
                        <div className="text-sm text-muted-foreground">
                          {info.content.map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Additional CTA */}
                <div className="bg-primary text-primary-foreground rounded-xl p-6 mt-8">
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Become a Distribution Partner
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    Interested in distributing Gou Pharma products in your region? 
                    Contact us to discuss partnership opportunities.
                  </p>
                  <a 
                    href="tel:9826477023" 
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    {/*Call Now: +91 9826477023*/}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="bg-secondary/30">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">
                Kadi, Gujarat – 382715
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
