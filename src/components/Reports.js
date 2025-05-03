import React, { useState } from 'react';
import './Reports.css';

// Sample PDF Data
const pdfs = [
  { title: 'ISRO SDSC Industry Visit', src: 'Report_SDSC.pdf' },
  { title: 'IASF 2024', src: 'Report_IASF24.pdf' },
  { title: 'Kaalnirnay - Report', src: 'Report_Kaalnirnay.pdf' },
  { title: 'Nextgen Entrepreneurship', src: 'Report_Amit.pdf' },
  { title: 'Through the Eyes of You(th)!', src: 'Report_SDG.pdf' },
  { title: 'PBL Seminar', src: 'Report_PBL.pdf' },
  { title: 'Raichur Industry Visit', src: 'Report_YTPS.pdf' },
  { title: 'Success is Knowing Thyself', src: 'Report_Geetha.pdf' },
  { title: 'Environment Day 2023', src: 'Report_Env.pdf' },
  { title: 'SPARK Inauguration', src: 'Report_Inauguration.pdf' },
  { title: 'IASF 2023', src: 'Report_IASF23.pdf' },
];

const Reports = () => {
  const [visibleReports, setVisibleReports] = useState(6);
  const [expandedReport, setExpandedReport] = useState(null);

  const handleLoadMore = () => {
    setVisibleReports(prev => Math.min(prev + 6, pdfs.length));
  };

  const handleReportClick = (report) => {
    setExpandedReport(report);
  };

  const handleClosePopup = () => {
    setExpandedReport(null);
  };

  return (
    <div className="reports-container">
      <h1 className="reports-heading">SPARK Reports</h1>
      <div className="reports-grid">
        {pdfs.slice(0, visibleReports).map((pdf, index) => (
          <div 
            key={index} 
            className="report-card"
            onClick={() => handleReportClick(pdf)}
          >
            <div className="report-icon">
              <i className="fas fa-file-pdf"></i>
            </div>
            <h2 className="report-title">{pdf.title}</h2>
          </div>
        ))}
      </div>
      {visibleReports < pdfs.length && (
        <button 
          className="load-more"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
      {expandedReport && (
        <div className="report-popup">
          <div className="popup-content">
            <button className="close-popup" onClick={handleClosePopup}>Close</button>
            <h2 className="popup-title">{expandedReport.title}</h2>
            <iframe
              src={`${expandedReport.src}#toolbar=0`}
              title={expandedReport.title}
              className="report-iframe"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;