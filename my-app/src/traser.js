import Chart from 'chart.js/auto'
import { globalData } from './data';


(async function() {


  new Chart(
    document.getElementById('traser'),
    {
      type: 'bar',
      data: {
        labels: globalData.map(row => row.year),
        datasets: [
          {
            // label: 'Acquisitions by year',
            data: globalData.map(row => row.count)
          }
        ]
      }
    }
  );
})();