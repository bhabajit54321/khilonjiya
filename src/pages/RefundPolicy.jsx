import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>Refund & Cancellation Policy | Khilonjiya India Private Limited</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold traditional-text mb-8">
            Refund & Cancellation Policy
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. General Policy</h2>
              <p>
                Khilonjiya India Private Limited provides digital platform services.
                Refund eligibility depends on the type of service purchased.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Subscriptions</h2>
              <p>
                If subscriptions are purchased via Google Play, refunds are governed
                by Google Play’s refund policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Employer Listings</h2>
              <p>
                Once a job listing is published or promoted, cancellation or refund
                may not be applicable unless required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Technical Errors</h2>
              <p>
                In case of duplicate payments or technical issues, users may contact
                support for review and resolution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Contact for Refund Requests</h2>
              <p>
                Email: khilonjiyaindiaprivatelimited@gmail.com<br/>
                Phone: +91 6003170583
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
