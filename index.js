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

    console.log(calorias)
    console.log(dia)
    console.log(bpm)
    console.log(distance)
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
            backgroundColor:"#8587DC"
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
    type: "line",
    data:{
        labels:dia,

        datasets:[{
            label:"Distância Percorrida",
            data: distance,
            backgroundColor:"#8587DC"
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

let chart3 = new Chart(heartRate,{
    type: "line",
    data:{
        labels:dia,

        datasets:[{
            label:"Heart rate",
            data: bpm,
            backgroundColor:"#ACADFF"
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