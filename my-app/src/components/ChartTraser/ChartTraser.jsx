import { useState } from 'react'
import './ChartTraser.module.css'
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend} from 'chart.js';

ChartJS.register (
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ChartTraser = () => {
  const rawData = [
    {year: 2010, count: 10},
    {year: 2011, count: 20},
    {year: 2012, count: 15},
    {year: 2013, count: 25},
    {year: 2014, count: 22},
    {year: 2015, count: 30},
    {year: 2016, count: 28},
  ];

  const data = {
    labels: rawData.map(row => row.year),
    datasets: [
      {
        label: 'Acqusitions by year', 
        data: rawData.map(row => row.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  }

  return (

    
    <section>

    </section>

  );
};

export default ChartTraser;

