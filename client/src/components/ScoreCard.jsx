import React from 'react';

const ScoreCard = ({ score }) => {
  const getColor = (s) => {
    if (s >= 80) return 'text-green-500';
    if (s >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center">
      <h3 className="text-lg font-medium text-gray-500">Lens Score</h3>
      <div className={`text-6xl font-bold mt-4 ${getColor(score)}`}>
        {score}
      </div>
      <p className="mt-2 text-sm text-gray-400">out of 100</p>
    </div>
  );
};

export default ScoreCard;
