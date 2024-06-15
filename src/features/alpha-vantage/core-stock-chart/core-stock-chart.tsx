import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { StockData } from '@/entities/alpha-vantage';

const transformData = (data: StockData) => {
  const timeSeries = data['Time Series'];
  const labels = Object.keys(timeSeries).reverse();
  const openPrices = labels.map(key => parseFloat(timeSeries[key]['1. open']));
  const highPrices = labels.map(key => parseFloat(timeSeries[key]['2. high']));
  const lowPrices = labels.map(key => parseFloat(timeSeries[key]['3. low']));
  const closePrices = labels.map(key =>
    parseFloat(timeSeries[key]['4. close'])
  );

  return {
    labels,
    datasets: [
      {
        label: 'Open',
        data: openPrices,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
      {
        label: 'High',
        data: highPrices,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
      },
      {
        label: 'Low',
        data: lowPrices,
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: false,
      },
      {
        label: 'Close',
        data: closePrices,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
      },
    ],
  };
};

export const CoreStockChart = ({ data }: { data: StockData }) => {
  const chartData = transformData(data);

  return (
    <div>
      <h2>{data['Meta Data']['2. Symbol']} Stock Prices</h2>
      <Line data={chartData} />
    </div>
  );
};
