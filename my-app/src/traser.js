import Chart from 'chart.js/auto'
// import { globalData } from './data';
import { globalData } from '../main';


(async function() {
  const col = [0, 1, 2, 3, 4, 5, 6];


  new Chart(
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