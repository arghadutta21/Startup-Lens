import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
        Evaluate your Startup Idea in <span className="text-indigo-600">Seconds</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-10">
        StartupLens Lite uses AI to automatically analyze your business idea, generate a viability score, identify strengths and weaknesses, and provide actionable recommendations.
      </p>
      <Link to="/submit" className="px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-lg transition-transform transform hover:-translate-y-1">
        Start Health Check
      </Link>
    </div>
  );
};

export default Home;
