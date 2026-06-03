import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitStartup } from '../services/api';

const SubmitStartup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    targetAudience: '',
    revenueModel: '',
    competitors: '',
    description: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await submitStartup(formData);
      if(res.success) {
        navigate(`/startup/${res.startup._id}`);
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting idea');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Submit Startup Idea</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Startup Name</label>
            <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g. EcoBox" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
            <input required type="text" name="industry" value={formData.industry} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g. EdTech, SaaS" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
          <input required type="text" name="targetAudience" value={formData.targetAudience} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Who will buy this?" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description / Problem It Solves</label>
          <textarea required name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Describe the core offering..."></textarea>
        </div>

        <button type="submit" disabled={loading} className="w-full justify-center px-4 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:opacity-50">
          {loading ? 'Analyzing with AI...' : 'Analyze Idea'}
        </button>
      </form>
    </div>
  );
};

export default SubmitStartup;
