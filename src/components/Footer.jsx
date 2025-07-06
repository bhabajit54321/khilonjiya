
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (socialMedia) => {
    toast({
      title: "🚧 Coming Soon!",
      description: `Our ${socialMedia} page isn't live yet, but we're working on it!`,
    });
  };

  return (
    <footer className="bg-cream-200 text-teal-dark py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="font-serif text-xl font-bold text-maroon mb-2">Khilonjiya.com</p>
            <p className="text-sm">Weaving Assam's Heritage, One Thread at a Time.</p>
          </div>
          <div>
            <p className="font-bold mb-2">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-maroon">About Us</Link></li>
              <li><Link to="/" className="hover:text-maroon">Shop</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-2">Policies</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-maroon">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-maroon">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-2">Follow Us</p>
            <div className="flex space-x-4">
              <button onClick={() => handleSocialClick('Facebook')} className="hover:text-maroon"><Facebook /></button>
              <button onClick={() => handleSocialClick('Instagram')} className="hover:text-maroon"><Instagram /></button>
              <button onClick={() => handleSocialClick('Twitter')} className="hover:text-maroon"><Twitter /></button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-teal-dark/20 text-sm">
          <p>&copy; {new Date().getFullYear()} Khilonjiya.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  