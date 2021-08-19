function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
var dia = [];
var calorias = [];
var bpm = [];
var distance = [];
function main(){
    data = fazGet("http://localhost:3333/dados")
    meusDados = JSON.parse(data);
    console.log(meusDados)

    meusDados.map(function(meusDados,i){
        calorias[i] = meusDados.kcal
        return calorias[i]
    })

    meusDados.map(function(meusDados,i){
        dia[i] = meusDados.date
        return dia[i]
    })

    meusDados.map(function(meusDados,i){
        bpm[i] = meusDados.heartRate
        return bpm[i]
    })
    meusDados.map(function(meusDados,i){
        distance[i] = meusDados.distance
        return distance[i]
    })
    kcalMean=d3.mean(calorias).toFixed(2)
}
main()

let primeiroGrafico = document.getElementById('primeiroGrafico').getContext('2d');
let chart = new Chart(primeiroGrafico,{
    type: "line",
    data:{
        labels:dia,

        datasets:[{
            label:"Gasto calórico",
            data: calorias,
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

let segundoGrafico = document.getElementById('segundoGrafico').getContext('2d');
let chart2 = new Chart(segundoGrafico,{
    type: "bar",
    data:{
        labels:dia,

        datasets:[{
            label:"Distância Percorrida",
            data: distance,
            backgroundColor:"#8587DC",
            borderColor: 'black',
            borderWidth: 2,
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
let heartRate = document.getElementById('heartRate').getContext('2d');
let chart3 = new Chart(heartRate,{
    type: "line",
    data:{
        labels:dia,

        datasets:[{
            label:"Heart rate",
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
        labels:dia,

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
let donut1 = document.getElementById('donut1').getContext('2d');
let donut11 = new Chart(donut1,{
    type: 'doughnut',
    data: {
        labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
        datasets: [{
          label: 'My First Dataset',
          data: [800, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
    },
    options: {
        legend: {
            display: false
         },
    }
})

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
})


let briefChart = document.getElementById('briefChart').getContext('2d');
let briefChart2 = new Chart(briefChart,{
    type: "bar",
    data:{
        labels:["segunda", "terça", "quarta", "quinta" , "sexta" , "sábado", "domingo"],

        datasets:[{
            type: "bar",
            label:"Distância Percorrida",
            data: bpm,
            backgroundColor:"#8587DC",
        },{
            type:'line',
            label: 'opaa',
            data: calorias
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