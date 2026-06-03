const PDFDocument = require('pdfkit');

exports.buildPdf = (startup) => {
  const doc = new PDFDocument();
  
  // Basic PDF Generation
  doc.fontSize(20).text(`StartupLens Report: ${startup.name}`, { align: 'center' });
  doc.moveDown();
  
  doc.fontSize(14).text(`Industry: ${startup.industry}`);
  doc.text(`Target Audience: ${startup.targetAudience}`);
  doc.moveDown();
  
  doc.fontSize(12).text(`Description: ${startup.description}`);
  doc.moveDown();
  
  if(startup.analysisResult) {
    doc.fontSize(16).text(`Startup Score: ${startup.analysisResult.score}/100`, { underline: true });
    doc.moveDown();
    
    doc.fontSize(14).text('Summary');
    doc.fontSize(12).text(startup.analysisResult.summary);
    doc.moveDown();
  }
  
  return doc;
};
