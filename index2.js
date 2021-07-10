function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}


function main(){
    data = fazGet("http://localhost:3333/dados")
    usuarios = JSON.parse(data);
    console.log(usuarios)
    console.log(usuarios[2].value)
}
main()

let primeiroGrafico = document.getElementById('primeiroGrafico').getContext('2d');
let chart = new Chart(primeiroGrafico,{
    type: "line",
    data:{
        labels:[]
    }
});