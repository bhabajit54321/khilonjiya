
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>Shipping Policy - Khilonjiya.com</title>
        <meta name="description" content="Shipping Policy for Khilonjiya.com - Learn about our delivery options, shipping costs, and timelines for authentic Assamese cultural items." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold traditional-text mb-8">Shipping Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="bg-white rounded-2xl shadow-lg p-8 cultural-shadow space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Shipping Coverage</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We currently ship authentic Assamese cultural items across India. International shipping 
                  may be available for select items - please contact us via WhatsApp for international 
                  shipping inquiries.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Processing Time</h2>
              <div className="space-y-4 text-gray-600">
                <p>Order processing times vary based on item type:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Ready-to-ship items:</strong> 1-2 business days</li>
                  <li><strong>Made-to-order items:</strong> 5-10 business days</li>
                  <li><strong>Custom items:</strong> 10-15 business days</li>
                  <li><strong>Handcrafted specialties:</strong> 15-21 business days</li>
                </ul>
                <p>
                  Processing time begins after order confirmation and payment verification via WhatsApp.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Shipping Methods & Delivery Times</h2>
              <div className="space-y-4 text-gray-600">
                <p>We offer multiple shipping options:</p>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Standard Shipping (Free for orders above ₹2000)</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Metro cities: 3-5 business days</li>
                    <li>Tier 2 cities: 5-7 business days</li>
                    <li>Tier 3 cities & rural areas: 7-10 business days</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Express Shipping</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Metro cities: 1-2 business days</li>
                    <li>Major cities: 2-3 business days</li>
                    <li>Additional charges apply</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Shipping Costs</h2>
              <div className="space-y-4 text-gray-600">
                <p>Shipping costs are calculated based on:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Order value and weight</li>
                  <li>Delivery location</li>
                  <li>Shipping method selected</li>
                  <li>Item fragility and packaging requirements</li>
                </ul>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Free Shipping Eligibility</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Orders above ₹2000 within India</li>
                    <li>Bulk orders (5+ items)</li>
                    <li>Festival season promotions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Packaging</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We take special care in packaging our cultural items:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Eco-friendly packaging materials</li>
                  <li>Extra protection for delicate items like Mekhela Chador</li>
                  <li>Moisture-resistant packaging for textiles</li>
                  <li>Secure packaging for fragile handicrafts</li>
                  <li>Traditional presentation for gift orders</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Order Tracking</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Once your order is shipped:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You'll receive tracking information via WhatsApp</li>
                  <li>Real-time updates on delivery status</li>
                  <li>SMS notifications for delivery attempts</li>
                  <li>Direct contact with delivery partner when needed</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Delivery Attempts</h2>
              <div className="space-y-4 text-gray-600">
                <p>Our delivery process:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Up to 3 delivery attempts will be made</li>
                  <li>You'll be contacted before each attempt</li>
                  <li>Alternative delivery arrangements can be made</li>
                  <li>Packages may be held at local facility after failed attempts</li>
                  <li>Additional charges may apply for re-delivery</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Special Handling</h2>
              <div className="space-y-4 text-gray-600">
                <p>Certain items require special handling:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Silk Mekhela Chador:</strong> Climate-controlled packaging</li>
                  <li><strong>Japi:</strong> Rigid packaging to maintain shape</li>
                  <li><strong>Jewelry:</strong> Secure, insured shipping</li>
                  <li><strong>Large handicrafts:</strong> White glove delivery available</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Shipping Restrictions</h2>
              <div className="space-y-4 text-gray-600">
                <p>We cannot ship to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>P.O. Box addresses</li>
                  <li>Military APO/FPO addresses</li>
                  <li>Areas with shipping restrictions</li>
                  <li>Locations deemed unsafe by courier partners</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Damaged or Lost Packages</h2>
              <div className="space-y-4 text-gray-600">
                <p>In case of shipping issues:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Report damaged packages within 24 hours of delivery</li>
                  <li>Provide photos of damaged packaging and items</li>
                  <li>Lost packages will be investigated with courier partner</li>
                  <li>Replacement or refund will be provided for confirmed issues</li>
                  <li>Insurance claims will be processed when applicable</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Holiday Shipping</h2>
              <div className="space-y-4 text-gray-600">
                <p>During festival seasons and holidays:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Extended processing times may apply</li>
                  <li>Courier services may have limited operations</li>
                  <li>Plan orders in advance for festival deliveries</li>
                  <li>Special festival packaging available</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact for Shipping Queries</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  For all shipping-related questions:
                </p>
                <ul className="list-none space-y-2 ml-4">
                  <li><strong>WhatsApp:</strong> +91 6003170583 (Preferred method)</li>
                  <li><strong>Phone:</strong> +91 6003170583</li>
                  <li><strong>Email:</strong> info@khilonjiya.com</li>
                </ul>
                <p className="mt-4">
                  Our shipping support team is available Monday to Friday, 9:00 AM to 6:00 PM IST, 
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

export default ShippingPolicy;
