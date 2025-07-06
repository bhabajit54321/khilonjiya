import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { name, price, image, description } = product;
  const whatsappNumber = '6003170583';
  const message = `Hello Khilonjiya, I'm interested in the product: ${name} (Price: ₹${price}).`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img  className="w-full h-64 object-cover" alt={name} src="https://images.unsplash.com/photo-1611798416123-c1255cff2c0e" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-maroon mb-2">{name}</h3>
        <p className="text-teal-dark mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-maroon">₹{price}</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-teal-dark hover:bg-maroon text-white">
              <ShoppingBag className="mr-2 h-4 w-4" /> Buy Now
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;