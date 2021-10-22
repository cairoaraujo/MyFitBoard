var day = [];
var calories = [];
var weight = [];
var bpm = [];
var distance = [];
var realDailyKcal = 1874;
var dailyKcalGoal = 2600;
var dailyKcalPercentage = realDailyKcal / dailyKcalGoal;
var dayWithWeight = [];
var count = -1;
var count2 = -1;

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
        if (myData.weight != null || myData.weight != undefined){
            count ++;
            weight[count] = myData.weight;
            return weight[count]
        }
    })

    myData.map(function(myData,i){
        bpm[i] = myData.heartRate
        return bpm[i]
    })
    myData.map(function(myData,i){
        distance[i] = myData.distance
        return distance[i]
    })

    myData.map(function(myData, i){
        if (myData.weight != null || myData.weight != undefined){
            count2++;
            dayWithWeight[count2] = myData.date;
            console.log(count2)
            return dayWithWeight[count2];
        }
    })
    console.log(dayWithWeight)
    console.log(weight)
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
            backgroundColor:"#7ED321",
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
            backgroundColor:"#FFB54F",
            borderColor: '#FFB54F',
            borderWidth: 5,
            borderRadius: Number.a,
            barThickness: 100
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
            }
        }
    }
});
let heartChart = document.getElementById('heartChart').getContext('2d');
let chart3 = new Chart(heartChart,{
    type: "bar",
    data:{
        labels:day,

        datasets:[{
            label:"BPM",
            data: bpm,
            backgroundColor: '#FA70A1',
            borderColor: 'red',
            borderWidth: 1,
            borderRadius: 5,
        }]
    },
    options: {
        animations: {
          tension: {
            duration: 5000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
    
      }

});
let weightChart = document.getElementById('weightChart').getContext('2d');
let chart4 = new Chart(weightChart,{
    type: "line",
    data:{
        labels:dayWithWeight,

        datasets:[{
            label:"Peso",
            data: weight,
            backgroundColor: '#6882FE',
            borderColor: 'rgb(255,0,0)',
            fill: true,
        }]
    },
    options: {
        animations: {
          tension: {
            duration: 1000,
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

let donut3 = document.getElementById('donut3').getContext('2d');
let donut33 = new Chart(donut3,{
    type: 'pie',
    data: {
        labels: [
            'Carboidratos',
            'Proteínas',
            'Gorduras'
          ],
        datasets: [{
          data: [680,760,855],
          backgroundColor: [
            '#48C3F7',
            '#FA70A1',
            '#6882FE',
          ],
          fontColor: "#ffffff",
          borderColor: '#ffffff',
          hoverOffset: 4
        }]
    },
    options: {
        legend: {
            display: true,
            position: "right",
            align: "end",
            color: 'rgb(255, 99, 132)',
            labels:{
                font:{
                    size:20
                }
            }
         },
        elements: {
            center: {
                text: 'Red is 2/3 of the total numbers',
                color: 'rgb(255, 99, 132)', // Default is #000000
                fontStyle: 'Noto Sans', // Default is Arial
                sidePadding: 10, // Default is 20 (as a percentage)
                minFontSize: 55, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 15 // Default is 25 (in px), used for when text wraps
            }
        },
        rotation: (-0.5 * Math.PI) 
    }
})


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
    $(this).find('strong').text(realDailyKcal.toFixed(0).substr(0)+" / " + dailyKcalGoal + '\n' +'kcal');
  });

  function maxDistance(){
      var val = distance.findMaxValue().toFixed(2);
      document.getElementById("distanceRecord").innerHTML = "  " + val + " km";
  };
  maxDistance();

  function maxKcal(){
      var val = calories.findMaxValue().toFixed(0);
      document.getElementById("kcalRecord").innerHTML = "  " + val + " kcal";
  }
  maxKcal();

  function maxBpm(){
      var val = bpm.findMaxValue().toFixed(0);
      document.getElementById("bpmRecord").innerHTML = "  " + val + " BPM ";
  }
  maxBpm();
