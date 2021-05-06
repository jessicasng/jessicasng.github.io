
const barData = [ 0.03457571779,0.06413109934 , 0, 0, 0, 0, 0, 0]; 

const normalData = [ 0.03457571779,0.06413109934, 0.1064415579, 0.2101026209, 0.2659083333, 0.2101026209, 0.1064415579, 0.03457571779 ];


const normalCanvas = document.querySelector('#normal');

const normalChart = new Chart(normalCanvas, {
  type: 'bar',
  data: {
    labels: [-2, -1.598, -1, 0, 1, 2, 3, 4],
    datasets: [
      { 
        type: 'bar',
        label: "Calculated area" ,
        data: barData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)', 
      }, 
      {
        type:'line',
        label: 't(18)',
        data: normalData,
        borderColor: 'rgb(54, 162, 235)'
      }
    ]
  }, 
   options: {
    scales: {
      y: {
        title: {
          display: true,
          text: " "
        }
      },
      x:{
        title: {
          display: true,
          text: "t value "
        }
      }
    }
  }
})

