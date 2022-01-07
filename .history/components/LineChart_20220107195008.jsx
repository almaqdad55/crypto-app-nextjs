import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
const LineChart = ({ sparkline }) => {
  const timeStamp = [];
  const sparklineAud = sparkline.map((x) => x * 1.3);
  console.log(sparklineAud);

  console.log(sparkline);
  for (var i = 1; i <= 100; i++) {
    timeStamp.push(i);
  }
  const data = {
    labels: timeStamp,
    datasets: [
      {
        label: 'Price in AUD',
        data: sparkline,
        fill: false,
        borderColor: 'blue',
        tension: 0.1,
        borderWidth: 0.5,
        pointBorderWidth: 1,
        pointRadius: 0,
        pointHitRadius: 4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
