import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const WhyChooseKhilonjiya = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Why Choose Khilonjiya - Khilonjiya India Private Limited</title>
        <meta
          name="description"
          content="Why choose Khilonjiya India Private Limited for job portal and construction service solutions."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h1 className="text-4xl font-bold">
            Why Choose Khilonjiya
          </h1>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">
                Structured Employment Platform
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our job portal is designed to connect job seekers and employers
                efficiently through a structured, transparent, and digital process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">
                Organized Service Coordination
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We provide systematic coordination for construction-related services,
                ensuring reliability and accountability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">
                Compliance & Transparency
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Operated by Khilonjiya India Private Limited, we maintain
                clear policies, compliance standards, and transparent operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">
                Technology Driven
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our platforms are built using modern technology to ensure
                scalability, security, and performance.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseKhilonjiya;
