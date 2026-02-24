import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const DataDeletionPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>Account & Data Deletion | Khilonjiya India Private Limited</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold traditional-text mb-8">
            Account & Data Deletion Policy
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. How to Request Deletion</h2>
              <p>
                Users may request deletion of their account and associated personal
                data by emailing:
                <br/>
                <strong>khilonjiyaindiaprivatelimited@gmail.com</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. What Happens After Request</h2>
              <p>
                Upon verification, we will permanently delete your account data
                within a reasonable period, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Data Retention Exceptions</h2>
              <p>
                Certain transaction or compliance records may be retained
                as required by applicable regulations.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataDeletionPolicy;
