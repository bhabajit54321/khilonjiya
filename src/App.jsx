import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsAndConditions from '@/pages/TermsAndConditions';
import RefundPolicy from '@/pages/RefundPolicy';
import DataDeletionPolicy from '@/pages/DataDeletionPolicy';
import WhyChooseKhilonjiya from '@/pages/WhyChooseKhilonjiya';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Khilonjiya India Private Limited</title>
          <meta
            name="description"
            content="Khilonjiya India Private Limited operates Khilonjiya Job Portal and Khilonjiya Construction Services, focused on employment generation and structured service coordination."
          />
        </Helmet>

        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/why-choose-khilonjiya" element={<WhyChooseKhilonjiya />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/data-deletion-policy" element={<DataDeletionPolicy />} />
          </Routes>
        </main>

        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
