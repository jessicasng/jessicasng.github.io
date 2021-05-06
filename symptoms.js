  const symptomsCanvas = document.querySelector('#symptoms');
  const symptomsChart = new Chart(symptomsCanvas, {
    type: 'bar',  
    data: {
      labels: ['trouble eating/eating more', 'trouble sleeping/sleeping more', 'recurring ideas of death/suicide', 'depressed mood for more than 2 weeks', 'easily agitated', 
      'feeling worthless',
      'decrease interest in activities',
       'no symptoms', 
       'other'],
      datasets: [{
          label: 'total # of responses',
          data: [78, 109, 48, 72, 120, 107, 104, 36, 35],
      backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink','violet', 'teal'],
      borderWidth: 1,
      borderColor: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink','violet', 'teal'],
      }],
    },
    options: {
      indexAxis: 'y',
    }
  });        