import React from 'react';
import { Bike, Compass, CheckCircle } from 'lucide-react';
import MotorcycleTypes from './MotorcycleTypes';

interface HomePageProps {
  onStartQuiz: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartQuiz }) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-blue-600 mb-6 flex items-center justify-center">
        <Bike className="mr-3" size={48} />
        Your Perfect Motorcycle
        <Compass className="ml-3" size={48} />
      </h1>
      <p className="text-2xl text-gray-700 mb-8">Discover the ideal ride tailored to your style and needs</p>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Use Our Motorcycle Finder?</h2>
        <ul className="text-left">
          {[
            'Personalized recommendations based on your preferences',
            'Expert insights on various motorcycle models',
            'Save time researching - we do the hard work for you',
            'Discover bikes you might have overlooked',
            'Compare different styles and find your perfect match',
          ].map((item, index) => (
            <li key={index} className="flex items-center mb-3">
              <CheckCircle className="text-green-500 mr-2" size={24} />
              <span className="text-lg text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <MotorcycleTypes />
      
      <div className="mt-8 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Find Your Perfect Ride</h2>
        <p className="text-xl text-gray-700 mb-6">
          Ready to discover the motorcycle that's perfect for you? Our quick quiz will help you narrow down your options based on your riding style, experience, and preferences.
        </p>
        <button
          onClick={onStartQuiz}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Start Your Motorcycle Journey
        </button>
      </div>
      
      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Expert Tips for Choosing Your Motorcycle</h2>
        <ul className="text-left list-disc list-inside">
          <li className="mb-2">Consider your riding experience and skill level</li>
          <li className="mb-2">Think about where and how often you'll be riding</li>
          <li className="mb-2">Factor in maintenance costs and fuel efficiency</li>
          <li className="mb-2">Don't forget about comfort for long rides</li>
          <li className="mb-2">Test ride different models before making a decision</li>
        </ul>
      </div>
      
      <p className="mt-6 text-gray-600">
        Remember, the perfect motorcycle is out there waiting for you. Let's find it together!
      </p>
    </div>
  );
};

export default HomePage;