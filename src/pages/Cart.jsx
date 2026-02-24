import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Heart, Users, Award, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Cart = () => {

  const highlights = [
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Legally Registered Company",
      description: "Khilonjiya India Private Limited is incorporated under the Companies Act, 2013 with CIN: U41001AS2025PTC028831, ensuring legal compliance and operational transparency."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Verified Employment Ecosystem",
      description: "Our Job Portal focuses on connecting genuine employers with job seekers through a structured and responsible platform."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Professional Service Coordination",
      description: "Khilonjiya Construction Services connects customers with skilled professionals across various construction categories."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Regional Focus with National Vision",
      description: "We are committed to strengthening employment and service infrastructure in Assam while expanding responsibly across India."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>Why Choose Khilonjiya | Khilonjiya India Private Limited</title>
        <meta 
          name="description" 
          content="Discover why Khilonjiya India Private Limited is a trusted platform for employment solutions and construction service coordination." 
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold traditional-text mb-4">
            Why Choose Khilonjiya
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A trusted and structured platform focused on employment generation 
            and construction service coordination.
          </p>
        </motion.div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center cultural-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-red-500 text-white rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 cultural-shadow"
        >
          <h2 className="text-3xl font-bold traditional-text mb-6 text-center">
            Our Commitment
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Khilonjiya India Private Limited operates with a clear objective —
              to create structured opportunities in employment and organized
              service coordination. We maintain responsible operational standards
              and transparent business practices.
            </p>

            <p>
              Through Khilonjiya Job Portal, we aim to simplify recruitment by
              enabling meaningful connections between job seekers and employers
              across industries.
            </p>

            <p>
              Through Khilonjiya Construction Services, we facilitate coordination
              between customers and verified service providers for various
              construction-related requirements.
            </p>

            <p>
              Our approach focuses on reliability, compliance, and long-term
              ecosystem development rather than short-term transactions.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link to="/about">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Cart;
