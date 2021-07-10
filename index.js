function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
var dia = [];
var calorias = [];
function main(){
    data = fazGet("http://localhost:3333/dados")
    meusDados = JSON.parse(data);
    console.log(meusDados)

    meusDados.map(function(meusDados,i){
        calorias[i] = meusDados.value
        return calorias[i]
    })

    meusDados.map(function(meusDados,i){
        dia[i] = meusDados.Data
        return dia[i]
    })
    console.log(calorias)
    console.log(dia)
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
            backgroundColor:"#e35252"
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