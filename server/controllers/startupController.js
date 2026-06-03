const Startup = require('../models/Startup');
const geminiService = require('../services/geminiService');

exports.submitStartup = async (req, res) => {
  try {
    const { name, description, industry, targetAudience, revenueModel, competitors } = req.body;
    
    // Create new Startup
    const startup = new Startup({
      name, description, industry, targetAudience, revenueModel, competitors
    });
    
    // Call Gemini API to analyze
    const analysis = await geminiService.analyzeStartup(startup);
    startup.analysisResult = analysis;
    
    await startup.save();
    
    res.status(201).json({ success: true, startup });
  } catch (error) {
    console.error('Error submitting startup:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.getStartupDetails = async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id);
    if (!startup) {
      return res.status(404).json({ success: false, message: 'Startup not found' });
    }
    res.json({ success: true, startup });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
