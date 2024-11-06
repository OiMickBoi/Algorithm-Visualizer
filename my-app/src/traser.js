import Chart, { Colors } from 'chart.js/auto';
// import Colors from 'chart.js';
import { bubbleSort } from './algs/sort';

const col = [0, 1, 2, 3, 4, 5, 6];
let globalData = [10, 20, 15, 25, 22, 30, 28];

let myChart;

// Chart.defaults.backgroundColor = 'red';
// Chart.defaults.borderColor = '#36A2EB';
// Chart.defaults.color = '#000';

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
            // label: 'Acquisitions by year',
            // data: globalData.map(row => row.count)
            // backgroundColor: ['rgba(0, 0, 0, 0.1)',  // 0
            //                   'rgba(0, 0, 0, 0.1)',  // 1
            //                   'rgba(0, 0, 0, 0.1)',  // 2 
            //                   'rgba(0, 0, 0, 0.1)',  // 3 
            //                   'rgba(0, 0, 0, 0.1)',  // 4
            //                   'rgba(0, 0, 0, 0.1)',  // 5 
            //                   'rgba(0, 0, 0, 0.1)'], // 6

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
            // borderColor: '#36A2EB',
            // backgroundColor: '#9BD0F5'

          }
        ]
      }
    }
  );
})();

// Chart.register(Colors);

export function update(newData, chart) {
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(newData);
  });
  chart.update();
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function iterateStates(states, currentData, chart, label) {
  try {
    console.log("Start");
    await delay(2000);
    console.log("After 2 seconds");
  } catch (error) {
    console.log("Operation cancelled", error);
  }
}

document.getElementById('myButton').addEventListener('click', () =>{
    globalData = bubbleSort(globalData);
    // update(globalData, myChart, col);
    update(globalData, myChart);
})
