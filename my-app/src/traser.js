import Chart, { Colors } from 'chart.js/auto';
import { bubbleSort, bubbleSortStates } from './algs/sort';

let globalData = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const col = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

            backgroundColor: ['rgba(54, 162, 235, 0.8)',  // 0
                              'rgba(255, 99, 132, 1)',  // 1
                              'rgba(54, 162, 235, 0.8)',  // 2 
                              'rgba(54, 162, 235, 0.8)',  // 3 
                              'rgba(54, 162, 235, 0.8)',  // 4
                              'rgba(54, 162, 235, 0.8)',  // 5 
                              'rgba(54, 162, 235, 0.8)'], // 6

            borderColor: ['rgba(54, 162, 235, 1)',  // 0
                          'rgba(255, 99, 132, 0.2)',  // 1
                          'rgba(255, 99, 132, 0.2)',  // 2 
                          'rgba(255, 99, 132, 0.2)',  // 3 
                          'rgba(255, 99, 132, 0.2)',  // 4
                          'rgba(255, 99, 132, 0.2)',  // 5 
                          'rgba(255, 99, 132, 0.2)'], // 6
            data: globalData
          }
        ]
      }
    }
  );
})();

export function update(newData, chart) {
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

document.getElementById('myButton').addEventListener('click', () =>{
    let states = bubbleSortStates(globalData);
    iterateStates(states, myChart);
})

document.getElementById("input-array").addEventListener('click', () =>{
  alert("hello!"); 
})

