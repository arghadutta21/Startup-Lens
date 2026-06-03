const Startup = require('../models/Startup');
const pdfGenerator = require('../utils/pdfGenerator');

exports.generateReport = async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id);
    if (!startup) {
      return res.status(404).json({ success: false, message: 'Startup not found' });
    }
    
    const doc = pdfGenerator.buildPdf(startup);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${startup.name.replace(/\\s/g, '_')}_Report.pdf`);
    
    doc.pipe(res);
    doc.end();
  } catch (error) {
    console.error('Error generating report', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
