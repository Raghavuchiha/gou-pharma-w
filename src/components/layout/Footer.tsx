import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Gou Pharma Pvt. Ltd." 
                className="h-12 w-auto bg-primary-foreground rounded-md p-1"
              />
              <div>
                <span className="font-heading font-semibold text-lg leading-tight block">
                  Gou Pharma
                </span>
                <span className="text-xs opacity-80">Pvt. Ltd.</span>
              </div>
            </Link>
            <p className="text-sm opacity-90 leading-relaxed">
              Advancing veterinary health through trusted formulations and quality pharmaceutical solutions for livestock and companion animals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Why Choose Us", path: "/why-choose-us" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {[
                "Bolus & Tablets",
                "Injectable Solutions",
                "Liver Tonics",
                "Feed Supplements",
                "Vitamin & Minerals",
              ].map((product) => (
                <li key={product}>
                  <Link 
                    to="/products" 
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 opacity-80" />
                <span className="text-sm opacity-90">
                  28HK Tapoven Dreamcity,<br />
                  Kadi-Chhatral Road, Kadi,<br />
                  Gujarat – 382715
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 opacity-80" />
                <a 
                  href="tel:9826477023" 
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  {/*+91 9826477023*/}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 opacity-80" />
                <a 
                  href="mailto:info@goupharma.com" 
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  goupharma11@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Gou Pharma Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-sm opacity-60">
              Committed to Animal Health & Welfare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
