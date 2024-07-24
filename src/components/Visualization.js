import React from 'react';
import '../styles/styles.css'; // Ensure correct path

const Visualization = ({ monthsLived, monthsRemaining, birthYear, birthMonth, currentYear, currentMonth }) => {
  const totalMonths = monthsLived + monthsRemaining;
  let monthCount = 0;

  const renderYear = (year) => {
    const months = [];
    for (let month = 1; month <= 12; month++) {
      let className = 'month-circle';

      if (year === birthYear && month < birthMonth) {
        className += ' pre-birth';
      } else if (year === currentYear && month === currentMonth) {
        className += ' current';
      } else if ((year < currentYear) || (year === currentYear && month < currentMonth)) {
        className += ' filled';
      }

      months.push(
        <div key={monthCount} className={className}>
          <span className="month-label">{month}</span>
        </div>
      );

      monthCount++;
      if (monthCount >= totalMonths) break;
    }
    return (
      <div key={year} className="year-container">
        <div className="year-label">{year}</div>
        <div className="months-container">
          {months}
        </div>
      </div>
    );
  };

  const years = [];
  for (let year = birthYear; year <= birthYear + 80; year++) {
    years.push(renderYear(year));
    if (monthCount >= totalMonths) break;
  }

  const rows = [];
  for (let i = 0; i < years.length; i += 5) {
    rows.push(years.slice(i, i + 5));
  }

  return (
    <div id="visualization">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row}
        </div>
      ))}
    </div>
  );
};

export default Visualization;
