import Chart, { Colors } from 'chart.js/auto';
import { bubbleSort, bubbleSortStates } from './algs/sort';

// const col = [0, 1, 2, 3, 4, 5, 6];
// let globalData = [10, 20, 15, 25, 22, 30, 28];
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
  // chart.data.datasets.forEach((dataset) => {
  //     dataset.data.push(newData);
  // });
  // chart.update();
  chart.data.datasets[0].data = newData;
  chart.update();
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function iterateStates(states, chart) {
  try {
    // console.log("Start");
    let delayTime = 1000;
    for (const state of states) {
      update(state, chart);
      // console.log(state);
      await delay(delayTime);
    }
    await delay(delayTime);
    // console.log("End");
  } catch (error) {
    console.log("Operation cancelled", error);
  }
}

// let statesArray = [
//   [10, 20, 15, 25, 22, 30, 28],
//   [10, 15, 20, 25, 22, 30, 28],
//   [10, 15, 20, 22, 25, 30, 28],
//   [10, 15, 20, 22, 25, 28, 30],
// ];

let statesArray = [
    [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5],  // Initial array
    [1, 3, 4, 1, 5, 9, 2, 6, 5, 3, 5],  // Swap 3,1
    [1, 3, 1, 4, 5, 9, 2, 6, 5, 3, 5],  // Swap 4,1
    [1, 3, 1, 4, 5, 2, 9, 6, 5, 3, 5],  // Swap 9,2
    [1, 3, 1, 4, 5, 2, 6, 9, 5, 3, 5],  // Swap 9,6
    [1, 3, 1, 4, 5, 2, 6, 5, 9, 3, 5],  // Swap 9,5
    [1, 3, 1, 4, 5, 2, 6, 5, 3, 9, 5],  // Swap 9,3
    [1, 3, 1, 4, 5, 2, 6, 5, 3, 5, 9],  // Swap 9,5
    [1, 1, 3, 4, 5, 2, 6, 5, 3, 5, 9],  // Swap 3,1
    [1, 1, 3, 4, 2, 5, 6, 5, 3, 5, 9],  // Swap 5,2
    [1, 1, 3, 4, 2, 5, 5, 6, 3, 5, 9],  // Swap 6,5
    [1, 1, 3, 4, 2, 5, 5, 3, 6, 5, 9],  // Swap 6,3
    [1, 1, 3, 4, 2, 5, 5, 3, 5, 6, 9],  // Swap 6,5
    [1, 1, 3, 2, 4, 5, 5, 3, 5, 6, 9],  // Swap 4,2
    [1, 1, 3, 2, 4, 5, 3, 5, 5, 6, 9],  // Swap 5,3
    [1, 1, 2, 3, 4, 5, 3, 5, 5, 6, 9],  // Swap 3,2
    [1, 1, 2, 3, 4, 3, 5, 5, 5, 6, 9],  // Swap 5,3
    [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9],  // Swap 4,3
    [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]   // Final sorted array
]; 


document.getElementById('myButton').addEventListener('click', () =>{
    // iterateStates(statesArray, myChart);
    // console.log(statesArray);
    let states = bubbleSortStates(globalData);
    console.log(states == statesArray);
    iterateStates(states, myChart);
})
