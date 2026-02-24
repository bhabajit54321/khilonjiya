import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  const lastUpdated = "24 Feb 2026";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>Privacy Policy | Khilonjiya India Private Limited</title>
        <meta 
          name="description" 
          content="Privacy Policy of Khilonjiya India Private Limited for Khilonjiya mobile application including data collection, usage, storage and security practices." 
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold traditional-text mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {lastUpdated}</p>

          <div className="bg-white rounded-2xl shadow-lg p-8 cultural-shadow space-y-10 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Who We Are</h2>
              <p>
                Khilonjiya India Private Limited (CIN: U41001AS2025PTC028831) operates the 
                Khilonjiya mobile application (“App”). This Privacy Policy explains how we 
                collect, use, store, process, and share information when you use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p><strong>A) Account & Profile Information</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li>Full name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>Education, skills, experience, job preferences</li>
              </ul>

              <p className="mt-4"><strong>B) Uploaded Content</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li>Resume</li>
                <li>Profile photo</li>
                <li>Documents or images selected from your device</li>
              </ul>

              <p className="mt-4"><strong>C) Job & App Activity</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li>Jobs viewed, saved, applied</li>
                <li>Employer interactions</li>
              </ul>

              <p className="mt-4"><strong>D) Location Data (Optional)</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li>Approximate or precise location (only if permission granted)</li>
              </ul>

              <p className="mt-4"><strong>E) Device & Technical Data</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li>Device information</li>
                <li>Log data</li>
                <li>Crash reports</li>
                <li>Network information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Permissions We Request</h2>
              <ul className="list-disc list-inside ml-4">
                <li>Internet – to connect to our servers</li>
                <li>Network state – to detect connectivity</li>
                <li>Location (coarse & fine) – to show nearby jobs (optional)</li>
                <li>Camera – to capture profile photo or documents</li>
                <li>Media/Storage – to upload resumes or images</li>
                <li>Phone – to enable direct job-related calls</li>
                <li>SMS – for OTP auto verification (if enabled)</li>
                <li>Boot completed – to enable notification services</li>
                <li>Vibration & wake lock – for notifications</li>
              </ul>
              <p className="mt-4">
                Permissions are requested only when required for specific features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Why We Collect Your Data</h2>
              <ul className="list-disc list-inside ml-4">
                <li>Create and manage your account</li>
                <li>Match you with relevant jobs</li>
                <li>Enable job applications</li>
                <li>Enable employer communication</li>
                <li>Process payments (if applicable)</li>
                <li>Improve app performance and security</li>
                <li>Prevent fraud and misuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Employer Visibility</h2>
              <p>
                When you apply for a job, employers may see your name, contact details,
                skills, experience, resume, and uploaded documents. Employers are
                independent entities and responsible for their own data practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Payments</h2>
              <p>
                Payments, if enabled, may be processed via Google Play Billing or
                third-party providers. We do not store full debit/credit card details.
                Limited transaction information such as order ID or subscription status
                may be retained.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Authentication & Login</h2>
              <ul className="list-disc list-inside ml-4">
                <li>Mobile OTP verification</li>
                <li>Google Sign-In</li>
                <li>Email authentication</li>
              </ul>
              <p className="mt-4">
                If OTP auto-read is enabled, SMS permission is used only to detect
                verification codes and not to read personal messages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Data Storage & Security</h2>
              <p>
                Data is securely stored using Supabase infrastructure with authentication
                controls and role-based access policies. While we follow industry
                standards, no system is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Data Sharing</h2>
              <p>We do not sell personal data. Data may be shared:</p>
              <ul className="list-disc list-inside ml-4">
                <li>With employers when you apply</li>
                <li>With hosting and infrastructure providers</li>
                <li>With payment processors</li>
                <li>When required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Data Retention</h2>
              <p>
                Data is retained while your account is active or as required by law.
                You may request account deletion by contacting support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Notifications</h2>
              <p>
                We may send job alerts, application updates, and service notifications.
                You may disable notifications via device settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Your Rights</h2>
              <ul className="list-disc list-inside ml-4">
                <li>Access and update profile information</li>
                <li>Request account deletion</li>
                <li>Withdraw optional permissions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Children’s Privacy</h2>
              <p>
                The App is not intended for individuals under 18 years of age.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time by revising the
                “Last updated” date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">15. Contact</h2>
              <p>
                For privacy-related questions or data requests:
              </p>
              <ul className="list-none ml-4 mt-2">
                <li><strong>Email:</strong> khilonjiyaindiaprivatelimited@gmail.com</li>
                <li><strong>Phone:</strong> +91 6003170583</li>
              </ul>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
