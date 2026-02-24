import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const ServiceDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Service Details - Khilonjiya India Private Limited</title>
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-6">
            Service Details
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Detailed information about this service will be updated here.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
