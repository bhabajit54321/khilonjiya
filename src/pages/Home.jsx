import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Khilonjiya India Private Limited | Job Portal & Construction Services</title>
        <meta 
          name="description" 
          content="Khilonjiya India Private Limited operates Khilonjiya Job Portal and Khilonjiya Construction Services, focused on employment generation and structured service coordination across Assam and India." 
        />
      </Helmet>

      <div className="w-full">

        {/* Hero Section */}
        <motion.section
          className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 to-black/40"></div>
          <motion.div
            className="relative z-10 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-gold-light drop-shadow-lg">
              Khilonjiya India Private Limited
            </h1>
            <p className="mt-4 text-lg md:text-2xl font-light text-cream-100 max-w-2xl mx-auto">
              Empowering Employment. Strengthening Infrastructure.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 space-x-4"
            >
              <Link to="/about">
                <Button size="lg" className="bg-gold text-maroon-dark hover:bg-gold-light transition-transform transform hover:scale-105">
                  About Our Company
                </Button>
              </Link>

              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-maroon-dark">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Business Verticals Section */}
        <section className="py-16 lg:py-24 bg-cream-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-maroon">
                Our Business Verticals
              </h2>
              <p className="mt-2 text-lg text-teal-dark">
                Structured Platforms Designed for Growth and Reliability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <h3 className="text-2xl font-semibold text-maroon mb-4">
                  Khilonjiya Job Portal
                </h3>
                <p className="text-teal-dark leading-relaxed">
                  A structured employment platform focused on connecting job seekers 
                  with verified employers across multiple industries. We aim to 
                  simplify hiring while promoting transparent and responsible recruitment practices.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <h3 className="text-2xl font-semibold text-maroon mb-4">
                  Khilonjiya Construction Services
                </h3>
                <p className="text-teal-dark leading-relaxed">
                  A professional service coordination platform that connects customers 
                  with skilled construction service providers across various categories, 
                  ensuring structured and reliable project facilitation.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="bg-cream-200 py-16 lg:py-24">
          <div className="container mx-auto px-6 text-center">
             <h2 className="text-3xl md:text-4xl font-bold font-serif text-maroon">
                About Khilonjiya India Private Limited
             </h2>
             <p className="mt-4 max-w-3xl mx-auto text-lg text-teal-dark leading-relaxed">
                Incorporated under the Companies Act, 2013 (CIN: U41001AS2025PTC028831), 
                Khilonjiya India Private Limited is committed to employment generation 
                and structured service ecosystem development. Our objective is to 
                contribute to regional and national growth through responsible business practices.
             </p>

             <Link to="/why-choose-khilonjiya">
                <Button variant="outline" className="mt-8 border-maroon text-maroon hover:bg-maroon hover:text-white">
                    Why Choose Khilonjiya
                </Button>
             </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
