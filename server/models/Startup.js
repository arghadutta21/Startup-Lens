const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  industry: { type: String, required: true },
  targetAudience: { type: String, required: true },
  revenueModel: { type: String },
  competitors: { type: String },
  analysisResult: {
    score: Number,
    strengths: [String],
    weaknesses: [String],
    opportunities: [String],
    threats: [String],
    recommendations: [String],
    summary: String
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Startup', startupSchema);
