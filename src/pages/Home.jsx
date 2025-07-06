import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard.jsx';
import { products } from '@/data/products.js';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Khilonjiya.com - Authentic Assamese Heritage Crafts</title>
        <meta name="description" content="Discover and buy authentic Assamese cultural items like Mekhela Chador, Jaapi, and more. Handcrafted by indigenous artisans." />
      </Helmet>

      <div className="w-full">
        <motion.section
          className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620425198253-3c68f4b4a84c?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 to-black/30"></div>
          <motion.div
            className="relative z-10 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-gold-light drop-shadow-lg">Khilonjiya.com</h1>
            <p className="mt-4 text-lg md:text-2xl font-light text-cream-100 max-w-2xl mx-auto">
              Weaving Assam's Heritage, One Thread at a Time.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <a href="#products">
                <Button size="lg" className="bg-gold text-maroon-dark hover:bg-gold-light transition-transform transform hover:scale-105">
                  Explore Our Collection
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.section>

        <section id="products" className="py-16 lg:py-24 bg-cream-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-maroon">Our Featured Products</h2>
              <p className="mt-2 text-lg text-teal-dark">Handcrafted with love by the artisans of Assam.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream-200 py-16 lg:py-24">
          <div className="container mx-auto px-6 text-center">
             <h2 className="text-3xl md:text-4xl font-bold font-serif text-maroon">About Our Craft</h2>
             <p className="mt-4 max-w-3xl mx-auto text-lg text-teal-dark">
                Khilonjiya means 'indigenous' in Assamese. We are dedicated to preserving the rich cultural tapestry of Assam by bringing you authentic, handcrafted items directly from local artisans. Each piece tells a story of tradition, skill, and heritage.
             </p>
             <Link to="/about">
                <Button variant="outline" className="mt-8 border-maroon text-maroon hover:bg-maroon hover:text-white">
                    Learn More About Us
                </Button>
             </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;