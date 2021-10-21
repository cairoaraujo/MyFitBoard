var day = [];
var calories = [];
var bpm = [];
var distance = [];
var realDailyKcal = 1874;
var dailyKcalGoal = 2600;
var dailyKcalPercentage = realDailyKcal / dailyKcalGoal;

function main(){
    data = doGet("http://localhost:3000/dados")
    myData = JSON.parse(data);

    myData.map(function(myData,i){
        calories[i] = myData.kcal
        return calories[i]
    })

    myData.map(function(myData,i){
        day[i] = myData.date
        return day[i]
    })

    myData.map(function(myData,i){
        bpm[i] = myData.heartRate
        return bpm[i]
    })
    myData.map(function(myData,i){
        distance[i] = myData.distance
        return distance[i]
    })

    kcalMean=d3.mean(calories).toFixed(2)
}
main();

function doGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

let caloriesChart = document.getElementById('caloriesChart').getContext('2d');
let chart = new Chart(caloriesChart,{
    type: "line",
    data:{
        labels:day,

        datasets:[{
            label:"Gasto calórico",
            data: calories,
            backgroundColor:"#8587DC",
        }]
    },
    options:{

        plugins:{
            legend:{
                labels:{
                    font:{
                        size:20
                    }
                }
            },
            title:{
                display: true,
                text:"IHUUU"
            }
        }
    }
});

let distanceChart = document.getElementById('distanceChart').getContext('2d');
let chart2 = new Chart(distanceChart,{
    type: "bar",
    data:{
        labels:day,

        datasets:[{
            label:"Distância Percorrida",
            data: distance,
            backgroundColor:"#8587DC",
            borderColor: '#8587DC',
            borderWidth: 1,
            borderRadius: Number.a,
        }]
    },
    options:{

        plugins:{
            legend:{
                labels:{
                    font:{
                        size:20
                    }
                }
            },
            title:{
                display: true,
                text:"IHUUU"
            }
        }
    }
});
let heartChart = document.getElementById('heartChart').getContext('2d');
let chart3 = new Chart(heartChart,{
    type: "line",
    data:{
        labels:day,

        datasets:[{
            label:"BPM",
            data: bpm,
            backgroundColor: 'rgba(133, 135, 220, 0.4)',
            borderColor: '#8587DC',
            borderWidth: 2,
            borderRadius: 5,
        }]
    },
    options: {
        animations: {
          tension: {
            duration: 100,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
    
      }

});
let heartRate2 = document.getElementById('heartRate2').getContext('2d');
let chart4 = new Chart(heartRate2,{
    type: "line",
    data:{
        labels:day,

        datasets:[{
            label:"Heart rate",
            data: bpm,
            backgroundColor: 'rgba(133, 135, 220, 0.4)',
            borderColor: '#8587DC'
        }]
    },
    options: {
        animations: {
          tension: {
            duration: 100,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
    
      }

});
/*let donut1 = document.getElementById('donut1').getContext('2d');
let donut11 = new Chart(donut1,{
    type: 'doughnut',
    data: {
        labels: [
            'Red',
            'Blue',
          ],
        datasets: [{
          label: 'My First Dataset',
          data: [800, 1000],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(229, 229, 229)'
          ],
          hoverOffset: 4
        }]
    },
    options: {
        legend: {
            display: false
         },
    }
})*/

/*let donut2 = document.getElementById('donut2').getContext('2d');
let donut22 = new Chart(donut2,{
    type: 'doughnut',
    data: {
        labels: [
            'Red',
            '#F0000',
            'Yellow'
          ],
        datasets: [{
          label: 'My First Dataset',
          data: [kcalMean,1000],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(238, 238, 238)',
          ],
          borderColor: 'rgba(238, 238, 238, 1)',
          hoverOffset: 4
        }]
    },
    options: {
        legend: {
            display: false
         },
        elements: {
            center: {
                text: 'Red is 2/3 of the total numbers',
                color: '#FF6384', // Default is #000000
                fontStyle: 'Arial', // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
            }
        },
        rotation: (-0.5 * Math.PI) 
    }
})*/

/*let donut3 = document.getElementById('donut3').getContext('2d');
let donut33 = new Chart(donut3,{
    type: 'pie',
    data: {
        labels: [
            'Carboidratos',
            'Proteínas',
            'Gorduras'
          ],
        datasets: [{
          label: 'My First Dataset',
          data: [680,760,855],
          backgroundColor: [
            'rgb(145,224,40)',
            'rgb(242,18,39)',
            'rgb(68,42,30)',
          ],
          borderColor: 'rgba(238, 238, 238, 1)',
          hoverOffset: 4
        }]
    },
    options: {
        legend: {
            display: true,
            position: "right",
            align: "end"
         },
        elements: {
            center: {
                text: 'Red is 2/3 of the total numbers',
                color: '#FF6384', // Default is #000000
                fontStyle: 'Arial', // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
            }
        },
        rotation: (-0.5 * Math.PI) 
    }
})*/


let briefChart = document.getElementById('briefChart').getContext('2d');
let briefChart2 = new Chart(briefChart,{
    type: "bar",
    data:{
        labels:["Seg", "Ter", "Qua", "Qui" , "Sex" , "Sáb", "Dom"],

        datasets:[{
            type: "bar",
            label:"Distância Percorrida",
            data: distance,
            backgroundColor:"#8587DC",
        },{
            type:'line',
            label: 'calories',
            data: calories,
            backgroundColor:"#FA70A1",
        }]
    },
    
    options:{

        plugins:{
            legend:{
                labels:{
                    font:{
                        size:20
                    }
                }
            },
            title:{
                display: true,
                text:"IHUUU"
            }
        }
    }
});

Array.prototype.findMaxValue = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.findMinValue = function() {
    return Math.min.apply(null, this);
  };
//realDailyKcal = 1800;
//dailyKcalGoal = 2600;
$('#circle').circleProgress({
    value: dailyKcalPercentage,
    startAngle: -1.55,
    size: 250,
    fill: {
        gradient: ['#0681c4','#4ac5f8']
    }
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    console.log(stepValue);
    $(this).find('strong').text(realDailyKcal.toFixed(0).substr(0)+"/" + dailyKcalGoal + '\n' +'kcal');
  });

  alert(distance.findMaxValue())