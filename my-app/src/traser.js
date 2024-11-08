import Chart, { Colors } from 'chart.js/auto';
import { bubbleSort, bubbleSortStates } from './algs/sort';

let globalData = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const col = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let col = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myChart;

Chart.register(Colors);
 
(async function() {
  myChart = new Chart(
    document.getElementById('traser'),
    {
      type: 'bar',
      data: {
        // labels: globalData.map(row => row.year),
        labels: col,
        datasets: [
          {

            backgroundColor: Array(globalData.length).fill('rgba(54, 162, 235, 0.8)'),
            borderColor: Array(globalData.length).fill('rgba(54, 162, 235, 1)'),            
            data: globalData
          }
        ]
      }
    }
  );
})();


function update(newData, chart) {
  chart.data.datasets[0].data = newData;
  chart.update();
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function iterateStates(states, chart) {
  try {
    let delayTime = 1000;
    for (const state of states) {
      update(state, chart);
      await delay(delayTime);
    }
    await delay(delayTime);
  } catch (error) {
    console.log("Operation cancelled", error);
  }
}

function readTextBoxValue() {
  const textBox = document.getElementById("input-array");
  return textBox.value;
} 

function getCols(dataArray) {
  return [...Array(dataArray.length).keys()];
}

async function reset(chart, newCol, newData) {
  chart.data.datasets[0].data = newData;
  chart.data.labels = newCol;
  // chart.options.scales.x.min = 0; 
  chart.update();
  await delay(1000);
}

document.getElementById('myButton').addEventListener('click', async () =>{
    let inputString = readTextBoxValue();
    globalData = inputString.split(",").map(num => parseFloat(num));
    col = getCols(globalData);
    console.log(globalData);
    console.log(col);
    await reset(myChart, col, globalData);
    let states = bubbleSortStates(globalData);
    await iterateStates(states, myChart);
})

