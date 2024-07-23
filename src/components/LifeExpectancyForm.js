import React, { useState } from 'react';

const LifeExpectancyForm = ({ onSubmit }) => {
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ birthYear: parseInt(birthYear), birthMonth: parseInt(birthMonth) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="birth-year">Birth Year:</label>
      <input 
        type="number" 
        id="birth-year" 
        name="birth-year" 
        value={birthYear} 
        onChange={(e) => setBirthYear(e.target.value)} 
        min="1900" 
        max={new Date().getFullYear()} 
        required 
      />

      <label htmlFor="birth-month">Birth Month:</label>
      <select 
        id="birth-month" 
        name="birth-month" 
        value={birthMonth} 
        onChange={(e) => setBirthMonth(e.target.value)} 
        required
      >
        <option value="">Select Month</option>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>

      <button type="submit">Calculate</button>
    </form>
  );
};

export default LifeExpectancyForm;
