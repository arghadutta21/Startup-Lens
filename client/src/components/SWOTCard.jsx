import React from 'react';

const SWOTCard = ({ title, items, colorClass }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <h3 className={`text-lg font-semibold mb-3 ${colorClass}`}>{title}</h3>
      <ul className="list-disc pl-5 space-y-1">
        {items?.map((item, index) => (
          <li key={index} className="text-gray-700 text-sm">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SWOTCard;
