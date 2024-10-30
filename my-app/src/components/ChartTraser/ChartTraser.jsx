import './ChartTraser.module.css'
// import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
// import { bubbleSort } from '../../algs/Sort'; TODO find out what is what is wrong with this import
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
  
  const bigBoyData = [ 64, 34, 25, 12, 22, 11, 90];

  const data = {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        label: 'SampleData',
        data: bigBoyData,
        borderColor: 'rgba(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        barPercentage: 0.9,
        categoryPercentage: 1.0
      }
    }
  }

  return (
    <div>
      <button onClick={""}>Advance</button>
      <Bar options={options} data={data} />
    </div>
  );
};

export default ChartTraser;

