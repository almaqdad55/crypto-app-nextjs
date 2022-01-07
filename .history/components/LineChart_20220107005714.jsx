import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
const LineChart = () => {
  const data = {
    labels: ['on', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#c07e4b66',
        borderColor: '#070707',
        borderCapStyle: '',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'none',
        pointBorderColor: 'rgba(75,192,192,1)',
        // pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 1,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 1,
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
