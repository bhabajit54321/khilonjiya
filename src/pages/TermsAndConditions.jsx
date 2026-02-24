import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const TermsAndConditions = () => {
  const lastUpdated = "24 Feb 2026";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>Terms & Conditions | Khilonjiya India Private Limited</title>
        <meta name="description" content="Terms and Conditions of Khilonjiya India Private Limited governing use of the Khilonjiya mobile application and services." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold traditional-text mb-4">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: {lastUpdated}</p>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Company Information</h2>
              <p>
                Khilonjiya India Private Limited (CIN: U41001AS2025PTC028831)
                operates the Khilonjiya mobile application and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
              <p>
                By accessing or using the App, you agree to comply with these Terms.
                If you do not agree, you must not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <ul className="list-disc list-inside ml-4">
                <li>Provide accurate information</li>
                <li>Do not misuse the platform</li>
                <li>Do not post false or fraudulent content</li>
                <li>Comply with applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Employer Responsibilities</h2>
              <p>
                Employers are responsible for accuracy of job postings,
                compliance with employment laws, and lawful data handling.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Payments & Subscriptions</h2>
              <p>
                Paid features, if enabled, may be processed through Google Play
                or third-party providers. All applicable charges will be displayed
                before confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p>
                We act as a platform facilitator. We are not responsible for
                employer decisions, job outcomes, or service disputes between users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
              <p>
                We may suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Jurisdiction
                shall lie in Assam, India.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
