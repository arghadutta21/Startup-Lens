import React from 'react';

const RecommendationCard = ({ recommendations }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-semibold text-indigo-700 mb-4">Key Recommendations</h3>
      <div className="space-y-3">
        {recommendations?.map((rec, index) => (
          <div key={index} className="flex flex-row items-start p-3 bg-indigo-50 rounded-md">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-200 text-indigo-800 text-sm font-bold mr-3">{index + 1}</span>
            <p className="text-gray-800">{rec}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationCard;
