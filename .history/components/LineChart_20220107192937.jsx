import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
const LineChart = ({ sparkline }) => {
  const data = {
    labels: ['1', '2', '3', '5', '6', '7'],
    datasets: [
      {
        label: 'Price in AUD',
        data: sparkline,
        fill: false,
        borderColor: 'blue',
        tension: 0.1,
        borderWidth: 0.1,
        pointBorderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 4,
      },
    ],
  };
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
