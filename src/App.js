import React, { useState } from 'react';
import LifeExpectancyForm from './components/LifeExpectancyForm';
import Visualization from './components/Visualization';
import TimeLeftCalculation from './components/TimeLeftCalculation';
import './styles/styles.css';

const App = () => {
  const [data, setData] = useState(null);
  const [showTimeLeftCalculation, setShowTimeLeftCalculation] = useState(false);

  const handleFormSubmit = (formData) => {
    const { birthYear, birthMonth } = formData;
    const averageLifeExpectancy = 80; // Average life expectancy in years
    const totalMonthsInLife = averageLifeExpectancy * 12;

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-11

    const monthsLived = (currentYear - birthYear) * 12 + (currentMonth - birthMonth);
    const monthsRemaining = totalMonthsInLife - monthsLived;

    setData({
      monthsLived,
      monthsRemaining,
      birthYear,
      birthMonth,
      currentYear,
      currentMonth
    });
  };

  const handleShowTimeLeftCalculation = () => {
    setShowTimeLeftCalculation(true);
  };

  return (
    <div className="App">
      <h1>Life Expectancy Visualizer</h1>
      <LifeExpectancyForm onSubmit={handleFormSubmit} />
      {data && (
        <>
          <Visualization 
            monthsLived={data.monthsLived} 
            monthsRemaining={data.monthsRemaining} 
            birthYear={data.birthYear} 
            birthMonth={data.birthMonth}
            currentYear={data.currentYear}
            currentMonth={data.currentMonth}
          />
          <button onClick={handleShowTimeLeftCalculation}>Calculate Time Left</button>
          {showTimeLeftCalculation && (
            <TimeLeftCalculation monthsRemaining={data.monthsRemaining} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
