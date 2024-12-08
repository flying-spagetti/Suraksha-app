'use client';

import React from 'react';
import { ShieldExclamationIcon, PhoneIcon, LifebuoyIcon } from '@heroicons/react/24/solid';

const EmergencyGuide: React.FC = () => {
  const emergencyActions = [
    {
      icon: <ShieldExclamationIcon className="w-10 h-10 text-red-600 mb-2" />,
      title: 'Immediate Danger',
      description: 'Call 112 or contact your local police station immediately if you are in immediate danger.',
    },
    {
      icon: <PhoneIcon className="w-10 h-10 text-blue-600 mb-2" />,
      title: 'Helpline Numbers',
      description: 'National Helpline: 1091 | Women’s Helpline: 181 | Child Helpline: 1098.',
    },
    {
      icon: <LifebuoyIcon className="w-10 h-10 text-green-600 mb-2" />,
      title: 'Counseling Support',
      description: 'Connect with a counselor for immediate emotional support and guidance.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 font-roboto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Emergency Guide</h1>
        <p className="text-lg text-gray-700 mb-8">
          Find immediate help and resources to deal with emergencies effectively.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {emergencyActions.map((action, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
          >
            {action.icon}
            <h3 className="text-xl font-bold mb-2">{action.title}</h3>
            <p className="text-gray-600">{action.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 py-16 mt-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Plan Your Safety</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Preparing for emergencies can save lives. Follow these steps to create a personal safety
            plan.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Create a Personal Safety Plan</h3>
            <p className="text-gray-600">
              Identify safe spaces, emergency contacts, and pack essential items like documents,
              medications, and a small amount of cash.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Set Up Emergency Alerts</h3>
            <p className="text-gray-600">
              Share your location with trusted contacts and keep your phone charged at all times.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Emergency Contacts</h3>
          <p className="text-lg mb-4">
            Save these numbers and share them with your loved ones.
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>National Helpline: 1091</li>
            <li>Women’s Helpline: 181</li>
            <li>Child Helpline: 1098</li>
            <li>Local Police Station: 112</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmergencyGuide;
