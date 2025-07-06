
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>Privacy Policy - Khilonjiya.com</title>
        <meta name="description" content="Privacy Policy for Khilonjiya.com - Learn how we protect and handle your personal information when you shop for authentic Assamese cultural items." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold traditional-text mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="bg-white rounded-2xl shadow-lg p-8 cultural-shadow space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At Khilonjiya.com, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create an account or make a purchase</li>
                  <li>Contact us through our website or WhatsApp</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p>
                  This information may include your name, email address, phone number, shipping address, and payment information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your purchases</li>
                  <li>Provide customer support</li>
                  <li>Send you promotional materials (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To trusted service providers who assist us in operating our website and conducting business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device 
                  that help us remember your preferences and improve our services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
              <div className="space-y-4 text-gray-600">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Children's Privacy</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to This Policy</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-none space-y-2 ml-4">
                  <li><strong>Email:</strong> info@khilonjiya.com</li>
                  <li><strong>Phone:</strong> +91 6003170583</li>
                  <li><strong>WhatsApp:</strong> +91 6003170583</li>
                </ul>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
