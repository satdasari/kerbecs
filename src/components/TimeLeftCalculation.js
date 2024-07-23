import React, { useState } from 'react';
import '../styles/styles.css'; // Ensure correct path

const TimeLeftCalculation = ({ monthsRemaining }) => {
  const [screenTime, setScreenTime] = useState('');
  const [works, setWorks] = useState(false);
  const [timeLeftCircles, setTimeLeftCircles] = useState([]);

  const handleCalculate = () => {
    const dailyScreenTimeFraction = parseFloat(screenTime) / 24;
    const screenTimeMonths = Math.ceil(monthsRemaining * dailyScreenTimeFraction);
    const sleepMonths = Math.ceil(monthsRemaining / 3);
    const workMonths = works ? Math.ceil(monthsRemaining / 4) : 0;

    // Create circles for total remaining months with appropriate colors
    const circles = [];
    for (let i = 1; i <= monthsRemaining; i++) {
      let className = 'month-circle';
      if (i <= sleepMonths) {
        className += ' sleep';
      } else if (i <= sleepMonths + workMonths) {
        className += ' work';
      } else if (i <= sleepMonths + workMonths + screenTimeMonths) {
        className += ' screen-time';
      }
      circles.push(<div key={i} className={className}><span className="month-label">{i}</span></div>);
    }
    setTimeLeftCircles(circles);
  };

  return (
    <div>
      <h2>Calculate Your Effective Time Left</h2>
      <label>
        Average Daily Screen Time (hours):
        <input 
          type="number" 
          value={screenTime} 
          onChange={(e) => setScreenTime(e.target.value)} 
          min="0" 
          max="24" 
          required 
        />
      </label>
      <br />
      <label>
        Do you work?
        <input 
          type="checkbox" 
          checked={works} 
          onChange={(e) => setWorks(e.target.checked)} 
        />
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate Effective Time Left</button>
      <h3>Total Remaining Months:</h3>
      <div className="months-container">
        {timeLeftCircles}
      </div>
    </div>
  );
};

export default TimeLeftCalculation;
