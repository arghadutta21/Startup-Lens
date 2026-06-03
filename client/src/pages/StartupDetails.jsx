import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getStartupDetails } from '../services/api';
import ScoreCard from '../components/ScoreCard';
import SWOTCard from '../components/SWOTCard';
import RecommendationCard from '../components/RecommendationCard';

const StartupDetails = () => {
  const { id } = useParams();
  const [startup, setStartup] = useState(null);

  useEffect(() => {
    getStartupDetails(id).then(data => {
      if(data.success) setStartup(data.startup);
    }).catch(console.error);
  }, [id]);

  if (!startup) return <div className="p-10 text-center">Loading analysis...</div>;

  const analysis = startup.analysisResult || {};

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{startup.name}</h2>
          <p className="text-gray-500 mt-1">{startup.industry} | Target: {startup.targetAudience}</p>
        </div>
        <a href={`http://localhost:5000/api/reports/${startup._id}/pdf`} target="_blank" rel="noreferrer" className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-md hover:bg-indigo-100 font-medium">
          Download PDF Report
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ScoreCard score={analysis.score || 0} />
          <div className="mt-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-700 mb-2">Executive Summary</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{analysis.summary}</p>
          </div>
        </div>
        
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <SWOTCard title="Strengths" items={analysis.strengths} colorClass="text-green-600" />
          <SWOTCard title="Weaknesses" items={analysis.weaknesses} colorClass="text-red-600" />
          <SWOTCard title="Opportunities" items={analysis.opportunities} colorClass="text-blue-600" />
          <SWOTCard title="Threats" items={analysis.threats} colorClass="text-yellow-600" />
        </div>
      </div>

      <RecommendationCard recommendations={analysis.recommendations} />
    </div>
  );
};

export default StartupDetails;
