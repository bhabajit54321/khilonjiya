import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>Our Services | Khilonjiya India Private Limited</title>
        <meta
          name="description"
          content="Explore the services offered by Khilonjiya India Private Limited including Khilonjiya Job Portal and Khilonjiya Construction Services."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold traditional-text mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured platforms designed to support employment generation
            and professional construction service coordination.
          </p>
        </motion.div>

        {/* Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Job Portal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-10 space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Khilonjiya Job Portal
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A structured employment platform connecting job seekers with
              verified employers across multiple industries.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Job listing and application support</li>
              <li>• Employer onboarding and verification</li>
              <li>• Secure communication channels</li>
              <li>• Responsible data management practices</li>
            </ul>

            <Link to="/service/job-portal">
              <Button className="bg-gradient-to-r from-yellow-500 to-red-500 text-white">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Construction Services */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-10 space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Khilonjiya Construction Services
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A professional coordination platform connecting customers
              with skilled construction service providers.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Structured service request system</li>
              <li>• Skilled professional coordination</li>
              <li>• Organized project communication</li>
              <li>• Transparent operational process</li>
            </ul>

            <Link to="/service/construction-services">
              <Button className="bg-gradient-to-r from-yellow-500 to-red-500 text-white">
                Learn More
              </Button>
            </Link>
          </motion.div>

        </div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            Operated by Khilonjiya India Private Limited (CIN: U41001AS2025PTC028831),
            committed to responsible business practices and long-term ecosystem development.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;
