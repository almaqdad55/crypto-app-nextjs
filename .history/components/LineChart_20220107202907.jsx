import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
const LineChart = ({ sparkline }) => {
  const timeStamp = [];
  const sparklineAud = sparkline.map((x) => x * 1.3);
  // console.log(sparklineAud);

  // console.log(sparkline);
  for (var i = 1; i <= 100; i++) {
    timeStamp.push(i);
  }
  function Last7Days() {
    var result = [];
    for (var i = 0; i < 7; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(formatDate(d));
    }

    return result.join(',');
  }
  console.log(Last7Days());
  const data = {
    labels: timeStamp,
    datasets: [
      {
        label: 'Price in AUD',
        data: sparklineAud,
        fill: false,
        borderColor: 'blue',
        tension: 0.5,
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
