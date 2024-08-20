import React from 'react';
import StockData from './components/StockData';
import StockChart from './components/StockChart';
import News from './components/News';

function App() {
  const [stockData, setStockData] = React.useState(null);

  const handleDataFetch = (data) => {
    setStockData(data);
  };

  return (
    <div className="App">
      <h1>Stock Market Tracker</h1>
      <StockData onDataFetch={handleDataFetch} />
      {stockData && <StockChart stockData={stockData} />}
      <News />
    </div>
  );
}

export default App;
