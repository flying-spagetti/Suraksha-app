'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { AlertTriangle, X, ChevronRight, UserPlus, PhoneCall, MessageCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SafetySupportIntake = () => {
  const [isClient, setIsClient] = useState(false);
  const [stage, setStage] = useState('initial');
  const [supportType, setSupportType] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderStage = () => {
    if (!isClient) return null;

    switch (stage) {
      case 'initial':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-slate-800 text-center">
              Welcome to Suraksha
            </h2>
            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStage('victim')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                <AlertTriangle className="w-5 h-5" /> Seeking Help
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStage('support')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
              >
                <UserPlus className="w-5 h-5" /> Supporting Someone
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/homepage')}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
              >
                I'm a Visitor
              </motion.button>
            </div>
          </motion.div>
        );

      case 'support':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-slate-800 text-center">
              How Would You Like to Support?
            </h2>
            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSupportType('direct');
                  setStage('support-details');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" /> Direct Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSupportType('resources');
                  setStage('support-details');
                }}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Share Resources
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStage('initial')}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
              >
                Back
              </motion.button>
            </div>
          </motion.div>
        );

      case 'support-details':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-slate-800 text-center">
              {supportType === 'direct' 
                ? 'Direct Support Details' 
                : 'Resource Sharing Information'}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  {supportType === 'direct' ? 'Your Relationship' : 'Resource Type'}
                </label>
                <select className="w-full px-3 py-2 border rounded-lg" title="Select Relationship or Resource Category">
                  <option>
                    {supportType === 'direct' 
                      ? 'Select Relationship' 
                      : 'Select Resource Category'}
                  </option>
                  {supportType === 'direct' 
                    ? ['Family', 'Friend', 'Colleague', 'Other']
                    : ['Counseling', 'Legal Aid', 'Shelter', 'Helpline']
                  .map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Additional Notes</label>
                <textarea 
                  className="w-full px-3 py-2 border rounded-lg h-24"
                  placeholder="Provide context or additional information"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Submit Support Request
              </motion.button>
            </form>
          </motion.div>
        );

      case 'victim':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-slate-800 text-center">
              Do you need immediate assistance?
            </h2>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigator.geolocation.getCurrentPosition((position) => {
                    const coordinates = `${position.coords.latitude}, ${position.coords.longitude}`;
                    toast(`Your coordinates are: ${coordinates}`);
                  });
                  setStage('emergency');
                }}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 flex items-center gap-2"
              >
                <AlertTriangle className="w-5 h-5" /> Yes, I Need Help Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStage('counseling')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                I Need Support
              </motion.button>
            </div>
          </motion.div>
        );

      case 'emergency':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-red-100 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              Emergency Protocol Activated
            </h2>
            <div className="mt-6 flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95}}
                onClick={() => window.location.href = 'https://www.google.com'}
                className="bg-white text-red-700 px-4 py-2 rounded border border-red-300 flex items-center gap-2"
              >
                <X className="w-4 h-4" /> Quick Exit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95}}
                onClick={() => router.push('/Consulting')}
                className="bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2"
              >
                Continue to Support <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        );

      case 'counseling':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-slate-800 text-center">
              Confidential Support Intake
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Type of Support Needed
                </label>
                <select className="w-full px-3 py-2 border rounded-lg" title="Select Type of Support Needed">
                  {[
                    'Emotional Support',
                    'Legal Guidance',
                    'Safety Planning',
                    'Counseling Services',
                    'Other'
                  ].map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Brief Description (Optional)
                </label>
                <textarea 
                  className="w-full px-3 py-2 border rounded-lg h-24"
                  placeholder="Share as much or as little as you're comfortable with"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/Consulting')}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Begin Confidential Consultation
              </motion.button>
            </form>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 animate-gradient-x opacity-50 z-0"></div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0.3
            }}
            animate={{ 
              x: [
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight, 
                Math.random() * window.innerHeight, 
                Math.random() * window.innerHeight
              ],
              rotate: 360
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className="absolute w-16 h-16 bg-blue-200/30 rounded-full blur-2xl"
          />
        ))}
      </div>

      <ToastContainer />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 z-10"
      >
 
        {renderStage()}

      </motion.div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(SafetySupportIntake), {
  ssr: false
});