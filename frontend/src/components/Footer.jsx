import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-bold font-serif gradient-text">
                Nutri Plus
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              Discovering nutrition, sharing wellness, and inspiring healthier choices every day.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@nurtiplus.com"
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Development
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/authors" className="hover:text-primary transition-colors">
                  Authors
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Nutri Plus. All rights reserved. Crafted with passion for readers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
