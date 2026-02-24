import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Menu = () => {

  const services = [
    {
      name: 'Job Listings & Recruitment Support',
      description: 'Structured platform enabling employers to post opportunities and job seekers to explore verified openings.',
      link: '/about'
    },
    {
      name: 'Employer Registration & Verification',
      description: 'Professional onboarding and verification process for employers to ensure responsible hiring practices.',
      link: '/why-choose-khilonjiya'
    },
    {
      name: 'Construction Service Coordination',
      description: 'Facilitating connections between customers and skilled professionals across construction categories.',
      link: '/about'
    },
    {
      name: 'Business & General Inquiries',
      description: 'Official communication channel for partnerships, support, and operational inquiries.',
      link: '/contact'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>Our Services | Khilonjiya India Private Limited</title>
        <meta 
          name="description" 
          content="Explore the services offered by Khilonjiya India Private Limited including Job Portal operations and Construction Service coordination." 
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold traditional-text mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured solutions designed to support employment generation and professional service coordination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 hover-lift cultural-shadow text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.name}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <Button className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Menu;
