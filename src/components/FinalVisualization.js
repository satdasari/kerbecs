import React from 'react';

const FinalVisualization = ({ monthsRemaining, effectiveMonths }) => {
  const monthsToFill = monthsRemaining - effectiveMonths;

  const renderMonth = (monthIndex) => {
    let className = 'month-circle';
    if (monthIndex < monthsToFill) {
      className += ' filled';
    }

    return (
      <div key={monthIndex} className={className}>
        <span className="month-label">{monthIndex + 1}</span>
      </div>
    );
  };

  return (
    <div className="transition-slide">
      <h2>Your Time Left Visualized</h2>
      <div className="final-visualization-container">
        {[...Array(monthsRemaining).keys()].map((monthIndex) => renderMonth(monthIndex))}
      </div>
    </div>
  );
};

export default FinalVisualization;
