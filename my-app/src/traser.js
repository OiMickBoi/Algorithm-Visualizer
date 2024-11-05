import Chart from 'chart.js/auto'
import { bubbleSort } from './algs/sort';

const col = [0, 1, 2, 3, 4, 5, 6];
let globalData = [10, 20, 15, 25, 22, 30, 28];

let myChart;

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
            data: globalData
          }
        ]
      }
    }
  );
})();

function addData(chart, label, newData) {
  chart.data.datasets
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(newData);
  });
  chart.update();
}

function removeData(chart) {
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
  });
  chart.update();
}

export function update(chart, label, newData) {
  removeData(chart);
  addData(data, label, newData);
}

document.getElementById('myButton').addEventListener('click', () =>{
    globalData = bubbleSort(globalData);
    update(myChart, col, globalData);
})