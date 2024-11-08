import Chart, { Colors } from 'chart.js/auto';
import { bubbleSortStates } from './algs/sort';

// Constants
const DEFAULT_DATA = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const ANIMATION_DELAY = 1000;
const INITIAL_DELAY = 1000;
const CHART_CONFIG = {
  backgroundColor: 'rgba(54, 162, 235, 0.8)',
  borderColor: 'rgba(54, 162, 235, 1)'
};

// State
let myChart = null;

// Utility functions
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const validateInput = (input) => {
  if (!input.trim()) {
    throw new Error('Input cannot be empty');
  }

  const numbers = input.split(',')
    .map(str => str.trim())
    .filter(str => str.length > 0);

  if (numbers.length === 0) {
    throw new Error('No valid numbers found in input');
  }

  if (numbers.length > 100) { // Reasonable limit
    throw new Error('Too many numbers (maximum 100)');
  }

  const parsed = numbers.map(str => {
    const num = parseFloat(str);
    if (isNaN(num)) {
      throw new Error(`Invalid number: ${str}`);
    }
    if (!isFinite(num)) {
      throw new Error(`Number out of range: ${str}`);
    }
    return num;
  });

  return parsed;
};

const createChart = (data) => {
  const ctx = document.getElementById('traser');
  if (!ctx) {
    throw new Error('Canvas element not found');
  }

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Array.from({ length: data.length }, (_, i) => i),
      datasets: [{
        backgroundColor: Array(data.length).fill(CHART_CONFIG.backgroundColor),
        borderColor: Array(data.length).fill(CHART_CONFIG.borderColor),
        data: data
      }]
    },
    options: {
      animation: {
        duration: 500
      },
      scales: {
        x: {
          min: 0,
          ticks: {
            stepSize: 1
          }
        },
        y: {
          beginAtZero: true
        }
      },
      maintainAspectRatio: false,
      responsive: true
    }
  });
};

const updateChart = async (chart, newData) => {
  if (!chart || !Array.isArray(newData)) {
    throw new Error('Invalid chart update parameters');
  }
  
  chart.data.datasets[0].data = [...newData];
  chart.data.labels = Array.from({ length: newData.length }, (_, i) => i);
  chart.options.scales.x.max = newData.length - 1;
  chart.update('none');
};

const iterateStates = async (states, chart) => {
  try {
    for (const state of states) {
      await updateChart(chart, state);
      await delay(ANIMATION_DELAY);
    }
  } catch (error) {
    console.error('Animation error:', error);
    throw error;
  }
};

// Initialize chart
const initializeChart = async () => {
  try {
    myChart = createChart(DEFAULT_DATA);
  } catch (error) {
    console.error('Chart initialization failed:', error);
    throw error;
  }
};

// Event handler
const handleSort = async () => {
  try {
    const input = document.getElementById('input-array');
    if (!input) {
      throw new Error('Input element not found');
    }

    const inputData = validateInput(input.value);
    const states = bubbleSortStates(inputData);

   
    await updateChart(myChart, inputData);
    await delay(INITIAL_DELAY);
    await iterateStates(states, myChart);
    
  } catch (error) {
    console.error('Sorting failed:', error);
    alert(`Error: ${error.message}`);
  }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  try {
    Chart.register(Colors);
    initializeChart();
    
    const sortButton = document.getElementById('myButton');
    if (!sortButton) {
      throw new Error('Sort button not found');
    }
    
    sortButton.addEventListener('click', handleSort);
  } catch (error) {
    console.error('Initialization failed:', error);
    alert('Failed to initialize application');
  }
});
