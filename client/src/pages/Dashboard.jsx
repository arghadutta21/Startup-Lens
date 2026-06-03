import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDashboardData } from '../services/api';

const Dashboard = () => {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    getDashboardData().then(data => {
      if(data.success) setStartups(data.startups);
    }).catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Analyzed Startups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.map(s => (
          <div key={s._id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{s.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${s.analysisResult?.score >= 80 ? 'bg-green-100 text-green-800' : s.analysisResult?.score >= 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                {s.analysisResult ? s.analysisResult.score : 'N/A'}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">{s.industry}</p>
            <Link to={`/startup/${s._id}`} className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">View Analysis &rarr;</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
