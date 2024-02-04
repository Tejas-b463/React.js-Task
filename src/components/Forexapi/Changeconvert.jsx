import React, { useState, useEffect } from "react";
import { API_KEY } from "../constant";
import "./change.css";
const Currencyconvert = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const convertCurrency = async () => {
      try {
        const response = await fetch(
          `https://api.forexrateapi.com/v1/convert?api_key=${API_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
        );

        const json = await response.json();

        setConvertedAmount(json.result);
      } catch (error) {
        console.error("Error converting currency:", error.message);
      }
    };

    convertCurrency();
  }, [fromCurrency, toCurrency, amount]);

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>From Currency:</label>
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD</option>
          <option value="JPY">JPY</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <div>
        <label>To Currency:</label>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div className="convert">
        <label>Converted Amount:</label>
        <span>{convertedAmount}</span>
      </div>
    </div>
  );
};

export default Currencyconvert;
