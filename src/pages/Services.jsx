import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Services - Khilonjiya India Private Limited</title>
        <meta
          name="description"
          content="Khilonjiya Job Portal and Khilonjiya Construction Services operated by Khilonjiya India Private Limited."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h1 className="text-4xl font-bold">
            Our Services
          </h1>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">
                Khilonjiya Job Portal
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A structured employment platform connecting job seekers and employers.
                The platform enables job listings, candidate applications,
                and streamlined recruitment processes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">
                Khilonjiya Construction Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A service coordination platform for construction-related work
                including labor services, project coordination, and structured
                service facilitation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
