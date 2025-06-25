import React from 'react';
import '../styles/fact-solution-box.css';

const FactSolutionBox = ({
  variant,
  factTitle = 'Did you know?',
  factIcon = '🔹',
  factText,
  factSource,
  solutionTitle = 'Solution',
  solutionIcon = '✅',
  solutionDesc
}) => (
  <div className={`fact-solution-box${variant === 'didyouknow' ? ' didyouknow-hover' : ''}`}>
    <div className="fact-section">
      <span className="fact-badge">{factTitle}</span>
      <div className="fact-content">
        <span className="fact-icon">{factIcon}</span>
        <span className="fact-text">{factText}</span>
      </div>
      <div className="fact-source">{factSource}</div>
    </div>
    <div className="solution-section">
      <span className="solution-badge">{solutionTitle}</span>
      <div className="solution-content">
        <span className="solution-icon">{solutionIcon}</span>
        <span className="solution-title">{solutionTitle}</span>
        <span className="solution-desc">{solutionDesc}</span>
      </div>
    </div>
  </div>
);

export default FactSolutionBox;
