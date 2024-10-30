import './ChartTraser.module.css'
// import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register (
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

export const ChartTraser = () => {

  const data = {
    labels: [ 'January', 'February','March','April','May' ],
    datasets: [
      {
        label: 'SampleData',
        data: [1, 2, 3, 4, 5, 6],
        borderColor: 'rgba(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        barPercentage: 0.9,
        categoryPercentage: 1.0
      }
    }
  }

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default ChartTraser;

