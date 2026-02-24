import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Heart, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Integrity & Transparency",
      description: "We operate with complete transparency in job listings, employer partnerships, and construction service coordination."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Employment Empowerment",
      description: "We are committed to connecting job seekers with verified employers and creating meaningful employment opportunities."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality & Reliability",
      description: "We ensure verified job postings and reliable construction service providers to maintain trust and professional standards."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Regional Growth",
      description: "Focused on empowering Assam and expanding across India by strengthening local employment and service ecosystems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>About Us | Khilonjiya India Private Limited</title>
        <meta 
          name="description" 
          content="Khilonjiya India Private Limited (CIN: U41001AS2025PTC028831) operates Khilonjiya Job Portal and Khilonjiya Construction Services, focused on employment generation and professional construction service coordination across Assam and India." 
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold traditional-text mb-6">
            About Khilonjiya India Private Limited
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CIN: U41001AS2025PTC028831
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Company</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Khilonjiya India Private Limited is a company incorporated under the Companies Act, 
                2013, Government of India (CIN: U41001AS2025PTC028831).
              </p>
              <p>
                The company operates two primary verticals — Khilonjiya Job Portal and 
                Khilonjiya Construction Services — focused on structured employment solutions 
                and professional construction service coordination.
              </p>
              <p>
                Khilonjiya Job Portal is designed to connect job seekers with verified employers 
                across multiple industries, creating a transparent and reliable hiring ecosystem.
              </p>
              <p>
                Khilonjiya Construction Services facilitates coordination between customers 
                and skilled service providers across various construction and infrastructure categories.
              </p>
              <p>
                Our objective is to contribute to employment generation, organized service 
                management, and regional development across Assam and India.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img  
              className="rounded-2xl shadow-2xl w-full h-96 object-cover cultural-shadow" 
              alt="Professional team working on employment and construction services coordination"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full opacity-80"></div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold traditional-text text-center mb-12">Our Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift cultural-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-red-500 text-white rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Verticals Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg cultural-shadow"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold traditional-text mb-4">Our Business Verticals</h2>
            <p className="text-xl text-gray-600">
              Structured Platforms for Employment and Construction Services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">Jobs</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Khilonjiya Job Portal</h3>
              <p className="text-gray-600">
                A structured employment platform enabling job seekers to explore opportunities 
                and employers to connect with suitable candidates across industries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">Build</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Khilonjiya Construction Services</h3>
              <p className="text-gray-600">
                A service coordination platform connecting customers with skilled professionals 
                for construction and infrastructure-related requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
