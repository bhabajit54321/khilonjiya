import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

const Menu = () => {
  const categories = [
    { name: 'Mekhela Chador', value: 'mekhela-chador', image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/802930a3-469e-4a49-ab74-7bd4cb8d8b45/1571a79be862b0345ced1352f10b603e.jpg' },
    { name: 'Japi', value: 'japi', image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/802930a3-469e-4a49-ab74-7bd4cb8d8b45/7f0e9e3acf3a68cd8de0882e54e1d4cd.jpg' },
    { name: 'Accessories', value: 'accessories', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop' },
    { name: 'Handicrafts', value: 'handicrafts', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>Menu - Our Cultural Collection | Khilonjiya.com</title>
        <meta name="description" content="Explore our menu of authentic Assamese cultural items. Browse categories like Mekhela Chador, Japi, Accessories, and Handicrafts at Khilonjiya.com." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold traditional-text mb-6">
            Our Cultural Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the heart of Assamese heritage through our curated collections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to="/products" state={{ category: category.value }}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift cultural-shadow group">
                  <div className="relative aspect-square">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <h2 className="text-2xl font-bold text-white text-center px-4">
                        {category.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
        >
            <Link to="/products">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white">
                    View All Products
                </Button>
            </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;