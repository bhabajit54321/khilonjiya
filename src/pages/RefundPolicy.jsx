
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>Refund Policy - Khilonjiya.com</title>
        <meta name="description" content="Refund Policy for Khilonjiya.com - Learn about our return and refund process for authentic Assamese cultural items." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold traditional-text mb-8">Refund Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="bg-white rounded-2xl shadow-lg p-8 cultural-shadow space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Return Window</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We offer a <strong>7-day return window</strong> from the date of delivery for most items. 
                  This allows you sufficient time to inspect your authentic Assamese cultural items and ensure 
                  they meet your expectations.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Eligible Items for Return</h2>
              <div className="space-y-4 text-gray-600">
                <p>Items eligible for return must meet the following conditions:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Items must be unused and in original condition</li>
                  <li>Original packaging and tags must be intact</li>
                  <li>Items must not show signs of wear or damage</li>
                  <li>All accessories and documentation must be included</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Non-Returnable Items</h2>
              <div className="space-y-4 text-gray-600">
                <p>The following items cannot be returned:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Custom-made or personalized items</li>
                  <li>Items damaged by misuse or normal wear</li>
                  <li>Items returned after the 7-day window</li>
                  <li>Items without original packaging or tags</li>
                  <li>Intimate apparel or undergarments</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Return Process</h2>
              <div className="space-y-4 text-gray-600">
                <p>To initiate a return, please follow these steps:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Contact us via WhatsApp at +91 6003170583 within 7 days of delivery</li>
                  <li>Provide your order number and reason for return</li>
                  <li>Send clear photos of the item and packaging</li>
                  <li>Wait for return authorization and instructions</li>
                  <li>Package the item securely with all original materials</li>
                  <li>Ship the item using the provided return label</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Refund Processing</h2>
              <div className="space-y-4 text-gray-600">
                <p>Once we receive and inspect your returned item:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Inspection will be completed within 2-3 business days</li>
                  <li>You will be notified of the inspection results via WhatsApp</li>
                  <li>Approved refunds will be processed within 5-7 business days</li>
                  <li>Refunds will be issued to the original payment method</li>
                  <li>You will receive a refund confirmation message</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Shipping Costs</h2>
              <div className="space-y-4 text-gray-600">
                <p>Shipping cost policies for returns:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Defective items:</strong> We cover return shipping costs</li>
                  <li><strong>Wrong item sent:</strong> We cover return shipping costs</li>
                  <li><strong>Change of mind:</strong> Customer covers return shipping costs</li>
                  <li><strong>Size/fit issues:</strong> Customer covers return shipping costs</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Exchanges</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We offer exchanges for size or color variations when available. Exchange requests 
                  must be made within the same 7-day window and follow the same process as returns. 
                  Additional shipping charges may apply for exchanges.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Damaged or Defective Items</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  If you receive a damaged or defective item:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact us immediately via WhatsApp</li>
                  <li>Provide photos of the damage or defect</li>
                  <li>We will arrange for immediate replacement or full refund</li>
                  <li>No return shipping required for our error</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Partial Refunds</h2>
              <div className="space-y-4 text-gray-600">
                <p>Partial refunds may be granted for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Items with minor defects that don't affect functionality</li>
                  <li>Items returned without original packaging</li>
                  <li>Items showing signs of use beyond inspection</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact for Returns</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  For all return and refund inquiries, please contact us:
                </p>
                <ul className="list-none space-y-2 ml-4">
                  <li><strong>WhatsApp:</strong> +91 6003170583 (Preferred method)</li>
                  <li><strong>Phone:</strong> +91 6003170583</li>
                  <li><strong>Email:</strong> info@khilonjiya.com</li>
                </ul>
                <p className="mt-4">
                  Our customer service team is available Monday to Friday, 9:00 AM to 6:00 PM IST, 
                  and Saturday 10:00 AM to 4:00 PM IST.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
