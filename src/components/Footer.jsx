import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (socialMedia) => {
    toast({
      title: "Coming Soon",
      description: `Our official ${socialMedia} page will be available soon.`,
    });
  };

  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-16 border-t">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <p className="text-xl font-semibold mb-2">
              Khilonjiya India Private Limited
            </p>
            <p className="text-sm">
              Empowering Employment. Strengthening Infrastructure.
            </p>
            <p className="text-xs mt-2 text-gray-500">
              CIN: U41001AS2025PTC028831
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold mb-3">Company</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
              <li><Link to="/why-choose-khilonjiya" className="hover:text-blue-600">Why Choose Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-semibold mb-3">Legal</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-blue-600">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="hover:text-blue-600">Refund Policy</Link></li>
              <li><Link to="/data-deletion-policy" className="hover:text-blue-600">Data Deletion Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold mb-3">Follow Us</p>
            <div className="flex space-x-4">
              <button onClick={() => handleSocialClick('Facebook')} className="hover:text-blue-600">
                <Facebook />
              </button>
              <button onClick={() => handleSocialClick('Instagram')} className="hover:text-blue-600">
                <Instagram />
              </button>
              <button onClick={() => handleSocialClick('Twitter')} className="hover:text-blue-600">
                <Twitter />
              </button>
            </div>
          </div>

        </div>

        <div className="text-center mt-10 pt-6 border-t text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Khilonjiya India Private Limited. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
