
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Heart, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Cultural Preservation",
      description: "We are dedicated to preserving and promoting the rich cultural heritage of Assam through authentic traditional items."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Artisan Support",
      description: "We work directly with skilled artisans, ensuring fair compensation and supporting traditional craftsmanship."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Every product is carefully selected and quality-checked to ensure authenticity and excellence."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Bringing Assamese culture to the world while maintaining our roots and traditional values."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Helmet>
        <title>About Us - Preserving Assamese Heritage | Khilonjiya.com</title>
        <meta name="description" content="Learn about Khilonjiya.com's mission to preserve and promote authentic Assamese cultural heritage through traditional handicrafts, Mekhela Chador, and Japi." />
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
            About Khilonjiya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            "আমাৰ সংস্কৃতি, আমাৰ গৌৰৱ" - Our Culture, Our Pride
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Khilonjiya was born from a deep love and respect for the rich cultural heritage of Assam. 
                The word "Khilonjiya" itself means "indigenous" or "native" in Assamese, reflecting our 
                commitment to preserving and celebrating the authentic traditions of our homeland.
              </p>
              <p>
                Founded with the vision of keeping Assamese culture alive in the modern world, we work 
                closely with traditional artisans who have inherited their skills through generations. 
                Each Mekhela Chador, every Japi, and all our cultural items carry the soul of Assam.
              </p>
              <p>
                Our mission extends beyond commerce – we are cultural ambassadors, ensuring that the 
                beautiful traditions of Assam continue to flourish and reach hearts across the globe.
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
              alt="Traditional Assamese artisans at work"
             src="https://images.unsplash.com/photo-1698768195190-27c6ecf8cc52" />
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
          <h2 className="text-3xl font-bold traditional-text text-center mb-12">Our Values</h2>
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

        {/* Heritage Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg cultural-shadow"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold traditional-text mb-4">The Heritage We Preserve</h2>
            <p className="text-xl text-gray-600">
              Every thread tells a story, every craft carries a legacy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">মেখেলা</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mekhela Chador</h3>
              <p className="text-gray-600">The traditional two-piece garment that embodies the grace and elegance of Assamese women.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">জাপী</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Japi</h3>
              <p className="text-gray-600">The iconic conical hat made from bamboo and palm leaves, a symbol of Assamese identity.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">শিল্প</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Handicrafts</h3>
              <p className="text-gray-600">Traditional crafts that showcase the artistic brilliance of Assamese artisans.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
