import React from 'react';
import Chart from 'chart.js';

const Graph = (props) => {

  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: props.labels,
      datasets: [{
        label: 'Stock trend data',
        data: props.data,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  return (
    <div>Powered by CoinDesk</div>
  )
}

export default Graph;