const Startup = require('../models/Startup');

exports.getDashboardData = async (req, res) => {
  try {
    const startups = await Startup.find().sort({ createdAt: -1 }).select('name industry analysisResult.score createdAt');
    res.json({ success: true, startups });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
