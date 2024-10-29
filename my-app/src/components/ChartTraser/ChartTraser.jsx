import { useState } from 'react'
import './ChartTraser.module.css'
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement, 
  LineElement
} from 'chart.js';

ChartJS.register (
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export const ChartTraser = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun',],
    datasets: [{
      data: [10, 20, 30, 40, 50, 50, -10],
      borderColor: 'red'
    }]
  };

  return (
    <div style={{width: '500px' }}>
      <Line data={data} />

    </div>

  );
};

export default ChartTraser;

