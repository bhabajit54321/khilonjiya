import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceDetail = () => {
  const { id } = useParams();

  const services = {
    "job-portal": {
      title: "Khilonjiya Job Portal",
      description:
        "Khilonjiya Job Portal is a structured employment platform designed to connect job seekers with verified employers across multiple industries.",
      content: `
        Our objective is to simplify recruitment and promote transparent hiring practices.
        
        The platform enables:
        • Job seekers to create profiles and apply for opportunities
        • Employers to post verified job listings
        • Secure and structured communication
        • Responsible data handling and compliance
        
        We aim to strengthen employment infrastructure across Assam and India.
      `
    },
    "construction-services": {
      title: "Khilonjiya Construction Services",
      description:
        "Khilonjiya Construction Services facilitates coordination between customers and skilled professionals across construction categories.",
      content: `
        Our focus is on structured service coordination rather than direct contracting.
        
        The platform supports:
        • Customer service requests
        • Skilled professional connections
        • Organized communication channels
        • Transparent operational processes
        
        We aim to contribute to infrastructure development through responsible service management.
      `
    }
  };

  const service = services[id];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Service not found
          </h2>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>{service.title} | Khilonjiya India Private Limited</title>
        <meta
          name="description"
          content={service.description}
        />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-10 space-y-6"
        >
          <h1 className="text-4xl font-bold traditional-text">
            {service.title}
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            {service.description}
          </p>

          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {service.content}
          </div>

          <div className="pt-6 border-t">
            <p className="text-gray-600">
              Operated by Khilonjiya India Private Limited (CIN: U41001AS2025PTC028831)
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ServiceDetail;
