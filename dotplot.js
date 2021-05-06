const dotplotCanvas = document.querySelector('#dotplot');


const data = {
  datasets: [{
    label: 'Residuals',
    data: [{
      x: -3.015,
      y: 1
    }, {
      x: -2.708,
      y: 1
    }, {
      x: -2.361,
      y: 1
    }, {
      x: -1.401,
      y: 1
    }, {
      x: -1.361,
      y: 2
    }, {
      x: -0.361,
      y: 1
    }, {
      x: -0.095,
      y: 1
    }, {
      x: -0.055,
      y: 2
    }, {
      x: -0.015,
      y: 1
    }, {
      x: 0.292,
      y: 1
    }, {
      x: 0.292,
      y: 2
    }, {
      x: 0.332,
      y: 3
    }, {
      x: 0.332,
      y: 4
    }, {
      x: 0.639,
      y: 1
    }, {
      x: 0.639,
      y: 1
    }, {
      x: 0.639,
      y: 3
    }, {
      x: 0.985,
      y: 1
    }, {
      x: 1.985,
      y: 1
    }, {
      x: 2.292,
      y: 1
    }, {
      x: 2.945,
      y: 1
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }],
};

const dotplot = new Chart(dotplotCanvas, {
  type: 'scatter',
  data: data,
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: "Residual Value"
        }
      },
      y: {
        type: 'linear',
        position: 'bottom',  
        title: {
          display: true, 
          text: "Number of times Residual Value Appears"
      }


      }
  }
}
});
