const residualData = [{
  x: 3, 
  y: -0.095
}, {
  x: 5, 
  y:-1.401
}, {
  x: 6, 
  y: 2.941
}, {
  x: 7, 
  y: 2.292
}, {
  x: 7,
  y: 0.292
}, {
  x: 7,
  y: -2.708
}, {
  x: 8, 
  y: 0.639
}, {
  x: 8, 
  y: -0.361
}, {
  x: 8, 
  y: -1.361
}, {
  x: 8, 
  y: -2.361
}, {
  x: 9, 
  y: 1.985
}, {
  x: 9, 
  y: 0.985
}, {
  x: 9, 
  y: -0.015
}, {
  x: 9, 
  y: -3.015
}, {
  x: 10, 
  y: 0.332
}]

const xAxis = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const residualCanvas = document.querySelector('#residuals');


const residualChart = new Chart(residualCanvas, {
  type: 'bar',
  data: {
    labels: [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      { 
        type: 'scatter',
        label: "Residuals" ,
        data: residualData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)', 
      }, 
      {
        type:'line',
        label: 'x = 0 ',
        data: xAxis,
        borderColor: 'rgb(54, 162, 235)'
      },
    ]
  }, 
   options: {
    scales: {
      y: {
        title: {
          display: true,
          text: "Residual Values"
        }
      },
      x:{
        title: {
          display: true,
          text: "Mental Health Scores Before COVID-19"
        }
      }
    }
  } 
 } )