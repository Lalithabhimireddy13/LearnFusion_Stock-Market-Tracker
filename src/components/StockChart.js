import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register components
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const StockChart = ({ stockData }) => {
  const dates = Object.keys(stockData['Time Series (Daily)']);
  const prices = dates.map(date => stockData['Time Series (Daily)'][date]['4. close']);

  const data = {
    labels: dates.reverse(), // Reverse dates to show in chronological order
    datasets: [
      {
        label: 'Stock Price',
        data: prices.reverse(), // Reverse prices to match dates
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw}`; // Display price with a dollar sign
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price ($)',
        },
      },
    },
  };

  return (
    <div>
      <h2>Stock Price Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default StockChart;
