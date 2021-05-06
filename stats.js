const statsScatterplotData = [{
  x: 8, 
  y: 7
}, {
  x: 9, 
  y: 8
}, {
  x: 5, 
  y: 3
}, {
  x: 7, 
  y: 3
}, {
  x: 10, 
  y: 8
}, {
  x: 9, 
  y: 7
}, {
  x: 9, 
  y: 7
}, {
  x: 7, 
  y: 6
}, {
  x: 7, 
  y: 8
}, {
  x: 8, 
  y: 7
}, {
  x: 8, 
  y: 7
}, {
  x: 8, 
  y: 6
}, {
  x: 3, 
  y: 3
}, {
  x: 8, 
  y: 5
}, {
  x: 6, 
  y: 8
}, {
  x: 9, 
  y: 9
}, {
  x: 10, 
  y: 8
}, {
  x: 6, 
  y: 5
}, {
  x: 7, 
  y: 6
}, {
  x: 9, 
  y: 4
}, {
  x: 8, 
  y: 4
}] ; 

const statsLineData = [1.135, 1.7883, 2.4416, 3.0949, 3.7482, 4.4015, 5.0548, 5.7081, 6.3614, 7.0147, 7.668]; 

const statsCanvas = document.querySelector('#randomStats');

// const statsChart = new Chart(statsCanvas, {
//   type: 'scatter',
//  label: "Randomly Chosen Data Points" ,
//  data: statsScatterplotData,
//  borderColor: 'rgb(255, 99, 132)',
//  backgroundColor: 'rgba(255, 99, 132, 0.2)', 
//   }, {
//   type:'line',
//   label: 'Least Square Regression Line ',
//   data: statsLineData,
//   borderColor: 'rgb(54, 162, 235)' 
// }); 

const statsChart = new Chart(statsCanvas, {
  type: 'bar',
  data: {
    labels: [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      { 
        type: 'scatter',
        label: "Randomly Chosen Data Points" ,
        data: statsScatterplotData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)', 
      }, 
      {
        type:'line',
        label: 'Least Square Regression Line ',
        data: statsLineData,
        borderColor: 'rgb(54, 162, 235)'
      }
    ]
  }, 
   options: {
    scales: {
      y: {
        title: {
          display: true,
          text: "Mental Health Scores During COVID-19"
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
})

