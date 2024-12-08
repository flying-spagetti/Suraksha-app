'use client';

import React, { useEffect } from 'react';
import { ShieldCheckIcon, PhoneIcon, ChatBubbleBottomCenterTextIcon, HeartIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import phto from '../../public/mika-baumeister-hPz4ErXqTKQ-unsplash.jpg';

const HomePage: React.FC = () => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        window.location.href = 'https://www.google.com';
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const rights = [
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-teal-500 mb-4" />,
      title: 'Legal Protection',
      description: 'Comprehensive legal safeguards against domestic violence under national legislation.',
    },
    {
      icon: <HeartIcon className="w-12 h-12 text-rose-500 mb-4" />,
      title: 'Emotional Support',
      description: 'Holistic counseling and psychological support for survivors.',
    },
    {
      icon: <ChatBubbleBottomCenterTextIcon className="w-12 h-12 text-indigo-500 mb-4" />,
      title: 'Empowerment Resources',
      description: 'Skill development and economic independence programs.',
    },
  ];

  const lawyers = [
    { name: 'Adv. Neha Sharma', specialization: 'Family Law', contact: '9876543210' },
    { name: 'Adv. Ramesh Gupta', specialization: 'Criminal Law', contact: '1234567890' },
    { name: 'Adv. Priya Menon', specialization: 'Labor and Workplace Rights', contact: '7890123456' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-inter text-gray-900 bg-gray-50">
      <Header />

      {/* Hero Section with Background Image */}
      <div 
        className="relative bg-cover bg-center py-24 px-4 text-white"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1606323516801-54354ac53b16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9tZXN0aWMlMjB2aW9sZW5jZXxlbnwwfHwwfHx8MA%3D%3D)`,
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-white"
          >
            Suraksha: Your Shield, Your Voice
          </motion.h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            A comprehensive platform providing legal, emotional, and economic support for survivors of domestic violence.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/report" 
              className="bg-teal-500 text-white px-8 py-4 rounded-full hover:bg-teal-600 transition transform hover:scale-105 shadow-lg"
            >
              Get Immediate Help
            </a>
            <a 
              href="/resources" 
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition transform hover:scale-105"
            >
              Explore Resources
            </a>
          </div>
        </div>
      </div>

      {/* Rights and Support Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Comprehensive Support Framework</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {rights.map((right, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
              {right.icon}
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{right.title}</h3>
              <p className="text-gray-600">{right.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lawyer Connect Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Connect with Expert Lawyers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {lawyers.map((lawyer, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <PhoneIcon className="w-12 h-12 text-indigo-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{lawyer.name}</h3>
                <p className="text-gray-600 mb-4">{lawyer.specialization}</p>
                <a 
                  href={`tel:${lawyer.contact}`} 
                  className="text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  {lawyer.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Support */}
      <div className="bg-rose-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Emergency Support</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          If you are in immediate danger, please contact emergency services immediately.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="tel:112" 
            className="bg-white text-rose-600 px-8 py-4 rounded-full hover:bg-gray-100 transition transform hover:scale-105"
          >
            Call 112
          </a>
          <a 
            href="/emergency-guide" 
            className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-rose-600 transition transform hover:scale-105"
          >
            Emergency Guide
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;    