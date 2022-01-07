import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
const LineChart = () => {
  const data = {
    labels: ['on', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.01,
        backgroundColor: 'white',
        borderColor: '#070707',
        borderCapStyle: '',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'none',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        data: [65, 59, 80, 81, 56, 55, 40],
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
