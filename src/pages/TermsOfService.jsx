
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>Terms of Service - Khilonjiya.com</title>
        <meta name="description" content="Terms of Service for Khilonjiya.com - Read our terms and conditions for purchasing authentic Assamese cultural items." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold traditional-text mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="bg-white rounded-2xl shadow-lg p-8 cultural-shadow space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  By accessing and using Khilonjiya.com, you accept and agree to be bound by the terms and provision 
                  of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Khilonjiya.com is an e-commerce platform specializing in authentic Assamese cultural items including 
                  Mekhela Chador, Japi, traditional accessories, and handicrafts. We connect customers with skilled 
                  artisans and preserve cultural heritage.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Product Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We strive to provide accurate product descriptions, images, and pricing. However:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Colors may vary slightly due to screen settings</li>
                  <li>Handcrafted items may have minor variations</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Product availability is not guaranteed</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Ordering and Payment</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Orders are processed through WhatsApp communication for personalized service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All orders must be confirmed via WhatsApp</li>
                  <li>Payment methods will be communicated during order confirmation</li>
                  <li>We reserve the right to refuse or cancel orders</li>
                  <li>Prices include applicable taxes unless stated otherwise</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Shipping and Delivery</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Shipping terms and conditions:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Delivery times are estimates and not guaranteed</li>
                  <li>Shipping costs will be communicated during order confirmation</li>
                  <li>Risk of loss passes to you upon delivery</li>
                  <li>We are not responsible for delays caused by shipping carriers</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Returns and Exchanges</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Please refer to our Refund Policy for detailed information about returns and exchanges. 
                  Generally, we accept returns within a specified period for unused items in original condition.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. User Conduct</h2>
              <div className="space-y-4 text-gray-600">
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the service for any unlawful purpose</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Intellectual Property</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property 
                  of Khilonjiya.com or its content suppliers and is protected by copyright and other intellectual property laws.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Khilonjiya.com shall not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  These terms shall be governed by and construed in accordance with the laws of India, 
                  without regard to its conflict of law provisions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately 
                  upon posting on the website. Your continued use of the service constitutes acceptance of the modified terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  For questions about these Terms of Service, please contact us:
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

export default TermsOfService;
