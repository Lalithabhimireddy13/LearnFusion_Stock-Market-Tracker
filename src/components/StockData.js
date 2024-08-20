import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StockData.css';

const StockData = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = '9YF4UW6A3W98HU9R';
      const symbol = 'AAPL';
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
      const result = await axios.get(url);
      setStockData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Stock Data</h2>
      {stockData ? (
        <pre>{JSON.stringify(stockData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StockData;
