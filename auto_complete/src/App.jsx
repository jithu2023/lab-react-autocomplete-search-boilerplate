import React, { useState } from 'react';
import countryData from '../resources/countryData.json';
import './App.css'

function TextBox() {
  const [val, setVal] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const changeInput = (e) => {
    const inputText = e.target.value;
    setVal(inputText);
    setSuggestions(getSuggestions(inputText));
    setShowSuggestions(true);
  };

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };
  const getSuggestions = (inputText) => {
    return countryData.filter((country) =>
      country.name.toLowerCase().includes(inputText.toLowerCase())
      
    );
  };

  return (
    <div className="main">
      <h1 className="head">Search any country</h1>
      <div className="box">
        <input type="text" onChange={changeInput} onKeyDown={handleEscapeKey}/>
      
      </div>

      {showSuggestions && (
        <ul className="suggestions">
          {suggestions.map((country, index) => (
            <li key={index}>{country.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TextBox;